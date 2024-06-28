---
authors: [xiangcheng.kuo]
tags: [problem-solving, grpc, tls, aws, network-loadbalancer]
---

# grpc服务tls连接握手失败问题排查

近期在访问通过公网暴露的`grpc`服务时连接时报错, 异常信息如下

```log
Exception in thread "main" io.grpc.StatusException: UNAVAILABLE: io exception
Channel Pipeline: [SslHandler#0, ProtocolNegotiators$ClientTlsHandler#0, WriteBufferingAndExceptionHandler#0, DefaultChannelPipeline$TailContext#0]
	at io.grpc.Status.asException(Status.java:554)
	at io.grpc.kotlin.ClientCalls$rpcImpl$1$1$1.onClose(ClientCalls.kt:296)
	at io.grpc.internal.ClientCallImpl.closeObserver(ClientCallImpl.java:576)
	at io.grpc.internal.ClientCallImpl.access$300(ClientCallImpl.java:70)
	at io.grpc.internal.ClientCallImpl$ClientStreamListenerImpl$1StreamClosed.runInternal(ClientCallImpl.java:757)
	at io.grpc.internal.ClientCallImpl$ClientStreamListenerImpl$1StreamClosed.runInContext(ClientCallImpl.java:736)
	at io.grpc.internal.ContextRunnable.run(ContextRunnable.java:37)
	at io.grpc.internal.SerializingExecutor.run(SerializingExecutor.java:133)
	at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)
	at java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)
	at java.base/java.lang.Thread.run(Thread.java:833)
Caused by: io.netty.handler.ssl.NotSslRecordException: not an SSL/TLS record: 485454502f312e312034303320466f7262696464656e0a436f6e74656e742d547970653a20746578742f68746d6c3b20636861727365743d7574662d380a5365727665723a2041444d2f322e312e310a436f6e6e656374696f6e3a20636c6f73650a436f6e74656e742d4c656e6774683a203531320a0a3c68746d6c3e0a3c686561643e0a3c6d65746120687474702d65717569763d22436f6e74656e742d547970652220636f6e74656e743d22746578746d6c3b636861727365743d5554462d3822202f3e0a2020203c7374796c653e626f64797b6261636b67726f756e642d636f6c6f723a234646464646467d3c2f7374796c653e200a3c7469746c653e7a687935342d48473130302d32e99d9ee6b395e998bbe696ad3c2f7469746c653e0a20203c736372697074206c616e67756167653d226a6176617363726970742220747970653d22746578742f6a617661736372697074223e0a20202020202020202077696e646f772e6f6e6c6f6164203d2066756e6374696f6e202829207b200a2020202020202020202020646f63756d656e742e676574456c656d656e744279496428226d61696e4672616d6522292e7372633d2022687474703a2f2f3230332e39332e3137302e3231393a393038302f6572726f722e68746d6c223b200a2020202020202020202020207d0a3c2f7363726970743e2020200a3c2f686561643e0a20203c626f64793e0a2020202020203c696672616d652069643d226d61696e4672616d6522207372633d2222206672616d65626f726465723d2230222077696474683d223130302522206865696768743d2231303025223e3c2f696672616d653e0a20203c2f626f64793e0a3c2f68746d6c3e
	at io.netty.handler.ssl.SslHandler.decodeJdkCompatible(SslHandler.java:1215)
	at io.netty.handler.ssl.SslHandler.decode(SslHandler.java:1285)
	at io.netty.handler.codec.ByteToMessageDecoder.decodeRemovalReentryProtection(ByteToMessageDecoder.java:529)
	at io.netty.handler.codec.ByteToMessageDecoder.callDecode(ByteToMessageDecoder.java:468)
	at io.netty.handler.codec.ByteToMessageDecoder.channelRead(ByteToMessageDecoder.java:290)
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:444)
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:420)
	at io.netty.channel.AbstractChannelHandlerContext.fireChannelRead(AbstractChannelHandlerContext.java:412)
	at io.netty.channel.DefaultChannelPipeline$HeadContext.channelRead(DefaultChannelPipeline.java:1410)
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:440)
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:420)
	at io.netty.channel.DefaultChannelPipeline.fireChannelRead(DefaultChannelPipeline.java:919)
	at io.netty.channel.nio.AbstractNioByteChannel$NioByteUnsafe.read(AbstractNioByteChannel.java:166)
	at io.netty.channel.nio.NioEventLoop.processSelectedKey(NioEventLoop.java:788)
	at io.netty.channel.nio.NioEventLoop.processSelectedKeysOptimized(NioEventLoop.java:724)
	at io.netty.channel.nio.NioEventLoop.processSelectedKeys(NioEventLoop.java:650)
	at io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:562)
	at io.netty.util.concurrent.SingleThreadEventExecutor$4.run(SingleThreadEventExecutor.java:997)
	at io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74)
	at io.netty.util.concurrent.FastThreadLocalRunnable.run(FastThreadLocalRunnable.java:30)
	... 1 more
```

