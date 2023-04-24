"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[9452],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),g=o,b=u["".concat(s,".").concat(g)]||u[g]||m[g]||a;return r?n.createElement(b,l(l({ref:t},p),{},{components:r})):n.createElement(b,l({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},32702:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={authors:["xiangcheng.kuo"],tags:["problem-solving","ansible","ssh"]},l="\u901a\u8fc7\u8c03\u7528shell\u6a21\u5757\u6765\u89e3\u51b3\u65e7\u7248\u672cansible\u65e0\u6cd5\u8bbe\u7f6e\u5bc6\u7801\u8fc7\u671f\u65f6\u95f4\u7684\u95ee\u9898",i={permalink:"/blog/2023/02/07/use-chage-command-to-set-password-never-expire",source:"@site/blog/2023-02-07/use-chage-command-to-set-password-never-expire.md",title:"\u901a\u8fc7\u8c03\u7528shell\u6a21\u5757\u6765\u89e3\u51b3\u65e7\u7248\u672cansible\u65e0\u6cd5\u8bbe\u7f6e\u5bc6\u7801\u8fc7\u671f\u65f6\u95f4\u7684\u95ee\u9898",description:"\u6700\u8fd1\u7ebf\u4e0a\u53d1\u73b0\u4e86\u4e00\u4e2a\u95ee\u9898, \u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f\u7531\u4e8e\u7cfb\u7edf\u7528\u6237\u8fc7\u671f\u5bfc\u81f4\u7528\u6237\u65e0\u6cd5\u5728web\u901a\u8fc7SSH/VNC\u8fde\u63a5\u96c6\u7fa4, \u4e0b\u9762\u5c06\u4ecb\u7ecd\u8fd9\u4e2a\u95ee\u9898\u7684\u5177\u4f53\u7ec6\u8282\u4ee5\u53ca\u89e3\u51b3\u65b9\u6848.",date:"2023-02-07T00:00:00.000Z",formattedDate:"February 7, 2023",tags:[{label:"problem-solving",permalink:"/blog/tags/problem-solving"},{label:"ansible",permalink:"/blog/tags/ansible"},{label:"ssh",permalink:"/blog/tags/ssh"}],readingTime:3.105,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","ansible","ssh"]},prevItem:{title:"\u5728TestContainers\u4e2d\u5b9e\u73b0Docker registry\u8ba4\u8bc1",permalink:"/blog/2023/02/08/testcontainers-docker-registry"},nextItem:{title:"\u5f53\u8c03\u5ea6\u670d\u52a1\u63a5\u53e3\u65f6\u62a5\u9519\u63d0\u793acannot execute UPDATE in a read-only transaction\u95ee\u9898\u89e3\u51b3",permalink:"/blog/2023/01/30/fix-cannot-execute-update-in-a-readonly-transaction"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6700\u8fd1\u7ebf\u4e0a\u53d1\u73b0\u4e86\u4e00\u4e2a\u95ee\u9898, \u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f\u7531\u4e8e\u7cfb\u7edf\u7528\u6237\u8fc7\u671f\u5bfc\u81f4\u7528\u6237\u65e0\u6cd5\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"web"),"\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"SSH/VNC"),"\u8fde\u63a5\u96c6\u7fa4, \u4e0b\u9762\u5c06\u4ecb\u7ecd\u8fd9\u4e2a\u95ee\u9898\u7684\u5177\u4f53\u7ec6\u8282\u4ee5\u53ca\u89e3\u51b3\u65b9\u6848."))}m.isMDXComponent=!0}}]);