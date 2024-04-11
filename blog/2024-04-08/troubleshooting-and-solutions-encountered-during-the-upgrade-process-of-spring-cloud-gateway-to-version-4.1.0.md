---
authors: [ xiangcheng.kuo ]
tags: [ problem-solving, spring, spring-cloud, spring-cloud-gateway ]
---

# 升级spring-cloud-gateway到4.1.0的过程中遇到的问题的以及对应解决方案

## `spring.cloud.gateway.routes`中定义的转发规则失效, 提示`404 NOT_FOUND "No static resource xxx."`

### 问题原因

这个问题是项目中的类继承了`org.springframework.cloud.gateway.handler.RoutePredicateHandlerMapping`
但是新版本不兼容导致的.<br/>
在新版本中`RoutePredicateHandlerMapping`的`@Bean`定义增加了`@ConditionalOnMissingBean`.<br/>
> 定义位于`org.springframework.cloud.gateway.config.GatewayAutoConfiguration`中.<br/>
> `RoutePredicateHandlerMapping`是`HandlerMapping`的实现, 对于注册到容器中的`HandlerMapping`, `spring-mvc-reactive`
> 会自动调用这些类的方法来尝试处理请求.

由于多出了`@ConditionalOnMissingBean`这会导致框架内置的和自定义的`RoutePredicateHandlerMapping`出现互斥的问题, 即只会被注册一次.

但是由于重写的方法只实现了部分自定义的转发规则, 从而导致`spring.cloud.gateway.routes`中定义的转发规则失效.

3.0.2中的Bean定义如下:

```java

@Bean
public RoutePredicateHandlerMapping routePredicateHandlerMapping(FilteringWebHandler webHandler,
																 RouteLocator routeLocator, GlobalCorsProperties globalCorsProperties, Environment environment) {
	return new RoutePredicateHandlerMapping(webHandler, routeLocator, globalCorsProperties, environment);
}
```

3.4.0中的Bean定义如下:

```java

@Bean
@ConditionalOnMissingBean
public RoutePredicateHandlerMapping routePredicateHandlerMapping(FilteringWebHandler webHandler,
																 RouteLocator routeLocator, GlobalCorsProperties globalCorsProperties, Environment environment) {
	return new RoutePredicateHandlerMapping(webHandler, routeLocator, globalCorsProperties, environment);
}
```

### 解决方案

修改继承类重写的`protected Mono<Route> lookupRoute(ServerWebExchange exchange)`方法的实现, 大致如下:

```java

@Override
protected Mono<Route> lookupRoute(ServerWebExchange exchange) {
	return super.lookupRoute(exchange).switchIfEmpty(Mono.defer(() -> {
			// 此处为自定义的转发规则
		}
	));
}
```