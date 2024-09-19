---
authors: [ orange ]
tags: [ troubleshooting, java, gradle, gradle-dependency ]
---

# 在gradle项目中使用platform导入其他gradle公共库项目时报错

在别的项目中使用platform导入内部公共库时报错, 报错信息如下:

```log
FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':extractIncludeProto'.
> Could not resolve all files for configuration ':compileProtoPath'.
   > Could not resolve com.fastonetech.library:fastone-bom:1.1.0-SNAPSHOT.
     Required by:
         project :
      > No matching variant of com.fastonetech.library:fastone-bom:0.1.0-SNAPSHOT:20221123.055858-93 was found. The consumer was configured to find a runtime of a platform, preferably only the resources files but:
          - Variant 'apiElements' capability com.fastonetech.library:fastone-bom:0.1.0-SNAPSHOT declares a component, packaged as a jar:
              - Incompatible because this component declares an API of a library and the consumer needed a runtime of a platform
          - Variant 'runtimeElements' capability com.fastonetech.library:fastone-bom:0.1.0-SNAPSHOT declares a runtime of a component, packaged as a jar:
              - Incompatible because this component declares a library and the consumer needed a platform
   > Could not find com.fastonetech.library:filter-spring-boot-starter:.
     Required by:
         project :
   > Could not find com.fastonetech.library:rpc-spring-boot-starter:.
     Required by:
         project :
   > Could not find com.fastonetech.library:security-spring-boot-starter:.
     Required by:
         project :
   > Could not find com.fastonetech.library:prometheus-querying-client:.
     Required by:
         project :
```

<!--truncate-->

## 原因

公共库项目应该使用`org.gradle.java-platform`插件而不是`java`, 这样才能使用`platform`导入

## 解决方案

- 增加插件

```kotlin
plugin("org.gradle.java-platform")
```

- 允许该platform项目可以导入其他platform作为依赖

```kotlin
configure<JavaPlatformExtension> {
	allowDependencies()
}
```

- 发布到Maven仓库的配置要注意平台和library的区别

```kotlin
when (!isPlatform()) {
	true -> {
		from(components["java"])
		versionMapping {
			usage("java-api") {
				fromResolutionResult()
			}
			usage("java-runtime") {
				fromResolutionResult()
			}
		}
	}

	else -> from(components["javaPlatform"])
}
```

## 备注

- [The Java Platform Plugin](https://docs.gradle.org/current/userguide/java_platform_plugin.html)