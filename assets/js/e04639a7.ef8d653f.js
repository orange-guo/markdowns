"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[8734],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=l,h=d["".concat(i,".").concat(m)]||d[m]||k[m]||r;return t?a.createElement(h,p(p({ref:n},u),{},{components:t})):a.createElement(h,p({ref:n},u))}));function h(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[d]="string"==typeof e?e:l,p[1]=o;for(var c=2;c<r;c++)p[c]=t[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1472:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=t(7462),l=(t(7294),t(3905));const r={authors:["xiangcheng.kuo"],tags:["pyenv","python"]},p="\u4f7f\u7528pyenv\u5b9e\u73b0python\u591a\u7248\u672c\u7ba1\u7406",o={permalink:"/markdowns/blog/2023/02/10/",source:"@site/blog/2023-02-10.md",title:"\u4f7f\u7528pyenv\u5b9e\u73b0python\u591a\u7248\u672c\u7ba1\u7406",description:"pyenv\u662f\u4e00\u4e2apython\u7248\u672c\u7ba1\u7406\u5de5\u5177, \u53ef\u4ee5\u65b9\u4fbf\u7684\u7ba1\u7406\u591a\u4e2apython\u7248\u672c.",date:"2023-02-10T00:00:00.000Z",formattedDate:"February 10, 2023",tags:[{label:"pyenv",permalink:"/markdowns/blog/tags/pyenv"},{label:"python",permalink:"/markdowns/blog/tags/python"}],readingTime:3.145,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["pyenv","python"]},prevItem:{title:"\u5728Docker\u4e2d\u4f7f\u7528Rclone\u5e76\u5c06\u5bf9\u5e94\u7684fuse\u6302\u8f7d\u5230\u5bbf\u4e3b\u673a",permalink:"/markdowns/blog/2023/02/11/"},nextItem:{title:"JDK\u6539\u8fdb\u9879\u76ee\u7684\u4ecb\u7ecd",permalink:"/markdowns/blog/2023/02/09/openjdk-project"}},i={authorsImageUrls:[void 0]},c=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u5c06<code>github</code>\u4e0a\u7684<code>pyenv</code>\u4ed3\u5e93<code>clone</code>\u5230\u672c\u5730",id:"\u5c06github\u4e0a\u7684pyenv\u4ed3\u5e93clone\u5230\u672c\u5730",level:3},{value:"\u914d\u7f6e<code>~/.bashrc</code>",id:"\u914d\u7f6ebashrc",level:3},{value:"\u4f7f<code>~/.bashrc</code>\u4e2d\u7684\u914d\u7f6e\u751f\u6548",id:"\u4f7fbashrc\u4e2d\u7684\u914d\u7f6e\u751f\u6548",level:3},{value:"\u4e0b\u8f7d<code>python</code>\u5b89\u88c5\u5305\u5230<code>cache</code>\u76ee\u5f55\u4ee5\u52a0\u5feb\u5b89\u88c5\u901f\u5ea6",id:"\u4e0b\u8f7dpython\u5b89\u88c5\u5305\u5230cache\u76ee\u5f55\u4ee5\u52a0\u5feb\u5b89\u88c5\u901f\u5ea6",level:3},{value:"\u5b89\u88c5\u5fc5\u8981\u7684\u4f9d\u8d56",id:"\u5b89\u88c5\u5fc5\u8981\u7684\u4f9d\u8d56",level:3},{value:"\u521b\u5efa<code>virtualenv</code>, \u540d\u79f0\u4e3a<code>python3.11.0</code>",id:"\u521b\u5efavirtualenv-\u540d\u79f0\u4e3apython3110",level:3},{value:"\u8ffd\u52a0<code>pyenv activate</code>\u5230<code>~/.bashrc</code>",id:"\u8ffd\u52a0pyenv-activate\u5230bashrc",level:3},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],u={toc:c};function d(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pyenv"),"\u662f\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"python"),"\u7248\u672c\u7ba1\u7406\u5de5\u5177, \u53ef\u4ee5\u65b9\u4fbf\u7684\u7ba1\u7406\u591a\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"python"),"\u7248\u672c.",(0,l.kt)("br",null),"\n\u5bf9\u4e8e\u5f00\u53d1\u8005\u6765\u8bf4\u6709\u7684\u65f6\u5019\u4f1a\u6709\u591a\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"python"),"\u7248\u672c\u7684\u9700\u6c42.",(0,l.kt)("br",null),"\n\u4f8b\u5982, \u6709\u7684\u9879\u76ee\u9700\u8981",(0,l.kt)("inlineCode",{parentName:"p"},"python3.6"),", \u6709\u7684\u9879\u76ee\u9700\u8981",(0,l.kt)("inlineCode",{parentName:"p"},"python3.7"),". \u8fd9\u4e2a\u65f6\u5019\u5c31\u9700\u8981\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"pyenv"),"\u6765\u7ba1\u7406\u591a\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"python"),"\u7248\u672c.",(0,l.kt)("br",null),"\n\u76ee\u524d\u5e02\u9762\u4e0a\u6709\u5f88\u591a",(0,l.kt)("inlineCode",{parentName:"p"},"python"),"\u7248\u672c\u7ba1\u7406\u5de5\u5177, \u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"pyenv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"conda"),"\u7b49.",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"pyenv"),"\u662f\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684\u5de5\u5177, \u4f46\u662f\u529f\u80fd\u4e5f\u5f88\u5f3a\u5927, \u9002\u5408\u4e8e\u5f00\u53d1\u8005\u4f7f\u7528.",(0,l.kt)("br",null),"\n\u4e0b\u9762\u5c06\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"python3.11.0"),"\u4e3a\u4f8b\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"pyenv"),"\u6765\u7ba1\u7406\u591a\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"python"),"\u7248\u672c",(0,l.kt)("br",null)),(0,l.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,l.kt)("h3",{id:"\u5c06github\u4e0a\u7684pyenv\u4ed3\u5e93clone\u5230\u672c\u5730"},"\u5c06",(0,l.kt)("inlineCode",{parentName:"h3"},"github"),"\u4e0a\u7684",(0,l.kt)("inlineCode",{parentName:"h3"},"pyenv"),"\u4ed3\u5e93",(0,l.kt)("inlineCode",{parentName:"h3"},"clone"),"\u5230\u672c\u5730"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:pyenv/pyenv.git\n")),(0,l.kt)("h3",{id:"\u914d\u7f6ebashrc"},"\u914d\u7f6e",(0,l.kt)("inlineCode",{parentName:"h3"},"~/.bashrc")),(0,l.kt)("p",null,"\u5c06\u4ee5\u4e0b\u914d\u7f6e\u6dfb\u52a0\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),", \u6ce8\u610f\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"<pyenv-path>"),"\u66ff\u6362\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"pyenv"),"\u7684\u5b9e\u9645\u8def\u5f84"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# pyenv\nexport PATH=<pyenv-path>/bin:$PATH\nexport PYENV_VIRTUALENV_DISABLE_PROMPT=1\neval "$(pyenv init -)"\neval "$(pyenv virtualenv-init -)"\npyenv deactivate\n')),(0,l.kt)("h3",{id:"\u4f7fbashrc\u4e2d\u7684\u914d\u7f6e\u751f\u6548"},"\u4f7f",(0,l.kt)("inlineCode",{parentName:"h3"},"~/.bashrc"),"\u4e2d\u7684\u914d\u7f6e\u751f\u6548"),(0,l.kt)("p",null,"\u91cd\u65b0\u52a0\u8f7d",(0,l.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),", \u8fd9\u4e48\u505a\u662f\u4e3a\u4e86\u8ba9",(0,l.kt)("inlineCode",{parentName:"p"},"pyenv"),"\u7684\u914d\u7f6e\u751f\u6548"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"source ~/.bashrc\n")),(0,l.kt)("h3",{id:"\u4e0b\u8f7dpython\u5b89\u88c5\u5305\u5230cache\u76ee\u5f55\u4ee5\u52a0\u5feb\u5b89\u88c5\u901f\u5ea6"},"\u4e0b\u8f7d",(0,l.kt)("inlineCode",{parentName:"h3"},"python"),"\u5b89\u88c5\u5305\u5230",(0,l.kt)("inlineCode",{parentName:"h3"},"cache"),"\u76ee\u5f55\u4ee5\u52a0\u5feb\u5b89\u88c5\u901f\u5ea6"),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"pyenv"),"\u5b89\u88c5",(0,l.kt)("inlineCode",{parentName:"p"},"python"),"\u65f6\u4f1a\u6bd4\u8f83\u6162, \u8fd9\u662f\u56e0\u4e3a\u8bbf\u95ee\u56fd\u5916\u7f51\u7ad9\u4f1a\u6bd4\u8f83\u6162. ",(0,l.kt)("br",null),"\n\u53ef\u4ee5\u5148\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"python"),"\u7684\u5b89\u88c5\u5305\u4e0b\u8f7d\u5230\u521a\u624d",(0,l.kt)("inlineCode",{parentName:"p"},"clone"),"\u7684\u9879\u76ee\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"cache"),"\u76ee\u5f55\u4e0b. ",(0,l.kt)("br",null),"\n\u901a\u8fc7\u4e0b\u8f7d\u5668\u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"\u8fc5\u96f7"),"\u53ef\u4ee5\u66f4\u5feb\u7684\u4e0b\u8f7d.",(0,l.kt)("br",null),"\n\u540e\u7eed\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"pyenv"),"\u8fdb\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"install"),"\u65f6\u4f1a\u4ece",(0,l.kt)("inlineCode",{parentName:"p"},"cache"),"\u76ee\u5f55\u4e0b\u8bfb\u53d6\u5b89\u88c5\u5305, \u901f\u5ea6\u4f1a\u5feb\u5f88\u591a",(0,l.kt)("br",null),"\n\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"3.11.0"),"\u4e3a\u4f8b, \u4e0b\u8f7d\u5730\u5740\u4e3a: ",(0,l.kt)("inlineCode",{parentName:"p"},"https://www.python.org/ftp/python/3.11.0/Python-3.11.0.tar.xz")," ",(0,l.kt)("br",null),"\n\u53ef\u4ee5\u8fdb\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"https://www.python.org/ftp/python/")," \u67e5\u770b\u6240\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"python"),"\u7248\u672c\u7684\u5b89\u88c5\u5305\u4e0b\u8f7d\u5730\u5740.",(0,l.kt)("br",null)),(0,l.kt)("h3",{id:"\u5b89\u88c5\u5fc5\u8981\u7684\u4f9d\u8d56"},"\u5b89\u88c5\u5fc5\u8981\u7684\u4f9d\u8d56"),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"pyenv"),"\u5b89\u88c5",(0,l.kt)("inlineCode",{parentName:"p"},"python"),"\u65f6, \u9700\u8981\u5b89\u88c5\u4e00\u4e9b\u4f9d\u8d56, \u5426\u5219\u5b89\u88c5\u65f6\u4f1a\u62a5\u9519.",(0,l.kt)("br",null),"\n\u901a\u5e38\u8fd9\u4e9b\u4f9d\u8d56\u7684\u524d\u7f00\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"lib***-dev"),".",(0,l.kt)("br",null)),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u6211\u4ee5\u524d\u5b89\u88c5",(0,l.kt)("inlineCode",{parentName:"p"},"python"),"\u65f6\u9047\u5230\u7684\u4f9d\u8d56, \u5404\u4e2a\u7248\u672c\u53ef\u80fd\u4e0d\u4e00\u6837, \u8bf7\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u5b89\u88c5.",(0,l.kt)("br",null)),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"for package in libncurses-dev build-essential zlib1g-dev libffi-dev libssl-dev libbz2-dev libreadline-dev libsqlite3-dev liblzma-dev; do\n  apt-get install -y $package\ndone\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv install 3.11.0\n")),(0,l.kt)("h3",{id:"\u521b\u5efavirtualenv-\u540d\u79f0\u4e3apython3110"},"\u521b\u5efa",(0,l.kt)("inlineCode",{parentName:"h3"},"virtualenv"),", \u540d\u79f0\u4e3a",(0,l.kt)("inlineCode",{parentName:"h3"},"python3.11.0")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv virtualenv 3.11.0 python3.11.0\npyenv activate 3.11.0/envs/python3.11.0\n")),(0,l.kt)("h3",{id:"\u8ffd\u52a0pyenv-activate\u5230bashrc"},"\u8ffd\u52a0",(0,l.kt)("inlineCode",{parentName:"h3"},"pyenv activate"),"\u5230",(0,l.kt)("inlineCode",{parentName:"h3"},"~/.bashrc")),(0,l.kt)("p",null,"\u5c06\u4ee5\u4e0b\u914d\u7f6e\u6dfb\u52a0\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),", \u8fd9\u6837\u505a\u7684\u76ee\u7684\u662f\u4e3a\u4e86\u6bcf\u6b21\u6253\u5f00",(0,l.kt)("inlineCode",{parentName:"p"},"terminal"),"\u65f6\u81ea\u52a8\u6fc0\u6d3b",(0,l.kt)("inlineCode",{parentName:"p"},"virtualenv"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv activate python3.11.0\n")),(0,l.kt)("h2",{id:"\u5907\u6ce8"},"\u5907\u6ce8"),(0,l.kt)("h3",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u7279\u5b9a\u7248\u672c\u7684python")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv install <python-version>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u865a\u62df\u73af\u5883")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv virtualenv <python-version> <virtualenv-name>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5217\u51fa\u6240\u6709\u865a\u62df\u73af\u5883")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv virtualenvs\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u865a\u62df\u73af\u5883")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv activate <python-version>/envs/<virtualenv-name>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u89e3\u9664\u865a\u62df\u73af\u5883")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv deactivate\n")),(0,l.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/pyenv/pyenv"},"pyenv")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.python.org/ftp/python/"},"python repo"))))}d.isMDXComponent=!0}}]);