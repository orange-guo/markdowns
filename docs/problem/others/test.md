# 测试

## `TestContainers`启动完`fastone-auditing`容器后客户端连接报错

### 现象

`TestContainers`启动完`fastone-auditing`容器后客户端连接报错, 日志如下

```log
feign.RetryableException: Connection reset executing GET http://localhost:32772/javers/api/v1/snapshots?page=0&size=1&sort=commitMetadata.id%2CDESC
	at app//feign.FeignException.errorExecuting(FeignException.java:268)
	at app//feign.SynchronousMethodHandler.executeAndDecode(SynchronousMethodHandler.java:131)
	at app//feign.SynchronousMethodHandler.invoke(SynchronousMethodHandler.java:91)
	at app//feign.ReflectiveFeign$FeignInvocationHandler.invoke(ReflectiveFeign.java:100)
	at app/jdk.proxy3/jdk.proxy3.$Proxy148.listSnapshot(Unknown Source)
	at app//com.fastonetech.lib.auditing.javers.support.JaversClient$DefaultImpls.listSnapshot$default(JaversClient.kt:16)
	at app//com.fastonetech.lib.auditing.javers.support.RestRepository.getHeadId(RestRepository.kt:102)
	at app//org.javers.repository.api.JaversExtendedRepository.getHeadId(JaversExtendedRepository.java:159)
	at app//org.javers.core.commit.CommitIdFactory.nextId(CommitIdFactory.java:27)
	at app//org.javers.core.commit.CommitFactory.newCommitMetadata(CommitFactory.java:91)
	at app//org.javers.core.commit.CommitFactory.createCommit(CommitFactory.java:74)
	at app//org.javers.core.commit.CommitFactory.create(CommitFactory.java:70)
	at app//org.javers.core.JaversCore.commit(JaversCore.java:87)
	at app//com.fastonetech.lib.auditing.JaversClientApplication.before(JaversTest.kt:41)
	at java.base@17.0.1/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at java.base@17.0.1/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)
	at java.base@17.0.1/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.base@17.0.1/java.lang.reflect.Method.invoke(Method.java:568)
	at app//org.junit.platform.commons.util.ReflectionUtils.invokeMethod(ReflectionUtils.java:725)
	at app//org.junit.jupiter.engine.execution.MethodInvocation.proceed(MethodInvocation.java:60)
	at app//org.junit.jupiter.engine.execution.InvocationInterceptorChain$ValidatingInvocation.proceed(InvocationInterceptorChain.java:131)
	at app//org.junit.jupiter.engine.extension.TimeoutExtension.intercept(TimeoutExtension.java:149)
	at app//org.junit.jupiter.engine.extension.TimeoutExtension.interceptLifecycleMethod(TimeoutExtension.java:126)
	at app//org.junit.jupiter.engine.extension.TimeoutExtension.interceptBeforeEachMethod(TimeoutExtension.java:76)
	at app//org.junit.jupiter.engine.execution.ExecutableInvoker$ReflectiveInterceptorCall.lambda$ofVoidMethod$0(ExecutableInvoker.java:115)
	at app//org.junit.jupiter.engine.execution.ExecutableInvoker.lambda$invoke$0(ExecutableInvoker.java:105)
	at app//org.junit.jupiter.engine.execution.InvocationInterceptorChain$InterceptedInvocation.proceed(InvocationInterceptorChain.java:106)
	at app//org.junit.jupiter.engine.execution.InvocationInterceptorChain.proceed(InvocationInterceptorChain.java:64)
	at app//org.junit.jupiter.engine.execution.InvocationInterceptorChain.chainAndInvoke(InvocationInterceptorChain.java:45)
	at app//org.junit.jupiter.engine.execution.InvocationInterceptorChain.invoke(InvocationInterceptorChain.java:37)
	at app//org.junit.jupiter.engine.execution.ExecutableInvoker.invoke(ExecutableInvoker.java:104)
	at app//org.junit.jupiter.engine.execution.ExecutableInvoker.invoke(ExecutableInvoker.java:98)
	at app//org.junit.jupiter.engine.descriptor.ClassBasedTestDescriptor.invokeMethodInExtensionContext(ClassBasedTestDescriptor.java:506)
	at app//org.junit.jupiter.engine.descriptor.ClassBasedTestDescriptor.lambda$synthesizeBeforeEachMethodAdapter$21(ClassBasedTestDescriptor.java:491)
	at app//org.junit.jupiter.engine.descriptor.TestMethodTestDescriptor.lambda$invokeBeforeEachMethods$3(TestMethodTestDescriptor.java:171)
	at app//org.junit.jupiter.engine.descriptor.TestMethodTestDescriptor.lambda$invokeBeforeMethodsOrCallbacksUntilExceptionOccurs$6(TestMethodTestDescriptor.java:199)
	at app//org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)
	at app//org.junit.jupiter.engine.descriptor.TestMethodTestDescriptor.invokeBeforeMethodsOrCallbacksUntilExceptionOccurs(TestMethodTestDescriptor.java:199)
	at app//org.junit.jupiter.engine.descriptor.TestMethodTestDescriptor.invokeBeforeEachMethods(TestMethodTestDescriptor.java:168)
	at app//org.junit.jupiter.engine.descriptor.TestMethodTestDescriptor.execute(TestMethodTestDescriptor.java:131)
	at app//org.junit.jupiter.engine.descriptor.TestMethodTestDescriptor.execute(TestMethodTestDescriptor.java:66)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$6(NodeTestTask.java:151)
	at app//org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$8(NodeTestTask.java:141)
	at app//org.junit.platform.engine.support.hierarchical.Node.around(Node.java:137)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$9(NodeTestTask.java:139)
	at app//org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.executeRecursively(NodeTestTask.java:138)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.execute(NodeTestTask.java:95)
	at java.base@17.0.1/java.util.ArrayList.forEach(ArrayList.java:1511)
	at app//org.junit.platform.engine.support.hierarchical.SameThreadHierarchicalTestExecutorService.invokeAll(SameThreadHierarchicalTestExecutorService.java:41)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$6(NodeTestTask.java:155)
	at app//org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$8(NodeTestTask.java:141)
	at app//org.junit.platform.engine.support.hierarchical.Node.around(Node.java:137)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$9(NodeTestTask.java:139)
	at app//org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.executeRecursively(NodeTestTask.java:138)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.execute(NodeTestTask.java:95)
	at java.base@17.0.1/java.util.ArrayList.forEach(ArrayList.java:1511)
	at app//org.junit.platform.engine.support.hierarchical.SameThreadHierarchicalTestExecutorService.invokeAll(SameThreadHierarchicalTestExecutorService.java:41)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$6(NodeTestTask.java:155)
	at app//org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$8(NodeTestTask.java:141)
	at app//org.junit.platform.engine.support.hierarchical.Node.around(Node.java:137)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$9(NodeTestTask.java:139)
	at app//org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.executeRecursively(NodeTestTask.java:138)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.execute(NodeTestTask.java:95)
	at app//org.junit.platform.engine.support.hierarchical.SameThreadHierarchicalTestExecutorService.submit(SameThreadHierarchicalTestExecutorService.java:35)
	at app//org.junit.platform.engine.support.hierarchical.HierarchicalTestExecutor.execute(HierarchicalTestExecutor.java:57)
	at app//org.junit.platform.engine.support.hierarchical.HierarchicalTestEngine.execute(HierarchicalTestEngine.java:54)
	at org.junit.platform.launcher.core.EngineExecutionOrchestrator.execute(EngineExecutionOrchestrator.java:107)
	at org.junit.platform.launcher.core.EngineExecutionOrchestrator.execute(EngineExecutionOrchestrator.java:88)
	at org.junit.platform.launcher.core.EngineExecutionOrchestrator.lambda$execute$0(EngineExecutionOrchestrator.java:54)
	at org.junit.platform.launcher.core.EngineExecutionOrchestrator.withInterceptedStreams(EngineExecutionOrchestrator.java:67)
	at org.junit.platform.launcher.core.EngineExecutionOrchestrator.execute(EngineExecutionOrchestrator.java:52)
	at org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:114)
	at org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:86)
	at org.junit.platform.launcher.core.DefaultLauncherSession$DelegatingLauncher.execute(DefaultLauncherSession.java:86)
	at org.junit.platform.launcher.core.SessionPerRequestLauncher.execute(SessionPerRequestLauncher.java:53)
	at org.gradle.api.internal.tasks.testing.junitplatform.JUnitPlatformTestClassProcessor$CollectAllTestClassesExecutor.processAllTestClasses(JUnitPlatformTestClassProcessor.java:99)
	at org.gradle.api.internal.tasks.testing.junitplatform.JUnitPlatformTestClassProcessor$CollectAllTestClassesExecutor.access$000(JUnitPlatformTestClassProcessor.java:79)
	at org.gradle.api.internal.tasks.testing.junitplatform.JUnitPlatformTestClassProcessor.stop(JUnitPlatformTestClassProcessor.java:75)
	at org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.stop(SuiteTestClassProcessor.java:61)
	at java.base@17.0.1/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at java.base@17.0.1/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)
	at java.base@17.0.1/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.base@17.0.1/java.lang.reflect.Method.invoke(Method.java:568)
	at org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:36)
	at org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)
	at org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:33)
	at org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:94)
	at jdk.proxy1/jdk.proxy1.$Proxy2.stop(Unknown Source)
	at org.gradle.api.internal.tasks.testing.worker.TestWorker$3.run(TestWorker.java:193)
	at org.gradle.api.internal.tasks.testing.worker.TestWorker.executeAndMaintainThreadName(TestWorker.java:129)
	at org.gradle.api.internal.tasks.testing.worker.TestWorker.execute(TestWorker.java:100)
	at org.gradle.api.internal.tasks.testing.worker.TestWorker.execute(TestWorker.java:60)
	at org.gradle.process.internal.worker.child.ActionExecutionWorker.execute(ActionExecutionWorker.java:56)
	at org.gradle.process.internal.worker.child.SystemApplicationClassLoaderWorker.call(SystemApplicationClassLoaderWorker.java:133)
	at org.gradle.process.internal.worker.child.SystemApplicationClassLoaderWorker.call(SystemApplicationClassLoaderWorker.java:71)
	at app//worker.org.gradle.process.internal.worker.GradleWorkerMain.run(GradleWorkerMain.java:69)
	at app//worker.org.gradle.process.internal.worker.GradleWorkerMain.main(GradleWorkerMain.java:74)
Caused by: java.net.SocketException: Connection reset
	at java.base/sun.nio.ch.NioSocketImpl.implRead(NioSocketImpl.java:323)
	at java.base/sun.nio.ch.NioSocketImpl.read(NioSocketImpl.java:350)
	at java.base/sun.nio.ch.NioSocketImpl$1.read(NioSocketImpl.java:803)
	at java.base/java.net.Socket$SocketInputStream.read(Socket.java:966)
	at org.apache.http.impl.io.SessionInputBufferImpl.streamRead(SessionInputBufferImpl.java:137)
	at org.apache.http.impl.io.SessionInputBufferImpl.fillBuffer(SessionInputBufferImpl.java:153)
	at org.apache.http.impl.io.SessionInputBufferImpl.readLine(SessionInputBufferImpl.java:280)
	at org.apache.http.impl.conn.DefaultHttpResponseParser.parseHead(DefaultHttpResponseParser.java:138)
	at org.apache.http.impl.conn.DefaultHttpResponseParser.parseHead(DefaultHttpResponseParser.java:56)
	at org.apache.http.impl.io.AbstractMessageParser.parse(AbstractMessageParser.java:259)
	at org.apache.http.impl.DefaultBHttpClientConnection.receiveResponseHeader(DefaultBHttpClientConnection.java:163)
	at org.apache.http.impl.conn.CPoolProxy.receiveResponseHeader(CPoolProxy.java:157)
	at org.apache.http.protocol.HttpRequestExecutor.doReceiveResponse(HttpRequestExecutor.java:273)
	at org.apache.http.protocol.HttpRequestExecutor.execute(HttpRequestExecutor.java:125)
	at org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:272)
	at org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:186)
	at org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)
	at org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)
	at org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)
	at org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)
	at org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:108)
	at org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:56)
	at feign.httpclient.ApacheHttpClient.execute(ApacheHttpClient.java:81)
	at feign.SynchronousMethodHandler.executeAndDecode(SynchronousMethodHandler.java:121)
	... 101 more
```

