---
authors: [ orange ]
tags: [ troubleshooting, spring-cloud, spring-cloud-openfeign, openfeign ]
---

# 升级框架后发现Feign调用失败时间格式化问题的排查和解决

升级内部框架版本后，发现Feign调用失败，报错如下：

```log
Failed to convert value of type 'java.lang.String' to required type 'java.time.ZonedDateTime'; 
nested exception is org.springframework.core.convert.ConversionFailedException: 
	Failed to convert from type [java.lang.String] to type [@org.springframework.web.bind.annotation.RequestParam @org.springframework.format.annotation.DateTimeFormat java.time.ZonedDateTime] for value '2023/12/18 02:57'; 
	nested exception is java.lang.IllegalArgumentException: Parse attempt failed for value [2023/12/18 02:57]
```

客户端伪代码如下:

```java
public interface FeignClient {

	@GetMapping("/")
	List<PlatformStandardOrderDto> test(
			@RequestParam ZonedDateTime startTime,
			@RequestParam ZonedDateTime endTime
	);

}
```

这个问题的现象是Feign调用时参数中的`ZonedDatetime`类型的时间格式化的结果服务端无法解析

<!--truncate-->

## 问题原因

> 框架升级前后内部的时间格式化行为发生了变化导致这个问题的出现.<br/>
> 在早期框架中我们自定义了一个`SpringMvcContract`.

```kotlin
@Bean
@Primary
fun contract(mapper: ObjectMapper, discoverer: DefaultParameterNameDiscoverer): Contract =
	SpringMvcContract(
		listOf(
			EntityFiltersMappingParameterProcessor(mapper, discoverer),
			MatrixVariableParameterProcessor(),
			RequestHeaderParameterProcessor(),
			PathVariableParameterProcessor(),
			RequestPartParameterProcessor(),
			QueryMapParameterProcessor()
		)
	)
```

> `SpringMvcContract`够帮助我们实现Feign的注解参数的解析(例如`@RequestParam`, `@PathVariable`)

> 框架升级前的行为:<br/>
> 由于框架升级前的代码没有为`SpringMvcContract`配置`ConversionService`, 所以`SpringMvcContract`无法处理`ZonedDateTime`
> 从而导致触发了Feign的默认行为也就是调用参数的`toString`方法来将参数转为String, 对于`ZonedDateTime`类型的参数,
> 调用`toString`方法, 生成的字符串格式为`iso-8601`格式, 例如`2023-12-18T02:57:00+08:00[Asia/Shanghai]`,
> 这种格式的字符串服务端是可以解析的
>
> 框架升级后的行为:<br/>
> 由于框架内部配置了`ConversionService`, 所以会调用`ConversionService`的`convert`
> 方法来实现将参数的解析, `ConversionService`
> 最终会委托`FormattingConversionService`将`ZonedDateTime`类型的参数转为字符串, 这种情况下,
> 会将时间转为`yyyy/MM/dd HH:mm`格式的字符串, 所以导致了服务端无法解析.

## 解决方案

为参数增加`@DateTimeFormat`注解来指定时间格式化的格式, 例如:

```java
public interface FeignClient {

	@GetMapping("/")
	List<PlatformStandardOrderDto> test(
			@DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) @RequestParam ZonedDateTime startTime,
			@DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) @RequestParam ZonedDateTime endTime
	);

}
```

## 问题排查过程

- 当FeignClient接口的方法被调用时, 会调用`ReflectiveFeign`来委托`MethodHandler`来处理方法调用

```java

@Override
public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
	if ("equals".equals(method.getName())) {
		try {
			Object otherHandler =
					args.length > 0 && args[0] != null ? Proxy.getInvocationHandler(args[0]) : null;
			return equals(otherHandler);
		} catch (IllegalArgumentException e) {
			return false;
		}
	} else if ("hashCode".equals(method.getName())) {
		return hashCode();
	} else if ("toString".equals(method.getName())) {
		return toString();
	}

	return dispatch.get(method).invoke(args);
}
```

其中`dispatch`是用来保存方法名称和`MethodHandler`的映射关系的, `MethodHandler`是用来处理方法调用(
当前的实现中`MethodHandler`是`SynchronousMethodHandler`)

