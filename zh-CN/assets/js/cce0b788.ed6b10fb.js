"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[9118],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=i,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return t?a.createElement(k,r(r({ref:n},d),{},{components:t})):a.createElement(k,r({ref:n},d))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1714:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const l={authors:["xiangcheng.kuo"],tags:["problem-solving","spring-boot","spring","binary-build"]},r="\u4f7f\u7528spring\u6784\u5efanative\u9047\u5230\u7684\u95ee\u9898",o={permalink:"/zh-CN/blog/2023/03/06/problem-build-native-springboot-application",source:"@site/blog/2023-03-06/problem-build-native-springboot-application.md",title:"\u4f7f\u7528spring\u6784\u5efanative\u9047\u5230\u7684\u95ee\u9898",description:"\u672c\u6587\u4e3b\u8981\u6574\u7406\u4e86\u5728\u6784\u5efaspring-boot\u5e94\u7528\u4e3anative\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898.",date:"2023-03-06T00:00:00.000Z",formattedDate:"2023\u5e743\u67086\u65e5",tags:[{label:"problem-solving",permalink:"/zh-CN/blog/tags/problem-solving"},{label:"spring-boot",permalink:"/zh-CN/blog/tags/spring-boot"},{label:"spring",permalink:"/zh-CN/blog/tags/spring"},{label:"binary-build",permalink:"/zh-CN/blog/tags/binary-build"}],readingTime:7.535,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","spring-boot","spring","binary-build"]},prevItem:{title:"SSH\u547d\u4ee4\u65e0\u6cd5\u521b\u5efa\u8fdc\u7a0b\u8fde\u63a5",permalink:"/zh-CN/blog/2023/03/09/ssh-execution-timeout"},nextItem:{title:"\u5347\u7ea7springboot3\u9047\u5230\u7684\u95ee\u9898",permalink:"/zh-CN/blog/2023/03/05/problem-springboot3-upgrade"}},s={authorsImageUrls:[void 0]},p=[{value:"\u79fb\u9664<code>spring-native</code>\u4f9d\u8d56, \u56e0\u4e3a\u5df2\u88ab<code>spring-core</code>\u63d0\u4f9b\u7684<code>aot</code>\u529f\u80fd\u53d6\u4ee3",id:"\u79fb\u9664spring-native\u4f9d\u8d56-\u56e0\u4e3a\u5df2\u88abspring-core\u63d0\u4f9b\u7684aot\u529f\u80fd\u53d6\u4ee3",level:2},{value:"<code>@RegisterReflectionForBinding</code>\u65e0\u6cd5\u96c6\u6210<code>querysdl</code>\u751f\u6210\u7684<code>Q</code>\u7c7b",id:"registerreflectionforbinding\u65e0\u6cd5\u96c6\u6210querysdl\u751f\u6210\u7684q\u7c7b",level:2},{value:"\u5347\u7ea7<code>graalvm</code>\u7248\u672c",id:"\u5347\u7ea7graalvm\u7248\u672c",level:2},{value:"<code>paketo</code>\u4f9d\u8d56\u4e0b\u8f7d\u5931\u8d25",id:"paketo\u4f9d\u8d56\u4e0b\u8f7d\u5931\u8d25",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:3},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:3},{value:"<code>gradle</code>\u4e2d<code>native</code>\u76f8\u5173\u547d\u4ee4",id:"gradle\u4e2dnative\u76f8\u5173\u547d\u4ee4",level:4},{value:"<code>gradle</code>\u4e2d\u7684<code>BootBuildImage</code>\u914d\u7f6e\u53c2\u8003",id:"gradle\u4e2d\u7684bootbuildimage\u914d\u7f6e\u53c2\u8003",level:4},{value:"<code>binding-tool</code>\u4f7f\u7528\u65b9\u5f0f\u53c2\u8003",id:"binding-tool\u4f7f\u7528\u65b9\u5f0f\u53c2\u8003",level:4},{value:"\u56fa\u5b9a<code>builder</code>\u548c<code>run</code>\u955c\u50cf\u7248\u672c\u4ee5\u907f\u514d\u7ecf\u5e38\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684<code>builder</code>\u548c<code>run</code>\u955c\u50cf",id:"\u56fa\u5b9abuilder\u548crun\u955c\u50cf\u7248\u672c\u4ee5\u907f\u514d\u7ecf\u5e38\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684builder\u548crun\u955c\u50cf",level:2},{value:"\u539f\u56e0",id:"\u539f\u56e0",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-1",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003-1",level:3},{value:"kotlinx-coroutines\u9700\u8981\u914d\u7f6e\u53cd\u5c04\u63d0\u793a",id:"kotlinx-coroutines\u9700\u8981\u914d\u7f6e\u53cd\u5c04\u63d0\u793a",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-2",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003-2",level:3},{value:"<code>ktor</code>\u5e93\u9700\u8981\u914d\u7f6e\u53cd\u5c04\u63d0\u793a",id:"ktor\u5e93\u9700\u8981\u914d\u7f6e\u53cd\u5c04\u63d0\u793a",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-3",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003-3",level:3},{value:"\u4e3a\u9700\u8981\u5e8f\u5217\u5316\u7684\u5bf9\u8c61\u914d\u7f6e\u53cd\u5c04\u63d0\u793a",id:"\u4e3a\u9700\u8981\u5e8f\u5217\u5316\u7684\u5bf9\u8c61\u914d\u7f6e\u53cd\u5c04\u63d0\u793a",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-4",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003-4",level:3},{value:"\u6784\u5efa\u51fa\u7684\u955c\u50cf\u4e0d\u662f<code>native</code>",id:"\u6784\u5efa\u51fa\u7684\u955c\u50cf\u4e0d\u662fnative",level:2},{value:"\u539f\u59cb\u914d\u7f6e",id:"\u539f\u59cb\u914d\u7f6e",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-5",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003-5",level:3},{value:"<code>aot</code>\u5e94\u7528\u8fd0\u884c\u65f6\u8c03\u7528\u7531<code>@ConfigurationProperty</code>\u6ce8\u89e3\u6ce8\u91ca\u7684\u5bf9\u8c61\u7684\u5c5e\u6027\u65f6\u62a5\u9519",id:"aot\u5e94\u7528\u8fd0\u884c\u65f6\u8c03\u7528\u7531configurationproperty\u6ce8\u89e3\u6ce8\u91ca\u7684\u5bf9\u8c61\u7684\u5c5e\u6027\u65f6\u62a5\u9519",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-6",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003-6",level:3},{value:"<code>aot</code>\u5e94\u7528\u8fd0\u884c\u65f6\u83b7\u53d6<code>classpath</code>\u4e0b\u7684\u8d44\u6e90\u65f6\u62a5\u9519",id:"aot\u5e94\u7528\u8fd0\u884c\u65f6\u83b7\u53d6classpath\u4e0b\u7684\u8d44\u6e90\u65f6\u62a5\u9519",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-7",level:3},{value:"<code>aot</code>\u5e94\u7528\u8fd0\u884c\u65f6<code>@Conditional</code>\u6ce8\u89e3\u4e0d\u751f\u6548",id:"aot\u5e94\u7528\u8fd0\u884c\u65f6conditional\u6ce8\u89e3\u4e0d\u751f\u6548",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003-7",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003-8",level:3}],d={toc:p},c="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u6574\u7406\u4e86\u5728\u6784\u5efa",(0,i.kt)("inlineCode",{parentName:"p"},"spring-boot"),"\u5e94\u7528\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"native"),"\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898."),(0,i.kt)("h2",{id:"\u79fb\u9664spring-native\u4f9d\u8d56-\u56e0\u4e3a\u5df2\u88abspring-core\u63d0\u4f9b\u7684aot\u529f\u80fd\u53d6\u4ee3"},"\u79fb\u9664",(0,i.kt)("inlineCode",{parentName:"h2"},"spring-native"),"\u4f9d\u8d56, \u56e0\u4e3a\u5df2\u88ab",(0,i.kt)("inlineCode",{parentName:"h2"},"spring-core"),"\u63d0\u4f9b\u7684",(0,i.kt)("inlineCode",{parentName:"h2"},"aot"),"\u529f\u80fd\u53d6\u4ee3"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"spring-native"),"\u5df2\u88ab",(0,i.kt)("inlineCode",{parentName:"p"},"spring-core"),"\u63d0\u4f9b\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"aot"),"\u529f\u80fd\u53d6\u4ee3, \u6240\u4ee5\u4e0d\u9700\u8981\u5f15\u5165\u8001\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"spring-native"),"\u4f9d\u8d56.",(0,i.kt)("br",null),"\n\u5728github",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spring-attic/spring-native"},"spring-native"),"\u7684\u4e3b\u9875\u4e0a\u6709\u5982\u4e0b\u8bf4\u660e"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This project is now superseded by Spring Boot 3+ official native support, see the related reference documentation for\nmore details.")),(0,i.kt)("p",null,"\u65b0\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"aot"),"\n\u529f\u80fd\u7684\u6587\u6863\u53ef\u4ee5\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/native-image.html"},"GraalVM Native Image Support"),(0,i.kt)("br",null)),(0,i.kt)("p",null,"\u5176\u5185\u90e8\u5de5\u4f5c\u539f\u7406\u4e3b\u8981\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"ReflectiveProcessor"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"RuntimeHintsRegistrar"),"\u7528\u6765\u5e2e\u52a9\u751f\u6210\u53cd\u5c04\u63d0\u793a, \u5e76\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"graalvm"),"\n\u7f16\u8bd1\u671f\u95f4\u4f7f\u7528.",(0,i.kt)("br",null)),(0,i.kt)("h2",{id:"registerreflectionforbinding\u65e0\u6cd5\u96c6\u6210querysdl\u751f\u6210\u7684q\u7c7b"},(0,i.kt)("inlineCode",{parentName:"h2"},"@RegisterReflectionForBinding"),"\u65e0\u6cd5\u96c6\u6210",(0,i.kt)("inlineCode",{parentName:"h2"},"querysdl"),"\u751f\u6210\u7684",(0,i.kt)("inlineCode",{parentName:"h2"},"Q"),"\u7c7b"),(0,i.kt)("p",null,"\u7531\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"querydsl"),"\u751f\u6210\u7684Q\u7c7b\u4e0d\u80fd\u653e\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"@RegisterReflectionForBinding"),"\u4e0a(\u56e0\u4e3a\u7f16\u8bd1\u4f18\u5148\u7ea7\u539f\u56e0),\n\u5219\u9700\u8981\u91cd\u65b0\u5b9e\u73b0",(0,i.kt)("inlineCode",{parentName:"p"},"@RegisterReflectionForBinding"),"\u7684\u5177\u4f53\u5b9e\u73b0\u903b\u8f91.",(0,i.kt)("br",null),"\n\u4e3b\u8981\u662f\u7ee7\u627f",(0,i.kt)("inlineCode",{parentName:"p"},"ReflectiveProcessor"),"\u5e76\u914d\u5408",(0,i.kt)("inlineCode",{parentName:"p"},"BindingReflectionHintsRegistrar"),".",(0,i.kt)("br",null),"\n\u53c2\u8003\u4ee3\u7801:",(0,i.kt)("br",null)),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class ReflectiveProcessorImpl : ReflectiveProcessor {\n\n    override fun registerReflectionHints(hints: ReflectionHints, element: AnnotatedElement) {\n        val function = BindingReflectionHintsRegistrar()::registerReflectionHints.partially1(hints)\n        function(\n            arrayOf(\n                Page::class.java,\n                ResponseResult::class.java,\n                SignInRequest::class.java,\n                SignInResponse::class.java\n            )\n        )\n    }\n\n}\n")),(0,i.kt)("h2",{id:"\u5347\u7ea7graalvm\u7248\u672c"},"\u5347\u7ea7",(0,i.kt)("inlineCode",{parentName:"h2"},"graalvm"),"\u7248\u672c"),(0,i.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"graalvm"),"\u7248\u672c\u8fc7\u4e8e\u8001, \u5219\u4f1a\u51fa\u73b0\u5982\u4e0b\u7c7b\u4f3c\u7684\u9519\u8bef"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GraalVM version 22.3 is required but 22.0 has been detected, please upgrade.\n")),(0,i.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u9700\u8981\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"graalvm"),"\u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c"),(0,i.kt)("h2",{id:"paketo\u4f9d\u8d56\u4e0b\u8f7d\u5931\u8d25"},(0,i.kt)("inlineCode",{parentName:"h2"},"paketo"),"\u4f9d\u8d56\u4e0b\u8f7d\u5931\u8d25"),(0,i.kt)("p",null,"\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"./gradlew bootBuildImage"),"\u6784\u5efa\u955c\u50cf\u65f6, \u8f93\u51fa\u4ee5\u4e0b\u9519\u8bef"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},"unable to copy from https://github.com/bell-sw/Liberica/releases/download/17.0.5+8/bellsoft-jre17.0.5+8-linux-amd64.tar.gz to /tmp/ee56d911dd187d4965fe2d5280e17b76253eb40eb4e5c8582a17cd46ea0168b1/bellsoft-jre17.0.5+8-linux-amd64.tar.gz\n[creator]     stream error: stream ID 1; PROTOCOL_ERROR; received from peer\n")),(0,i.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f\u56e0\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"paketo"),"\u7684\u8fdb\u884c\u6784\u5efa\u8fc7\u7a0b\u4e2d\u4f1a\u4e0b\u8f7d\u4e00\u4e9b\u4f9d\u8d56, \u4f46\u662f\u8fd9\u4e9b\u4f9d\u8d56\u5728\u56fd\u5916, \u4e0b\u8f7d\u901f\u5ea6\u4f1a\u53d8\u6162, \u751a\u81f3\u4f1a\u4e0b\u8f7d\u5931\u8d25.",(0,i.kt)("br",null)),(0,i.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,i.kt)("p",null,"\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"binding-tool"),"\u5de5\u5177\u751f\u6210",(0,i.kt)("inlineCode",{parentName:"p"},"dependency-mapping"),"\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"bindings"),"\u5e76\u6620\u5c04\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"builder"),"\u5bb9\u5668\u4e2d"),(0,i.kt)("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paketo-buildpacks/bellsoft-liberica/issues/7"},"Override paketo-buildpacks download URIs"),".",(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/dmikusa/binding-tool"},"binding-tool"))),(0,i.kt)("h3",{id:"\u5907\u6ce8"},"\u5907\u6ce8"),(0,i.kt)("h4",{id:"gradle\u4e2dnative\u76f8\u5173\u547d\u4ee4"},(0,i.kt)("inlineCode",{parentName:"h4"},"gradle"),"\u4e2d",(0,i.kt)("inlineCode",{parentName:"h4"},"native"),"\u76f8\u5173\u547d\u4ee4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./gradlew nativeCompile\n./gradlew bootBuildImage\n./build/native/nativeCompile/fastone-auditing\n")),(0,i.kt)("h4",{id:"gradle\u4e2d\u7684bootbuildimage\u914d\u7f6e\u53c2\u8003"},(0,i.kt)("inlineCode",{parentName:"h4"},"gradle"),"\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"h4"},"BootBuildImage"),"\u914d\u7f6e\u53c2\u8003"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="build.kts"',title:'"build.kts"'},'tasks.withType<BootBuildImage> {\n    // https://docs.spring.io/spring-boot/docs/3.0.0/gradle-plugin/reference/htmlsingle/#build-image.examples.caches\n    buildCache {\n        volume {\n            name.set("cache-${rootProject.name}.build")\n        }\n    }\n    launchCache {\n        volume {\n            name.set("cache-${rootProject.name}.launch")\n        }\n    }\n    publish.set(true)\n    docker {\n        publishRegistry {\n            username.set(System.getenv("HARBOR_USERNAME"))\n            password.set(System.getenv("HARBOR_PASSWORD"))\n        }\n    }\n\n    val labels = System.getenv("LABELS")?.replace(",", " ")\n\n    // https://github.com/paketo-buildpacks/image-labels\n    mapOf("SERVICE_BINDING_ROOT" to "/bindings").plus(\n        when (labels) {\n            null -> emptyMap()\n            else -> mapOf("BP_IMAGE_LABELS" to labels)\n        }\n    ).let { environment.set(it) }\n    bindings.set(listOf("${project.projectDir}/bindings:/bindings"))\n    val formatter = DateTimeFormatter.ofPattern("yyyyMMdd-HHmmss")\n    imageName.set("hub.fastonetech.com/infra/${project.name}:${formatter.format(ZonedDateTime.now(ZoneId.of("UTC")))}")\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/native-image.html#native-image.developing-your-first-application.native-build-tools.gradle"},"native-image.developing-your-first-application")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/htmlsingle/#build-image.examples"},"build-image.examples"))),(0,i.kt)("h4",{id:"binding-tool\u4f7f\u7528\u65b9\u5f0f\u53c2\u8003"},(0,i.kt)("inlineCode",{parentName:"h4"},"binding-tool"),"\u4f7f\u7528\u65b9\u5f0f\u53c2\u8003"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bt dm -t buildpack.toml\n./bt dm -b paketo-buildpacks/bellsoft-liberica\n./bt dm -b paketo-buildpacks/syft\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/paketo-buildpacks/bellsoft-liberica/main/buildpack.toml"},"buildpack.toml"))),(0,i.kt)("h2",{id:"\u56fa\u5b9abuilder\u548crun\u955c\u50cf\u7248\u672c\u4ee5\u907f\u514d\u7ecf\u5e38\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684builder\u548crun\u955c\u50cf"},"\u56fa\u5b9a",(0,i.kt)("inlineCode",{parentName:"h2"},"builder"),"\u548c",(0,i.kt)("inlineCode",{parentName:"h2"},"run"),"\u955c\u50cf\u7248\u672c\u4ee5\u907f\u514d\u7ecf\u5e38\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684",(0,i.kt)("inlineCode",{parentName:"h2"},"builder"),"\u548c",(0,i.kt)("inlineCode",{parentName:"h2"},"run"),"\u955c\u50cf"),(0,i.kt)("p",null,"\u5728\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"packeto-builder"),"\u6784\u5efa\u955c\u50cf\u65f6, \u4f1a\u7ecf\u5e38\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"paketo"),"\u4f9d\u8d56, \u8fd9\u6837\u4f1a\u5bfc\u81f4\u81ea\u5b9a\u4e49",(0,i.kt)("inlineCode",{parentName:"p"},"dependency-mapping"),"\u5931\u6548,\n\u4ece\u800c\u5bfc\u81f4\u6784\u5efa\u5931\u8d25.",(0,i.kt)("br",null)),(0,i.kt)("h3",{id:"\u539f\u56e0"},"\u539f\u56e0"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u5c1d\u8bd5\u4e0b\u8f7d\u6700\u65b0\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"builder"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"run"),"\u955c\u50cf, \u4f46\u662f\u8fd9\u4e9b\u955c\u50cf\u4e2d\u5305\u542b\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"paketo"),"\u7684\u4f9d\u8d56, \u4ece\u800c\u5bfc\u81f4\u4e0b\u8f7d\u6700\u65b0\u7684\u4f9d\u8d56.",(0,i.kt)("br",null)),(0,i.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848-1"},"\u89e3\u51b3\u65b9\u6848"),(0,i.kt)("p",null,"\u4e3a\u4e86\u907f\u514d\u8fd9\u4e2a\u95ee\u9898, \u6211\u4eec\u9700\u8981\u56fa\u5b9a",(0,i.kt)("inlineCode",{parentName:"p"},"builder"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"run"),"\u955c\u50cf\u7684\u7248\u672c, \u4ece\u800c\u907f\u514d\u4e0b\u8f7d\u6700\u65b0\u7684\u4f9d\u8d56.",(0,i.kt)("br",null)),(0,i.kt)("p",null,"\u53c2\u8003\u4ee3\u7801\u5982\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="build.kts"',title:'"build.kts"'},'tasks.withType<BootBuildImage> {\n    // TO FIX THE VERSION OF BUILDER AND RUN IMAGE to avoid updating it\'s buildpack version which name is bellsoft\n    builder.set("paketobuildpacks/builder@sha256:317066766dcb7f47535fe5d97b860be6aabab57da5ef056a11f9db855a73f9e8")\n    runImage.set("paketobuildpacks/run@sha256:e9bae15ccc7e230da6ae6c6cd6eef519b10b5ec2187729f60e70c08415a330a0")\n}\n')),(0,i.kt)("h3",{id:"\u53c2\u8003-1"},"\u53c2\u8003"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/htmlsingle/#build-image.examples.custom-image-builder"},"Custom Image Builder and Run Image"))),(0,i.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u662f\u56fa\u5b9a\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"builder"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"run"),"\u955c\u50cf\u7684\u7248\u672c, \u4ece\u800c\u907f\u514d\u4e0b\u8f7d\u6700\u65b0\u7684\u4f9d\u8d56.",(0,i.kt)("br",null)),(0,i.kt)("h2",{id:"kotlinx-coroutines\u9700\u8981\u914d\u7f6e\u53cd\u5c04\u63d0\u793a"},"kotlinx-coroutines\u9700\u8981\u914d\u7f6e\u53cd\u5c04\u63d0\u793a"),(0,i.kt)("p",null,"\u5c06\u542b\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"kotlinx-coroutines"),"\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"kotlin"),"\u4ee3\u7801\u7f16\u8bd1\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"native"),"\u65f6, \u8fd0\u884c\u540e\u51fa\u73b0\u4ee5\u4e0b\u9519\u8bef"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},"java.lang.NoSuchMethodException: kotlin.internal.jdk8.JDK8PlatformImplementations.<init>()\n")),(0,i.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848-2"},"\u89e3\u51b3\u65b9\u6848"),(0,i.kt)("p",null,"\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"classpath"),"\u4e0b\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"META-INF/native-image/reflect-config.json"),"\u6587\u4ef6\u4e2d\u589e\u52a0\u5982\u4e0b\u5185\u5bb9\u7528\u4e8e\u914d\u7f6e\u53cd\u5c04\u63d0\u793a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "name": "kotlin.reflect.jvm.internal.ReflectionFactoryImpl",\n        "allDeclaredConstructors": true\n    },\n    {\n        "name": "kotlin.KotlinVersion",\n        "allPublicMethods": true,\n        "allDeclaredFields": true,\n        "allDeclaredMethods": true,\n        "allDeclaredConstructors": true\n    },\n    {\n        "name": "kotlin.KotlinVersion[]"\n    },\n    {\n        "name": "kotlin.KotlinVersion$Companion"\n    },\n    {\n        "name": "kotlin.KotlinVersion$Companion[]"\n    },\n    {\n        "name": "kotlin.internal.jdk8.JDK8PlatformImplementations",\n        "allPublicMethods": true,\n        "allDeclaredFields": true,\n        "allDeclaredMethods": true,\n        "allDeclaredConstructors": true\n    }\n]\n')),(0,i.kt)("h3",{id:"\u53c2\u8003-2"},"\u53c2\u8003"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/74612654/how-to-provide-runtimehints-for-internal-classes-in-springboot3"},"How to provide RuntimeHints for Internal Classes in SpringBoot3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/spring-projects-experimental/spring-native/issues/1646"},"Kotlin: Native reflection config missing kotlin.internal.jdk8.JDK8PlatformImplementations #1646")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtrack.jetbrains.com/issue/KT-51579"},"PlatformImplementations loading is not compatible with graalvm native-image --no-fallback"))),(0,i.kt)("h2",{id:"ktor\u5e93\u9700\u8981\u914d\u7f6e\u53cd\u5c04\u63d0\u793a"},(0,i.kt)("inlineCode",{parentName:"h2"},"ktor"),"\u5e93\u9700\u8981\u914d\u7f6e\u53cd\u5c04\u63d0\u793a"),(0,i.kt)("p",null,"\u5c06\u542b\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"ktor"),"\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"kotlin"),"\u4ee3\u7801\u7f16\u8bd1\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"native"),"\u540e\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u4ee5\u4e0b\u9519\u8bef"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},"Caused by: java.lang.RuntimeException: java.lang.NoSuchFieldException: top\n    at java.util.concurrent.atomic.AtomicLongFieldUpdater$CASUpdater.<init>(AtomicLongFieldUpdater.java:205)\n    at java.util.concurrent.atomic.AtomicLongFieldUpdater.newUpdater(AtomicLongFieldUpdater.java:95)\n    at io.ktor.utils.io.pool.DefaultPool.<clinit>(DefaultPool.kt:97)\n    at com.oracle.svm.core.hub.ClassInitializationInfo.invokeClassInitializer(ClassInitializationInfo.java:350)\n    at com.oracle.svm.core.hub.ClassInitializationInfo.initialize(ClassInitializationInfo.java:270)\n    ... 39 more\nCaused by: java.lang.NoSuchFieldException: top\n    at java.lang.Class.getDeclaredField(DynamicHub.java:2411)\n    at java.util.concurrent.atomic.AtomicLongFieldUpdater$CASUpdater.<init>(AtomicLongFieldUpdater.java:202)\n    ... 43 more\n")),(0,i.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848-3"},"\u89e3\u51b3\u65b9\u6848"),(0,i.kt)("p",null,"classpath\u4e0b\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"META-INF/native-image/reflect-config.json"),"\u6587\u4ef6\u589e\u52a0\u5982\u4e0b\u5185\u5bb9\u7528\u4e8e\u914d\u7f6e\u53cd\u5c04\u63d0\u793a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "name": "io.ktor.utils.io.pool.DefaultPool",\n        "fields": [\n            {\n                "name": "top",\n                "allowUnsafeAccess": true\n            }\n        ]\n    }\n]\n')),(0,i.kt)("h3",{id:"\u53c2\u8003-3"},"\u53c2\u8003"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/rsocket/rsocket-kotlin/issues/77"},"GraalVM native-image support broken due to Payload #77"))),(0,i.kt)("h2",{id:"\u4e3a\u9700\u8981\u5e8f\u5217\u5316\u7684\u5bf9\u8c61\u914d\u7f6e\u53cd\u5c04\u63d0\u793a"},"\u4e3a\u9700\u8981\u5e8f\u5217\u5316\u7684\u5bf9\u8c61\u914d\u7f6e\u53cd\u5c04\u63d0\u793a"),(0,i.kt)("p",null,"\u4e3a\u4e86\u80fd\u591f\u8ba9\u53c2\u4e0e\u5e8f\u5217\u5316\u7684\u5bf9\u8c61\u80fd\u591f\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"native"),"\u73af\u5883\u4e0b\u6b63\u5e38\u8fd0\u884c, \u9700\u8981\u914d\u7f6e\u53cd\u5c04\u63d0\u793a."),(0,i.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848-4"},"\u89e3\u51b3\u65b9\u6848"),(0,i.kt)("p",null,"\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"springframework"),"\u4e2d\u7684\u7c7b\u63d0\u4f9b\u53cd\u5c04\u63d0\u793a, \u53c2\u8003\u4ee3\u7801\u5982\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class ReflectiveProcessorImpl : ReflectiveProcessor {\n\n    override fun registerReflectionHints(hints: ReflectionHints, element: AnnotatedElement) {\n        val function = BindingReflectionHintsRegistrar()::registerReflectionHints.partially1(hints)\n        function(\n            arrayOf(\n                Page::class.java,\n                ResponseResult::class.java,\n                SignInRequest::class.java,\n                SignInResponse::class.java\n            )\n        )\n    }\n\n}\n\nclass RuntimeHintsImpl : RuntimeHintsRegistrar {\n\n    override fun registerHints(hints: RuntimeHints, classLoader: ClassLoader?) {\n        // Caused by: com.fasterxml.jackson.databind.exc.InvalidDefinitionException: Cannot construct instance of `java.util.HashSet` (no Creators, like default constructor, exist): no default no-arguments constructor found\n        // at [Source: (InputStreamReader); line: 1, column: 20] (through reference chain: com.fastonetech.lib.web.ResponseResult["data"]->com.fastonetech.billing.sync.infra.client.Page["content"])\n        hints.reflection().registerConstructor(\n            ReflectionUtils.accessibleConstructor(java.util.HashSet::class.java),\n            ExecutableMode.INVOKE\n        )\n    }\n\n}\n\n@Reflective(ReflectiveProcessorImpl::class)\n@ImportRuntimeHints(RuntimeHintsImpl::class)\nclass BillingSyncApplication\n')),(0,i.kt)("h3",{id:"\u53c2\u8003-4"},"\u53c2\u8003"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api//org/springframework/aot/hint/annotation/Reflective.html"},"Annotation Interface Reflective")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api//org/springframework/context/annotation/ImportRuntimeHints.html"},"Annotation Interface ImportRuntimeHints"))),(0,i.kt)("h2",{id:"\u6784\u5efa\u51fa\u7684\u955c\u50cf\u4e0d\u662fnative"},"\u6784\u5efa\u51fa\u7684\u955c\u50cf\u4e0d\u662f",(0,i.kt)("inlineCode",{parentName:"h2"},"native")),(0,i.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f\u914d\u7f6e\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"bootBuildImage"),"\u8fd9\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"task"),"\u4e2d\u8986\u76d6\u4e86\u73af\u5883\u53d8\u91cf, \u5bfc\u81f4",(0,i.kt)("inlineCode",{parentName:"p"},"BP_NATIVE_IMAGE"),"\u4e3a\u7a7a"),(0,i.kt)("h3",{id:"\u539f\u59cb\u914d\u7f6e"},"\u539f\u59cb\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'mapOf("SERVICE_BINDING_ROOT" to "/bindings").plus(\n    when (labels) {\n        null -> emptyMap()\n        else -> mapOf("BP_IMAGE_LABELS" to labels)\n    }\n).let {\n    environment.set(it) // ensure BP_NATIVE_IMAGE exists, and it\'s value is true\n}\n')),(0,i.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848-5"},"\u89e3\u51b3\u65b9\u6848"),(0,i.kt)("p",null,"\u7531\u4e8eenvironment.set\u4f1a\u8986\u76d6\u539f\u6709\u7684\u73af\u5883\u53d8\u91cf, \u6240\u4ee5\u9700\u8981\u663e\u5f0f\u58f0\u660e",(0,i.kt)("inlineCode",{parentName:"p"},"BP_NATIVE_IMAGE")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'mapOf("SERVICE_BINDING_ROOT" to "/bindings", "BP_NATIVE_IMAGE" to "true").plus(\n    when (labels) {\n        null -> emptyMap()\n        else -> mapOf("BP_IMAGE_LABELS" to labels)\n    }\n).let {\n    environment.set(it) // ensure BP_NATIVE_IMAGE exists, and it\'s value is true\n}\n')),(0,i.kt)("h3",{id:"\u53c2\u8003-5"},"\u53c2\u8003"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/htmlsingle/"},"5.3. Image Customizations\u4e0b\u7684environment\u9ed8\u8ba4\u503c\u4ecb\u7ecd"))),(0,i.kt)("h2",{id:"aot\u5e94\u7528\u8fd0\u884c\u65f6\u8c03\u7528\u7531configurationproperty\u6ce8\u89e3\u6ce8\u91ca\u7684\u5bf9\u8c61\u7684\u5c5e\u6027\u65f6\u62a5\u9519"},(0,i.kt)("inlineCode",{parentName:"h2"},"aot"),"\u5e94\u7528\u8fd0\u884c\u65f6\u8c03\u7528\u7531",(0,i.kt)("inlineCode",{parentName:"h2"},"@ConfigurationProperty"),"\u6ce8\u89e3\u6ce8\u91ca\u7684\u5bf9\u8c61\u7684\u5c5e\u6027\u65f6\u62a5\u9519"),(0,i.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848-6"},"\u89e3\u51b3\u65b9\u6848"),(0,i.kt)("p",null,"\u5bf9\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigurationProperties"),"\u4e2d\u5d4c\u5957\u7684\u5bf9\u8c61\u52a0\u5165",(0,i.kt)("inlineCode",{parentName:"p"},"@NestedConfigurationProperty"),"\u6ce8\u89e3\u8fdb\u884c\u6807\u8bc6"),(0,i.kt)("h3",{id:"\u53c2\u8003-6"},"\u53c2\u8003"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/native-image.html#native-image.advanced.nested-configuration-properties"},"Nested Configuration Properties"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Reflection hints are automatically created for configuration properties by the Spring ahead-of-time engine.\nNested configuration properties which are not inner classes, however, must be annotated with\n@NestedConfigurationProperty, otherwise they won\u2019t be detected and will not be bindable.")),(0,i.kt)("h2",{id:"aot\u5e94\u7528\u8fd0\u884c\u65f6\u83b7\u53d6classpath\u4e0b\u7684\u8d44\u6e90\u65f6\u62a5\u9519"},(0,i.kt)("inlineCode",{parentName:"h2"},"aot"),"\u5e94\u7528\u8fd0\u884c\u65f6\u83b7\u53d6",(0,i.kt)("inlineCode",{parentName:"h2"},"classpath"),"\u4e0b\u7684\u8d44\u6e90\u65f6\u62a5\u9519"),(0,i.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848-7"},"\u89e3\u51b3\u65b9\u6848"),(0,i.kt)("p",null,"\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"RuntimeHintsRegistrar"),"\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"registerHints"),"\u65b9\u6cd5\u4e2d\u6ce8\u518c\u9759\u6001\u8d44\u6e90"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'hints.resources().registerResource(ClassPathResource("ca.crt"))\nhints.resources().registerResource(ClassPathResource("client.crt"))\nhints.resources().registerResource(ClassPathResource("client.key"))\n')),(0,i.kt)("h2",{id:"aot\u5e94\u7528\u8fd0\u884c\u65f6conditional\u6ce8\u89e3\u4e0d\u751f\u6548"},(0,i.kt)("inlineCode",{parentName:"h2"},"aot"),"\u5e94\u7528\u8fd0\u884c\u65f6",(0,i.kt)("inlineCode",{parentName:"h2"},"@Conditional"),"\u6ce8\u89e3\u4e0d\u751f\u6548"),(0,i.kt)("p",null,"spring-boot-native not supported @ConditionalOnProperty yet"),(0,i.kt)("h3",{id:"\u53c2\u8003-7"},"\u53c2\u8003"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/spring-projects-experimental/spring-native/issues/1613"},"Possibility of @ConditionalOnProperty support on spring-native"))),(0,i.kt)("h3",{id:"\u53c2\u8003-8"},"\u53c2\u8003"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html#application-properties.server.server.error.include-message"},"server.error.include-message")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.baeldung.com/exception-handling-for-rest-with-spring"},"Error Handling for REST with Spring"))))}u.isMDXComponent=!0}}]);