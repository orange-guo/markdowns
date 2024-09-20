"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[83454],{19323:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>t,toc:()=>c});var r=i(74848),s=i(28453);const d={authors:["orange"],tags:["troubleshooting","linux","vnc","tigervnc","desktop","xorg","x11","xdotool","xwininfo","xrandr","xprop","vncserver"]},l="\u5b9e\u73b0\u5728X\u684c\u9762\u73af\u5883\u4e2d\u5728\u4e0d\u5f15\u5165\u7a97\u53e3\u7ba1\u7406\u5668\u7684\u60c5\u51b5\u4e0b\u5b9e\u73b0\u7a97\u53e3\u7684\u5168\u5c4f",t={permalink:"/blog/2024/07/18/implement-fullscreen-window-in-x-desktop-environment-without-window-manager",source:"@site/blog/2024-07-18-implement-fullscreen-window-in-x-desktop-environment-without-window-manager.md",title:"\u5b9e\u73b0\u5728X\u684c\u9762\u73af\u5883\u4e2d\u5728\u4e0d\u5f15\u5165\u7a97\u53e3\u7ba1\u7406\u5668\u7684\u60c5\u51b5\u4e0b\u5b9e\u73b0\u7a97\u53e3\u7684\u5168\u5c4f",description:"\u6700\u8fd1\u9700\u8981\u5b8c\u6210\u4e00\u4e2aRemote App\u7684\u529f\u80fd, \u8fd9\u4e2a\u529f\u80fd\u5927\u81f4\u662f\u8fd9\u6837\u7684:",date:"2024-07-18T00:00:00.000Z",tags:[{inline:!0,label:"troubleshooting",permalink:"/blog/tags/troubleshooting"},{inline:!0,label:"linux",permalink:"/blog/tags/linux"},{inline:!0,label:"vnc",permalink:"/blog/tags/vnc"},{inline:!0,label:"tigervnc",permalink:"/blog/tags/tigervnc"},{inline:!0,label:"desktop",permalink:"/blog/tags/desktop"},{inline:!0,label:"xorg",permalink:"/blog/tags/xorg"},{inline:!0,label:"x11",permalink:"/blog/tags/x-11"},{inline:!0,label:"xdotool",permalink:"/blog/tags/xdotool"},{inline:!0,label:"xwininfo",permalink:"/blog/tags/xwininfo"},{inline:!0,label:"xrandr",permalink:"/blog/tags/xrandr"},{inline:!0,label:"xprop",permalink:"/blog/tags/xprop"},{inline:!0,label:"vncserver",permalink:"/blog/tags/vncserver"}],readingTime:12.42,hasTruncateMarker:!0,authors:[{name:"orange",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"orange"}],frontMatter:{authors:["orange"],tags:["troubleshooting","linux","vnc","tigervnc","desktop","xorg","x11","xdotool","xwininfo","xrandr","xprop","vncserver"]},unlisted:!1,prevItem:{title:"\u521b\u5efaVNC\u4f1a\u8bdd\u62a5\u9519A VNC server is already running as :xxx",permalink:"/blog/2024/09/18/troubleshooting-a-vnc-server-is-already-running-as-xxx"},nextItem:{title:"\u5728Chrome\u4e2d\u5185\u7f6e\u7aef\u4fa7\u5927\u6a21\u578b",permalink:"/blog/2024/07/06/enable-ai-in-chrome"}},o={authorsImageUrls:[void 0]},c=[{value:"\u6280\u672f\u5b9e\u73b0",id:"\u6280\u672f\u5b9e\u73b0",level:2},{value:"\u95ee\u9898",id:"\u95ee\u9898",level:2},{value:"\u601d\u8def",id:"\u601d\u8def",level:2},{value:"\u83b7\u53d6\u6240\u6709\u7a97\u53e3",id:"\u83b7\u53d6\u6240\u6709\u7a97\u53e3",level:2},{value:"\u83b7\u53d6\u4e3b\u7a97\u53e3",id:"\u83b7\u53d6\u4e3b\u7a97\u53e3",level:2},{value:"\u5de5\u5177",id:"\u5de5\u5177",level:2},{value:"xwininfo",id:"xwininfo",level:3},{value:"xprop",id:"xprop",level:3},{value:"xdotool",id:"xdotool",level:3},{value:"xrandr",id:"xrandr",level:4},{value:"\u5b9e\u73b0\u4ee3\u7801",id:"\u5b9e\u73b0\u4ee3\u7801",level:2},{value:"vncserver",id:"vncserver",level:3},{value:"<code>~/.vnc-1721295131/start-remote-app.sh</code>",id:"vnc-1721295131start-remote-appsh",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:["\u6700\u8fd1\u9700\u8981\u5b8c\u6210\u4e00\u4e2a",(0,r.jsx)(e.code,{children:"Remote App"}),"\u7684\u529f\u80fd, \u8fd9\u4e2a\u529f\u80fd\u5927\u81f4\u662f\u8fd9\u6837\u7684:"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u7528\u6237\u5728\u6d4f\u89c8\u5668\u4e2d\u5b8c\u6210\u5bf9\u684c\u9762\u7aef\u7a0b\u5e8f\u7684\u6240\u6709\u7684\u64cd\u4f5c, \u4f8b\u5982",(0,r.jsx)(e.code,{children:"Ansys Fluent"}),", \u6574\u4e2a\u8fc7\u7a0b\u7528\u6237\u4e0d\u9700\u8981\u4e0b\u8f7d\u4efb\u4f55\u76f8\u5173\u684c\u9762\u7a0b\u5e8f, \u6240\u6709\u8f6f\u4ef6\u90fd\u5b89\u88c5\u5728\u8fdc\u7aef\u7684\u5b9e\u4f8b\u4e2d, \u5e73\u53f0\u6839\u636e\u7528\u6237\u9009\u62e9\u7684\u5e94\u7528\u5728\u7cfb\u7edf\u7684\u684c\u9762\u8d44\u6e90\u6c60\u4e2d\u5206\u914d\u4e00\u4e2a\u865a\u62df\u684c\u9762, \u5e76\u5728\u8fd9\u4e2a\u865a\u62df\u684c\u9762\u4e2d\u542f\u52a8\u76f8\u5173\u5e94\u7528\u7a0b\u5e8f."]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u6280\u672f\u5b9e\u73b0",children:"\u6280\u672f\u5b9e\u73b0"}),"\n",(0,r.jsxs)(e.p,{children:["\u6574\u4e2a\u6280\u672f\u5b9e\u73b0\u662f\u5728\u8fdc\u7a0b\u4e3b\u673a\u4e2d\u901a\u8fc7",(0,r.jsx)(e.code,{children:"VNC"}),"\u534f\u8bae\u5bf9\u5916\u66b4\u9732\u8fdc\u7a0b\u684c\u9762\u8bbf\u95ee, \u5728",(0,r.jsx)(e.code,{children:"VNC"}),"\u4f1a\u8bdd\u4e2d\u5355\u72ec\u542f\u52a8\u4e00\u4e2a\u684c\u9762\u5e94\u7528(\u4e0d\u5305\u542b\u684c\u9762\u7ba1\u7406\u5668\u90e8\u5206, \u5178\u578b\u7684\u4f8b\u5982",(0,r.jsx)(e.code,{children:"GNOME"}),", ",(0,r.jsx)(e.code,{children:"KDE Plasma"}),"), ",(0,r.jsx)(e.code,{children:"VNC"}),"\u4f1a\u8bdd\u4f1a\u88ab\u57fa\u4e8e",(0,r.jsx)(e.code,{children:"web-vnc"}),"\u7684\u524d\u7aef\u7ec4\u4ef6\u5d4c\u5165\u5230\u6d4f\u89c8\u5668\u9875\u9762\u4e2d, \u4f8b\u5982",(0,r.jsx)(e.code,{children:"iframe"}),"\u4e2d, \u7136\u540e",(0,r.jsx)(e.code,{children:"UI"}),"\u4fa7\u5c06\u76f8\u5173",(0,r.jsx)(e.code,{children:"iframe"}),"\u5c01\u88c5\u4e3a\u4e00\u4e2a\u684c\u9762\u7a97\u53e3, \u6700\u7ec8\u5b9e\u73b0\u4e00\u4e2a",(0,r.jsx)(e.code,{children:"Remote App"}),"\u7684\u529f\u80fd."]}),"\n",(0,r.jsx)(e.h2,{id:"\u95ee\u9898",children:"\u95ee\u9898"}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u6574\u4e2a\u5b9e\u73b0\u8fc7\u7a0b\u4e2d, \u9047\u5230\u7684\u95ee\u9898\u5982\u6807\u9898\u6240\u8ff0, \u9700\u8981\u89e3\u51b3\u5728",(0,r.jsx)(e.code,{children:"VNC"}),"\u4f1a\u8bdd\u4e2d\u5355\u72ec\u542f\u52a8\u4e00\u4e2a\u684c\u9762\u5e94\u7528\u5e76\u5c06\u5176\u5168\u5c4f\u5316, \u5426\u5219\u5982\u679c\u6ca1\u6709\u5168\u5c4f\u4f1a\u5bfc\u81f4\u684c\u9762\u5468\u8fb9\u4e3a\u9ed1\u8272\u7684(\u56e0\u4e3a\u5e94\u7528\u6ca1\u6709\u5b8c\u5168\u8986\u76d6\u6574\u4e2a",(0,r.jsx)(e.code,{children:"VNC"}),"\u684c\u9762), \u8fd9\u6837\u7528\u6237\u7684\u4f53\u9a8c\u6548\u679c\u4f1a\u4e0d\u53cb\u597d"]}),"\n",(0,r.jsx)(e.h2,{id:"\u601d\u8def",children:"\u601d\u8def"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f, \u5e94\u7528\u81ea\u52a8\u5168\u5c4f\u8fd9\u4e2a\u529f\u80fd\u76ee\u524d\u5df2\u7ecf\u6709\u7a97\u53e3\u7ba1\u7406\u5668\u80fd\u591f\u5b9e\u73b0, \u5178\u578b\u7684\u662f",(0,r.jsx)(e.code,{children:"dwm"}),"\u8fd9\u7c7b\u5e73\u94fa\u5f0f\u7a97\u53e3\u7ba1\u7406\u5668(",(0,r.jsx)(e.code,{children:"Tiling Window Manager"}),")\n\u4f46\u662f\u8003\u8651\u5230\u6211\u4eec\u8981\u89e3\u51b3\u7684\u95ee\u9898\u5f88\u7b80\u5355, \u800c\u4e14\u4e0d\u5e0c\u671b\u5f15\u5165\u592a\u591a\u7684\u4f9d\u8d56, \u6240\u4ee5\u6211\u4eec\u9700\u8981\u81ea\u5df1\u624b\u52a8\u7f16\u5199\u4e00\u4e2a\u6765\u7528\u4e8e\u5b9e\u73b0\u5e94\u7528\u5168\u5c4f\u7684\u811a\u672c."]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u7b80\u5355\u7684\u601d\u8def\u662f\u8c03\u7528",(0,r.jsx)(e.code,{children:"X"}),"\u63d0\u4f9b\u7684\u5de5\u5177\u83b7\u53d6\u5230\u7cfb\u7edf\u4e2d\u7684\u6240\u6709\u7a97\u53e3,\n\u83b7\u53d6\u5230\u7cfb\u7edf\u4e2d\u7684\u7a97\u53e3\u540e, \u901a\u8fc7\u8c03\u6574\u7a97\u53e3\u5927\u5c0f\u7684\u547d\u4ee4\u6765\u5b9e\u73b0\u7a97\u53e3\u7684\u5168\u5c4f,"]}),"\n",(0,r.jsx)(e.h2,{id:"\u83b7\u53d6\u6240\u6709\u7a97\u53e3",children:"\u83b7\u53d6\u6240\u6709\u7a97\u53e3"}),"\n",(0,r.jsxs)(e.p,{children:["\u9996\u5148\u7684\u9700\u8981\u83b7\u53d6\u5230\u76ee\u524d\u7cfb\u7edf\u4e2d\u7684\u6d3b\u52a8\u7a97\u53e3, \u83b7\u53d6\u7a97\u53e3\u53ef\u4ee5\u901a\u8fc7",(0,r.jsx)(e.code,{children:"xwininfo"}),"\u547d\u4ee4, \u8be5\u547d\u4ee4\u7528\u6cd5\u5982\u4e0b"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"xwininfo -root -children\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u4e0a\u8ff0\u547d\u4ee4\u5c06\u80fd\u591f\u83b7\u53d6\u5230\u6240\u6709\u7a97\u53e3, \u8f93\u51fa\u7ed3\u679c\u5982\u4e0b"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-log",children:'xwininfo: Window id: 0x51a (the root window) (has no name)\n\n  Root window id: 0x51a (the root window) (has no name)\n  Parent window id: 0x0 (none)\n     11 children:\n     0x533 (has no name): ()  100x100+0+0  +0+0\n     0xa00000 "Chromium clipboard": ()  10x10+-100+-100  +-100+-100\n     0x200101 "StringDecoderBenchmark.java ? test.sh": ("jetbrains-idea" "jetbrains-idea")  2560x1440+0+0  +0+0\n     0x200108 "sun-awt-X11-XIconWindow": ()  16x16+0+0  +0+0\n     0x2000d7 "jetbrains-idea": ("jetbrains-idea" "jetbrains-idea")  1x1+1+1  +1+1\n     0x800011 "java": ("java" "Java")  4x4+0+0  +0+0\n     0x80000d "java": ("java" "Java")  200x200+0+0  +0+0\n     0x800007 "java": ("java" "Java")  200x200+0+0  +0+0\n     0x800003 "java": ("java" "Java")  200x200+0+0  +0+0\n     0x800001 "java": ("java" "Java")  10x10+10+10  +10+10\n     0x400001 (has no name): ()  10x10+-20+-20  +-20+-20\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d, \u6574\u4e2a",(0,r.jsx)(e.code,{children:"VNC"}),"\u4f1a\u8bdd\u53ea\u542f\u52a8\u4e86\u4e00\u4e2a",(0,r.jsx)(e.code,{children:"Intellij IDEA"}),"\u8fdb\u7a0b, \u4f46\u662f\u53ef\u4ee5\u53d1\u73b0, \u7ed3\u679c\u4e2d\u51fa\u73b0\u4e86\u591a\u4e2a\u7a97\u53e3, \u8fd9\u662f\u56e0\u4e3a\u6211\u4eec\u5e73\u65f6\u770b\u5230\u7684\u7a97\u53e3\u53ef\u80fd\u662f\u591a\u4e2a\u7a97\u53e3\u7684\u7ec4\u5408, \u4f8b\u5982:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u8bbe\u7f6e\u9009\u9879\u7684\u4e0b\u62c9\u6846, \u5728",(0,r.jsx)(e.code,{children:"X"}),"\u770b\u6765\u8fd9\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u7a97\u53e3, \u4f46\u662f",(0,r.jsx)(e.code,{children:"IDEA"}),"\u7a0b\u5e8f\u5c06\u8fd9\u4e9b\u7a97\u53e3\u8fdb\u884c\u7ec4\u5408, \u5f62\u6210\u4e86\u6700\u7ec8\u7684\u7a97\u53e3"]}),"\n",(0,r.jsxs)(e.li,{children:["\u6b64\u5916\u8fd8\u6709\u4e00\u4e9b\u7cfb\u7edf\u4e2d\u7684\u5bf9\u8bdd\u6846, \u8fd9\u4e9b\u4e5f\u662f\u5c5e\u4e8e",(0,r.jsx)(e.code,{children:"Window"})]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u6211\u4eec\u9700\u8981\u5ffd\u7565\u8fd9\u4e9b\u7a97\u53e3, \u53ea\u83b7\u53d6\u5230",(0,r.jsx)(e.code,{children:"IDEA"}),"\u7a0b\u5e8f\u7684\u4e3b\u7a97\u53e3, \u6240\u4ee5\u8fd9\u91cc\u7684\u4e3b\u8981\u95ee\u9898\u662f\u5982\u4f55\u83b7\u53d6\u5230\u4e3b\u7a97\u53e3"]}),"\n",(0,r.jsx)(e.h2,{id:"\u83b7\u53d6\u4e3b\u7a97\u53e3",children:"\u83b7\u53d6\u4e3b\u7a97\u53e3"}),"\n",(0,r.jsxs)(e.p,{children:["\u4e3a\u4e86\u80fd\u591f\u83b7\u53d6\u5230\u4e3b\u7a97\u53e3, \u5728",(0,r.jsx)(e.code,{children:"Google"}),"\u4e0a\u641c\u7d22\u76f8\u5173\u95ee\u9898, \u6ca1\u6709\u627e\u5230\u5b8c\u6574\u7684\u89e3\u51b3\u65b9\u6848, \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b, \u6211\u4eec\u53ea\u80fd\u81ea\u5df1\u81ea\u5df1\u67e5\u770b\u7a97\u53e3\u7ba1\u7406\u5668\u7684\u903b\u8f91\u6765\u63a2\u7d22\u89e3\u51b3\u65b9\u6848.",(0,r.jsx)("br",{}),"\n\u5728\u4e4b\u524d\u7684\u5de5\u4f5c\u4e2d, \u6211\u4eec\u4f7f\u7528\u8fc7",(0,r.jsx)(e.code,{children:"dwm"}),"\u4f5c\u4e3a\u7a97\u53e3\u7ba1\u7406\u5668, \u5728",(0,r.jsx)(e.code,{children:"dwm"}),"\u4e2d, \u5f53\u6574\u4e2a\u684c\u9762\u53ea\u6709\u4e00\u4e2a\u7a97\u53e3\u65f6, \u5e94\u7528\u4f1a\u81ea\u52a8\u5168\u5c4f, \u53ea\u4f1a\u5bf9\u5e94\u7528\u7684\u4e3b\u7a97\u53e3\u8fdb\u884c\u7ba1\u7406, \u800c\u4e0d\u4f1a\u5bf9\u5b50\u7a97\u53e3\u8fdb\u884c\u7ba1\u7406, \u4e3a\u4e86\u80fd\u591f\u77e5\u9053\u8fd9\u91cc\u7684\u903b\u8f91, \u6211\u4eec\u9700\u8981\u5728",(0,r.jsx)(e.code,{children:"dwm"}),"\u4e2d\u67e5\u770b\u76f8\u5173\u4ee3\u7801, \u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4",(0,r.jsx)(e.code,{children:"clone"}),"dwm\u9879\u76ee\u7684\u4ee3\u7801"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"git clone https://git.suckless.org/dwm\n"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"dwm"}),"\u662f\u4e00\u4e2a\u5f88\u7b80\u5355\u7684\u7a97\u53e3\u7ba1\u7406\u5668, \u6574\u4e2a\u903b\u8f91\u90fd\u5728",(0,r.jsx)(e.code,{children:"dwm.c"}),"\u6587\u4ef6\u4e2d, \u6211\u4eec\u53ef\u4ee5\u67e5\u770b",(0,r.jsx)(e.code,{children:"dwm.c"}),"\u6587\u4ef6\u4e2d\u7684",(0,r.jsx)(e.code,{children:"main"}),"\u51fd\u6570, \u8be5\u51fd\u6570\u4ee3\u7801\u5982\u4e0b"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'int\nmain(int argc, char *argv[])\n{\n\tif (argc == 2 && !strcmp("-v", argv[1]))\n\t\tdie("dwm-"VERSION);\n\telse if (argc != 1)\n\t\tdie("usage: dwm [-v]");\n\tif (!setlocale(LC_CTYPE, "") || !XSupportsLocale())\n\t\tfputs("warning: no locale support\\n", stderr);\n\tif (!(dpy = XOpenDisplay(NULL)))\n\t\tdie("dwm: cannot open display");\n\tcheckotherwm();\n\tsetup();\n#ifdef __OpenBSD__\n\tif (pledge("stdio rpath proc exec", NULL) == -1)\n\t\tdie("pledge");\n#endif /* __OpenBSD__ */\n\tscan();\n\trun();\n\tcleanup();\n\tXCloseDisplay(dpy);\n\treturn EXIT_SUCCESS;\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u4e0a\u8ff0\u4ee3\u7801\u4e2d, \u6211\u4eec\u9700\u8981\u5173\u5fc3\u7684\u662f",(0,r.jsx)(e.code,{children:"scan"}),"\u51fd\u6570, \u8fd9\u4e2a\u51fd\u6570\u4ece\u540d\u5b57\u4e0a\u6765\u770b\u662f\u626b\u63cf\u7a97\u53e3\u7684, \u5177\u4f53\u7684\u626b\u63cf\u7a97\u53e3\u903b\u8f91\u6211\u4eec\u53ef\u4ee5\u67e5\u770b",(0,r.jsx)(e.code,{children:"scan"}),"\u51fd\u6570\u7684\u5b9e\u73b0, \u8be5\u51fd\u6570\u4ee3\u7801\u5982\u4e0b"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"void\nscan(void)\n{\n\tunsigned int i, num;\n\tWindow d1, d2, *wins = NULL;\n\tXWindowAttributes wa;\n\n\tif (XQueryTree(dpy, root, &d1, &d2, &wins, &num)) {\n\t\tfor (i = 0; i < num; i++) {\n\t\t\tif (!XGetWindowAttributes(dpy, wins[i], &wa)\n\t\t\t|| wa.override_redirect || XGetTransientForHint(dpy, wins[i], &d1))\n\t\t\t\tcontinue;\n\t\t\tif (wa.map_state == IsViewable || getstate(wins[i]) == IconicState)\n\t\t\t\tmanage(wins[i], &wa);\n\t\t}\n\t\tfor (i = 0; i < num; i++) { /* now the transients */\n\t\t\tif (!XGetWindowAttributes(dpy, wins[i], &wa))\n\t\t\t\tcontinue;\n\t\t\tif (XGetTransientForHint(dpy, wins[i], &d1)\n\t\t\t&& (wa.map_state == IsViewable || getstate(wins[i]) == IconicState))\n\t\t\t\tmanage(wins[i], &wa);\n\t\t}\n\t\tif (wins)\n\t\t\tXFree(wins);\n\t}\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u8fd9\u6bb5\u4ee3\u7801\u4e2d, \u6211\u4eec\u53ef\u4ee5\u770b\u5230, ",(0,r.jsx)(e.code,{children:"dwm"}),"\u4f1a\u626b\u63cf\u6574\u4e2a\u684c\u9762\u7684\u6240\u6709\u7a97\u53e3, \u5e76\u4e14\u4f1a\u6839\u636e\u7a97\u53e3\u7684\u5c5e\u6027\u6765\u5224\u65ad\u662f\u5426\u9700\u8981\u7ba1\u7406\u7a97\u53e3, \u7a97\u53e3\u7684\u5c5e\u6027\u53ef\u4ee5\u901a\u8fc7",(0,r.jsx)(e.code,{children:"XGetWindowAttributes"}),"\u51fd\u6570\u83b7\u53d6, \u7a97\u53e3\u7684\u5c5e\u6027\u5305\u62ec\u7a97\u53e3\u7684"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"map_state"}),"(\u8868\u793a\u7a97\u53e3\u662f\u5426\u53ef\u89c1, ",(0,r.jsx)(e.code,{children:"IsViewable"}),"\u8868\u793a\u7a97\u53e3\u53ef\u89c1, ",(0,r.jsx)(e.code,{children:"IsUnmapped"}),"\u8868\u793a\u7a97\u53e3\u4e0d\u53ef\u89c1)"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"override_redirect"}),"(\u8868\u793a\u7a97\u53e3\u662f\u5426\u88ab\u91cd\u5b9a\u5411)"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"transient_for"}),"(\u4e34\u65f6\u7a97\u53e3, \u4f8b\u5982\u5bf9\u8bdd\u6846, \u8fd9\u4e2a\u6307\u6307\u5411\u4e86\u548c\u8fd9\u4e2a\u7a97\u53e3\u5173\u8054\u7684\u7a97\u53e3, \u901a\u5e38\u4e3a\u7236\u7a97\u53e3)"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u6839\u636e\u4e0a\u8ff0\u903b\u8f91, \u6211\u4eec\u53ef\u4ee5\u63d0\u53d6\u51fa",(0,r.jsx)(e.code,{children:"dwm"}),"\u7ba1\u7406\u7a97\u53e3\u7684\u5173\u952e\u7ebf\u7d22"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"map_state"}),"\u5fc5\u987b\u4e3a",(0,r.jsx)(e.code,{children:"IsViewable"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"override_redirect"}),"\u5fc5\u987b\u4e3a",(0,r.jsx)(e.code,{children:"False"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"transient_for"}),"\u5fc5\u987b\u4e3a",(0,r.jsx)(e.code,{children:"None"})]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u6839\u636e\u4e0a\u8ff0\u7ebf\u7d22, \u6211\u4eec\u5df2\u7ecf\u77e5\u9053\u4e86\u8981\u505a\u54ea\u4e9b\u5224\u65ad, \u63a5\u4e0b\u6765\u6211\u4eec\u9700\u8981\u77e5\u9053\u5982\u4f55\u83b7\u53d6\u5230\u7a97\u53e3\u7684\u5c5e\u6027, \u4e0a\u8ff0\u5c5e\u6027\u53ef\u4ee5\u901a\u8fc7"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"xwininfo"}),"\n",(0,r.jsx)(e.li,{children:"xprop"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u6765\u83b7\u53d6\u5230"}),"\n",(0,r.jsx)(e.h2,{id:"\u5de5\u5177",children:"\u5de5\u5177"}),"\n",(0,r.jsx)(e.h3,{id:"xwininfo",children:"xwininfo"}),"\n",(0,r.jsxs)(e.p,{children:["xwininfo\u53ef\u4ee5\u83b7\u53d6\u5230",(0,r.jsx)(e.code,{children:"Map State"}),"\u548c",(0,r.jsx)(e.code,{children:"Override Redirect State"})]}),"\n",(0,r.jsx)(e.p,{children:"\u547d\u4ee4\u7528\u4f8b\u5982\u4e0b:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"xwininfo -id 0x200101\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-log",children:'\nxwininfo: Window id: 0x200101 "StringDecoderBenchmark.java ? test.sh"\n\n  Absolute upper-left X:  0\n  Absolute upper-left Y:  0\n  Relative upper-left X:  0\n  Relative upper-left Y:  0\n  Width: 2560\n  Height: 1440\n  Depth: 24\n  Visual: 0x21\n  Visual Class: TrueColor\n  Border width: 0\n  Class: InputOutput\n  Colormap: 0x20 (installed)\n  Bit Gravity State: NorthWestGravity\n  Window Gravity State: NorthWestGravity\n  Backing Store State: NotUseful\n  Save Under State: no\n  Map State: IsViewable\n  Override Redirect State: no\n  Corners:  +0+0  -0+0  -0-0  +0-0\n  -geometry 2560x1440+0+0\n\n\n'})}),"\n",(0,r.jsx)(e.h3,{id:"xprop",children:"xprop"}),"\n",(0,r.jsxs)(e.p,{children:["xprop\u53ef\u4ee5\u83b7\u53d6\u5230",(0,r.jsx)(e.code,{children:"WM_TRANSIENT_FOR(WINDOW)"}),"\u4fe1\u606f, \u5982\u679c\u83b7\u53d6\u4e0d\u5230, \u8bf4\u660e\u7a97\u53e3\u6ca1\u6709\u8bbe\u7f6e",(0,r.jsx)(e.code,{children:"WM_TRANSIENT_FOR"}),"\u5c5e\u6027"]}),"\n",(0,r.jsx)(e.p,{children:"\u547d\u4ee4\u7528\u4f8b\u5982\u4e0b:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"xprop -id 0x200101\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-log",children:'_MOTIF_DRAG_RECEIVER_INFO(_MOTIF_DRAG_RECEIVER_INFO) = 0x6c, 0x0, 0x5, 0x0, 0x1, 0x1, 0x20, 0x0, 0x0, 0x0, 0x0, 0x0, 0x10, 0x0, 0x0, 0x0\nXdndAware(ATOM) = BITMAP\n_MOTIF_WM_HINTS(_MOTIF_WM_HINTS) = 0x3, 0x1, 0x1, 0x0, 0x0\nWM_HINTS(WM_HINTS):\n                Client accepts input or input focus: False\n                Initial state is Normal State.\n                bitmap id # to use for icon: 0x20010f\n                bitmap id # of mask for icon: 0x200111\n                window id # to use for icon: 0x200108\n_NET_WM_PID(CARDINAL) = 3009322\nWM_CLIENT_MACHINE(STRING) = "gxc-stack-node-1"\nWM_PROTOCOLS(ATOM): protocols  WM_TAKE_FOCUS, WM_DELETE_WINDOW\nWM_CLASS(STRING) = "jetbrains-idea", "jetbrains-idea"\nWM_CLIENT_LEADER(WINDOW): window id # 0x2000d7\n_NET_WM_ICON_NAME(UTF8_STRING) = "StringDecoderBenchmark.java ? test.sh"\nWM_ICON_NAME(COMPOUND_TEXT) = "StringDecoderBenchmark.java ? test.sh"\n_NET_WM_NAME(UTF8_STRING) = "StringDecoderBenchmark.java ? test.sh"\nWM_NAME(COMPOUND_TEXT) = "StringDecoderBenchmark.java ? test.sh"\nWM_NORMAL_HINTS(WM_SIZE_HINTS):\n                user specified location: 0, 0\n                program specified location: 0, 0\n                program specified size: 2560 by 1440\n                program specified minimum size: 340 by 0\n                window gravity: NorthWest\n'})}),"\n",(0,r.jsx)(e.h3,{id:"xdotool",children:"xdotool"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"xdotool"}),"\u53ef\u4ee5\u7528\u6765\u4fee\u6539\u7a97\u53e3\u7684\u5927\u5c0f\u4ee5\u53ca\u504f\u79fb, \u547d\u4ee4\u7528\u4f8b\u5982\u4e0b:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"xdotool windowsize 0x200101 2560 1440 # \u4fee\u6539\u7a97\u53e3\u5927\u5c0f\u4e3a2560x1440\nxdotool windowmove 0x200101 0 0 \u4fee\u6539\u7a97\u53e3\u504f\u79fb\u4e3a(0,0), \u8fd9\u4e2a\u503c\u662f\u76f8\u5bf9\u4e8e\u7a97\u53e3\u5de6\u4e0a\u89d2\u7684\u504f\u79fb\n"})}),"\n",(0,r.jsx)(e.h4,{id:"xrandr",children:"xrandr"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"xrandr"}),"\u53ef\u4ee5\u7528\u6765\u83b7\u53d6\u5f53\u524d\u684c\u9762\u7684\u5c4f\u5e55\u5927\u5c0f, \u547d\u4ee4\u7528\u4f8b\u5982\u4e0b:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"xrandr \n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-log",children:"Screen 0: minimum 32 x 32, current 2560 x 1440, maximum 32768 x 32768\nVNC-0 connected 2560x1440+0+0 0mm x 0mm\n   2560x1440     60.00*+\n   1920x1200     60.00  \n   1920x1080     60.00  \n   1600x1200     60.00  \n   1680x1050     60.00  \n   1400x1050     60.00  \n   1360x768      60.00  \n   1280x1024     60.00  \n   1280x960      60.00  \n   1280x800      60.00  \n   1280x720      60.00  \n   1024x768      60.00  \n   800x600       60.00  \n   640x480       60.00  \n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u4e0a\u8ff0\u8f93\u51fa\u4e2d\u8f93\u51fa\u4e86\u7cfb\u7edf\u4e2d\u652f\u6301\u7684\u5206\u8fa8\u7387, \u5176\u4e2d",(0,r.jsx)(e.code,{children:"*"}),"\u8868\u793a\u5f53\u524d\u5c4f\u5e55\u7684\u5206\u8fa8\u7387"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5b9e\u73b0\u4ee3\u7801",children:"\u5b9e\u73b0\u4ee3\u7801"}),"\n",(0,r.jsx)(e.h3,{id:"vncserver",children:"vncserver"}),"\n",(0,r.jsxs)(e.p,{children:["\u9996\u5148\u662f",(0,r.jsx)(e.code,{children:"vncserver"}),"\u521b\u5efa",(0,r.jsx)(e.code,{children:"VNC"}),"\u4f1a\u8bdd\u7684\u547d\u4ee4"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"vncserver -xstartup ~/.vnc-1721295131/start-remote-app.sh\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u4e0a\u8ff0\u547d\u4ee4\u4e2d, \u6211\u4eec\u914d\u7f6e\u4e86",(0,r.jsx)(e.code,{children:"-xstartup"}),"\u53c2\u6570, \u8fd9\u6837\u6765\u786e\u4fdd\u53ea\u8fd0\u884c\u6211\u4eec\u671f\u671b\u7684\u684c\u9762\u5e94\u7528\u800c\u4e0d\u662f\u6574\u4e2a\u684c\u9762\u73af\u5883,\n\u9700\u8981\u6ce8\u610f\u7684\u662f, \u811a\u672c\u6587\u4ef6\u662f\u52a8\u6001\u751f\u6210\u7684, \u6240\u4ee5\u6bcf\u6b21\u542f\u52a8",(0,r.jsx)(e.code,{children:"vncserver"}),"\u90fd\u4f1a\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u811a\u672c\u6587\u4ef6"]}),"\n",(0,r.jsx)(e.h3,{id:"vnc-1721295131start-remote-appsh",children:(0,r.jsx)(e.code,{children:"~/.vnc-1721295131/start-remote-app.sh"})}),"\n",(0,r.jsxs)(e.p,{children:["\u63a5\u4e0b\u6765\u662f",(0,r.jsx)(e.code,{children:"~/.vnc-1721295131/start-remote-app.sh"}),"\u811a\u672c\u5185\u5bb9, \u5927\u81f4\u7684\u5de5\u4f5c\u4ee3\u7801\u5982\u4e0b"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",metastring:'title="~/.vnc-1721295131/start-remote-app.sh"',children:'#!/bin/bash\nwhile true; do\n  sleep 0.5s\n  echo "Begin loop"\n  screen_size=$(xrandr | grep \'*+\' | tr \' \' \'\\n\' | grep "x" | tr \'x\' \' \')\n  for id in $(xwininfo -root -children | grep "^     0x" | awk \'{print $1}\'); do\n    info=$(xwininfo -id $id)\n    if ! (echo $info | grep -q "Override Redirect State: no" && echo $info | grep -q "Map State: IsViewable"); then\n      continue\n    fi\n    # xwininfo -id $id\n\n    # WM_TRANSIENT_FOR(WINDOW): window id # 0x1000f4\n    if xprop -id $id | grep -q \'WM_TRANSIENT_FOR(WINDOW)\'; then\n      continue\n    fi\n    echo "Need to manage window $id"\n    xdotool windowsize $id $screen_size\n    xdotool windowmove $id 0 0\n    echo "End inspect window $id"\n  done\n  echo "End loop"\ndone | tee /tmp/xwininfo.log &\nloop_pid=$!\n\n/fastone/users/admin/idea-IU-241.18034.62/bin/idea.sh &\ndesktop_app_pid=$!\n\nwait $desktop_app_pid\n\nwhile true; do\n  if [ -z "$(xlsclients)" ]; then\n    echo "There is no window, exit"\n    kill $loop_pid\n    break\n  fi\n  sleep 0.5s\n  echo "There is window, continue"\ndone | tee /tmp/xlsclients.log\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u4e0a\u8ff0\u811a\u672c\u4e2d",(0,r.jsx)(e.code,{children:"/fastone/users/admin/idea-IU-241.18034.62/bin/idea.sh"}),"\u662f\u5b9e\u9645\u684c\u9762\u5e94\u7528\u7684\u7684\u542f\u52a8\u547d\u4ee4, \u540e\u671f\u4f1a\u6839\u636e\u5b9e\u9645\u5e94\u7528\u8fdb\u884c\u66ff\u6362"]}),"\n",(0,r.jsx)(e.p,{children:"\u6574\u4e2a\u5b9e\u73b0\u601d\u8def\u662f:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u5728\u4e3bbash\u4e2d\u5728\u540e\u53f0\u5f00\u542f\u4e00\u4e2a\u8fdb\u7a0b",(0,r.jsx)("br",{})]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u8fd9\u4e2a\u8fdb\u7a0b\u662f\u4e00\u4e2a\u5faa\u73af, \u7528\u6765\u5c06\u7cfb\u7edf\u4e2d\u6240\u6709\u6ee1\u8db3\u6761\u4ef6\u7684\u4e3b\u7a97\u53e3\u8c03\u6574\u5168\u5c4f"}),"\n"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u5728\u540e\u53f0\u5f00\u542f\u684c\u9762\u7a0b\u5e8f\u7684\u8fdb\u884c, \u5e76\u7b49\u5f85\u684c\u9762\u7a0b\u5e8f\u9000\u51fa",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(e.li,{children:["\u5f53\u684c\u9762\u7a0b\u5e8f\u9000\u51fa\u540e, \u8fdb\u5165\u5faa\u73af, \u901a\u8fc7",(0,r.jsx)(e.code,{children:"xlsclients"}),"\u547d\u4ee4\u6765\u5224\u65ad\u662f\u5426\u8fd8\u6709\u7a97\u53e3, \u5982\u679c\u6ca1\u6709\u7a97\u53e3\u4e86, \u5219\u9000\u51fa\u5faa\u73af\u5e76\u6740\u6b7b\u5faa\u73af\u8fdb\u7a0b\u786e\u4fdd\u5faa\u73af\u8fdb\u7a0b\u9000\u51fa",(0,r.jsx)("br",{})]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u901a\u8fc7",(0,r.jsx)(e.code,{children:"xlsclients"}),"\u547d\u4ee4\u6765\u5224\u65ad\u7684\u4e3b\u8981\u76ee\u7684\u662f\u6709\u53ef\u80fd\u7528\u6237\u901a\u8fc7\u56fe\u5f62\u5e94\u7528\u6253\u5f00\u4e86\u53e6\u4e00\u4e2a\u56fe\u5f62\u5e94\u7528\u5e76\u5c06\u4e4b\u524d\u7684\u5e94\u7528\u9000\u51fa, \u5982\u679c\u4e0d\u8fdb\u884c\u68c0\u67e5\u4f1a\u5bfc\u81f4VNC\u4f1a\u8bdd\u7ed3\u675f, \u8fd9\u4e0d\u662f\u6211\u4eec\u671f\u671b\u7684"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://dwm.suckless.org/",children:"dwm"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://tronche.com/gui/x/",children:"The X Window system"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://tronche.com/gui/x/xlib/",children:"The Xlib Manual"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://www.x.org/releases/current/doc/libX11/libX11/libX11.html",children:"Xlib - C Language X Interface"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://tronche.com/gui/x/xlib/window/attributes/override-redirect.html",children:"3.2.8 Override Redirect Flag"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://tronche.com/gui/x/xlib/window/map.html",children:"3.5 Mapping Windows"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://tronche.com/gui/x/xlib/ICCclient-to-window-manager/wm-transient-for.html",children:"14.1.9 Setting and Reading the WM_TRANSIENT_FOR Property"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://python-xlib.sourceforge.net/doc/html/",children:"The Python X Library"})}),"\n"]})]})}function x(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>t});var r=i(96540);const s={},d=r.createContext(s);function l(n){const e=r.useContext(d);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),r.createElement(d.Provider,{value:e},n.children)}}}]);