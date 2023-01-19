# 开发遇到的问题

## mgmt-api容器中执行buri报错提示执行权限

### 问题原因

> jib打包时丢失了权限

### 排查步骤

> 根据buri的权限和容器里文件权限进行比对发现存在差异且stat容器的文件发现修改时间一直在变化说明不存在缓存的问题

### 解决方案

> 执行前增加exec权限

## NOTT文件下载内容为空

### 问题

minio.Read函数碰到文件末尾时会返回EOF错误, 但buffer里有内容

### 解决方案

碰到EOF时一并判断读取到长度做双重判断

### 备注

- https://github.com/minio/minio-go/blob/master/api-get-object.go
- https://man7.org/linux/man-pages/man2/read.2.html

## BILLING服务的NOTT重复消费

### 原因

billing-mgr那边也配置了dispatcher, 库自身也配置了dispatcher, 导致打架

## 请求fastone-api登录时AuthenticationManager报错

### 现象

输入错误的用户密码登录时报错(There is no PasswordEncoder mapped for the id )

### 原因

- 我们使用`AuthenticationManagerBuilder`来构建`AuthenticationManager`
- 默认的`AuthenticationManagerBuilder`携带了ParentAutneticationManager`
- 认证时由于`ssh fsauth`执行失败, `AuthenticationManager`内部委托`ParentAutneticationManager`尝试认证
- 其实现方式是根据密码去匹配, 其默认的`PasswordEncoder`实现是`DelegatingPasswordEncoder`根据密码前缀去推断PasswordEncoder,
  但是我们的密码没有该前缀故而抛错

### 解决方案

- 移除AuthenticationManager中的ParentAutneticationManager

### 备注

## 在consul中修改mgmt-api服务的属性配置时触发协程报错

### 现象

修改mgmt-scheduler的task配置后发现报错, 且不会继续调度

### 原因

调度task时会遍历tasks配置, 该配置由spring-boot里的configuration-properties对象提供的, 遍历tasks是并发操作,
且在此过程中动态修改了tasks的内容导致抛出异常, 且该异常导致协程取消

### 解决方案

调度前从配置中复制一份tasks确保旧的tasks写入时使用方不受影响

### 备注

#### 日志

```
2022-11-24 10:08:27.954  INFO 1 --- [TaskScheduler-1] b.c.PropertySourceBootstrapConfiguration : Located property source: [BootstrapPropertySource {name='bootstrapProperties-config/mgmt-scheduler/'}, BootstrapPropertySource {name='bootstrapProperties-config/application/'}]
2022-11-24 10:08:27.968  INFO 1 --- [TaskScheduler-1] o.s.boot.SpringApplication               : No active profile set, falling back to 1 default profile: "default"
2022-11-24 10:08:27.979  INFO 1 --- [TaskScheduler-1] o.s.boot.SpringApplication               : Started application in 0.244 seconds (JVM running for 7930.38)
Exception in thread "DefaultDispatcher-worker-6" java.util.ConcurrentModificationException
	at java.base/java.util.ArrayList$Itr.checkForComodification(ArrayList.java:1013)
	at java.base/java.util.ArrayList$Itr.next(ArrayList.java:967)
	at com.fastonetech.scheduling.core.ResourceDispatcher$Companion$of$1$1.invokeSuspend(ResourceDispatcher.kt:40)
	at com.fastonetech.scheduling.core.ResourceDispatcher$Companion$of$1$1.invoke(ResourceDispatcher.kt)
	at com.fastonetech.scheduling.core.ResourceDispatcher$Companion$of$1$1.invoke(ResourceDispatcher.kt)
	at kotlinx.coroutines.intrinsics.UndispatchedKt.startUndispatchedOrReturn(Undispatched.kt:89)
	at kotlinx.coroutines.CoroutineScopeKt.coroutineScope(CoroutineScope.kt:264)
	at com.fastonetech.scheduling.core.ResourceDispatcher$Companion$of$1.dispatch(ResourceDispatcher.kt:16)
	at com.fastonetech.scheduling.core.ResourceDispatcher$Companion$of$3.schedule(ResourceDispatcher.kt:32)
	at com.fastonetech.scheduling.core.ResourceDispatcher$Companion$of$3.schedule(ResourceDispatcher.kt:27)
	at com.fastonetech.scheduling.core.ResourceDispatcher$Companion$of$1$1$2$1.invokeSuspend(ResourceDispatcher.kt:19)
	at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:33)
	at kotlinx.coroutines.DispatchedTask.run(DispatchedTask.kt:106)
	at kotlinx.coroutines.internal.LimitedDispatcher.run(LimitedDispatcher.kt:42)
	at kotlinx.coroutines.scheduling.TaskImpl.run(Tasks.kt:95)
	at kotlinx.coroutines.scheduling.CoroutineScheduler.runSafely(CoroutineScheduler.kt:570)
	at kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.executeTask(CoroutineScheduler.kt:749)
	at kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.runWorker(CoroutineScheduler.kt:677)
	at kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.run(CoroutineScheduler.kt:664)
	Suppressed: kotlinx.coroutines.DiagnosticCoroutineContextException: [StandaloneCoroutine{Cancelling}@19b8b4b6, Dispatchers.IO]

