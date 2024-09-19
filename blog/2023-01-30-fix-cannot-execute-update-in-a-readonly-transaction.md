---
authors: [ orange ]
tags: [ troubleshooting, kotlin, java, postgresql ]
---

# 当调度服务接口时报错提示`cannot execute UPDATE in a read-only transaction`问题解决

前端请求服务相应接口报错, 日志如下

```log
2023-01-30 12:10:14.822  WARN 1 --- [nio-4396-exec-6] o.h.engine.jdbc.spi.SqlExceptionHelper   : SQL Error: 0, SQLState: 25006
2023-01-30 12:10:14.822 ERROR 1 --- [nio-4396-exec-6] o.h.engine.jdbc.spi.SqlExceptionHelper   : ERROR: cannot execute UPDATE in a read-only transaction
	at org.springframework.security.web.authentication.AnonymousAuthen
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336)
	at org.springframework.security.web.session.SessionManagementFilter.doFilter(SessionManagementFilter.java:81)
	at org.springframework.security.web.session.SessionManagementFilter.doFilter(SessionManagementFilter.java:126)
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336)
	at org.springframework.security.web.access.ExceptionTranslationFilter.doFilter(ExceptionTranslationFilter.java:115)
	at org.springframework.security.web.access.ExceptionTranslationFilter.doFilter(ExceptionTranslationFilter.java:121)
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336)
	at org.springframework.security.web.access.intercept.FilterSecurityInterceptor.doFilter(FilterSecurityInterceptor.java:81)
	at org.springframework.security.web.access.intercept.FilterSecurityInterceptor.invoke(FilterSecurityInterceptor.java:115)
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:327)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189)
	at org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:53)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:227)
	at javax.servlet.http.HttpServlet.service(HttpServlet.java:764)
	at org.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java:883)
	at javax.servlet.http.HttpServlet.service(HttpServlet.java:684)
	at org.springframework.web.servlet.FrameworkServlet.doPut(FrameworkServlet.java:920)
	at org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:1006)
	at org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java:963)
	at org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java:1067)
	at org.springframework.web.servlet.mvc.method.AbstractHandlerMethodAdapter.handle(AbstractHandlerMethodAdapter.java:87)
	at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.handleInternal(RequestMappingHandlerAdapter.java:808)
	at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.invokeHandlerMethod(RequestMappingHandlerAdapter.java:895)
	at org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod.invokeAndHandle(ServletInvocableHandlerMethod.java:117)
	at org.springframework.web.method.support.InvocableHandlerMethod.invokeForRequest(InvocableHandlerMethod.java:150)
	at org.springframework.web.method.support.InvocableHandlerMethod.doInvoke(InvocableHandlerMethod.java:205)
	at java.base/java.lang.reflect.Method.invoke(Method.java:568)
	at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at jdk.internal.reflect.GeneratedMethodAccessor355.invoke(Unknown Source)
	at com.fastonetech.computecloud.api.regional.software.controller.LaunchableAppController.lastAccessAt(LaunchableAppController.kt:56)
	at com.fastonetech.computecloud.api.regional.software.service.UserSoftwareUsageServiceImpl$$EnhancerBySpringCGLIB$$1caff315.lastAccessAt(<generated>)
	at org.springframework.aop.framework.CglibAopProxy$DynamicAdvisedInterceptor.intercept(CglibAopProxy.java:698)
	at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:753)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186)
	at org.springframework.transaction.interceptor.TransactionInterceptor.invoke(TransactionInterceptor.java:119)
	at org.springframework.transaction.interceptor.TransactionAspectSupport.invokeWithinTransaction(TransactionAspectSupport.java:407)
	at org.springframework.transaction.interceptor.TransactionAspectSupport.commitTransactionAfterReturning(TransactionAspectSupport.java:654)
	at org.springframework.transaction.support.AbstractPlatformTransactionManager.commit(AbstractPlatformTransactionManager.java:711)
	at org.springframework.transaction.support.AbstractPlatformTransactionManager.processCommit(AbstractPlatformTransactionManager.java:743)
	at org.springframework.orm.jpa.JpaTransactionManager.doCommit(JpaTransactionManager.java:562)
	at org.hibernate.engine.transaction.internal.TransactionImpl.commit(TransactionImpl.java:101)
	at org.hibernate.resource.transaction.backend.jdbc.internal.JdbcResourceLocalTransactionCoordinatorImpl$TransactionDriverControlImpl.commit(JdbcResourceLocalTransactionCoordinatorImpl.java:281)
	at org.hibernate.resource.transaction.backend.jdbc.internal.JdbcResourceLocalTransactionCoordinatorImpl.access$300(JdbcResourceLocalTransactionCoordinatorImpl.java:40)
	at org.hibernate.resource.transaction.backend.jdbc.internal.JdbcResourceLocalTransactionCoordinatorImpl.beforeCompletionCallback(JdbcResourceLocalTransactionCoordinatorImpl.java:183)
	at org.hibernate.engine.jdbc.internal.JdbcCoordinatorImpl.beforeTransactionCompletion(JdbcCoordinatorImpl.java:448)
	at org.hibernate.internal.SessionImpl.beforeTransactionCompletion(SessionImpl.java:2380)
	at org.hibernate.internal.SessionImpl.flushBeforeTransactionCompletion(SessionImpl.java:3212)
	at org.hibernate.internal.SessionImpl.managedFlush(SessionImpl.java:453)
	at org.hibernate.internal.SessionImpl.doFlush(SessionImpl.java:1362)
	at org.hibernate.event.service.internal.EventListenerGroupImpl.fireEventOnEachListener(EventListenerGroupImpl.java:99)
	at org.hibernate.event.internal.DefaultFlushEventListener.onFlush(DefaultFlushEventListener.java:40)
	at org.hibernate.event.internal.AbstractFlushingEventListener.performExecutions(AbstractFlushingEventListener.java:344)
	at org.hibernate.engine.spi.ActionQueue.executeActions(ActionQueue.java:475)
	at java.base/java.util.LinkedHashMap.forEach(LinkedHashMap.java:721)
	at org.hibernate.engine.spi.ActionQueue.lambda$executeActions$1(ActionQueue.java:478)
	at org.hibernate.engine.spi.ActionQueue.executeActions(ActionQueue.java:604)
	at org.hibernate.action.internal.EntityUpdateAction.execute(EntityUpdateAction.java:201)
	at org.hibernate.persister.entity.AbstractEntityPersister.update(AbstractEntityPersister.java:3769)
	at org.hibernate.persister.entity.AbstractEntityPersister.updateOrInsert(AbstractEntityPersister.java:3355)
	at org.hibernate.persister.entity.AbstractEntityPersister.update(AbstractEntityPersister.java:3493)
	at org.hibernate.engine.jdbc.internal.ResultSetReturnImpl.executeUpdate(ResultSetReturnImpl.java:197)
	at com.zaxxer.hikari.pool.HikariProxyPreparedStatement.executeUpdate(HikariProxyPreparedStatement.java)
	at com.zaxxer.hikari.pool.ProxyPreparedStatement.executeUpdate(ProxyPreparedStatement.java:61)
	at org.postgresql.jdbc.PgPreparedStatement.executeUpdate(PgPreparedStatement.java:130)
	at org.postgresql.jdbc.PgPreparedStatement.executeWithFlags(PgPreparedStatement.java:164)
	at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:401)
	at org.postgresql.jdbc.PgStatement.executeInternal(PgStatement.java:481)
	at org.postgresql.core.v3.QueryExecutorImpl.execute(QueryExecutorImpl.java:322)
	at org.postgresql.core.v3.QueryExecutorImpl.processResults(QueryExecutorImpl.java:2297)
	at org.postgresql.core.v3.QueryExecutorImpl.receiveErrorResponse(QueryExecutorImpl.java:2565)
org.postgresql.util.PSQLException: ERROR: cannot execute UPDATE in a read-only transaction
```