### 原因

通过日志发现报错的时间比服务启动成功的时间要早, 说明服务还没有达到可以接受请求的状态<br/>
`TestContainers`判断容器是否启动成功是根据`WaitStrategy`来判断的, 代码如下<br/>

```java
public class GenericContainer<SELF extends GenericContainer<SELF>>
		extends FailureDetectingExternalResource
		implements Container<SELF>, AutoCloseable, WaitStrategyTarget, Startable {

	@NonNull
	protected org.testcontainers.containers.wait.strategy.WaitStrategy waitStrategy = Wait.defaultWaitStrategy();

}

public class Wait {

	/**
	 * Convenience method to return the default WaitStrategy.
	 *
	 * @return a WaitStrategy
	 */
	public static WaitStrategy defaultWaitStrategy() {
		return forListeningPort();
	}

	/**
	 * Convenience method to return a WaitStrategy for an exposed or mapped port.
	 *
	 * @return the WaitStrategy
	 * @see HostPortWaitStrategy
	 */
	public static HostPortWaitStrategy forListeningPort() {
		return new HostPortWaitStrategy();
	}

}

```

默认的`WaitStrategy`是`HostPortWaitStrategy`, 这种方式有以下问题

- 端口被监听并不一定说明服务进入了可以可以接受请求的状态
- 在`springboot`中`tomcat`开始监听端口之后还有别的事情要做
- 只有服务真正可以接口请求才说明容器启动成功

