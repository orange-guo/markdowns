---
authors: [ xiangcheng.kuo ]
tags: [ spring-boot, spring-data-jpa ]
---

# 通过关闭OpenEntityManagerInViewInterceptor确保当下游服务响应缓慢时不会导致数据库连接被占用完

`OpenEntityManagerInViewInterceptor`是`spring`中的一个拦截器，它的作用是在整个请求上下文复用同一个`EntityManager`
，从而避免在一个请求中多次创建一个`EntityManager`, 从而提高性能.<br/>
但是如果在一个请求的处理代码中请求了下游服务，而下游服务响应缓慢，那么在下游服务响应之前，`EntityManager`
会一直被占用，直到整个请求处理完成，这样会导致当服务并发请求量较大时，数据库连接被占用完.<br/>
为了避免这种情况，可以通过关闭`OpenEntityManagerInViewInterceptor`来确保当下游服务响应缓慢时不会导致数据库连接被占用完.
下面将介绍如何关闭`OpenEntityManagerInViewInterceptor`.<br/>

<!--truncate-->

## 解决方案

在`spring-boot`中，可以通过配置`spring.jpa.open-in-view`为`false`来关闭`OpenEntityManagerInViewInterceptor`，示例如下

```yaml title="application.yml"
spring:
  jpa:
    open-in-view: false
```

## 备注

- `org.springframework.orm.hibernate5.support.OpenSessionInViewInterceptor`在请求开始时会创建一个`EntityManager`
  并调用`org.springframework.transaction.support.TransactionSynchronizationManager.bindResource`
  方法来绑定`EntityManager`到当前线程
- 后续框架内部的调用例如`Repository.findAll()`的大致调用链路如下
	- Repository.findAll()
	- org.springframework.orm.jpa.SharedEntityManagerCreator.SharedEntityManagerInvocationHandler.invoke
	- org.springframework.orm.jpa.EntityManagerFactoryUtils.doGetTransactionalEntityManager
	- org.springframework.transaction.support.TransactionSynchronizationManager.getResource
	  <br/>因为在请求开始时已经将`EntityManager`绑定到当前线程，所以这里会获取到之前创建的`EntityManager`

- 后续执行`query`时会从`DataSource`中获取一个数据库连接，然后执行查询，查询完成后，数据库连接不会立即关闭，
  而是在`EntityManager`被关闭时关闭，而`EntityManager`会在`OpenEntityManagerInViewInterceptor`被关闭时关闭.

综上所述，当`OpenEntityManagerInViewInterceptor`被关闭时，`EntityManager`会被关闭，而`EntityManager`
被关闭时其对应的数据库连接也会被关闭.<br/>
`EntityManager`被创建出来时不会立即创建数据库连接，而是在执行`sql`时才会创建数据库连接.<br/>
如果整个请求链路非常耗时，那么在整个请求链路中，`EntityManager`对应的数据库连接都会被占用，直到整个请求链路执行完成.<br/>
如果同时有多个请求正在执行, 那么会导致数据库连接被占用完. 从而导致后续请求无法获取数据库连接.<br/>
为了避免这种情况，可以通过关闭`OpenEntityManagerInViewInterceptor`来确保当下游服务响应缓慢时不会导致数据库连接被占用完.

## 参考资料

- [When does JPA return connection to db pool](https://stackoverflow.com/questions/71140137/when-does-jpa-return-connection-to-db-pool)
- [A Guide to Spring’s Open Session in View](https://www.baeldung.com/spring-open-session-in-view)