```

#### Reference

- https://stackoverflow.com/questions/628938/what-is-copy-on-write
- https://www.zhihu.com/question/19782224

## 修改集群实例的网络

修改云帐号里关于head，login，compute的网络
SaaS情况下修改csagent的配置

## CacheManager自动装配原理分析

### 描述

- 我们自己的`SecurityAutoConfiguration`中创建的`EhCacheManagerFactoryBean`所提供的Bean是ehcache包下的`CacheManager`,
  不是Spring的, 由于@EnableCaching被启用但是又没有`CacheManager`会导致`Spring-boot`自动装配工作`CacheAutoConfiguration`
- `SimpleCacheConfiguration`会自动注入一个默认的`ConcurrentMapCacheManager`
- 引入redission后, 该依赖里实现了`javax.cache.spi.CachingProvider`, 导致Spring的`JCacheCacheConfiguration`
  优先级提升并将redission实现的JCacheCacheManager注入进来
- 然后引入`ehcache3`库后会有两个`javax.cache.spi.CachingProvider`(ehcache2没支持, ehcache3支持了)
  导致`JCacheCacheConfiguration`又不工作了因为有多个`CachingProvider`不知道用哪一个`multiple JSR-107 providers`

### 解决方案

- 自己注入`ConcurrentMapCacheManager`, Spring的自动装配过于复杂

### 备注

- Cache自动装配的优先级
  SimpleCacheConfiguration < JCacheCacheManager

## 尽量使用db里存储的domain信息去做逻辑处理

### 原因

在request里的domain信息可能为null, 如果用request里的domain信息去处理将会导致未知的错误逻辑

## mgmt-api服务报错获取不到JdbcConnection

### 现象

mgmt-api启动一段时间后无法接受请求报错显示获取不到数据库连接, 查看日志发现报错信息如下

```log
Connection is not available, request timed out after 30000ms.
```

### 原因

grpc和protobuf版本不兼容导致服务出错并导致数据库连接泄漏并引发后续的数据库连接获取失败, 暂时无法确定具体详细的原因导致.

```log
java.lang.NoSuchMethodError: 'boolean com.google.protobuf.GeneratedMessageV3.isStringEmpty(java.lang.Object)'
```

### 解决方案

修改grpc和protobuf版本

原始的版本

```properties title="gradle.properties"
protobufVersion=3.15.0
grpcVersion=1.33.1
```

修改后的版本

```properties title="gradle.properties"
protobufVersion=3.21.9
grpcVersion=1.51.0
```

### 备注

#### 日志

```log
2023-01-19 06:25:31.853 ERROR 1 --- [nio-4397-exec-7] o.a.c.c.C.[.[.[/].[dispatcherServlet]    : Servlet.service() for servlet [dispatcherServlet] in context with path [] threw exception [Request processing failed; nested exception is org.springframework.transaction.IllegalTransactionStateException: Pre-bound JDBC Connection found! JpaTransactionManager does not support running within DataSourceTransactionManager if told to manage the DataSource itself. It is recommended to use a single JpaTransactionManager for all transactions on a single DataSource, no matter whether JPA or JDBC access.] with root cause

org.springframework.transaction.IllegalTransactionStateException: Pre-bound JDBC Connection found! JpaTransactionManager does not support running within DataSourceTransactionManager if told to manage the DataSource itself. It is recommended to use a single JpaTransactionManager for all transactions on a single DataSource, no matter whether JPA or JDBC access.
	at org.springframework.orm.jpa.JpaTransactionManager.doBegin(JpaTransactionManager.java:400) ~[spring-orm-5.3.12.jar:5.3.12]
	at org.springframework.transaction.support.AbstractPlatformTransactionManager.startTransaction(AbstractPlatformTransactionManager.java:400) ~[spring-tx-5.3.12.jar:5.3.12]
	at org.springframework.transaction.support.AbstractPlatformTransactionManager.getTransaction(AbstractPlatformTransactionManager.java:373) ~[spring-tx-5.3.12.jar:5.3.12]
	at com.fastonetech.computecloud.api.mgmt.service.deployment.DefaultDeploymentService.inspectNottd(DefaultDeploymentService.kt:798) ~[classes/:na]
	at com.fastonetech.computecloud.api.mgmt.controller.SchedulerController.inspectNottd(SchedulerController.kt:82) ~[classes/:na]
	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[na:na]
	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77) ~[na:na]
	at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:568) ~[na:na]
	at org.springframework.web.method.support.InvocableHandlerMethod.doInvoke(InvocableHandlerMethod.java:205) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.web.method.support.InvocableHandlerMethod.invokeForRequest(InvocableHandlerMethod.java:150) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod.invokeAndHandle(ServletInvocableHandlerMethod.java:117) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.invokeHandlerMethod(RequestMappingHandlerAdapter.java:895) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.handleInternal(RequestMappingHandlerAdapter.java:808) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.mvc.method.AbstractHandlerMethodAdapter.handle(AbstractHandlerMethodAdapter.java:87) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java:1067) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java:963) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:1006) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.FrameworkServlet.doGet(FrameworkServlet.java:898) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at javax.servlet.http.HttpServlet.service(HttpServlet.java:655) ~[tomcat-embed-core-9.0.54.jar:4.0.FR]
	at org.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java:883) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at javax.servlet.http.HttpServlet.service(HttpServlet.java:764) ~[tomcat-embed-core-9.0.54.jar:4.0.FR]
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:227) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:53) ~[tomcat-embed-websocket-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:327) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.access.intercept.FilterSecurityInterceptor.invoke(FilterSecurityInterceptor.java:115) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.access.intercept.FilterSecurityInterceptor.doFilter(FilterSecurityInterceptor.java:81) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.access.ExceptionTranslationFilter.doFilter(ExceptionTranslationFilter.java:121) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.access.ExceptionTranslationFilter.doFilter(ExceptionTranslationFilter.java:115) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.session.SessionManagementFilter.doFilter(SessionManagementFilter.java:126) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.session.SessionManagementFilter.doFilter(SessionManagementFilter.java:81) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.authentication.AnonymousAuthenticationFilter.doFilter(AnonymousAuthenticationFilter.java:105) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestFilter.doFilter(SecurityContextHolderAwareRequestFilter.java:149) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.savedrequest.RequestCacheAwareFilter.doFilter(RequestCacheAwareFilter.java:63) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.authentication.logout.LogoutFilter.doFilter(LogoutFilter.java:103) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.authentication.logout.LogoutFilter.doFilter(LogoutFilter.java:89) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.header.HeaderWriterFilter.doHeadersAfter(HeaderWriterFilter.java:90) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.header.HeaderWriterFilter.doFilterInternal(HeaderWriterFilter.java:75) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.context.SecurityContextPersistenceFilter.doFilter(SecurityContextPersistenceFilter.java:110) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.context.SecurityContextPersistenceFilter.doFilter(SecurityContextPersistenceFilter.java:80) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.context.request.async.WebAsyncManagerIntegrationFilter.doFilterInternal(WebAsyncManagerIntegrationFilter.java:55) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy.doFilterInternal(FilterChainProxy.java:211) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy.doFilter(FilterChainProxy.java:183) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.web.filter.DelegatingFilterProxy.invokeDelegate(DelegatingFilterProxy.java:358) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.web.filter.DelegatingFilterProxy.doFilter(DelegatingFilterProxy.java:271) ~[spring-web-5.3.12.jar:5.3.12]
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.springframework.web.filter.RequestContextFilter.doFilterInternal(RequestContextFilter.java:100) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.3.12.jar:5.3.12]
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.springframework.web.filter.FormContentFilter.doFilterInternal(FormContentFilter.java:93) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.3.12.jar:5.3.12]
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.springframework.boot.actuate.metrics.web.servlet.WebMvcMetricsFilter.doFilterInternal(WebMvcMetricsFilter.java:96) ~[spring-boot-actuator-2.5.6.jar:2.5.6]
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.3.12.jar:5.3.12]
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.springframework.web.filter.CharacterEncodingFilter.doFilterInternal(CharacterEncodingFilter.java:201) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.3.12.jar:5.3.12]
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:197) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:97) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:540) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:135) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:92) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:78) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.valves.RemoteIpValve.invoke(RemoteIpValve.java:769) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:357) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.coyote.http11.Http11Processor.service(Http11Processor.java:382) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.coyote.AbstractProcessorLight.process(AbstractProcessorLight.java:65) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.coyote.AbstractProtocol$ConnectionHandler.process(AbstractProtocol.java:895) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.doRun(NioEndpoint.java:1722) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.tomcat.util.net.SocketProcessorBase.run(SocketProcessorBase.java:49) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.tomcat.util.threads.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1191) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.tomcat.util.threads.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:659) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:61) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at java.base/java.lang.Thread.run(Thread.java:833) ~[na:na]
```

```log
2023-01-19 06:25:31.897 ERROR 1 --- [io-4397-exec-11] c.f.l.w.a.BasicRestControllerAdvice      : A business-exception occurred.

