"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[7017],{47045:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"software-engineering/ops/desktop/xorg/xorg","title":"XOrg","description":"- X Window System","source":"@site/docs/software-engineering/ops/desktop/xorg/xorg.md","sourceDirName":"software-engineering/ops/desktop/xorg","slug":"/software-engineering/ops/desktop/xorg/","permalink":"/zh-CN/docs/software-engineering/ops/desktop/xorg/","draft":false,"unlisted":false,"editUrl":"https://github.com/orange-guo/markdowns/tree/master/docs/software-engineering/ops/desktop/xorg/xorg.md","tags":[],"version":"current","lastUpdatedBy":"Xiangcheng Kuo","lastUpdatedAt":1740990631000,"frontMatter":{},"sidebar":"softwareEngineering","previous":{"title":"Wikis","permalink":"/zh-CN/docs/software-engineering/ops/desktop/xorg/wikis"},"next":{"title":"Notification daemon","permalink":"/zh-CN/docs/software-engineering/ops/desktop/notification-daemon"}}');var s=i(74848),t=i(28453);const o={},a="XOrg",d={},l=[{value:"Packages",id:"packages",level:2},{value:"Screen resolution",id:"screen-resolution",level:3},{value:"List",id:"list",level:3},{value:"set window size",id:"set-window-size",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"xorg",children:"XOrg"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/X_Window_System",children:"X Window System"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://wiki.archlinux.org/title/Xorg",children:"Xorg"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.linuxfromscratch.org/blfs/view/svn/x/x7app.html",children:"Xorg Applications"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://wiki.archlinux.org/title/Xinit",children:"xinit"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://wiki.archlinux.org/title/Xprofile",children:"xprofile"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://wiki.archlinux.org/title/X_resources",children:"X resources"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"packages",children:"Packages"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# is the ICE authority file utility\niceauth\n# creates an index of X font files in a directory\nmkfontdir\n# creates an index of scalable font files for X\nmkfontscale\n# manages utmp/wtmp entries for non-init clients\nsessreg\n# sets the keyboard using the X Keyboard Extension\nsetxkbmap\n# is the Session Manager Proxy\nsmproxy\n# is an X11 server performance test program\nx11perf\n# is an X11 server performance comparison program\nx11perfcomp\n# is the X authority file utility\nxauth\n# adjusts backlight brightness using RandR extension\nxbacklight\n# is the Device Color Characterization utility for the X Color Management System\nxcmsdb\n# creates an X cursor file from a collection of PNG images\nxcursorgen\n# dumps an X window directly to a printer\nxdpr\n# is a display information utility for X\nxdpyinfo\n# queries configuration information of DRI drivers\nxdriinfo\n# prints contents of X events\nxev\n# alters a monitor's gamma correction through the X server\nxgamma\n# is a server access control program for X\nxhost\n# is a utility to configure and test X input devices\nxinput\n# is an XKB utility program that raises a bell event\nxkbbell\n# compiles an XKB keyboard description\nxkbcomp\n# is the XKB event daemon\nxkbevd\n# shows the XKB status of keyboard LEDs\nxkbvleds\n# monitors modifier keys and LEDs\nxkbwatch\n# kills a client by its X resource\nxkill\n# lists interned atoms defined on the server\nxlsatoms\n# lists client applications running on a display\nxlsclients\n# displays a message or query in a window\nxmessage\n# is a utility for modifying keymaps and pointer button mappings in X\nxmodmap\n# prints an X window dump\nxpr\n# is a property displayer for X\nxprop\n# is a primitive command line interface to RandR extension\nxrandr\n# is the X server resource database utility\nxrdb\n# refreshes all or part of an X screen\nxrefresh\n# is the user preference utility for X\nxset\n# is the root window parameter setting utility for X\nxsetroot\n# prints out X-Video extension adaptor information\nxvinfo\n# dumps an image of an X window\nxwd\n# is a window information utility for X\nxwininfo\n# is an image displayer for X\nxwud\n"})}),"\n",(0,s.jsx)(n.h3,{id:"screen-resolution",children:"Screen resolution"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://unix.stackexchange.com/questions/2672/getting-and-setting-screen-size-for-xorg",children:"Getting and setting screen size for Xorg"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# get screen resolution\nxrandr \n# set screen resolution\nxrandr --output default --mode 2560x1660\n"})}),"\n",(0,s.jsx)(n.h3,{id:"list",children:"List"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"xlsclients\nxwininfo\nxprop\nxrandr\nxdpyinfo\n# xterm\n"})}),"\n",(0,s.jsx)(n.h1,{id:"tools",children:"Tools"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"xdotool\nwmctrl\n"})}),"\n",(0,s.jsx)(n.h2,{id:"set-window-size",children:"set window size"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"function do_resize() {\n  while true; do\n    sleep 1s\n    if [ ! -n \"$(xlsclients || true)\" ]; then\n      echo \"Waiting for window\"\n      continue\n    fi\n    echo \"Window found\"\n    screen_size=$(xrandr | grep '*' | awk '{print $1}' | tr 'x' ' ')\n    for id in $(xwininfo -root -children -tree | awk '{print $1}' | grep '0x'); do\n      xdotool windowsize $id $screen_size\n      xdotool windowmove $id 0 0\n    done\n    break\n  done\n}\n\ntimeout 1m do_resize &\n\nxdg-open /home/ubuntu/IdeaProjects/spring-framework/spring-core/src/jmh/java/org/springframework/core/codec/StringDecoderBenchmark.java\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var r=i(96540);const s={},t=r.createContext(s);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);