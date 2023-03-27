---
authors: [xiangcheng.kuo]
tags: [problem-solving, testcontainers, docker, ldap-failover]
---

# `TestContainers`固定容器端口

这篇文章的内容发生的背景和测试`java`的`ldap`的`failover`有关.<br/>
测试`failover`需要启动两个`ldap`的容器并`stop`其中一个. <br/>
但是`stop`完之后遇到了一个问题当下次启动后分配的端口会变化(这是由于`docker`的内部机制导致的).<br/>
接下来将会介绍如何解决这个问题.
<!--truncate-->

## 解决方案

### 启动容器时增加`fixedExposedPort`

```kotlin
val container = FixedHostPortGenericContainer<*>("<your-docker-image>")
container.withExposedPorts(389)
container.withFixedExposedPort(
	TestSocketUtils.findAvailableTcpPort(),
	389
) // we need to fix the port to make sure the port is the same when the container is restarted
```

需要注意以下几点:

- `FixedHostPortGenericContainer`是`TestContainers`提供的一个`GenericContainer`的子类, 用来固定容器的端口
- 使用`TestSocketUtils.findAvailableTcpPort()`获取一个可用的端口确保`host`上的端口没有被占用

## 参考资料

- [Class TestSocketUtils](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/test/util/TestSocketUtils.html)
- [Class FixedHostPortGenericContainer<SELF extends FixedHostPortGenericContainer<SELF\>\>](https://javadoc.io/static/org.testcontainers/testcontainers/1.15.1/org/testcontainers/containers/FixedHostPortGenericContainer.html)
- [How to useFixedHostPortGenericContainerinorg.testcontainers.containers](https://www.tabnine.com/code/java/classes/org.testcontainers.containers.FixedHostPortGenericContainer)