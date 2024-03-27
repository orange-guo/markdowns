"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[2992],{15566:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>r});var l=a(85893),d=a(11151);const s={authors:["xiangcheng.kuo"],tags:["linux","wayland","gnome"]},c="\u542f\u7528Wayland",o={permalink:"/zh-CN/blog/2024/03/27/enalbe-wayland",source:"@site/blog/2024-03-27/enalbe-wayland.md",title:"\u542f\u7528Wayland",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b, \u56fe\u5f62\u5e94\u7528\u548cdisplay server\u4e4b\u95f4\u7684\u901a\u4fe1\u534f\u8bae\u662fX11\u534f\u8bae. Wayland\u662fX11\u7684\u66ff\u4ee3\u54c1, \u53ef\u4ee5\u63d0\u4f9b\u66f4\u597d\u7684\u6027\u80fd\u548c\u4f53\u9a8c.",date:"2024-03-27T00:00:00.000Z",formattedDate:"2024\u5e743\u670827\u65e5",tags:[{label:"linux",permalink:"/zh-CN/blog/tags/linux"},{label:"wayland",permalink:"/zh-CN/blog/tags/wayland"},{label:"gnome",permalink:"/zh-CN/blog/tags/gnome"}],readingTime:1.36,hasTruncateMarker:!1,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["linux","wayland","gnome"]},unlisted:!1,nextItem:{title:"kopia\u63a5\u5165\u706b\u5c71\u4e91TOS\u62a5\u9519Access Denied\u95ee\u9898\u7684\u6392\u67e5\u53ca\u4fee\u590d",permalink:"/zh-CN/blog/2024/03/14/kopia-integration-with-volcano-cloud-tos-access-denied-issue-investigation-and-fix"}},i={authorsImageUrls:[void 0]},r=[{value:"\u786e\u8ba4\u5f53\u524d\u7684\u901a\u4fe1\u534f\u8bae",id:"\u786e\u8ba4\u5f53\u524d\u7684\u901a\u4fe1\u534f\u8bae",level:2},{value:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u91cd\u542fgdm\u670d\u52a1\u5e76\u8fdb\u5165\u684c\u9762",id:"\u91cd\u542fgdm\u670d\u52a1\u5e76\u8fdb\u5165\u684c\u9762",level:2},{value:"\u9a8c\u8bc1",id:"\u9a8c\u8bc1",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}];function t(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b, \u56fe\u5f62\u5e94\u7528\u548c",(0,l.jsx)(n.code,{children:"display server"}),"\u4e4b\u95f4\u7684\u901a\u4fe1\u534f\u8bae\u662f",(0,l.jsx)(n.code,{children:"X11"}),"\u534f\u8bae. ",(0,l.jsx)(n.code,{children:"Wayland"}),"\u662f",(0,l.jsx)(n.code,{children:"X11"}),"\u7684\u66ff\u4ee3\u54c1, \u53ef\u4ee5\u63d0\u4f9b\u66f4\u597d\u7684\u6027\u80fd\u548c\u4f53\u9a8c.\n\u4e0b\u9762\u5c06\u4ecb\u7ecd\u5982\u4f55\u542f\u7528",(0,l.jsx)(n.code,{children:"Wayland"}),"\u534f\u8bae."]}),"\n",(0,l.jsx)(n.h2,{id:"\u786e\u8ba4\u5f53\u524d\u7684\u901a\u4fe1\u534f\u8bae",children:"\u786e\u8ba4\u5f53\u524d\u7684\u901a\u4fe1\u534f\u8bae"}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4, \u786e\u8ba4\u5f53\u524d\u7684\u901a\u4fe1\u534f\u8bae:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"echo $XDG_SESSION_TYPE\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5f53\u8f93\u51fa\u7ed3\u679c\u4e3a",(0,l.jsx)(n.code,{children:"x11"}),"\u65f6, \u8bf4\u660e\u5f53\u524d\u4f7f\u7528\u7684\u662f",(0,l.jsx)(n.code,{children:"X11"}),"\u534f\u8bae.\n\u5982\u679c\u8f93\u51fa\u7ed3\u679c\u4e3a",(0,l.jsx)(n.code,{children:"wayland"}),"\u65f6, \u8bf4\u660e\u5f53\u524d\u4f7f\u7528\u7684\u662f",(0,l.jsx)(n.code,{children:"Wayland"}),"\u534f\u8bae, \u4e0d\u9700\u8981\u505a\u4efb\u4f55\u64cd\u4f5c."]}),"\n",(0,l.jsx)(n.h2,{id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",children:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4, \u4fee\u6539\u914d\u7f6e\u6587\u4ef6:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo vim /etc/gdm3/custom.conf\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5c06\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684",(0,l.jsx)(n.code,{children:"WaylandEnable=false"}),"\u6539\u4e3a",(0,l.jsx)(n.code,{children:"WaylandEnable=true"})]}),"\n",(0,l.jsx)(n.h2,{id:"\u91cd\u542fgdm\u670d\u52a1\u5e76\u8fdb\u5165\u684c\u9762",children:"\u91cd\u542fgdm\u670d\u52a1\u5e76\u8fdb\u5165\u684c\u9762"}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4, \u91cd\u542fgdm\u670d\u52a1:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo systemctl restart gdm\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5f53",(0,l.jsx)(n.code,{children:"gdm"}),"\u670d\u52a1\u91cd\u542f\u540e, \u5f53\u524d\u767b\u5f55\u7684\u4f1a\u8bdd\u4f1a\u9000\u51fa, \u9700\u8981\u91cd\u65b0\u767b\u5f55, \u767b\u5f55\u65f6\u9009\u62e9",(0,l.jsx)(n.code,{children:"Wayland"}),"\u767b\u5f55\u65b9\u5f0f\u5373\u53ef."]}),"\n",(0,l.jsx)(n.h2,{id:"\u9a8c\u8bc1",children:"\u9a8c\u8bc1"}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4, \u9a8c\u8bc1\u662f\u5426\u542f\u7528Wayland:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"echo $XDG_SESSION_TYPE\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5f53\u8f93\u51fa\u7ed3\u679c\u4e3a",(0,l.jsx)(n.code,{children:"wayland"}),"\u65f6, \u8bf4\u660e\u542f\u7528Wayland\u6210\u529f."]}),"\n",(0,l.jsx)(n.h2,{id:"\u53c2\u8003\u8d44\u6599",children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://linuxconfig.org/how-to-enable-disable-wayland-on-ubuntu-22-04-desktop",children:"How to enable/disable wayland on Ubuntu 22.04 Desktop"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>c});var l=a(67294);const d={},s=l.createContext(d);function c(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);