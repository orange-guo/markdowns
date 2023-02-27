"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[1053],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,y=u["".concat(c,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},i="yq",l={unversionedId:"note/software-engineering/operations/linux/yq",id:"note/software-engineering/operations/linux/yq",title:"yq",description:"\u7528\u4f8b",source:"@site/docs/note/software-engineering/operations/linux/yq.md",sourceDirName:"note/software-engineering/operations/linux",slug:"/note/software-engineering/operations/linux/yq",permalink:"/markdowns/docs/note/software-engineering/operations/linux/yq",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/note/software-engineering/operations/linux/yq.md",tags:[],version:"current",lastUpdatedBy:"xiangcheng.kuo",lastUpdatedAt:1677469017,formattedLastUpdatedAt:"Feb 27, 2023",frontMatter:{},sidebar:"note",previous:{title:"tar",permalink:"/markdowns/docs/note/software-engineering/operations/linux/tar"},next:{title:"Principle",permalink:"/markdowns/docs/category/principle"}},c={},s=[{value:"\u7528\u4f8b",id:"\u7528\u4f8b",level:2},{value:"Yq\u66f4\u65b0\u5c5e\u6027\u4e3a.\u7684\u503c\u5e76\u4fdd\u5b58\u5230yaml\u6587\u4ef6",id:"yq\u66f4\u65b0\u5c5e\u6027\u4e3a\u7684\u503c\u5e76\u4fdd\u5b58\u5230yaml\u6587\u4ef6",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"yq"},"yq"),(0,o.kt)("h2",{id:"\u7528\u4f8b"},"\u7528\u4f8b"),(0,o.kt)("h3",{id:"yq\u66f4\u65b0\u5c5e\u6027\u4e3a\u7684\u503c\u5e76\u4fdd\u5b58\u5230yaml\u6587\u4ef6"},"Yq\u66f4\u65b0\u5c5e\u6027\u4e3a.\u7684\u503c\u5e76\u4fdd\u5b58\u5230yaml\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'yq -i \'.["."] = "value"\' file.yaml\n')),(0,o.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"))}u.isMDXComponent=!0}}]);