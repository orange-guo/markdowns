"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[5028],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>m});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),d=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=d(e.components);return t.createElement(i.Provider,{value:n},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(a),u=r,m=s["".concat(i,".").concat(u)]||s[u]||f[u]||l;return a?t.createElement(m,o(o({ref:n},p),{},{components:a})):t.createElement(m,o({ref:n},p))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[s]="string"==typeof e?e:r,o[1]=c;for(var d=2;d<l;d++)o[d]=a[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1209:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var t=a(7462),r=(a(7294),a(3905));const l={authors:["xiangcheng.kuo"],tags:["problem-solving","grpc","tls","aws","network-loadbalancer"]},o="grpc\u670d\u52a1tls\u8fde\u63a5\u63e1\u624b\u5931\u8d25\u95ee\u9898\u6392\u67e5",c={permalink:"/zh-CN/blog/2023/03/27/grpc-tls-handshake-failed",source:"@site/blog/2023-03-27/grpc-tls-handshake-failed.md",title:"grpc\u670d\u52a1tls\u8fde\u63a5\u63e1\u624b\u5931\u8d25\u95ee\u9898\u6392\u67e5",description:"\u8fd1\u671f\u5728\u8bbf\u95ee\u901a\u8fc7\u516c\u7f51\u66b4\u9732\u7684grpc\u670d\u52a1\u65f6\u8fde\u63a5\u65f6\u62a5\u9519, \u5f02\u5e38\u4fe1\u606f\u5982\u4e0b",date:"2023-03-27T00:00:00.000Z",formattedDate:"2023\u5e743\u670827\u65e5",tags:[{label:"problem-solving",permalink:"/zh-CN/blog/tags/problem-solving"},{label:"grpc",permalink:"/zh-CN/blog/tags/grpc"},{label:"tls",permalink:"/zh-CN/blog/tags/tls"},{label:"aws",permalink:"/zh-CN/blog/tags/aws"},{label:"network-loadbalancer",permalink:"/zh-CN/blog/tags/network-loadbalancer"}],readingTime:2.26,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","grpc","tls","aws","network-loadbalancer"]},prevItem:{title:"\u901a\u8fc7\u5ef6\u957folcIdleTimeout\u4ee5\u51cf\u5c11nslcd\u4e2d\u7684Can't contact LDAP server\u65e5\u5fd7\u62a5\u9519",permalink:"/zh-CN/blog/2023/03/28/ldap-idle-timeout"},nextItem:{title:"\u901a\u8fc7\u4f7f\u7528evans\u6765\u66f4\u52a0\u4fbf\u6377\u5730\u8c03\u8bd5grpc\u670d\u52a1",permalink:"/zh-CN/blog/2023/03/25/evans"}},i={authorsImageUrls:[void 0]},d=[{value:"\u539f\u56e0",id:"\u539f\u56e0",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],p={toc:d},s="wrapper";function f(e){let{components:n,...l}=e;return(0,r.kt)(s,(0,t.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8fd1\u671f\u5728\u8bbf\u95ee\u901a\u8fc7\u516c\u7f51\u66b4\u9732\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"grpc"),"\u670d\u52a1\u65f6\u8fde\u63a5\u65f6\u62a5\u9519, \u5f02\u5e38\u4fe1\u606f\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},'Exception in thread "main" io.grpc.StatusException: UNAVAILABLE: io exception\nChannel Pipeline: [SslHandler#0, ProtocolNegotiators$ClientTlsHandler#0, WriteBufferingAndExceptionHandler#0, DefaultChannelPipeline$TailContext#0]\n    at io.grpc.Status.asException(Status.java:554)\n    at io.grpc.kotlin.ClientCalls$rpcImpl$1$1$1.onClose(ClientCalls.kt:296)\n    at io.grpc.internal.ClientCallImpl.closeObserver(ClientCallImpl.java:576)\n    at io.grpc.internal.ClientCallImpl.access$300(ClientCallImpl.java:70)\n    at io.grpc.internal.ClientCallImpl$ClientStreamListenerImpl$1StreamClosed.runInternal(ClientCallImpl.java:757)\n    at io.grpc.internal.ClientCallImpl$ClientStreamListenerImpl$1StreamClosed.runInContext(ClientCallImpl.java:736)\n    at io.grpc.internal.ContextRunnable.run(ContextRunnable.java:37)\n    at io.grpc.internal.SerializingExecutor.run(SerializingExecutor.java:133)\n    at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\n    at java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\n    at java.base/java.lang.Thread.run(Thread.java:833)\nCaused by: io.netty.handler.ssl.NotSslRecordException: not an SSL/TLS record: 485454502f312e312034303320466f7262696464656e0a436f6e74656e742d547970653a20746578742f68746d6c3b20636861727365743d7574662d380a5365727665723a2041444d2f322e312e310a436f6e6e656374696f6e3a20636c6f73650a436f6e74656e742d4c656e6774683a203531320a0a3c68746d6c3e0a3c686561643e0a3c6d65746120687474702d65717569763d22436f6e74656e742d547970652220636f6e74656e743d22746578746d6c3b636861727365743d5554462d3822202f3e0a2020203c7374796c653e626f64797b6261636b67726f756e642d636f6c6f723a234646464646467d3c2f7374796c653e200a3c7469746c653e7a687935342d48473130302d32e99d9ee6b395e998bbe696ad3c2f7469746c653e0a20203c736372697074206c616e67756167653d226a6176617363726970742220747970653d22746578742f6a617661736372697074223e0a20202020202020202077696e646f772e6f6e6c6f6164203d2066756e6374696f6e202829207b200a2020202020202020202020646f63756d656e742e676574456c656d656e744279496428226d61696e4672616d6522292e7372633d2022687474703a2f2f3230332e39332e3137302e3231393a393038302f6572726f722e68746d6c223b200a2020202020202020202020207d0a3c2f7363726970743e2020200a3c2f686561643e0a20203c626f64793e0a2020202020203c696672616d652069643d226d61696e4672616d6522207372633d2222206672616d65626f726465723d2230222077696474683d223130302522206865696768743d2231303025223e3c2f696672616d653e0a20203c2f626f64793e0a3c2f68746d6c3e\n    at io.netty.handler.ssl.SslHandler.decodeJdkCompatible(SslHandler.java:1215)\n    at io.netty.handler.ssl.SslHandler.decode(SslHandler.java:1285)\n    at io.netty.handler.codec.ByteToMessageDecoder.decodeRemovalReentryProtection(ByteToMessageDecoder.java:529)\n    at io.netty.handler.codec.ByteToMessageDecoder.callDecode(ByteToMessageDecoder.java:468)\n    at io.netty.handler.codec.ByteToMessageDecoder.channelRead(ByteToMessageDecoder.java:290)\n    at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:444)\n    at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:420)\n    at io.netty.channel.AbstractChannelHandlerContext.fireChannelRead(AbstractChannelHandlerContext.java:412)\n    at io.netty.channel.DefaultChannelPipeline$HeadContext.channelRead(DefaultChannelPipeline.java:1410)\n    at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:440)\n    at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:420)\n    at io.netty.channel.DefaultChannelPipeline.fireChannelRead(DefaultChannelPipeline.java:919)\n    at io.netty.channel.nio.AbstractNioByteChannel$NioByteUnsafe.read(AbstractNioByteChannel.java:166)\n    at io.netty.channel.nio.NioEventLoop.processSelectedKey(NioEventLoop.java:788)\n    at io.netty.channel.nio.NioEventLoop.processSelectedKeysOptimized(NioEventLoop.java:724)\n    at io.netty.channel.nio.NioEventLoop.processSelectedKeys(NioEventLoop.java:650)\n    at io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:562)\n    at io.netty.util.concurrent.SingleThreadEventExecutor$4.run(SingleThreadEventExecutor.java:997)\n    at io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74)\n    at io.netty.util.concurrent.FastThreadLocalRunnable.run(FastThreadLocalRunnable.java:30)\n    ... 1 more\n')),(0,r.kt)("h2",{id:"\u539f\u56e0"},"\u539f\u56e0"),(0,r.kt)("p",null,"\u8be5\u670d\u52a1\u662f\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"aws"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"nlb"),"\u6765\u5b9e\u73b0\u516c\u7f51\u8bbf\u95ee\u7684, \u7531\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"aws"),"\u8fd1\u671f\u7684\u5b89\u5168\u9650\u5236\u5bfc\u81f4",(0,r.kt)("inlineCode",{parentName:"p"},"tls"),"\u7684\u8fde\u63a5\u65e0\u6cd5\u5efa\u7acb\u9700\u8981\u8fdb\u884c\u5907\u6848, \u8be5\u95ee\u9898\u662f\u8fd1\u671f\u53d1\u751f\u7684,\n\u4e4b\u524d\u662f\u53ef\u4ee5\u6b63\u5e38\u8bbf\u95ee\u7684.",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\u6839\u636e\u5f02\u5e38\u4fe1\u606f\u53ef\u4ee5\u770b\u51fa, \u670d\u52a1\u7aef\u8fd4\u56de\u7684\u662f\u975essl\u7684\u54cd\u5e94\u5bfc\u81f4\u5ba2\u6237\u7aef\u629b\u51fa",(0,r.kt)("inlineCode",{parentName:"p"},"NotSslRecordException"),(0,r.kt)("br",null),"\n\u670d\u52a1\u7aef\u8fd4\u56de\u7684\u5185\u5bb9\u4e3a16\u8fdb\u5236\u7684\u5982\u4e0b\u5185\u5bb9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"485454502f312e312034303320466f7262696464656e0a436f6e74656e742d547970653a20746578742f68746d6c3b20636861727365743d7574662d380a5365727665723a2041444d2f322e312e310a436f6e6e656374696f6e3a20636c6f73650a436f6e74656e742d4c656e6774683a203531320a0a3c68746d6c3e0a3c686561643e0a3c6d65746120687474702d65717569763d22436f6e74656e742d547970652220636f6e74656e743d22746578746d6c3b636861727365743d5554462d3822202f3e0a2020203c7374796c653e626f64797b6261636b67726f756e642d636f6c6f723a234646464646467d3c2f7374796c653e200a3c7469746c653e7a687935342d48473130302d32e99d9ee6b395e998bbe696ad3c2f7469746c653e0a20203c736372697074206c616e67756167653d226a6176617363726970742220747970653d22746578742f6a617661736372697074223e0a20202020202020202077696e646f772e6f6e6c6f6164203d2066756e6374696f6e202829207b200a2020202020202020202020646f63756d656e742e676574456c656d656e744279496428226d61696e4672616d6522292e7372633d2022687474703a2f2f3230332e39332e3137302e3231393a393038302f6572726f722e68746d6c223b200a2020202020202020202020207d0a3c2f7363726970743e2020200a3c2f686561643e0a20203c626f64793e0a2020202020203c696672616d652069643d226d61696e4672616d6522207372633d2222206672616d65626f726465723d2230222077696474683d223130302522206865696768743d2231303025223e3c2f696672616d653e0a20203c2f626f64793e0a3c2f68746d6c3e\n")),(0,r.kt)("p",null,"\u4f7f\u752816\u8fdb\u5236\u8f6c\u6362\u5de5\u5177\u8f6c\u6362\u4e3a\u6587\u672c\u5185\u5bb9\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'HTTP/1.1 403 Forbidden\nContent-Type: text/html; charset=utf-8\nServer: ADM/2.1.1\nConnection: close\nContent-Length: 512\n\n<html>\n<head>\n    <meta http-equiv="Content-Type" content="textml;charset=UTF-8"/>\n    <style>body {\n        background-color: #FFFFFF\n    }</style>\n    <title>zhy54-HG100-2\u975e\u6cd5\u963b\u65ad</title>\n    <script language="javascript" type="text/javascript">\n        window.onload = function () {\n            document.getElementById("mainFrame").src = "http://203.93.170.219:9080/error.html";\n        }\n    <\/script>\n</head>\n<body>\n<iframe id="mainFrame" src="" frameborder="0" width="100%" height="100%"></iframe>\n</body>\n</html>\n')),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u670d\u52a1\u7aef\u8fd4\u56de\u7684\u662f\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"403"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"html"),"\u9875\u9762, \u8be5\u9875\u9762\u662f\u7531",(0,r.kt)("inlineCode",{parentName:"p"},"aws"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"nlb"),"\u8fd4\u56de\u7684, \u8be5\u9875\u9762\u5d4c\u5957\u4e86\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"iframe"),"\u6807\u7b7e,\n\u91cc\u9762\u7684\u76ee\u6807\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"http://203.93.170.219:9080/error.html")," ",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\u8bbf\u95ee\u8be5\u9875\u9762\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u5185\u5bb9"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u9875\u9762\u622a\u56fe",src:a(3440).Z,width:"2558",height:"1239"})),(0,r.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,r.kt)("p",null,"\u6839\u636e\u76ee\u524d\u7684\u4fe1\u606f\u6765\u770b, \u8be5\u95ee\u9898\u662f\u7531\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"aws"),"\u7684\u5b89\u5168\u9650\u5236\u5bfc\u81f4\u7684, ",(0,r.kt)("inlineCode",{parentName:"p"},"nlb"),"\u66b4\u9732\u7684\u670d\u52a1\u9700\u8981\u8fdb\u884c\u5907\u6848.",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://s3.cn-north-1.amazonaws.com.cn/sinnetcloud/%E5%85%AC%E5%AE%89%E5%A4%87%E6%A1%88/%E8%8E%B7%E5%8F%96ELB%E7%9A%84IP/AWS+ICP%E5%A4%87%E6%A1%88%E4%BD%BF%E7%94%A8ELB%E9%A2%84%E7%95%99IP%E6%8C%87%E5%8D%97_V2.1(%E6%96%B0%E7%89%88).pdf"},"AWS+ICP\u5907\u6848\u4f7f\u7528ELB\u9884\u7559IP\u6307\u5357_V2.1(\u65b0\u7248).pdf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://s3.cn-northwest-1.amazonaws.com.cn/www.nwcdcloud.cn/icp.pdf"},"\u5173\u4e8e ICP \u5907\u6848/\u516c\u5b89\u5907\u6848/ICP \u8bc1\u4e66\u7533\u8bf7\u6d41\u7a0b\u7684\u6307\u5bfc"))))}f.isMDXComponent=!0},3440:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/screenshot-8c7af8d8611ffc4b87da535729eef1dd.jpeg"}}]);