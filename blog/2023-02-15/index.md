---
authors: [xiangcheng.kuo]
tags: [testcontainers, docker]
---

# 在`TestContainers`中实现配置的容器`hostname`以解决容器之间访问问题

在使用`TestContainers`启动容器时, 可能会存在容器之间依赖的情况.<br/>
如果其中一个容器依赖于另外一个容器, 那么需要在启动被依赖的容器时, 指定`hostname`.<br/>
这样有依赖需求的容器可以直接通过`hostname`来访问被依赖的容器.<br/>
以便于被依赖的容器能够正确的解析依赖容器的`hostname`.
下面将介绍如何在`TestContainers`中实现配置的容器`hostname`以解决容器之间访问问题.

<!--truncate-->

## 解决方案

在启动容器时, 通过`withNetworkAliases`方法指定容器的`hostname`

```kotlin
withNetworkAliases("ldap")
```

需要注意的是, 这种实现方式是采用`docker`的`--network-alias`参数实现的, 该参数的作用是为容器指定`hostname`<br/>
另外需要确保需要互相访问的容器要在同一个`network`中, 否则无法互相访问.<br/>
可以参考以下代码来配置`network`

```kotlin
val network = Network.newNetwork()
container.withNetwork(network)
```

## 参考

- [Network settings](https://docs.docker.com/engine/reference/run/#network-settings)