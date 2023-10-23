"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[2710],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=i(r),g=a,d=c["".concat(p,".").concat(g)]||c[g]||m[g]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},43376:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=r(83117),a=(r(67294),r(3905));const o={authors:["xiangcheng.kuo"],tags:["postgresql"]},l="\u5c06postgresql\u4e2d\u6307\u5b9a\u7684database\u5bfc\u51fa\u4e3asql\u6587\u4ef6",s={permalink:"/zh-CN/blog/2023/02/12/postgres-pgdump",source:"@site/blog/2023-02-12/postgres-pgdump.md",title:"\u5c06postgresql\u4e2d\u6307\u5b9a\u7684database\u5bfc\u51fa\u4e3asql\u6587\u4ef6",description:"\u5728\u4f7f\u7528postgresql\u65f6, \u6709\u65f6\u5019\u9700\u8981\u5c06database\u5bfc\u51fa\u4e3asql\u6587\u4ef6, \u4ee5\u4fbf\u4e8e\u5728\u5176\u4ed6\u73af\u5883\u4e2d\u4f7f\u7528.",date:"2023-02-12T00:00:00.000Z",formattedDate:"2023\u5e742\u670812\u65e5",tags:[{label:"postgresql",permalink:"/zh-CN/blog/tags/postgresql"}],readingTime:.38,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["postgresql"]},prevItem:{title:"\u4fee\u6539postgresql\u4e2d\u7684\u6700\u5927\u8fde\u63a5\u6570",permalink:"/zh-CN/blog/2023/02/13/postgres-max-connections"},nextItem:{title:"\u5728Docker\u4e2d\u4f7f\u7528Rclone\u5e76\u5c06\u5bf9\u5e94\u7684fuse\u6302\u8f7d\u5230\u5bbf\u4e3b\u673a",permalink:"/zh-CN/blog/2023/02/11/rclone-fuse"}},p={authorsImageUrls:[void 0]},i=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:3}],u={toc:i},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"postgresql"),"\u65f6, \u6709\u65f6\u5019\u9700\u8981\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"database"),"\u5bfc\u51fa\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"sql"),"\u6587\u4ef6, \u4ee5\u4fbf\u4e8e\u5728\u5176\u4ed6\u73af\u5883\u4e2d\u4f7f\u7528."),(0,a.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pg_dump --column-inserts --data-only --table=<table> <database>\n")),(0,a.kt)("p",null,"\u8be5\u547d\u4ee4\u4f1a\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"<database>"),"\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"<table>"),"\u5bfc\u51fa\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"sql"),"\u6587\u4ef6"),(0,a.kt)("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/2857989/using-pg-dump-to-only-get-insert-statements-from-one-table-within-database"},"Using pg_dump to only get insert statements from one table within database")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.netguru.com/blog/how-to-dump-and-restore-postgresql-database"},"Dump Your PostgreSQL Database"))))}m.isMDXComponent=!0}}]);