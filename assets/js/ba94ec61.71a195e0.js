"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[4319],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var m=r.createContext({}),s=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(m.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(t),d=l,k=c["".concat(m,".").concat(d)]||c[d]||u[d]||a;return t?r.createElement(k,o(o({ref:n},p),{},{components:t})):r.createElement(k,o({ref:n},p))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=d;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3992:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(7462),l=(t(7294),t(3905));const a={authors:["xiangcheng.kuo"],tags:["problem-solving","elm","jetbrains","code2art","open-radiant"]},o="\u901a\u8fc7\u624b\u52a8\u4e0b\u8f7d\u5e76\u5b89\u88c5elm\u4f9d\u8d56\u89e3\u51b3\u6267\u884celm make\u65f6\u4f9d\u8d56\u4e0b\u8f7d\u5931\u8d25\u95ee\u9898",i={permalink:"/markdowns/blog/2023/03/30/fix-elm-package-download-failed",source:"@site/blog/2023-03-30/fix-elm-package-download-failed.md",title:"\u901a\u8fc7\u624b\u52a8\u4e0b\u8f7d\u5e76\u5b89\u88c5elm\u4f9d\u8d56\u89e3\u51b3\u6267\u884celm make\u65f6\u4f9d\u8d56\u4e0b\u8f7d\u5931\u8d25\u95ee\u9898",description:"\u6700\u8fd1\u5728\u672c\u5730\u6784\u5efaopen-radiant\u9879\u76ee.",date:"2023-03-30T00:00:00.000Z",formattedDate:"2023\u5e743\u670830\u65e5",tags:[{label:"problem-solving",permalink:"/markdowns/blog/tags/problem-solving"},{label:"elm",permalink:"/markdowns/blog/tags/elm"},{label:"jetbrains",permalink:"/markdowns/blog/tags/jetbrains"},{label:"code2art",permalink:"/markdowns/blog/tags/code-2-art"},{label:"open-radiant",permalink:"/markdowns/blog/tags/open-radiant"}],readingTime:5.1,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","elm","jetbrains","code2art","open-radiant"]},prevItem:{title:"Gitlab\u4e2d\u5e38\u89c1\u7684\u6807\u7b7e",permalink:"/markdowns/blog/2023/03/31/gitlab-labels"},nextItem:{title:"node.js v17\u53ca\u4ee5\u4e0a\u7248\u672c\u4f7f\u7528openssl v3.0\u5f15\u53d1\u7684\u54c8\u5e0c\u7b97\u6cd5\u9519\u8bef\u53ca\u5176\u89e3\u51b3\u65b9\u6cd5",permalink:"/markdowns/blog/2023/03/30/fix-node-v17-upwards-openssl-hash-error"}},m={authorsImageUrls:[void 0]},s=[{value:"\u95ee\u9898\u539f\u56e0",id:"\u95ee\u9898\u539f\u56e0",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u786e\u5b9a\u4f9d\u8d56\u7684\u76ee\u5f55",id:"\u786e\u5b9a\u4f9d\u8d56\u7684\u76ee\u5f55",level:3},{value:"\u4e0b\u8f7d\u4f9d\u8d56",id:"\u4e0b\u8f7d\u4f9d\u8d56",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],p={toc:s},c="wrapper";function u(e){let{components:n,...t}=e;return(0,l.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6700\u8fd1\u5728\u672c\u5730\u6784\u5efa",(0,l.kt)("a",{parentName:"p",href:"https://github.com/JetBrains/open-radiant"},"open-radiant"),"\u9879\u76ee.",(0,l.kt)("br",null),"\n\u8be5\u9879\u76ee\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"JetBrains"),"\u5f00\u6e90\u7684\u4e00\u4e2a\u9879\u76ee, \u7528\u4e8e\u751f\u6210AI\u827a\u672f\u56fe\u7247, \u5728\u7ebf\u6f14\u793a\u5730\u5740\u4e3a: ",(0,l.kt)("a",{parentName:"p",href:"https://code2art.jetbrains.com/"},"code2art"),(0,l.kt)("br",null),"\n\u5728\u6784\u5efa\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u4e86\u4e00\u4e9b\u95ee\u9898.",(0,l.kt)("br",null),"\n\u5176\u4e2d\u7684\u4e00\u4e2a\u95ee\u9898\u662f\u5f53\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"elm make"),"\u65f6\u4f9d\u8d56\u4e0b\u8f7d\u5931\u8d25, \u65e5\u5fd7\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-log"},"Starting downloads...\n\n  \u25cf elm/json 1.1.3\n  \u25cf elm-community/list-extra 8.2.2\n  \u25cf elm/random 1.0.0\n  \u25cf elm/file 1.0.5\n  \u25cf elm/virtual-dom 1.0.2\n  \u25cf elm/parser 1.1.0\n  \u25cf rtfeldman/elm-iso8601-date-strings 1.1.3\n  \u25cf elm/url 1.0.0\n  \u25cf elm-community/random-extra 3.1.0\n  \u25cf elm-explorations/webgl 1.1.1\n  \u25cf elm/core 1.0.2\n  \u2717 elm/http 2.0.0\n  \u2717 owanturist/elm-union-find 1.0.0\n  \u2717 elm/bytes 1.0.8\n  \u2717 elm/svg 1.0.1\n  \u2717 avh4/elm-color 1.0.0\n  \u2717 elm/time 1.0.0\n  \u2717 elm-community/json-extra 4.2.0\n  \u2717 fredcy/elm-parseint 2.0.1\n  \u2717 noahzgordon/elm-color-extra 1.0.2\n  \u2717 elm/html 1.0.0\n  \u2717 elm/browser 1.0.2\n  \u2717 newlandsvalley/elm-binary-base64 1.0.3\n  \u2717 elm-community/easing-functions 2.0.0\n\nDependency problem!           \n-- PROBLEM DOWNLOADING PACKAGE -------------------------------------------------\n\nI was trying to download the source code for avh4/elm-color 1.0.0, so I tried to\nfetch:\n\n    https://github.com/avh4/elm-color/zipball/1.0.0/\n\nBut my HTTP library is giving me the following error message:\n\n    ConnectionTimeout\n\nAre you somewhere with a slow internet connection? Or no internet? Does the link\nI am trying to fetch work in your browser? Maybe the site is down? Does your\ninternet connection have a firewall that blocks certain domains? It is usually\nsomething like that!\n\n")),(0,l.kt)("h2",{id:"\u95ee\u9898\u539f\u56e0"},"\u95ee\u9898\u539f\u56e0"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"elm"),"\u7684\u4f9d\u8d56\u5728\u56fd\u5185\u8bbf\u95ee\u4f1a\u6bd4\u8f83\u6162, \u751a\u81f3\u4f1a\u51fa\u73b0\u4e0b\u8f7d\u5931\u8d25\u7684\u60c5\u51b5.",(0,l.kt)("br",null),"\n\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898, \u6211\u4eec\u53ef\u4ee5\u624b\u52a8\u4e0b\u8f7d\u4f9d\u8d56\u5305, \u7136\u540e\u653e\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"elm"),"\u7684\u4f9d\u8d56\u76ee\u5f55\u4e0b, \u4ee5\u540e\u518d\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"elm make"),"\u65f6\u5c31\u4e0d\u4f1a\u518d\u53bb\u4e0b\u8f7d\u4f9d\u8d56\u4e86.",(0,l.kt)("br",null)),(0,l.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,l.kt)("p",null,"\u6848\u4f8b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9879\u76ee\u4f9d\u8d56",(0,l.kt)("inlineCode",{parentName:"li"},"avh4/elm-color 1.0.0")),(0,l.kt)("li",{parentName:"ul"},"elm\u7248\u672c\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"0.19.0"))),(0,l.kt)("h3",{id:"\u786e\u5b9a\u4f9d\u8d56\u7684\u76ee\u5f55"},"\u786e\u5b9a\u4f9d\u8d56\u7684\u76ee\u5f55"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"elm"),"\u7684\u4f9d\u8d56\u76ee\u5f55\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"~/.elm"),"\u4e0b, \u4f9d\u8d56\u5305\u7684\u76ee\u5f55\u7ed3\u6784\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"tree"),"\u547d\u4ee4\u67e5\u770b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tree ~/.elm\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-log"},".\n\u2514\u2500\u2500 0.19.1\n    \u2514\u2500\u2500 packages\n        \u251c\u2500\u2500 avh4\n        \u2502\xa0\xa0 \u2514\u2500\u2500 elm-color\n        \u2502\xa0\xa0     \u2514\u2500\u2500 1.0.0\n        \u2502\xa0\xa0         \u2514\u2500\u2500 src\n        \u251c\u2500\u2500 elm\n        \u2502\xa0\xa0 \u251c\u2500\u2500 browser\n        \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 1.0.2\n        \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 src\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u251c\u2500\u2500 Browser\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u251c\u2500\u2500 Debugger\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 Elm\n        \u2502\xa0\xa0 \u2502\xa0\xa0             \u2514\u2500\u2500 Kernel\n        \u2502\xa0\xa0 \u251c\u2500\u2500 bytes\n        \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 1.0.8\n        \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 src\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u251c\u2500\u2500 Bytes\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 Elm\n        \u2502\xa0\xa0 \u2502\xa0\xa0             \u2514\u2500\u2500 Kernel\n        \u2502\xa0\xa0 \u251c\u2500\u2500 core\n        \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 1.0.2\n        \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 src\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u251c\u2500\u2500 Elm\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u2514\u2500\u2500 Kernel\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 Platform\n        \u2502\xa0\xa0 \u251c\u2500\u2500 file\n        \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 1.0.5\n        \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 src\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u251c\u2500\u2500 Elm\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u2514\u2500\u2500 Kernel\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 File\n        \u2502\xa0\xa0 \u251c\u2500\u2500 html\n        \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 1.0.0\n        \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 src\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 Html\n        \u2502\xa0\xa0 \u251c\u2500\u2500 http\n        \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 2.0.0\n        \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 src\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 Elm\n        \u2502\xa0\xa0 \u2502\xa0\xa0             \u2514\u2500\u2500 Kernel\n        \u2502\xa0\xa0 \u251c\u2500\u2500 json\n        \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 1.1.3\n        \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 src\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u251c\u2500\u2500 Elm\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u2514\u2500\u2500 Kernel\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 Json\n        \u2502\xa0\xa0 \u251c\u2500\u2500 parser\n        \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 1.1.0\n        \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 src\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u251c\u2500\u2500 Elm\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u2514\u2500\u2500 Kernel\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 Parser\n        \u2502\xa0\xa0 \u251c\u2500\u2500 random\n        \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 1.0.0\n        \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 src\n        \u2502\xa0\xa0 \u251c\u2500\u2500 regex\n        \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 1.0.0\n        \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 src\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 Elm\n        \u2502\xa0\xa0 \u2502\xa0\xa0             \u2514\u2500\u2500 Kernel\n        \u2502\xa0\xa0 \u251c\u2500\u2500 svg\n        \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 1.0.1\n        \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 src\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 Svg\n        \u2502\xa0\xa0 \u251c\u2500\u2500 time\n        \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 1.0.0\n        \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 src\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 Elm\n        \u2502\xa0\xa0 \u2502\xa0\xa0             \u2514\u2500\u2500 Kernel\n        \u2502\xa0\xa0 \u251c\u2500\u2500 url\n        \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 1.0.0\n        \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 src\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u251c\u2500\u2500 Elm\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u2514\u2500\u2500 Kernel\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 Url\n        \u2502\xa0\xa0 \u2502\xa0\xa0             \u2514\u2500\u2500 Parser\n        \u2502\xa0\xa0 \u2514\u2500\u2500 virtual-dom\n        \u2502\xa0\xa0     \u2514\u2500\u2500 1.0.2\n        \u2502\xa0\xa0         \u2514\u2500\u2500 src\n        \u2502\xa0\xa0             \u2514\u2500\u2500 Elm\n        \u2502\xa0\xa0                 \u2514\u2500\u2500 Kernel\n        \u251c\u2500\u2500 elm-community\n        \u2502\xa0\xa0 \u251c\u2500\u2500 easing-functions\n        \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 2.0.0\n        \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 src\n        \u2502\xa0\xa0 \u251c\u2500\u2500 json-extra\n        \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 4.2.0\n        \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 src\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 Json\n        \u2502\xa0\xa0 \u2502\xa0\xa0             \u251c\u2500\u2500 Decode\n        \u2502\xa0\xa0 \u2502\xa0\xa0             \u2514\u2500\u2500 Encode\n        \u2502\xa0\xa0 \u251c\u2500\u2500 list-extra\n        \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 8.2.2\n        \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 src\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 List\n        \u2502\xa0\xa0 \u2514\u2500\u2500 random-extra\n        \u2502\xa0\xa0     \u2514\u2500\u2500 3.1.0\n        \u2502\xa0\xa0         \u2514\u2500\u2500 src\n        \u2502\xa0\xa0             \u2514\u2500\u2500 Random\n        \u251c\u2500\u2500 elm-explorations\n        \u2502\xa0\xa0 \u251c\u2500\u2500 linear-algebra\n        \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 1.0.3\n        \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 src\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u251c\u2500\u2500 Elm\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u2514\u2500\u2500 Kernel\n        \u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 Math\n        \u2502\xa0\xa0 \u2514\u2500\u2500 webgl\n        \u2502\xa0\xa0     \u2514\u2500\u2500 1.1.1\n        \u2502\xa0\xa0         \u2514\u2500\u2500 src\n        \u2502\xa0\xa0             \u251c\u2500\u2500 Elm\n        \u2502\xa0\xa0             \u2502\xa0\xa0 \u2514\u2500\u2500 Kernel\n        \u2502\xa0\xa0             \u2514\u2500\u2500 WebGL\n        \u2502\xa0\xa0                 \u2514\u2500\u2500 Settings\n        \u251c\u2500\u2500 fredcy\n        \u2502\xa0\xa0 \u2514\u2500\u2500 elm-parseint\n        \u2502\xa0\xa0     \u2514\u2500\u2500 2.0.1\n        \u2502\xa0\xa0         \u2514\u2500\u2500 src\n        \u251c\u2500\u2500 newlandsvalley\n        \u2502\xa0\xa0 \u2514\u2500\u2500 elm-binary-base64\n        \u2502\xa0\xa0     \u2514\u2500\u2500 1.0.3\n        \u2502\xa0\xa0         \u2514\u2500\u2500 src\n        \u251c\u2500\u2500 noahzgordon\n        \u2502\xa0\xa0 \u2514\u2500\u2500 elm-color-extra\n        \u2502\xa0\xa0     \u2514\u2500\u2500 1.0.2\n        \u2502\xa0\xa0         \u2514\u2500\u2500 src\n        \u2502\xa0\xa0             \u2514\u2500\u2500 Color\n        \u251c\u2500\u2500 owanturist\n        \u2502\xa0\xa0 \u2514\u2500\u2500 elm-union-find\n        \u2502\xa0\xa0     \u2514\u2500\u2500 1.0.0\n        \u2502\xa0\xa0         \u2514\u2500\u2500 src\n        \u2514\u2500\u2500 rtfeldman\n            \u2514\u2500\u2500 elm-iso8601-date-strings\n                \u2514\u2500\u2500 1.1.3\n                    \u2514\u2500\u2500 src\n\n135 directories\n")),(0,l.kt)("p",null,"\u901a\u8fc7\u547d\u4ee4\u6267\u884c\u7ed3\u679c\u53ef\u4ee5\u770b\u5230\u5176\u76ee\u5f55\u7ed3\u6784\u5927\u81f4\u5982\u4e0b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u7ea7\u76ee\u5f55\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"packages")),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u7ea7\u76ee\u5f55\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"group"),"(\u4ee5",(0,l.kt)("inlineCode",{parentName:"li"},"avh4/elm-color 1.0.0"),"\u4e3a\u4f8b, ",(0,l.kt)("inlineCode",{parentName:"li"},"group"),"\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"avh4"),")"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u7ea7\u76ee\u5f55\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"artifact"),"(\u4ee5",(0,l.kt)("inlineCode",{parentName:"li"},"avh4/elm-color 1.0.0"),"\u4e3a\u4f8b, ",(0,l.kt)("inlineCode",{parentName:"li"},"artifact"),"\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"elm-color"),")"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u56db\u7ea7\u76ee\u5f55\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"version"),"(\u4ee5",(0,l.kt)("inlineCode",{parentName:"li"},"avh4/elm-color 1.0.0"),"\u4e3a\u4f8b, ",(0,l.kt)("inlineCode",{parentName:"li"},"version"),"\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"1.0.0"),")")),(0,l.kt)("h3",{id:"\u4e0b\u8f7d\u4f9d\u8d56"},"\u4e0b\u8f7d\u4f9d\u8d56"),(0,l.kt)("p",null,"\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"avh4/elm-color 1.0.0"),"\u4e3a\u4f8b, \u6211\u4eec\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"https://github.com/avh4/elm-color/zipball/1.0.0/")," \u94fe\u63a5\u4e0b\u8f7d\u5bf9\u5e94\u7684\u5b89\u88c5\u5305"),(0,l.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("p",null,"\u5c06\u8be5\u5b89\u88c5\u5305\u91cc\u7684\u6587\u4ef6\u89e3\u538b\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"~/.elm/0.19.0/package/avh4/elm-color/1.0.0"),"\u76ee\u5f55\u4e0b"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f:\n\u5b89\u88c5\u5305\u6253\u5f00\u4f1a\u6709\u4e00\u4e2a\u5355\u72ec\u7684\u76ee\u5f55, \u8fd9\u4e2a\u76ee\u5f55\u91cc\u9762\u7684\u6587\u4ef6\u662f\u6211\u4eec\u9700\u8981\u89e3\u538b\u7684\u6587\u4ef6")),(0,l.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/JetBrains/open-radiant"},"open-radiant")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://code2art.jetbrains.com/"},"code2art")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://elm-lang.org/"},"elm"))))}u.isMDXComponent=!0}}]);