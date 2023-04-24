"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[3349],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||g[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98887:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={authors:["xiangcheng.kuo"],tags:["aws","s3"]},i="\u4f7f\u7528S3\u6258\u7ba1\u9759\u6001\u7f51\u7ad9",l={permalink:"/zh-CN/blog/2023/04/16/hosting-a-static-website-using-s3",source:"@site/blog/2023-04-16/hosting-a-static-website-using-s3.md",title:"\u4f7f\u7528S3\u6258\u7ba1\u9759\u6001\u7f51\u7ad9",description:"\u9759\u6001\u7f51\u7ad9\u662f\u6307\u4e0d\u9700\u8981\u540e\u7aef\u670d\u52a1\u7684\u7f51\u7ad9, \u6bd4\u5982\u4e2a\u4eba\u535a\u5ba2, \u4e2a\u4eba\u7b80\u5386, \u4e2a\u4eba\u4f5c\u54c1\u96c6\u7b49.",date:"2023-04-16T00:00:00.000Z",formattedDate:"2023\u5e744\u670816\u65e5",tags:[{label:"aws",permalink:"/zh-CN/blog/tags/aws"},{label:"s3",permalink:"/zh-CN/blog/tags/s-3"}],readingTime:2.105,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["aws","s3"]},prevItem:{title:"\u4f7f\u7528kind\u521b\u5efa\u4e00\u4e2ak8s\u96c6\u7fa4",permalink:"/zh-CN/blog/2023/04/23/kind-helloworld"},nextItem:{title:"\u4f7f\u7528Gradle\u7684JavaPackager\u63d2\u4ef6\u5c06Java\u5e94\u7528\u6253\u5305\u6210\u4e8c\u8fdb\u5236\u6587\u4ef6",permalink:"/zh-CN/blog/2023/04/15/use-gradle-plugin-java-packager-to-build-binary-java-app"}},c={authorsImageUrls:[void 0]},s=[],p={toc:s},u="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u9759\u6001\u7f51\u7ad9\u662f\u6307\u4e0d\u9700\u8981\u540e\u7aef\u670d\u52a1\u7684\u7f51\u7ad9, \u6bd4\u5982\u4e2a\u4eba\u535a\u5ba2, \u4e2a\u4eba\u7b80\u5386, \u4e2a\u4eba\u4f5c\u54c1\u96c6\u7b49. ",(0,a.kt)("br",null),"\n\u8fd9\u4e9b\u7f51\u7ad9\u7684\u5185\u5bb9\u90fd\u662f\u9759\u6001\u7684, \u4e0d\u9700\u8981\u540e\u7aef\u670d\u52a1, \u53ea\u9700\u8981\u5c06\u9759\u6001\u6587\u4ef6\u6258\u7ba1\u5230\u4e00\u4e2a\u670d\u52a1\u5668\u4e0a\u5373\u53ef.",(0,a.kt)("br",null),"\n\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528AWS S3\u6258\u7ba1\u9759\u6001\u7f51\u7ad9."))}g.isMDXComponent=!0}}]);