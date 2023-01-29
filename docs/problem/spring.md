# Spring

## BaenUtils会把为null的属性也复制过去

BeanUtils.copyProperties()并不会跳过null属性
而DomainBeanUtils会跳过

```
NodeImage origin = new NodeImage();
		origin.setName("origin");
		origin.setState(NodeImageState.AVAILABLE);
		NodeImage patch = new NodeImage();
		// BeanUtils.copyProperties(patch, origin);
		DomainBeanUtils.copyProperties(patch, origin);
		assertThat(origin.getState()).isEqualTo(NodeImageState.AVAILABLE);
```

在使用BeanUtils情况下会报错

## `spring-data-jpa`空字符串在DB里是否为null?

## `spring-data-jpa`删除Entity时不生效

因为加了一个@SQLDelete导致的

```
@Where(clause = "deleted is null or deleted != true")
@SQLDelete(sql = "update remote_desktop set deleted = true where id = ?")
public class NodeImage extends BaseDomain {
}
```

@SQLDelete(sql = "update remote_desktop set deleted = true where id = ?")
这里的remote_desktop应改为node_image

## `spring-data-jpa`在TestCase里deleteAll不生效，但是deleteAllInBatch可以

```
@BeforeEach
	@Transactional
	public void before() {
		when(securityContextService.currentIsSuperUser()).thenReturn(true);
		Authentication authentication = helper.getAuthentication("admin");
		SecurityContextHolder.getContext().setAuthentication(authentication);
		nodeImageRepository.deleteAllInBatch();
	}
```

## SecurityContext里的authentication是上一次登录帐号的

### 原因

SessionManagement默认打开会导致Session存放上一次认证的SecuriyContext,
若本次颁发的token未插入到SecurityContext则会导致脏数据产生

### 解决方案

应实现SecurityContextRepository而不是自定义Filter

## @SpringBootTest记得标注@Transactional用于数据回滚防止脏数据污染环境

## flyway不工作

compileOnly("org.flywaydb:flyway-core:7.7.3") -> implementation("org.flywaydb:flyway-core:7.7.3")

## FeignClient中Pageable被当作body传输

### 现象

调用FeignClient进行GET且分页请求时发现Pageable被生成为BODY

### 原因

自己定义的SpringEncoder有问题, 没有用PageableSpringEncoder, 导致SpringEncoder认为其是RequestBody并将其生成为body

### 解决方案

采用框架默认的Encoder

### 备注

- 若要支持文件上传, 加入@Headers注解来提醒框架这是文件上传操作
- 另外Spring将停止对Commons.file进行支持, 要及时迁移

## mgmt-api的Duration解析没有和预期匹配

### 现象

ConfigurationProperties对象里配置的Duration对象单位为毫秒

### 原因

SpringBoot内部Duration单位是毫秒, 若不通过@DurationUnit提供的话

### 解决方案

增加Duration单位, 强制制定单位确保行为符合期望

### 备注

#### 调用栈

- `BindConverter`
- `List<ConversionService> delegates`
- `List<Converter> converters`
- `StringToDurationConverter (SpringBoot)`
- `NumberToDurationConverter (SpringBoot) 此处会根据注解去判断单位`
- `DurationStyle.SIMPLE.parse`

## fastone-auditing服务升级springboot3中构建native-image遇到的问题

### javax升级到jakarta

- querydsl依赖变更

```
// https://github.com/querydsl/querydsl/issues/3296
implementation("com.querydsl:querydsl-jpa:5.0.0:jakarta")
kapt("com.querydsl:querydsl-apt:5.0.0:jakarta")
```

- 代码中`javax.persistence`切换到`jakarta.persistence`

### spring-Aot

- spring-native已被springboot3内置的Aot取代, 所以不需要引入老的spring-native依赖
- 通过`ReflectiveProcessor`和`RuntimeHintsRegistrar`用来帮助生成反射提示
- 由于querydsl生成的Q类不能放在`@RegisterReflectionForBinding`上(因为编译优先级原因),
  则需要重新实现@RegisterReflectionForBinding的具体实现逻辑

### graalvm版本过于老, 需要更新到22.3

```
GraalVM version 22.3 is required but 22.0 has been detected, please upgrade.
```

### paketo下载依赖失败

#### 日志

```bash
// unable to copy from https://github.com/bell-sw/Liberica/releases/download/17.0.5+8/bellsoft-jre17.0.5+8-linux-amd64.tar.gz to /tmp/ee56d911dd187d4965fe2d5280e17b76253eb40eb4e5c8582a17cd46ea0168b1/bellsoft-jre17.0.5+8-linux-amd64.tar.gz
// [creator]     stream error: stream ID 1; PROTOCOL_ERROR; received from peer
```

