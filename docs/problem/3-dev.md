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

