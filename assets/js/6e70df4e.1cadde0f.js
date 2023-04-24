"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[3567],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=p,d=u["".concat(l,".").concat(m)]||u[m]||y[m]||o;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function d(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:p,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99741:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),p=(r(67294),r(3905));const o={},a="PyPI",i={unversionedId:"note/python/Pypi",id:"note/python/Pypi",title:"PyPI",description:"\u5e38\u7528repository\u5217\u8868",source:"@site/docs/note/python/Pypi.md",sourceDirName:"note/python",slug:"/note/python/Pypi",permalink:"/docs/note/python/Pypi",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/note/python/Pypi.md",tags:[],version:"current",lastUpdatedBy:"xiangcheng.kuo",lastUpdatedAt:1682336712,formattedLastUpdatedAt:"Apr 24, 2023",frontMatter:{},sidebar:"note",previous:{title:"Python",permalink:"/docs/category/python"}},l={},c=[{value:"\u5e38\u7528repository\u5217\u8868",id:"\u5e38\u7528repository\u5217\u8868",level:2},{value:"\u4e34\u65f6\u4f7f\u7528repository",id:"\u4e34\u65f6\u4f7f\u7528repository",level:2},{value:"\u6c38\u4e45\u4fee\u6539",id:"\u6c38\u4e45\u4fee\u6539",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],s={toc:c},u="wrapper";function y(e){let{components:t,...r}=e;return(0,p.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"pypi"},"PyPI"),(0,p.kt)("h2",{id:"\u5e38\u7528repository\u5217\u8868"},"\u5e38\u7528repository\u5217\u8868"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u6e05\u534e\u5927\u5b66 ",(0,p.kt)("a",{parentName:"li",href:"https://pypi.tuna.tsinghua.edu.cn/simple"},"https://pypi.tuna.tsinghua.edu.cn/simple")),(0,p.kt)("li",{parentName:"ul"},"\u8c46\u74e3 ",(0,p.kt)("a",{parentName:"li",href:"http://pypi.douban.com/simple/"},"http://pypi.douban.com/simple/")),(0,p.kt)("li",{parentName:"ul"},"\u817e\u8baf ",(0,p.kt)("a",{parentName:"li",href:"http://mirrors.cloud.tencent.com/pypi/simple"},"http://mirrors.cloud.tencent.com/pypi/simple")),(0,p.kt)("li",{parentName:"ul"},"\u963f\u91cc ",(0,p.kt)("a",{parentName:"li",href:"https://mirrors.aliyun.com/pypi/simple/"},"https://mirrors.aliyun.com/pypi/simple/"))),(0,p.kt)("h2",{id:"\u4e34\u65f6\u4f7f\u7528repository"},"\u4e34\u65f6\u4f7f\u7528repository"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"pip install scrapy -i https://pypi.tuna.tsinghua.edu.cn/simple\n")),(0,p.kt)("h2",{id:"\u6c38\u4e45\u4fee\u6539"},"\u6c38\u4e45\u4fee\u6539"),(0,p.kt)("p",null,"\u4fee\u6539",(0,p.kt)("inlineCode",{parentName:"p"},"~/.config/pip/pip.conf"),"\n\u5185\u5bb9\u5982\u4e0b"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"[global]\n\nindex-url = https://pypi.tuna.tsinghua.edu.cn/simple\n\n")),(0,p.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://pypi.org/"},"The Python Package Index")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://developer.aliyun.com/article/652884"},"\u66f4\u6362\uff08Pypi\uff09pip\u6e90\u5230\u56fd\u5185\u955c\u50cf"))))}y.isMDXComponent=!0}}]);