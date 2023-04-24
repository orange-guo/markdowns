"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[9001],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,g=u["".concat(c,".").concat(m)]||u[m]||k[m]||a;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={authors:["xiangcheng.kuo"],tags:["kind","k8s","docker"]},i="\u4f7f\u7528kind\u521b\u5efa\u4e00\u4e2ak8s\u96c6\u7fa4",l={permalink:"/blog/2023/04/23/kind-helloworld",source:"@site/blog/2023-04-23/kind-helloworld.md",title:"\u4f7f\u7528kind\u521b\u5efa\u4e00\u4e2ak8s\u96c6\u7fa4",description:"kind\u662f\u4e00\u4e2a\u7528\u4e8e\u521b\u5efak8s\u96c6\u7fa4\u7684\u5de5\u5177, \u5b83\u4f7f\u7528docker\u5bb9\u5668\u4f5c\u4e3a\u8282\u70b9, \u53ef\u4ee5\u5feb\u901f\u521b\u5efa\u4e00\u4e2ak8s\u96c6\u7fa4, \u7528\u4e8e\u6d4b\u8bd5\u6216\u8005\u5f00\u53d1.",date:"2023-04-23T00:00:00.000Z",formattedDate:"April 23, 2023",tags:[{label:"kind",permalink:"/blog/tags/kind"},{label:"k8s",permalink:"/blog/tags/k-8-s"},{label:"docker",permalink:"/blog/tags/docker"}],readingTime:4.095,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["kind","k8s","docker"]},nextItem:{title:"\u4f7f\u7528S3\u6258\u7ba1\u9759\u6001\u7f51\u7ad9",permalink:"/blog/2023/04/16/hosting-a-static-website-using-s3"}},c={authorsImageUrls:[void 0]},p=[],s={toc:p},u="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"kind\u662f\u4e00\u4e2a\u7528\u4e8e\u521b\u5efa",(0,o.kt)("inlineCode",{parentName:"p"},"k8s"),"\u96c6\u7fa4\u7684\u5de5\u5177, \u5b83\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"docker"),"\u5bb9\u5668\u4f5c\u4e3a\u8282\u70b9, \u53ef\u4ee5\u5feb\u901f\u521b\u5efa\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"k8s"),"\u96c6\u7fa4, \u7528\u4e8e\u6d4b\u8bd5\u6216\u8005\u5f00\u53d1.",(0,o.kt)("br",null),"\n\u5b98\u65b9\u63d0\u4f9b\u4e86\u76f8\u5e94\u7684\u6587\u6863",(0,o.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/ingress/"},"Ingress"),".",(0,o.kt)("br",null),"\n\u5728\u4f7f\u7528\u8be5\u6587\u6863\u7684\u65f6\u5019\u51fa\u73b0\u4e86\u4e00\u4e9b\u95ee\u9898, \u672c\u6587\u57fa\u4e8e\u5b98\u65b9\u6587\u6863\u5e76\u4f5c\u51fa\u4e86\u4e00\u5b9a\u7684\u4fee\u6539\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"kind"),"\u521b\u5efa\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"k8s"),"\u96c6\u7fa4,\n\u5e76\u5728\u96c6\u7fa4\u4e2d\u90e8\u7f72",(0,o.kt)("inlineCode",{parentName:"p"},"kong-ingress"),".",(0,o.kt)("br",null)))}k.isMDXComponent=!0}}]);