## 原因

> 数据库采用主从架构, 由于主库宕机, `Load balancer`将请求转发到了从库, 从库的事务为`read only`导致更新失败。

后端相关代码如下

```kotlin
@javax.transaction.Transactional
fun lastAccessAt(id: Long, type: LaunchableAppType): UserSoftwareUsageDTO {
    val userId = authService.currentAsPortal().bind().userId
    val userSoftwareUsage =
        getOrElseCreate(userId, id, type).copy(lastAccessAt = ZonedDateTime.now()).let(repository::save)
    return UserSoftwareUsageDTO(
        userSoftwareUsage.appId,
        userSoftwareUsage.appType,
        userSoftwareUsage.lastAccessAt,
        userSoftwareUsage.collected
    )
}
```

其采用的`javax`的`@Transactional`进行事务控制.<br/>
该注解没有提供显式指定数据库事务的读写行为相关属性, 是否是只读或者写入只能由由数据库的默认行为决定.<br/>

在`PostgreSQL`中, 可以通过以下命令来查看默认的读写行为

```postgresql
show default_transaction_read_only;
-- return true if default transaction is read only, false otherwise
```

## 解决方案

1. 数据库主机宕机时, 从库升级为主库. 这样可以确保数据库读写不受影响。
2. java侧需要采用可以显式控制事务是否为`readonly`的框架, 如spring的`@Transactional`注解, 该注解提供了`readOnly`属性,
   可以显式控制事务的读写行为。这样可以不隐式依赖数据库的默认行为, 从而在创建事务时提前发现问题。

## 备注

- [Client Connection Defaults](https://www.postgresql.org/docs/current/runtime-config-client.html)
- ["READ-ONLY" MODE FOR POSTGRESQL](https://jkatz05.com/post/postgres/postgres-read-only/)