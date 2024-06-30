"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[69771],{56333:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=r(74848),i=r(28453);const s={authors:["orange"],tags:["spring-boot","spring-data-jpa"]},o="\u901a\u8fc7\u5173\u95edOpenEntityManagerInViewInterceptor\u786e\u4fdd\u5f53\u4e0b\u6e38\u670d\u52a1\u54cd\u5e94\u7f13\u6162\u65f6\u4e0d\u4f1a\u5bfc\u81f4\u6570\u636e\u5e93\u8fde\u63a5\u88ab\u5360\u7528\u5b8c",a={permalink:"/zh-CN/blog/2023/05/15/to-ensure-that-database-connections-are-not-exhausted-when-downstream-services-respond-slowly-by-closing-open-session-inview",source:"@site/blog/2023-05-15-to-ensure-that-database-connections-are-not-exhausted-when-downstream-services-respond-slowly-by-closing-open-session-inview.md",title:"\u901a\u8fc7\u5173\u95edOpenEntityManagerInViewInterceptor\u786e\u4fdd\u5f53\u4e0b\u6e38\u670d\u52a1\u54cd\u5e94\u7f13\u6162\u65f6\u4e0d\u4f1a\u5bfc\u81f4\u6570\u636e\u5e93\u8fde\u63a5\u88ab\u5360\u7528\u5b8c",description:"OpenEntityManagerInViewInterceptor\u662fspring\u4e2d\u7684\u4e00\u4e2a\u62e6\u622a\u5668\uff0c\u5b83\u7684\u4f5c\u7528\u662f\u5728\u6574\u4e2a\u8bf7\u6c42\u4e0a\u4e0b\u6587\u590d\u7528\u540c\u4e00\u4e2aEntityManager",date:"2023-05-15T00:00:00.000Z",tags:[{inline:!0,label:"spring-boot",permalink:"/zh-CN/blog/tags/spring-boot"},{inline:!0,label:"spring-data-jpa",permalink:"/zh-CN/blog/tags/spring-data-jpa"}],readingTime:3.03,hasTruncateMarker:!0,authors:[{name:"orange",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"orange"}],frontMatter:{authors:["orange"],tags:["spring-boot","spring-data-jpa"]},unlisted:!1,prevItem:{title:"\u89e3\u51b3\u65e0\u6cd5\u8f93\u5165\u4e2d\u6587\u5b57\u7b26\u5230vscode",permalink:"/zh-CN/blog/2023/05/15/solve-unable-to-input-chinese-character-into-vscode"},nextItem:{title:"\u901a\u8fc7\u521b\u5efarsa\u683c\u5f0f\u7684\u79c1\u94a5\u4ee5\u53ca\u670d\u52a1\u7aef\u542f\u7528rsa\u8ba4\u8bc1\u89e3\u51b3jsch\u8fde\u63a5ssh\u5931\u8d25\u7684\u95ee\u9898",permalink:"/zh-CN/blog/2023/05/05/solve-jsch-ssh-connection-failure-by-creating-rsa-private-key-and-enabling-rsa-authentication-on-server"}},c={authorsImageUrls:[void 0]},l=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"OpenEntityManagerInViewInterceptor"}),"\u662f",(0,t.jsx)(e.code,{children:"spring"}),"\u4e2d\u7684\u4e00\u4e2a\u62e6\u622a\u5668\uff0c\u5b83\u7684\u4f5c\u7528\u662f\u5728\u6574\u4e2a\u8bf7\u6c42\u4e0a\u4e0b\u6587\u590d\u7528\u540c\u4e00\u4e2a",(0,t.jsx)(e.code,{children:"EntityManager"}),"\n\uff0c\u4ece\u800c\u907f\u514d\u5728\u4e00\u4e2a\u8bf7\u6c42\u4e2d\u591a\u6b21\u521b\u5efa\u4e00\u4e2a",(0,t.jsx)(e.code,{children:"EntityManager"}),", \u4ece\u800c\u63d0\u9ad8\u6027\u80fd.",(0,t.jsx)("br",{}),"\n\u4f46\u662f\u5982\u679c\u5728\u4e00\u4e2a\u8bf7\u6c42\u7684\u5904\u7406\u4ee3\u7801\u4e2d\u8bf7\u6c42\u4e86\u4e0b\u6e38\u670d\u52a1\uff0c\u800c\u4e0b\u6e38\u670d\u52a1\u54cd\u5e94\u7f13\u6162\uff0c\u90a3\u4e48\u5728\u4e0b\u6e38\u670d\u52a1\u54cd\u5e94\u4e4b\u524d\uff0c",(0,t.jsx)(e.code,{children:"EntityManager"}),"\n\u4f1a\u4e00\u76f4\u88ab\u5360\u7528\uff0c\u76f4\u5230\u6574\u4e2a\u8bf7\u6c42\u5904\u7406\u5b8c\u6210\uff0c\u8fd9\u6837\u4f1a\u5bfc\u81f4\u5f53\u670d\u52a1\u5e76\u53d1\u8bf7\u6c42\u91cf\u8f83\u5927\u65f6\uff0c\u6570\u636e\u5e93\u8fde\u63a5\u88ab\u5360\u7528\u5b8c.",(0,t.jsx)("br",{}),"\n\u4e3a\u4e86\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u53ef\u4ee5\u901a\u8fc7\u5173\u95ed",(0,t.jsx)(e.code,{children:"OpenEntityManagerInViewInterceptor"}),"\u6765\u786e\u4fdd\u5f53\u4e0b\u6e38\u670d\u52a1\u54cd\u5e94\u7f13\u6162\u65f6\u4e0d\u4f1a\u5bfc\u81f4\u6570\u636e\u5e93\u8fde\u63a5\u88ab\u5360\u7528\u5b8c.\n\u4e0b\u9762\u5c06\u4ecb\u7ecd\u5982\u4f55\u5173\u95ed",(0,t.jsx)(e.code,{children:"OpenEntityManagerInViewInterceptor"}),".",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(e.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,t.jsxs)(e.p,{children:["\u5728",(0,t.jsx)(e.code,{children:"spring-boot"}),"\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e",(0,t.jsx)(e.code,{children:"spring.jpa.open-in-view"}),"\u4e3a",(0,t.jsx)(e.code,{children:"false"}),"\u6765\u5173\u95ed",(0,t.jsx)(e.code,{children:"OpenEntityManagerInViewInterceptor"}),"\uff0c\u793a\u4f8b\u5982\u4e0b"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-yaml",metastring:'title="application.yml"',children:"spring:\n  jpa:\n    open-in-view: false\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u5907\u6ce8",children:"\u5907\u6ce8"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"org.springframework.orm.hibernate5.support.OpenSessionInViewInterceptor"}),"\u5728\u8bf7\u6c42\u5f00\u59cb\u65f6\u4f1a\u521b\u5efa\u4e00\u4e2a",(0,t.jsx)(e.code,{children:"EntityManager"}),"\n\u5e76\u8c03\u7528",(0,t.jsx)(e.code,{children:"org.springframework.transaction.support.TransactionSynchronizationManager.bindResource"}),"\n\u65b9\u6cd5\u6765\u7ed1\u5b9a",(0,t.jsx)(e.code,{children:"EntityManager"}),"\u5230\u5f53\u524d\u7ebf\u7a0b"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u540e\u7eed\u6846\u67b6\u5185\u90e8\u7684\u8c03\u7528\u4f8b\u5982",(0,t.jsx)(e.code,{children:"Repository.findAll()"}),"\u7684\u5927\u81f4\u8c03\u7528\u94fe\u8def\u5982\u4e0b"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Repository.findAll()"}),"\n",(0,t.jsx)(e.li,{children:"org.springframework.orm.jpa.SharedEntityManagerCreator.SharedEntityManagerInvocationHandler.invoke"}),"\n",(0,t.jsx)(e.li,{children:"org.springframework.orm.jpa.EntityManagerFactoryUtils.doGetTransactionalEntityManager"}),"\n",(0,t.jsxs)(e.li,{children:["org.springframework.transaction.support.TransactionSynchronizationManager.getResource\n",(0,t.jsx)("br",{}),"\u56e0\u4e3a\u5728\u8bf7\u6c42\u5f00\u59cb\u65f6\u5df2\u7ecf\u5c06",(0,t.jsx)(e.code,{children:"EntityManager"}),"\u7ed1\u5b9a\u5230\u5f53\u524d\u7ebf\u7a0b\uff0c\u6240\u4ee5\u8fd9\u91cc\u4f1a\u83b7\u53d6\u5230\u4e4b\u524d\u521b\u5efa\u7684",(0,t.jsx)(e.code,{children:"EntityManager"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u540e\u7eed\u6267\u884c",(0,t.jsx)(e.code,{children:"query"}),"\u65f6\u4f1a\u4ece",(0,t.jsx)(e.code,{children:"DataSource"}),"\u4e2d\u83b7\u53d6\u4e00\u4e2a\u6570\u636e\u5e93\u8fde\u63a5\uff0c\u7136\u540e\u6267\u884c\u67e5\u8be2\uff0c\u67e5\u8be2\u5b8c\u6210\u540e\uff0c\u6570\u636e\u5e93\u8fde\u63a5\u4e0d\u4f1a\u7acb\u5373\u5173\u95ed\uff0c\n\u800c\u662f\u5728",(0,t.jsx)(e.code,{children:"EntityManager"}),"\u88ab\u5173\u95ed\u65f6\u5173\u95ed\uff0c\u800c",(0,t.jsx)(e.code,{children:"EntityManager"}),"\u4f1a\u5728",(0,t.jsx)(e.code,{children:"OpenEntityManagerInViewInterceptor"}),"\u88ab\u5173\u95ed\u65f6\u5173\u95ed."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["\u7efc\u4e0a\u6240\u8ff0\uff0c\u5f53",(0,t.jsx)(e.code,{children:"OpenEntityManagerInViewInterceptor"}),"\u88ab\u5173\u95ed\u65f6\uff0c",(0,t.jsx)(e.code,{children:"EntityManager"}),"\u4f1a\u88ab\u5173\u95ed\uff0c\u800c",(0,t.jsx)(e.code,{children:"EntityManager"}),"\n\u88ab\u5173\u95ed\u65f6\u5176\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u8fde\u63a5\u4e5f\u4f1a\u88ab\u5173\u95ed.",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(e.code,{children:"EntityManager"}),"\u88ab\u521b\u5efa\u51fa\u6765\u65f6\u4e0d\u4f1a\u7acb\u5373\u521b\u5efa\u6570\u636e\u5e93\u8fde\u63a5\uff0c\u800c\u662f\u5728\u6267\u884c",(0,t.jsx)(e.code,{children:"sql"}),"\u65f6\u624d\u4f1a\u521b\u5efa\u6570\u636e\u5e93\u8fde\u63a5.",(0,t.jsx)("br",{}),"\n\u5982\u679c\u6574\u4e2a\u8bf7\u6c42\u94fe\u8def\u975e\u5e38\u8017\u65f6\uff0c\u90a3\u4e48\u5728\u6574\u4e2a\u8bf7\u6c42\u94fe\u8def\u4e2d\uff0c",(0,t.jsx)(e.code,{children:"EntityManager"}),"\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u8fde\u63a5\u90fd\u4f1a\u88ab\u5360\u7528\uff0c\u76f4\u5230\u6574\u4e2a\u8bf7\u6c42\u94fe\u8def\u6267\u884c\u5b8c\u6210.",(0,t.jsx)("br",{}),"\n\u5982\u679c\u540c\u65f6\u6709\u591a\u4e2a\u8bf7\u6c42\u6b63\u5728\u6267\u884c, \u90a3\u4e48\u4f1a\u5bfc\u81f4\u6570\u636e\u5e93\u8fde\u63a5\u88ab\u5360\u7528\u5b8c. \u4ece\u800c\u5bfc\u81f4\u540e\u7eed\u8bf7\u6c42\u65e0\u6cd5\u83b7\u53d6\u6570\u636e\u5e93\u8fde\u63a5.",(0,t.jsx)("br",{}),"\n\u4e3a\u4e86\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u53ef\u4ee5\u901a\u8fc7\u5173\u95ed",(0,t.jsx)(e.code,{children:"OpenEntityManagerInViewInterceptor"}),"\u6765\u786e\u4fdd\u5f53\u4e0b\u6e38\u670d\u52a1\u54cd\u5e94\u7f13\u6162\u65f6\u4e0d\u4f1a\u5bfc\u81f4\u6570\u636e\u5e93\u8fde\u63a5\u88ab\u5360\u7528\u5b8c."]}),"\n",(0,t.jsx)(e.h2,{id:"\u53c2\u8003\u8d44\u6599",children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://stackoverflow.com/questions/71140137/when-does-jpa-return-connection-to-db-pool",children:"When does JPA return connection to db pool"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://www.baeldung.com/spring-open-session-in-view",children:"A Guide to Spring\u2019s Open Session in View"})}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>o,x:()=>a});var t=r(96540);const i={},s=t.createContext(i);function o(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);