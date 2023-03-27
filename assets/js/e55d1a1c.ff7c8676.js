"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[226],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(t),d=a,f=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[c]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},869:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={authors:["xiangcheng.kuo"],tags:["snap"]},l="\u4f7f\u7528snap\u5b89\u88c5\u6307\u5b9a\u7248\u672c\u7684\u5e94\u7528",p={permalink:"/markdowns/blog/2023/02/17/snap-install-specify-version",source:"@site/blog/2023-02-17/snap-install-specify-version.md",title:"\u4f7f\u7528snap\u5b89\u88c5\u6307\u5b9a\u7248\u672c\u7684\u5e94\u7528",description:"\u5728\u4f7f\u7528snap\u5b89\u88c5\u5e94\u7528\u65f6\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u7248\u672c\uff0c\u4f1a\u9ed8\u8ba4\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684\u5e94\u7528.",date:"2023-02-17T00:00:00.000Z",formattedDate:"February 17, 2023",tags:[{label:"snap",permalink:"/markdowns/blog/tags/snap"}],readingTime:1.02,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["snap"]},prevItem:{title:"\u4f7f\u7528aliyundrive-webdav\u642d\u914drclone\u5b9e\u73b0\u4ee5\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u7684\u65b9\u5f0f\u64cd\u4f5c\u963f\u91cc\u4e91\u76d8\u4e2d\u7684\u6587\u4ef6",permalink:"/markdowns/blog/2023/02/18/aliyundrive-webdav-fuse"},nextItem:{title:"\u5728linux\u4e2d\u901a\u8fc7\u542f\u7528swapfile\u6765\u589e\u52a0\u865a\u62df\u5185\u5b58\u5e76\u63d0\u9ad8\u6027\u80fd",permalink:"/markdowns/blog/2023/02/16/linux-swapfile"}},i={authorsImageUrls:[void 0]},s=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],u={toc:s};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"snap"),"\u5b89\u88c5\u5e94\u7528\u65f6\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u7248\u672c\uff0c\u4f1a\u9ed8\u8ba4\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684\u5e94\u7528.",(0,a.kt)("br",null),"\n\u6709\u4e9b\u573a\u666f\u4e0b\u9700\u8981\u5b89\u88c5\u6307\u5b9a\u7248\u672c\u7684\u5e94\u7528",(0,a.kt)("br",null),"\n\u4f8b\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"UI"),"\u9879\u76ee\u76ee\u524d\u4ec5\u652f\u6301",(0,a.kt)("inlineCode",{parentName:"p"},"nodejs"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"v12"),"\u7248\u672c, \u90a3\u4e48\u5c31\u4e0d\u80fd\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"nodejs"),(0,a.kt)("br",null),"\n\u8fd9\u4e2a\u4f8b\u5b50\u4ec5\u4f5c\u4e3a\u53c2\u8003, \u56e0\u4e3a\u66f4\u597d\u7684\u89e3\u51b3\u65b9\u6848\u662f\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"nvm"),"\u6765\u7ba1\u7406",(0,a.kt)("inlineCode",{parentName:"p"},"nodejs"),"\u7684\u7248\u672c",(0,a.kt)("br",null),"\n\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"python"),"\u4e2d,\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"pyenv virtualenv"),"\u6765\u7ba1\u7406python\u7684\u7248\u672c",(0,a.kt)("br",null),"\n\u4e0b\u9762\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"snap"),"\u5b89\u88c5\u6307\u5b9a\u7248\u672c\u7684\u5e94\u7528"),(0,a.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("p",null,"\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"snap"),"\u5b89\u88c5\u6307\u5b9a\u7248\u672c\u7684\u5e94\u7528, \u9700\u8981\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"snap install <app> --channel=<channel>\n")),(0,a.kt)("p",null,"\u4ee5nodejs\u4e3a\u4f8b, \u5b89\u88c5",(0,a.kt)("inlineCode",{parentName:"p"},"v12"),"\u7248\u672c\u7684\u5e94\u7528, \u9700\u8981\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"snap install node --channel=12/stable\n")),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://manpages.org/snap"},"man snap"))))}c.isMDXComponent=!0}}]);