com.fastonetech.lib.core.exception.BusinessException: 未知错误
	at com.fastonetech.lib.core.exception.BusinessExceptionKt.catchAsBusinessException(BusinessException.kt:15) ~[fastone-core-0.1.0-SNAPSHOT.jar:na]
	at com.fastonetech.computecloud.api.mgmt.service.deployment.DefaultDeploymentService.listRefreshable(DefaultDeploymentService.kt:120) ~[classes/:na]
	at com.fastonetech.computecloud.api.mgmt.service.ri.ReservedInstanceService.importRI(ReservedInstanceService.kt:57) ~[classes/:na]
	at com.fastonetech.computecloud.api.mgmt.controller.SchedulerController.importRI(SchedulerController.kt:39) ~[classes/:na]
	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[na:na]
	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77) ~[na:na]
	at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:568) ~[na:na]
	at org.springframework.web.method.support.InvocableHandlerMethod.doInvoke(InvocableHandlerMethod.java:205) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.web.method.support.InvocableHandlerMethod.invokeForRequest(InvocableHandlerMethod.java:150) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod.invokeAndHandle(ServletInvocableHandlerMethod.java:117) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.invokeHandlerMethod(RequestMappingHandlerAdapter.java:895) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.handleInternal(RequestMappingHandlerAdapter.java:808) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.mvc.method.AbstractHandlerMethodAdapter.handle(AbstractHandlerMethodAdapter.java:87) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java:1067) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java:963) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:1006) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.FrameworkServlet.doGet(FrameworkServlet.java:898) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at javax.servlet.http.HttpServlet.service(HttpServlet.java:655) ~[tomcat-embed-core-9.0.54.jar:4.0.FR]
	at org.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java:883) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at javax.servlet.http.HttpServlet.service(HttpServlet.java:764) ~[tomcat-embed-core-9.0.54.jar:4.0.FR]
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:227) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:53) ~[tomcat-embed-websocket-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:327) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.access.intercept.FilterSecurityInterceptor.invoke(FilterSecurityInterceptor.java:115) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.access.intercept.FilterSecurityInterceptor.doFilter(FilterSecurityInterceptor.java:81) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.access.ExceptionTranslationFilter.doFilter(ExceptionTranslationFilter.java:121) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.access.ExceptionTranslationFilter.doFilter(ExceptionTranslationFilter.java:115) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.session.SessionManagementFilter.doFilter(SessionManagementFilter.java:126) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.session.SessionManagementFilter.doFilter(SessionManagementFilter.java:81) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.authentication.AnonymousAuthenticationFilter.doFilter(AnonymousAuthenticationFilter.java:105) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestFilter.doFilter(SecurityContextHolderAwareRequestFilter.java:149) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.savedrequest.RequestCacheAwareFilter.doFilter(RequestCacheAwareFilter.java:63) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.authentication.logout.LogoutFilter.doFilter(LogoutFilter.java:103) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.authentication.logout.LogoutFilter.doFilter(LogoutFilter.java:89) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.header.HeaderWriterFilter.doHeadersAfter(HeaderWriterFilter.java:90) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.header.HeaderWriterFilter.doFilterInternal(HeaderWriterFilter.java:75) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.context.SecurityContextPersistenceFilter.doFilter(SecurityContextPersistenceFilter.java:110) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.context.SecurityContextPersistenceFilter.doFilter(SecurityContextPersistenceFilter.java:80) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.context.request.async.WebAsyncManagerIntegrationFilter.doFilterInternal(WebAsyncManagerIntegrationFilter.java:55) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy.doFilterInternal(FilterChainProxy.java:211) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy.doFilter(FilterChainProxy.java:183) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.web.filter.DelegatingFilterProxy.invokeDelegate(DelegatingFilterProxy.java:358) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.web.filter.DelegatingFilterProxy.doFilter(DelegatingFilterProxy.java:271) ~[spring-web-5.3.12.jar:5.3.12]
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.springframework.web.filter.RequestContextFilter.doFilterInternal(RequestContextFilter.java:100) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.3.12.jar:5.3.12]
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.springframework.web.filter.FormContentFilter.doFilterInternal(FormContentFilter.java:93) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.3.12.jar:5.3.12]
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.springframework.boot.actuate.metrics.web.servlet.WebMvcMetricsFilter.doFilterInternal(WebMvcMetricsFilter.java:96) ~[spring-boot-actuator-2.5.6.jar:2.5.6]
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.3.12.jar:5.3.12]
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.springframework.web.filter.CharacterEncodingFilter.doFilterInternal(CharacterEncodingFilter.java:201) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.3.12.jar:5.3.12]
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:197) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:97) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:540) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:135) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:92) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:78) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.valves.RemoteIpValve.invoke(RemoteIpValve.java:769) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:357) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.coyote.http11.Http11Processor.service(Http11Processor.java:382) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.coyote.AbstractProcessorLight.process(AbstractProcessorLight.java:65) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.coyote.AbstractProtocol$ConnectionHandler.process(AbstractProtocol.java:895) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.doRun(NioEndpoint.java:1722) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.tomcat.util.net.SocketProcessorBase.run(SocketProcessorBase.java:49) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.tomcat.util.threads.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1191) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.tomcat.util.threads.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:659) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:61) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at java.base/java.lang.Thread.run(Thread.java:833) ~[na:na]
Caused by: org.springframework.dao.InvalidDataAccessApiUsageException: No value for key [SessionImpl(331329404<open>)] bound to thread; nested exception is java.lang.IllegalStateException: No value for key [SessionImpl(331329404<open>)] bound to thread
	at org.springframework.orm.jpa.EntityManagerFactoryUtils.convertJpaAccessExceptionIfPossible(EntityManagerFactoryUtils.java:371) ~[spring-orm-5.3.12.jar:5.3.12]
	at org.springframework.orm.jpa.vendor.HibernateJpaDialect.translateExceptionIfPossible(HibernateJpaDialect.java:235) ~[spring-orm-5.3.12.jar:5.3.12]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.translateExceptionIfPossible(AbstractEntityManagerFactoryBean.java:551) ~[spring-orm-5.3.12.jar:5.3.12]
	at org.springframework.dao.support.ChainedPersistenceExceptionTranslator.translateExceptionIfPossible(ChainedPersistenceExceptionTranslator.java:61) ~[spring-tx-5.3.12.jar:5.3.12]
	at org.springframework.dao.support.DataAccessUtils.translateIfNecessary(DataAccessUtils.java:242) ~[spring-tx-5.3.12.jar:5.3.12]
	at org.springframework.dao.support.PersistenceExceptionTranslationInterceptor.invoke(PersistenceExceptionTranslationInterceptor.java:152) ~[spring-tx-5.3.12.jar:5.3.12]
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186) ~[spring-aop-5.3.12.jar:5.3.12]
	at org.springframework.data.jpa.repository.support.CrudMethodMetadataPostProcessor$CrudMethodMetadataPopulatingMethodInterceptor.invoke(CrudMethodMetadataPostProcessor.java:174) ~[spring-data-jpa-2.5.6.jar:2.5.6]
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186) ~[spring-aop-5.3.12.jar:5.3.12]
	at org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:97) ~[spring-aop-5.3.12.jar:5.3.12]
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186) ~[spring-aop-5.3.12.jar:5.3.12]
	at org.springframework.data.repository.core.support.MethodInvocationValidator.invoke(MethodInvocationValidator.java:98) ~[spring-data-commons-2.5.6.jar:2.5.6]
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186) ~[spring-aop-5.3.12.jar:5.3.12]
	at org.springframework.aop.framework.JdkDynamicAopProxy.invoke(JdkDynamicAopProxy.java:215) ~[spring-aop-5.3.12.jar:5.3.12]
	at jdk.proxy2/jdk.proxy2.$Proxy182.findById(Unknown Source) ~[na:na]
	at com.fastonetech.computecloud.api.mgmt.service.deployment.DefaultDeploymentService.toDeploymentSummary(DefaultDeploymentService.kt:396) ~[classes/:na]
	at com.fastonetech.computecloud.api.mgmt.service.deployment.DefaultDeploymentService.access$toDeploymentSummary(DefaultDeploymentService.kt:91) ~[classes/:na]
	at com.fastonetech.computecloud.api.mgmt.service.deployment.DefaultDeploymentService$listRefreshable$1.invoke(DefaultDeploymentService.kt:121) ~[classes/:na]
	at com.fastonetech.computecloud.api.mgmt.service.deployment.DefaultDeploymentService$listRefreshable$1.invoke(DefaultDeploymentService.kt:120) ~[classes/:na]
	at com.fastonetech.lib.core.exception.BusinessExceptionKt.catchAsBusinessException(BusinessException.kt:18) ~[fastone-core-0.1.0-SNAPSHOT.jar:na]
	... 93 common frames omitted
