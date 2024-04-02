"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[8398],{70176:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var o=t(85893),a=t(11151);const r={authors:["xiangcheng.kuo"],tags:["problem-solving","elm","jetbrains","code2art","open-radiant"]},l="\u89e3\u51b3elm\u4f9d\u8d56\u4e0b\u8f7d\u5931\u8d25\u7684\u95ee\u9898",i={permalink:"/blog/2023/03/30/fix-elm-package-download-failed",source:"@site/blog/2023-03-30/fix-elm-package-download-failed.md",title:"\u89e3\u51b3elm\u4f9d\u8d56\u4e0b\u8f7d\u5931\u8d25\u7684\u95ee\u9898",description:"\u6700\u8fd1\u5728\u672c\u5730\u6784\u5efaopen-radiant\u9879\u76ee.",date:"2023-03-30T00:00:00.000Z",tags:[{label:"problem-solving",permalink:"/blog/tags/problem-solving"},{label:"elm",permalink:"/blog/tags/elm"},{label:"jetbrains",permalink:"/blog/tags/jetbrains"},{label:"code2art",permalink:"/blog/tags/code-2-art"},{label:"open-radiant",permalink:"/blog/tags/open-radiant"}],readingTime:5.1,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","elm","jetbrains","code2art","open-radiant"]},unlisted:!1,prevItem:{title:"Gitlab\u4e2d\u5e38\u89c1\u7684\u6807\u7b7e",permalink:"/blog/2023/03/31/common-tags-in-gitlab"},nextItem:{title:"node.js v17\u53ca\u4ee5\u4e0a\u7248\u672c\u4f7f\u7528openssl v3.0\u5f15\u53d1\u7684\u54c8\u5e0c\u7b97\u6cd5\u9519\u8bef\u53ca\u5176\u89e3\u51b3\u65b9\u6cd5",permalink:"/blog/2023/03/30/fix-node-v17-upwards-openssl-hash-error"}},s={authorsImageUrls:[void 0]},m=[];function c(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["\u6700\u8fd1\u5728\u672c\u5730\u6784\u5efa",(0,o.jsx)(n.a,{href:"https://github.com/JetBrains/open-radiant",children:"open-radiant"}),"\u9879\u76ee.",(0,o.jsx)("br",{}),"\n\u8be5\u9879\u76ee\u662f",(0,o.jsx)(n.code,{children:"JetBrains"}),"\u5f00\u6e90\u7684\u4e00\u4e2a\u9879\u76ee, \u7528\u4e8e\u751f\u6210AI\u827a\u672f\u56fe\u7247, \u5728\u7ebf\u6f14\u793a\u5730\u5740\u4e3a: ",(0,o.jsx)(n.a,{href:"https://code2art.jetbrains.com/",children:"code2art"}),(0,o.jsx)("br",{}),"\n\u5728\u6784\u5efa\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u4e86\u4e00\u4e9b\u95ee\u9898.",(0,o.jsx)("br",{}),"\n\u5176\u4e2d\u7684\u4e00\u4e2a\u95ee\u9898\u662f\u5f53\u6267\u884c",(0,o.jsx)(n.code,{children:"elm make"}),"\u65f6\u4f9d\u8d56\u4e0b\u8f7d\u5931\u8d25, \u65e5\u5fd7\u5982\u4e0b:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-log",children:"Starting downloads...\n\n  \u25cf elm/json 1.1.3\n  \u25cf elm-community/list-extra 8.2.2\n  \u25cf elm/random 1.0.0\n  \u25cf elm/file 1.0.5\n  \u25cf elm/virtual-dom 1.0.2\n  \u25cf elm/parser 1.1.0\n  \u25cf rtfeldman/elm-iso8601-date-strings 1.1.3\n  \u25cf elm/url 1.0.0\n  \u25cf elm-community/random-extra 3.1.0\n  \u25cf elm-explorations/webgl 1.1.1\n  \u25cf elm/core 1.0.2\n  \u2717 elm/http 2.0.0\n  \u2717 owanturist/elm-union-find 1.0.0\n  \u2717 elm/bytes 1.0.8\n  \u2717 elm/svg 1.0.1\n  \u2717 avh4/elm-color 1.0.0\n  \u2717 elm/time 1.0.0\n  \u2717 elm-community/json-extra 4.2.0\n  \u2717 fredcy/elm-parseint 2.0.1\n  \u2717 noahzgordon/elm-color-extra 1.0.2\n  \u2717 elm/html 1.0.0\n  \u2717 elm/browser 1.0.2\n  \u2717 newlandsvalley/elm-binary-base64 1.0.3\n  \u2717 elm-community/easing-functions 2.0.0\n\nDependency problem!           \n-- PROBLEM DOWNLOADING PACKAGE -------------------------------------------------\n\nI was trying to download the source code for avh4/elm-color 1.0.0, so I tried to\nfetch:\n\n    https://github.com/avh4/elm-color/zipball/1.0.0/\n\nBut my HTTP library is giving me the following error message:\n\n    ConnectionTimeout\n\nAre you somewhere with a slow internet connection? Or no internet? Does the link\nI am trying to fetch work in your browser? Maybe the site is down? Does your\ninternet connection have a firewall that blocks certain domains? It is usually\nsomething like that!\n\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var o=t(67294);const a={},r=o.createContext(a);function l(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);