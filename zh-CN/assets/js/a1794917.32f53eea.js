"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[7529],{47168:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=o(85893),a=o(11151);const i={authors:["xiangcheng.kuo"],tags:["problem-solving","golang","kopia","volcengine","tos","s3"]},s="kopia\u63a5\u5165\u706b\u5c71\u4e91TOS\u62a5\u9519Access Denied\u95ee\u9898\u7684\u6392\u67e5\u53ca\u4fee\u590d",l={permalink:"/zh-CN/blog/2024/03/14/kopia-integration-with-volcano-cloud-tos-access-denied-issue-investigation-and-fix",source:"@site/blog/2024-03-14/kopia-integration-with-volcano-cloud-tos-access-denied-issue-investigation-and-fix.md",title:"kopia\u63a5\u5165\u706b\u5c71\u4e91TOS\u62a5\u9519Access Denied\u95ee\u9898\u7684\u6392\u67e5\u53ca\u4fee\u590d",description:"kopia\u662f\u4e00\u4e2a\u5907\u4efd\u5de5\u5177, \u652f\u6301\u591a\u79cd\u5b58\u50a8\u540e\u7aef, \u5305\u62ec\u5bf9\u8c61\u5b58\u50a8, \u6587\u4ef6\u7cfb\u7edf\u7b49,",date:"2024-03-14T00:00:00.000Z",tags:[{label:"problem-solving",permalink:"/zh-CN/blog/tags/problem-solving"},{label:"golang",permalink:"/zh-CN/blog/tags/golang"},{label:"kopia",permalink:"/zh-CN/blog/tags/kopia"},{label:"volcengine",permalink:"/zh-CN/blog/tags/volcengine"},{label:"tos",permalink:"/zh-CN/blog/tags/tos"},{label:"s3",permalink:"/zh-CN/blog/tags/s-3"}],readingTime:2.58,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","golang","kopia","volcengine","tos","s3"]},unlisted:!1,prevItem:{title:"\u542f\u7528Wayland",permalink:"/zh-CN/blog/2024/03/27/enalbe-wayland"},nextItem:{title:"\u5347\u7ea7\u6846\u67b6\u540e\u53d1\u73b0Feign\u8c03\u7528\u5931\u8d25\u65f6\u95f4\u683c\u5f0f\u5316\u95ee\u9898\u7684\u6392\u67e5\u548c\u89e3\u51b3",permalink:"/zh-CN/blog/2023/12/22/openfeign-zoned-datetime-formatting-problem"}},r={authorsImageUrls:[void 0]},c=[];function g(e){const n={code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"kopia"}),"\u662f\u4e00\u4e2a\u5907\u4efd\u5de5\u5177, \u652f\u6301\u591a\u79cd\u5b58\u50a8\u540e\u7aef, \u5305\u62ec",(0,t.jsx)(n.code,{children:"\u5bf9\u8c61\u5b58\u50a8"}),", ",(0,t.jsx)(n.code,{children:"\u6587\u4ef6\u7cfb\u7edf"}),"\u7b49,\n\u901a\u8fc7kopia\u53ef\u4ee5\u5c06\u6570\u636e\u5907\u4efd\u5230\u4e0d\u540c\u7684\u5b58\u50a8\u540e\u7aef, \u4e5f\u53ef\u4ee5\u4ece\u4e0d\u540c\u7684\u5b58\u50a8\u540e\u7aef\u6062\u590d\u6570\u636e.\n\u706b\u5c71\u4e91",(0,t.jsx)(n.code,{children:"TOS"}),"\u662f\u706b\u5c71\u4e91\u63d0\u4f9b\u7684\u5bf9\u8c61\u5b58\u50a8\u670d\u52a1, \u652f\u6301\u901a\u8fc7",(0,t.jsx)(n.code,{children:"S3"}),"\u534f\u8bae\u8bbf\u95ee.\n\u6700\u8fd1\u5728\u4f7f\u7528kopia\u63a5\u5165\u706b\u5c71\u4e91",(0,t.jsx)(n.code,{children:"TOS"}),"\u65f6, \u9047\u5230\u4e86\u4e00\u4e2a\u95ee\u9898, \u95ee\u9898\u7684\u73b0\u8c61\u662f\u8c03\u7528",(0,t.jsx)(n.code,{children:"kopia"}),"\u63d0\u4f9b\u7684",(0,t.jsx)(n.code,{children:"s3_storage"}),"\u63a5\u5165\u706b\u5c71\u4e91TOS\u65f6, \u62a5\u9519",(0,t.jsx)(n.code,{children:"Access Denied."})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-log",children:'unable to determine if bucket "xxxxx" exists: Access Denied.\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u8be5\u95ee\u9898\u7684\u539f\u56e0\u53ca\u89e3\u51b3\u65b9\u6848\u603b\u7ed3."})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>s});var t=o(67294);const a={},i=t.createContext(a);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);