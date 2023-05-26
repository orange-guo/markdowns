"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[635],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||g[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19089:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={authors:["xiangcheng.kuo"],tags:["spring-boot","spring-data-jpa","hibernate","performance"]},i="\u57fa\u4e8ehibernate\u7684spring-data-jpa\u7684\u5e76\u53d1\u6027\u80fd\u4f18\u5316\u914d\u7f6e",p={permalink:"/blog/2023/05/26/performance-optimization-strategies-for-hibernate-in-concurrent-scenarios",source:"@site/blog/2023-05-26/performance-optimization-strategies-for-hibernate-in-concurrent-scenarios.md",title:"\u57fa\u4e8ehibernate\u7684spring-data-jpa\u7684\u5e76\u53d1\u6027\u80fd\u4f18\u5316\u914d\u7f6e",description:"\u6458\u8981",date:"2023-05-26T00:00:00.000Z",formattedDate:"May 26, 2023",tags:[{label:"spring-boot",permalink:"/blog/tags/spring-boot"},{label:"spring-data-jpa",permalink:"/blog/tags/spring-data-jpa"},{label:"hibernate",permalink:"/blog/tags/hibernate"},{label:"performance",permalink:"/blog/tags/performance"}],readingTime:5.87,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["spring-boot","spring-data-jpa","hibernate","performance"]},nextItem:{title:"\u89e3\u51b3\u65e0\u6cd5\u8f93\u5165\u4e2d\u6587\u5b57\u7b26\u5230vscode",permalink:"/blog/2023/05/15/solve-unable-to-input-chinese-character-into-vscode"}},c={authorsImageUrls:[void 0]},l=[{value:"\u6458\u8981",id:"\u6458\u8981",level:2}],s={toc:l},u="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6458\u8981"},"\u6458\u8981"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"spring-data-jpa"),"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"hibernate"),"\u4f5c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"jpa"),"\u7684\u5b9e\u73b0, \u5f53\u5e76\u53d1\u91cf\u8f83\u5927\u65f6, \u7531\u4e8e\u6846\u67b6\u7684\u4e00\u4e9b\u9ed8\u8ba4\u914d\u7f6e\u53ef\u80fd\u4f1a\u5f15\u53d1\u6027\u80fd\u74f6\u9888,\n\u4e0b\u9762\u5c06\u4ecb\u7ecd\u4e00\u4e9b\u5e38\u89c1\u7684\u914d\u7f6e\u9879\u6765\u6539\u5584\u5e76\u53d1\u91cf\u8f83\u5927\u65f6\u7684\u6027\u80fd\u95ee\u9898."))}g.isMDXComponent=!0}}]);