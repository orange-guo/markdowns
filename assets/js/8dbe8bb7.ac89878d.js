"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[3454],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},43131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={authors:["xiangcheng.kuo"],tags:["problem-solving","testcontainers","docker","ldap-failover"]},l="TestContainers\u56fa\u5b9a\u5bb9\u5668\u7aef\u53e3",i={permalink:"/blog/2023/03/16/testcontainers-fixed-port",source:"@site/blog/2023-03-16/testcontainers-fixed-port.md",title:"TestContainers\u56fa\u5b9a\u5bb9\u5668\u7aef\u53e3",description:"\u8fd9\u7bc7\u6587\u7ae0\u7684\u5185\u5bb9\u53d1\u751f\u7684\u80cc\u666f\u548c\u6d4b\u8bd5java\u7684ldap\u7684failover\u6709\u5173.",date:"2023-03-16T00:00:00.000Z",formattedDate:"March 16, 2023",tags:[{label:"problem-solving",permalink:"/blog/tags/problem-solving"},{label:"testcontainers",permalink:"/blog/tags/testcontainers"},{label:"docker",permalink:"/blog/tags/docker"},{label:"ldap-failover",permalink:"/blog/tags/ldap-failover"}],readingTime:1.205,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","testcontainers","docker","ldap-failover"]},prevItem:{title:"transport endpoint is not connected\u95ee\u9898\u89e3\u51b3",permalink:"/blog/2023/03/23/transport-endpoint-is-not-connected"},nextItem:{title:"\u901a\u8fc7\u589e\u52a0timeout-control\u4ee5\u89e3\u51b3\u5f53tcp\u8fde\u63a5\u4e00\u76f4\u5904\u4e8eSYN_SENT\u72b6\u6001\u5bfc\u81f4java\u4e2d\u7684ldap-client\u7684failover\u4e0d\u5de5\u4f5c\u7684\u95ee\u9898",permalink:"/blog/2023/03/15/ldap-client-failover"}},p={authorsImageUrls:[void 0]},c=[],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u7684\u5185\u5bb9\u53d1\u751f\u7684\u80cc\u666f\u548c\u6d4b\u8bd5",(0,o.kt)("inlineCode",{parentName:"p"},"java"),"\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"ldap"),"\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"failover"),"\u6709\u5173.",(0,o.kt)("br",null),"\n\u6d4b\u8bd5",(0,o.kt)("inlineCode",{parentName:"p"},"failover"),"\u9700\u8981\u542f\u52a8\u4e24\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"ldap"),"\u7684\u5bb9\u5668\u5e76",(0,o.kt)("inlineCode",{parentName:"p"},"stop"),"\u5176\u4e2d\u4e00\u4e2a. ",(0,o.kt)("br",null),"\n\u4f46\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"stop"),"\u5b8c\u4e4b\u540e\u9047\u5230\u4e86\u4e00\u4e2a\u95ee\u9898\u5f53\u4e0b\u6b21\u542f\u52a8\u540e\u5206\u914d\u7684\u7aef\u53e3\u4f1a\u53d8\u5316(\u8fd9\u662f\u7531\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"docker"),"\u7684\u5185\u90e8\u673a\u5236\u5bfc\u81f4\u7684).",(0,o.kt)("br",null),"\n\u63a5\u4e0b\u6765\u5c06\u4f1a\u4ecb\u7ecd\u5982\u4f55\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898."))}m.isMDXComponent=!0}}]);