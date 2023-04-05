"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[3107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(h,a(a({ref:t},s),{},{components:n})):o.createElement(h,a({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const i={authors:["xiangcheng.kuo"],tags:["problem-solving","kotlin","java","consul"]},a="\u901a\u8fc7\u5f15\u5165\u9632\u5fa1\u6027\u590d\u5236\u4ee5\u907f\u514dConcurrentModificationException",c={permalink:"/blog/2022/11/24/avoiding-the-concurrent-modification-exception",source:"@site/blog/2022-11-24/avoiding-the-concurrent-modification-exception.md",title:"\u901a\u8fc7\u5f15\u5165\u9632\u5fa1\u6027\u590d\u5236\u4ee5\u907f\u514dConcurrentModificationException",description:"\u5728consul\u4e2d\u4fee\u6539\u76f8\u5173\u670d\u52a1\u7684\u914d\u7f6e\u65f6\u5f15\u53d1ConcurrentModificationException\u5e76\u5bfc\u81f4\u534f\u7a0b\u4efb\u52a1\u5f02\u5e38\u9000\u51fa.",date:"2022-11-24T00:00:00.000Z",formattedDate:"November 24, 2022",tags:[{label:"problem-solving",permalink:"/blog/tags/problem-solving"},{label:"kotlin",permalink:"/blog/tags/kotlin"},{label:"java",permalink:"/blog/tags/java"},{label:"consul",permalink:"/blog/tags/consul"}],readingTime:1.315,hasTruncateMarker:!1,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","kotlin","java","consul"]},prevItem:{title:"TestContainers\u542f\u52a8\u5b8cfastone-auditing\u5bb9\u5668\u540e\u5ba2\u6237\u7aef\u8fde\u63a5\u62a5\u9519",permalink:"/blog/2022/12/29/testcontainers-connection-reset"}},l={authorsImageUrls:[void 0]},u=[{value:"\u539f\u56e0",id:"\u539f\u56e0",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],s={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"consul"),"\u4e2d\u4fee\u6539\u76f8\u5173\u670d\u52a1\u7684\u914d\u7f6e\u65f6\u5f15\u53d1",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentModificationException"),"\u5e76\u5bfc\u81f4\u534f\u7a0b\u4efb\u52a1\u5f02\u5e38\u9000\u51fa.",(0,r.kt)("br",null),"\n\u76f8\u5173\u62a5\u9519\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"2022-11-24 10:08:27.954  INFO 1 --- [TaskScheduler-1] b.c.PropertySourceBootstrapConfiguration : Located property source: [BootstrapPropertySource {name='bootstrapProperties-config/mgmt-scheduler/'}, BootstrapPropertySource {name='bootstrapProperties-config/application/'}]\n2022-11-24 10:08:27.968  INFO 1 --- [TaskScheduler-1] o.s.boot.SpringApplication               : No active profile set, falling back to 1 default profile: \"default\"\n2022-11-24 10:08:27.979  INFO 1 --- [TaskScheduler-1] o.s.boot.SpringApplication               : Started application in 0.244 seconds (JVM running for 7930.38)\nException in thread \"DefaultDispatcher-worker-6\" java.util.ConcurrentModificationException\nat java.base/java.util.ArrayList$Itr.checkForComodification(ArrayList.java:1013)\nat java.base/java.util.ArrayList$Itr.next(ArrayList.java:967)\nat com.fastonetech.scheduling.core.ResourceDispatcher$Companion$of$1$1.invokeSuspend(ResourceDispatcher.kt:40)\nat com.fastonetech.scheduling.core.ResourceDispatcher$Companion$of$1$1.invoke(ResourceDispatcher.kt)\nat com.fastonetech.scheduling.core.ResourceDispatcher$Companion$of$1$1.invoke(ResourceDispatcher.kt)\nat kotlinx.coroutines.intrinsics.UndispatchedKt.startUndispatchedOrReturn(Undispatched.kt:89)\nat kotlinx.coroutines.CoroutineScopeKt.coroutineScope(CoroutineScope.kt:264)\nat com.fastonetech.scheduling.core.ResourceDispatcher$Companion$of$1.dispatch(ResourceDispatcher.kt:16)\nat com.fastonetech.scheduling.core.ResourceDispatcher$Companion$of$3.schedule(ResourceDispatcher.kt:32)\nat com.fastonetech.scheduling.core.ResourceDispatcher$Companion$of$3.schedule(ResourceDispatcher.kt:27)\nat com.fastonetech.scheduling.core.ResourceDispatcher$Companion$of$1$1$2$1.invokeSuspend(ResourceDispatcher.kt:19)\nat kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:33)\nat kotlinx.coroutines.DispatchedTask.run(DispatchedTask.kt:106)\nat kotlinx.coroutines.internal.LimitedDispatcher.run(LimitedDispatcher.kt:42)\nat kotlinx.coroutines.scheduling.TaskImpl.run(Tasks.kt:95)\nat kotlinx.coroutines.scheduling.CoroutineScheduler.runSafely(CoroutineScheduler.kt:570)\nat kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.executeTask(CoroutineScheduler.kt:749)\nat kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.runWorker(CoroutineScheduler.kt:677)\nat kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.run(CoroutineScheduler.kt:664)\nSuppressed: kotlinx.coroutines.DiagnosticCoroutineContextException: [StandaloneCoroutine{Cancelling}@19b8b4b6, Dispatchers.IO]\n")),(0,r.kt)("h2",{id:"\u539f\u56e0"},"\u539f\u56e0"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f\u88ab\u4fee\u6539\u7684\u914d\u7f6e\u6620\u5c04\u5230\u4e86\u4ee3\u7801\u4e2d\u88ab",(0,r.kt)("inlineCode",{parentName:"p"},"@ConfigurationProperties"),"\u6ce8\u89e3\u7684\u7c7b\u4e2d\u7684\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"List"),"\u7c7b\u578b\u7684\u5c5e\u6027.",(0,r.kt)("br",null),"\n\u8be5\u5c5e\u6027\u88ab\u4fee\u6539\u65f6\u6070\u597d\u534f\u7a0b\u4efb\u52a1\u6b63\u5728\u904d\u5386\u8be5\u5c5e\u6027, \u4ece\u800c\u5bfc\u81f4",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentModificationException"),"\u5f02\u5e38.",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,r.kt)("p",null,"\u6bcf\u6b21\u83b7\u53d6\u8be5\u5c5e\u6027\u65f6\u90fd\u8fdb\u884c\u4e00\u6b21\u9632\u5fa1\u6027\u590d\u5236, \u4ece\u800c\u907f\u514d",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentModificationException"),"\u5f02\u5e38"),(0,r.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.baeldung.com/java-concurrentmodificationexception"},"Avoiding the ConcurrentModificationException in Java")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://waltyou.github.io/Effective-Java-50-Make-Defensive-Copies-When-Needed/"},"\u300aEffective Java\u300b\u5b66\u4e60\u65e5\u5fd7\uff08\u4e03\uff0950\uff1a\u5f53\u9700\u8981\u65f6\u8fdb\u884c\u9632\u5fa1\u6027\u590d\u5236"))))}d.isMDXComponent=!0}}]);