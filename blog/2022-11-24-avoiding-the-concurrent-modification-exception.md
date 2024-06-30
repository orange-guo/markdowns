---
authors: [ orange ]
tags: [ problem-solving, kotlin, java, consul ]
---

# 通过引入防御性复制以避免`ConcurrentModificationException`

在`consul`中修改相关服务的配置时引发`ConcurrentModificationException`并导致协程任务异常退出.<br/>
相关报错如下:

```log
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

## 原因

这个问题的原因是被修改的配置映射到了代码中被`@ConfigurationProperties`注解的类中的一个`List`类型的属性.<br/>
该属性被修改时恰好协程任务正在遍历该属性, 从而导致`ConcurrentModificationException`异常.<br/>

## 解决方案

每次获取该属性时都进行一次防御性复制, 从而避免`ConcurrentModificationException`异常

## 参考资料

- [Avoiding the ConcurrentModificationException in Java](https://www.baeldung.com/java-concurrentmodificationexception)
- [《Effective Java》学习日志（七）50：当需要时进行防御性复制](https://waltyou.github.io/Effective-Java-50-Make-Defensive-Copies-When-Needed/)