Caused by: java.lang.IllegalStateException: No value for key [SessionImpl(331329404<open>)] bound to thread
	at org.springframework.transaction.support.TransactionSynchronizationManager.unbindResource(TransactionSynchronizationManager.java:198) ~[spring-tx-5.3.12.jar:5.3.12]
	at org.springframework.transaction.support.ResourceHolderSynchronization.suspend(ResourceHolderSynchronization.java:53) ~[spring-tx-5.3.12.jar:5.3.12]
	at org.springframework.transaction.support.AbstractPlatformTransactionManager.doSuspendSynchronization(AbstractPlatformTransactionManager.java:658) ~[spring-tx-5.3.12.jar:5.3.12]
	at org.springframework.transaction.support.AbstractPlatformTransactionManager.suspend(AbstractPlatformTransactionManager.java:570) ~[spring-tx-5.3.12.jar:5.3.12]
	at org.springframework.transaction.support.AbstractPlatformTransactionManager.getTransaction(AbstractPlatformTransactionManager.java:368) ~[spring-tx-5.3.12.jar:5.3.12]
	at org.springframework.transaction.interceptor.TransactionAspectSupport.createTransactionIfNecessary(TransactionAspectSupport.java:595) ~[spring-tx-5.3.12.jar:5.3.12]
	at org.springframework.transaction.interceptor.TransactionAspectSupport.invokeWithinTransaction(TransactionAspectSupport.java:382) ~[spring-tx-5.3.12.jar:5.3.12]
	at org.springframework.transaction.interceptor.TransactionInterceptor.invoke(TransactionInterceptor.java:119) ~[spring-tx-5.3.12.jar:5.3.12]
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186) ~[spring-aop-5.3.12.jar:5.3.12]
	at org.springframework.dao.support.PersistenceExceptionTranslationInterceptor.invoke(PersistenceExceptionTranslationInterceptor.java:137) ~[spring-tx-5.3.12.jar:5.3.12]
	... 107 common frames omitted
