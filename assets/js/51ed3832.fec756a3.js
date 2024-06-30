"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[16836],{38402:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=s(74848),o=s(28453);const r={authors:["orange"],tags:["postgresql"]},a="\u5c06postgresql\u4e2d\u6307\u5b9a\u7684database\u5bfc\u51fa\u4e3asql\u6587\u4ef6",l={permalink:"/blog/2023/02/12/postgres-pgdump",source:"@site/blog/2023-02-12-postgres-pgdump.md",title:"\u5c06postgresql\u4e2d\u6307\u5b9a\u7684database\u5bfc\u51fa\u4e3asql\u6587\u4ef6",description:"\u5728\u4f7f\u7528postgresql\u65f6, \u6709\u65f6\u5019\u9700\u8981\u5c06database\u5bfc\u51fa\u4e3asql\u6587\u4ef6, \u4ee5\u4fbf\u4e8e\u5728\u5176\u4ed6\u73af\u5883\u4e2d\u4f7f\u7528.",date:"2023-02-12T00:00:00.000Z",tags:[{inline:!0,label:"postgresql",permalink:"/blog/tags/postgresql"}],readingTime:.38,hasTruncateMarker:!0,authors:[{name:"orange",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"orange"}],frontMatter:{authors:["orange"],tags:["postgresql"]},unlisted:!1,prevItem:{title:"\u4fee\u6539postgresql\u4e2d\u7684\u6700\u5927\u8fde\u63a5\u6570",permalink:"/blog/2023/02/13/postgres-max-connections"},nextItem:{title:"\u5728Docker\u4e2d\u4f7f\u7528Rclone\u5e76\u5c06\u5bf9\u5e94\u7684fuse\u6302\u8f7d\u5230\u5bbf\u4e3b\u673a",permalink:"/blog/2023/02/11/rclone-fuse"}},i={authorsImageUrls:[void 0]},c=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["\u5728\u4f7f\u7528",(0,n.jsx)(t.code,{children:"postgresql"}),"\u65f6, \u6709\u65f6\u5019\u9700\u8981\u5c06",(0,n.jsx)(t.code,{children:"database"}),"\u5bfc\u51fa\u4e3a",(0,n.jsx)(t.code,{children:"sql"}),"\u6587\u4ef6, \u4ee5\u4fbf\u4e8e\u5728\u5176\u4ed6\u73af\u5883\u4e2d\u4f7f\u7528."]}),"\n",(0,n.jsx)(t.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"pg_dump --column-inserts --data-only --table=<table> <database>\n"})}),"\n",(0,n.jsxs)(t.p,{children:["\u8be5\u547d\u4ee4\u4f1a\u5c06",(0,n.jsx)(t.code,{children:"<database>"}),"\u4e2d\u7684",(0,n.jsx)(t.code,{children:"<table>"}),"\u5bfc\u51fa\u4e3a",(0,n.jsx)(t.code,{children:"sql"}),"\u6587\u4ef6"]}),"\n",(0,n.jsx)(t.h3,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://stackoverflow.com/questions/2857989/using-pg-dump-to-only-get-insert-statements-from-one-table-within-database",children:"Using pg_dump to only get insert statements from one table within database"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.netguru.com/blog/how-to-dump-and-restore-postgresql-database",children:"Dump Your PostgreSQL Database"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>l});var n=s(96540);const o={},r=n.createContext(o);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);