<!--truncate-->

## 原因

该服务是通过`aws`的`nlb`来实现公网访问的, 由于`aws`近期的安全限制导致`tls`的连接无法建立需要进行备案, 该问题是近期发生的,
之前是可以正常访问的.<br/>

根据异常信息可以看出, 服务端返回的是非ssl的响应导致客户端抛出`NotSslRecordException`<br/>
服务端返回的内容为16进制的如下内容

```log
485454502f312e312034303320466f7262696464656e0a436f6e74656e742d547970653a20746578742f68746d6c3b20636861727365743d7574662d380a5365727665723a2041444d2f322e312e310a436f6e6e656374696f6e3a20636c6f73650a436f6e74656e742d4c656e6774683a203531320a0a3c68746d6c3e0a3c686561643e0a3c6d65746120687474702d65717569763d22436f6e74656e742d547970652220636f6e74656e743d22746578746d6c3b636861727365743d5554462d3822202f3e0a2020203c7374796c653e626f64797b6261636b67726f756e642d636f6c6f723a234646464646467d3c2f7374796c653e200a3c7469746c653e7a687935342d48473130302d32e99d9ee6b395e998bbe696ad3c2f7469746c653e0a20203c736372697074206c616e67756167653d226a6176617363726970742220747970653d22746578742f6a617661736372697074223e0a20202020202020202077696e646f772e6f6e6c6f6164203d2066756e6374696f6e202829207b200a2020202020202020202020646f63756d656e742e676574456c656d656e744279496428226d61696e4672616d6522292e7372633d2022687474703a2f2f3230332e39332e3137302e3231393a393038302f6572726f722e68746d6c223b200a2020202020202020202020207d0a3c2f7363726970743e2020200a3c2f686561643e0a20203c626f64793e0a2020202020203c696672616d652069643d226d61696e4672616d6522207372633d2222206672616d65626f726465723d2230222077696474683d223130302522206865696768743d2231303025223e3c2f696672616d653e0a20203c2f626f64793e0a3c2f68746d6c3e
```

使用16进制转换工具转换为文本内容如下

```html
HTTP/1.1 403 Forbidden
Content-Type: text/html; charset=utf-8
Server: ADM/2.1.1
Connection: close
Content-Length: 512

<html>
<head>
	<meta http-equiv="Content-Type" content="textml;charset=UTF-8"/>
	<style>body {
		background-color: #FFFFFF
	}</style>
	<title>zhy54-HG100-2非法阻断</title>
	<script language="javascript" type="text/javascript">
		window.onload = function () {
			document.getElementById("mainFrame").src = "http://203.93.170.219:9080/error.html";
		}
	</script>
</head>
<body>
<iframe id="mainFrame" src="" frameborder="0" width="100%" height="100%"></iframe>
</body>
</html>
```

可以看到服务端返回的是一个`403`的`html`页面, 该页面是由`aws`的`nlb`返回的, 该页面嵌套了一个`iframe`标签,
里面的目标是`http://203.93.170.219:9080/error.html` <br/>

访问该页面可以看到如下内容

![页面截图](/blog/2023-03-27-screenshot.jpeg)

## 解决方案

根据目前的信息来看, 该问题是由于`aws`的安全限制导致的, `nlb`暴露的服务需要进行备案.<br/>

## 参考

- [AWS+ICP备案使用ELB预留IP指南_V2.1(新版).pdf](https://s3.cn-north-1.amazonaws.com.cn/sinnetcloud/%E5%85%AC%E5%AE%89%E5%A4%87%E6%A1%88/%E8%8E%B7%E5%8F%96ELB%E7%9A%84IP/AWS+ICP%E5%A4%87%E6%A1%88%E4%BD%BF%E7%94%A8ELB%E9%A2%84%E7%95%99IP%E6%8C%87%E5%8D%97_V2.1(%E6%96%B0%E7%89%88).pdf)
- [关于 ICP 备案/公安备案/ICP 证书申请流程的指导](http://s3.cn-northwest-1.amazonaws.com.cn/www.nwcdcloud.cn/icp.pdf)