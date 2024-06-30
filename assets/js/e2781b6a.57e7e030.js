"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[16553],{94529:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=o(74848),i=o(28453);const s={authors:["orange"],tags:["problem-solving","golang","kopia","volcengine","tos","s3"]},a="kopia\u63a5\u5165\u706b\u5c71\u4e91TOS\u62a5\u9519Access Denied\u95ee\u9898\u7684\u6392\u67e5\u53ca\u4fee\u590d",l={permalink:"/blog/2024/03/14/kopia-integration-with-volcano-cloud-tos-access-denied-issue-investigation-and-fix",source:"@site/blog/2024-03-14-kopia-integration-with-volcano-cloud-tos-access-denied-issue-investigation-and-fix.md",title:"kopia\u63a5\u5165\u706b\u5c71\u4e91TOS\u62a5\u9519Access Denied\u95ee\u9898\u7684\u6392\u67e5\u53ca\u4fee\u590d",description:"kopia\u662f\u4e00\u4e2a\u5907\u4efd\u5de5\u5177, \u652f\u6301\u591a\u79cd\u5b58\u50a8\u540e\u7aef, \u5305\u62ec\u5bf9\u8c61\u5b58\u50a8, \u6587\u4ef6\u7cfb\u7edf\u7b49,",date:"2024-03-14T00:00:00.000Z",tags:[{inline:!0,label:"problem-solving",permalink:"/blog/tags/problem-solving"},{inline:!0,label:"golang",permalink:"/blog/tags/golang"},{inline:!0,label:"kopia",permalink:"/blog/tags/kopia"},{inline:!0,label:"volcengine",permalink:"/blog/tags/volcengine"},{inline:!0,label:"tos",permalink:"/blog/tags/tos"},{inline:!0,label:"s3",permalink:"/blog/tags/s-3"}],readingTime:2.58,hasTruncateMarker:!0,authors:[{name:"orange",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"orange"}],frontMatter:{authors:["orange"],tags:["problem-solving","golang","kopia","volcengine","tos","s3"]},unlisted:!1,prevItem:{title:"\u4f7f\u7528apache-httpclient5\u5e76\u901a\u8fc7DNS\u8bf7\u6c42\u670d\u52a1\u5982\u679c\u57df\u540d\u4e0d\u7b26\u5408FQDN\u89c4\u8303\u5bfc\u81f4\u62a5\u9519NullPointerException\u7684\u95ee\u9898\u7684\u6392\u67e5\u53ca\u4fee\u590d",permalink:"/blog/2024/03/15/troubleshooting-and-fixing-null-pointer-exception-when-using-apache-httpclient5-for-dns-requests-for-services-with-non-compliant-fqdn"},nextItem:{title:"\u5347\u7ea7\u6846\u67b6\u540e\u53d1\u73b0Feign\u8c03\u7528\u5931\u8d25\u65f6\u95f4\u683c\u5f0f\u5316\u95ee\u9898\u7684\u6392\u67e5\u548c\u89e3\u51b3",permalink:"/blog/2023/12/22/openfeign-zoned-datetime-formatting-problem"}},r={authorsImageUrls:[void 0]},c=[];function g(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"kopia"}),"\u662f\u4e00\u4e2a\u5907\u4efd\u5de5\u5177, \u652f\u6301\u591a\u79cd\u5b58\u50a8\u540e\u7aef, \u5305\u62ec",(0,t.jsx)(n.code,{children:"\u5bf9\u8c61\u5b58\u50a8"}),", ",(0,t.jsx)(n.code,{children:"\u6587\u4ef6\u7cfb\u7edf"}),"\u7b49,\n\u901a\u8fc7kopia\u53ef\u4ee5\u5c06\u6570\u636e\u5907\u4efd\u5230\u4e0d\u540c\u7684\u5b58\u50a8\u540e\u7aef, \u4e5f\u53ef\u4ee5\u4ece\u4e0d\u540c\u7684\u5b58\u50a8\u540e\u7aef\u6062\u590d\u6570\u636e.\n\u706b\u5c71\u4e91",(0,t.jsx)(n.code,{children:"TOS"}),"\u662f\u706b\u5c71\u4e91\u63d0\u4f9b\u7684\u5bf9\u8c61\u5b58\u50a8\u670d\u52a1, \u652f\u6301\u901a\u8fc7",(0,t.jsx)(n.code,{children:"S3"}),"\u534f\u8bae\u8bbf\u95ee.\n\u6700\u8fd1\u5728\u4f7f\u7528kopia\u63a5\u5165\u706b\u5c71\u4e91",(0,t.jsx)(n.code,{children:"TOS"}),"\u65f6, \u9047\u5230\u4e86\u4e00\u4e2a\u95ee\u9898, \u95ee\u9898\u7684\u73b0\u8c61\u662f\u8c03\u7528",(0,t.jsx)(n.code,{children:"kopia"}),"\u63d0\u4f9b\u7684",(0,t.jsx)(n.code,{children:"s3_storage"}),"\u63a5\u5165\u706b\u5c71\u4e91TOS\u65f6, \u62a5\u9519",(0,t.jsx)(n.code,{children:"Access Denied."})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-log",children:'unable to determine if bucket "xxxxx" exists: Access Denied.\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u8be5\u95ee\u9898\u7684\u539f\u56e0\u53ca\u89e3\u51b3\u65b9\u6848\u603b\u7ed3."})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>l});var t=o(96540);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);