"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[35195],{33155:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(74848),o=t(28453);const a={authors:["orange"],tags:["naming"]},s="\u5e38\u89c1\u7684\u547d\u540d\u524d\u7f00",i={permalink:"/blog/2023/02/23/naming-pattern-prefix",source:"@site/blog/2023-02-23-naming-pattern-prefix.md",title:"\u5e38\u89c1\u7684\u547d\u540d\u524d\u7f00",description:"\u5728\u7f16\u7a0b\u4e2d, \u547d\u540d\u662f\u4e00\u4ef6\u975e\u5e38\u91cd\u8981\u7684\u4e8b\u60c5, \u597d\u7684\u547d\u540d\u80fd\u591f\u8ba9\u4ee3\u7801\u66f4\u52a0\u6613\u8bfb, \u4e5f\u80fd\u591f\u8ba9\u4ee3\u7801\u66f4\u52a0\u6613\u4e8e\u7ef4\u62a4.",date:"2023-02-23T00:00:00.000Z",tags:[{inline:!0,label:"naming",permalink:"/blog/tags/naming"}],readingTime:8.93,hasTruncateMarker:!0,authors:[{name:"orange",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"orange"}],frontMatter:{authors:["orange"],tags:["naming"]},unlisted:!1,prevItem:{title:"\u542f\u7528SSH\u5bc6\u7801\u9a8c\u8bc1",permalink:"/blog/2023/02/24/enable-sshd-password-authentication"},nextItem:{title:"springdoc-v2\u4e2d\u5728\u4e0d\u914d\u7f6e@ParameterObject\u7684\u60c5\u51b5\u4e0b\u5b9e\u73b0Pageable\u4ee5\u53caSort\u5bf9\u8c61\u5230API\u53c2\u6570\u7684\u8f6c\u6362",permalink:"/blog/2023/02/22/springdoc-v2-parameter-object"}},l={authorsImageUrls:[void 0]},c=[];function m(n){const e={code:"code",li:"li",p:"p",ul:"ul",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:["\u5728\u7f16\u7a0b\u4e2d, \u547d\u540d\u662f\u4e00\u4ef6\u975e\u5e38\u91cd\u8981\u7684\u4e8b\u60c5, \u597d\u7684\u547d\u540d\u80fd\u591f\u8ba9\u4ee3\u7801\u66f4\u52a0\u6613\u8bfb, \u4e5f\u80fd\u591f\u8ba9\u4ee3\u7801\u66f4\u52a0\u6613\u4e8e\u7ef4\u62a4.",(0,r.jsx)("br",{}),"\n\u901a\u5e38\u6211\u4eec\u5728\u9605\u8bfb\u7b2c\u4e09\u65b9\u5e93\u7684\u4ee3\u7801\u65f6, \u4f1a\u53d1\u73b0\u5f88\u591a\u65b9\u6cd5\u7684\u547d\u540d\u90fd\u662f\u4ee5\u4e00\u4e9b\u56fa\u5b9a\u7684\u547d\u540d\u524d\u7f00\u5f00\u5934\u7684.",(0,r.jsx)("br",{}),"\n\u672c\u6587\u4e3b\u8981\u603b\u7ed3\u76ee\u524d\u6211\u6240\u4e86\u89e3\u7684\u4e00\u4e9b\u5e38\u89c1\u7684\u547d\u540d\u524d\u7f00\u7684\u542b\u4e49. \u5e76\u5bf9\u5176\u8fdb\u884c\u5206\u7c7b, \u5927\u81f4\u7684\u5206\u7c7b\u4e3b\u8981\u5982\u4e0b.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5bf9\u8c61\u7684\u521b\u5efa"}),"\n",(0,r.jsx)(e.li,{children:"\u5bf9\u8c61\u7684\u5c5e\u6027\u548c\u72b6\u6001"}),"\n",(0,r.jsx)(e.li,{children:"\u5bf9\u8c61\u7684\u5143\u7d20\u64cd\u4f5c"}),"\n",(0,r.jsx)(e.li,{children:"\u5176\u4ed6"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5bf9\u4e8e\u6bcf\u79cd\u547d\u540d\u89c4\u5219, \u6211\u90fd\u4f1a\u7ed9\u51fa\u81ea\u5b9a\u4e49\u7684\u4f8b\u5b50, \u540c\u65f6\u4e5f\u4f1a\u9644\u5e26\u7b2c\u4e09\u65b9\u5e93\u4e2d\u7684\u73b0\u6709\u6848\u4f8b\u4ee5\u4fbf\u4e8e\u66f4\u597d\u7684\u7406\u89e3.",(0,r.jsx)("br",{}),"\n\u4ee3\u7801\u4ee5",(0,r.jsx)(e.code,{children:"kotlin"}),"\u5b9e\u73b0, \u4f46\u662f\u5927\u90e8\u5206\u7684\u547d\u540d\u89c4\u5219\u90fd\u662f\u901a\u7528\u7684, \u4e5f\u9002\u7528\u4e8e\u5176\u4ed6\u7684\u8bed\u8a00.",(0,r.jsx)("br",{})]})]})}function p(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(m,{...n})}):m(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>i});var r=t(96540);const o={},a=r.createContext(o);function s(n){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),r.createElement(a.Provider,{value:e},n.children)}}}]);