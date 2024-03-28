"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[2992],{15566:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var l=d(85893),a=d(11151);const s={authors:["xiangcheng.kuo"],tags:["linux","wayland","gnome"]},r="\u542f\u7528Wayland",c={permalink:"/blog/2024/03/27/enalbe-wayland",source:"@site/blog/2024-03-27/enalbe-wayland.md",title:"\u542f\u7528Wayland",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b, \u684c\u9762\u5e94\u7528\u548cBackend\u901a\u4fe1\u534f\u8bae\u662fX11\u534f\u8bae.",date:"2024-03-27T00:00:00.000Z",formattedDate:"March 27, 2024",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"wayland",permalink:"/blog/tags/wayland"},{label:"gnome",permalink:"/blog/tags/gnome"}],readingTime:3.445,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["linux","wayland","gnome"]},unlisted:!1,nextItem:{title:"kopia\u63a5\u5165\u706b\u5c71\u4e91TOS\u62a5\u9519Access Denied\u95ee\u9898\u7684\u6392\u67e5\u53ca\u4fee\u590d",permalink:"/blog/2024/03/14/kopia-integration-with-volcano-cloud-tos-access-denied-issue-investigation-and-fix"}},i={authorsImageUrls:[void 0]},o=[{value:"\u786e\u8ba4\u5f53\u524d\u7684\u901a\u4fe1\u534f\u8bae",id:"\u786e\u8ba4\u5f53\u524d\u7684\u901a\u4fe1\u534f\u8bae",level:2},{value:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u91cd\u542fgdm\u670d\u52a1\u5e76\u8fdb\u5165\u684c\u9762",id:"\u91cd\u542fgdm\u670d\u52a1\u5e76\u8fdb\u5165\u684c\u9762",level:2},{value:"\u9a8c\u8bc1",id:"\u9a8c\u8bc1",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2},{value:"Update 2023-03-28",id:"update-2023-03-28",level:2}];function t(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b, \u684c\u9762\u5e94\u7528\u548c",(0,l.jsx)(n.code,{children:"Backend"}),"\u901a\u4fe1\u534f\u8bae\u662f",(0,l.jsx)(n.code,{children:"X11"}),"\u534f\u8bae. ",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.code,{children:"Wayland"}),"\u662f",(0,l.jsx)(n.code,{children:"X11"}),"\u7684\u66ff\u4ee3\u54c1, \u53ef\u4ee5\u63d0\u4f9b\u66f4\u597d\u7684\u6027\u80fd\u548c\u4f53\u9a8c.(\u7ed8\u56fe\u5728Client\u4fa7\u800c\u4e0d\u662f\u50cf",(0,l.jsx)(n.code,{children:"X11"}),"\u4e00\u6837\u7531",(0,l.jsx)(n.code,{children:"XServer"}),"\u8d1f\u8d23).",(0,l.jsx)("br",{}),"\n\u4e0b\u9762\u5c06\u4ecb\u7ecd\u5982\u4f55\u542f\u7528",(0,l.jsx)(n.code,{children:"Wayland"}),"\u534f\u8bae."]}),"\n",(0,l.jsx)(n.h2,{id:"\u786e\u8ba4\u5f53\u524d\u7684\u901a\u4fe1\u534f\u8bae",children:"\u786e\u8ba4\u5f53\u524d\u7684\u901a\u4fe1\u534f\u8bae"}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4, \u786e\u8ba4\u5f53\u524d\u7684\u901a\u4fe1\u534f\u8bae:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"echo $XDG_SESSION_TYPE\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5f53\u8f93\u51fa\u7ed3\u679c\u4e3a",(0,l.jsx)(n.code,{children:"x11"}),"\u65f6, \u8bf4\u660e\u5f53\u524d\u4f7f\u7528\u7684\u662f",(0,l.jsx)(n.code,{children:"X11"}),"\u534f\u8bae.\n\u5982\u679c\u8f93\u51fa\u7ed3\u679c\u4e3a",(0,l.jsx)(n.code,{children:"wayland"}),"\u65f6, \u8bf4\u660e\u5f53\u524d\u4f7f\u7528\u7684\u662f",(0,l.jsx)(n.code,{children:"Wayland"}),"\u534f\u8bae, \u4e0d\u9700\u8981\u505a\u4efb\u4f55\u64cd\u4f5c."]}),"\n",(0,l.jsx)(n.h2,{id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",children:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4, \u4fee\u6539\u914d\u7f6e\u6587\u4ef6:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo vim /etc/gdm3/custom.conf\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5c06\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684",(0,l.jsx)(n.code,{children:"WaylandEnable=false"}),"\u6539\u4e3a",(0,l.jsx)(n.code,{children:"WaylandEnable=true"})]}),"\n",(0,l.jsx)(n.h2,{id:"\u91cd\u542fgdm\u670d\u52a1\u5e76\u8fdb\u5165\u684c\u9762",children:"\u91cd\u542fgdm\u670d\u52a1\u5e76\u8fdb\u5165\u684c\u9762"}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4, \u91cd\u542fgdm\u670d\u52a1:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo systemctl restart gdm\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5f53",(0,l.jsx)(n.code,{children:"gdm"}),"\u670d\u52a1\u91cd\u542f\u540e, \u5f53\u524d\u767b\u5f55\u7684\u4f1a\u8bdd\u4f1a\u9000\u51fa, \u9700\u8981\u91cd\u65b0\u767b\u5f55, \u767b\u5f55\u65f6\u9009\u62e9",(0,l.jsx)(n.code,{children:"Wayland"}),"\u767b\u5f55\u65b9\u5f0f\u5373\u53ef."]}),"\n",(0,l.jsx)(n.h2,{id:"\u9a8c\u8bc1",children:"\u9a8c\u8bc1"}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4, \u9a8c\u8bc1\u662f\u5426\u542f\u7528Wayland:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"echo $XDG_SESSION_TYPE\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5f53\u8f93\u51fa\u7ed3\u679c\u4e3a",(0,l.jsx)(n.code,{children:"wayland"}),"\u65f6, \u8bf4\u660e\u542f\u7528Wayland\u6210\u529f."]}),"\n",(0,l.jsx)(n.h2,{id:"\u53c2\u8003\u8d44\u6599",children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://linuxconfig.org/how-to-enable-disable-wayland-on-ubuntu-22-04-desktop",children:"How to enable/disable wayland on Ubuntu 22.04 Desktop"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"update-2023-03-28",children:"Update 2023-03-28"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u4f7f\u7528\u4e86\u4e00\u6bb5\u65f6\u95f4\u540e, \u53d1\u73b0\u90e8\u5206\u5e94\u7528\u5bf9",(0,l.jsx)(n.code,{children:"Wayland"}),"\u7684\u652f\u6301\u4e0d\u8db3.",(0,l.jsx)("br",{}),"\n\u4f8b\u5982",(0,l.jsx)(n.code,{children:"InteiliJ IDEA"}),", \u5176\u5e95\u5c42\u57fa\u4e8e",(0,l.jsx)(n.code,{children:"Java"}),"\u7684",(0,l.jsx)(n.code,{children:"Swing"}),"\u5b9e\u73b0\u56fe\u5f62\u6e32\u67d3, \u4f46\u662f\u76ee\u524d",(0,l.jsx)(n.code,{children:"Swing"}),"\u8fd8\u662f\u57fa\u4e8e",(0,l.jsx)(n.code,{children:"X11"}),"\u534f\u8bae, \u56e0\u6b64\u65e0\u6cd5\u4f7f\u7528",(0,l.jsx)(n.code,{children:"Wayland"}),"\u534f\u8bae,\n\u4f1a\u5bfc\u81f4\u7cfb\u7edf\u4f7f\u7528",(0,l.jsx)(n.code,{children:"XWayland"}),"\u6765\u6a21\u62df",(0,l.jsx)(n.code,{children:"X11"}),"\u534f\u8bae, \u4ece\u800c\u5f71\u54cd\u5176\u6027\u80fd,\n\u4e3b\u8981\u7684\u5f71\u54cd\u662f\u6253\u5b57\u8f93\u5165\u7684\u6e32\u67d3\u4f1a\u6bd4\u8f83\u5361\u987f\u4ee5\u53ca\u5e94\u7528\u5185\u90e8\u7a97\u53e3\u521d\u59cb\u5316\u65f6\u4f1a\u51fa\u73b0\u77ed\u6682\u7684\u9ed1\u8272\u80cc\u666f.",(0,l.jsx)("br",{})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Jetbrains"}),"\u53bb\u5e74\u53d1\u5e03\u8fc7\u4e00\u4e2a\u535a\u5ba2, \u8be5\u535a\u5ba2\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u57fa\u4e8e",(0,l.jsx)(n.code,{children:"IntelliJ"}),"\u7684",(0,l.jsx)(n.code,{children:"IDE"}),"\u5bf9",(0,l.jsx)(n.code,{children:"Wayland"}),"\u7684\u652f\u6301.",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.a,{href:"https://blog.jetbrains.com/platform/2023/08/wayland-support/",children:"Wayland Support for IntelliJ-based IDEs"}),(0,l.jsx)("br",{}),"\n\u8be5\u535a\u5ba2\u4e2d\u9996\u5148\u5bf9",(0,l.jsx)(n.code,{children:"Wayland"}),"\u4f5c\u51fa\u4e86\u4ecb\u7ecd, \u4ee5\u53ca\u76ee\u524d",(0,l.jsx)(n.code,{children:"Java"}),"\u5bf9",(0,l.jsx)(n.code,{children:"Wayland"}),"\u7684\u652f\u6301\u73b0\u72b6\u4ee5\u53ca",(0,l.jsx)(n.code,{children:"Xwayland"}),"\u76ee\u524d\u7684\u517c\u5bb9\u8fc7\u6e21\u65b9\u6848.",(0,l.jsx)("br",{}),"\n\u4e2d\u95f4\u4ecb\u7ecd\u4e86\u76ee\u524d\u5bf9\u4e8e\u539f\u751f",(0,l.jsx)(n.code,{children:"Wayland"}),"\u652f\u6301\u7684\u6311\u6218.",(0,l.jsx)("br",{}),"\n\u6700\u540e\u662f\u5bf9\u672a\u6765\u652f\u6301",(0,l.jsx)(n.code,{children:"Wayland"}),"\u7684\u5c55\u671b.",(0,l.jsx)("br",{}),"\n\u8be5\u535a\u5ba2\u4e2d\u63d0\u5230\u4e86\u76ee\u524d",(0,l.jsx)(n.code,{children:"OpenJDK"}),"\u4e2d\u7684",(0,l.jsx)(n.code,{children:"Wakefield"}),"\u9879\u76ee\u81f4\u529b\u4e8e\u89e3\u51b3\u8ba9\u5728",(0,l.jsx)(n.code,{children:"JDK"}),"\u4e2d\u5b9e\u73b0",(0,l.jsx)(n.code,{children:"Wayland display server"}),"\u7684\u652f\u6301",(0,l.jsx)("br",{})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u8be5\u9879\u76ee\u6709\u4e2d\u77ed\u671f\u548c\u4e2d\u957f\u671f\u4e24\u4e2a\u76ee\u6807:"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u77ed\u671f\u5230\u4e2d\u671f\u89e3\u51b3\u65b9\u6848:",(0,l.jsx)("br",{}),"\na short to medium term solution for JDK running on Wayland in X11 compatibility mode.",(0,l.jsx)("br",{}),"\nJDK\u5728X11\u517c\u5bb9\u6a21\u5f0f\u4e0b\u8fd0\u884c\u5728Wayland\u4e0a.",(0,l.jsx)("br",{})]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u4e2d\u671f\u5230\u957f\u671f\u89e3\u51b3\u65b9\u6848:",(0,l.jsx)("br",{}),"\na medium to long term solution for JDK running as a native Wayland client. Pure Wayland toolkit plan proposal.",(0,l.jsx)("br",{}),"\nJDK\u4f5c\u4e3a\u539f\u751fWayland\u5ba2\u6237\u7aef, \u9700\u8981\u4e00\u4e2a\u7eafWayland\u5de5\u5177\u5305\u65b9\u6848.",(0,l.jsx)("br",{})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u66f4\u591a\u4fe1\u606f\u53c2\u8003:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://wiki.openjdk.org/display/wakefield",children:"OpenJDK Project Wakefield - Wayland desktop support for JDK on Linux"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://cr.openjdk.org/~prr/javaone/2022/wakefield/wakefield_bof.pdf",children:"Project Wakefield: A New Wayland Desktop for Java On Linux"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},11151:(e,n,d)=>{d.d(n,{Z:()=>c,a:()=>r});var l=d(67294);const a={},s=l.createContext(a);function r(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);