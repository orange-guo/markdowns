"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[90408],{15733:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var i=n(42060),r=n(74848),a=n(28453);const o={authors:["orange"],tags:["troubleshooting","java","spring-boot","aot","native-image","graalvm"]},s="Spring Boot\u9879\u76ee\u542f\u7528native\u6784\u5efa\u540e\u7531\u4e8e\u5e8f\u5217\u5316\u5bf9\u8c61\u7f3a\u5c11ReflectionHints\u5bfc\u81f4json\u6570\u636e\u4e3a''",l={authorsImageUrls:[void 0]},g=[{value:"\u539f\u56e0",id:"\u539f\u56e0",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2}];function c(t){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:["\u57fa\u4e8e",(0,r.jsx)(e.code,{children:"graalvm"}),"\u7684",(0,r.jsx)(e.code,{children:"spring boot"}),"\u9879\u76ee\u6253\u5305\u597d\u540e\u8c03\u7528",(0,r.jsx)(e.code,{children:"/scheduling/api/v1/taskDefinitions"}),"\u63a5\u53e3\u8fd4\u56de\u5982\u4e0b\u6570\u636e, \u5176\u4e2d",(0,r.jsx)(e.code,{children:"triggerStrategy"}),"\u5b57\u6bb5\u662f\u7a7a",(0,r.jsx)(e.code,{children:"json"}),"\u5bf9\u8c61"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'[\n\t{\n\t\t"id": "BILLING_SYNC_FOR_DEPLOYMENT_127",\n\t\t"triggerStrategy": {},\n\t\t"tags": {\n\t\t\t"EXECUTOR": "com.fastonetech.billing.sync.scheduling.BillingSyncTaskExecutor"\n\t\t},\n\t\t"variables": {\n\t\t\t"SOURCE_RCLONE_CONFIG": "TENCENT_ap-beijing",\n\t\t\t"SOURCE_BUCKET": "cheng1201-1310454728",\n\t\t\t"SOURCE_PATH": "",\n\t\t\t"TARGET_RCLONE_CONFIG": "aggregation",\n\t\t\t"TARGET_BUCKET": "billing-aggregation",\n\t\t\t"TARGET_PATH": "TENCENT/ap-beijing/cheng1201-1310454728"\n\t\t}\n\t}\n]\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u539f\u56e0",children:"\u539f\u56e0"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"triggerStrategy"}),"\u5b57\u6bb5\u5bf9\u5e94\u7684java\u4e2d\u7684\u7c7b\u578b\u662f",(0,r.jsx)(e.code,{children:"interface"}),", \u9700\u8981\u4e3aspring-aot\u8fdb\u884c\u914d\u7f6e, \u4ee5\u4fbf\u5176\u80fd\u591f\u5728\u8fd0\u884c\u65f6\u88ab\u6b63\u786e\u5730\u5e8f\u5217\u5316"]}),"\n",(0,r.jsx)(e.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,r.jsxs)(e.p,{children:["\u5728",(0,r.jsx)(e.code,{children:"ReflectiveProcessor"}),"\u5b9e\u73b0\u7c7b\u4e2d\u65b0\u589e\u5982\u4e0b\u914d\u7f6e, \u8fd9\u91cc\u53ea\u5c55\u793a\u4e86\u672c\u6b21\u4fee\u590d\u7684\u5185\u5bb9",(0,r.jsx)("br",{}),"\n\u5176\u4e2d, ",(0,r.jsx)(e.code,{children:"TaskTriggerStrategy"}),"\u4e3a",(0,r.jsx)(e.code,{children:"interface"}),", ",(0,r.jsx)(e.code,{children:"CronTaskTriggerStrategy"}),"\u548c",(0,r.jsx)(e.code,{children:"PeriodicTaskTriggerStrategy"}),"\u4e3a\u5176\u5b9e\u73b0\u7c7b"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-kotlin",children:"class ReflectiveProcessorImpl : ReflectiveProcessor {\n\n\toverride fun registerReflectionHints(hints: ReflectionHints, element: AnnotatedElement) {\n\t\tval registrar = BindingReflectionHintsRegistrar()\n\t\tregistrar.registerReflectionHints(\n\t\t\thints,\n\t\t\tarrayOf(\n\t\t\t\tTaskTriggerStrategy::class.java,\n\t\t\t\tCronTaskTriggerStrategy::class.java,\n\t\t\t\tPeriodicTaskTriggerStrategy::class.java\n\t\t\t)\n\t\t)\n\t}\n\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u5907\u6ce8",children:"\u5907\u6ce8"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://github.com/spring-projects/spring-aot-smoke-tests/blob/main/boot/json/src/main/java/com/example/json/JsonApplication.java",children:"JsonApplication.java"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://github.com/spring-projects/spring-aot-smoke-tests",children:"spring-aot-smoke-tests"})}),"\n"]})]})}function d(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(c,{...t})}):c(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>o,x:()=>s});var i=n(96540);const r={},a=i.createContext(r);function o(t){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:o(t.components),i.createElement(a.Provider,{value:e},t.children)}},42060:t=>{t.exports=JSON.parse('{"permalink":"/blog/2022/11/29/spring-boot-native-build-serialization-missing-reflectionhints-empty-json-data","source":"@site/blog/2022-11-29-spring-boot-native-build-serialization-missing-reflectionhints-empty-json-data.md","title":"Spring Boot\u9879\u76ee\u542f\u7528native\u6784\u5efa\u540e\u7531\u4e8e\u5e8f\u5217\u5316\u5bf9\u8c61\u7f3a\u5c11ReflectionHints\u5bfc\u81f4json\u6570\u636e\u4e3a\'{}\'","description":"\u57fa\u4e8egraalvm\u7684spring boot\u9879\u76ee\u6253\u5305\u597d\u540e\u8c03\u7528/scheduling/api/v1/taskDefinitions\u63a5\u53e3\u8fd4\u56de\u5982\u4e0b\u6570\u636e, \u5176\u4e2dtriggerStrategy\u5b57\u6bb5\u662f\u7a7ajson\u5bf9\u8c61","date":"2022-11-29T00:00:00.000Z","tags":[{"inline":true,"label":"troubleshooting","permalink":"/blog/tags/troubleshooting"},{"inline":true,"label":"java","permalink":"/blog/tags/java"},{"inline":true,"label":"spring-boot","permalink":"/blog/tags/spring-boot"},{"inline":true,"label":"aot","permalink":"/blog/tags/aot"},{"inline":true,"label":"native-image","permalink":"/blog/tags/native-image"},{"inline":true,"label":"graalvm","permalink":"/blog/tags/graalvm"}],"readingTime":0.905,"hasTruncateMarker":true,"authors":[{"name":"orange","title":"programmer on jvm platform","url":"https://github.com/orange-guo","imageURL":"https://github.com/orange-guo.png","key":"orange","page":null}],"frontMatter":{"authors":["orange"],"tags":["troubleshooting","java","spring-boot","aot","native-image","graalvm"]},"unlisted":false,"prevItem":{"title":"TestContainers\u542f\u52a8\u5b8cfastone-auditing\u5bb9\u5668\u540e\u5ba2\u6237\u7aef\u8fde\u63a5\u62a5\u9519","permalink":"/blog/2022/12/29/testcontainers-connection-reset"},"nextItem":{"title":"\u901a\u8fc7\u5f15\u5165\u9632\u5fa1\u6027\u590d\u5236\u4ee5\u907f\u514dConcurrentModificationException","permalink":"/blog/2022/11/24/avoiding-the-concurrent-modification-exception"}}')}}]);