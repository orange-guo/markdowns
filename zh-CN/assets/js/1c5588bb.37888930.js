"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[3978],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),g=o,f=u["".concat(p,".").concat(g)]||u[g]||m[g]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2195:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={authors:["xiangcheng.kuo"],tags:["problem-solving","ssh","ldap"]},l="SSH\u547d\u4ee4\u65e0\u6cd5\u521b\u5efa\u8fdc\u7a0b\u8fde\u63a5",i={permalink:"/zh-CN/blog/2023/03/09/ssh-execution-timeout",source:"@site/blog/2023-03-09/ssh-execution-timeout.md",title:"SSH\u547d\u4ee4\u65e0\u6cd5\u521b\u5efa\u8fdc\u7a0b\u8fde\u63a5",description:"\u4eca\u5929\u7ebf\u4e0a\u51fa\u73b0\u4e86\u4e00\u4e2a\u95ee\u9898, \u6b64\u95ee\u9898\u7684\u73b0\u8c61\u662f\u7528\u6237\u5728\u9875\u9762\u4e0a\u70b9\u51fb\u521b\u5efaVNC\u8fdc\u7a0b\u94fe\u63a5\u4f1a\u7b49\u5f85\u5f88\u4e45\u4e14\u54cd\u5e94\u5931\u8d25",date:"2023-03-09T00:00:00.000Z",formattedDate:"2023\u5e743\u67089\u65e5",tags:[{label:"problem-solving",permalink:"/zh-CN/blog/tags/problem-solving"},{label:"ssh",permalink:"/zh-CN/blog/tags/ssh"},{label:"ldap",permalink:"/zh-CN/blog/tags/ldap"}],readingTime:5.965,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","ssh","ldap"]},prevItem:{title:"\u4f7f\u7528IntelliJ IDEA\u4e2d\u7684java-decompiler\u63d2\u4ef6\u5c06jar\u5305\u53cd\u7f16\u8bd1\u4e3ajava\u6e90\u7801",permalink:"/zh-CN/blog/2023/03/13/intellij-idea-java-decompiler"},nextItem:{title:"\u4f7f\u7528spring\u6784\u5efanative\u9047\u5230\u7684\u95ee\u9898",permalink:"/zh-CN/blog/2023/03/06/problem-build-native-springboot-application"}},p={authorsImageUrls:[void 0]},c=[],s={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4eca\u5929\u7ebf\u4e0a\u51fa\u73b0\u4e86\u4e00\u4e2a\u95ee\u9898, \u6b64\u95ee\u9898\u7684\u73b0\u8c61\u662f\u7528\u6237\u5728\u9875\u9762\u4e0a\u70b9\u51fb\u521b\u5efa",(0,o.kt)("inlineCode",{parentName:"p"},"VNC"),"\u8fdc\u7a0b\u94fe\u63a5\u4f1a\u7b49\u5f85\u5f88\u4e45\u4e14\u54cd\u5e94\u5931\u8d25",(0,o.kt)("br",null)))}m.isMDXComponent=!0}}]);