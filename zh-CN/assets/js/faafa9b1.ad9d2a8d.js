"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[8183],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),g=a,f=m["".concat(p,".").concat(g)]||m[g]||s[g]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5375:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={authors:["xiangcheng.kuo"],tags:["naming"]},l="\u5e38\u89c1\u7684\u547d\u540d\u524d\u7f00",i={permalink:"/zh-CN/blog/2023/02/23/naming-pattern-prefix",source:"@site/blog/2023-02-23/naming-pattern-prefix.md",title:"\u5e38\u89c1\u7684\u547d\u540d\u524d\u7f00",description:"\u5728\u7f16\u7a0b\u4e2d, \u547d\u540d\u662f\u4e00\u4ef6\u975e\u5e38\u91cd\u8981\u7684\u4e8b\u60c5, \u597d\u7684\u547d\u540d\u80fd\u591f\u8ba9\u4ee3\u7801\u66f4\u52a0\u6613\u8bfb, \u4e5f\u80fd\u591f\u8ba9\u4ee3\u7801\u66f4\u52a0\u6613\u4e8e\u7ef4\u62a4.",date:"2023-02-23T00:00:00.000Z",formattedDate:"2023\u5e742\u670823\u65e5",tags:[{label:"naming",permalink:"/zh-CN/blog/tags/naming"}],readingTime:8.93,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["naming"]},prevItem:{title:"\u542f\u7528SSH\u5bc6\u7801\u9a8c\u8bc1",permalink:"/zh-CN/blog/2023/02/24/enable-sshd-password-authentication"},nextItem:{title:"springdoc-v2\u4e2d\u5728\u4e0d\u914d\u7f6e@ParameterObject\u7684\u60c5\u51b5\u4e0b\u5b9e\u73b0Pageable\u4ee5\u53caSort\u5bf9\u8c61\u5230API\u53c2\u6570\u7684\u8f6c\u6362",permalink:"/zh-CN/blog/2023/02/22/springdoc-v2-parameter-object"}},p={authorsImageUrls:[void 0]},c=[],u={toc:c},m="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u7f16\u7a0b\u4e2d, \u547d\u540d\u662f\u4e00\u4ef6\u975e\u5e38\u91cd\u8981\u7684\u4e8b\u60c5, \u597d\u7684\u547d\u540d\u80fd\u591f\u8ba9\u4ee3\u7801\u66f4\u52a0\u6613\u8bfb, \u4e5f\u80fd\u591f\u8ba9\u4ee3\u7801\u66f4\u52a0\u6613\u4e8e\u7ef4\u62a4.",(0,a.kt)("br",null),"\n\u901a\u5e38\u6211\u4eec\u5728\u9605\u8bfb\u7b2c\u4e09\u65b9\u5e93\u7684\u4ee3\u7801\u65f6, \u4f1a\u53d1\u73b0\u5f88\u591a\u65b9\u6cd5\u7684\u547d\u540d\u90fd\u662f\u4ee5\u4e00\u4e9b\u56fa\u5b9a\u7684\u547d\u540d\u524d\u7f00\u5f00\u5934\u7684.",(0,a.kt)("br",null),"\n\u672c\u6587\u4e3b\u8981\u603b\u7ed3\u76ee\u524d\u6211\u6240\u4e86\u89e3\u7684\u4e00\u4e9b\u5e38\u89c1\u7684\u547d\u540d\u524d\u7f00\u7684\u542b\u4e49. \u5e76\u5bf9\u5176\u8fdb\u884c\u5206\u7c7b, \u5927\u81f4\u7684\u5206\u7c7b\u4e3b\u8981\u5982\u4e0b.",(0,a.kt)("br",null)),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\u7684\u521b\u5efa"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\u7684\u5c5e\u6027\u548c\u72b6\u6001"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\u7684\u5143\u7d20\u64cd\u4f5c"),(0,a.kt)("li",{parentName:"ul"},"\u5176\u4ed6")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u6bcf\u79cd\u547d\u540d\u89c4\u5219, \u6211\u90fd\u4f1a\u7ed9\u51fa\u81ea\u5b9a\u4e49\u7684\u4f8b\u5b50, \u540c\u65f6\u4e5f\u4f1a\u9644\u5e26\u7b2c\u4e09\u65b9\u5e93\u4e2d\u7684\u73b0\u6709\u6848\u4f8b\u4ee5\u4fbf\u4e8e\u66f4\u597d\u7684\u7406\u89e3.",(0,a.kt)("br",null),"\n\u4ee3\u7801\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"kotlin"),"\u5b9e\u73b0, \u4f46\u662f\u5927\u90e8\u5206\u7684\u547d\u540d\u89c4\u5219\u90fd\u662f\u901a\u7528\u7684, \u4e5f\u9002\u7528\u4e8e\u5176\u4ed6\u7684\u8bed\u8a00.",(0,a.kt)("br",null)))}s.isMDXComponent=!0}}]);