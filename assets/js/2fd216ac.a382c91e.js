"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[8398],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=r.createContext({}),s=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(m.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(t),g=o,d=p["".concat(m,".").concat(g)]||p[g]||u[g]||a;return t?r.createElement(d,l(l({ref:n},c),{},{components:t})):r.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=g;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2884:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={authors:["xiangcheng.kuo"],tags:["problem-solving","elm","jetbrains","code2art","open-radiant"]},l="\u89e3\u51b3elm\u4f9d\u8d56\u4e0b\u8f7d\u5931\u8d25\u7684\u95ee\u9898",i={permalink:"/markdowns/blog/2023/03/30/fix-elm-package-download-failed",source:"@site/blog/2023-03-30/fix-elm-package-download-failed.md",title:"\u89e3\u51b3elm\u4f9d\u8d56\u4e0b\u8f7d\u5931\u8d25\u7684\u95ee\u9898",description:"\u6700\u8fd1\u5728\u672c\u5730\u6784\u5efaopen-radiant\u9879\u76ee.",date:"2023-03-30T00:00:00.000Z",formattedDate:"March 30, 2023",tags:[{label:"problem-solving",permalink:"/markdowns/blog/tags/problem-solving"},{label:"elm",permalink:"/markdowns/blog/tags/elm"},{label:"jetbrains",permalink:"/markdowns/blog/tags/jetbrains"},{label:"code2art",permalink:"/markdowns/blog/tags/code-2-art"},{label:"open-radiant",permalink:"/markdowns/blog/tags/open-radiant"}],readingTime:5.1,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","elm","jetbrains","code2art","open-radiant"]},prevItem:{title:"Gitlab\u4e2d\u5e38\u89c1\u7684\u6807\u7b7e",permalink:"/markdowns/blog/2023/03/31/common-tags-in-gitlab"},nextItem:{title:"node.js v17\u53ca\u4ee5\u4e0a\u7248\u672c\u4f7f\u7528openssl v3.0\u5f15\u53d1\u7684\u54c8\u5e0c\u7b97\u6cd5\u9519\u8bef\u53ca\u5176\u89e3\u51b3\u65b9\u6cd5",permalink:"/markdowns/blog/2023/03/30/fix-node-v17-upwards-openssl-hash-error"}},m={authorsImageUrls:[void 0]},s=[],c={toc:s},p="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6700\u8fd1\u5728\u672c\u5730\u6784\u5efa",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JetBrains/open-radiant"},"open-radiant"),"\u9879\u76ee.",(0,o.kt)("br",null),"\n\u8be5\u9879\u76ee\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"JetBrains"),"\u5f00\u6e90\u7684\u4e00\u4e2a\u9879\u76ee, \u7528\u4e8e\u751f\u6210AI\u827a\u672f\u56fe\u7247, \u5728\u7ebf\u6f14\u793a\u5730\u5740\u4e3a: ",(0,o.kt)("a",{parentName:"p",href:"https://code2art.jetbrains.com/"},"code2art"),(0,o.kt)("br",null),"\n\u5728\u6784\u5efa\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u4e86\u4e00\u4e9b\u95ee\u9898.",(0,o.kt)("br",null),"\n\u5176\u4e2d\u7684\u4e00\u4e2a\u95ee\u9898\u662f\u5f53\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"elm make"),"\u65f6\u4f9d\u8d56\u4e0b\u8f7d\u5931\u8d25, \u65e5\u5fd7\u5982\u4e0b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"Starting downloads...\n\n  \u25cf elm/json 1.1.3\n  \u25cf elm-community/list-extra 8.2.2\n  \u25cf elm/random 1.0.0\n  \u25cf elm/file 1.0.5\n  \u25cf elm/virtual-dom 1.0.2\n  \u25cf elm/parser 1.1.0\n  \u25cf rtfeldman/elm-iso8601-date-strings 1.1.3\n  \u25cf elm/url 1.0.0\n  \u25cf elm-community/random-extra 3.1.0\n  \u25cf elm-explorations/webgl 1.1.1\n  \u25cf elm/core 1.0.2\n  \u2717 elm/http 2.0.0\n  \u2717 owanturist/elm-union-find 1.0.0\n  \u2717 elm/bytes 1.0.8\n  \u2717 elm/svg 1.0.1\n  \u2717 avh4/elm-color 1.0.0\n  \u2717 elm/time 1.0.0\n  \u2717 elm-community/json-extra 4.2.0\n  \u2717 fredcy/elm-parseint 2.0.1\n  \u2717 noahzgordon/elm-color-extra 1.0.2\n  \u2717 elm/html 1.0.0\n  \u2717 elm/browser 1.0.2\n  \u2717 newlandsvalley/elm-binary-base64 1.0.3\n  \u2717 elm-community/easing-functions 2.0.0\n\nDependency problem!           \n-- PROBLEM DOWNLOADING PACKAGE -------------------------------------------------\n\nI was trying to download the source code for avh4/elm-color 1.0.0, so I tried to\nfetch:\n\n    https://github.com/avh4/elm-color/zipball/1.0.0/\n\nBut my HTTP library is giving me the following error message:\n\n    ConnectionTimeout\n\nAre you somewhere with a slow internet connection? Or no internet? Does the link\nI am trying to fetch work in your browser? Maybe the site is down? Does your\ninternet connection have a firewall that blocks certain domains? It is usually\nsomething like that!\n\n")))}u.isMDXComponent=!0}}]);