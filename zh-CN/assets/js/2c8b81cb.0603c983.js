"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[8285],{86248:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=t(85893),s=t(11151);const r={authors:["xiangcheng.kuo"],tags:["problem-solving","java","ldap","failover","spring"]},c="\u901a\u8fc7\u589e\u52a0timeout-control\u4ee5\u89e3\u51b3\u5f53tcp\u8fde\u63a5\u4e00\u76f4\u5904\u4e8eSYN_SENT\u72b6\u6001\u5bfc\u81f4java\u4e2d\u7684ldap-client\u7684failover\u4e0d\u5de5\u4f5c\u7684\u95ee\u9898",i={permalink:"/zh-CN/blog/2023/03/15/ldap-client-failover",source:"@site/blog/2023-03-15/ldap-client-failover.md",title:"\u901a\u8fc7\u589e\u52a0timeout-control\u4ee5\u89e3\u51b3\u5f53tcp\u8fde\u63a5\u4e00\u76f4\u5904\u4e8eSYN_SENT\u72b6\u6001\u5bfc\u81f4java\u4e2d\u7684ldap-client\u7684failover\u4e0d\u5de5\u4f5c\u7684\u95ee\u9898",description:"\u4eca\u5929\u9047\u5230\u4e00\u4e2a\u95ee\u9898\u662f\u5f53\u6d4b\u8bd5\u6a21\u62dfldap\u7684\u670d\u52a1\u7aef\u4e3b\u8282\u70b9\u6302\u6389\u7684\u65f6\u5019\u5e76\u5728\u9875\u9762\u70b9\u51fb\u767b\u5f55, \u540e\u7aef\u4e00\u76f4\u672a\u4f5c\u51fa\u54cd\u5e94.",date:"2023-03-15T00:00:00.000Z",tags:[{label:"problem-solving",permalink:"/zh-CN/blog/tags/problem-solving"},{label:"java",permalink:"/zh-CN/blog/tags/java"},{label:"ldap",permalink:"/zh-CN/blog/tags/ldap"},{label:"failover",permalink:"/zh-CN/blog/tags/failover"},{label:"spring",permalink:"/zh-CN/blog/tags/spring"}],readingTime:9.175,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","java","ldap","failover","spring"]},unlisted:!1,prevItem:{title:"TestContainers\u56fa\u5b9a\u5bb9\u5668\u7aef\u53e3",permalink:"/zh-CN/blog/2023/03/16/testcontainers-fixed-port"},nextItem:{title:"IntelliJ IDEA\u4e2d\u5b9e\u73b0\u81ea\u5b9a\u4e49\u6ce8\u89e3\u4e2d\u7684\u8bed\u6cd5\u9ad8\u4eae",permalink:"/zh-CN/blog/2023/03/14/intellij-idea-language-injection"}},l={authorsImageUrls:[void 0]},d=[{value:"\u6392\u67e5\u8fc7\u7a0b",id:"\u6392\u67e5\u8fc7\u7a0b",level:2},{value:"\u786e\u8ba4\u670d\u52a1\u914d\u7f6e\u7684<code>ldap</code>\u5730\u5740\u6709\u90a3\u4e9b",id:"\u786e\u8ba4\u670d\u52a1\u914d\u7f6e\u7684ldap\u5730\u5740\u6709\u90a3\u4e9b",level:3},{value:"\u786e\u8ba4\u670d\u52a1\u7684\u8fdb\u7a0bID",id:"\u786e\u8ba4\u670d\u52a1\u7684\u8fdb\u7a0bid",level:3},{value:"\u786e\u8ba4\u670d\u52a1\u8fdb\u7a0b\u7684<code>tcp</code>\u8fde\u63a5\u72b6\u6001",id:"\u786e\u8ba4\u670d\u52a1\u8fdb\u7a0b\u7684tcp\u8fde\u63a5\u72b6\u6001",level:3},{value:"Workaround",id:"workaround",level:2},{value:"\u901a\u8fc7<code>iptables</code>\u65b0\u589e<code>OUTPUT</code>\u89c4\u5219\u4f7f<code>tcp</code>\u8fde\u63a5\u76f4\u63a5\u5931\u8d25",id:"\u901a\u8fc7iptables\u65b0\u589eoutput\u89c4\u5219\u4f7ftcp\u8fde\u63a5\u76f4\u63a5\u5931\u8d25",level:3},{value:"\u5220\u9664\u89c4\u5219",id:"\u5220\u9664\u89c4\u5219",level:3},{value:"\u95ee\u9898\u539f\u56e0",id:"\u95ee\u9898\u539f\u56e0",level:2},{value:"\u504f\u79bb\u8bbe\u8ba1\u9884\u671f",id:"\u504f\u79bb\u8bbe\u8ba1\u9884\u671f",level:3},{value:"\u975e\u5835\u585e",id:"\u975e\u5835\u585e",level:4},{value:"\u5835\u585e",id:"\u5835\u585e",level:4},{value:"<code>ldap-client</code>\u7684<code>timeout-control</code>\u672a\u751f\u6548",id:"ldap-client\u7684timeout-control\u672a\u751f\u6548",level:3},{value:"\u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4",id:"\u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4",level:4},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u7ee7\u627f<code>LdapContextSource</code>\u5e76\u589e\u52a0<code>timeout-control</code>\u914d\u7f6e",id:"\u7ee7\u627fldapcontextsource\u5e76\u589e\u52a0timeout-control\u914d\u7f6e",level:3},{value:"\u5c06<code>WithMoreEnvironmentContextSource</code>\u6dfb\u52a0\u5230\u5bb9\u5668\u4e2d",id:"\u5c06withmoreenvironmentcontextsource\u6dfb\u52a0\u5230\u5bb9\u5668\u4e2d",level:3},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2},{value:"\u5f53<code>iptables</code>\u89c4\u5219\u8f83\u591a\u81ea\u5b9a\u4e49\u7684\u53d7\u5f71\u54cd, \u5982\u4e0b\u6240\u793a",id:"\u5f53iptables\u89c4\u5219\u8f83\u591a\u81ea\u5b9a\u4e49\u7684\u53d7\u5f71\u54cd-\u5982\u4e0b\u6240\u793a",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["\u4eca\u5929\u9047\u5230\u4e00\u4e2a\u95ee\u9898\u662f\u5f53\u6d4b\u8bd5\u6a21\u62df",(0,o.jsx)(n.code,{children:"ldap"}),"\u7684\u670d\u52a1\u7aef\u4e3b\u8282\u70b9\u6302\u6389\u7684\u65f6\u5019\u5e76\u5728\u9875\u9762\u70b9\u51fb\u767b\u5f55, \u540e\u7aef\u4e00\u76f4\u672a\u4f5c\u51fa\u54cd\u5e94.",(0,o.jsx)("br",{}),"\n\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f\u56e0\u4e3a\u4ee3\u7801\u4e2d\u7684",(0,o.jsx)(n.code,{children:"ldap-client"}),"\u7684",(0,o.jsx)(n.code,{children:"failover"}),"\u672a\u751f\u6548, \u901a\u8fc7\u6392\u67e5\u53d1\u73b0",(0,o.jsx)(n.code,{children:"ldap-client"}),"\u4e00\u76f4\u5728\u8fde\u63a5",(0,o.jsx)(n.code,{children:"ldap"}),"\u7684\u4e3b\u8282\u70b9,\n\u5e76\u4e14",(0,o.jsx)(n.code,{children:"tcp"}),"\u8fde\u63a5\u4e00\u76f4\u5904\u4e8e",(0,o.jsx)(n.code,{children:"SYN_SENT"}),"\u72b6\u6001.",(0,o.jsx)("br",{}),"\n\u7531\u4e8e",(0,o.jsx)(n.code,{children:"ldap-client"}),"\u6ca1\u6709\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u6ca1\u6709\u63a7\u5236\u8d85\u65f6, \u5bfc\u81f4\u4ee3\u7801\u4e00\u76f4\u5835\u585e, \u4ece\u800c\u5bfc\u81f4",(0,o.jsx)(n.code,{children:"failover"}),"\u4e0d\u5de5\u4f5c.",(0,o.jsx)("br",{}),"\n\u4e0b\u9762\u5c06\u5f00\u59cb\u4ecb\u7ecd\u5177\u4f53\u7ec6\u8282\u4ee5\u53ca\u89e3\u51b3\u65b9\u6848.",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)(n.h2,{id:"\u6392\u67e5\u8fc7\u7a0b",children:"\u6392\u67e5\u8fc7\u7a0b"}),"\n",(0,o.jsxs)(n.h3,{id:"\u786e\u8ba4\u670d\u52a1\u914d\u7f6e\u7684ldap\u5730\u5740\u6709\u90a3\u4e9b",children:["\u786e\u8ba4\u670d\u52a1\u914d\u7f6e\u7684",(0,o.jsx)(n.code,{children:"ldap"}),"\u5730\u5740\u6709\u90a3\u4e9b"]}),"\n",(0,o.jsxs)(n.p,{children:["\u6267\u884c",(0,o.jsx)(n.code,{children:"docker inspect"}),"\u547d\u4ee4, \u786e\u8ba4\u670d\u52a1\u914d\u7f6e\u7684",(0,o.jsx)(n.code,{children:"ldap"}),"\u5730\u5740"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-log",children:"sudo docker inspect fastone-api |grep 'spring.ldap.urls'\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u8f93\u51fa\u5982\u4e0b"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-log",children:'                "spring.ldap.urls=ldap://10.0.3.16:389,ldap://10.0.3.3:389",\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\u914d\u7f6e\u4e86\u4e24\u4e2a",(0,o.jsx)(n.code,{children:"ldap"}),"\u5730\u5740\u5206\u522b\u4e3a"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"ldap://10.0.3.16:389"}),"\n",(0,o.jsx)(n.li,{children:"ldap://10.0.3.3:389"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"\u786e\u8ba4\u670d\u52a1\u7684\u8fdb\u7a0bid",children:"\u786e\u8ba4\u670d\u52a1\u7684\u8fdb\u7a0bID"}),"\n",(0,o.jsxs)(n.p,{children:["\u6267\u884c",(0,o.jsx)(n.code,{children:"ps"}),"\u547d\u4ee4, \u786e\u8ba4\u670d\u52a1\u7684\u8fdb\u7a0bID"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"ps -ef |grep FastoneApplication\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u547d\u4ee4\u8f93\u51fa\u5982\u4e0b"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-log",children:"ubuntu   22663 14459  0 16:52 pts/5    00:00:00 grep --color=auto FastoneApplication\nroot     31320 31246  1 14:23 ?        00:02:39 java -cp @/app/jib-classpath-file com.fastonetech.fastone.FastoneApplication\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\u8fdb\u7a0bID\u4e3a",(0,o.jsx)(n.code,{children:"31320"}),", \u63a5\u4e0b\u6765\u901a\u8fc7",(0,o.jsx)(n.code,{children:"lsof"}),"\u547d\u4ee4\u67e5\u770b",(0,o.jsx)(n.code,{children:"31320"}),"\u8fdb\u7a0b\u7684",(0,o.jsx)(n.code,{children:"tcp"}),"\u8fde\u63a5\u72b6\u6001",(0,o.jsx)("br",{})]}),"\n",(0,o.jsxs)(n.h3,{id:"\u786e\u8ba4\u670d\u52a1\u8fdb\u7a0b\u7684tcp\u8fde\u63a5\u72b6\u6001",children:["\u786e\u8ba4\u670d\u52a1\u8fdb\u7a0b\u7684",(0,o.jsx)(n.code,{children:"tcp"}),"\u8fde\u63a5\u72b6\u6001"]}),"\n",(0,o.jsxs)(n.p,{children:["\u901a\u8fc7",(0,o.jsx)(n.code,{children:"lsof"}),"\u67e5\u770b",(0,o.jsx)(n.code,{children:"tcp"}),"\u8fde\u63a5\u72b6\u6001"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo lsof -p 31320 |grep '10.0.3.16'\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u547d\u4ee4\u8f93\u51fa\u5982\u4e0b"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-log",children:"java    31320 root  506u     IPv6            5728853       0t0     TCP fastone:37408->10.0.3.16:ldap (SYN_SENT)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\u670d\u52a1\u8fdb\u7a0b\u7684",(0,o.jsx)(n.code,{children:"tcp"}),"\u8fde\u63a5\u72b6\u6001\u4e00\u76f4\u5904\u4e8e",(0,o.jsx)(n.code,{children:"SYN_SENT"}),"\u72b6\u6001.",(0,o.jsx)("br",{})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"SYN_SENT"}),"\u72b6\u6001\u7684\u8fde\u63a5, \u8bf4\u660e\u5ba2\u6237\u7aef\u5df2\u7ecf\u53d1\u9001\u4e86",(0,o.jsx)(n.code,{children:"SYN"}),"\u5305, \u4f46\u662f\u6ca1\u6709\u6536\u5230",(0,o.jsx)(n.code,{children:"SYN/ACK"}),"\u5305, \u6b64\u65f6\u4f1a\u5904\u4e8e",(0,o.jsx)(n.code,{children:"SYN_SENT"}),"\u72b6\u6001",(0,o.jsx)("br",{})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"workaround",children:"Workaround"}),"\n",(0,o.jsxs)(n.p,{children:["\u7531\u4e8e\u8fd9\u4e2a\u95ee\u9898\u4f1a",(0,o.jsx)(n.code,{children:"blocking"}),"\u6d4b\u8bd5\u8fdb\u5ea6\u6240\u4ee5\u9700\u8981\u5148\u7ed9\u51fa\u4e00\u4e2a",(0,o.jsx)(n.code,{children:"workaround"}),"\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898.",(0,o.jsx)("br",{}),"\n\u76ee\u524d\u7684\u89e3\u51b3\u65b9\u6848\u662f\u901a\u8fc7",(0,o.jsx)(n.code,{children:"iptables"}),"\u9650\u5236",(0,o.jsx)(n.code,{children:"tcp"}),"\u8fde\u63a5, \u4f7f\u5176\u76f4\u63a5",(0,o.jsx)(n.code,{children:"Connection refused"}),". \u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd\u6d4b\u8bd5\u80fd\u591f\u7ee7\u7eed\u8fdb\u884c",(0,o.jsx)("br",{})]}),"\n",(0,o.jsxs)(n.h3,{id:"\u901a\u8fc7iptables\u65b0\u589eoutput\u89c4\u5219\u4f7ftcp\u8fde\u63a5\u76f4\u63a5\u5931\u8d25",children:["\u901a\u8fc7",(0,o.jsx)(n.code,{children:"iptables"}),"\u65b0\u589e",(0,o.jsx)(n.code,{children:"OUTPUT"}),"\u89c4\u5219\u4f7f",(0,o.jsx)(n.code,{children:"tcp"}),"\u8fde\u63a5\u76f4\u63a5\u5931\u8d25"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u65b0\u589eOUTPUT\u89c4\u5219"}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u6ce8\u610f",(0,o.jsx)(n.code,{children:"target"}),"\u5e94\u8be5\u4e3a",(0,o.jsx)(n.code,{children:"REJECT"}),"\u800c\u4e0d\u662f",(0,o.jsx)(n.code,{children:"DROP"}),".",(0,o.jsx)("br",{}),"\n\u8fd9\u662f\u56e0\u4e3a",(0,o.jsx)(n.code,{children:"DROP"}),"\u5bf9\u4e8e",(0,o.jsx)(n.code,{children:"tcp"}),"\u8fde\u63a5\u6765\u8bf4, \u4f1a\u76f4\u63a5\u4e22\u5f03\u6570\u636e\u5305.",(0,o.jsx)("br",{}),"\n\u6240\u4ee5\u9700\u8981\u4f7f\u7528",(0,o.jsx)(n.code,{children:"REJECT"}),"\u6765\u62d2\u7edd\u8fde\u63a5, \u5e76\u4e14\u9700\u8981\u6307\u5b9a",(0,o.jsx)(n.code,{children:"--reject-with tcp-reset"}),"\u6765\u62d2\u7edd\u8fde\u63a5.",(0,o.jsx)("br",{}),"\n\u8fd9\u6837\u5ba2\u6237\u7aef\u4f1a\u77e5\u9053\u8fde\u63a5\u88ab\u62d2\u7edd\u4e86\u800c\u4e0d\u662f\u4e00\u76f4\u5904\u4e8e",(0,o.jsx)(n.code,{children:"SYN_SENT"}),"\u72b6\u6001.",(0,o.jsx)("br",{})]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo iptables -A OUTPUT -p tcp -d 10.0.3.16 --dport 389 -j REJECT --reject-with tcp-reset\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u67e5\u770b\u89c4\u5219\u5217\u8868"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo iptables -L OUTPUT -v -n\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u8f93\u51fa\u5982\u4e0b"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-log",children:"Chain OUTPUT (policy ACCEPT 301 packets, 95101 bytes)\npkts bytes target     prot opt in     out     source               destination         \n0     0 REJECT     tcp  --  *      *       0.0.0.0/0            10.0.3.16            tcp dpt:389 reject-with tcp-reset\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230, \u65b0\u589e\u4e86\u4e00\u6761",(0,o.jsx)(n.code,{children:"REJECT"}),"\u89c4\u5219",(0,o.jsx)("br",{})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u6d4b\u8bd5\u89c4\u5219\u662f\u5426\u751f\u6548"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"telnet 10.0.3.16 389\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u8f93\u51fa\u5982\u4e0b"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-log",children:"Trying 10.0.3.16...\ntelnet: Unable to connect to remote host: Connection refused\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\u8fde\u63a5\u88ab\u62d2\u7edd\u4e86, \u8bf4\u660e\u89c4\u5219\u751f\u6548\u4e86",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)(n.h3,{id:"\u5220\u9664\u89c4\u5219",children:"\u5220\u9664\u89c4\u5219"}),"\n",(0,o.jsxs)(n.p,{children:["\u5f53\u4fee\u590d\u4ee3\u7801\u540e, \u9700\u8981\u5220\u9664\u89c4\u5219, \u4ee5\u4fbf\u6d4b\u8bd5\u7ee7\u7eed\u8fdb\u884c",(0,o.jsx)("br",{})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u5220\u9664\u89c4\u5219"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo iptables -D OUTPUT -p tcp -d 10.0.3.16 --dport 389 -j REJECT --reject-with tcp-reset\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u67e5\u770b\u89c4\u5219\u5217\u8868"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo iptables -L OUTPUT -v -n\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u8f93\u51fa\u5982\u4e0b"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-log",children:"Chain OUTPUT (policy ACCEPT 1922 packets, 947K bytes)\n pkts bytes target     prot opt in     out     source               destination    \n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u786e\u8ba4\u8fde\u63a5\u72b6\u6001\u6062\u590d\u5982\u521d"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"telnet 10.0.3.16 389\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u8f93\u51fa\u5982\u4e0b"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-log",children:"Trying 10.0.3.16...\n^C\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\u8fde\u63a5\u72b6\u6001\u6062\u590d\u5982\u521d, \u5ba2\u6237\u7aef\u4e00\u76f4\u5904\u4e8e",(0,o.jsx)(n.code,{children:"SYN_SENT"}),"\u72b6\u6001",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)(n.h2,{id:"\u95ee\u9898\u539f\u56e0",children:"\u95ee\u9898\u539f\u56e0"}),"\n",(0,o.jsxs)(n.p,{children:["\u6839\u636e\u4e0a\u9762\u7684\u5206\u6790, \u95ee\u9898\u7684\u539f\u56e0",(0,o.jsx)(n.code,{children:"TCP"}),"\u8fde\u63a5\u72b6\u6001\u4e00\u76f4\u5904\u4e8e",(0,o.jsx)(n.code,{children:"SYN_SENT"}),"\u72b6\u6001\u5bfc\u81f4",(0,o.jsx)(n.code,{children:"ldap"}),"\u7684",(0,o.jsx)(n.code,{children:"failover"}),"\u672a\u751f\u6548",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)(n.h3,{id:"\u504f\u79bb\u8bbe\u8ba1\u9884\u671f",children:"\u504f\u79bb\u8bbe\u8ba1\u9884\u671f"}),"\n",(0,o.jsxs)(n.p,{children:["\u8fd9\u91cc\u8ddf\u6211\u4e00\u5f00\u59cb\u8bbe\u8ba1\u6709\u504f\u5dee, \u56e0\u4e3a\u6211\u4e00\u5f00\u59cb\u7684\u8bbe\u60f3\u7684\u9884\u671f\u5e94\u8be5\u662f\u76f4\u63a5",(0,o.jsx)(n.code,{children:"Connection refused"}),", \u7c7b\u4f3c\u5982\u4e0b\u884c\u4e3a"]}),"\n",(0,o.jsx)(n.h4,{id:"\u975e\u5835\u585e",children:"\u975e\u5835\u585e"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"telnet localhost 389\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u5f53\u6267\u884c\u4e0a\u8ff0\u547d\u4ee4\u65f6, \u4f1a\u76f4\u63a5\u62a5\u9519"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-log",children:"Trying 127.0.0.1...\ntelnet: Unable to connect to remote host: Connection refused\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u670d\u52a1\u7aef\u4f1a\u76f4\u63a5\u62d2\u7edd\u8fde\u63a5, \u4f46\u662f\u5b9e\u9645\u4e0a\u5e76\u6ca1\u6709\u8fd9\u6837\u7684\u884c\u4e3a, \u670d\u52a1\u7aef\u4e00\u76f4\u5904\u4e8e",(0,o.jsx)(n.code,{children:"SYN_SENT"}),"\u72b6\u6001, \u4e5f\u5c31\u662f\u8bf4\u670d\u52a1\u7aef\u4e00\u76f4\u5728\u5c1d\u8bd5\u8fde\u63a5",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)(n.h4,{id:"\u5835\u585e",children:"\u5835\u585e"}),"\n",(0,o.jsx)(n.p,{children:"\u7c7b\u4f3c\u5982\u4e0b\u884c\u4e3a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"telnet 10.0.3.16 389\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u8f93\u51fa\u5982\u4e0b"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-log",children:"Trying 10.0.3.16...\n^C\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\u4e00\u76f4\u5728\u5c1d\u8bd5\u8fde\u63a5, \u4f46\u662f\u5e76\u6ca1\u6709\u8d85\u65f6, \u4e5f\u5c31\u662f\u8bf4\u4e00\u76f4\u5728\u5c1d\u8bd5\u8fde\u63a5",(0,o.jsx)("br",{})]}),"\n",(0,o.jsxs)(n.h3,{id:"ldap-client\u7684timeout-control\u672a\u751f\u6548",children:[(0,o.jsx)(n.code,{children:"ldap-client"}),"\u7684",(0,o.jsx)(n.code,{children:"timeout-control"}),"\u672a\u751f\u6548"]}),"\n",(0,o.jsxs)(n.p,{children:["\u53e6\u5916\u4e00\u4e2a\u95ee\u9898\u662f",(0,o.jsx)(n.code,{children:"tpc"}),"\u4e00\u76f4\u5904\u4e8e",(0,o.jsx)(n.code,{children:"SYN_SENT"}),"\u72b6\u6001\u7406\u8bba\u6765\u8bf4\u5e94\u8be5\u89e6\u53d1",(0,o.jsx)(n.code,{children:"timeout-control"}),", \u4f46\u662f\u5b9e\u9645\u4e0a\u5e76\u6ca1\u6709\u89e6\u53d1",(0,o.jsx)("br",{})]}),"\n",(0,o.jsxs)(n.p,{children:["\u63a5\u4e0b\u6765\u6211\u4eec\u9700\u8981\u770b\u4e00\u4e0b",(0,o.jsx)(n.code,{children:"java-ldap"}),"\u4e2d\u662f\u5982\u4f55\u5b9e\u73b0",(0,o.jsx)(n.code,{children:"timeout-control"}),"\u7684",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)(n.h4,{id:"\u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4",children:"\u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728",(0,o.jsx)(n.code,{children:"java"}),"\u4e2d",(0,o.jsx)(n.code,{children:"ldap"}),"\u7684\u8fde\u63a5\u662f\u7531",(0,o.jsx)(n.code,{children:"com.sun.jndi.ldap.LdapCtx.connectTimeout"}),"\u63a7\u5236\u7684.",(0,o.jsx)("br",{}),"\n\u53c2\u8003\u4ee3\u7801\u5982\u4e0b"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"public final class LdapCtx extends ComponentDirContext\n\timplements EventDirContext, LdapContext {\n\n\tprivate int connectTimeout = -1;         // no timeout value\n\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230",(0,o.jsx)(n.code,{children:"connectTimeout"}),"\u9ed8\u8ba4\u503c\u4e3a",(0,o.jsx)(n.code,{children:"-1"}),", \u4e5f\u5c31\u662f\u8bf4\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f\u6ca1\u6709\u8d85\u65f6\u7684. \u8fd9\u5176\u5b9e\u4e0d\u5408\u7406, \u56e0\u4e3a\u7f51\u7edc\u8fde\u63a5\u662f\u6709\u8d85\u65f6\u7684,\n\u5426\u5219\u4f1a\u5bfc\u81f4\u4ee3\u7801\u4e00\u76f4\u5835\u585e",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)(n.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,o.jsxs)(n.h3,{id:"\u7ee7\u627fldapcontextsource\u5e76\u589e\u52a0timeout-control\u914d\u7f6e",children:["\u7ee7\u627f",(0,o.jsx)(n.code,{children:"LdapContextSource"}),"\u5e76\u589e\u52a0",(0,o.jsx)(n.code,{children:"timeout-control"}),"\u914d\u7f6e"]}),"\n",(0,o.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b",(0,o.jsx)(n.code,{children:"ldap"}),"\u662f\u6ca1\u6709",(0,o.jsx)(n.code,{children:"timeout-control"}),"\u7684, \u4e0d\u8fc7\u5176\u63d0\u4f9b\u4e86\u914d\u7f6e",(0,o.jsx)(n.code,{children:"connectTimeout"}),"\u7684\u65b9\u6cd5, \u662f\u901a\u8fc7",(0,o.jsx)(n.code,{children:"environment"}),"\u6765\u914d\u7f6e\u7684.",(0,o.jsx)("br",{}),"\n\u5bf9\u4e8e\u4e0a\u5c42\u5e94\u7528\u6765\u8bf4\u6211\u4eec\u7528\u7684\u662f\u901a\u8fc7",(0,o.jsx)(n.code,{children:"spring"}),"\u5c01\u88c5\u8fc7\u7684",(0,o.jsx)(n.code,{children:"ldap"}),", \u6240\u4ee5\u6211\u4eec\u9700\u8981\u5bf9\u4e8e",(0,o.jsx)(n.code,{children:"spring"}),"\u8fdb\u884c\u6269\u5c55,\n\u4e3b\u8981\u662f\u901a\u8fc7\u7ee7\u627f",(0,o.jsx)(n.code,{children:"LdapContextSource"}),"\u6765\u5b9e\u73b0",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",metastring:'title="WithMoreEnvironmentContextSource.java"',children:'/**\n * The extension of {@link LdapContextSource} to support more environment.\n * Sometimes we need to set more environment to environment.\n * For example, we need to set the connectTimeout to avoid thread blocking and makesure the failover works.\n * For more details about the connectTimeout, see {@link com.sun.jndi.ldap.LdapCtx.connectTimeout}\n * For more details about the readTimeout, see {@link com.sun.jndi.ldap.LdapCtx.readTimeout}\n * For more details about the ldap failover, see {@link com.sun.jndi.ldap.LdapCtxFactory#getUsingURLs}\n *\n * @author Xiangcheng.Kuo\n */\npublic class WithMoreEnvironmentContextSource extends LdapContextSource {\n\n\tprivate Integer connectTimeout = -1;\n\n\tprivate Integer readTimeout = -1;\n\n\tpublic void setConnectTimeout(Integer connectTimeout) {\n\t\tthis.connectTimeout = connectTimeout;\n\t}\n\n\tpublic void setReadTimeout(Integer readTimeout) {\n\t\tthis.readTimeout = readTimeout;\n\t}\n\n\t@Override\n\tprotected DirContext getDirContextInstance(Hashtable<String, Object> environment) throws NamingException {\n\t\t// The module named "com.sun.jndi.ldap.LdapCtx" is not exported.\n\t\t// So we can\'t use the following code\n\t\t// LdapCtx.CONNECT_TIMEOUT\n\t\t// For more information about CONNECT_TIMEOUT\n\t\t// see 1. LdapCtx.initEnv 2. Connection.createSocket\n\t\tenvironment.put("com.sun.jndi.ldap.connect.timeout", connectTimeout.toString());\n\t\tenvironment.put("com.sun.jndi.ldap.read.timeout", readTimeout.toString());\n\t\treturn super.getDirContextInstance(environment);\n\t}\n\n}\n'})}),"\n",(0,o.jsxs)(n.h3,{id:"\u5c06withmoreenvironmentcontextsource\u6dfb\u52a0\u5230\u5bb9\u5668\u4e2d",children:["\u5c06",(0,o.jsx)(n.code,{children:"WithMoreEnvironmentContextSource"}),"\u6dfb\u52a0\u5230\u5bb9\u5668\u4e2d"]}),"\n",(0,o.jsxs)(n.p,{children:["\u63a5\u4e0b\u6765\u9700\u8981\u5c06",(0,o.jsx)(n.code,{children:"WithMoreEnvironmentContextSource"}),"\u6dfb\u52a0\u5230\u5bb9\u5668\u4e2d, \u786e\u4fdd\u4e0a\u5c42\u7684\u4f9d\u8d56\u5982",(0,o.jsx)(n.code,{children:"LdapTemplate"}),"\u4ee5\u53ca\u81ea\u5b9a\u4e49\u7684",(0,o.jsx)(n.code,{children:"Reposity"}),"\n\u4f7f\u7528\u5230\u6211\u4eec\u6269\u5c55\u7684",(0,o.jsx)(n.code,{children:"LdapContextSource"}),(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",metastring:'title="LdapConfiguration.java"',children:"\n@Configuration\npublic class LdapConfiguration {\n\n\t@Bean\n\tpublic LdapContextSource ldapContextSource(\n\t\tLdapProperties properties,\n\t\tEnvironment environment,\n\t\tObjectProvider<DirContextAuthenticationStrategy> dirContextAuthenticationStrategy\n\t) {\n\t\t// copy from org.springframework.boot.autoconfigure.ldap.LdapAutoConfiguration#ldapContextSource\n\t\tWithMoreEnvironmentContextSource source = new WithMoreEnvironmentContextSource();\n\t\tdirContextAuthenticationStrategy.ifUnique(source::setAuthenticationStrategy);\n\t\tPropertyMapper propertyMapper = PropertyMapper.get().alwaysApplyingWhenNonNull();\n\t\tpropertyMapper.from(properties.getUsername()).to(source::setUserDn);\n\t\tpropertyMapper.from(properties.getPassword()).to(source::setPassword);\n\t\tpropertyMapper.from(properties.getAnonymousReadOnly()).to(source::setAnonymousReadOnly);\n\t\tpropertyMapper.from(properties.getBase()).to(source::setBase);\n\t\tpropertyMapper.from(properties.determineUrls(environment)).to(source::setUrls);\n\t\tpropertyMapper.from(properties.getBaseEnvironment()).to(\n\t\t\t(baseEnvironment) -> source.setBaseEnvironmentProperties(Collections.unmodifiableMap(baseEnvironment)));\n\n\t\t// We need to make sure the failover works fast when using multiple ldap backend\n\t\tif (properties.getUrls().length > 1) {\n\t\t\tsource.setConnectTimeout(2000);\n\t\t\tsource.setReadTimeout(2000);\n\t\t}\n\n\t\treturn source;\n\t}\n\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u4e3b\u8981\u4ee3\u7801\u590d\u5236\u81ea",(0,o.jsx)(n.code,{children:"org.springframework.boot.autoconfigure.ldap.LdapAutoConfiguration#ldapContextSource"}),",\n\u5177\u4f53\u7ec6\u8282\u53ef\u4ee5\u53c2\u8003\u5176\u6e90\u7801",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)(n.h2,{id:"\u5907\u6ce8",children:"\u5907\u6ce8"}),"\n",(0,o.jsxs)(n.h3,{id:"\u5f53iptables\u89c4\u5219\u8f83\u591a\u81ea\u5b9a\u4e49\u7684\u53d7\u5f71\u54cd-\u5982\u4e0b\u6240\u793a",children:["\u5f53",(0,o.jsx)(n.code,{children:"iptables"}),"\u89c4\u5219\u8f83\u591a\u81ea\u5b9a\u4e49\u7684\u53d7\u5f71\u54cd, \u5982\u4e0b\u6240\u793a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo iptables -L OUTPUT -v -n\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-log",children:"Chain OUTPUT (policy ACCEPT 186K packets, 95M bytes)\n pkts bytes target     prot opt in     out     source               destination         \n    0     0 DROP       tcp  --  *      *       10.0.3.16            0.0.0.0/0            tcp dpt:3306\n    0     0 DROP       tcp  --  *      *       10.0.3.16            0.0.0.0/0            tcp dpt:389\n    0     0 DROP       tcp  --  *      *       10.0.3.16            0.0.0.0/0            tcp spt:389\n    0     0 DROP       tcp  --  *      *       10.0.3.16            0.0.0.0/0            tcp spt:389\n   63  3276 DROP       tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            state NEW tcp dpt:389\n    0     0 REJECT     tcp  --  *      *       0.0.0.0/0            10.0.3.16            tcp dpt:389 reject-with tcp-reset\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u9700\u8981\u6e05\u7a7a\u6240\u6709OUTPUT\u89c4\u5219"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo iptables -F OUTPUT\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u91cd\u65b0\u67e5\u770bOUTPUT\u89c4\u5219"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo iptables -L OUTPUT -v -n\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-log",children:"Chain OUTPUT (policy ACCEPT 1883 packets, 1126K bytes)\n pkts bytes target     prot opt in     out     source               destination      \n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://medium.com/devsys/what-means-syn-sent-status-in-a-socket-5ea03eaf6ca9",children:"What means SYN_SENT status in a socket?"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.cisco.com/assets/sol/sb/CVR100W_GUI_EN/help/EN_help/status13.html",children:"Viewing NETSTAT Information"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://karunsubramanian.com/network/what-is-syn_sent-socket-status/",children:"What is SYN_SENT socket status?"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.baeldung.com/linux/iptables-reject-vs-drop",children:"REJECT vs. DROP When Using iptables"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://serverfault.com/questions/157375/reject-vs-drop-when-using-iptables",children:"REJECT vs DROP when using iptables"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://stackoverflow.com/questions/40218516/a-way-to-define-implement-failover-ldap-servers-in-java-code",children:"A way to define / implement failover ldap servers in java code"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://docs.oracle.com/javase/tutorial/jndi/newstuff/readtimeout.html",children:"Setting Timeout for Ldap Operations"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>c});var o=t(67294);const s={},r=o.createContext(s);function c(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);