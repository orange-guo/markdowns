"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[9748],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>s});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=n.createContext({}),m=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=m(e.components);return n.createElement(i.Provider,{value:a},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=m(t),c=l,s=d["".concat(i,".").concat(c)]||d[c]||k[c]||r;return t?n.createElement(s,o(o({ref:a},u),{},{components:t})):n.createElement(s,o({ref:a},u))}));function s(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=c;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p[d]="string"==typeof e?e:l,o[1]=p;for(var m=2;m<r;m++)o[m]=t[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},45306:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var n=t(87462),l=(t(67294),t(3905));const r={authors:["xiangcheng.kuo"],tags:["java","openjdk"]},o="JDK\u6539\u8fdb\u9879\u76ee\u7684\u4ecb\u7ecd",p={permalink:"/zh-CN/blog/2023/02/09/openjdk-project",source:"@site/blog/2023-02-09/openjdk-project.md",title:"JDK\u6539\u8fdb\u9879\u76ee\u7684\u4ecb\u7ecd",description:"\u4ee5\u4e0b\u5217\u8868\u662f\u622a\u81f3\u5230\u76ee\u524dOpen JDK\u4e2d\u90e8\u5206\u8fdb\u884c\u7684\u5bf9JDK\u7684\u6539\u8fdb\u9879\u76ee",date:"2023-02-09T00:00:00.000Z",formattedDate:"2023\u5e742\u67089\u65e5",tags:[{label:"java",permalink:"/zh-CN/blog/tags/java"},{label:"openjdk",permalink:"/zh-CN/blog/tags/openjdk"}],readingTime:1.79,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["java","openjdk"]},prevItem:{title:"\u4f7f\u7528pyenv\u5b9e\u73b0python\u591a\u7248\u672c\u7ba1\u7406",permalink:"/zh-CN/blog/2023/02/10/pyenv"},nextItem:{title:"\u5728TestContainers\u4e2d\u5b9e\u73b0Docker registry\u8ba4\u8bc1",permalink:"/zh-CN/blog/2023/02/08/testcontainers-docker-registry"}},i={authorsImageUrls:[void 0]},m=[{value:"Amber",id:"amber",level:2},{value:"Galahad",id:"galahad",level:2},{value:"Leyden",id:"leyden",level:2},{value:"Lilliput",id:"lilliput",level:2},{value:"Loom",id:"loom",level:2},{value:"Panama",id:"panama",level:2},{value:"Valhalla",id:"valhalla",level:2}],u={toc:m},d="wrapper";function k(e){let{components:a,...t}=e;return(0,l.kt)(d,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4ee5\u4e0b\u5217\u8868\u662f\u622a\u81f3\u5230\u76ee\u524d",(0,l.kt)("inlineCode",{parentName:"p"},"Open JDK"),"\u4e2d\u90e8\u5206\u8fdb\u884c\u7684\u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"JDK"),"\u7684\u6539\u8fdb\u9879\u76ee"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Amber"),(0,l.kt)("li",{parentName:"ul"},"Galahad"),(0,l.kt)("li",{parentName:"ul"},"Leyden"),(0,l.kt)("li",{parentName:"ul"},"Lilliput"),(0,l.kt)("li",{parentName:"ul"},"Loom"),(0,l.kt)("li",{parentName:"ul"},"Panama"),(0,l.kt)("li",{parentName:"ul"},"Valhalla")),(0,l.kt)("p",null,"\u8fd9\u4e9b\u6539\u8fdb\u9879\u76ee\u7684\u4e3b\u8981\u76ee\u7684\u662f\u4e3a\u4e86\u6539\u8fdb",(0,l.kt)("inlineCode",{parentName:"p"},"Java"),"\u7684\u6027\u80fd\u548c\u5f00\u53d1\u4f53\u9a8c.\n\u4ece\u800c\u4f7f",(0,l.kt)("inlineCode",{parentName:"p"},"Java"),"\u80fd\u591f\u66f4\u597d\u5730\u9002\u5e94\u76ee\u524d\u7684\u8f6f\u4ef6\u5f00\u53d1\u9700\u6c42.",(0,l.kt)("br",null),"\n\u4ee5\u4e0b\u662f\u8fd9\u4e9b\u9879\u76ee\u7684\u7b80\u5355\u4ecb\u7ecd."),(0,l.kt)("h2",{id:"amber"},"Amber"),(0,l.kt)("p",null,"\u8be5\u9879\u76ee\u7684\u76ee\u6807\u662f\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"Java"),"\u4e2d\u5f15\u5165\u65b0\u7684\u8bed\u6cd5\u6765\u6539\u8fdb",(0,l.kt)("inlineCode",{parentName:"p"},"Java"),"\u7684\u5f00\u53d1\u4f53\u9a8c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://openjdk.org/projects/amber/"},"Project Amber"))),(0,l.kt)("h2",{id:"galahad"},"Galahad"),(0,l.kt)("p",null,"\u8be5\u9879\u76ee\u7684\u76ee\u6807\u662f\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"GraalVM"),"\u4e2d\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"Java"),"\u7f16\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"JIT"),"\u7f16\u8bd1\u5668\u66ff\u6362\u6389",(0,l.kt)("inlineCode",{parentName:"p"},"OpenJDK"),"\u4e2d\u73b0\u6709\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"HotSpot"),"\u4e2d\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"C++"),"\u5b9e\u73b0\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"JIT"),"\u7f16\u8bd1\u5668."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://medium.com/graalvm/graalvm-galahad-and-a-new-release-schedule-d081d1031bba"},"GraalVM, Galahad, and a New Release Schedule"))),(0,l.kt)("h2",{id:"leyden"},"Leyden"),(0,l.kt)("p",null,"\u8be5\u9879\u76ee\u7684\u76ee\u6807\u662f\u6539\u8fdb",(0,l.kt)("inlineCode",{parentName:"p"},"Java"),"\u7a0b\u5e8f\u7684\u542f\u52a8\u65f6\u95f4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://openjdk.org/projects/leyden/"},"Project Leyden"))),(0,l.kt)("h2",{id:"lilliput"},"Lilliput"),(0,l.kt)("p",null,"\u8be5\u9879\u76ee\u7684\u76ee\u6807\u662f\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"Java"),"\u4e2d\u5bf9\u8c61\u7684\u5934\u90e8\u4fe1\u606f\u4ece",(0,l.kt)("inlineCode",{parentName:"p"},"128"),"\u4f4d\u538b\u7f29\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"64"),"\u4f4d\u6216\u66f4\u4f4e, \u4ece\u800c\u6539\u5584",(0,l.kt)("inlineCode",{parentName:"p"},"Java"),"\u7a0b\u5e8f\u7684\u5185\u5b58\u5360\u7528"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://openjdk.org/projects/lilliput/"},"Lilliput"))),(0,l.kt)("h2",{id:"loom"},"Loom"),(0,l.kt)("p",null,"\u8be5\u9879\u76ee\u7684\u76ee\u6807\u662f\u5728Java\u4e2d\u5f15\u5165\u534f\u7a0b(",(0,l.kt)("inlineCode",{parentName:"p"},"coroutine"),")\u4ee5\u6539\u8fdbJava\u7684\u5e76\u53d1\u6027\u80fd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://openjdk.org/projects/loom/"},"Loom - Fibers, Continuations and Tail-Calls for the JVM"))),(0,l.kt)("h2",{id:"panama"},"Panama"),(0,l.kt)("p",null,"\u8be5\u9879\u76ee\u7684\u76ee\u6807\u662f\u63d0\u4f9b\u66f4\u597d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Java"),"\u4e0e\u7b2c\u4e09\u65b9\u4ee3\u7801\u7684\u4e92\u64cd\u4f5c\u6027, \u4f7f",(0,l.kt)("inlineCode",{parentName:"p"},"Java"),"\u4e0e\u975e",(0,l.kt)("inlineCode",{parentName:"p"},"Java"),"\u7f16\u5199\u7684\u4ee3\u7801\u80fd\u591f\u66f4\u597d\u5730\u4ea4\u4e92"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://openjdk.org/projects/panama/"},"Project Panama: Interconnecting JVM and native code"))),(0,l.kt)("h2",{id:"valhalla"},"Valhalla"),(0,l.kt)("p",null,"\u8be5\u9879\u76ee\u7684\u76ee\u6807\u662f\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"Java"),"\u4e2d\u589e\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"Value Type"),"\u7684\u529f\u80fd\u4ee5\u63d0\u9ad8",(0,l.kt)("inlineCode",{parentName:"p"},"Java"),"\u7a0b\u5e8f\u7684\u6027\u80fd\u548c\u5185\u5b58\u6548\u7387"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://openjdk.org/projects/valhalla/"},"Project Valhalla"))))}k.isMDXComponent=!0}}]);