```

```log
2023-01-19 06:25:32.443  INFO 1 --- [nio-4397-exec-1] c.f.c.a.m.s.nott.nottm.NottmService      : offsetId is :23
2023-01-19 06:25:32.453 ERROR 1 --- [nio-4397-exec-1] o.a.c.c.C.[.[.[/].[dispatcherServlet]    : Servlet.service() for servlet [dispatcherServlet] in context with path [] threw exception [Handler dispatch failed; nested exception is java.lang.NoSuchMethodError: 'boolean com.google.protobuf.GeneratedMessageV3.isStringEmpty(java.lang.Object)'] with root cause

java.lang.NoSuchMethodError: 'boolean com.google.protobuf.GeneratedMessageV3.isStringEmpty(java.lang.Object)'
	at com.fastonetech.contract.nott.v1.nottm.NottmOuterClass$PollRequest.getSerializedSize(NottmOuterClass.java:8401) ~[fastone-event-nott-0.1.0-SNAPSHOT.jar:na]
	at io.grpc.protobuf.lite.ProtoInputStream.available(ProtoInputStream.java:108) ~[grpc-protobuf-lite-1.33.1.jar:1.33.1]
	at io.grpc.internal.MessageFramer.getKnownLength(MessageFramer.java:205) ~[grpc-core-1.33.1.jar:1.33.1]
	at io.grpc.internal.MessageFramer.writePayload(MessageFramer.java:137) ~[grpc-core-1.33.1.jar:1.33.1]
	at io.grpc.internal.AbstractStream.writeMessage(AbstractStream.java:65) ~[grpc-core-1.33.1.jar:1.33.1]
	at io.grpc.internal.ForwardingClientStream.writeMessage(ForwardingClientStream.java:37) ~[grpc-core-1.33.1.jar:1.33.1]
	at io.grpc.internal.ClientCallImpl.sendMessageInternal(ClientCallImpl.java:580) ~[grpc-core-1.33.1.jar:1.33.1]
	at io.grpc.internal.ClientCallImpl.sendMessage(ClientCallImpl.java:564) ~[grpc-core-1.33.1.jar:1.33.1]
	at io.grpc.kotlin.ClientCalls$Request$Unary.sendTo(ClientCalls.kt:237) ~[grpc-kotlin-stub-1.3.0.jar:na]
	at io.grpc.kotlin.ClientCalls$rpcImpl$1$1$sender$1.invokeSuspend(ClientCalls.kt:309) ~[grpc-kotlin-stub-1.3.0.jar:na]
	at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:33) ~[kotlin-stdlib-1.6.0.jar:1.6.0-release-798(1.6.0)]
	at kotlinx.coroutines.DispatchedTask.run(DispatchedTask.kt:106) ~[kotlinx-coroutines-core-jvm-1.5.2.jar:na]
	at kotlinx.coroutines.EventLoopImplBase.processNextEvent(EventLoop.common.kt:274) ~[kotlinx-coroutines-core-jvm-1.5.2.jar:na]
	at kotlinx.coroutines.BlockingCoroutine.joinBlocking(Builders.kt:85) ~[kotlinx-coroutines-core-jvm-1.5.2.jar:na]
	at kotlinx.coroutines.BuildersKt__BuildersKt.runBlocking(Builders.kt:59) ~[kotlinx-coroutines-core-jvm-1.5.2.jar:na]
	at kotlinx.coroutines.BuildersKt.runBlocking(Unknown Source) ~[kotlinx-coroutines-core-jvm-1.5.2.jar:na]
	at kotlinx.coroutines.BuildersKt__BuildersKt.runBlocking$default(Builders.kt:38) ~[kotlinx-coroutines-core-jvm-1.5.2.jar:na]
	at kotlinx.coroutines.BuildersKt.runBlocking$default(Unknown Source) ~[kotlinx-coroutines-core-jvm-1.5.2.jar:na]
	at com.fastonetech.computecloud.api.mgmt.service.quota.DeploymentQuotaServiceImpl.listNottmQuotaRes(DeploymentQuotaServiceImpl.kt:192) ~[classes/:na]
	at com.fastonetech.computecloud.api.mgmt.controller.SchedulerController.list(SchedulerController.kt:74) ~[classes/:na]
	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[na:na]
	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77) ~[na:na]
	at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) ~[na:na]
	at java.base/java.lang.reflect.Method.invoke(Method.java:568) ~[na:na]
	at org.springframework.web.method.support.InvocableHandlerMethod.doInvoke(InvocableHandlerMethod.java:205) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.web.method.support.InvocableHandlerMethod.invokeForRequest(InvocableHandlerMethod.java:150) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod.invokeAndHandle(ServletInvocableHandlerMethod.java:117) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.invokeHandlerMethod(RequestMappingHandlerAdapter.java:895) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.handleInternal(RequestMappingHandlerAdapter.java:808) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.mvc.method.AbstractHandlerMethodAdapter.handle(AbstractHandlerMethodAdapter.java:87) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java:1067) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java:963) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:1006) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.FrameworkServlet.doGet(FrameworkServlet.java:898) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at javax.servlet.http.HttpServlet.service(HttpServlet.java:655) ~[tomcat-embed-core-9.0.54.jar:4.0.FR]
	at org.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java:883) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at javax.servlet.http.HttpServlet.service(HttpServlet.java:764) ~[tomcat-embed-core-9.0.54.jar:4.0.FR]
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:227) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:53) ~[tomcat-embed-websocket-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:327) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.access.intercept.FilterSecurityInterceptor.invoke(FilterSecurityInterceptor.java:115) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.access.intercept.FilterSecurityInterceptor.doFilter(FilterSecurityInterceptor.java:81) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.access.ExceptionTranslationFilter.doFilter(ExceptionTranslationFilter.java:121) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.access.ExceptionTranslationFilter.doFilter(ExceptionTranslationFilter.java:115) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.session.SessionManagementFilter.doFilter(SessionManagementFilter.java:126) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.session.SessionManagementFilter.doFilter(SessionManagementFilter.java:81) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.authentication.AnonymousAuthenticationFilter.doFilter(AnonymousAuthenticationFilter.java:105) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestFilter.doFilter(SecurityContextHolderAwareRequestFilter.java:149) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.savedrequest.RequestCacheAwareFilter.doFilter(RequestCacheAwareFilter.java:63) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.authentication.logout.LogoutFilter.doFilter(LogoutFilter.java:103) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.authentication.logout.LogoutFilter.doFilter(LogoutFilter.java:89) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.header.HeaderWriterFilter.doHeadersAfter(HeaderWriterFilter.java:90) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.header.HeaderWriterFilter.doFilterInternal(HeaderWriterFilter.java:75) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.context.SecurityContextPersistenceFilter.doFilter(SecurityContextPersistenceFilter.java:110) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.context.SecurityContextPersistenceFilter.doFilter(SecurityContextPersistenceFilter.java:80) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.context.request.async.WebAsyncManagerIntegrationFilter.doFilterInternal(WebAsyncManagerIntegrationFilter.java:55) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy.doFilterInternal(FilterChainProxy.java:211) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy.doFilter(FilterChainProxy.java:183) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.web.filter.DelegatingFilterProxy.invokeDelegate(DelegatingFilterProxy.java:358) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.web.filter.DelegatingFilterProxy.doFilter(DelegatingFilterProxy.java:271) ~[spring-web-5.3.12.jar:5.3.12]
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.springframework.web.filter.RequestContextFilter.doFilterInternal(RequestContextFilter.java:100) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.3.12.jar:5.3.12]
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.springframework.web.filter.FormContentFilter.doFilterInternal(FormContentFilter.java:93) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.3.12.jar:5.3.12]
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.springframework.boot.actuate.metrics.web.servlet.WebMvcMetricsFilter.doFilterInternal(WebMvcMetricsFilter.java:96) ~[spring-boot-actuator-2.5.6.jar:2.5.6]
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.3.12.jar:5.3.12]
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.springframework.web.filter.CharacterEncodingFilter.doFilterInternal(CharacterEncodingFilter.java:201) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.3.12.jar:5.3.12]
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:197) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:97) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:540) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:135) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:92) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:78) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.valves.RemoteIpValve.invoke(RemoteIpValve.java:769) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:357) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.coyote.http11.Http11Processor.service(Http11Processor.java:382) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.coyote.AbstractProcessorLight.process(AbstractProcessorLight.java:65) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.coyote.AbstractProtocol$ConnectionHandler.process(AbstractProtocol.java:895) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.doRun(NioEndpoint.java:1722) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.tomcat.util.net.SocketProcessorBase.run(SocketProcessorBase.java:49) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.tomcat.util.threads.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1191) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.tomcat.util.threads.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:659) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:61) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at java.base/java.lang.Thread.run(Thread.java:833) ~[na:na]
	Suppressed: io.grpc.StatusException: CANCELLED: Client sendMessage() failed with Error
		at io.grpc.Status.asException(Status.java:549) ~[grpc-api-1.33.1.jar:1.33.1]
		at io.grpc.kotlin.ClientCalls$rpcImpl$1$1$1.onClose(ClientCalls.kt:296) ~[grpc-kotlin-stub-1.3.0.jar:na]
		at io.grpc.internal.ClientCallImpl.closeObserver(ClientCallImpl.java:617) ~[grpc-core-1.33.1.jar:1.33.1]
		at io.grpc.internal.ClientCallImpl.access$300(ClientCallImpl.java:70) ~[grpc-core-1.33.1.jar:1.33.1]
		at io.grpc.internal.ClientCallImpl$ClientStreamListenerImpl$1StreamClosed.runInternal(ClientCallImpl.java:803) ~[grpc-core-1.33.1.jar:1.33.1]
		at io.grpc.internal.ClientCallImpl$ClientStreamListenerImpl$1StreamClosed.runInContext(ClientCallImpl.java:782) ~[grpc-core-1.33.1.jar:1.33.1]
		at io.grpc.internal.ContextRunnable.run(ContextRunnable.java:37) ~[grpc-core-1.33.1.jar:1.33.1]
		at io.grpc.internal.SerializingExecutor.run(SerializingExecutor.java:123) ~[grpc-core-1.33.1.jar:1.33.1]
		at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136) ~[na:na]
		at java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635) ~[na:na]
		... 1 common frames omitted
