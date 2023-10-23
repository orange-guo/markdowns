"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[7500],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>y});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,y=u["".concat(s,".").concat(m)]||u[m]||g[m]||o;return t?r.createElement(y,i(i({ref:n},l),{},{components:t})):r.createElement(y,i({ref:n},l))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3566:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=t(83117),a=(t(67294),t(3905));const o={authors:["xiangcheng.kuo"],tags:["spring-boot","spring-data-jpa"]},i="\u901a\u8fc7\u5173\u95edOpenEntityManagerInViewInterceptor\u786e\u4fdd\u5f53\u4e0b\u6e38\u670d\u52a1\u54cd\u5e94\u7f13\u6162\u65f6\u4e0d\u4f1a\u5bfc\u81f4\u6570\u636e\u5e93\u8fde\u63a5\u88ab\u5360\u7528\u5b8c",p={permalink:"/blog/2023/05/15/to-ensure-that-database-connections-are-not-exhausted-when-downstream-services-respond-slowly-by-closing-open-session-inview",source:"@site/blog/2023-05-15/to-ensure-that-database-connections-are-not-exhausted-when-downstream-services-respond-slowly-by-closing-open-session-inview.md",title:"\u901a\u8fc7\u5173\u95edOpenEntityManagerInViewInterceptor\u786e\u4fdd\u5f53\u4e0b\u6e38\u670d\u52a1\u54cd\u5e94\u7f13\u6162\u65f6\u4e0d\u4f1a\u5bfc\u81f4\u6570\u636e\u5e93\u8fde\u63a5\u88ab\u5360\u7528\u5b8c",description:"OpenEntityManagerInViewInterceptor\u662fspring\u4e2d\u7684\u4e00\u4e2a\u62e6\u622a\u5668\uff0c\u5b83\u7684\u4f5c\u7528\u662f\u5728\u6574\u4e2a\u8bf7\u6c42\u4e0a\u4e0b\u6587\u590d\u7528\u540c\u4e00\u4e2aEntityManager",date:"2023-05-15T00:00:00.000Z",formattedDate:"May 15, 2023",tags:[{label:"spring-boot",permalink:"/blog/tags/spring-boot"},{label:"spring-data-jpa",permalink:"/blog/tags/spring-data-jpa"}],readingTime:3.03,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["spring-boot","spring-data-jpa"]},prevItem:{title:"\u89e3\u51b3\u65e0\u6cd5\u8f93\u5165\u4e2d\u6587\u5b57\u7b26\u5230vscode",permalink:"/blog/2023/05/15/solve-unable-to-input-chinese-character-into-vscode"},nextItem:{title:"\u901a\u8fc7\u521b\u5efarsa\u683c\u5f0f\u7684\u79c1\u94a5\u4ee5\u53ca\u670d\u52a1\u7aef\u542f\u7528rsa\u8ba4\u8bc1\u89e3\u51b3jsch\u8fde\u63a5ssh\u5931\u8d25\u7684\u95ee\u9898",permalink:"/blog/2023/05/05/solve-jsch-ssh-connection-failure-by-creating-rsa-private-key-and-enabling-rsa-authentication-on-server"}},s={authorsImageUrls:[void 0]},c=[],l={toc:c},u="wrapper";function g(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"OpenEntityManagerInViewInterceptor"),"\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"spring"),"\u4e2d\u7684\u4e00\u4e2a\u62e6\u622a\u5668\uff0c\u5b83\u7684\u4f5c\u7528\u662f\u5728\u6574\u4e2a\u8bf7\u6c42\u4e0a\u4e0b\u6587\u590d\u7528\u540c\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager"),"\n\uff0c\u4ece\u800c\u907f\u514d\u5728\u4e00\u4e2a\u8bf7\u6c42\u4e2d\u591a\u6b21\u521b\u5efa\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager"),", \u4ece\u800c\u63d0\u9ad8\u6027\u80fd.",(0,a.kt)("br",null),"\n\u4f46\u662f\u5982\u679c\u5728\u4e00\u4e2a\u8bf7\u6c42\u7684\u5904\u7406\u4ee3\u7801\u4e2d\u8bf7\u6c42\u4e86\u4e0b\u6e38\u670d\u52a1\uff0c\u800c\u4e0b\u6e38\u670d\u52a1\u54cd\u5e94\u7f13\u6162\uff0c\u90a3\u4e48\u5728\u4e0b\u6e38\u670d\u52a1\u54cd\u5e94\u4e4b\u524d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager"),"\n\u4f1a\u4e00\u76f4\u88ab\u5360\u7528\uff0c\u76f4\u5230\u6574\u4e2a\u8bf7\u6c42\u5904\u7406\u5b8c\u6210\uff0c\u8fd9\u6837\u4f1a\u5bfc\u81f4\u5f53\u670d\u52a1\u5e76\u53d1\u8bf7\u6c42\u91cf\u8f83\u5927\u65f6\uff0c\u6570\u636e\u5e93\u8fde\u63a5\u88ab\u5360\u7528\u5b8c.",(0,a.kt)("br",null),"\n\u4e3a\u4e86\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u53ef\u4ee5\u901a\u8fc7\u5173\u95ed",(0,a.kt)("inlineCode",{parentName:"p"},"OpenEntityManagerInViewInterceptor"),"\u6765\u786e\u4fdd\u5f53\u4e0b\u6e38\u670d\u52a1\u54cd\u5e94\u7f13\u6162\u65f6\u4e0d\u4f1a\u5bfc\u81f4\u6570\u636e\u5e93\u8fde\u63a5\u88ab\u5360\u7528\u5b8c.\n\u4e0b\u9762\u5c06\u4ecb\u7ecd\u5982\u4f55\u5173\u95ed",(0,a.kt)("inlineCode",{parentName:"p"},"OpenEntityManagerInViewInterceptor"),".",(0,a.kt)("br",null)))}g.isMDXComponent=!0}}]);