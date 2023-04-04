"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[2472],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,g=p["".concat(i,".").concat(h)]||p[h]||m[h]||a;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={authors:["xiangcheng.kuo"],tags:["ssh"]},s="\u8df3\u8fc7SSH\u8fde\u63a5\u65f6\u7684\u786e\u8ba4\u63d0\u793a",l={permalink:"/markdowns/zh-CN/blog/2023/02/14/ssh-prompt",source:"@site/blog/2023-02-14/ssh-prompt.md",title:"\u8df3\u8fc7SSH\u8fde\u63a5\u65f6\u7684\u786e\u8ba4\u63d0\u793a",description:"\u5e73\u65f6\u5728\u5199\u4e00\u4e9b\u811a\u672c\u7684\u65f6\u5019, \u9700\u8981\u9891\u7e41\u5730\u8fde\u63a5\u5728\u4e91\u4e0a\u65b0\u521b\u5efa\u7684\u673a\u5668.",date:"2023-02-14T00:00:00.000Z",formattedDate:"2023\u5e742\u670814\u65e5",tags:[{label:"ssh",permalink:"/markdowns/zh-CN/blog/tags/ssh"}],readingTime:1.13,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["ssh"]},prevItem:{title:"\u5728TestContainers\u4e2d\u5b9e\u73b0\u914d\u7f6e\u7684\u5bb9\u5668hostname\u4ee5\u89e3\u51b3\u5bb9\u5668\u4e4b\u95f4\u8bbf\u95ee\u95ee\u9898",permalink:"/markdowns/zh-CN/blog/2023/02/15/testcontainers-hostname"},nextItem:{title:"\u4fee\u6539postgresql\u4e2d\u7684\u6700\u5927\u8fde\u63a5\u6570",permalink:"/markdowns/zh-CN/blog/2023/02/13/postgres-max-connections"}},i={authorsImageUrls:[void 0]},c=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5e73\u65f6\u5728\u5199\u4e00\u4e9b\u811a\u672c\u7684\u65f6\u5019, \u9700\u8981\u9891\u7e41\u5730\u8fde\u63a5\u5728\u4e91\u4e0a\u65b0\u521b\u5efa\u7684\u673a\u5668.",(0,o.kt)("br",null),"\n\u5728ssh\u4e2d\u7b2c\u4e00\u6b21\u8fde\u63a5\u65f6, \u4f1a\u8f93\u51fa\u5982\u4e0b\u63d0\u793a.",(0,o.kt)("br",null)),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"RSA key fingerprint is 96:a9:23:5c:cc:d1:0a:d4:70:22:93:e9:9e:1e:74:2f.\nAre you sure you want to continue connecting (yes/no)? yes\n")),(0,o.kt)("p",null,"\u8fd9\u6837\u4f1a\u5bfc\u81f4\u6bcf\u6b21\u90fd\u9700\u8981\u8f93\u5165yes\u6765\u786e\u8ba4\u662f\u5426\u8fde\u63a5.",(0,o.kt)("br",null),"\n\u56e0\u4e3a\u811a\u672c\u4e0d\u53ef\u4ee5\u4ea4\u4e92, \u4f1a\u5bfc\u81f4\u811a\u672c\u5361\u5728\u8fd9\u4e00\u6b65\u65e0\u6cd5\u6267\u884c\u540e\u7eed\u7684\u64cd\u4f5c.",(0,o.kt)("br",null),"\n\u56e0\u6b64\u9700\u8981\u8df3\u8fc7\u8fd9\u4e00\u6b65\u7684\u786e\u8ba4.",(0,o.kt)("br",null)),(0,o.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,o.kt)("p",null,"\u5728ssh\u8fde\u63a5\u65f6, \u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"-o StrictHostKeyChecking=no"),"\u53c2\u6570\u6765\u8df3\u8fc7\u786e\u8ba4.",(0,o.kt)("br",null)),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -o StrictHostKeyChecking=no -i <your-key> <username>@<hostname>\n")),(0,o.kt)("h2",{id:"\u5907\u6ce8"},"\u5907\u6ce8"),(0,o.kt)("p",null,"\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"man ssh"),"\u4e2d\u5bf9\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"StrictHostKeyChecking"),"\u53c2\u6570\u7684\u63cf\u8ff0\u5982\u4e0b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"The StrictHostKeyChecking option can be used to control logins to machines whose host key is not known or has changed.\n")),(0,o.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/33271/how-to-avoid-ssh-asking-permission"},"how to avoid ssh asking permission?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/64449495/how-to-accept-yes-from-shell-script-are-you-sure-you-want-to-continue-connect"},"How to accept 'yes' from shell script \"Are you sure you want to continue connecting (yes/no)?\" using ssh. Without using StrictHostKeyChecking=no"))))}m.isMDXComponent=!0}}]);