```

```log
2023-01-19 06:17:01.853 ERROR 1 --- [nio-4397-exec-1] c.f.l.w.a.BasicRestControllerAdvice      : A business-exception occurred.
	... 143 common frames omitted
	at org.hibernate.resource.jdbc.internal.LogicalConnectionManagedImpl.acquireConnectionIfNeeded(LogicalConnectionManagedImpl.java:108) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at org.hibernate.internal.NonContextualJdbcConnectionAccess.obtainConnection(NonContextualJdbcConnectionAccess.java:38) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at org.hibernate.engine.jdbc.connections.internal.DatasourceConnectionProviderImpl.getConnection(DatasourceConnectionProviderImpl.java:122) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at com.zaxxer.hikari.HikariDataSource.getConnection(HikariDataSource.java:128) ~[HikariCP-4.0.3.jar:na]
	at com.zaxxer.hikari.pool.HikariPool.getConnection(HikariPool.java:162) ~[HikariCP-4.0.3.jar:na]
	at com.zaxxer.hikari.pool.HikariPool.getConnection(HikariPool.java:197) ~[HikariCP-4.0.3.jar:na]
	at com.zaxxer.hikari.pool.HikariPool.createTimeoutException(HikariPool.java:696) ~[HikariCP-4.0.3.jar:na]