容器日志如下

```log
Setting Active Processor Count to 16
Calculating JVM memory based on 2844780K available memory
For more information on this calculation, see https://paketo.io/docs/reference/java-reference/#memory-calculator
Calculated JVM Memory Configuration: -XX:MaxDirectMemorySize=10M -Xmx2427024K -XX:MaxMetaspaceSize=110555K -XX:ReservedCodeCacheSize=240M -Xss1M (Total Memory: 2844780K, Thread Count: 50, Loaded Class Count: 17105, Headroom: 0%)
Enabling Java Native Memory Tracking
Adding 124 container CA certificates to JVM truststore
Spring Cloud Bindings Enabled
Picked up JAVA_TOOL_OPTIONS: -Djava.security.properties=/layers/paketo-buildpacks_bellsoft-liberica/java-security-properties/java-security.properties -XX:+ExitOnOutOfMemoryError -XX:ActiveProcessorCount=16 -XX:MaxDirectMemorySize=10M -Xmx2427024K -XX:MaxMetaspaceSize=110555K -XX:ReservedCodeCacheSize=240M -Xss1M -XX:+UnlockDiagnosticVMOptions -XX:NativeMemoryTracking=summary -XX:+PrintNMTStatistics -Dorg.springframework.cloud.bindings.boot.enable=true

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v3.0.0)

2022-12-29T12:55:59.290Z  INFO 1 --- [           main] c.f.a.FastoneAuditingApplicationKt       : Starting FastoneAuditingApplicationKt using Java 17.0.5 with PID 1 (/workspace/BOOT-INF/classes started by cnb in /workspace)
2022-12-29T12:55:59.295Z  INFO 1 --- [           main] c.f.a.FastoneAuditingApplicationKt       : No active profile set, falling back to 1 default profile: "default"
2022-12-29T12:56:00.102Z  INFO 1 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
2022-12-29T12:56:00.158Z  INFO 1 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 47 ms. Found 4 JPA repository interfaces.
2022-12-29T12:56:00.479Z  INFO 1 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 6666 (http)
2022-12-29T12:56:00.490Z  INFO 1 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2022-12-29T12:56:00.491Z  INFO 1 --- [           main] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.1]
2022-12-29T12:56:00.547Z  INFO 1 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2022-12-29T12:56:00.548Z  INFO 1 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 1160 ms
2022-12-29T12:56:00.654Z  INFO 1 --- [           main] o.f.c.internal.license.VersionPrinter    : Flyway Community Edition 9.5.1 by Redgate
2022-12-29T12:56:00.654Z  INFO 1 --- [           main] o.f.c.internal.license.VersionPrinter    : See what's new here: https://flywaydb.org/documentation/learnmore/releaseNotes#9.5.1
2022-12-29T12:56:00.655Z  INFO 1 --- [           main] o.f.c.internal.license.VersionPrinter    : 
2022-12-29T12:56:00.664Z  INFO 1 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
2022-12-29T12:56:00.760Z  INFO 1 --- [           main] com.zaxxer.hikari.pool.HikariPool        : HikariPool-1 - Added connection org.postgresql.jdbc.PgConnection@4cffcc61
2022-12-29T12:56:00.762Z  INFO 1 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
2022-12-29T12:56:00.776Z  INFO 1 --- [           main] o.f.c.i.database.base.BaseDatabaseType   : Database: jdbc:postgresql://tc-mGu8Gk79/auditing (PostgreSQL 12.10)
2022-12-29T12:56:00.795Z  INFO 1 --- [           main] o.f.core.internal.command.DbValidate     : Successfully validated 1 migration (execution time 00:00.008s)
2022-12-29T12:56:00.803Z  INFO 1 --- [           main] o.f.c.i.s.JdbcTableSchemaHistory         : Creating Schema History table "public"."flyway_schema_history" ...
2022-12-29T12:56:00.825Z  INFO 1 --- [           main] o.f.core.internal.command.DbMigrate      : Current version of schema "public": << Empty Schema >>
2022-12-29T12:56:00.832Z  INFO 1 --- [           main] o.f.core.internal.command.DbMigrate      : Migrating schema "public" to version "1 - Init"
2022-12-29T12:56:00.849Z  INFO 1 --- [           main] o.f.core.internal.command.DbMigrate      : Successfully applied 1 migration to schema "public", now at version v1 (execution time 00:00.027s)
2022-12-29T12:56:00.903Z  INFO 1 --- [           main] o.hibernate.jpa.internal.util.LogHelper  : HHH000204: Processing PersistenceUnitInfo [name: default]
2022-12-29T12:56:00.926Z  INFO 1 --- [           main] org.hibernate.Version                    : HHH000412: Hibernate ORM core version 6.1.5.Final
2022-12-29T12:56:01.010Z  WARN 1 --- [           main] org.hibernate.orm.deprecation            : HHH90000021: Encountered deprecated setting [javax.persistence.sharedCache.mode], use [jakarta.persistence.sharedCache.mode] instead
2022-12-29T12:56:01.085Z  INFO 1 --- [           main] SQL dialect                              : HHH000400: Using dialect: org.hibernate.dialect.PostgreSQLDialect
2022-12-29T12:56:01.428Z  INFO 1 --- [           main] o.h.e.t.j.p.i.JtaPlatformInitiator       : HHH000490: Using JtaPlatform implementation: [org.hibernate.engine.transaction.jta.platform.internal.NoJtaPlatform]
2022-12-29T12:56:01.432Z  INFO 1 --- [           main] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'
2022-12-29T12:56:02.256Z  WARN 1 --- [           main] JpaBaseConfiguration$JpaWebConfiguration : spring.jpa.open-in-view is enabled by default. Therefore, database queries may be performed during view rendering. Explicitly configure spring.jpa.open-in-view to disable this warning
2022-12-29T12:56:02.533Z  INFO 1 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 6666 (http) with context path ''
2022-12-29T12:56:02.547Z  INFO 1 --- [           main] c.f.a.FastoneAuditingApplicationKt       : Started FastoneAuditingApplicationKt in 3.642 seconds (process running for 3.961)
2022-12-29T12:56:03.536Z  INFO 1 --- [nio-6666-exec-1] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring DispatcherServlet 'dispatcherServlet'
2022-12-29T12:56:03.537Z  INFO 1 --- [nio-6666-exec-1] o.s.web.servlet.DispatcherServlet        : Initializing Servlet 'dispatcherServlet'
2022-12-29T12:56:03.538Z  INFO 1 --- [nio-6666-exec-1] o.s.web.servlet.DispatcherServlet        : Completed initialization in 1 ms
```