- MethodHandler内部的invoke执行流程如下:

```java

@Override
public Object invoke(Object[] argv) throws Throwable {
	RequestTemplate template = buildTemplateFromArgs.create(argv);
	Options options = findOptions(argv);
	Retryer retryer = this.retryer.clone();
	while (true) {
		try {
			return executeAndDecode(template, options);
		} catch (RetryableException e) {
			try {
				retryer.continueOrPropagate(e);
			} catch (RetryableException th) {
				Throwable cause = th.getCause();
				if (propagationPolicy == UNWRAP && cause != null) {
					throw cause;
				} else {
					throw th;
				}
			}
			if (logLevel != Logger.Level.NONE) {
				logger.logRetry(metadata.configKey(), logLevel);
			}
			continue;
		}
	}
}
```

上述代码中我们需要关心的是`buildTemplateFromArgs.create(argv);`这一行,
这一行代码会根据方法的参数来构建`RequestTemplate`,
`RequestTemplate`是用来保存请求的信息的, 例如请求的URL, 请求的方法,
请求的参数等等, 只要知道了`RequestTemplate`中对应参数的构造过程那么我们就可以知道Feign是如何将参数转为请求的参数的了

- `buildTemplateFromArgs.create(argv);`的具体实现如下:

```java

@Override
public RequestTemplate create(Object[] argv) {
	RequestTemplate mutable = RequestTemplate.from(metadata.template());
	mutable.feignTarget(target);
	if (metadata.urlIndex() != null) {
		int urlIndex = metadata.urlIndex();
		checkArgument(argv[urlIndex] != null, "URI parameter %s was null", urlIndex);
		mutable.target(String.valueOf(argv[urlIndex]));
	}
	Map<String, Object> varBuilder = new LinkedHashMap<String, Object>();
	for (Entry<Integer, Collection<String>> entry : metadata.indexToName().entrySet()) {
		int i = entry.getKey();
		Object value = argv[entry.getKey()];
		if (value != null) { // Null values are skipped.
			if (indexToExpander.containsKey(i)) {
				value = expandElements(indexToExpander.get(i), value);
			}
			for (String name : entry.getValue()) {
				varBuilder.put(name, value);
			}
		}
	}

	RequestTemplate template = resolve(argv, mutable, varBuilder);
	if (metadata.queryMapIndex() != null) {
		// add query map parameters after initial resolve so that they take
		// precedence over any predefined values
		Object value = argv[metadata.queryMapIndex()];
		Map<String, Object> queryMap = toQueryMap(value);
		template = addQueryMapQueryParameters(queryMap, template);
	}

	if (metadata.headerMapIndex() != null) {
		template =
				addHeaderMapHeaders((Map<String, Object>) argv[metadata.headerMapIndex()], template);
	}

	return template;
}


```

上述代码中我们需要关注的是这个语句

```log
if (value != null) { // Null values are skipped.
	if (indexToExpander.containsKey(i)) {
		value = expandElements(indexToExpander.get(i), value);
	}
	for (String name : entry.getValue()) {
		varBuilder.put(name, value);
	}
}

private Object expandElements(Expander expander, Object value) {
	if (value instanceof Iterable) {
		return expandIterable(expander, (Iterable) value);
	}
	return expander.expand(value);
}
```

这个语句会将参数转为`RequestTemplate`中的参数, `Expander`是`Feign`中的一个接口, 用来将参数转为字符串,
而`indexToExpander`表达的是参数的索引和`Expander`的映射关系,
在我们的`Case`中实际上是没有走到`indexToExpander`的, 所以最终会直接调用`varBuilder.put(name, value);`这一行,
这一行会将参数转为`RequestTemplate`中的参数,
后续需要将参数值转为字符串, 所以还需要了解`RequestTemplate`中的参数是如何转为字符串的,
所以需要查看`RequestTemplate template = resolve(argv, mutable, varBuilder);`
这一段调用的resolve方法, 具体实现如下:

