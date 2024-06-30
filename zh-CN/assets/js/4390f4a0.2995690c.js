"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[3670],{44559:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(74848),o=t(28453);const a={authors:["orange"],tags:["spring-boot","spring-data-jpa"]},s="\u901a\u8fc7\u5173\u95edOpenEntityManagerInViewInterceptor\u786e\u4fdd\u5f53\u4e0b\u6e38\u670d\u52a1\u54cd\u5e94\u7f13\u6162\u65f6\u4e0d\u4f1a\u5bfc\u81f4\u6570\u636e\u5e93\u8fde\u63a5\u88ab\u5360\u7528\u5b8c",i={permalink:"/zh-CN/blog/2023/05/15/to-ensure-that-database-connections-are-not-exhausted-when-downstream-services-respond-slowly-by-closing-open-session-inview",source:"@site/blog/2023-05-15-to-ensure-that-database-connections-are-not-exhausted-when-downstream-services-respond-slowly-by-closing-open-session-inview.md",title:"\u901a\u8fc7\u5173\u95edOpenEntityManagerInViewInterceptor\u786e\u4fdd\u5f53\u4e0b\u6e38\u670d\u52a1\u54cd\u5e94\u7f13\u6162\u65f6\u4e0d\u4f1a\u5bfc\u81f4\u6570\u636e\u5e93\u8fde\u63a5\u88ab\u5360\u7528\u5b8c",description:"OpenEntityManagerInViewInterceptor\u662fspring\u4e2d\u7684\u4e00\u4e2a\u62e6\u622a\u5668\uff0c\u5b83\u7684\u4f5c\u7528\u662f\u5728\u6574\u4e2a\u8bf7\u6c42\u4e0a\u4e0b\u6587\u590d\u7528\u540c\u4e00\u4e2aEntityManager",date:"2023-05-15T00:00:00.000Z",tags:[{inline:!0,label:"spring-boot",permalink:"/zh-CN/blog/tags/spring-boot"},{inline:!0,label:"spring-data-jpa",permalink:"/zh-CN/blog/tags/spring-data-jpa"}],readingTime:3.03,hasTruncateMarker:!0,authors:[{name:"orange",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"orange"}],frontMatter:{authors:["orange"],tags:["spring-boot","spring-data-jpa"]},unlisted:!1,prevItem:{title:"\u89e3\u51b3\u65e0\u6cd5\u8f93\u5165\u4e2d\u6587\u5b57\u7b26\u5230vscode",permalink:"/zh-CN/blog/2023/05/15/solve-unable-to-input-chinese-character-into-vscode"},nextItem:{title:"\u901a\u8fc7\u521b\u5efarsa\u683c\u5f0f\u7684\u79c1\u94a5\u4ee5\u53ca\u670d\u52a1\u7aef\u542f\u7528rsa\u8ba4\u8bc1\u89e3\u51b3jsch\u8fde\u63a5ssh\u5931\u8d25\u7684\u95ee\u9898",permalink:"/zh-CN/blog/2023/05/05/solve-jsch-ssh-connection-failure-by-creating-rsa-private-key-and-enabling-rsa-authentication-on-server"}},c={authorsImageUrls:[void 0]},p=[];function l(e){const n={code:"code",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"OpenEntityManagerInViewInterceptor"}),"\u662f",(0,r.jsx)(n.code,{children:"spring"}),"\u4e2d\u7684\u4e00\u4e2a\u62e6\u622a\u5668\uff0c\u5b83\u7684\u4f5c\u7528\u662f\u5728\u6574\u4e2a\u8bf7\u6c42\u4e0a\u4e0b\u6587\u590d\u7528\u540c\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"EntityManager"}),"\n\uff0c\u4ece\u800c\u907f\u514d\u5728\u4e00\u4e2a\u8bf7\u6c42\u4e2d\u591a\u6b21\u521b\u5efa\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"EntityManager"}),", \u4ece\u800c\u63d0\u9ad8\u6027\u80fd.",(0,r.jsx)("br",{}),"\n\u4f46\u662f\u5982\u679c\u5728\u4e00\u4e2a\u8bf7\u6c42\u7684\u5904\u7406\u4ee3\u7801\u4e2d\u8bf7\u6c42\u4e86\u4e0b\u6e38\u670d\u52a1\uff0c\u800c\u4e0b\u6e38\u670d\u52a1\u54cd\u5e94\u7f13\u6162\uff0c\u90a3\u4e48\u5728\u4e0b\u6e38\u670d\u52a1\u54cd\u5e94\u4e4b\u524d\uff0c",(0,r.jsx)(n.code,{children:"EntityManager"}),"\n\u4f1a\u4e00\u76f4\u88ab\u5360\u7528\uff0c\u76f4\u5230\u6574\u4e2a\u8bf7\u6c42\u5904\u7406\u5b8c\u6210\uff0c\u8fd9\u6837\u4f1a\u5bfc\u81f4\u5f53\u670d\u52a1\u5e76\u53d1\u8bf7\u6c42\u91cf\u8f83\u5927\u65f6\uff0c\u6570\u636e\u5e93\u8fde\u63a5\u88ab\u5360\u7528\u5b8c.",(0,r.jsx)("br",{}),"\n\u4e3a\u4e86\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u53ef\u4ee5\u901a\u8fc7\u5173\u95ed",(0,r.jsx)(n.code,{children:"OpenEntityManagerInViewInterceptor"}),"\u6765\u786e\u4fdd\u5f53\u4e0b\u6e38\u670d\u52a1\u54cd\u5e94\u7f13\u6162\u65f6\u4e0d\u4f1a\u5bfc\u81f4\u6570\u636e\u5e93\u8fde\u63a5\u88ab\u5360\u7528\u5b8c.\n\u4e0b\u9762\u5c06\u4ecb\u7ecd\u5982\u4f55\u5173\u95ed",(0,r.jsx)(n.code,{children:"OpenEntityManagerInViewInterceptor"}),".",(0,r.jsx)("br",{})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(96540);const o={},a=r.createContext(o);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);