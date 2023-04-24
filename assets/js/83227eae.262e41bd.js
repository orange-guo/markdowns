"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[5376],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,m=u["".concat(s,".").concat(g)]||u[g]||k[g]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},37773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={authors:["xiangcheng.kuo"],tags:["kind","k8s","docker"]},i="\u4f7f\u7528kind\u521b\u5efa\u4e00\u4e2ak8s\u96c6\u7fa4",l={permalink:"/blog/2023/04/23/use-kind-create-a-k8s-cluster",source:"@site/blog/2023-04-23/use-kind-create-a-k8s-cluster.md",title:"\u4f7f\u7528kind\u521b\u5efa\u4e00\u4e2ak8s\u96c6\u7fa4",description:"kind\u662f\u4e00\u4e2a\u7528\u4e8e\u521b\u5efak8s\u96c6\u7fa4\u7684\u5de5\u5177, \u5b83\u4f7f\u7528docker\u5bb9\u5668\u4f5c\u4e3a\u8282\u70b9, \u53ef\u4ee5\u5feb\u901f\u521b\u5efa\u4e00\u4e2ak8s\u96c6\u7fa4,",date:"2023-04-23T00:00:00.000Z",formattedDate:"April 23, 2023",tags:[{label:"kind",permalink:"/blog/tags/kind"},{label:"k8s",permalink:"/blog/tags/k-8-s"},{label:"docker",permalink:"/blog/tags/docker"}],readingTime:4.275,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["kind","k8s","docker"]},nextItem:{title:"\u4f7f\u7528S3\u6258\u7ba1\u9759\u6001\u7f51\u7ad9",permalink:"/blog/2023/04/16/hosting-a-static-website-using-s3"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c},u="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"kind\u662f\u4e00\u4e2a\u7528\u4e8e\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"k8s"),"\u96c6\u7fa4\u7684\u5de5\u5177, \u5b83\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"docker"),"\u5bb9\u5668\u4f5c\u4e3a\u8282\u70b9, \u53ef\u4ee5\u5feb\u901f\u521b\u5efa\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"k8s"),"\u96c6\u7fa4,\n\u7528\u4e8e\u6d4b\u8bd5\u6216\u8005\u5f00\u53d1.",(0,a.kt)("br",null),"\n\u5b98\u65b9\u63d0\u4f9b\u4e86\u76f8\u5e94\u7684\u6587\u6863",(0,a.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/ingress/"},"Ingress"),", \u5728\u4f7f\u7528\u8be5\u6587\u6863\u7684\u65f6\u5019\u51fa\u73b0\u4e86\u4e00\u4e9b\u95ee\u9898.",(0,a.kt)("br",null),"\n\u672c\u6587\u57fa\u4e8e\u5b98\u65b9\u6587\u6863\u5e76\u4f5c\u51fa\u4e86\u4e00\u5b9a\u7684\u4fee\u6539\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"kind"),"\u521b\u5efa\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"k8s"),"\u96c6\u7fa4, \u5e76\u5728\u96c6\u7fa4\u4e2d\u90e8\u7f72",(0,a.kt)("inlineCode",{parentName:"p"},"kong-ingress"),".\u6700\u540e\u90e8\u7f72\u4e00\u4e2a\u6d4b\u8bd5\u5e94\u7528\u5e76\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"kong-ingress"),"\u8bbf\u95ee\u8be5\u5e94\u7528."))}k.isMDXComponent=!0}}]);