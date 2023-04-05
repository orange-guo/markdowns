"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[8376],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,f=m["".concat(c,".").concat(g)]||m[g]||s[g]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={authors:["xiangcheng.kuo"],tags:["intellij-idea"]},l="IntelliJ IDEA\u4e2d\u5b9e\u73b0\u81ea\u5b9a\u4e49\u6ce8\u89e3\u4e2d\u7684\u8bed\u6cd5\u9ad8\u4eae",i={permalink:"/blog/2023/03/14/intellij-idea-language-injection",source:"@site/blog/2023-03-14/intellij-idea-language-injection.md",title:"IntelliJ IDEA\u4e2d\u5b9e\u73b0\u81ea\u5b9a\u4e49\u6ce8\u89e3\u4e2d\u7684\u8bed\u6cd5\u9ad8\u4eae",description:"\u8fd9\u7bc7\u6587\u7ae0\u662f\u57fa\u4e8eclojure\u8868\u8fbe\u5f0f\u5b9e\u73b0\u66f4\u52a0\u7075\u6d3b\u7684\u6570\u636e\u9a8c\u8bc1\u7684\u540e\u7eed\u4f18\u5316\u7684\u6587\u7ae0.",date:"2023-03-14T00:00:00.000Z",formattedDate:"March 14, 2023",tags:[{label:"intellij-idea",permalink:"/blog/tags/intellij-idea"}],readingTime:1.325,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["intellij-idea"]},prevItem:{title:"\u901a\u8fc7\u589e\u52a0timeout-control\u4ee5\u89e3\u51b3\u5f53tcp\u8fde\u63a5\u4e00\u76f4\u5904\u4e8eSYN_SENT\u72b6\u6001\u5bfc\u81f4java\u4e2d\u7684ldap-client\u7684failover\u4e0d\u5de5\u4f5c\u7684\u95ee\u9898",permalink:"/blog/2023/03/15/ldap-client-failover"},nextItem:{title:"\u4f7f\u7528IntelliJ IDEA\u4e2d\u7684java-decompiler\u63d2\u4ef6\u5c06jar\u5305\u53cd\u7f16\u8bd1\u4e3ajava\u6e90\u7801",permalink:"/blog/2023/03/13/intellij-idea-java-decompiler"}},c={authorsImageUrls:[void 0]},p=[],u={toc:p},m="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u662f",(0,a.kt)("a",{parentName:"p",href:"/blog/2023/03/02/clojure-validation"},"\u57fa\u4e8e",(0,a.kt)("inlineCode",{parentName:"a"},"clojure"),"\u8868\u8fbe\u5f0f\u5b9e\u73b0\u66f4\u52a0\u7075\u6d3b\u7684\u6570\u636e\u9a8c\u8bc1"),"\u7684\u540e\u7eed\u4f18\u5316\u7684\u6587\u7ae0.",(0,a.kt)("br",null),"\n\u4e3b\u8981\u76ee\u7684\u662f\u4e3a\u4e86\u5b9e\u73b0\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"IntelliJ IDEA"),"\u4e2d\u5b9e\u73b0\u81ea\u5b9a\u4e49\u6ce8\u89e3\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"clojure"),"\u8868\u8fbe\u5f0f\u7684\u8bed\u6cd5\u9ad8\u4eae\u95ee\u9898.",(0,a.kt)("br",null),"\n\u901a\u8fc7\u8bed\u6cd5\u9ad8\u4eae, \u53ef\u4ee5\u66f4\u52a0\u76f4\u89c2\u7684\u770b\u5230\u8868\u8fbe\u5f0f\u7684\u7ed3\u6784, \u4ee5\u53ca\u8868\u8fbe\u5f0f\u4e2d\u7684\u9519\u8bef. \u4ece\u800c\u66f4\u52a0\u4fbf\u6377\u5730\u5b9e\u73b0\u8868\u8fbe\u5f0f\u7684\u7f16\u5199.",(0,a.kt)("br",null)))}s.isMDXComponent=!0}}]);