"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[35262],{485:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>r});var t=i(69009),o=i(74848),l=i(28453);const s={authors:["orange"],tags:["troubleshooting","ldap","openldap","posix"]},a="\u7814\u7a76\u5728openldap\u4e2d\u5b9e\u73b0posix\u7528\u6237\u7684\u9501\u5b9a",c={authorsImageUrls:[void 0]},r=[{value:"AccountDisable\u5c5e\u6027\u5c5e\u4e8eAD\u4e0b\u7684\u89e3\u51b3\u65b9\u6848",id:"accountdisable\u5c5e\u6027\u5c5e\u4e8ead\u4e0b\u7684\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u5728linux\u4e2d\u6ca1\u6709\u6bd4\u8f83\u4f18\u96c5\u7684\u529e\u6cd5\u5b9e\u73b0\u9501\u5b9aposixAccount",id:"\u5728linux\u4e2d\u6ca1\u6709\u6bd4\u8f83\u4f18\u96c5\u7684\u529e\u6cd5\u5b9e\u73b0\u9501\u5b9aposixaccount",level:2},{value:"\u66ff\u4ee3\u65b9\u6848\u7684\u95ee\u9898",id:"\u66ff\u4ee3\u65b9\u6848\u7684\u95ee\u9898",level:2},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,l.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["\u76ee\u524d\u9501\u5b9a\u7528\u6237\u80fd\u591f\u8fbe\u6210\u7684\u6548\u679c\u662f\u7981\u6b62\u7528\u6237\u5728portal\u4e2d\u767b\u5f55, \u4f46\u662f\u7528\u6237\u4ecd\u7136\u53ef\u4ee5\u5728linux\u4e2d\u8fdb\u884c\u767b\u5f55.",(0,o.jsx)("br",{}),"\n\u8c03\u7814\u4e00\u4e0b",(0,o.jsx)(e.code,{children:"AccountDisable"}),"\u5c5e\u6027"]}),"\n",(0,o.jsxs)(e.h2,{id:"accountdisable\u5c5e\u6027\u5c5e\u4e8ead\u4e0b\u7684\u89e3\u51b3\u65b9\u6848",children:[(0,o.jsx)(e.a,{href:"https://ldapwiki.com/wiki/ACCOUNTDISABLE",children:"AccountDisable"}),"\u5c5e\u6027\u5c5e\u4e8eAD\u4e0b\u7684\u89e3\u51b3\u65b9\u6848"]}),"\n",(0,o.jsx)(e.h2,{id:"\u5728linux\u4e2d\u6ca1\u6709\u6bd4\u8f83\u4f18\u96c5\u7684\u529e\u6cd5\u5b9e\u73b0\u9501\u5b9aposixaccount",children:"\u5728linux\u4e2d\u6ca1\u6709\u6bd4\u8f83\u4f18\u96c5\u7684\u529e\u6cd5\u5b9e\u73b0\u9501\u5b9aposixAccount"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://ldapwiki.com/wiki/posixAccount",children:"posixAccount"}),"\u548c",(0,o.jsx)(e.a,{href:"https://ldapwiki.com/wiki/shadowAccount",children:"shadowAccount"}),"\n\u4ee5\u53ca",(0,o.jsx)(e.a,{href:"https://linux.die.net/man/5/nslcd.conf",children:"nslcd.conf"}),"\u4e2d\u7684",(0,o.jsx)(e.code,{children:"mapT"}),"\u53c2\u6570\u5747\u6ca1\u6709\u76f8\u5173\u7684\u8bf4\u660e"]}),"\n",(0,o.jsx)(e.h2,{id:"\u66ff\u4ee3\u65b9\u6848\u7684\u95ee\u9898",children:"\u66ff\u4ee3\u65b9\u6848\u7684\u95ee\u9898"}),"\n",(0,o.jsx)(e.p,{children:"\u76ee\u524d\u6709\u4ee5\u4e0b\u66ff\u4ee3\u65b9\u6848\u4ee5\u4e0b\u66ff\u4ee3\u65b9\u6848\u90fd\u6709\u4e00\u5b9a\u7684\u95ee\u9898, \u53ef\u4ee5\u4f5c\u4e3a\u53c2\u8003"}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:"\u76f4\u63a5\u6539\u7528\u6237\u7528\u6237\u5bc6\u7801\u4ece\u800c\u8ba9\u7528\u6237\u65e0\u6cd5\u767b\u5f55\u5230\u7cfb\u7edf\u4e2d, \u7f3a\u70b9\u662f\u53ea\u80fd\u963b\u6321\u5bc6\u7801\u5f62\u5f0f\u8ba4\u8bc1, ssh\u514d\u5bc6\u5f62\u5f0f\u65e0\u6cd5\u62e6\u622a"}),"\n",(0,o.jsxs)(e.li,{children:["\u4fee\u6539",(0,o.jsx)(e.code,{children:"loginShell"}),"\u4e3a/usr/sbin/nologin, \u7f3a\u70b9\u662f\u5bf9\u4e8e\u8fdc\u7a0b\u684c\u9762\u8fde\u63a5\u573a\u666f\u5219\u53ef\u80fd\u8986\u76d6\u4e0d\u5230"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"FreeIPA"}),"\u4e2d\u6709",(0,o.jsx)(e.code,{children:"ipa user-disable"}),"\u547d\u4ee4, \u4f46\u4e0d\u662f\u4e3b\u6d41\u7684\u89e3\u51b3\u65b9\u6848, \u56e0\u4e3a\u6211\u4eec\u7684ldap\u662fopenldap"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"\u5907\u6ce8",children:"\u5907\u6ce8"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://ldapwiki.com/wiki/ACCOUNTDISABLE",children:"ACCOUNTDISABLE"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://ldapwiki.com/wiki/posixAccount",children:"PosixAccount"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://ldapwiki.com/wiki/shadowAccount",children:"ShadowAccount"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://linux.die.net/man/5/nslcd.conf",children:"nslcd.conf(5) - Linux man page"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://linuxconfig.org/how-to-disable-user-accounts-in-linux",children:"How to disable User Accounts on Linux System"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://www.trentonsocial.com/what-is-shadow-account-ldap/",children:"WHAT IS SHADOW ACCOUNT LDAP?"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://linuxize.com/post/etc-shadow-file/",children:"Understanding the /etc/shadow File"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/linux_domain_identity_authentication_and_policy_guide/activating_and_deactivating_user_accounts#:~:text=Select%20the%20Identity%20%E2%86%92%20Users%20tab.%20From%20the,a%20user%20account%2C%20use%20the%20ipa%20user-disable%20command.",children:"FreeIPA > Enabling and Disabling User Accounts"})}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>a});var t=i(96540);const o={},l=t.createContext(o);function s(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),t.createElement(l.Provider,{value:e},n.children)}},69009:n=>{n.exports=JSON.parse('{"permalink":"/blog/2022/05/08/implementing-posix-user-locking-in-openldap","source":"@site/blog/2022-05-08-implementing-posix-user-locking-in-openldap.md","title":"\u7814\u7a76\u5728openldap\u4e2d\u5b9e\u73b0posix\u7528\u6237\u7684\u9501\u5b9a","description":"\u76ee\u524d\u9501\u5b9a\u7528\u6237\u80fd\u591f\u8fbe\u6210\u7684\u6548\u679c\u662f\u7981\u6b62\u7528\u6237\u5728portal\u4e2d\u767b\u5f55, \u4f46\u662f\u7528\u6237\u4ecd\u7136\u53ef\u4ee5\u5728linux\u4e2d\u8fdb\u884c\u767b\u5f55.","date":"2022-05-08T00:00:00.000Z","tags":[{"inline":true,"label":"troubleshooting","permalink":"/blog/tags/troubleshooting"},{"inline":true,"label":"ldap","permalink":"/blog/tags/ldap"},{"inline":true,"label":"openldap","permalink":"/blog/tags/openldap"},{"inline":true,"label":"posix","permalink":"/blog/tags/posix"}],"readingTime":1.35,"hasTruncateMarker":true,"authors":[{"name":"orange","title":"programmer on jvm platform","url":"https://github.com/orange-guo","imageURL":"https://github.com/orange-guo.png","key":"orange","page":null}],"frontMatter":{"authors":["orange"],"tags":["troubleshooting","ldap","openldap","posix"]},"unlisted":false,"prevItem":{"title":"FeignClient\u4e2dPageable\u88ab\u5f53\u4f5cbody\u4f20\u8f93","permalink":"/blog/2022/07/07/feignclient-pageable-treated-as-body-during-transmission"},"nextItem":{"title":"spring-boot\u9879\u76ee\u4e2dyml\u914d\u7f6e\u6587\u4ef6\u5bf9duration\u914d\u7f6e\u5728\u4e0d\u7ed9\u5b9a\u5355\u4f4d\u7684\u60c5\u51b5\u4e0b\u9ed8\u8ba4\u4e3a\u6beb\u79d2","permalink":"/blog/2022/03/07/spring-boot-project-yaml-configuration-defaults-duration-to-milliseconds"}}')}}]);