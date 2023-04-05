"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[65],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(r),m=a,f=s["".concat(c,".").concat(m)]||s[m]||g[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8917:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={authors:["xiangcheng.kuo"],tags:["spring"]},i="\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u6ce8\u5165\u6570\u7ec4\u5230\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e",p={permalink:"/blog/2023/02/21/inject-environment-as-array-into-spring-application",source:"@site/blog/2023-02-21/inject-environment-as-array-into-spring-application.md",title:"\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u6ce8\u5165\u6570\u7ec4\u5230\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e",description:"\u5bb9\u5668\u542f\u52a8\u65f6, \u9700\u8981\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u6ce8\u5165\u914d\u7f6e\u7ed9\u5e94\u7528\u7a0b\u5e8f.",date:"2023-02-21T00:00:00.000Z",formattedDate:"February 21, 2023",tags:[{label:"spring",permalink:"/blog/tags/spring"}],readingTime:.65,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["spring"]},prevItem:{title:"springdoc-v2\u4e2d\u5728\u4e0d\u914d\u7f6e@ParameterObject\u7684\u60c5\u51b5\u4e0b\u5b9e\u73b0Pageable\u4ee5\u53caSort\u5bf9\u8c61\u5230API\u53c2\u6570\u7684\u8f6c\u6362",permalink:"/blog/2023/02/22/springdoc-v2-parameter-object"},nextItem:{title:"\u6e05\u7406\u65e7\u7248\u672c\u7684snap\u5e94\u7528\u4ee5\u91ca\u653e\u7a7a\u95f4",permalink:"/blog/2023/02/20/cleanup-old-version-of-snap-package"}},c={authorsImageUrls:[void 0]},l=[],u={toc:l},s="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5bb9\u5668\u542f\u52a8\u65f6, \u9700\u8981\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u6ce8\u5165\u914d\u7f6e\u7ed9\u5e94\u7528\u7a0b\u5e8f.",(0,a.kt)("br",null),"\n\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"spring.ldap.urls"),"\u6b64\u914d\u7f6e\u4e3a\u4f8b, \u5b83\u662f\u4e00\u4e2a\u6570\u7ec4."))}g.isMDXComponent=!0}}]);