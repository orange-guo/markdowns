"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[8651],{15430:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var r=n(85893),o=n(11151);const l={},t="process",c={id:"development/infra/linux/process",title:"process",description:"\u901a\u8fc7pstree\u547d\u4ee4\u67e5\u770b\u8fdb\u7a0b\u6811",source:"@site/docs/development/infra/linux/process.md",sourceDirName:"development/infra/linux",slug:"/development/infra/linux/process",permalink:"/docs/development/infra/linux/process",draft:!1,unlisted:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/development/infra/linux/process.md",tags:[],version:"current",lastUpdatedBy:"Xiangcheng Kuo",lastUpdatedAt:1712049169e3,frontMatter:{},sidebar:"development",previous:{title:"others",permalink:"/docs/development/infra/linux/others"},next:{title:"shell",permalink:"/docs/development/infra/linux/shell"}},d={},i=[{value:"\u901a\u8fc7<code>pstree</code>\u547d\u4ee4\u67e5\u770b\u8fdb\u7a0b\u6811",id:"\u901a\u8fc7pstree\u547d\u4ee4\u67e5\u770b\u8fdb\u7a0b\u6811",level:2},{value:"\u901a\u8fc7<code>strace</code>\u547d\u4ee4\u67e5\u770b\u8fdb\u884c\u7684\u7cfb\u7edf\u8c03\u7528",id:"\u901a\u8fc7strace\u547d\u4ee4\u67e5\u770b\u8fdb\u884c\u7684\u7cfb\u7edf\u8c03\u7528",level:2},{value:"\u901a\u8fc7<code>lsof</code>\u547d\u4ee4\u67e5\u770b\u7ba1\u9053",id:"\u901a\u8fc7lsof\u547d\u4ee4\u67e5\u770b\u7ba1\u9053",level:2},{value:"\u901a\u8fc7<code>lsof</code>\u547d\u4ee4\u67e5\u770b\u6587\u4ef6\u53e5\u67c4",id:"\u901a\u8fc7lsof\u547d\u4ee4\u67e5\u770b\u6587\u4ef6\u53e5\u67c4",level:2}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"process",children:"process"}),"\n",(0,r.jsxs)(s.h2,{id:"\u901a\u8fc7pstree\u547d\u4ee4\u67e5\u770b\u8fdb\u7a0b\u6811",children:["\u901a\u8fc7",(0,r.jsx)(s.code,{children:"pstree"}),"\u547d\u4ee4\u67e5\u770b\u8fdb\u7a0b\u6811"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"pstree -p -s <pid> -T\n"})}),"\n",(0,r.jsxs)(s.h2,{id:"\u901a\u8fc7strace\u547d\u4ee4\u67e5\u770b\u8fdb\u884c\u7684\u7cfb\u7edf\u8c03\u7528",children:["\u901a\u8fc7",(0,r.jsx)(s.code,{children:"strace"}),"\u547d\u4ee4\u67e5\u770b\u8fdb\u884c\u7684\u7cfb\u7edf\u8c03\u7528"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"strace -p <pid>\n"})}),"\n",(0,r.jsxs)(s.h2,{id:"\u901a\u8fc7lsof\u547d\u4ee4\u67e5\u770b\u7ba1\u9053",children:["\u901a\u8fc7",(0,r.jsx)(s.code,{children:"lsof"}),"\u547d\u4ee4\u67e5\u770b\u7ba1\u9053"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"# grep pipe\nlsof|grep FIFO\n"})}),"\n",(0,r.jsxs)(s.h2,{id:"\u901a\u8fc7lsof\u547d\u4ee4\u67e5\u770b\u6587\u4ef6\u53e5\u67c4",children:["\u901a\u8fc7",(0,r.jsx)(s.code,{children:"lsof"}),"\u547d\u4ee4\u67e5\u770b\u6587\u4ef6\u53e5\u67c4"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"lsof -p <pid>\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://unix.stackexchange.com/questions/252134/lsof-p-pid-vs-lsof-grep-pid",children:"lsof -p PID vs lsof | grep PID"})}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>t});var r=n(67294);const o={},l=r.createContext(o);function t(e){const s=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(l.Provider,{value:s},e.children)}}}]);