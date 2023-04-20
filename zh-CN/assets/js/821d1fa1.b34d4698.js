"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[5326],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,d=c["".concat(p,".").concat(m)]||c[m]||f[m]||l;return t?a.createElement(d,i(i({ref:n},u),{},{components:t})):a.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7990:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const l={authors:["xiangcheng.kuo"],tags:["linux"]},i="\u5728linux\u4e2d\u901a\u8fc7\u542f\u7528swapfile\u6765\u589e\u52a0\u865a\u62df\u5185\u5b58\u5e76\u63d0\u9ad8\u6027\u80fd",o={permalink:"/zh-CN/blog/2023/02/16/linux-swapfile",source:"@site/blog/2023-02-16/linux-swapfile.md",title:"\u5728linux\u4e2d\u901a\u8fc7\u542f\u7528swapfile\u6765\u589e\u52a0\u865a\u62df\u5185\u5b58\u5e76\u63d0\u9ad8\u6027\u80fd",description:"swapfile\u662flinux\u4e2d\u7684\u4e00\u79cd\u865a\u62df\u5185\u5b58, \u4e0ewindows\u4e2d\u7684pagefile\u7c7b\u4f3c.",date:"2023-02-16T00:00:00.000Z",formattedDate:"2023\u5e742\u670816\u65e5",tags:[{label:"linux",permalink:"/zh-CN/blog/tags/linux"}],readingTime:.91,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["linux"]},prevItem:{title:"\u4f7f\u7528snap\u5b89\u88c5\u6307\u5b9a\u7248\u672c\u7684\u5e94\u7528",permalink:"/zh-CN/blog/2023/02/17/snap-install-specify-version"},nextItem:{title:"\u5728TestContainers\u4e2d\u5b9e\u73b0\u914d\u7f6e\u7684\u5bb9\u5668hostname\u4ee5\u89e3\u51b3\u5bb9\u5668\u4e4b\u95f4\u8bbf\u95ee\u95ee\u9898",permalink:"/zh-CN/blog/2023/02/15/testcontainers-hostname"}},p={authorsImageUrls:[void 0]},s=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u542f\u7528<code>swapfile</code>, \u5927\u5c0f\u4e3a<code>4G</code>",id:"\u542f\u7528swapfile-\u5927\u5c0f\u4e3a4g",level:3},{value:"\u7981\u7528<code>swapfile</code>",id:"\u7981\u7528swapfile",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],u={toc:s},c="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"swapfile"),"\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"linux"),"\u4e2d\u7684\u4e00\u79cd\u865a\u62df\u5185\u5b58, \u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"windows"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"pagefile"),"\u7c7b\u4f3c.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"swapfile"),"\u7684\u4f5c\u7528\u662f\u5f53",(0,r.kt)("inlineCode",{parentName:"p"},"RAM"),"\u4e0d\u8db3\u65f6, \u5c06\u4e00\u90e8\u5206",(0,r.kt)("inlineCode",{parentName:"p"},"RAM"),"\u4e2d\u7684\u6570\u636e\u5199\u5165\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"swapfile"),"\u4e2d, \u4ece\u800c\u91ca\u653e\u51fa",(0,r.kt)("inlineCode",{parentName:"p"},"RAM"),"\u7684\u7a7a\u95f4.",(0,r.kt)("br",null),"\n\u4f8b\u5982, \u5e73\u65f6\u4f7f\u7528\u6d4f\u89c8\u5668\u65f6\u4f1a\u5f00\u542f\u9875\u9762, \u8fd9\u4e9b\u9875\u9762\u901a\u5e38\u4f1a\u5360\u7528\u4e00\u5b9a\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"RAM"),"\u7a7a\u95f4.",(0,r.kt)("br",null),"\n\u5982\u679c\u5f00\u542f\u4e86\u592a\u591a\u7684\u9875\u9762, \u4f1a\u5bfc\u81f4",(0,r.kt)("inlineCode",{parentName:"p"},"RAM"),"\u4e0d\u8db3, \u8fd9\u65f6\u5c31\u9700\u8981\u5c06\u4e00\u90e8\u5206\u9875\u9762\u7684\u6570\u636e\u5199\u5165\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"swapfile"),"\u4e2d, \u4ece\u800c\u91ca\u653e\u51fa",(0,r.kt)("inlineCode",{parentName:"p"},"RAM"),"\u7684\u7a7a\u95f4",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,r.kt)("h3",{id:"\u542f\u7528swapfile-\u5927\u5c0f\u4e3a4g"},"\u542f\u7528",(0,r.kt)("inlineCode",{parentName:"h3"},"swapfile"),", \u5927\u5c0f\u4e3a",(0,r.kt)("inlineCode",{parentName:"h3"},"4G")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo fallocate -l 4G /swapfile\nsudo chmod 600 /swapfile\nsudo mkswap /swapfile\nsudo swapon /swapfile\nsudo swapon --show\nsudo free -h\n")),(0,r.kt)("h3",{id:"\u7981\u7528swapfile"},"\u7981\u7528",(0,r.kt)("inlineCode",{parentName:"h3"},"swapfile")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo swapoff /swapfile\n")),(0,r.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://linuxize.com/post/create-a-linux-swap-file/"},"Create a Linux Swap File"))))}f.isMDXComponent=!0}}]);