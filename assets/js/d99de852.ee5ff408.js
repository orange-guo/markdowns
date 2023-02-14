"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[7320],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,c(c({ref:t},i),{},{components:n})):r.createElement(f,c({ref:t},i))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},c="\u5e38\u7528\u547d\u4ee4",l={unversionedId:"note/command",id:"note/command",title:"\u5e38\u7528\u547d\u4ee4",description:"pstree",source:"@site/docs/note/command.md",sourceDirName:"note",slug:"/note/command",permalink:"/markdowns/docs/note/command",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/note/command.md",tags:[],version:"current",lastUpdatedBy:"xiangcheng.kuo",lastUpdatedAt:1676370882,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{},sidebar:"note",previous:{title:"Introduction",permalink:"/markdowns/docs/note/introduction"},next:{title:"Java Concurrent",permalink:"/markdowns/docs/note/java-concurrent"}},s={},p=[{value:"pstree",id:"pstree",level:2},{value:"strace",id:"strace",level:2},{value:"mount",id:"mount",level:2},{value:"lsof",id:"lsof",level:2},{value:"ldd",id:"ldd",level:2},{value:"Transport endpoint is not connected",id:"transport-endpoint-is-not-connected",level:2}],i={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,o.kt)("h2",{id:"pstree"},"pstree"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pstree -p -s <pid> -T\n")),(0,o.kt)("h2",{id:"strace"},"strace"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"strace -p <pid>\n")),(0,o.kt)("h2",{id:"mount"},"mount"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'NET USE Z: \\\\68.79.39.232\\share "admin" /USER:"fastone"\n')),(0,o.kt)("h2",{id:"lsof"},"lsof"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# grep pipe\nlsof|grep FIFO\n")),(0,o.kt)("h2",{id:"ldd"},"ldd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ldd --version\n")),(0,o.kt)("h2",{id:"transport-endpoint-is-not-connected"},"Transport endpoint is not connected"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/24966676/transport-endpoint-is-not-connected"},"Transport endpoint is not connected"))))}d.isMDXComponent=!0}}]);