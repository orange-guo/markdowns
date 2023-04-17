"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[2949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,d=s["".concat(u,".").concat(m)]||s[m]||g[m]||l;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={authors:["xiangcheng.kuo"],tags:["intellij-idea"]},i="IntelliJ IDEA\u4e2d\u5b9e\u73b0\u81ea\u5b9a\u4e49\u6ce8\u89e3\u4e2d\u7684\u8bed\u6cd5\u9ad8\u4eae",o={permalink:"/zh-CN/blog/2023/03/14/intellij-idea-language-injection",source:"@site/blog/2023-03-14/intellij-idea-language-injection.md",title:"IntelliJ IDEA\u4e2d\u5b9e\u73b0\u81ea\u5b9a\u4e49\u6ce8\u89e3\u4e2d\u7684\u8bed\u6cd5\u9ad8\u4eae",description:"\u8fd9\u7bc7\u6587\u7ae0\u662f\u57fa\u4e8eclojure\u8868\u8fbe\u5f0f\u5b9e\u73b0\u66f4\u52a0\u7075\u6d3b\u7684\u6570\u636e\u9a8c\u8bc1\u7684\u540e\u7eed\u4f18\u5316\u7684\u6587\u7ae0.",date:"2023-03-14T00:00:00.000Z",formattedDate:"2023\u5e743\u670814\u65e5",tags:[{label:"intellij-idea",permalink:"/zh-CN/blog/tags/intellij-idea"}],readingTime:1.325,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["intellij-idea"]},prevItem:{title:"\u901a\u8fc7\u589e\u52a0timeout-control\u4ee5\u89e3\u51b3\u5f53tcp\u8fde\u63a5\u4e00\u76f4\u5904\u4e8eSYN_SENT\u72b6\u6001\u5bfc\u81f4java\u4e2d\u7684ldap-client\u7684failover\u4e0d\u5de5\u4f5c\u7684\u95ee\u9898",permalink:"/zh-CN/blog/2023/03/15/ldap-client-failover"},nextItem:{title:"\u4f7f\u7528IntelliJ IDEA\u4e2d\u7684java-decompiler\u63d2\u4ef6\u5c06jar\u5305\u53cd\u7f16\u8bd1\u4e3ajava\u6e90\u7801",permalink:"/zh-CN/blog/2023/03/13/intellij-idea-java-decompiler"}},u={authorsImageUrls:[void 0]},p=[{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u6548\u679c\u5c55\u793a",id:"\u6548\u679c\u5c55\u793a",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],c={toc:p},s="wrapper";function g(e){let{components:t,...l}=e;return(0,r.kt)(s,(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u662f",(0,r.kt)("a",{parentName:"p",href:"/blog/2023/03/02/clojure-validation"},"\u57fa\u4e8e",(0,r.kt)("inlineCode",{parentName:"a"},"clojure"),"\u8868\u8fbe\u5f0f\u5b9e\u73b0\u66f4\u52a0\u7075\u6d3b\u7684\u6570\u636e\u9a8c\u8bc1"),"\u7684\u540e\u7eed\u4f18\u5316\u7684\u6587\u7ae0.",(0,r.kt)("br",null),"\n\u4e3b\u8981\u76ee\u7684\u662f\u4e3a\u4e86\u5b9e\u73b0\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"IntelliJ IDEA"),"\u4e2d\u5b9e\u73b0\u81ea\u5b9a\u4e49\u6ce8\u89e3\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"clojure"),"\u8868\u8fbe\u5f0f\u7684\u8bed\u6cd5\u9ad8\u4eae\u95ee\u9898.",(0,r.kt)("br",null),"\n\u901a\u8fc7\u8bed\u6cd5\u9ad8\u4eae, \u53ef\u4ee5\u66f4\u52a0\u76f4\u89c2\u7684\u770b\u5230\u8868\u8fbe\u5f0f\u7684\u7ed3\u6784, \u4ee5\u53ca\u8868\u8fbe\u5f0f\u4e2d\u7684\u9519\u8bef. \u4ece\u800c\u66f4\u52a0\u4fbf\u6377\u5730\u5b9e\u73b0\u8868\u8fbe\u5f0f\u7684\u7f16\u5199.",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"IntelliJ IDEA"),"\u4e2d\u9700\u8981\u5b89\u88c5\u4ee5\u4e0b\u63d2\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cursive"),"(\u6b64\u63d2\u4ef6\u662f",(0,r.kt)("inlineCode",{parentName:"li"},"clojure"),"\u8bed\u8a00\u7684\u652f\u6301\u63d2\u4ef6, \u5e76\u4e14\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"li"},"clojure"),"\u8868\u8fbe\u5f0f\u7684\u8bed\u6cd5\u9ad8\u4eae.)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IntelliLang"),"(",(0,r.kt)("inlineCode",{parentName:"li"},"Make sure that the IntelliLang plugin is enabled before you start working with language injections."),")")),(0,r.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,r.kt)("p",null,"\u4ee3\u7801\u4e2d\u589e\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"@Language"),"\u6ce8\u89e3, \u5982\u4e0b\u6240\u793a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="ClojureExpressionConstraint.kt"',title:'"ClojureExpressionConstraint.kt"'},'annotation class ClojureExpressionConstraint(\n    val message: String,\n    val groups: Array<KClass<*>> = [],\n    val payload: Array<KClass<out Payload>> = [],\n    @Language("clojure") // to enable syntax highlighting\n    val value: String,\n)\n')),(0,r.kt)("h2",{id:"\u6548\u679c\u5c55\u793a"},"\u6548\u679c\u5c55\u793a"),(0,r.kt)("p",null,"\u5b9e\u73b0\u540e\u7684\u6548\u679c\u5982\u4e0b\u56fe\u6240\u793a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"idea-clojure-syntax-highlighting",src:n(53552).Z,width:"1149",height:"785"})),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230, \u5f53\u9f20\u6807\u60ac\u6d6e\u5230\u8868\u8fbe\u5f0f\u5f15\u7528\u7684\u5730\u65b9\u65f6, \u4f1a\u6709\u76f8\u5e94\u7684\u63d0\u793a\u4fe1\u606f.",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/help/idea/using-language-injections.html"},"Language injections"))))}g.isMDXComponent=!0},53552:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/intellij-idea-language-injection-501c359e9d86ee3ba5eb7fd6045a5490.jpeg"}}]);