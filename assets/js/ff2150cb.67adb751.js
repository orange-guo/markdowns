"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[6557],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,k=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5238:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},l="Cloud",i={unversionedId:"problem/cloud",id:"problem/cloud",title:"Cloud",description:"AWS",source:"@site/docs/problem/cloud.md",sourceDirName:"problem",slug:"/problem/cloud",permalink:"/markdowns/docs/problem/cloud",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/problem/cloud.md",tags:[],version:"current",lastUpdatedBy:"xiangcheng.kuo",lastUpdatedAt:1672810241,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Camunda",permalink:"/markdowns/docs/problem/camunda"},next:{title:"Docker",permalink:"/markdowns/docs/problem/docker"}},u={},c=[{value:"AWS",id:"aws",level:2},{value:"Oracle",id:"oracle",level:2},{value:"AZURE",id:"azure",level:2},{value:"\u8d44\u6e90\u7ec4\u4f4d\u4e8e\u8ba2\u9605\u4e0b",id:"\u8d44\u6e90\u7ec4\u4f4d\u4e8e\u8ba2\u9605\u4e0b",level:3},{value:"\u5783\u573e\u6e05\u7406",id:"\u5783\u573e\u6e05\u7406",level:3},{value:"subnet\u6700\u5c0f\u7f51\u7edc\u4f4d\u4e3a28",id:"subnet\u6700\u5c0f\u7f51\u7edc\u4f4d\u4e3a28",level:3}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cloud"},"Cloud"),(0,a.kt)("h2",{id:"aws"},"AWS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AWS\u65e0\u6cd5\u8fde\u63a5\u5230\u5b9e\u4f8b")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u68c0\u67e5",(0,a.kt)("inlineCode",{parentName:"p"},"internetgateway"),", \u5e76attach\u5230vpc\uff0c \u5e76\u4e14\u4fee\u6539 route table\n0.0.0.0/0 to igw")),(0,a.kt)("h2",{id:"oracle"},"Oracle"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"centos\u955c\u50cf\u7528\u6237\u540d\u4e3aopc"),(0,a.kt)("li",{parentName:"ul"},"\u6700\u4f4e\u78c1\u76d8\u5927\u5c0f50GB"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u8d85\u8fc710\u4e2atag"),(0,a.kt)("li",{parentName:"ul"},"\u5f00\u542fwindows\u673a\u5668\u4f1a\u505a\u5b89\u5168\u68c0\u67e5(\u5927\u6982\u5341\u51e0\u5206\u949f)"),(0,a.kt)("li",{parentName:"ul"},"\u955c\u50cf\u5bfc\u51fa\u540e\u673a\u578b\u517c\u5bb9\u914d\u7f6e\u5c31\u6ca1\u6709\u4e86(\u9700\u8981\u91cd\u65b0\u5bfc\u5165)")),(0,a.kt)("h2",{id:"azure"},"AZURE"),(0,a.kt)("h3",{id:"\u8d44\u6e90\u7ec4\u4f4d\u4e8e\u8ba2\u9605\u4e0b"},"\u8d44\u6e90\u7ec4\u4f4d\u4e8e\u8ba2\u9605\u4e0b"),(0,a.kt)("p",null,"\u53ea\u80fd\u4f7f\u7528\u540c\u4e00\u4e2a\u8d44\u6e90\u7ec4\u5185\u7684\u8d44\u6e90\n\u5e76\u4e14region\u5f97\u662f\u540c\u4e00\u4e2a\u4f8b\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"chinanorth2")),(0,a.kt)("h3",{id:"\u5783\u573e\u6e05\u7406"},"\u5783\u573e\u6e05\u7406"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u505c\u6b62deploy"),(0,a.kt)("li",{parentName:"ol"},"\u5220\u9664/fastone/services/deploy"),(0,a.kt)("li",{parentName:"ol"},"\u5220\u9664deploy\u6570\u636e\u5e93"),(0,a.kt)("li",{parentName:"ol"},"\u5220\u9664\u76f8\u5173VirtualMachines"),(0,a.kt)("li",{parentName:"ol"},"\u5220\u9664\u76f8\u5173VirtualNetworkPeerings"),(0,a.kt)("li",{parentName:"ol"},"\u5220\u9664\u76f8\u5173VirtualNetwork")),(0,a.kt)("h3",{id:"subnet\u6700\u5c0f\u7f51\u7edc\u4f4d\u4e3a28"},"subnet\u6700\u5c0f\u7f51\u7edc\u4f4d\u4e3a28"))}d.isMDXComponent=!0}}]);