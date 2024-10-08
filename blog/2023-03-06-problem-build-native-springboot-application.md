---
authors: [ orange ]
tags: [troubleshooting, spring-boot, spring, native-image ]
---

# 使用`spring`构建`native`遇到的问题

本文主要整理了在构建`spring-boot`应用为`native`的过程中遇到的问题.

<!--truncate-->

## 移除`spring-native`依赖, 因为已被`spring-core`提供的`aot`功能取代

`spring-native`已被`spring-core`提供的`aot`功能取代, 所以不需要引入老的`spring-native`依赖.<br/>
在github[spring-native](https://github.com/spring-attic/spring-native)的主页上有如下说明
> This project is now superseded by Spring Boot 3+ official native support, see the related reference documentation for
> more details.

新的`aot`
功能的文档可以参阅[GraalVM Native Image Support](https://docs.spring.io/spring-boot/docs/current/reference/html/native-image.html)<br/>

其内部工作原理主要通过`ReflectiveProcessor`和`RuntimeHintsRegistrar`用来帮助生成反射提示, 并在`graalvm`
编译期间使用.<br/>

## `@RegisterReflectionForBinding`无法集成`querysdl`生成的`Q`类

由于`querydsl`生成的Q类不能放在`@RegisterReflectionForBinding`上(因为编译优先级原因),
则需要重新实现`@RegisterReflectionForBinding`的具体实现逻辑.<br/>
主要是继承`ReflectiveProcessor`并配合`BindingReflectionHintsRegistrar`.<br/>
参考代码:<br/>

```kotlin
class ReflectiveProcessorImpl : ReflectiveProcessor {

	override fun registerReflectionHints(hints: ReflectionHints, element: AnnotatedElement) {
		val function = BindingReflectionHintsRegistrar()::registerReflectionHints.partially1(hints)
		function(
			arrayOf(
				Page::class.java,
				ResponseResult::class.java,
				SignInRequest::class.java,
				SignInResponse::class.java
			)
		)
	}

}
```

## 升级`graalvm`版本

如果使用的`graalvm`版本过于老, 则会出现如下类似的错误

```
GraalVM version 22.3 is required but 22.0 has been detected, please upgrade.
```

为了解决这个问题需要将`graalvm`升级到最新版本

## `paketo`依赖下载失败

通过`./gradlew bootBuildImage`构建镜像时, 输出以下错误

```log
unable to copy from https://github.com/bell-sw/Liberica/releases/download/17.0.5+8/bellsoft-jre17.0.5+8-linux-amd64.tar.gz to /tmp/ee56d911dd187d4965fe2d5280e17b76253eb40eb4e5c8582a17cd46ea0168b1/bellsoft-jre17.0.5+8-linux-amd64.tar.gz
[creator]     stream error: stream ID 1; PROTOCOL_ERROR; received from peer
```

这个问题的原因是因为`paketo`的进行构建过程中会下载一些依赖, 但是这些依赖在国外, 下载速度会变慢, 甚至会下载失败.<br/>

### 解决方案

使用`binding-tool`工具生成`dependency-mapping`到`bindings`并映射到`builder`容器中

### 参考

- [Override paketo-buildpacks download URIs](https://github.com/paketo-buildpacks/bellsoft-liberica/issues/7).<br/>
- [binding-tool](https://github.com/dmikusa/binding-tool)

### 备注

#### `gradle`中`native`相关命令

```bash
./gradlew nativeCompile
./gradlew bootBuildImage
./build/native/nativeCompile/fastone-auditing
```

#### `gradle`中的`BootBuildImage`配置参考

```kotlin title="build.kts"
tasks.withType<BootBuildImage> {
	// https://docs.spring.io/spring-boot/docs/3.0.0/gradle-plugin/reference/htmlsingle/#build-image.examples.caches
	buildCache {
		volume {
			name.set("cache-${rootProject.name}.build")
		}
	}
	launchCache {
		volume {
			name.set("cache-${rootProject.name}.launch")
		}
	}
	publish.set(true)
	docker {
		publishRegistry {
			username.set(System.getenv("HARBOR_USERNAME"))
			password.set(System.getenv("HARBOR_PASSWORD"))
		}
	}

	val labels = System.getenv("LABELS")?.replace(",", " ")

	// https://github.com/paketo-buildpacks/image-labels
	mapOf("SERVICE_BINDING_ROOT" to "/bindings").plus(
		when (labels) {
			null -> emptyMap()
			else -> mapOf("BP_IMAGE_LABELS" to labels)
		}
	).let { environment.set(it) }
	bindings.set(listOf("${project.projectDir}/bindings:/bindings"))
	val formatter = DateTimeFormatter.ofPattern("yyyyMMdd-HHmmss")
	imageName.set("hub.fastonetech.com/infra/${project.name}:${formatter.format(ZonedDateTime.now(ZoneId.of("UTC")))}")
}
```

- [native-image.developing-your-first-application](https://docs.spring.io/spring-boot/docs/current/reference/html/native-image.html#native-image.developing-your-first-application.native-build-tools.gradle)
- [build-image.examples](https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/htmlsingle/#build-image.examples)

#### `binding-tool`使用方式参考

```bash
./bt dm -t buildpack.toml
./bt dm -b paketo-buildpacks/bellsoft-liberica
./bt dm -b paketo-buildpacks/syft
```

- [buildpack.toml](https://raw.githubusercontent.com/paketo-buildpacks/bellsoft-liberica/main/buildpack.toml)

## 固定`builder`和`run`镜像版本以避免经常下载最新版本的`builder`和`run`镜像

在使用`packeto-builder`构建镜像时, 会经常下载最新版本的`paketo`依赖, 这样会导致自定义`dependency-mapping`失效,
从而导致构建失败.<br/>

### 原因

默认情况下会尝试下载最新的`builder`和`run`镜像, 但是这些镜像中包含了`paketo`的依赖, 从而导致下载最新的依赖.<br/>

### 解决方案

为了避免这个问题, 我们需要固定`builder`和`run`镜像的版本, 从而避免下载最新的依赖.<br/>

参考代码如下

```kotlin title="build.kts"
tasks.withType<BootBuildImage> {
	// TO FIX THE VERSION OF BUILDER AND RUN IMAGE to avoid updating it's buildpack version which name is bellsoft
	builder.set("paketobuildpacks/builder@sha256:317066766dcb7f47535fe5d97b860be6aabab57da5ef056a11f9db855a73f9e8")
	runImage.set("paketobuildpacks/run@sha256:e9bae15ccc7e230da6ae6c6cd6eef519b10b5ec2187729f60e70c08415a330a0")
}
```

### 参考

- [Custom Image Builder and Run Image](https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/htmlsingle/#build-image.examples.custom-image-builder)

上面的代码是固定了`builder`和`run`镜像的版本, 从而避免下载最新的依赖.<br/>

## kotlinx-coroutines需要配置反射提示

将含有`kotlinx-coroutines`的`kotlin`代码编译为`native`时, 运行后出现以下错误

```log
java.lang.NoSuchMethodException: kotlin.internal.jdk8.JDK8PlatformImplementations.<init>()
```

### 解决方案

在`classpath`下的`META-INF/native-image/reflect-config.json`文件中增加如下内容用于配置反射提示

```json
[
	{
		"name": "kotlin.reflect.jvm.internal.ReflectionFactoryImpl",
		"allDeclaredConstructors": true
	},
	{
		"name": "kotlin.KotlinVersion",
		"allPublicMethods": true,
		"allDeclaredFields": true,
		"allDeclaredMethods": true,
		"allDeclaredConstructors": true
	},
	{
		"name": "kotlin.KotlinVersion[]"
	},
	{
		"name": "kotlin.KotlinVersion$Companion"
	},
	{
		"name": "kotlin.KotlinVersion$Companion[]"
	},
	{
		"name": "kotlin.internal.jdk8.JDK8PlatformImplementations",
		"allPublicMethods": true,
		"allDeclaredFields": true,
		"allDeclaredMethods": true,
		"allDeclaredConstructors": true
	}
]
```

### 参考

- [How to provide RuntimeHints for Internal Classes in SpringBoot3](https://stackoverflow.com/questions/74612654/how-to-provide-runtimehints-for-internal-classes-in-springboot3)
- [Kotlin: Native reflection config missing kotlin.internal.jdk8.JDK8PlatformImplementations #1646](https://github.com/spring-projects-experimental/spring-native/issues/1646)
- [PlatformImplementations loading is not compatible with graalvm native-image --no-fallback](https://youtrack.jetbrains.com/issue/KT-51579)

## `ktor`库需要配置反射提示

将含有`ktor`的`kotlin`代码编译为`native`后运行过程中出现以下错误

```log
Caused by: java.lang.RuntimeException: java.lang.NoSuchFieldException: top
	at java.util.concurrent.atomic.AtomicLongFieldUpdater$CASUpdater.<init>(AtomicLongFieldUpdater.java:205)
	at java.util.concurrent.atomic.AtomicLongFieldUpdater.newUpdater(AtomicLongFieldUpdater.java:95)
	at io.ktor.utils.io.pool.DefaultPool.<clinit>(DefaultPool.kt:97)
	at com.oracle.svm.core.hub.ClassInitializationInfo.invokeClassInitializer(ClassInitializationInfo.java:350)
	at com.oracle.svm.core.hub.ClassInitializationInfo.initialize(ClassInitializationInfo.java:270)
	... 39 more
Caused by: java.lang.NoSuchFieldException: top
	at java.lang.Class.getDeclaredField(DynamicHub.java:2411)
	at java.util.concurrent.atomic.AtomicLongFieldUpdater$CASUpdater.<init>(AtomicLongFieldUpdater.java:202)
	... 43 more
```

### 解决方案

classpath下的`META-INF/native-image/reflect-config.json`文件增加如下内容用于配置反射提示

```json
[
	{
		"name": "io.ktor.utils.io.pool.DefaultPool",
		"fields": [
			{
				"name": "top",
				"allowUnsafeAccess": true
			}
		]
	}
]
```

### 参考

- [GraalVM native-image support broken due to Payload #77](https://github.com/rsocket/rsocket-kotlin/issues/77)

## 为需要序列化的对象配置反射提示

为了能够让参与序列化的对象能够在`native`环境下正常运行, 需要配置反射提示.

### 解决方案

使用`springframework`中的类提供反射提示, 参考代码如下

```kotlin
class ReflectiveProcessorImpl : ReflectiveProcessor {

	override fun registerReflectionHints(hints: ReflectionHints, element: AnnotatedElement) {
		val function = BindingReflectionHintsRegistrar()::registerReflectionHints.partially1(hints)
		function(
			arrayOf(
				Page::class.java,
				ResponseResult::class.java,
				SignInRequest::class.java,
				SignInResponse::class.java
			)
		)
	}

}

class RuntimeHintsImpl : RuntimeHintsRegistrar {

	override fun registerHints(hints: RuntimeHints, classLoader: ClassLoader?) {
		// Caused by: com.fasterxml.jackson.databind.exc.InvalidDefinitionException: Cannot construct instance of `java.util.HashSet` (no Creators, like default constructor, exist): no default no-arguments constructor found
		// at [Source: (InputStreamReader); line: 1, column: 20] (through reference chain: com.fastonetech.lib.web.ResponseResult["data"]->com.fastonetech.billing.sync.infra.client.Page["content"])
		hints.reflection().registerConstructor(
			ReflectionUtils.accessibleConstructor(java.util.HashSet::class.java),
			ExecutableMode.INVOKE
		)
	}

}

@Reflective(ReflectiveProcessorImpl::class)
@ImportRuntimeHints(RuntimeHintsImpl::class)
class BillingSyncApplication
```

### 参考

- [Annotation Interface Reflective](https://docs.spring.io/spring-framework/docs/current/javadoc-api//org/springframework/aot/hint/annotation/Reflective.html)
- [Annotation Interface ImportRuntimeHints](https://docs.spring.io/spring-framework/docs/current/javadoc-api//org/springframework/context/annotation/ImportRuntimeHints.html)

## 构建出的镜像不是`native`

这个问题的原因是配置了`bootBuildImage`这个`task`中覆盖了环境变量, 导致`BP_NATIVE_IMAGE`为空

### 原始配置

```kotlin
mapOf("SERVICE_BINDING_ROOT" to "/bindings").plus(
	when (labels) {
		null -> emptyMap()
		else -> mapOf("BP_IMAGE_LABELS" to labels)
	}
).let {
	environment.set(it) // ensure BP_NATIVE_IMAGE exists, and it's value is true
}
```

### 解决方案

由于environment.set会覆盖原有的环境变量, 所以需要显式声明`BP_NATIVE_IMAGE`

```kotlin
mapOf("SERVICE_BINDING_ROOT" to "/bindings", "BP_NATIVE_IMAGE" to "true").plus(
	when (labels) {
		null -> emptyMap()
		else -> mapOf("BP_IMAGE_LABELS" to labels)
	}
).let {
	environment.set(it) // ensure BP_NATIVE_IMAGE exists, and it's value is true
}
```

### 参考

- [5.3. Image Customizations下的environment默认值介绍](https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/htmlsingle/)

## `aot`应用运行时调用由`@ConfigurationProperty`注解注释的对象的属性时报错

### 解决方案

对于`ConfigurationProperties`中嵌套的对象加入`@NestedConfigurationProperty`注解进行标识

### 参考

- [Nested Configuration Properties](https://docs.spring.io/spring-boot/docs/current/reference/html/native-image.html#native-image.advanced.nested-configuration-properties)

> Reflection hints are automatically created for configuration properties by the Spring ahead-of-time engine.
> Nested configuration properties which are not inner classes, however, must be annotated with
> @NestedConfigurationProperty, otherwise they won’t be detected and will not be bindable.

## `aot`应用运行时获取`classpath`下的资源时报错

### 解决方案

在`RuntimeHintsRegistrar`的`registerHints`方法中注册静态资源

```kotlin
hints.resources().registerResource(ClassPathResource("ca.crt"))
hints.resources().registerResource(ClassPathResource("client.crt"))
hints.resources().registerResource(ClassPathResource("client.key"))
```

## `aot`应用运行时`@Conditional`注解不生效

spring-boot-native not supported @ConditionalOnProperty yet

### 参考

- [Possibility of @ConditionalOnProperty support on spring-native](https://github.com/spring-projects-experimental/spring-native/issues/1613)

### 参考

- [server.error.include-message](https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html#application-properties.server.server.error.include-message)
- [Error Handling for REST with Spring](https://www.baeldung.com/exception-handling-for-rest-with-spring)