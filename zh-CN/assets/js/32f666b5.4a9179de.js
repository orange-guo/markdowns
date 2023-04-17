"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[1650],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||s[m]||a;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50821:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={},l="Cloud Native(\u4e91\u539f\u751f)",i={unversionedId:"note/methodology/cloud-native",id:"note/methodology/cloud-native",title:"Cloud Native(\u4e91\u539f\u751f)",description:"\u4ecb\u7ecd",source:"@site/docs/note/methodology/cloud-native.md",sourceDirName:"note/methodology",slug:"/note/methodology/cloud-native",permalink:"/zh-CN/docs/note/methodology/cloud-native",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/note/methodology/cloud-native.md",tags:[],version:"current",lastUpdatedBy:"xiangcheng.kuo",lastUpdatedAt:1681744505,formattedLastUpdatedAt:"2023\u5e744\u670817\u65e5",frontMatter:{},sidebar:"note",previous:{title:"C4 model",permalink:"/zh-CN/docs/note/methodology/c4-model"},next:{title:"Continuous delivery(CD)",permalink:"/zh-CN/docs/note/methodology/continuous-delivery"}},c={},u=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],d={toc:u},p="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cloud-native\u4e91\u539f\u751f"},"Cloud Native(\u4e91\u539f\u751f)"),(0,o.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,o.kt)("p",null,"\u4e91\u539f\u751f\u662f\u4e00\u79cd\u6784\u5efa\u548c\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u7684\u65b9\u6cd5\uff0c\u5b83\u5229\u7528\u4e91\u8ba1\u7b97\u7684\u4f18\u52bf\uff0c\u4ee5\u6700\u5927\u9650\u5ea6\u5730\u63d0\u9ad8\u6548\u7387\u548c\u964d\u4f4e\u6210\u672c\u3002",(0,o.kt)("br",null),"\n\u4e91\u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u662f\u4e00\u7ec4\u5bb9\u5668\u5316\u7684\u3001\u53ef\u81ea\u52a8\u7ba1\u7406\u548c\u53ef\u7ec4\u5408\u7684\u5fae\u670d\u52a1\uff0c\u8fd9\u4e9b\u5fae\u670d\u52a1\u53ef\u4ee5\u901a\u8fc7\u81ea\u52a8\u5316\u90e8\u7f72\u7ba1\u9053\u5feb\u901f\u4ea4\u4ed8\u548c\u90e8\u7f72\u3002",(0,o.kt)("br",null),"\n\u4e91\u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u8fd8\u53ef\u4ee5\u5229\u7528\u4e91\u63d0\u4f9b\u5546\u7684\u670d\u52a1\uff0c\u5982\u670d\u52a1\u53d1\u73b0\u3001\u8d1f\u8f7d\u5747\u8861\u3001\u7f13\u5b58\u3001\u6d88\u606f/\u961f\u5217\u3001\u76d1\u63a7\u548c\u65e5\u5fd7\u8bb0\u5f55\u3002"),(0,o.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/what-is/cloud-native/"},"What Is Cloud Native?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/architecture/cloud-native/definition"},"What is Cloud Native?"))))}s.isMDXComponent=!0}}]);