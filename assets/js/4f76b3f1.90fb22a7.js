"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[8829],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||g[m]||a;return r?n.createElement(f,l(l({ref:t},i),{},{components:r})):n.createElement(f,l({ref:t},i))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88422:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(83117),o=(r(67294),r(3905));const a={authors:["xiangcheng.kuo"],tags:["postgresql"]},l="\u5c06postgresql\u4e2d\u6307\u5b9a\u7684database\u5bfc\u51fa\u4e3asql\u6587\u4ef6",p={permalink:"/blog/2023/02/12/postgres-pgdump",source:"@site/blog/2023-02-12/postgres-pgdump.md",title:"\u5c06postgresql\u4e2d\u6307\u5b9a\u7684database\u5bfc\u51fa\u4e3asql\u6587\u4ef6",description:"\u5728\u4f7f\u7528postgresql\u65f6, \u6709\u65f6\u5019\u9700\u8981\u5c06database\u5bfc\u51fa\u4e3asql\u6587\u4ef6, \u4ee5\u4fbf\u4e8e\u5728\u5176\u4ed6\u73af\u5883\u4e2d\u4f7f\u7528.",date:"2023-02-12T00:00:00.000Z",formattedDate:"February 12, 2023",tags:[{label:"postgresql",permalink:"/blog/tags/postgresql"}],readingTime:.38,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["postgresql"]},prevItem:{title:"\u4fee\u6539postgresql\u4e2d\u7684\u6700\u5927\u8fde\u63a5\u6570",permalink:"/blog/2023/02/13/postgres-max-connections"},nextItem:{title:"\u5728Docker\u4e2d\u4f7f\u7528Rclone\u5e76\u5c06\u5bf9\u5e94\u7684fuse\u6302\u8f7d\u5230\u5bbf\u4e3b\u673a",permalink:"/blog/2023/02/11/rclone-fuse"}},s={authorsImageUrls:[void 0]},c=[],i={toc:c},u="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"postgresql"),"\u65f6, \u6709\u65f6\u5019\u9700\u8981\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"database"),"\u5bfc\u51fa\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"sql"),"\u6587\u4ef6, \u4ee5\u4fbf\u4e8e\u5728\u5176\u4ed6\u73af\u5883\u4e2d\u4f7f\u7528."))}g.isMDXComponent=!0}}]);