```log
protected RequestTemplate resolve(Object[] argv,
								  RequestTemplate mutable,
								  Map<String, Object> variables) {
	return mutable.resolve(variables);
}
```

- 接下来需要查看`RequestTemplate`中的`resolve`方法的实现, 具体实现如下:

```java
public RequestTemplate resolve(Map<String, ?> variables) {

	StringBuilder uri = new StringBuilder();

	/* create a new template form this one, but explicitly */
	RequestTemplate resolved = RequestTemplate.from(this);

	if (this.uriTemplate == null) {
		/* create a new uri template using the default root */
		this.uriTemplate = UriTemplate.create("", !this.decodeSlash, this.charset);
	}

	String expanded = this.uriTemplate.expand(variables);
	if (expanded != null) {
		uri.append(expanded);
	}

	/*
	 * for simplicity, combine the queries into the uri and use the resulting uri to seed the
	 * resolved template.
	 */
	if (!this.queries.isEmpty()) {
		/*
		 * since we only want to keep resolved query values, reset any queries on the resolved copy
		 */
		resolved.queries(Collections.emptyMap());
		StringBuilder query = new StringBuilder();
		Iterator<QueryTemplate> queryTemplates = this.queries.values().iterator();

		while (queryTemplates.hasNext()) {
			QueryTemplate queryTemplate = queryTemplates.next();
			String queryExpanded = queryTemplate.expand(variables);
			if (Util.isNotBlank(queryExpanded)) {
				query.append(queryExpanded);
				if (queryTemplates.hasNext()) {
					query.append("&");
				}
			}
		}

		String queryString = query.toString();
		if (!queryString.isEmpty()) {
			Matcher queryMatcher = QUERY_STRING_PATTERN.matcher(uri);
			if (queryMatcher.find()) {
				/* the uri already has a query, so any additional queries should be appended */
				uri.append("&");
			} else {
				uri.append("?");
			}
			uri.append(queryString);
		}
	}

	/* add the uri to result */
	resolved.uri(uri.toString());

	/* headers */
	if (!this.headers.isEmpty()) {
		/*
		 * same as the query string, we only want to keep resolved values, so clear the header map on
		 * the resolved instance
		 */
		resolved.headers(Collections.emptyMap());
		for (HeaderTemplate headerTemplate : this.headers.values()) {
			/* resolve the header */
			String header = headerTemplate.expand(variables);
			if (!header.isEmpty()) {
				/* split off the header values and add it to the resolved template */
				String headerValues = header.substring(header.indexOf(" ") + 1);
				if (!headerValues.isEmpty()) {
					/* append the header as a new literal as the value has already been expanded. */
					resolved.header(headerTemplate.getName(), Literal.create(headerValues));
				}
			}
		}
	}

	if (this.bodyTemplate != null) {
		resolved.body(this.bodyTemplate.expand(variables));
	}

	/* mark the new template resolved */
	resolved.resolved = true;
	return resolved;
}
```

上述代码比较长, 我们需要关注的是这一段:

```log
	if (!this.queries.isEmpty()) {
      /*
       * since we only want to keep resolved query values, reset any queries on the resolved copy
       */
      resolved.queries(Collections.emptyMap());
      StringBuilder query = new StringBuilder();
      Iterator<QueryTemplate> queryTemplates = this.queries.values().iterator();

      while (queryTemplates.hasNext()) {
        QueryTemplate queryTemplate = queryTemplates.next();
        String queryExpanded = queryTemplate.expand(variables);
        if (Util.isNotBlank(queryExpanded)) {
          query.append(queryExpanded);
          if (queryTemplates.hasNext()) {
            query.append("&");
          }
        }
      }

      String queryString = query.toString();
      if (!queryString.isEmpty()) {
        Matcher queryMatcher = QUERY_STRING_PATTERN.matcher(uri);
        if (queryMatcher.find()) {
          /* the uri already has a query, so any additional queries should be appended */
          uri.append("&");
        } else {
          uri.append("?");
        }
        uri.append(queryString);
      }
    }
```

最终这个语句`String queryExpanded = queryTemplate.expand(variables);`会将参数转为字符串, 所以最终我们得到了参数的字符串形式,
