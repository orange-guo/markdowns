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

## fastone-api服务升级spring-boot3后使用Token请求保护资源报错

### 现象

使用Token请求保护资源报错401

### 解决方案

1. `http.securityContext().requireExplicitSave(false).and()`
2. `http.securityContext().securityContextRepository(new HttpSessionSecurityContextRepository()).and()`

### 备注

> spring6之后SecurityContextHolderFilter替换了SecurityContextPersistenceFilter<br/>
> SecurityContextRepository默认实现也变了<br/>
> (HttpSessionSecurityContextRepository) -> (RequestAttributeSecurityContextRepository)<br/>

#### 参考

- [Spring Security 6 CustomAuthenticationFilter(intend to replace the UsernamePasswordAuthenticationFilter) does not work](https://stackoverflow.com/questions/74629234/spring-security-6-customauthenticationfilterintend-to-replace-the-usernamepassw)
- [Default to SecurityContextHolderFilter instead of SecurityContextPersistenceFilter #11110](https://github.com/spring-projects/spring-security/issues/11110)

## CC亚太二区任务执行失败, 没有输出

### 现象

执行以下任务均失败

- lammps-cpu
- lammps-gpu
- abaqus
- AutoDock-Vina

### 原因

`fastone-scheduler`调度任务时执行chown命令失败, 报错内容如下

```log
chown: cannot access '/fastone/users/u17638503879/jobs/job-886': No such file or directory
```

`juicefs`mount`/fastone`目录晚于`fastone-scheduler`启动导致使用的不是同一个`/fastone`挂载

### 解决方案

有以下两种解决方案

1. 把`docker mount`改为rslave, 这样可以确保宿主机和容器使用的是同一个挂载
2. 等`juicefs`挂载完成后再启动fastone-scheduler

### 排查步骤

在宿主机和容器中分别执行ls观察结果

```bash
ubuntu@head-1:~$ ls /fastone/users/
tests  u17638503879
ubuntu@head-1:~$ docker exec -it fastone-scheduler ls /fastone/users
test
```

发现结果不一致, 开始后续推测

### 1. 推测为juice为fuse和docker mount不兼容

- 执行docker inspect获取容器信息

```json
[
	{
		"Id": "664cff406bd27e6406b6f356b914f726a5b7ed9d6be37ac1242a2730e344118a",
		"Created": "2023-02-07T04:02:21.790326525Z",
		"Path": "java",
		"Args": [
			"-cp",
			"/app/resources:/app/classes:/app/libs/*",
			"com.fastonetech.scheduler.SchedulerApplication"
		],
		"State": {
			"Status": "running",
			"Running": true,
			"Paused": false,
			"Restarting": false,
			"OOMKilled": false,
			"Dead": false,
			"Pid": 11614,
			"ExitCode": 0,
			"Error": "",
			"StartedAt": "2023-02-07T04:02:22.053512527Z",
			"FinishedAt": "0001-01-01T00:00:00Z"
		},
		"Image": "sha256:390bb12d9d07facd4ecf8987ccc0f1de6484d1f88dfeca239b3e234dbefd6acf",
		"ResolvConfPath": "/etc/resolv.conf",
		"HostnamePath": "/var/lib/docker/containers/664cff406bd27e6406b6f356b914f726a5b7ed9d6be37ac1242a2730e344118a/hostname",
		"HostsPath": "/var/lib/docker/containers/664cff406bd27e6406b6f356b914f726a5b7ed9d6be37ac1242a2730e344118a/hosts",
		"LogPath": "/var/lib/docker/containers/664cff406bd27e6406b6f356b914f726a5b7ed9d6be37ac1242a2730e344118a/664cff406bd27e6406b6f356b914f726a5b7ed9d6be37ac1242a2730e344118a-json.log",
		"Name": "/fastone-scheduler",
		"RestartCount": 0,
		"Driver": "overlay2",
		"Platform": "linux",
		"MountLabel": "",
		"ProcessLabel": "",
		"AppArmorProfile": "docker-default",
		"ExecIDs": null,
		"HostConfig": {
			"Binds": [
				"/var/run/munge:/var/run/munge:ro",
				"/var/run/docker.sock:/var/run/docker.sock:ro",
				"/home/fastone/.ssh/id_rsa:/home/fastone/.ssh/id_rsa:ro",
				"/fastone:/fastone",
				"/etc/fastone/scheduler:/etc/fastone/scheduler",
				"/etc/resolv.conf:/etc/resolv.conf:ro"
			],
			"ContainerIDFile": "",
			"LogConfig": {
				"Type": "json-file",
				"Config": {}
			},
			"NetworkMode": "host",
			"PortBindings": {},
			"RestartPolicy": {
				"Name": "always",
				"MaximumRetryCount": 0
			},
			"AutoRemove": false,
			"VolumeDriver": "",
			"VolumesFrom": null,
			"CapAdd": null,
			"CapDrop": null,
			"CgroupnsMode": "host",
			"Dns": [],
			"DnsOptions": [],
			"DnsSearch": [],
			"ExtraHosts": null,
			"GroupAdd": null,
			"IpcMode": "private",
			"Cgroup": "",
			"Links": null,
			"OomScoreAdj": 0,
			"PidMode": "",
			"Privileged": false,
			"PublishAllPorts": false,
			"ReadonlyRootfs": false,
			"SecurityOpt": null,
			"UTSMode": "",
			"UsernsMode": "",
			"ShmSize": 67108864,
			"Runtime": "runc",
			"ConsoleSize": [
				0,
				0
			],
			"Isolation": "",
			"CpuShares": 0,
			"Memory": 0,
			"NanoCpus": 0,
			"CgroupParent": "",
			"BlkioWeight": 0,
			"BlkioWeightDevice": [],
			"BlkioDeviceReadBps": null,
			"BlkioDeviceWriteBps": null,
			"BlkioDeviceReadIOps": null,
			"BlkioDeviceWriteIOps": null,
			"CpuPeriod": 0,
			"CpuQuota": 0,
			"CpuRealtimePeriod": 0,
			"CpuRealtimeRuntime": 0,
			"CpusetCpus": "",
			"CpusetMems": "",
			"Devices": [],
			"DeviceCgroupRules": null,
			"DeviceRequests": null,
			"KernelMemory": 0,
			"KernelMemoryTCP": 0,
			"MemoryReservation": 0,
			"MemorySwap": 0,
			"MemorySwappiness": null,
			"OomKillDisable": false,
			"PidsLimit": null,
			"Ulimits": null,
			"CpuCount": 0,
			"CpuPercent": 0,
			"IOMaximumIOps": 0,
			"IOMaximumBandwidth": 0,
			"MaskedPaths": [
				"/proc/asound",
				"/proc/acpi",
				"/proc/kcore",
				"/proc/keys",
				"/proc/latency_stats",
				"/proc/timer_list",
				"/proc/timer_stats",
				"/proc/sched_debug",
				"/proc/scsi",
				"/sys/firmware"
			],
			"ReadonlyPaths": [
				"/proc/bus",
				"/proc/fs",
				"/proc/irq",
				"/proc/sys",
				"/proc/sysrq-trigger"
			]
		},
		"GraphDriver": {
			"Data": {
				"LowerDir": "/var/lib/docker/overlay2/3904d677bc7e22664ba5537749ead6826c9b0fd345f0845bfb162ed5175a3d27-init/diff:/var/lib/docker/overlay2/c110304affe06c98c093f5c61ce7e9877fbd2b865efde5f1fb59b23de47c83d0/diff:/var/lib/docker/overlay2/a962a99e8ea6b2d0e609e1d7e18e01c9d6b635ac3d3f0c4114c2260a774c502f/diff:/var/lib/docker/overlay2/5ebd33136f9384c49c21a5d09742a798ccb3ee73d2a022370ca10af95b426e4d/diff:/var/lib/docker/overlay2/b1e9ac16c1d694e57e3c3dbf07159943d4f8952f00922b9f3f975da5a6ea82de/diff:/var/lib/docker/overlay2/5fc2b15bb0e0164ef375185c04a5a62047801c3ae1fb1432f599de0dc633192d/diff:/var/lib/docker/overlay2/8ebe08e114672a8939b3fffd3bef39817d8b8809f31a1c7dfda0a732f372b239/diff:/var/lib/docker/overlay2/cf300a36b69d34dcaa0c1e20d33b47714031b4f320545bdc68abb7e5ea0d6a5a/diff:/var/lib/docker/overlay2/aab22cfe1a0cb9fae8a66e9d6be2e91937f2740e68ea86aad51905fb7de3fed3/diff",
				"MergedDir": "/var/lib/docker/overlay2/3904d677bc7e22664ba5537749ead6826c9b0fd345f0845bfb162ed5175a3d27/merged",
				"UpperDir": "/var/lib/docker/overlay2/3904d677bc7e22664ba5537749ead6826c9b0fd345f0845bfb162ed5175a3d27/diff",
				"WorkDir": "/var/lib/docker/overlay2/3904d677bc7e22664ba5537749ead6826c9b0fd345f0845bfb162ed5175a3d27/work"
			},
			"Name": "overlay2"
		},
		"Mounts": [
			{
				"Type": "bind",
				"Source": "/fastone",
				"Destination": "/fastone",
				"Mode": "",
				"RW": true,
				"Propagation": "rprivate"
			},
			{
				"Type": "bind",
				"Source": "/etc/fastone/scheduler",
				"Destination": "/etc/fastone/scheduler",
				"Mode": "",
				"RW": true,
				"Propagation": "rprivate"
			},
			{
				"Type": "bind",
				"Source": "/etc/resolv.conf",
				"Destination": "/etc/resolv.conf",
				"Mode": "ro",
				"RW": false,
				"Propagation": "rprivate"
			},
			{
				"Type": "bind",
				"Source": "/var/run/munge",
				"Destination": "/var/run/munge",
				"Mode": "ro",
				"RW": false,
				"Propagation": "rprivate"
			},
			{
				"Type": "bind",
				"Source": "/var/run/docker.sock",
				"Destination": "/var/run/docker.sock",
				"Mode": "ro",
				"RW": false,
				"Propagation": "rprivate"
			},
			{
				"Type": "bind",
				"Source": "/home/fastone/.ssh/id_rsa",
				"Destination": "/home/fastone/.ssh/id_rsa",
				"Mode": "ro",
				"RW": false,
				"Propagation": "rprivate"
			}
		],
		"Config": {
			"Hostname": "head-1",
			"Domainname": "",
			"User": "",
			"AttachStdin": false,
			"AttachStdout": false,
			"AttachStderr": false,
			"Tty": false,
			"OpenStdin": false,
			"StdinOnce": false,
			"Env": [
				"scheduler.pam=true",
				"scheduler.systems[0]=SLURM",
				"PATH=/opt/java/openjdk/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
				"LANGUAGE=en_US:en",
				"LC_ALL=en_US.UTF-8",
				"JAVA_HOME=/opt/java/openjdk",
				"JAVA_VERSION=jdk-11.0.11+9",
				"LANG=en_US.UTF-8",
				"spring.profiles.active=prod"
			],
			"Cmd": null,
			"Image": "r.fastonetech.com:5000/fastone-scheduler:latest",
			"Volumes": {},
			"WorkingDir": "",
			"Entrypoint": [
				"java",
				"-cp",
				"/app/resources:/app/classes:/app/libs/*",
				"com.fastonetech.scheduler.SchedulerApplication"
			],
			"OnBuild": null,
			"Labels": {}
		},
		"NetworkSettings": {
			"Bridge": "",
			"SandboxID": "03fb455a1a1a89fcbbed005b85e823a344c59598b00de720f369ff7148607108",
			"HairpinMode": false,
			"LinkLocalIPv6Address": "",
			"LinkLocalIPv6PrefixLen": 0,
			"Ports": {},
			"SandboxKey": "/var/run/docker/netns/default",
			"SecondaryIPAddresses": null,
			"SecondaryIPv6Addresses": null,
			"EndpointID": "",
			"Gateway": "",
			"GlobalIPv6Address": "",
			"GlobalIPv6PrefixLen": 0,
			"IPAddress": "",
			"IPPrefixLen": 0,
			"IPv6Gateway": "",
			"MacAddress": "",
			"Networks": {
				"host": {
					"IPAMConfig": null,
					"Links": null,
					"Aliases": null,
					"NetworkID": "c458a4e224d2abf50c989f2110f780e1b7e55197b2e97e2c488f29d11d8ef785",
					"EndpointID": "3a4928fd34531d2a70506559be444ebd61fca6df4d977a97d9906fb265730322",
					"Gateway": "",
					"IPAddress": "",
					"IPPrefixLen": 0,
					"IPv6Gateway": "",
					"GlobalIPv6Address": "",
					"GlobalIPv6PrefixLen": 0,
					"MacAddress": "",
					"DriverOpts": null
				}
			}
		}
	}
]
```

- 根据该结果输出内容生成docker run命令

```bash
docker run -d --name fastone-scheduler-2 \
--network host \
--restart always \
-v /fastone:/fastone \
-v /etc/fastone/scheduler:/etc/fastone/scheduler \
-v /etc/resolv.conf:/etc/resolv.conf:ro \
-v /var/run/munge:/var/run/munge:ro \
-v /var/run/docker.sock:/var/run/docker.sock:ro \
-v /home/fastone/.ssh/id_rsa:/home/fastone/.ssh/id_rsa:ro \
-e scheduler.pam=true \
-e scheduler.systems[0]=SLURM \
-e PATH=/opt/java/openjdk/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin \
-e LANGUAGE=en_US:en \
-e LC_ALL=en_US.UTF-8 \
-e JAVA_HOME=/opt/java/openjdk \
-e JAVA_VERSION=jdk-11.0.11+9 \
-e LANG=en_US.UTF-8 \
-e spring.profiles.active=prod \
r.fastonetech.com:5000/fastone-scheduler:latest
```

- 执行ls命令后发现文件和宿主机一致, 推测有问题

### 2. 容器外的Mount晚于创建容器时创建的Mount导致文件不一致

- 观察juicefs的log

```log
2023/02/07 04:02:43.868479 juicefs[12345] <INFO>: Meta address: tikv://fastone-tikv-0:2379,fastone-tikv-1:2379,fastone-tikv-2:2379/1622436422965399552 [interface.go:402]
2023/02/07 04:02:43.890111 juicefs[12345] <INFO>: Data use s3://dev-juicefs/1622436422965399552/ [mount.go:428]
2023/02/07 04:02:43.891819 juicefs[12345] <INFO>: Disk cache (/var/jfsCache/e28730be-605e-4e85-967e-4352484bba38/): capacity (204800 MB), free ratio (10%), max pending pages (15) [disk_cache.go:94]
2023/02/07 04:02:43.997130 juicefs[12352] <INFO>: Meta address: tikv://fastone-tikv-0:2379,fastone-tikv-1:2379,fastone-tikv-2:2379/1622436422965399552 [interface.go:402]
2023/02/07 04:02:44.016998 juicefs[12352] <INFO>: Data use s3://dev-juicefs/1622436422965399552/ [mount.go:428]
2023/02/07 04:02:44.017308 juicefs[12352] <INFO>: Disk cache (/var/jfsCache/e28730be-605e-4e85-967e-4352484bba38/): capacity (204800 MB), free ratio (10%), max pending pages (15) [disk_cache.go:94]
2023/02/07 04:02:44.024936 juicefs[12352] <INFO>: Create session 40 OK with version: 1.0.3+2022-12-27.e4bf15a [base.go:275]
2023/02/07 04:02:44.026162 juicefs[12352] <INFO>: Prometheus metrics listening on 127.0.0.1:9567 [mount.go:161]
2023/02/07 04:02:44.027034 juicefs[12352] <INFO>: Add fuse.juicefs into PRUNEFS of /etc/updatedb.conf [mount_unix.go:167]
2023/02/07 04:02:44.027083 juicefs[12352] <INFO>: Mounting volume 1622436422965399552 at /fastone ... [mount_unix.go:181]
```

- 观察fastone-scheduler的日志

```log
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v2.5.4)

2023-02-07 04:02:24.874  INFO 1 --- [  restartedMain] c.f.scheduler.SchedulerApplication       : Starting SchedulerApplication using Java 11.0.11 on head-1 with PID 1 (/app/classes started by root in /)
2023-02-07 04:02:24.877 DEBUG 1 --- [  restartedMain] c.f.scheduler.SchedulerApplication       : Running with Spring Boot v2.5.4, Spring v5.3.9
2023-02-07 04:02:24.878  INFO 1 --- [  restartedMain] c.f.scheduler.SchedulerApplication       : The following profiles are active: prod
2023-02-07 04:02:24.997  INFO 1 --- [  restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : Devtools property defaults active! Set 'spring.devtools.add-properties' to 'false' to disable
2023-02-07 04:02:24.998  INFO 1 --- [  restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : For additional web related logging consider setting the 'logging.level.web' property to 'DEBUG'
2023-02-07 04:02:26.538 DEBUG 1 --- [  restartedMain] .c.c.r.AbstractAutoScanPackagesRegistrar : Using Auto-Configuration Base Package 'com.fastonetech.scheduler'
2023-02-07 04:02:26.540 DEBUG 1 --- [  restartedMain] .c.c.r.AbstractAutoScanPackagesRegistrar : Using Auto-Configuration Base Package 'com.fastonetech.common.api'
2023-02-07 04:02:26.611 DEBUG 1 --- [  restartedMain] .c.c.r.AbstractAutoScanPackagesRegistrar : Using Auto-Configuration Base Package 'com.fastonetech.common.security'
2023-02-07 04:02:26.646 DEBUG 1 --- [  restartedMain] .c.c.r.AbstractAutoScanPackagesRegistrar : Using Auto-Configuration Base Package 'com.fastonetech.common.ssh'
2023-02-07 04:02:27.218  INFO 1 --- [  restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
2023-02-07 04:02:27.663  INFO 1 --- [  restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 435 ms. Found 6 JPA repository interfaces.
2023-02-07 04:02:28.444  INFO 1 --- [  restartedMain] o.s.cloud.context.scope.GenericScope     : BeanFactory id=a58c266f-73aa-30b8-81fe-4dc36b7df78e
2023-02-07 04:02:28.675  INFO 1 --- [  restartedMain] ptablePropertiesBeanFactoryPostProcessor : Post-processing PropertySource instances
2023-02-07 04:02:28.677  INFO 1 --- [  restartedMain] c.u.j.EncryptablePropertySourceConverter : Skipping PropertySource configurationProperties [class org.springframework.boot.context.properties.source.ConfigurationPropertySourcesPropertySource
2023-02-07 04:02:28.677  INFO 1 --- [  restartedMain] c.u.j.EncryptablePropertySourceConverter : Skipping PropertySource servletConfigInitParams [class org.springframework.core.env.PropertySource$StubPropertySource
2023-02-07 04:02:28.678  INFO 1 --- [  restartedMain] c.u.j.EncryptablePropertySourceConverter : Skipping PropertySource servletContextInitParams [class org.springframework.core.env.PropertySource$StubPropertySource
2023-02-07 04:02:28.684  INFO 1 --- [  restartedMain] c.u.j.EncryptablePropertySourceConverter : Converting PropertySource systemProperties [org.springframework.core.env.PropertiesPropertySource] to EncryptableMapPropertySourceWrapper
2023-02-07 04:02:28.684  INFO 1 --- [  restartedMain] c.u.j.EncryptablePropertySourceConverter : Converting PropertySource systemEnvironment [org.springframework.boot.env.SystemEnvironmentPropertySourceEnvironmentPostProcessor$OriginAwareSystemEnvironmentPropertySource] to EncryptableSystemEnvironmentPropertySourceWrapper
2023-02-07 04:02:28.684  INFO 1 --- [  restartedMain] c.u.j.EncryptablePropertySourceConverter : Converting PropertySource random [org.springframework.boot.env.RandomValuePropertySource] to EncryptablePropertySourceWrapper
2023-02-07 04:02:28.685  INFO 1 --- [  restartedMain] c.u.j.EncryptablePropertySourceConverter : Converting PropertySource cachedrandom [org.springframework.cloud.util.random.CachedRandomPropertySource] to EncryptablePropertySourceWrapper
2023-02-07 04:02:28.685  INFO 1 --- [  restartedMain] c.u.j.EncryptablePropertySourceConverter : Converting PropertySource springCloudClientHostInfo [org.springframework.core.env.MapPropertySource] to EncryptableMapPropertySourceWrapper
2023-02-07 04:02:28.685  INFO 1 --- [  restartedMain] c.u.j.EncryptablePropertySourceConverter : Converting PropertySource Config resource 'class path resource [application-prod.yml]' via location 'optional:classpath:/' [org.springframework.boot.env.OriginTrackedMapPropertySource] to EncryptableMapPropertySourceWrapper
2023-02-07 04:02:28.685  INFO 1 --- [  restartedMain] c.u.j.EncryptablePropertySourceConverter : Converting PropertySource Config resource 'class path resource [application.yml]' via location 'optional:classpath:/' [org.springframework.boot.env.OriginTrackedMapPropertySource] to EncryptableMapPropertySourceWrapper
2023-02-07 04:02:28.685  INFO 1 --- [  restartedMain] c.u.j.EncryptablePropertySourceConverter : Converting PropertySource devtools [org.springframework.core.env.MapPropertySource] to EncryptableMapPropertySourceWrapper
2023-02-07 04:02:28.987  INFO 1 --- [  restartedMain] trationDelegate$BeanPostProcessorChecker : Bean 'org.springframework.security.access.expression.method.DefaultMethodSecurityExpressionHandler@5038bfd7' of type [org.springframework.security.access.expression.method.DefaultMethodSecurityExpressionHandler] is not eligible for getting processed by all BeanPostProcessors (for example: not eligible for auto-proxying)
2023-02-07 04:02:29.009  INFO 1 --- [  restartedMain] trationDelegate$BeanPostProcessorChecker : Bean 'methodSecurityMetadataSource' of type [org.springframework.security.access.method.DelegatingMethodSecurityMetadataSource] is not eligible for getting processed by all BeanPostProcessors (for example: not eligible for auto-proxying)
2023-02-07 04:02:29.219  INFO 1 --- [  restartedMain] c.u.j.filter.DefaultLazyPropertyFilter   : Property Filter custom Bean not found with name 'encryptablePropertyFilter'. Initializing Default Property Filter
2023-02-07 04:02:29.229  INFO 1 --- [  restartedMain] c.u.j.r.DefaultLazyPropertyResolver      : Property Resolver custom Bean not found with name 'encryptablePropertyResolver'. Initializing Default Property Resolver
2023-02-07 04:02:29.233  INFO 1 --- [  restartedMain] c.u.j.d.DefaultLazyPropertyDetector      : Property Detector custom Bean not found with name 'encryptablePropertyDetector'. Initializing Default Property Detector
2023-02-07 04:02:30.027  INFO 1 --- [  restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 7000 (http)
2023-02-07 04:02:30.044  INFO 1 --- [  restartedMain] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2023-02-07 04:02:30.047  INFO 1 --- [  restartedMain] org.apache.catalina.core.StandardEngine  : Starting Servlet engine: [Apache Tomcat/9.0.52]
2023-02-07 04:02:30.222  INFO 1 --- [  restartedMain] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2023-02-07 04:02:30.223  INFO 1 --- [  restartedMain] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 5225 ms
2023-02-07 04:02:30.704  INFO 1 --- [  restartedMain] o.f.c.internal.license.VersionPrinter    : Flyway Community Edition 7.7.3 by Redgate
2023-02-07 04:02:30.730  INFO 1 --- [  restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
2023-02-07 04:02:30.893  INFO 1 --- [  restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
2023-02-07 04:02:30.942  INFO 1 --- [  restartedMain] o.f.c.i.database.base.DatabaseType       : Database: jdbc:postgresql://127.0.0.1:5432/scheduler (PostgreSQL 12.6)
2023-02-07 04:02:31.004  INFO 1 --- [  restartedMain] o.f.core.internal.command.DbValidate     : Successfully validated 10 migrations (execution time 00:00.038s)
2023-02-07 04:02:31.023  INFO 1 --- [  restartedMain] o.f.c.i.s.JdbcTableSchemaHistory         : Creating Schema History table "public"."flyway_schema_history" ...
2023-02-07 04:02:31.063  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.069  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.072  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.084  INFO 1 --- [  restartedMain] o.f.core.internal.command.DbMigrate      : Current version of schema "public": << Empty Schema >>
2023-02-07 04:02:31.127  INFO 1 --- [  restartedMain] o.f.core.internal.command.DbMigrate      : Migrating schema "public" to version "1 - create"
2023-02-07 04:02:31.137  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.143  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.149  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.155  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.164  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.171  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.178  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.189  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.197  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.200  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.206  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.212  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.215  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.218  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.220  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.221  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.223  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.225  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.226  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.228  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.229  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.230  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.232  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.233  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.237  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.252  INFO 1 --- [  restartedMain] o.f.core.internal.command.DbMigrate      : Migrating schema "public" to version "1.1.0.1 - changeDeployMode"
2023-02-07 04:02:31.260  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.272  INFO 1 --- [  restartedMain] o.f.core.internal.command.DbMigrate      : Migrating schema "public" to version "1.1.0.2 - UserTypeDefault"
2023-02-07 04:02:31.273  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.280  INFO 1 --- [  restartedMain] o.f.core.internal.command.DbMigrate      : Migrating schema "public" to version "1.1.0.3 - job app definition"
2023-02-07 04:02:31.281  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.291  INFO 1 --- [  restartedMain] o.f.core.internal.command.DbMigrate      : Migrating schema "public" to version "1.1.0.4 - add phone column to users"
2023-02-07 04:02:31.293  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.294  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.304  INFO 1 --- [  restartedMain] o.f.core.internal.command.DbMigrate      : Migrating schema "public" to version "1.1.0.5 - user state extension"
2023-02-07 04:02:31.305  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.305  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.306  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.306  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.308  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.315  INFO 1 --- [  restartedMain] o.f.core.internal.command.DbMigrate      : Migrating schema "public" to version "1.1.0.6 - user add params"
2023-02-07 04:02:31.316  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.329  INFO 1 --- [  restartedMain] o.f.core.internal.command.DbMigrate      : Migrating schema "public" to version "1.1.0.7 - create user group"
2023-02-07 04:02:31.335  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.338  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.343  INFO 1 --- [  restartedMain] o.f.core.internal.command.DbMigrate      : Migrating schema "public" to version "1.1.0.8 - add monitors"
2023-02-07 04:02:31.350  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.355  INFO 1 --- [  restartedMain] o.f.core.internal.command.DbMigrate      : Migrating schema "public" to version "1.1.0.9 - alter user for login shell"
2023-02-07 04:02:31.356  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.356  INFO 1 --- [  restartedMain] o.f.c.i.s.DefaultSqlScriptExecutor       : 0 rows affected
2023-02-07 04:02:31.360  INFO 1 --- [  restartedMain] o.f.core.internal.command.DbMigrate      : Successfully applied 10 migrations to schema "public", now at version v1.1.0.9 (execution time 00:00.281s)
2023-02-07 04:02:31.628  INFO 1 --- [  restartedMain] o.hibernate.jpa.internal.util.LogHelper  : HHH000204: Processing PersistenceUnitInfo [name: default]
2023-02-07 04:02:31.732  INFO 1 --- [  restartedMain] org.hibernate.Version                    : HHH000412: Hibernate ORM core version 5.4.32.Final
2023-02-07 04:02:32.055  INFO 1 --- [  restartedMain] o.hibernate.annotations.common.Version   : HCANN000001: Hibernate Commons Annotations {5.1.2.Final}
2023-02-07 04:02:32.249  INFO 1 --- [  restartedMain] org.hibernate.dialect.Dialect            : HHH000400: Using dialect: org.hibernate.dialect.PostgreSQL10Dialect
2023-02-07 04:02:34.028  INFO 1 --- [  restartedMain] o.h.e.t.j.p.i.JtaPlatformInitiator       : HHH000490: Using JtaPlatform implementation: [org.hibernate.engine.transaction.jta.platform.internal.NoJtaPlatform]
2023-02-07 04:02:34.040  INFO 1 --- [  restartedMain] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'
2023-02-07 04:02:35.396  WARN 1 --- [  restartedMain] JpaBaseConfiguration$JpaWebConfiguration : spring.jpa.open-in-view is enabled by default. Therefore, database queries may be performed during view rendering. Explicitly configure spring.jpa.open-in-view to disable this warning
2023-02-07 04:02:35.522 DEBUG 1 --- [  restartedMain] c.f.c.s.filter.JwtAuthenticationFilter   : Filter 'jwtAuthenticationFilter' configured for use
2023-02-07 04:02:36.371  INFO 1 --- [  restartedMain] c.f.common.ssh.client.SshClientDelegate  : $ sudo ls
2023-02-07 04:02:37.431  INFO 1 --- [  restartedMain] c.u.j.encryptor.DefaultLazyEncryptor     : String Encryptor custom Bean not found with name 'jasyptStringEncryptor'. Initializing Default String Encryptor
2023-02-07 04:02:37.452  INFO 1 --- [  restartedMain] c.u.j.c.StringEncryptorBuilder           : Encryptor config not found for property jasypt.encryptor.algorithm, using default value: PBEWITHHMACSHA512ANDAES_256
2023-02-07 04:02:37.453  INFO 1 --- [  restartedMain] c.u.j.c.StringEncryptorBuilder           : Encryptor config not found for property jasypt.encryptor.key-obtention-iterations, using default value: 1000
2023-02-07 04:02:37.454  INFO 1 --- [  restartedMain] c.u.j.c.StringEncryptorBuilder           : Encryptor config not found for property jasypt.encryptor.pool-size, using default value: 1
2023-02-07 04:02:37.454  INFO 1 --- [  restartedMain] c.u.j.c.StringEncryptorBuilder           : Encryptor config not found for property jasypt.encryptor.provider-name, using default value: null
2023-02-07 04:02:37.455  INFO 1 --- [  restartedMain] c.u.j.c.StringEncryptorBuilder           : Encryptor config not found for property jasypt.encryptor.provider-class-name, using default value: null
2023-02-07 04:02:37.456  INFO 1 --- [  restartedMain] c.u.j.c.StringEncryptorBuilder           : Encryptor config not found for property jasypt.encryptor.salt-generator-classname, using default value: org.jasypt.salt.RandomSaltGenerator
2023-02-07 04:02:37.457  INFO 1 --- [  restartedMain] c.u.j.c.StringEncryptorBuilder           : Encryptor config not found for property jasypt.encryptor.iv-generator-classname, using default value: org.jasypt.iv.RandomIvGenerator
2023-02-07 04:02:37.459  INFO 1 --- [  restartedMain] c.u.j.c.StringEncryptorBuilder           : Encryptor config not found for property jasypt.encryptor.string-output-type, using default value: base64
2023-02-07 04:02:40.538  INFO 1 --- [  restartedMain] o.s.b.a.e.web.EndpointLinksResolver      : Exposing 17 endpoint(s) beneath base path '/actuator'
2023-02-07 04:02:41.218  INFO 1 --- [  restartedMain] o.s.b.d.a.OptionalLiveReloadServer       : LiveReload server is running on port 35729
2023-02-07 04:02:41.877  INFO 1 --- [  restartedMain] c.f.c.s.c.SecurityConfiguration          : auth provider is ::LOCAL
2023-02-07 04:02:41.889  INFO 1 --- [  restartedMain] c.f.c.s.c.SecurityConfiguration          : return daoAuthenticationProvider
2023-02-07 04:02:42.017  INFO 1 --- [  restartedMain] o.s.s.web.DefaultSecurityFilterChain     : Will secure any request with [org.springframework.security.web.context.request.async.WebAsyncManagerIntegrationFilter@58232e41, org.springframework.security.web.context.SecurityContextPersistenceFilter@463767db, org.springframework.security.web.header.HeaderWriterFilter@4241075c, org.springframework.web.filter.CorsFilter@2d0728f1, org.springframework.security.web.authentication.logout.LogoutFilter@5458b0a7, com.fastonetech.common.security.filter.JwtAuthenticationFilter@29b49ce5, org.springframework.security.web.authentication.www.BasicAuthenticationFilter@47bef5aa, org.springframework.security.web.savedrequest.RequestCacheAwareFilter@6408c485, org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestFilter@2d217ddd, org.springframework.security.web.authentication.AnonymousAuthenticationFilter@19adbf1c, org.springframework.security.web.session.SessionManagementFilter@2977d010, org.springframework.security.web.access.ExceptionTranslationFilter@487e11bc, org.springframework.security.web.access.intercept.FilterSecurityInterceptor@2847bb14]
2023-02-07 04:02:42.258  INFO 1 --- [  restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 7000 (http) with context path ''
2023-02-07 04:02:42.262  INFO 1 --- [  restartedMain] u.j.c.RefreshScopeRefreshedEventListener : Refreshing cached encryptable property sources on ServletWebServerInitializedEvent
2023-02-07 04:02:42.262  INFO 1 --- [  restartedMain] CachingDelegateEncryptablePropertySource : Property Source systemProperties refreshed
2023-02-07 04:02:42.262  INFO 1 --- [  restartedMain] CachingDelegateEncryptablePropertySource : Property Source systemEnvironment refreshed
2023-02-07 04:02:42.262  INFO 1 --- [  restartedMain] CachingDelegateEncryptablePropertySource : Property Source random refreshed
2023-02-07 04:02:42.262  INFO 1 --- [  restartedMain] CachingDelegateEncryptablePropertySource : Property Source cachedrandom refreshed
2023-02-07 04:02:42.262  INFO 1 --- [  restartedMain] CachingDelegateEncryptablePropertySource : Property Source springCloudClientHostInfo refreshed
2023-02-07 04:02:42.263  INFO 1 --- [  restartedMain] CachingDelegateEncryptablePropertySource : Property Source Config resource 'class path resource [application-prod.yml]' via location 'optional:classpath:/' refreshed
2023-02-07 04:02:42.264  INFO 1 --- [  restartedMain] CachingDelegateEncryptablePropertySource : Property Source Config resource 'class path resource [application.yml]' via location 'optional:classpath:/' refreshed
2023-02-07 04:02:42.264  INFO 1 --- [  restartedMain] CachingDelegateEncryptablePropertySource : Property Source devtools refreshed
2023-02-07 04:02:42.264  INFO 1 --- [  restartedMain] c.u.j.EncryptablePropertySourceConverter : Converting PropertySource server.ports [org.springframework.core.env.MapPropertySource] to EncryptableMapPropertySourceWrapper
2023-02-07 04:02:42.264  INFO 1 --- [  restartedMain] c.u.j.EncryptablePropertySourceConverter : Skipping PropertySource configurationProperties [class org.springframework.boot.context.properties.source.ConfigurationPropertySourcesPropertySource
2023-02-07 04:02:42.264  INFO 1 --- [  restartedMain] c.u.j.EncryptablePropertySourceConverter : Skipping PropertySource servletConfigInitParams [class org.springframework.core.env.PropertySource$StubPropertySource
2023-02-07 04:02:42.265  INFO 1 --- [  restartedMain] c.u.j.EncryptablePropertySourceConverter : Converting PropertySource servletContextInitParams [org.springframework.web.context.support.ServletContextPropertySource] to EncryptableEnumerablePropertySourceWrapper
2023-02-07 04:02:42.265  INFO 1 --- [  restartedMain] c.u.j.EncryptablePropertySourceConverter : Converting PropertySource Management Server [org.springframework.boot.actuate.autoconfigure.web.server.ManagementContextAutoConfiguration$SameManagementContextConfiguration$1] to EncryptablePropertySourceWrapper
2023-02-07 04:02:43.785  INFO 1 --- [  restartedMain] c.f.scheduler.SchedulerApplication       : Started SchedulerApplication in 19.989 seconds (JVM running for 21.654)
```

- juice挂载时间过晚导致fastone-scheduler没有共享到对应mount

> juicefs挂载时间<br/>
> 2023/02/07 04:02:44.027083 juicefs
> fastone-scheduler启动时间<br/>
> 2023-02-07 04:02:24.874

### 参考

- [Docker bind propagation](https://docs.docker.com/storage/bind-mounts/#configure-bind-propagation)
- [Juicefs mount](https://juicefs.com/docs/cloud/reference/commands_reference/#mount)

## cluster-scheduler请求审计服务失败后导致后续请求一直失败, 且报错信息相同

### 原因

`AsyncAuditService`中的`asyncAudit`方法复用了CoroutineScope, 导致后续请求失败后, 该CoroutineScope被取消, 从而导致后续请求一直失败
该代码如下

```kotlin
class AsyncAuditService(private val auditService: AuditService) : AuditService, LogCapability {

	private val coroutineScope = CoroutineScope(Dispatchers.IO)

	private fun asyncAudit(
		successLog: String,
		failureLog: String,
		doAudit: suspend CoroutineScope.() -> Unit,
	) {
		coroutineScope.launch { doAudit() }.invokeOnCompletion {
			if (it != null)
				logger.warn(failureLog, it)
			else
				logger.info(successLog)
		}
	}

}
```

### 解决方案

为每个请求创建一个CoroutineScope, 修改后的代码如下
```kotlin
class AsyncAuditService(private val auditService: AuditService) : AuditService, LogCapability {

	private fun asyncAudit(
		successLog: String,
		failureLog: String,
		doAudit: suspend CoroutineScope.() -> Unit,
	) {
    CoroutineScope(Dispatchers.IO).launch { doAudit() }.invokeOnCompletion {
			if (it != null)
				logger.warn(failureLog, it)
			else
				logger.info(successLog)
		}
	}

}
```

### 参考
- [CoroutineScope](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-coroutine-scope/)
- [CoroutineScope cannot be reused after an exception thrown](https://stackoverflow.com/questions/59996928/coroutinescope-cannot-be-reused-after-an-exception-thrown)