Caused by: java.sql.SQLTransientConnectionException: HikariPool-1 - Connection is not available, request timed out after 30000ms.
	... 105 common frames omitted
	at org.springframework.dao.support.PersistenceExceptionTranslationInterceptor.invoke(PersistenceExceptionTranslationInterceptor.java:137) ~[spring-tx-5.3.12.jar:5.3.12]
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186) ~[spring-aop-5.3.12.jar:5.3.12]
	at org.springframework.transaction.interceptor.TransactionInterceptor.invoke(TransactionInterceptor.java:119) ~[spring-tx-5.3.12.jar:5.3.12]
	at org.springframework.transaction.interceptor.TransactionAspectSupport.invokeWithinTransaction(TransactionAspectSupport.java:388) ~[spring-tx-5.3.12.jar:5.3.12]
	at org.springframework.transaction.interceptor.TransactionInterceptor$1.proceedWithInvocation(TransactionInterceptor.java:123) ~[spring-tx-5.3.12.jar:5.3.12]
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186) ~[spring-aop-5.3.12.jar:5.3.12]
	at org.springframework.data.projection.DefaultMethodInvokingMethodInterceptor.invoke(DefaultMethodInvokingMethodInterceptor.java:80) ~[spring-data-commons-2.5.6.jar:2.5.6]
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186) ~[spring-aop-5.3.12.jar:5.3.12]
	at org.springframework.data.repository.core.support.QueryExecutorMethodInterceptor.invoke(QueryExecutorMethodInterceptor.java:138) ~[spring-data-commons-2.5.6.jar:2.5.6]
	at org.springframework.data.repository.core.support.QueryExecutorMethodInterceptor.doInvoke(QueryExecutorMethodInterceptor.java:159) ~[spring-data-commons-2.5.6.jar:2.5.6]
	at org.springframework.data.repository.core.support.RepositoryMethodInvoker.invoke(RepositoryMethodInvoker.java:121) ~[spring-data-commons-2.5.6.jar:2.5.6]
	at org.springframework.data.repository.core.support.RepositoryMethodInvoker.doInvoke(RepositoryMethodInvoker.java:137) ~[spring-data-commons-2.5.6.jar:2.5.6]
	at org.springframework.data.jpa.repository.query.AbstractJpaQuery.execute(AbstractJpaQuery.java:143) ~[spring-data-jpa-2.5.6.jar:2.5.6]
	at org.springframework.data.jpa.repository.query.AbstractJpaQuery.doExecute(AbstractJpaQuery.java:155) ~[spring-data-jpa-2.5.6.jar:2.5.6]
	at org.springframework.data.jpa.repository.query.JpaQueryExecution.execute(JpaQueryExecution.java:88) ~[spring-data-jpa-2.5.6.jar:2.5.6]
	at org.springframework.data.jpa.repository.query.JpaQueryExecution$CollectionExecution.doExecute(JpaQueryExecution.java:126) ~[spring-data-jpa-2.5.6.jar:2.5.6]
	at org.hibernate.query.criteria.internal.compile.CriteriaQueryTypeQueryAdapter.getResultList(CriteriaQueryTypeQueryAdapter.java:76) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at org.hibernate.query.Query.getResultList(Query.java:165) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at org.hibernate.query.internal.AbstractProducedQuery.list(AbstractProducedQuery.java:1604) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at org.hibernate.query.internal.AbstractProducedQuery.doList(AbstractProducedQuery.java:1636) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at org.hibernate.internal.SessionImpl.list(SessionImpl.java:1414) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at org.hibernate.engine.query.spi.HQLQueryPlan.performList(HQLQueryPlan.java:219) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at org.hibernate.hql.internal.ast.QueryTranslatorImpl.list(QueryTranslatorImpl.java:400) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at org.hibernate.loader.hql.QueryLoader.list(QueryLoader.java:506) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at org.hibernate.loader.Loader.list(Loader.java:2652) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at org.hibernate.loader.Loader.listIgnoreQueryCache(Loader.java:2657) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at org.hibernate.loader.Loader.doList(Loader.java:2825) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at org.hibernate.loader.Loader.doList(Loader.java:2843) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at org.hibernate.loader.Loader.doQueryAndInitializeNonLazyCollections(Loader.java:349) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at org.hibernate.loader.Loader.doQuery(Loader.java:948) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at org.hibernate.loader.Loader.executeQueryStatement(Loader.java:2012) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at org.hibernate.loader.Loader.executeQueryStatement(Loader.java:2034) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at org.hibernate.loader.Loader.prepareQueryStatement(Loader.java:2097) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at org.hibernate.engine.jdbc.internal.StatementPreparerImpl.prepareQueryStatement(StatementPreparerImpl.java:151) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at org.hibernate.engine.jdbc.internal.StatementPreparerImpl$StatementPreparationTemplate.prepareStatement(StatementPreparerImpl.java:176) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at org.hibernate.engine.jdbc.internal.StatementPreparerImpl$5.doPrepare(StatementPreparerImpl.java:149) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at org.hibernate.engine.jdbc.internal.StatementPreparerImpl.connection(StatementPreparerImpl.java:50) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at org.hibernate.resource.jdbc.internal.LogicalConnectionManagedImpl.getPhysicalConnection(LogicalConnectionManagedImpl.java:138) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at org.hibernate.resource.jdbc.internal.LogicalConnectionManagedImpl.acquireConnectionIfNeeded(LogicalConnectionManagedImpl.java:111) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at org.hibernate.engine.jdbc.spi.SqlExceptionHelper.convert(SqlExceptionHelper.java:99) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at org.hibernate.engine.jdbc.spi.SqlExceptionHelper.convert(SqlExceptionHelper.java:113) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at org.hibernate.exception.internal.StandardSQLExceptionConverter.convert(StandardSQLExceptionConverter.java:42) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
	at org.hibernate.exception.internal.SQLExceptionTypeDelegate.convert(SQLExceptionTypeDelegate.java:48) ~[hibernate-core-5.4.32.Final.jar:5.4.32.Final]
Caused by: org.hibernate.exception.JDBCConnectionException: Unable to acquire JDBC Connection
	... 93 common frames omitted
	at com.fastonetech.lib.core.exception.BusinessExceptionKt.catchAsBusinessException(BusinessException.kt:18) ~[fastone-core-0.1.0-SNAPSHOT.jar:na]
	at com.fastonetech.computecloud.api.mgmt.service.deployment.DefaultDeploymentService$listRefreshable$1.invoke(DefaultDeploymentService.kt:120) ~[classes/:na]
	at com.fastonetech.computecloud.api.mgmt.service.deployment.DefaultDeploymentService$listRefreshable$1.invoke(DefaultDeploymentService.kt:121) ~[classes/:na]
	at jdk.proxy2/jdk.proxy2.$Proxy179.findByProduct(Unknown Source) ~[na:na]
	at org.springframework.aop.framework.JdkDynamicAopProxy.invoke(JdkDynamicAopProxy.java:215) ~[spring-aop-5.3.12.jar:5.3.12]
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186) ~[spring-aop-5.3.12.jar:5.3.12]
	at org.springframework.data.repository.core.support.MethodInvocationValidator.invoke(MethodInvocationValidator.java:98) ~[spring-data-commons-2.5.6.jar:2.5.6]
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186) ~[spring-aop-5.3.12.jar:5.3.12]
	at org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:97) ~[spring-aop-5.3.12.jar:5.3.12]
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186) ~[spring-aop-5.3.12.jar:5.3.12]
	at org.springframework.data.jpa.repository.support.CrudMethodMetadataPostProcessor$CrudMethodMetadataPopulatingMethodInterceptor.invoke(CrudMethodMetadataPostProcessor.java:145) ~[spring-data-jpa-2.5.6.jar:2.5.6]
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186) ~[spring-aop-5.3.12.jar:5.3.12]
	at org.springframework.dao.support.PersistenceExceptionTranslationInterceptor.invoke(PersistenceExceptionTranslationInterceptor.java:152) ~[spring-tx-5.3.12.jar:5.3.12]
	at org.springframework.dao.support.DataAccessUtils.translateIfNecessary(DataAccessUtils.java:242) ~[spring-tx-5.3.12.jar:5.3.12]
	at org.springframework.dao.support.ChainedPersistenceExceptionTranslator.translateExceptionIfPossible(ChainedPersistenceExceptionTranslator.java:61) ~[spring-tx-5.3.12.jar:5.3.12]
	at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.translateExceptionIfPossible(AbstractEntityManagerFactoryBean.java:551) ~[spring-orm-5.3.12.jar:5.3.12]
	at org.springframework.orm.jpa.vendor.HibernateJpaDialect.translateExceptionIfPossible(HibernateJpaDialect.java:233) ~[spring-orm-5.3.12.jar:5.3.12]
	at org.springframework.orm.jpa.vendor.HibernateJpaDialect.convertHibernateAccessException(HibernateJpaDialect.java:255) ~[spring-orm-5.3.12.jar:5.3.12]
