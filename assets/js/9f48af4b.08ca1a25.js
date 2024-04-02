"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[5347],{67203:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=s(85893),o=s(11151);const r={authors:["xiangcheng.kuo"],tags:["linux"]},a="\u811a\u672c\u4e2d\u5b9e\u73b0\u4fee\u6539\u7528\u6237\u5bc6\u7801",i={permalink:"/blog/2023/03/03/passwd-in-script",source:"@site/blog/2023-03-03/passwd-in-script.md",title:"\u811a\u672c\u4e2d\u5b9e\u73b0\u4fee\u6539\u7528\u6237\u5bc6\u7801",description:"\u5e73\u65f6\u5728\u5199\u811a\u672c\u7684\u65f6\u5019, \u6709\u65f6\u5019\u4f1a\u9700\u8981\u4f7f\u7528passwd\u547d\u4ee4\u6765\u4fee\u6539\u7528\u6237\u7684\u5bc6\u7801.",date:"2023-03-03T00:00:00.000Z",tags:[{label:"linux",permalink:"/blog/tags/linux"}],readingTime:2.885,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["linux"]},unlisted:!1,prevItem:{title:"\u5347\u7ea7springboot3\u9047\u5230\u7684\u95ee\u9898",permalink:"/blog/2023/03/05/problem-springboot3-upgrade"},nextItem:{title:"\u57fa\u4e8eclojure\u8868\u8fbe\u5f0f\u5b9e\u73b0\u66f4\u52a0\u7075\u6d3b\u7684\u6570\u636e\u9a8c\u8bc1",permalink:"/blog/2023/03/02/clojure-validation"}},d={authorsImageUrls:[void 0]},c=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u4f7f\u7528<code>chpasswd</code>",id:"\u4f7f\u7528chpasswd",level:3},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u5e73\u65f6\u5728\u5199\u811a\u672c\u7684\u65f6\u5019, \u6709\u65f6\u5019\u4f1a\u9700\u8981\u4f7f\u7528",(0,t.jsx)(n.code,{children:"passwd"}),"\u547d\u4ee4\u6765\u4fee\u6539\u7528\u6237\u7684\u5bc6\u7801.",(0,t.jsx)("br",{}),"\n\u4f8b\u5982\u4e3a",(0,t.jsx)(n.code,{children:"NIS"}),"\u7684\u6d4b\u8bd5\u670d\u52a1\u5668\u65b0\u589e\u4e00\u4e9b\u6d4b\u8bd5\u7528\u6237, \u5e76\u4e14\u4e3a\u8fd9\u4e9b\u7528\u6237\u8bbe\u7f6e\u5bc6\u7801.",(0,t.jsx)("br",{}),"\n\u7531\u4e8e",(0,t.jsx)(n.code,{children:"passwd"}),"\u9700\u8981\u4ea4\u4e92\u5f0f\u7684\u8f93\u5165, \u6240\u4ee5\u5728\u811a\u672c\u4e2d\u4f7f\u7528",(0,t.jsx)(n.code,{children:"passwd"}),"\u547d\u4ee4\u4f1a\u62a5\u9519.",(0,t.jsx)("br",{}),"\n\u4e00\u4e2a\u6f5c\u5728\u7684\u89e3\u51b3\u65b9\u6848\u662f\u52a0\u5165",(0,t.jsx)(n.code,{children:"--stdin"}),"\u53c2\u6570\u4f46\u662f\u6709\u7684",(0,t.jsx)(n.code,{children:"linux"}),"\u53d1\u884c\u7248\u4e2d",(0,t.jsx)(n.code,{children:"passwd"}),"\u547d\u4ee4\u4e2d\u7684",(0,t.jsx)(n.code,{children:"--stdin"}),"\u4e0d\u5b58\u5728.",(0,t.jsx)("br",{}),"\n\u5982\u679c\u4f60\u8fd8\u8fd9\u6837\u6267\u884c\u7684\u8bdd\u5c06\u4f1a\u663e\u793a\u4ee5\u4e0b\u9519\u8bef.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-log",children:"passwd: unrecognized option '--stdin'\nUsage: passwd [options] [LOGIN]\n\nOptions:\n  -a, --all                     report password status on all accounts\n  -d, --delete                  delete the password for the named account\n  -e, --expire                  force expire the password for the named account\n  -h, --help                    display this help message and exit\n  -k, --keep-tokens             change password only if expired\n  -i, --inactive INACTIVE       set password inactive after expiration\n                                to INACTIVE\n  -l, --lock                    lock the password of the named account\n  -n, --mindays MIN_DAYS        set minimum number of days before password\n                                change to MIN_DAYS\n  -q, --quiet                   quiet mode\n  -r, --repository REPOSITORY   change password in REPOSITORY repository\n  -R, --root CHROOT_DIR         directory to chroot into\n  -S, --status                  report password status on the named account\n  -u, --unlock                  unlock the password of the named account\n  -w, --warndays WARN_DAYS      set expiration warning days to WARN_DAYS\n  -x, --maxdays MAX_DAYS        set maximum number of days before password\n                                change to MAX_DAYS\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7531\u4e8e",(0,t.jsx)(n.code,{children:"passwd"}),"\u547d\u4ee4\u4e2d\u6ca1\u6709",(0,t.jsx)(n.code,{children:"--stdin"}),"\u9009\u9879, \u6240\u4ee5\u6211\u4eec\u9700\u8981\u4f7f\u7528\u5176\u4ed6\u7684\u65b9\u5f0f\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(n.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,t.jsxs)(n.h3,{id:"\u4f7f\u7528chpasswd",children:["\u4f7f\u7528",(0,t.jsx)(n.code,{children:"chpasswd"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"chpasswd"}),"\u547d\u4ee4\u53ef\u4ee5\u7528\u4e8e\u6279\u91cf\u4fee\u6539\u7528\u6237\u7684\u5bc6\u7801, \u8be5\u547d\u4ee4\u7684\u4f7f\u7528\u65b9\u6cd5\u5982\u4e0b."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'echo "user1:password1" | chpasswd\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u5907\u6ce8",children:"\u5907\u6ce8"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0d\u5efa\u8bae\u5728\u811a\u672c\u4e2d\u4fee\u6539\u5bc6\u7801, \u56e0\u4e3a\u8fd9\u6837\u4f1a\u6cc4\u6f0f\u5bc6\u7801.",(0,t.jsx)("br",{}),"\n\u4f8b\u5982\u5f53\u811a\u672c\u589e\u52a0",(0,t.jsx)(n.code,{children:"set -x"}),"\u9009\u9879\u65f6, \u4f1a\u5c06\u5bc6\u7801\u6253\u5370\u51fa\u6765.",(0,t.jsx)("br",{}),"\n\u8fd9\u79cd\u65b9\u5f0f\u6700\u597d\u5728\u6d4b\u8bd5\u73af\u5883\u4e2d\u4f7f\u7528.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Nothing you can do in bash can possibly work.\npasswd(1) does not read from standard input.\nThis is intentional. It is for your protection.\nPasswords were never intended to be put into programs, or generated by programs.\nThey were intended to be entered only by the fingers of an actual human being, with a functional brain, and never, ever written down anywhere.\nNonetheless, we get hordes of users asking how they can circumvent 35 years of Unix security."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"from"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"http://mywiki.wooledge.org/BashFAQ/078",children:"I want to set a user's password using the Unix passwd command, but how do I script that? It doesn't read standard input!"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.baeldung.com/linux/passwd-shell-script#1-using-stdin-option",children:"Using the passwd Command from Within a Shell Script"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://askubuntu.com/questions/1115795/alternative-to-passwd-stdin-in-ubuntu",children:"Alternative to passwd --stdin in Ubuntu"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://stackoverflow.com/questions/714915/using-the-passwd-command-from-within-a-shell-script",children:"Using the passwd command from within a shell script"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"http://mywiki.wooledge.org/BashFAQ/078",children:"I want to set a user's password using the Unix passwd command, but how do I script that? It doesn't read standard input!"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>a});var t=s(67294);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);