"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[1456],{59045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var o=n(45160),l=n(74848),r=n(28453);const a={authors:["orange"],tags:["troubleshooting","java","ldap","failover","spring"]},i="\u901a\u8fc7\u589e\u52a0timeout-control\u4ee5\u89e3\u51b3\u5f53tcp\u8fde\u63a5\u4e00\u76f4\u5904\u4e8eSYN_SENT\u72b6\u6001\u5bfc\u81f4java\u4e2d\u7684ldap-client\u7684failover\u4e0d\u5de5\u4f5c\u7684\u95ee\u9898",s={authorsImageUrls:[void 0]},c=[];function p(e){const t={code:"code",p:"p",...(0,r.R)(),...e.components};return(0,l.jsxs)(t.p,{children:["\u4eca\u5929\u9047\u5230\u4e00\u4e2a\u95ee\u9898\u662f\u5f53\u6d4b\u8bd5\u6a21\u62df",(0,l.jsx)(t.code,{children:"ldap"}),"\u7684\u670d\u52a1\u7aef\u4e3b\u8282\u70b9\u6302\u6389\u7684\u65f6\u5019\u5e76\u5728\u9875\u9762\u70b9\u51fb\u767b\u5f55, \u540e\u7aef\u4e00\u76f4\u672a\u4f5c\u51fa\u54cd\u5e94.",(0,l.jsx)("br",{}),"\n\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f\u56e0\u4e3a\u4ee3\u7801\u4e2d\u7684",(0,l.jsx)(t.code,{children:"ldap-client"}),"\u7684",(0,l.jsx)(t.code,{children:"failover"}),"\u672a\u751f\u6548, \u901a\u8fc7\u6392\u67e5\u53d1\u73b0",(0,l.jsx)(t.code,{children:"ldap-client"}),"\u4e00\u76f4\u5728\u8fde\u63a5",(0,l.jsx)(t.code,{children:"ldap"}),"\u7684\u4e3b\u8282\u70b9,\n\u5e76\u4e14",(0,l.jsx)(t.code,{children:"tcp"}),"\u8fde\u63a5\u4e00\u76f4\u5904\u4e8e",(0,l.jsx)(t.code,{children:"SYN_SENT"}),"\u72b6\u6001.",(0,l.jsx)("br",{}),"\n\u7531\u4e8e",(0,l.jsx)(t.code,{children:"ldap-client"}),"\u6ca1\u6709\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u6ca1\u6709\u63a7\u5236\u8d85\u65f6, \u5bfc\u81f4\u4ee3\u7801\u4e00\u76f4\u5835\u585e, \u4ece\u800c\u5bfc\u81f4",(0,l.jsx)(t.code,{children:"failover"}),"\u4e0d\u5de5\u4f5c.",(0,l.jsx)("br",{}),"\n\u4e0b\u9762\u5c06\u5f00\u59cb\u4ecb\u7ecd\u5177\u4f53\u7ec6\u8282\u4ee5\u53ca\u89e3\u51b3\u65b9\u6848.",(0,l.jsx)("br",{})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var o=n(96540);const l={},r=o.createContext(l);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),o.createElement(r.Provider,{value:t},e.children)}},45160:e=>{e.exports=JSON.parse('{"permalink":"/zh-CN/blog/2023/03/15/ldap-client-failover","source":"@site/blog/2023-03-15-ldap-client-failover.md","title":"\u901a\u8fc7\u589e\u52a0timeout-control\u4ee5\u89e3\u51b3\u5f53tcp\u8fde\u63a5\u4e00\u76f4\u5904\u4e8eSYN_SENT\u72b6\u6001\u5bfc\u81f4java\u4e2d\u7684ldap-client\u7684failover\u4e0d\u5de5\u4f5c\u7684\u95ee\u9898","description":"\u4eca\u5929\u9047\u5230\u4e00\u4e2a\u95ee\u9898\u662f\u5f53\u6d4b\u8bd5\u6a21\u62dfldap\u7684\u670d\u52a1\u7aef\u4e3b\u8282\u70b9\u6302\u6389\u7684\u65f6\u5019\u5e76\u5728\u9875\u9762\u70b9\u51fb\u767b\u5f55, \u540e\u7aef\u4e00\u76f4\u672a\u4f5c\u51fa\u54cd\u5e94.","date":"2023-03-15T00:00:00.000Z","tags":[{"inline":true,"label":"troubleshooting","permalink":"/zh-CN/blog/tags/troubleshooting"},{"inline":true,"label":"java","permalink":"/zh-CN/blog/tags/java"},{"inline":true,"label":"ldap","permalink":"/zh-CN/blog/tags/ldap"},{"inline":true,"label":"failover","permalink":"/zh-CN/blog/tags/failover"},{"inline":true,"label":"spring","permalink":"/zh-CN/blog/tags/spring"}],"readingTime":9.175,"hasTruncateMarker":true,"authors":[{"name":"orange","title":"programmer on jvm platform","url":"https://github.com/orange-guo","imageURL":"https://github.com/orange-guo.png","key":"orange","page":null}],"frontMatter":{"authors":["orange"],"tags":["troubleshooting","java","ldap","failover","spring"]},"unlisted":false,"prevItem":{"title":"TestContainers\u56fa\u5b9a\u5bb9\u5668\u7aef\u53e3","permalink":"/zh-CN/blog/2023/03/16/testcontainers-fixed-port"},"nextItem":{"title":"IntelliJ IDEA\u4e2d\u5b9e\u73b0\u81ea\u5b9a\u4e49\u6ce8\u89e3\u4e2d\u7684\u8bed\u6cd5\u9ad8\u4eae","permalink":"/zh-CN/blog/2023/03/14/intellij-idea-language-injection"}}')}}]);