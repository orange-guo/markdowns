"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[5454],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,d=m["".concat(p,".").concat(k)]||m[k]||u[k]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={authors:["xiangcheng.kuo"],tags:["testcontainers","docker"]},i="\u5728TestContainers\u4e2d\u5b9e\u73b0\u914d\u7f6e\u7684\u5bb9\u5668hostname\u4ee5\u89e3\u51b3\u5bb9\u5668\u4e4b\u95f4\u8bbf\u95ee\u95ee\u9898",l={permalink:"/markdowns/blog/2023/02/15/index",source:"@site/blog/2023-02-15/index.md",title:"\u5728TestContainers\u4e2d\u5b9e\u73b0\u914d\u7f6e\u7684\u5bb9\u5668hostname\u4ee5\u89e3\u51b3\u5bb9\u5668\u4e4b\u95f4\u8bbf\u95ee\u95ee\u9898",description:"\u5728\u4f7f\u7528TestContainers\u542f\u52a8\u5bb9\u5668\u65f6, \u53ef\u80fd\u4f1a\u5b58\u5728\u5bb9\u5668\u4e4b\u95f4\u4f9d\u8d56\u7684\u60c5\u51b5.",date:"2023-02-15T00:00:00.000Z",formattedDate:"February 15, 2023",tags:[{label:"testcontainers",permalink:"/markdowns/blog/tags/testcontainers"},{label:"docker",permalink:"/markdowns/blog/tags/docker"}],readingTime:1.265,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["testcontainers","docker"]},prevItem:{title:"\u5728linux\u4e2d\u901a\u8fc7\u542f\u7528swapfile\u6765\u589e\u52a0\u865a\u62df\u5185\u5b58\u5e76\u63d0\u9ad8\u6027\u80fd",permalink:"/markdowns/blog/2023/02/16/index"},nextItem:{title:"\u8df3\u8fc7SSH\u8fde\u63a5\u65f6\u7684\u786e\u8ba4\u63d0\u793a",permalink:"/markdowns/blog/2023/02/14/"}},p={authorsImageUrls:[void 0]},s=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"TestContainers"),"\u542f\u52a8\u5bb9\u5668\u65f6, \u53ef\u80fd\u4f1a\u5b58\u5728\u5bb9\u5668\u4e4b\u95f4\u4f9d\u8d56\u7684\u60c5\u51b5.",(0,a.kt)("br",null),"\n\u5982\u679c\u5176\u4e2d\u4e00\u4e2a\u5bb9\u5668\u4f9d\u8d56\u4e8e\u53e6\u5916\u4e00\u4e2a\u5bb9\u5668, \u90a3\u4e48\u9700\u8981\u5728\u542f\u52a8\u88ab\u4f9d\u8d56\u7684\u5bb9\u5668\u65f6, \u6307\u5b9a",(0,a.kt)("inlineCode",{parentName:"p"},"hostname"),".",(0,a.kt)("br",null),"\n\u8fd9\u6837\u6709\u4f9d\u8d56\u9700\u6c42\u7684\u5bb9\u5668\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"hostname"),"\u6765\u8bbf\u95ee\u88ab\u4f9d\u8d56\u7684\u5bb9\u5668.",(0,a.kt)("br",null),"\n\u4ee5\u4fbf\u4e8e\u88ab\u4f9d\u8d56\u7684\u5bb9\u5668\u80fd\u591f\u6b63\u786e\u7684\u89e3\u6790\u4f9d\u8d56\u5bb9\u5668\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"hostname"),".\n\u4e0b\u9762\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"TestContainers"),"\u4e2d\u5b9e\u73b0\u914d\u7f6e\u7684\u5bb9\u5668",(0,a.kt)("inlineCode",{parentName:"p"},"hostname"),"\u4ee5\u89e3\u51b3\u5bb9\u5668\u4e4b\u95f4\u8bbf\u95ee\u95ee\u9898."),(0,a.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("p",null,"\u5728\u542f\u52a8\u5bb9\u5668\u65f6, \u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"withNetworkAliases"),"\u65b9\u6cd5\u6307\u5b9a\u5bb9\u5668\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"hostname")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'withNetworkAliases("ldap")\n')),(0,a.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f, \u8fd9\u79cd\u5b9e\u73b0\u65b9\u5f0f\u662f\u91c7\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"docker"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"--network-alias"),"\u53c2\u6570\u5b9e\u73b0\u7684, \u8be5\u53c2\u6570\u7684\u4f5c\u7528\u662f\u4e3a\u5bb9\u5668\u6307\u5b9a",(0,a.kt)("inlineCode",{parentName:"p"},"hostname"),(0,a.kt)("br",null),"\n\u53e6\u5916\u9700\u8981\u786e\u4fdd\u9700\u8981\u4e92\u76f8\u8bbf\u95ee\u7684\u5bb9\u5668\u8981\u5728\u540c\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"network"),"\u4e2d, \u5426\u5219\u65e0\u6cd5\u4e92\u76f8\u8bbf\u95ee.",(0,a.kt)("br",null),"\n\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u4ee3\u7801\u6765\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"network")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"val network = Network.newNetwork()\ncontainer.withNetwork(network)\n")),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/run/#network-settings"},"Network settings"))))}m.isMDXComponent=!0}}]);