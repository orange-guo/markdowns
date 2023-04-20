"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[5568],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,g=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={authors:["xiangcheng.kuo"],tags:["testcontainers","docker"]},i="\u5728TestContainers\u4e2d\u5b9e\u73b0\u914d\u7f6e\u7684\u5bb9\u5668hostname\u4ee5\u89e3\u51b3\u5bb9\u5668\u4e4b\u95f4\u8bbf\u95ee\u95ee\u9898",l={permalink:"/blog/2023/02/15/testcontainers-hostname",source:"@site/blog/2023-02-15/testcontainers-hostname.md",title:"\u5728TestContainers\u4e2d\u5b9e\u73b0\u914d\u7f6e\u7684\u5bb9\u5668hostname\u4ee5\u89e3\u51b3\u5bb9\u5668\u4e4b\u95f4\u8bbf\u95ee\u95ee\u9898",description:"\u5728\u4f7f\u7528TestContainers\u542f\u52a8\u5bb9\u5668\u65f6, \u53ef\u80fd\u4f1a\u5b58\u5728\u5bb9\u5668\u4e4b\u95f4\u4f9d\u8d56\u7684\u60c5\u51b5.",date:"2023-02-15T00:00:00.000Z",formattedDate:"February 15, 2023",tags:[{label:"testcontainers",permalink:"/blog/tags/testcontainers"},{label:"docker",permalink:"/blog/tags/docker"}],readingTime:1.265,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["testcontainers","docker"]},prevItem:{title:"\u5728linux\u4e2d\u901a\u8fc7\u542f\u7528swapfile\u6765\u589e\u52a0\u865a\u62df\u5185\u5b58\u5e76\u63d0\u9ad8\u6027\u80fd",permalink:"/blog/2023/02/16/linux-swapfile"},nextItem:{title:"\u8df3\u8fc7SSH\u8fde\u63a5\u65f6\u7684\u786e\u8ba4\u63d0\u793a",permalink:"/blog/2023/02/14/ssh-prompt"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"TestContainers"),"\u542f\u52a8\u5bb9\u5668\u65f6, \u53ef\u80fd\u4f1a\u5b58\u5728\u5bb9\u5668\u4e4b\u95f4\u4f9d\u8d56\u7684\u60c5\u51b5.",(0,o.kt)("br",null),"\n\u5982\u679c\u5176\u4e2d\u4e00\u4e2a\u5bb9\u5668\u4f9d\u8d56\u4e8e\u53e6\u5916\u4e00\u4e2a\u5bb9\u5668, \u90a3\u4e48\u9700\u8981\u5728\u542f\u52a8\u88ab\u4f9d\u8d56\u7684\u5bb9\u5668\u65f6, \u6307\u5b9a",(0,o.kt)("inlineCode",{parentName:"p"},"hostname"),".",(0,o.kt)("br",null),"\n\u8fd9\u6837\u6709\u4f9d\u8d56\u9700\u6c42\u7684\u5bb9\u5668\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"hostname"),"\u6765\u8bbf\u95ee\u88ab\u4f9d\u8d56\u7684\u5bb9\u5668.",(0,o.kt)("br",null),"\n\u4ee5\u4fbf\u4e8e\u88ab\u4f9d\u8d56\u7684\u5bb9\u5668\u80fd\u591f\u6b63\u786e\u7684\u89e3\u6790\u4f9d\u8d56\u5bb9\u5668\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"hostname"),".\n\u4e0b\u9762\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"TestContainers"),"\u4e2d\u5b9e\u73b0\u914d\u7f6e\u7684\u5bb9\u5668",(0,o.kt)("inlineCode",{parentName:"p"},"hostname"),"\u4ee5\u89e3\u51b3\u5bb9\u5668\u4e4b\u95f4\u8bbf\u95ee\u95ee\u9898."))}m.isMDXComponent=!0}}]);