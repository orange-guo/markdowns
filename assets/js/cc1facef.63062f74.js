"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[5178],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(i,".").concat(m)]||u[m]||g[m]||o;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:a,c[1]=p;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96624:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={authors:["xiangcheng.kuo"],tags:["evans","grpc"]},c="\u901a\u8fc7\u4f7f\u7528evans\u6765\u66f4\u52a0\u4fbf\u6377\u5730\u8c03\u8bd5grpc\u670d\u52a1",p={permalink:"/blog/2023/03/25/evans",source:"@site/blog/2023-03-25/evans.md",title:"\u901a\u8fc7\u4f7f\u7528evans\u6765\u66f4\u52a0\u4fbf\u6377\u5730\u8c03\u8bd5grpc\u670d\u52a1",description:"\u6709\u7684\u65f6\u5019\u9700\u8981\u8c03\u8bd5grpc\u670d\u52a1, \u4f46\u662f\u901a\u8fc7\u4ee3\u7801\u6765\u8fdb\u884c\u8c03\u8bd5\u6bd4\u8f83\u9ebb\u70e6, \u56e0\u4e3a\u9700\u8981\u7f16\u5199\u76f8\u5173\u4ee3\u7801, \u8fd9\u4e2a\u65f6\u5019\u9700\u8981\u4e00\u4e2a\u5de5\u5177\u6765\u5e2e\u52a9\u6211\u4eec\u8fdb\u884c\u8c03\u8bd5,",date:"2023-03-25T00:00:00.000Z",formattedDate:"March 25, 2023",tags:[{label:"evans",permalink:"/blog/tags/evans"},{label:"grpc",permalink:"/blog/tags/grpc"}],readingTime:4.49,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["evans","grpc"]},prevItem:{title:"grpc\u670d\u52a1tls\u8fde\u63a5\u63e1\u624b\u5931\u8d25\u95ee\u9898\u6392\u67e5",permalink:"/blog/2023/03/27/grpc-tls-handshake-failed"},nextItem:{title:"transport endpoint is not connected\u95ee\u9898\u89e3\u51b3",permalink:"/blog/2023/03/23/transport-endpoint-is-not-connected"}},i={authorsImageUrls:[void 0]},l=[],s={toc:l},u="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6709\u7684\u65f6\u5019\u9700\u8981\u8c03\u8bd5",(0,a.kt)("inlineCode",{parentName:"p"},"grpc"),"\u670d\u52a1, \u4f46\u662f\u901a\u8fc7\u4ee3\u7801\u6765\u8fdb\u884c\u8c03\u8bd5\u6bd4\u8f83\u9ebb\u70e6, \u56e0\u4e3a\u9700\u8981\u7f16\u5199\u76f8\u5173\u4ee3\u7801, \u8fd9\u4e2a\u65f6\u5019\u9700\u8981\u4e00\u4e2a\u5de5\u5177\u6765\u5e2e\u52a9\u6211\u4eec\u8fdb\u884c\u8c03\u8bd5,\n\u8fd9\u91cc\u4ecb\u7ecd\u4e00\u4e2a\u5de5\u5177",(0,a.kt)("inlineCode",{parentName:"p"},"evans"),"."))}g.isMDXComponent=!0}}]);