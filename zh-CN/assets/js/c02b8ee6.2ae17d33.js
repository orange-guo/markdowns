"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[464],{79068:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(85893),t=n(11151);const o={},c="process",l={id:"note/infra/linux/process",title:"process",description:"\u901a\u8fc7pstree\u547d\u4ee4\u67e5\u770b\u8fdb\u7a0b\u6811",source:"@site/docs/note/infra/linux/process.md",sourceDirName:"note/infra/linux",slug:"/note/infra/linux/process",permalink:"/zh-CN/docs/note/infra/linux/process",draft:!1,unlisted:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/note/infra/linux/process.md",tags:[],version:"current",lastUpdatedBy:"Xiangcheng Kuo",lastUpdatedAt:1711945422,formattedLastUpdatedAt:"2024\u5e744\u67081\u65e5",frontMatter:{},sidebar:"note",previous:{title:"others",permalink:"/zh-CN/docs/note/infra/linux/others"},next:{title:"shell",permalink:"/zh-CN/docs/note/infra/linux/shell"}},i={},d=[{value:"\u901a\u8fc7<code>pstree</code>\u547d\u4ee4\u67e5\u770b\u8fdb\u7a0b\u6811",id:"\u901a\u8fc7pstree\u547d\u4ee4\u67e5\u770b\u8fdb\u7a0b\u6811",level:2},{value:"\u901a\u8fc7<code>strace</code>\u547d\u4ee4\u67e5\u770b\u8fdb\u884c\u7684\u7cfb\u7edf\u8c03\u7528",id:"\u901a\u8fc7strace\u547d\u4ee4\u67e5\u770b\u8fdb\u884c\u7684\u7cfb\u7edf\u8c03\u7528",level:2},{value:"\u901a\u8fc7<code>lsof</code>\u547d\u4ee4\u67e5\u770b\u7ba1\u9053",id:"\u901a\u8fc7lsof\u547d\u4ee4\u67e5\u770b\u7ba1\u9053",level:2},{value:"\u901a\u8fc7<code>lsof</code>\u547d\u4ee4\u67e5\u770b\u6587\u4ef6\u53e5\u67c4",id:"\u901a\u8fc7lsof\u547d\u4ee4\u67e5\u770b\u6587\u4ef6\u53e5\u67c4",level:2}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"process",children:"process"}),"\n",(0,r.jsxs)(s.h2,{id:"\u901a\u8fc7pstree\u547d\u4ee4\u67e5\u770b\u8fdb\u7a0b\u6811",children:["\u901a\u8fc7",(0,r.jsx)(s.code,{children:"pstree"}),"\u547d\u4ee4\u67e5\u770b\u8fdb\u7a0b\u6811"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"pstree -p -s <pid> -T\n"})}),"\n",(0,r.jsxs)(s.h2,{id:"\u901a\u8fc7strace\u547d\u4ee4\u67e5\u770b\u8fdb\u884c\u7684\u7cfb\u7edf\u8c03\u7528",children:["\u901a\u8fc7",(0,r.jsx)(s.code,{children:"strace"}),"\u547d\u4ee4\u67e5\u770b\u8fdb\u884c\u7684\u7cfb\u7edf\u8c03\u7528"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"strace -p <pid>\n"})}),"\n",(0,r.jsxs)(s.h2,{id:"\u901a\u8fc7lsof\u547d\u4ee4\u67e5\u770b\u7ba1\u9053",children:["\u901a\u8fc7",(0,r.jsx)(s.code,{children:"lsof"}),"\u547d\u4ee4\u67e5\u770b\u7ba1\u9053"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"# grep pipe\nlsof|grep FIFO\n"})}),"\n",(0,r.jsxs)(s.h2,{id:"\u901a\u8fc7lsof\u547d\u4ee4\u67e5\u770b\u6587\u4ef6\u53e5\u67c4",children:["\u901a\u8fc7",(0,r.jsx)(s.code,{children:"lsof"}),"\u547d\u4ee4\u67e5\u770b\u6587\u4ef6\u53e5\u67c4"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"lsof -p <pid>\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://unix.stackexchange.com/questions/252134/lsof-p-pid-vs-lsof-grep-pid",children:"lsof -p PID vs lsof | grep PID"})}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>c});var r=n(67294);const t={},o=r.createContext(t);function c(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);