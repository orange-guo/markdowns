---
authors: [ xiangcheng.kuo ]
tags: [ kotlin, coroutines, command-line ]
---

# 解决在Kotlin Coroutines中的命令行调用中出现Stream Closed异常

之前有一个服务内部需要调用外部程序(`rclone`), 于是我写了一个类来封装命令行调用, 该类主要是基于`kotlinx.coroutines`
来实现的.<br/>
代码如下:

```kotlin title="CommandExecutorImpl.kt"
import java.io.IOException
import java.io.InputStream

class CommandExecutorImpl : CommandExecutor, LogCapability {

	override suspend fun execute(options: CommandExecutionOptions) =
		coroutineScope {
			val command: String = options.command.joinToString(separator = " ")
			logger.info("$ {}", command)
			val process: Process = createProcess(options)

			val asyncReadStdOut = asyncRead(input = process.inputStream, consume = options.onNewStdoutRead)
			val asyncReadStderr = asyncRead(input = process.errorStream, consume = options.onNewStderrRead)
			try {
				while (process.isAlive) {
					delay(500)
				}
				if (process.exitValue() != 0) {
					throw IllegalStateException("Process exited with non-zero exit code")
				}
			} finally {
				// https://kotlinlang.org/docs/cancellation-and-timeouts.html#run-non-cancellable-block
				withContext(NonCancellable) {
					process.destroy()
					asyncReadStdOut.cancelAndJoin()
					asyncReadStderr.cancelAndJoin()
				}
			}
		}

	private suspend fun createProcess(options: CommandExecutionOptions): Process =
		withContext(Dispatchers.IO) {
			Runtime.getRuntime().exec(options.command.toTypedArray())
		}

	private fun CoroutineScope.asyncRead(input: InputStream, consume: suspend (String) -> Unit): Job =
		launch {
			try {
				input.bufferedReader()
					.lineSequence()
					.asFlow()
					.collect { line ->
						consume(line)
					}
			} catch (ex: IOException) {
				logger.warn("Error while reading from process", ex)
				throw ex
			}
		}

	companion object : LogCapability

}
```

最近我发现在使用该类时, 有时会抛出`java.io.IOException: Stream closed`异常<br/>
异常栈如下:

```log
14:10:38.016 [DefaultDispatcher-worker-117] WARN com.fastonetech.billing.sync.infra.command.CommandExecutorImpl - Error while reading from process
java.io.IOException: Stream closed
	at java.base/java.io.BufferedInputStream.getBufIfOpen(BufferedInputStream.java:168)
	at java.base/java.io.BufferedInputStream.read(BufferedInputStream.java:334)
	at java.base/sun.nio.cs.StreamDecoder.readBytes(StreamDecoder.java:270)
	at java.base/sun.nio.cs.StreamDecoder.implRead(StreamDecoder.java:313)
	at java.base/sun.nio.cs.StreamDecoder.read(StreamDecoder.java:188)
	at java.base/java.io.InputStreamReader.read(InputStreamReader.java:177)
	at java.base/java.io.BufferedReader.fill(BufferedReader.java:162)
	at java.base/java.io.BufferedReader.readLine(BufferedReader.java:329)
	at java.base/java.io.BufferedReader.readLine(BufferedReader.java:396)
	at kotlin.io.LinesSequence$iterator$1.hasNext(ReadWrite.kt:79)
	at kotlinx.coroutines.flow.FlowKt__BuildersKt$asFlow$$inlined$unsafeFlow$5.collect(SafeCollector.common.kt:114)
	at com.fastonetech.billing.sync.infra.command.CommandExecutorImpl$asyncRead$1.invokeSuspend(CommandExecutorImpl.kt:58)
	at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:33)
	at kotlinx.coroutines.DispatchedTask.run(DispatchedTask.kt:106)
	at kotlinx.coroutines.internal.LimitedDispatcher.run(LimitedDispatcher.kt:42)
	at kotlinx.coroutines.scheduling.TaskImpl.run(Tasks.kt:95)
	at kotlinx.coroutines.scheduling.CoroutineScheduler.runSafely(CoroutineScheduler.kt:570)
	at kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.executeTask(CoroutineScheduler.kt:750)
	at kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.runWorker(CoroutineScheduler.kt:677)
	at kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.run(CoroutineScheduler.kt:664)

```

下面将解决该问题的原因和解决方案.

<!--truncate-->

## 问题原因

> 根本原因是`Process`对象被销毁后, 仍然在读取`Process`的`InputStream`和`ErrorStream`.<br/>
> 有的时候命令执行会比较快这个时候`InputStream`和`ErrorStream`还没读完.

我们调用`process.destroy()`前只判断了`process.exitValue()`是否为`0`, 没有判断`InputStream`和`ErrorStream`是否读完.<br/>
这会导致销毁`Process`对象并导致`InputStream`和`ErrorStream`被关闭从而抛出`Stream Closed`异常.<br/>

## 解决方案

> 在`finally`块中等待`InputStream`和`ErrorStream`的读取操作完成后再销毁`Process`对象.

修改后的代码如下:

```kotlin
while (asyncReadStdOut.isActive || asyncReadStderr.isActive || process.isAlive) {
	delay(500)
}
```

## 备注

### Stream Closed异常测试

下面的代码是用来复现`Stream Closed`异常的测试代码:

```kotlin
runBlocking {
	val executor = CommandExecutorImpl()
	(1..1000).map {
		CoroutineScope(Dispatchers.IO).async {
			executor.execute(
				options = CommandExecutionOptions(
					command = listOf("echo", "1")
				)
			)
		}
	}.awaitAll()
}
```

### 为什么不使用`Process.waitFor()`方法替代`delay(500)`方法

因为`waitFor`方法比较重量级会阻塞当前线程, 而我们的解决方案是协程目的是为了不阻塞当前线程, 所以才会采用`delay`方法.

## 参考资料

- [Coroutines guide](https://kotlinlang.org/docs/coroutines-guide.html)
- [Run non-cancellable block](https://kotlinlang.org/docs/cancellation-and-timeouts.html#run-non-cancellable-block)