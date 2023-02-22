---
authors: [xiangcheng.kuo]
tags: [springdoc, spring]
---

# 在`springdoc-v2`中在不配置`@ParameterObject`的情况下实现Pageable以及Sort对象到API参数的转换

## 介绍

`springdoc`是一个可以快速生成`API`文档的第三方公共库, 并提供了`UI`页面以供访问.<br/>
同时它也提供了`spring-webmvc`中的`handler`中的复杂对象到`API`参数的映射, 这是一个将复杂对象的内部值映射到`API`参数上的功能.
官方要求需要使用`@ParameterObject`来进行修饰.<br/>
对于`spring-data-commons`中的`Pageable`和`Sort`, `springdoc`提供了开箱即用的功能, 只需要在配置文件中启用即可<br/>

```yaml title="application.yml"
springdoc:
  model-converters:
    pageable-converter:
      enabled: true
```

对于已经存在的项目, 当刚引入`springdoc`时, 需要配置大量的`@ParameterObject`注解以实现参数转换功能.<br/>
这个过程通常比较繁琐, 因为对于一个具有一定规模的项目而言, 其对外提供的`API`往往会非常多,
需要进行大量的修改功能才能实现该功能<br/>
那么此时我们需要一种解决方案, 即如何在不配置`@ParameterObject`的情况下实现`Pageable`以及`Sort`对象到API参数的转换

## 思路

### @ParameterObject

> 在`springdoc`中, `@ParameterObject`注解的获取是来自于`spring-webmvc`中的`HandlerMethod`对象,

### HandlerMethod

这个对象是我们在`Controller`中声明的`Handler`的抽象, 它主要保存了我们声明的`Handler`的一些元信息. <br/>
它的`MethodParameter[] parameters`属性包含了该方法的所有参数的信息.<br/>

### MethodParameter

`MethodParameter`对象的`Annotation[] parameterAnnotations`属性包含了该参数的所有注解.<br/>
我们可以尝试修改`Annotation[] parameterAnnotations`属性以实现动态添加`@ParameterObject`注解的功能.<br/>

### HandlerMapping

我们不能直接从`spring`容器中获取到`MethodHandler`, 因为其是保存在`HandlerMapping`中的, `HandlerMapping`
可以从容器中获取到.<br/>

### BeanPostProcessor

`spring`中提供了`BeanPostProcess`机制, 主要实现了对`Bean`的创建进行拦截处理.<br/>
我们可以实现`BeanPostProcessor`来对`HandlerMapping`中的`MethodHandler`中的`MethodParameter`的`parameterAnnotations`
进行修改以实现追加`@ParameterObject`注解

## 解决方案

### 新增`AppendSpringdocAnnotationBeanPostProcessor`用于实现增加`@ParameterObject`注解的能力

```kotlin title="AppendSpringdocAnnotationBeanPostProcessor.kt"
/**
 * We must add @ParameterObject annotation to Pageable and Sort parameter to ensure that springdoc can generate correct.
 * But declaring @ParameterObject in the controller method is not a good idea, because it will take some time to.
 * So we can use this class to avoid declaring @ParameterObject on method parameter which type is Pageable or Sort.
 *
 * @author Xiangcheng.Kuo
 * @see org.springdoc.core.annotations.ParameterObject
 * @see <a href="https://springdoc.org/v2/#how-can-i-map-pageable-spring-data-commons-object-to-correct-url-parameter-in-swagger-ui">13.22. How can I map Pageable (spring-data-commons) object to correct URL-Parameter in Swagger UI?</a>
 */
internal class AppendSpringdocAnnotationBeanPostProcessor : BeanPostProcessor {

	override fun postProcessAfterInitialization(bean: Any, beanName: String): Any {
		if (bean !is AbstractHandlerMethodMapping<*>) {
			return bean
		}
		bean.handlerMethods?.forEach { (_: Any, handlerMethod: HandlerMethod) ->
			handlerMethod
				.methodParameters
				.filter {
					Pageable::class.java.isAssignableFrom(it.parameterType) || Sort::class.java.isAssignableFrom(it.parameterType)
				}.forEach { methodParameter: MethodParameter ->
					addAnnotationForParameter(methodParameter)
				}
		}
		return bean
	}

	private fun addAnnotationForParameter(methodParameter: MethodParameter) {
		val parameterAnnotationsField =
			FieldUtils.getDeclaredField(MethodParameter::class.java, "parameterAnnotations", true)
		val annotations: MutableList<Annotation> =
			((parameterAnnotationsField[methodParameter] as Array<Annotation>?)
				?: emptyArray<Annotation>()).toMutableList()

		if (annotations.stream().anyMatch(ParameterObject::class::isInstance)) {
			return
		}

		annotations.add(FakeParameterObject.create())
		parameterAnnotationsField[methodParameter] = annotations.toTypedArray()
	}

}
```