Caused by: org.springframework.dao.DataAccessResourceFailureException: Unable to acquire JDBC Connection; nested exception is org.hibernate.exception.JDBCConnectionException: Unable to acquire JDBC Connection
	at java.base/java.lang.Thread.run(Thread.java:833) ~[na:na]
	at org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:61) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.tomcat.util.threads.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:659) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.tomcat.util.threads.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1191) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.tomcat.util.net.SocketProcessorBase.run(SocketProcessorBase.java:49) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.doRun(NioEndpoint.java:1722) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.coyote.AbstractProtocol$ConnectionHandler.process(AbstractProtocol.java:895) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.coyote.AbstractProcessorLight.process(AbstractProcessorLight.java:65) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.coyote.http11.Http11Processor.service(Http11Processor.java:382) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:357) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.valves.RemoteIpValve.invoke(RemoteIpValve.java:769) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:78) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:92) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:135) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:540) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:97) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:197) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.web.filter.CharacterEncodingFilter.doFilterInternal(CharacterEncodingFilter.java:201) ~[spring-web-5.3.12.jar:5.3.12]
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.boot.actuate.metrics.web.servlet.WebMvcMetricsFilter.doFilterInternal(WebMvcMetricsFilter.java:96) ~[spring-boot-actuator-2.5.6.jar:2.5.6]
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.web.filter.FormContentFilter.doFilterInternal(FormContentFilter.java:93) ~[spring-web-5.3.12.jar:5.3.12]
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.web.filter.RequestContextFilter.doFilterInternal(RequestContextFilter.java:100) ~[spring-web-5.3.12.jar:5.3.12]
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.springframework.web.filter.DelegatingFilterProxy.doFilter(DelegatingFilterProxy.java:271) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.web.filter.DelegatingFilterProxy.invokeDelegate(DelegatingFilterProxy.java:358) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.security.web.FilterChainProxy.doFilter(FilterChainProxy.java:183) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy.doFilterInternal(FilterChainProxy.java:211) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.security.web.context.request.async.WebAsyncManagerIntegrationFilter.doFilterInternal(WebAsyncManagerIntegrationFilter.java:55) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.context.SecurityContextPersistenceFilter.doFilter(SecurityContextPersistenceFilter.java:80) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.context.SecurityContextPersistenceFilter.doFilter(SecurityContextPersistenceFilter.java:110) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.security.web.header.HeaderWriterFilter.doFilterInternal(HeaderWriterFilter.java:75) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.header.HeaderWriterFilter.doHeadersAfter(HeaderWriterFilter.java:90) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.authentication.logout.LogoutFilter.doFilter(LogoutFilter.java:89) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.authentication.logout.LogoutFilter.doFilter(LogoutFilter.java:103) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.savedrequest.RequestCacheAwareFilter.doFilter(RequestCacheAwareFilter.java:63) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestFilter.doFilter(SecurityContextHolderAwareRequestFilter.java:149) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.authentication.AnonymousAuthenticationFilter.doFilter(AnonymousAuthenticationFilter.java:105) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.session.SessionManagementFilter.doFilter(SessionManagementFilter.java:81) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.session.SessionManagementFilter.doFilter(SessionManagementFilter.java:126) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.access.ExceptionTranslationFilter.doFilter(ExceptionTranslationFilter.java:115) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.access.ExceptionTranslationFilter.doFilter(ExceptionTranslationFilter.java:121) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.access.intercept.FilterSecurityInterceptor.doFilter(FilterSecurityInterceptor.java:81) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.access.intercept.FilterSecurityInterceptor.invoke(FilterSecurityInterceptor.java:115) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:327) ~[spring-security-web-5.5.3.jar:5.5.3]
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:53) ~[tomcat-embed-websocket-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:227) ~[tomcat-embed-core-9.0.54.jar:9.0.54]
	at javax.servlet.http.HttpServlet.service(HttpServlet.java:764) ~[tomcat-embed-core-9.0.54.jar:4.0.FR]
	at org.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java:883) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at javax.servlet.http.HttpServlet.service(HttpServlet.java:655) ~[tomcat-embed-core-9.0.54.jar:4.0.FR]
	at org.springframework.web.servlet.FrameworkServlet.doGet(FrameworkServlet.java:898) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:1006) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java:963) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java:1067) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.mvc.method.AbstractHandlerMethodAdapter.handle(AbstractHandlerMethodAdapter.java:87) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.handleInternal(RequestMappingHandlerAdapter.java:808) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.invokeHandlerMethod(RequestMappingHandlerAdapter.java:895) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod.invokeAndHandle(ServletInvocableHandlerMethod.java:117) ~[spring-webmvc-5.3.12.jar:5.3.12]
	at org.springframework.web.method.support.InvocableHandlerMethod.invokeForRequest(InvocableHandlerMethod.java:150) ~[spring-web-5.3.12.jar:5.3.12]
	at org.springframework.web.method.support.InvocableHandlerMethod.doInvoke(InvocableHandlerMethod.java:205) ~[spring-web-5.3.12.jar:5.3.12]
	at java.base/java.lang.reflect.Method.invoke(Method.java:568) ~[na:na]
	at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) ~[na:na]
	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77) ~[na:na]
	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[na:na]
	at com.fastonetech.computecloud.api.mgmt.controller.SchedulerController.lifecycle(SchedulerController.kt:49) ~[classes/:na]
	at com.fastonetech.computecloud.api.mgmt.service.event.LifecycleEventHandler.consume(LifecycleEventHandler.kt:33) ~[classes/:na]
	at com.fastonetech.computecloud.api.mgmt.service.deployment.DefaultDeploymentService.listRefreshable(DefaultDeploymentService.kt:120) ~[classes/:na]
	at com.fastonetech.lib.core.exception.BusinessExceptionKt.catchAsBusinessException(BusinessException.kt:15) ~[fastone-core-0.1.0-SNAPSHOT.jar:na]
com.fastonetech.lib.core.exception.BusinessException: 未知错误
```