#### 问题原因

https://github.com/paketo-buildpacks/bellsoft-liberica/issues/7

#### binding-tool

使用[binding-tool](https://github.com/dmikusa/binding-tool)工具生成dependency-mapping到bindings并映射到builder容器中

#### binding-tool使用方式

```bash
./bt dm -t buildpack.toml
./bt dm -b paketo-buildpacks/bellsoft-liberica
./bt dm -b paketo-buildpacks/syft
// https://raw.githubusercontent.com/paketo-buildpacks/bellsoft-liberica/main/buildpack.toml
```

### 备注

#### gradle常用命令

```
./gradlew nativeCompile
./gradlew bootBuildImage
./build/native/nativeCompile/fastone-auditing
```

#### *BootBuildImage*

- Example

```
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

- Reference
	- https://docs.spring.io/spring-boot/docs/current/reference/html/native-image.html#native-image.developing-your-first-application.native-build-tools.gradle
	- https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/htmlsingle/#build-image.examples

## 基于spring-aot编译的auditing服务集成fastone-nott-spring-boot-starter出现的问题

### @ConfigurationProperties标识的对象中嵌套的对象不标注@NestedConfigurationProperty在运行期间调用会出现问题

#### 解决方案

对于`ConfigurationProperties`中嵌套的对象加入`@NestedConfigurationProperty`注解进行标识

#### 参考

- [Nested Configuration Properties](https://docs.spring.io/spring-boot/docs/current/reference/html/native-image.html#native-image.advanced.nested-configuration-properties)

> Reflection hints are automatically created for configuration properties by the Spring ahead-of-time engine.
> Nested configuration properties which are not inner classes, however, must be annotated with
> @NestedConfigurationProperty, otherwise they won’t be detected and will not be bindable.

### 运行期间使用到`ClassPath`下的静态资源需要提前声明

#### 解决方案

在`RuntimeHintsRegistrar`的`registerHints`方法中注册静态资源

```kotlin
hints.resources().registerResource(ClassPathResource("ca.crt"))
hints.resources().registerResource(ClassPathResource("client.crt"))
hints.resources().registerResource(ClassPathResource("client.key"))
```

### @ConditionalOnProperty不生效

spring-boot-native not supported @ConditionalOnProperty yet

#### 参考

- [Possibility of @ConditionalOnProperty support on spring-native](https://github.com/spring-projects-experimental/spring-native/issues/1613)

### api接口报错后没有返回异常信息

#### 解决方案

application.yml中增加以下配置

```yaml
server:
  error:
    include-message: always
```

#### 参考

- [server.error.include-message](https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html#application-properties.server.server.error.include-message)
- [Error Handling for REST with Spring](https://www.baeldung.com/exception-handling-for-rest-with-spring)

## fastone-billing-sync服务升级springboot3中构建native-image遇到的问题

### kotlinx-coroutines反射问题

#### 日志

```log
java.lang.NoSuchMethodException: kotlin.internal.jdk8.JDK8PlatformImplementations.<init>()
```

#### 解决方案

classpath下的`META-INF/native-image/reflect-config.json`文件增加如下内容用于配置反射提示

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

#### 参考

- [How to provide RuntimeHints for Internal Classes in SpringBoot3](https://stackoverflow.com/questions/74612654/how-to-provide-runtimehints-for-internal-classes-in-springboot3)
- [Kotlin: Native reflection config missing kotlin.internal.jdk8.JDK8PlatformImplementations #1646](https://github.com/spring-projects-experimental/spring-native/issues/1646)
- [PlatformImplementations loading is not compatible with graalvm native-image --no-fallback](https://youtrack.jetbrains.com/issue/KT-51579)

### ktor反射问题

#### 日志

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

#### 解决方案

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

#### 参考

- [GraalVM native-image support broken due to Payload #77](https://github.com/rsocket/rsocket-kotlin/issues/77)

### ktor-client序列化对象的反射问题

#### 解决方案

使用spring-aot增加反射提示, 代码如下

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

#### 参考

- [Annotation Interface Reflective](https://docs.spring.io/spring-framework/docs/current/javadoc-api//org/springframework/aot/hint/annotation/Reflective.html)
- [Annotation Interface ImportRuntimeHints](https://docs.spring.io/spring-framework/docs/current/javadoc-api//org/springframework/context/annotation/ImportRuntimeHints.html)