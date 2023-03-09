"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[403],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={authors:["xiangcheng.kuo"],tags:["linux"]},s="passwd\u547d\u4ee4\u7684--stdin\u7684\u66ff\u4ee3\u65b9\u6848",i={permalink:"/markdowns/blog/2023/03/03/",source:"@site/blog/2023-03-03.md",title:"passwd\u547d\u4ee4\u7684--stdin\u7684\u66ff\u4ee3\u65b9\u6848",description:"\u5e73\u65f6\u5728\u5199\u811a\u672c\u7684\u65f6\u5019, \u6709\u65f6\u5019\u4f1a\u9700\u8981\u4f7f\u7528passwd\u547d\u4ee4\u6765\u4fee\u6539\u7528\u6237\u7684\u5bc6\u7801.",date:"2023-03-03T00:00:00.000Z",formattedDate:"March 3, 2023",tags:[{label:"linux",permalink:"/markdowns/blog/tags/linux"}],readingTime:2.87,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["linux"]},prevItem:{title:"SSH\u547d\u4ee4\u65e0\u6cd5\u521b\u5efa\u8fdc\u7a0b\u8fde\u63a5",permalink:"/markdowns/blog/2023/03/04/"},nextItem:{title:"\u57fa\u4e8eclojure\u8868\u8fbe\u5f0f\u5b9e\u73b0\u66f4\u52a0\u7075\u6d3b\u7684\u6570\u636e\u9a8c\u8bc1",permalink:"/markdowns/blog/2023/03/02/"}},l={authorsImageUrls:[void 0]},p=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u4f7f\u7528<code>chpasswd</code>",id:"\u4f7f\u7528chpasswd",level:3},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5e73\u65f6\u5728\u5199\u811a\u672c\u7684\u65f6\u5019, \u6709\u65f6\u5019\u4f1a\u9700\u8981\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"passwd"),"\u547d\u4ee4\u6765\u4fee\u6539\u7528\u6237\u7684\u5bc6\u7801.",(0,r.kt)("br",null),"\n\u4f8b\u5982\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"NIS"),"\u7684\u6d4b\u8bd5\u670d\u52a1\u5668\u65b0\u589e\u4e00\u4e9b\u6d4b\u8bd5\u7528\u6237, \u5e76\u4e14\u4e3a\u8fd9\u4e9b\u7528\u6237\u8bbe\u7f6e\u5bc6\u7801.",(0,r.kt)("br",null),"\n\u7531\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"passwd"),"\u9700\u8981\u4ea4\u4e92\u5f0f\u7684\u8f93\u5165, \u6240\u4ee5\u5728\u811a\u672c\u4e2d\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"passwd"),"\u547d\u4ee4\u4f1a\u62a5\u9519.",(0,r.kt)("br",null),"\n\u4e00\u4e2a\u89e3\u51b3\u65b9\u6848\u662f\u52a0\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"--stdin"),"\u53c2\u6570\u4f46\u662f\u6709\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"linux"),"\u53d1\u884c\u7248\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"passwd"),"\u547d\u4ee4\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"--stdin"),"\u4e0d\u5b58\u5728.",(0,r.kt)("br",null),"\n\u5982\u679c\u4f60\u8fd8\u8fd9\u6837\u6267\u884c\u7684\u8bdd\u5c06\u4f1a\u663e\u793a\u4ee5\u4e0b\u9519\u8bef.",(0,r.kt)("br",null)),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"passwd: unrecognized option '--stdin'\nUsage: passwd [options] [LOGIN]\n\nOptions:\n  -a, --all                     report password status on all accounts\n  -d, --delete                  delete the password for the named account\n  -e, --expire                  force expire the password for the named account\n  -h, --help                    display this help message and exit\n  -k, --keep-tokens             change password only if expired\n  -i, --inactive INACTIVE       set password inactive after expiration\n                                to INACTIVE\n  -l, --lock                    lock the password of the named account\n  -n, --mindays MIN_DAYS        set minimum number of days before password\n                                change to MIN_DAYS\n  -q, --quiet                   quiet mode\n  -r, --repository REPOSITORY   change password in REPOSITORY repository\n  -R, --root CHROOT_DIR         directory to chroot into\n  -S, --status                  report password status on the named account\n  -u, --unlock                  unlock the password of the named account\n  -w, --warndays WARN_DAYS      set expiration warning days to WARN_DAYS\n  -x, --maxdays MAX_DAYS        set maximum number of days before password\n                                change to MAX_DAYS\n")),(0,r.kt)("p",null,"\u7531\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"passwd"),"\u547d\u4ee4\u4e2d\u6ca1\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"--stdin"),"\u9009\u9879, \u6240\u4ee5\u6211\u4eec\u9700\u8981\u4f7f\u7528\u5176\u4ed6\u7684\u65b9\u5f0f\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898.",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,r.kt)("h3",{id:"\u4f7f\u7528chpasswd"},"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"h3"},"chpasswd")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"chpasswd"),"\u547d\u4ee4\u53ef\u4ee5\u7528\u4e8e\u6279\u91cf\u4fee\u6539\u7528\u6237\u7684\u5bc6\u7801, \u8be5\u547d\u4ee4\u7684\u4f7f\u7528\u65b9\u6cd5\u5982\u4e0b."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "user1:password1" | chpasswd\n')),(0,r.kt)("h2",{id:"\u5907\u6ce8"},"\u5907\u6ce8"),(0,r.kt)("p",null,"\u4e0d\u5efa\u8bae\u5728\u811a\u672c\u4e2d\u4fee\u6539\u5bc6\u7801, \u56e0\u4e3a\u8fd9\u6837\u4f1a\u6cc4\u6f0f\u5bc6\u7801.",(0,r.kt)("br",null),"\n\u4f8b\u5982\u5f53\u811a\u672c\u589e\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"set -x"),"\u9009\u9879\u65f6, \u4f1a\u5c06\u5bc6\u7801\u6253\u5370\u51fa\u6765.",(0,r.kt)("br",null),"\n\u8fd9\u79cd\u65b9\u5f0f\u6700\u597d\u5728\u6d4b\u8bd5\u73af\u5883\u4e2d\u4f7f\u7528.",(0,r.kt)("br",null)),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Nothing you can do in bash can possibly work.\npasswd(1) does not read from standard input.\nThis is intentional. It is for your protection.\nPasswords were never intended to be put into programs, or generated by programs.\nThey were intended to be entered only by the fingers of an actual human being, with a functional brain, and never, ever written down anywhere.\nNonetheless, we get hordes of users asking how they can circumvent 35 years of Unix security.")),(0,r.kt)("p",null,"from"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://mywiki.wooledge.org/BashFAQ/078"},"I want to set a user's password using the Unix passwd command, but how do I script that? It doesn't read standard input!"))),(0,r.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.baeldung.com/linux/passwd-shell-script#1-using-stdin-option"},"Using the passwd Command from Within a Shell Script")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://askubuntu.com/questions/1115795/alternative-to-passwd-stdin-in-ubuntu"},"Alternative to passwd --stdin in Ubuntu")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/714915/using-the-passwd-command-from-within-a-shell-script"},"Using the passwd command from within a shell script")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://mywiki.wooledge.org/BashFAQ/078"},"I want to set a user's password using the Unix passwd command, but how do I script that? It doesn't read standard input!"))))}u.isMDXComponent=!0}}]);