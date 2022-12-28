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

## 在springboot3中构建native-image遇到的问题

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