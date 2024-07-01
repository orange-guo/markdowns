"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[70051],{84528:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=t(74848),o=t(28453);const r={authors:["orange"],tags:["linux"]},a="\u811a\u672c\u4e2d\u5b9e\u73b0\u4fee\u6539\u7528\u6237\u5bc6\u7801",i={permalink:"/zh-CN/blog/2023/03/03/passwd-in-script",source:"@site/blog/2023-03-03-passwd-in-script.md",title:"\u811a\u672c\u4e2d\u5b9e\u73b0\u4fee\u6539\u7528\u6237\u5bc6\u7801",description:"\u5e73\u65f6\u5728\u5199\u811a\u672c\u7684\u65f6\u5019, \u6709\u65f6\u5019\u4f1a\u9700\u8981\u4f7f\u7528passwd\u547d\u4ee4\u6765\u4fee\u6539\u7528\u6237\u7684\u5bc6\u7801.",date:"2023-03-03T00:00:00.000Z",tags:[{inline:!0,label:"linux",permalink:"/zh-CN/blog/tags/linux"}],readingTime:2.885,hasTruncateMarker:!0,authors:[{name:"orange",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"orange"}],frontMatter:{authors:["orange"],tags:["linux"]},unlisted:!1,prevItem:{title:"\u5347\u7ea7springboot3\u9047\u5230\u7684\u95ee\u9898",permalink:"/zh-CN/blog/2023/03/05/problem-springboot3-upgrade"},nextItem:{title:"\u57fa\u4e8eclojure\u8868\u8fbe\u5f0f\u5b9e\u73b0\u66f4\u52a0\u7075\u6d3b\u7684\u6570\u636e\u9a8c\u8bc1",permalink:"/zh-CN/blog/2023/03/02/clojure-validation"}},c={authorsImageUrls:[void 0]},d=[];function p(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u5e73\u65f6\u5728\u5199\u811a\u672c\u7684\u65f6\u5019, \u6709\u65f6\u5019\u4f1a\u9700\u8981\u4f7f\u7528",(0,s.jsx)(n.code,{children:"passwd"}),"\u547d\u4ee4\u6765\u4fee\u6539\u7528\u6237\u7684\u5bc6\u7801.",(0,s.jsx)("br",{}),"\n\u4f8b\u5982\u4e3a",(0,s.jsx)(n.code,{children:"NIS"}),"\u7684\u6d4b\u8bd5\u670d\u52a1\u5668\u65b0\u589e\u4e00\u4e9b\u6d4b\u8bd5\u7528\u6237, \u5e76\u4e14\u4e3a\u8fd9\u4e9b\u7528\u6237\u8bbe\u7f6e\u5bc6\u7801.",(0,s.jsx)("br",{}),"\n\u7531\u4e8e",(0,s.jsx)(n.code,{children:"passwd"}),"\u9700\u8981\u4ea4\u4e92\u5f0f\u7684\u8f93\u5165, \u6240\u4ee5\u5728\u811a\u672c\u4e2d\u4f7f\u7528",(0,s.jsx)(n.code,{children:"passwd"}),"\u547d\u4ee4\u4f1a\u62a5\u9519.",(0,s.jsx)("br",{}),"\n\u4e00\u4e2a\u6f5c\u5728\u7684\u89e3\u51b3\u65b9\u6848\u662f\u52a0\u5165",(0,s.jsx)(n.code,{children:"--stdin"}),"\u53c2\u6570\u4f46\u662f\u6709\u7684",(0,s.jsx)(n.code,{children:"linux"}),"\u53d1\u884c\u7248\u4e2d",(0,s.jsx)(n.code,{children:"passwd"}),"\u547d\u4ee4\u4e2d\u7684",(0,s.jsx)(n.code,{children:"--stdin"}),"\u4e0d\u5b58\u5728.",(0,s.jsx)("br",{}),"\n\u5982\u679c\u4f60\u8fd8\u8fd9\u6837\u6267\u884c\u7684\u8bdd\u5c06\u4f1a\u663e\u793a\u4ee5\u4e0b\u9519\u8bef.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-log",children:"passwd: unrecognized option '--stdin'\nUsage: passwd [options] [LOGIN]\n\nOptions:\n  -a, --all                     report password status on all accounts\n  -d, --delete                  delete the password for the named account\n  -e, --expire                  force expire the password for the named account\n  -h, --help                    display this help message and exit\n  -k, --keep-tokens             change password only if expired\n  -i, --inactive INACTIVE       set password inactive after expiration\n                                to INACTIVE\n  -l, --lock                    lock the password of the named account\n  -n, --mindays MIN_DAYS        set minimum number of days before password\n                                change to MIN_DAYS\n  -q, --quiet                   quiet mode\n  -r, --repository REPOSITORY   change password in REPOSITORY repository\n  -R, --root CHROOT_DIR         directory to chroot into\n  -S, --status                  report password status on the named account\n  -u, --unlock                  unlock the password of the named account\n  -w, --warndays WARN_DAYS      set expiration warning days to WARN_DAYS\n  -x, --maxdays MAX_DAYS        set maximum number of days before password\n                                change to MAX_DAYS\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7531\u4e8e",(0,s.jsx)(n.code,{children:"passwd"}),"\u547d\u4ee4\u4e2d\u6ca1\u6709",(0,s.jsx)(n.code,{children:"--stdin"}),"\u9009\u9879, \u6240\u4ee5\u6211\u4eec\u9700\u8981\u4f7f\u7528\u5176\u4ed6\u7684\u65b9\u5f0f\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898.",(0,s.jsx)("br",{})]})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var s=t(96540);const o={},r=s.createContext(o);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);