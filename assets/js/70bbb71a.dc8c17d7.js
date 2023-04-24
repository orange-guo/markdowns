"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[3157],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),m=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=m(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(t),d=r,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||l;return t?a.createElement(k,o(o({ref:n},s),{},{components:t})):a.createElement(k,o({ref:n},s))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},29072:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=t(87462),r=(t(67294),t(3905));const l={authors:["xiangcheng.kuo"],tags:["nvm","nodejs"]},o="\u4f7f\u7528nvm\u5b9e\u73b0nodejs\u591a\u7248\u672c\u7ba1\u7406",i={permalink:"/blog/2023/02/25/nvm",source:"@site/blog/2023-02-25/nvm.md",title:"\u4f7f\u7528nvm\u5b9e\u73b0nodejs\u591a\u7248\u672c\u7ba1\u7406",description:"\u5728\u65e5\u5e38\u5f00\u53d1\u4e2d, \u6709\u65f6\u5019\u9700\u8981\u4f7f\u7528\u4e0d\u540c\u7248\u672c\u7684nodejs\u6765\u5f00\u53d1\u4e0d\u540c\u7684\u9879\u76ee.",date:"2023-02-25T00:00:00.000Z",formattedDate:"February 25, 2023",tags:[{label:"nvm",permalink:"/blog/tags/nvm"},{label:"nodejs",permalink:"/blog/tags/nodejs"}],readingTime:1.44,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["nvm","nodejs"]},prevItem:{title:"ubuntu\u4e2d\u5e38\u7528\u7684apt\u6e90",permalink:"/blog/2023/02/26/apt-mirror"},nextItem:{title:"\u542f\u7528SSH\u5bc6\u7801\u9a8c\u8bc1",permalink:"/blog/2023/02/24/enable-sshd-password-authentication"}},p={authorsImageUrls:[void 0]},m=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u5c06<code>nvm</code>\u6dfb\u52a0\u5230<code>~/.bashrc</code>\u4e2d",id:"\u5c06nvm\u6dfb\u52a0\u5230bashrc\u4e2d",level:3},{value:"<code>node</code>\u5b89\u88c5",id:"node\u5b89\u88c5",level:3},{value:"\u8bbe\u7f6e<code>nodejs</code>\u7684\u9ed8\u8ba4\u7248\u672c",id:"\u8bbe\u7f6enodejs\u7684\u9ed8\u8ba4\u7248\u672c",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],s={toc:m},u="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728\u65e5\u5e38\u5f00\u53d1\u4e2d, \u6709\u65f6\u5019\u9700\u8981\u4f7f\u7528\u4e0d\u540c\u7248\u672c\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"nodejs"),"\u6765\u5f00\u53d1\u4e0d\u540c\u7684\u9879\u76ee.",(0,r.kt)("br",null),"\n\u4f8b\u5982, \u6709\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"UI"),"\u9879\u76ee, \u9700\u8981\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"nodejs"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"v12"),"\u7248\u672c, \u800c\u53e6\u4e00\u4e2a\u9879\u76ee\u9700\u8981\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"nodejs"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"v14"),"\u7248\u672c.",(0,r.kt)("br",null),"\n\u8fd9\u65f6\u5019\u5c31\u9700\u8981\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"nvm"),"\u6765\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"nodejs"),"\u7684\u591a\u7248\u672c\u7ba1\u7406.",(0,r.kt)("br",null),"\n\u672c\u6587\u5c06\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"nodejs-v18"),"\u4e3a\u4f8b\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"nvm"),"\u6765\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"nodejs"),"\u7684\u591a\u7248\u672c\u7ba1\u7406"),(0,r.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,r.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c06",(0,r.kt)("inlineCode",{parentName:"li"},"github"),"\u4e0a\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"nvm"),"\u9879\u76ee\u514b\u9686\u5230\u672c\u5730")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:nvm-sh/nvm.git\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"li"},"nvm"),"\u7684\u5b89\u88c5\u811a\u672c")),(0,r.kt)("p",null,"\u8fdb\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"nvm"),"\u9879\u76ee\u7684\u6839\u76ee\u5f55, \u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"install.sh"),"\u811a\u672c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./install.sh\n")),(0,r.kt)("h3",{id:"\u5c06nvm\u6dfb\u52a0\u5230bashrc\u4e2d"},"\u5c06",(0,r.kt)("inlineCode",{parentName:"h3"},"nvm"),"\u6dfb\u52a0\u5230",(0,r.kt)("inlineCode",{parentName:"h3"},"~/.bashrc"),"\u4e2d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"li"},"~/.bashrc"))),(0,r.kt)("p",null,"\u8ffd\u52a0\u4ee5\u4e0b\u5185\u5bb9\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),"\u6587\u4ef6\u4e2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export NVM_DIR=$DEV_SOFTWARE_HOME/Nvm\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"  # This loads nvm\n[ -s "$NVM_DIR/bash_completion" ] && \\. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u91cd\u65b0\u52a0\u8f7d",(0,r.kt)("inlineCode",{parentName:"li"},"~/.bashrc"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source ~/.bashrc\n")),(0,r.kt)("h3",{id:"node\u5b89\u88c5"},(0,r.kt)("inlineCode",{parentName:"h3"},"node"),"\u5b89\u88c5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b89\u88c5",(0,r.kt)("inlineCode",{parentName:"li"},"nodejs"),"\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"v18"),"\u7248\u672c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nvm install 18\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"li"},"node -v"),"\u547d\u4ee4, \u67e5\u770b",(0,r.kt)("inlineCode",{parentName:"li"},"nodejs"),"\u7684\u7248\u672c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\n")),(0,r.kt)("h3",{id:"\u8bbe\u7f6enodejs\u7684\u9ed8\u8ba4\u7248\u672c"},"\u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"h3"},"nodejs"),"\u7684\u9ed8\u8ba4\u7248\u672c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7f16\u8f91",(0,r.kt)("inlineCode",{parentName:"li"},"~/.bashrc"),"\u6587\u4ef6, \u8ffd\u52a0\u4ee5\u4e0b\u5185\u5bb9")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nvm alias default 18\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u91cd\u65b0\u52a0\u8f7d",(0,r.kt)("inlineCode",{parentName:"li"},"~/.bashrc"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source ~/.bashrc\n")),(0,r.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"nvm"))))}c.isMDXComponent=!0}}]);