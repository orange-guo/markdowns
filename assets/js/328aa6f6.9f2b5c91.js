"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[5590],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),o=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=o(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,u=e.originalType,a=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=o(n),l=i,b=p["".concat(a,".").concat(l)]||p[l]||d[l]||u;return n?r.createElement(b,s(s({ref:t},m),{},{components:n})):r.createElement(b,s({ref:t},m))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var u=n.length,s=new Array(u);s[0]=l;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[p]="string"==typeof e?e:i,s[1]=c;for(var o=2;o<u;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},8206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>u,metadata:()=>c,toc:()=>o});var r=n(7462),i=(n(7294),n(3905));const u={authors:["xiangcheng.kuo"],tags:["apt","ubuntu","linux"]},s="ubuntu\u4e2d\u5e38\u7528\u7684apt\u6e90",c={permalink:"/markdowns/blog/2023/02/26/apt-mirror",source:"@site/blog/2023-02-26/apt-mirror.md",title:"ubuntu\u4e2d\u5e38\u7528\u7684apt\u6e90",description:"\u672c\u6587\u8bb0\u5f55\u4e86ubuntu\u4e2d\u5e38\u7528\u7684apt\u6e90, \u4ee5\u53ca\u5982\u4f55\u914d\u7f6eapt\u6e90.",date:"2023-02-26T00:00:00.000Z",formattedDate:"February 26, 2023",tags:[{label:"apt",permalink:"/markdowns/blog/tags/apt"},{label:"ubuntu",permalink:"/markdowns/blog/tags/ubuntu"},{label:"linux",permalink:"/markdowns/blog/tags/linux"}],readingTime:3.98,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["apt","ubuntu","linux"]},prevItem:{title:"\u57fa\u4e8eclojure\u8868\u8fbe\u5f0f\u5b9e\u73b0\u66f4\u52a0\u7075\u6d3b\u7684\u6570\u636e\u9a8c\u8bc1",permalink:"/markdowns/blog/2023/03/02/clojure-validation"},nextItem:{title:"\u4f7f\u7528nvm\u5b9e\u73b0nodejs\u591a\u7248\u672c\u7ba1\u7406",permalink:"/markdowns/blog/2023/02/25/nvm"}},a={authorsImageUrls:[void 0]},o=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u786e\u8ba4<code>codename</code>",id:"\u786e\u8ba4codename",level:3},{value:"\u7f16\u8f91<code>/etc/apt/sources.list</code>",id:"\u7f16\u8f91etcaptsourceslist",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],m={toc:o};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u8bb0\u5f55\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"ubuntu"),"\u4e2d\u5e38\u7528\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"apt"),"\u6e90, \u4ee5\u53ca\u5982\u4f55\u914d\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"apt"),"\u6e90."),(0,i.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,i.kt)("h3",{id:"\u786e\u8ba4codename"},"\u786e\u8ba4",(0,i.kt)("inlineCode",{parentName:"h3"},"codename")),(0,i.kt)("p",null,"\u4e0d\u540c\u7684\u7248\u672c\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"ubuntu"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"codename"),"\u4f1a\u6709\u6240\u4e0d\u540c, \u6bd4\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"20.04"),"\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"codename"),"\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"focal"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"22.10"),"\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"codename"),"\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"kinetic"),"."),(0,i.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u786e\u8ba4",(0,i.kt)("inlineCode",{parentName:"p"},"codename")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"lsb_release -a\n")),(0,i.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u53c2\u8003"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},"No LSB modules are available.\nDistributor ID: Ubuntu\nDescription:    Ubuntu 22.10\nRelease:        22.10\nCodename:       kinetic\n")),(0,i.kt)("h3",{id:"\u7f16\u8f91etcaptsourceslist"},"\u7f16\u8f91",(0,i.kt)("inlineCode",{parentName:"h3"},"/etc/apt/sources.list")),(0,i.kt)("p",null,"\u5c06\u4e0b\u9762\u7684\u5185\u5bb9\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"kinetic"),"\u66ff\u6362\u4e3a\u4e0a\u4e00\u6b65\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"codename"),", \u7136\u540e\u4fdd\u5b58\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/apt/sources.list"),"\u4e2d."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="/etc/apt/sources.list"',title:'"/etc/apt/sources.list"'},'# Jiaotong University\ndeb https://ftp.sjtu.edu.cn/sites/archive.ubuntu.com/ kinetic main restricted universe multiverse\ndeb https://ftp.sjtu.edu.cn/sites/archive.ubuntu.com/ kinetic-updates main restricted universe multiverse\ndeb https://ftp.sjtu.edu.cn/sites/archive.ubuntu.com/ kinetic-backports main restricted universe multiverse\ndeb https://ftp.sjtu.edu.cn/sites/archive.ubuntu.com/ kinetic-security main restricted universe multiverse\n\n\n# Tsinghua\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic main restricted universe multiverse\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-updates main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-updates main restricted universe multiverse\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-backports main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-backports main restricted universe multiverse\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-security main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-security main restricted universe multiverse\n\n# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-proposed main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-proposed main restricted universe multiverse\n\n# Ali\ndeb http://mirrors.aliyun.com/ubuntu/ kinetic main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ kinetic main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ kinetic-security main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ kinetic-security main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ kinetic-updates main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ kinetic-updates main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ kinetic-proposed main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ kinetic-proposed main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ kinetic-backports main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ kinetic-backports main restricted universe multiverse\n\n\n# Netease\ndeb http://mirrors.163.com/ubuntu/ kinetic main restricted universe multiverse\ndeb http://mirrors.163.com/ubuntu/ kinetic-security main restricted universe multiverse\ndeb http://mirrors.163.com/ubuntu/ kinetic-updates main restricted universe multiverse\ndeb http://mirrors.163.com/ubuntu/ kinetic-proposed main restricted universe multiverse\ndeb http://mirrors.163.com/ubuntu/ kinetic-backports main restricted universe multiverse\ndeb-src http://mirrors.163.com/ubuntu/ kinetic main restricted universe multiverse\ndeb-src http://mirrors.163.com/ubuntu/ kinetic-security main restricted universe multiverse\ndeb-src http://mirrors.163.com/ubuntu/ kinetic-updates main restricted universe multiverse\ndeb-src http://mirrors.163.com/ubuntu/ kinetic-proposed main restricted universe multiverse\ndeb-src http://mirrors.163.com/ubuntu/ kinetic-backports main restricted universe multiverse\n\n\n# \u4e2d\u79d1\u5927\u955c\u50cf\u6e90\ndeb https://mirrors.ustc.edu.cn/ubuntu/ kinetic main restricted universe multiverse\ndeb-src https://mirrors.ustc.edu.cn/ubuntu/ kinetic main restricted universe multiverse\ndeb https://mirrors.ustc.edu.cn/ubuntu/ kinetic-updates main restricted universe multiverse\ndeb-src https://mirrors.ustc.edu.cn/ubuntu/ kinetic-updates main restricted universe multiverse\ndeb https://mirrors.ustc.edu.cn/ubuntu/ kinetic-backports main restricted universe multiverse\ndeb-src https://mirrors.ustc.edu.cn/ubuntu/ kinetic-backports main restricted universe multiverse\ndeb https://mirrors.ustc.edu.cn/ubuntu/ kinetic-security main restricted universe multiverse\ndeb-src https://mirrors.ustc.edu.cn/ubuntu/ kinetic-security main restricted universe multiverse\ndeb https://mirrors.ustc.edu.cn/ubuntu/ kinetic-proposed main restricted universe multiverse\ndeb-src https://mirrors.ustc.edu.cn/ubuntu/ kinetic-proposed main restricted universe multiverse\n\n#deb cdrom:[Ubuntu 22.04 LTS _kinetic Jellyfish_ - Release amd64 (20220419)]/ kinetic main restricted\n\n# See http://help.ubuntu.com/community/UpgradeNotes for how to upgrade to\n# newer versions of the distribution.\ndeb http://cn.archive.ubuntu.com/ubuntu/ kinetic main restricted\n# deb-src http://cn.archive.ubuntu.com/ubuntu/ kinetic main restricted\n\n## Major bug fix updates produced after the final release of the\n## distribution.\ndeb http://cn.archive.ubuntu.com/ubuntu/ kinetic-updates main restricted\n# deb-src http://cn.archive.ubuntu.com/ubuntu/ kinetic-updates main restricted\n\n## N.B. software from this repository is ENTIRELY UNSUPPORTED by the Ubuntu\n## team. Also, please note that software in universe WILL NOT receive any\n## review or updates from the Ubuntu security team.\ndeb http://cn.archive.ubuntu.com/ubuntu/ kinetic universe\n# deb-src http://cn.archive.ubuntu.com/ubuntu/ kinetic universe\ndeb http://cn.archive.ubuntu.com/ubuntu/ kinetic-updates universe\n# deb-src http://cn.archive.ubuntu.com/ubuntu/ kinetic-updates universe\n\n## N.B. software from this repository is ENTIRELY UNSUPPORTED by the Ubuntu \n## team, and may not be under a free licence. Please satisfy yourself as to \n## your rights to use the software. Also, please note that software in \n## multiverse WILL NOT receive any review or updates from the Ubuntu\n## security team.\ndeb http://cn.archive.ubuntu.com/ubuntu/ kinetic multiverse\n# deb-src http://cn.archive.ubuntu.com/ubuntu/ kinetic multiverse\ndeb http://cn.archive.ubuntu.com/ubuntu/ kinetic-updates multiverse\n# deb-src http://cn.archive.ubuntu.com/ubuntu/ kinetic-updates multiverse\n\n## N.B. software from this repository may not have been tested as\n## extensively as that contained in the main release, although it includes\n## newer versions of some applications which may provide useful features.\n## Also, please note that software in backports WILL NOT receive any review\n## or updates from the Ubuntu security team.\ndeb http://cn.archive.ubuntu.com/ubuntu/ kinetic-backports main restricted universe multiverse\n# deb-src http://cn.archive.ubuntu.com/ubuntu/ kinetic-backports main restricted universe multiverse\n\ndeb http://security.ubuntu.com/ubuntu kinetic-security main restricted\n# deb-src http://security.ubuntu.com/ubuntu kinetic-security main restricted\ndeb http://security.ubuntu.com/ubuntu kinetic-security universe\n# deb-src http://security.ubuntu.com/ubuntu kinetic-security universe\ndeb http://security.ubuntu.com/ubuntu kinetic-security multiverse\n# deb-src http://security.ubuntu.com/ubuntu kinetic-security multiverse\n\n# This system was installed using small removable media\n# (e.g. netinst, live or single CD). The matching "deb cdrom"\n# entries were disabled at the end of the installation process.\n# For information about how to configure apt package sources,\n# see the sources.list(5) manual.\n')),(0,i.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://launchpad.net/ubuntu/+archivemirrors"},"Official Archive Mirrors for Ubuntu")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.debian.org/SourcesList"},"SourcesList"))))}p.isMDXComponent=!0}}]);