### 新增`@ParameterObject`的实现类, 由于`kotlin`不支持继承`annotation`, 需要新建`java`类来继承`annotation`

```java title="FakeParameterObject.java"
/**
 * Avoid the following kotlin compile error
 * This type has a constructor, and thus must be initialized here
 * This type is final, so it cannot be inherited from
 *
 * @author Xiangcheng.Kuo
 * @see <a href="https://stackoverflow.com/questions/51608924/implement-inherit-extend-annotation-in-kotlin">Implement (/inherit/~extend) annotation in Kotlin</a>
 */
public class FakeParameterObject implements ParameterObject {

	@Override
	public Class<? extends Annotation> annotationType() {
		return FakeParameterObject.class;
	}

	public static ParameterObject create() {
		return new FakeParameterObject();
	}

}
```

### 新增Configuration, 将`AppendSpringdocAnnotationBeanPostProcessor`添加到容器中

```kotlin title="ApidocAutoConfiguration.kt"
/**
 * @author Xiangcheng.Kuo
 */
@Configuration
internal class ApidocAutoConfiguration {

	@Bean
	@ConditionalOnProperty(Constants.SPRINGDOC_ENABLED, matchIfMissing = true)
	fun appendSpringdocAnnotationBeanPostProcessor(): BeanPostProcessor =
		AppendSpringdocAnnotationBeanPostProcessor()

}
```

## 备注

### 反射

该解决方法是基于反射的, 并且在`spring`的`BeanPostProcessor`中修改了`MethodParameter`的`parameterAnnotations`属性.
该属性可能会在`spring`的其他地方被使用, 因此可能会引起一些不可预知的问题.

### `springdoc`应该在生产环境中关闭

在生产环境中, 不应该开启`springdoc`, 因为这会暴露`swagger`的`api`文档, 从而导致`api`文档泄露,

使用`spring`中提供的`profile`功能以实现在开发模式下开启`springdoc`, 生产模式下关闭`springdoc`

```yaml title="application.yml"
springdoc:
  api-docs:
    enabled: false
  model-converters:
    pageable-converter:
      enabled: true
```

```yaml title="application-dev.yml"
springdoc:
  api-docs:
    enabled: true
  model-converters:
    pageable-converter:
      enabled: true
```

## 参考

### springdoc-v2

- [springdoc v2](https://springdoc.org/v2/)
- [13.22. How can I map Pageable (spring-data-commons) object to correct URL-Parameter in Swagger UI?](https://springdoc.org/v2/#how-can-i-map-pageable-spring-data-commons-object-to-correct-url-parameter-in-swagger-ui)
- [13.61. How can I extract fields from parameter object ?](https://springdoc.org/v2/#how-can-i-extract-fields-from-parameter-object)

### spring

- [Class HandlerMethod](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/method/HandlerMethod.html)
- [Class MethodParameter](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/core/MethodParameter.html)
- [Interface HandlerMapping](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/servlet/HandlerMapping.html)
- [Interface BeanPostProcessor](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/beans/factory/config/BeanPostProcessor.html)

### kotlin

- [Implement (/inherit/~extend) annotation in Kotlin](https://stackoverflow.com/questions/51608924/implement-inherit-extend-annotation-in-kotlin)
