"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[6141],{61953:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>r});var s=o(85893),i=o(11151);const t={authors:["xiangcheng.kuo"],tags:["problem-solving","golang","kopia","volcengine","tos","s3"]},l="kopia\u63a5\u5165\u706b\u5c71\u4e91TOS\u62a5\u9519Access Denied\u95ee\u9898\u7684\u6392\u67e5\u53ca\u4fee\u590d",c={permalink:"/blog/2024/03/14/kopia-integration-with-volcano-cloud-tos-access-denied-issue-investigation-and-fix",source:"@site/blog/2024-03-14/kopia-integration-with-volcano-cloud-tos-access-denied-issue-investigation-and-fix.md",title:"kopia\u63a5\u5165\u706b\u5c71\u4e91TOS\u62a5\u9519Access Denied\u95ee\u9898\u7684\u6392\u67e5\u53ca\u4fee\u590d",description:"kopia\u662f\u4e00\u4e2a\u5907\u4efd\u5de5\u5177, \u652f\u6301\u591a\u79cd\u5b58\u50a8\u540e\u7aef, \u5305\u62ec\u5bf9\u8c61\u5b58\u50a8, \u6587\u4ef6\u7cfb\u7edf\u7b49,",date:"2024-03-14T00:00:00.000Z",formattedDate:"March 14, 2024",tags:[{label:"problem-solving",permalink:"/blog/tags/problem-solving"},{label:"golang",permalink:"/blog/tags/golang"},{label:"kopia",permalink:"/blog/tags/kopia"},{label:"volcengine",permalink:"/blog/tags/volcengine"},{label:"tos",permalink:"/blog/tags/tos"},{label:"s3",permalink:"/blog/tags/s-3"}],readingTime:2.54,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","golang","kopia","volcengine","tos","s3"]},unlisted:!1,nextItem:{title:"\u5347\u7ea7\u6846\u67b6\u540e\u53d1\u73b0Feign\u8c03\u7528\u5931\u8d25\u65f6\u95f4\u683c\u5f0f\u5316\u95ee\u9898\u7684\u6392\u67e5\u548c\u89e3\u51b3",permalink:"/blog/2023/12/22/openfeign-zoned-datetime-formatting-problem"}},a={authorsImageUrls:[void 0]},r=[{value:"\u95ee\u9898\u539f\u56e0",id:"\u95ee\u9898\u539f\u56e0",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"kopia"}),"\u662f\u4e00\u4e2a\u5907\u4efd\u5de5\u5177, \u652f\u6301\u591a\u79cd\u5b58\u50a8\u540e\u7aef, \u5305\u62ec",(0,s.jsx)(n.code,{children:"\u5bf9\u8c61\u5b58\u50a8"}),", ",(0,s.jsx)(n.code,{children:"\u6587\u4ef6\u7cfb\u7edf"}),"\u7b49,\n\u901a\u8fc7kopia\u53ef\u4ee5\u5c06\u6570\u636e\u5907\u4efd\u5230\u4e0d\u540c\u7684\u5b58\u50a8\u540e\u7aef, \u4e5f\u53ef\u4ee5\u4ece\u4e0d\u540c\u7684\u5b58\u50a8\u540e\u7aef\u6062\u590d\u6570\u636e.\n\u706b\u5c71\u4e91TOS\u662f\u706b\u5c71\u4e91\u63d0\u4f9b\u7684\u5bf9\u8c61\u5b58\u50a8\u670d\u52a1, \u652f\u6301s3\u534f\u8bae.\n\u6700\u8fd1\u5728\u4f7f\u7528kopia\u63a5\u5165\u706b\u5c71\u4e91TOS\u65f6, \u9047\u5230\u4e86\u4e00\u4e2a\u95ee\u9898, \u95ee\u9898\u7684\u73b0\u8c61\u662f\u8c03\u7528kopia\u63d0\u4f9b\u7684s3_storage\u63a5\u5165\u706b\u5c71\u4e91TOS\u65f6, \u62a5\u9519Access Denied."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-log",children:'unable to determine if bucket "xxxxx" exists: Access Denied.\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u8be5\u95ee\u9898\u7684\u539f\u56e0\u53ca\u89e3\u51b3\u65b9\u6848\u603b\u7ed3."}),"\n",(0,s.jsx)(n.h2,{id:"\u95ee\u9898\u539f\u56e0",children:"\u95ee\u9898\u539f\u56e0"}),"\n",(0,s.jsxs)(n.p,{children:["\u706b\u5c71\u4e91\u5bf9",(0,s.jsx)(n.code,{children:"S3"}),"\u534f\u8bae\u53ea\u6709\u90e8\u5206\u5b9e\u73b0.\n\u4ee5\u8bf7\u6c42\u65b9\u5f0f\u4e3a\u4f8b, \u53ea\u652f\u6301",(0,s.jsx)(n.code,{children:"Virtual Hosted-Style"}),"\u7684\u8bf7\u6c42\u65b9\u5f0f, \u4e0d\u652f\u6301",(0,s.jsx)(n.code,{children:"Path-Style"}),"\u7684\u8bf7\u6c42\u65b9\u5f0f."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4e0a\u8ff0\u4e24\u79cd\u8bf7\u6c42\u65b9\u5f0f\u4e3b\u8981\u7528\u4e8e\u533a\u5206\u5bf9\u4e0d\u540c\u7684\u5b58\u50a8\u6876\u8fdb\u884c\u64cd\u4f5c.\n",(0,s.jsx)(n.code,{children:"Virtual Hosted-Style"}),":\n\u8fd9\u79cd\u8bf7\u6c42\u65b9\u5f0f\u662f\u901a\u8fc7\u5728\u57df\u540d\u4e2d\u6307\u5b9a\u5b58\u50a8\u6876\u540d\u79f0\u6765\u8fdb\u884c\u64cd\u4f5c, \u5982",(0,s.jsx)(n.code,{children:"https://{bucket-name}.s3.{region-code}.amazonaws.com"}),".\n",(0,s.jsx)(n.code,{children:"Path-Style"}),":\n\u8fd9\u79cd\u8bf7\u6c42\u65b9\u5f0f\u662f\u901a\u8fc7\u5728\u57df\u540d\u540e\u9762\u6307\u5b9a\u5b58\u50a8\u6876\u540d\u79f0\u6765\u8fdb\u884c\u64cd\u4f5c, \u5982`",(0,s.jsx)(n.a,{href:"https://s3.%7Bregion-code%7D.amazonaws.com/%7Bbucket-name%7D",children:"https://s3.{region-code}.amazonaws.com/{bucket-name}"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"kopia"}),"\u901a\u8fc7",(0,s.jsx)(n.code,{children:"minio"}),"\u5b9e\u73b0\u4e86\u5bf9s3\u534f\u8bae\u7684\u652f\u6301, ",(0,s.jsx)(n.code,{children:"minio"}),"\u4e2d\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f7f\u7528",(0,s.jsx)(n.code,{children:"Path-Style"}),"\u7684\u8bf7\u6c42\u65b9\u5f0f,\n\u6240\u4ee5\u5bfc\u81f4\u4e86",(0,s.jsx)(n.code,{children:"Access Denied"}),"\u7684\u95ee\u9898."]}),"\n",(0,s.jsx)(n.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"minio"}),"\u5728\u521b\u5efa",(0,s.jsx)(n.code,{children:"client"}),"\u7684\u65f6\u5019\u63d0\u4f9b\u4e86",(0,s.jsx)(n.code,{children:"BucketLookup"}),"\u9009\u9879, \u7528\u4e8e\u6307\u5b9a",(0,s.jsx)(n.code,{children:"client"}),"\u4f7f\u7528\u7684\u8bf7\u6c42\u65b9\u5f0f, \u4f46\u662f",(0,s.jsx)(n.code,{children:"kopia"}),"\u6ca1\u6709\u66b4\u9732\u8fd9\u4e2a\u9009\u9879.",(0,s.jsx)("br",{}),"\n\u76ee\u524d\u5df2\u5728",(0,s.jsx)(n.code,{children:"kopia"}),"\u7684",(0,s.jsx)(n.code,{children:"repo"}),"\u4e2d\u5f00\u4e86\u4e00\u4e2a",(0,s.jsx)(n.a,{href:"https://github.com/kopia/kopia/issues/3734",children:"issue"}),", \u9700\u8981\u7b49\u5f85\u540e\u7eed\u7684\u8fdb\u5c55."]}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.volcengine.com/docs/6349/147050",children:"AWS S3 \u534f\u8bae\u517c\u5bb9\u6027\u8bf4\u660e"})}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"TOS \u4ec5\u652f\u6301\u4f7f\u7528\u865a\u62df\u4e3b\u673a\uff08\u5373 VirtualHostStyle\uff09\u7684\u8bf7\u6c42\u65b9\u5f0f\uff0c\u4e0d\u652f\u6301\u8def\u5f84\u6837\u5f0f\uff08\u5373 PathStyle\uff09\u7684\u8bf7\u6c42\u65b9\u5f0f\u3002\u56e0\u6b64\u4f7f\u7528\u5404\u79cd\u652f\u6301 S3 \u534f\u8bae\u7684\nSDK \u548c\u5de5\u5177\u8bbf\u95ee TOS \u65f6\uff0c\u8bf7\u52a1\u5fc5\u786e\u4fdd\u914d\u7f6e\u4e86 VirtualHostStyle \u7684\u8bf7\u6c42\u65b9\u5f0f\u3002\u4f8b\u5982\uff0c\u4f7f\u7528 AWS S3 Java SDK \u65f6\uff0c\u9700\u8981\u5728\u5ba2\u6237\u7aef\u521d\u59cb\u5316\u65f6\u786e\u4fdd\u8bbe\u7f6e\u4e86\u7981\u7528\nPathStyle \u7684\u914d\u7f6e\u53c2\u6570\uff1aAmazonS3Builder.withPathStyleAccessEnabled(false)\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html?spm=a2c4g.11186623.0.0.6b9d64012JMDoP",children:"Virtual hosting of buckets"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/kopia/kopia/issues/3734",children:"Custmize minio creation options"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>l});var s=o(67294);const i={},t=s.createContext(i);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);