> 2022-12-29T12:56:00.479Z INFO 1 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized
> with port(s): 6666 (http)<br/>
> 2022-12-29T12:56:02.547Z INFO 1 --- [           main] c.f.a.FastoneAuditingApplicationKt       : Started
> FastoneAuditingApplicationKt in 3.642 seconds (process running for 3.961)<br/>
> 通常在这两个阶段中间还有别的事情会做, 如果出现比较极端的情况例如服务组件过多,或者机器资源不足,
> 那么这两个阶段中间会有比较大的时间差距<br/>

### 解决方案

配置`WaitStrategy`为`HttpWaitStrategy`, 代码如下

```kotlin
val server = GenericContainer("hub.fastonetech.com/infra/fastone-auditing:20221223-032350").apply {
	withImagePullPolicy(PullPolicy.alwaysPull())
	withNetwork(network)
	withEnv(
		mapOf(
			"SERVER_TOMCAT_CONNECTIONTIMEOUT" to "60s",
			"SERVER_PORT" to "6666",
			"SPRING_DATASOURCE_URL" to "jdbc:postgresql://${postgres.networkAliases.first()}/auditing"
		)
	)
	withExposedPorts(6666)
	dependsOn(postgres)
	waitingFor(Wait.forHttp("/javers/api/v1/snapshots")) // We need to wait for the container to be able to respond to the request
	start()
}
```

### 备注

#### 参考

- https://www.tabnine.com/code/java/classes/org.testcontainers.containers.wait.HttpWaitStrategy