"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[89],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,l(l({ref:t},i),{},{components:r})):n.createElement(m,l({ref:t},i))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5118:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},l="process",s={unversionedId:"note/linux/process",id:"note/linux/process",title:"process",description:"\u901a\u8fc7pstree\u547d\u4ee4\u67e5\u770b\u8fdb\u7a0b\u6811",source:"@site/docs/note/linux/process.md",sourceDirName:"note/linux",slug:"/note/linux/process",permalink:"/zh-CN/docs/note/linux/process",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/note/linux/process.md",tags:[],version:"current",lastUpdatedBy:"xiangcheng.kuo",lastUpdatedAt:1681962862,formattedLastUpdatedAt:"2023\u5e744\u670820\u65e5",frontMatter:{},sidebar:"note",previous:{title:"others",permalink:"/zh-CN/docs/note/linux/others"},next:{title:"shell",permalink:"/zh-CN/docs/note/linux/shell"}},p={},c=[{value:"\u901a\u8fc7<code>pstree</code>\u547d\u4ee4\u67e5\u770b\u8fdb\u7a0b\u6811",id:"\u901a\u8fc7pstree\u547d\u4ee4\u67e5\u770b\u8fdb\u7a0b\u6811",level:2},{value:"\u901a\u8fc7<code>strace</code>\u547d\u4ee4\u67e5\u770b\u8fdb\u884c\u7684\u7cfb\u7edf\u8c03\u7528",id:"\u901a\u8fc7strace\u547d\u4ee4\u67e5\u770b\u8fdb\u884c\u7684\u7cfb\u7edf\u8c03\u7528",level:2},{value:"\u901a\u8fc7<code>lsof</code>\u547d\u4ee4\u67e5\u770b\u7ba1\u9053",id:"\u901a\u8fc7lsof\u547d\u4ee4\u67e5\u770b\u7ba1\u9053",level:2},{value:"\u901a\u8fc7<code>lsof</code>\u547d\u4ee4\u67e5\u770b\u6587\u4ef6\u53e5\u67c4",id:"\u901a\u8fc7lsof\u547d\u4ee4\u67e5\u770b\u6587\u4ef6\u53e5\u67c4",level:2}],i={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"process"},"process"),(0,o.kt)("h2",{id:"\u901a\u8fc7pstree\u547d\u4ee4\u67e5\u770b\u8fdb\u7a0b\u6811"},"\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"h2"},"pstree"),"\u547d\u4ee4\u67e5\u770b\u8fdb\u7a0b\u6811"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pstree -p -s <pid> -T\n")),(0,o.kt)("h2",{id:"\u901a\u8fc7strace\u547d\u4ee4\u67e5\u770b\u8fdb\u884c\u7684\u7cfb\u7edf\u8c03\u7528"},"\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"h2"},"strace"),"\u547d\u4ee4\u67e5\u770b\u8fdb\u884c\u7684\u7cfb\u7edf\u8c03\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"strace -p <pid>\n")),(0,o.kt)("h2",{id:"\u901a\u8fc7lsof\u547d\u4ee4\u67e5\u770b\u7ba1\u9053"},"\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"h2"},"lsof"),"\u547d\u4ee4\u67e5\u770b\u7ba1\u9053"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# grep pipe\nlsof|grep FIFO\n")),(0,o.kt)("h2",{id:"\u901a\u8fc7lsof\u547d\u4ee4\u67e5\u770b\u6587\u4ef6\u53e5\u67c4"},"\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"h2"},"lsof"),"\u547d\u4ee4\u67e5\u770b\u6587\u4ef6\u53e5\u67c4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"lsof -p <pid>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/252134/lsof-p-pid-vs-lsof-grep-pid"},"lsof -p PID vs lsof | grep PID"))))}d.isMDXComponent=!0}}]);