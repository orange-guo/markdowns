"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[8154],{3905:(e,a,n)=>{n.d(a,{Zo:()=>g,kt:()=>d});var r=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=r.createContext({}),c=function(e){var a=r.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},g=function(e){var a=c(e.components);return r.createElement(p.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},s=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=c(n),s=t,d=u["".concat(p,".").concat(s)]||u[s]||m[s]||o;return n?r.createElement(d,i(i({ref:a},g),{},{components:n})):r.createElement(d,i({ref:a},g))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[u]="string"==typeof e?e:t,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2916:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),t=(n(7294),n(3905));const o={authors:["xiangcheng.kuo"],tags:["binary-build","java-packager","gradle-plugin"]},i="\u4f7f\u7528Gradle\u7684JavaPackager\u63d2\u4ef6\u5c06Java\u5e94\u7528\u6253\u5305\u6210\u4e8c\u8fdb\u5236\u6587\u4ef6",l={permalink:"/blog/2023/04/15/use-gradle-plugin-java-packager-to-build-binary-java-app",source:"@site/blog/2023-04-15/use-gradle-plugin-java-packager-to-build-binary-java-app.md",title:"\u4f7f\u7528Gradle\u7684JavaPackager\u63d2\u4ef6\u5c06Java\u5e94\u7528\u6253\u5305\u6210\u4e8c\u8fdb\u5236\u6587\u4ef6",description:"\u5728\u4e4b\u524d\u7684\u6587\u7ae0\u4e2d, \u6211\u4ecb\u7ecd\u8fc7\u5982\u4f55\u901a\u8fc7graalvm\u5c06java\u5e94\u7528\u6253\u5305\u6210\u4e8c\u8fdb\u5236\u6587\u4ef6, \u4f46\u662f\u8fd9\u79cd\u65b9\u5f0f\u9700\u8981\u5728graalvm\u4e2d\u5b89\u88c5native-image",date:"2023-04-15T00:00:00.000Z",formattedDate:"April 15, 2023",tags:[{label:"binary-build",permalink:"/blog/tags/binary-build"},{label:"java-packager",permalink:"/blog/tags/java-packager"},{label:"gradle-plugin",permalink:"/blog/tags/gradle-plugin"}],readingTime:6.02,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["binary-build","java-packager","gradle-plugin"]},nextItem:{title:"\u89e3\u51b3\u5728Kotlin Coroutines\u4e2d\u7684\u547d\u4ee4\u884c\u8c03\u7528\u4e2d\u51fa\u73b0Stream Closed\u5f02\u5e38",permalink:"/blog/2023/04/05/fix-stream-closed-exception-in-command-line-invocation-in-kotlin-coroutine"}},p={authorsImageUrls:[void 0]},c=[],g={toc:c},u="wrapper";function m(e){let{components:a,...n}=e;return(0,t.kt)(u,(0,r.Z)({},g,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"\u5728\u4e4b\u524d\u7684\u6587\u7ae0\u4e2d, \u6211\u4ecb\u7ecd\u8fc7\u5982\u4f55\u901a\u8fc7",(0,t.kt)("inlineCode",{parentName:"p"},"graalvm"),"\u5c06",(0,t.kt)("inlineCode",{parentName:"p"},"java"),"\u5e94\u7528\u6253\u5305\u6210\u4e8c\u8fdb\u5236\u6587\u4ef6, \u4f46\u662f\u8fd9\u79cd\u65b9\u5f0f\u9700\u8981\u5728",(0,t.kt)("inlineCode",{parentName:"p"},"graalvm"),"\u4e2d\u5b89\u88c5",(0,t.kt)("inlineCode",{parentName:"p"},"native-image"),"\n\u5de5\u5177, \u5e76\u4e14\u9700\u8981\u5728",(0,t.kt)("inlineCode",{parentName:"p"},"graalvm"),"\u4e2d\u7f16\u8bd1",(0,t.kt)("inlineCode",{parentName:"p"},"java"),"\u5e94\u7528, \u8fd9\u6837\u7684\u65b9\u5f0f\u5bf9\u4e8e",(0,t.kt)("inlineCode",{parentName:"p"},"java"),"\u5e94\u7528\u7684\u5f00\u53d1\u8005\u6765\u8bf4, \u6709\u4e00\u5b9a\u7684\u95e8\u69db, \u800c\u4e14\u4e5f\u4e0d\u591f\u7075\u6d3b.\n\u5e76\u4e14\u6784\u5efa\u8fc7\u7a0b\u4e2d\u7531\u4e8e\u4ee3\u7801\u6ca1\u6709\u6ee1\u8db3",(0,t.kt)("inlineCode",{parentName:"p"},"graalvm"),"\u7684\u8981\u6c42, \u4f8b\u5982\u4f7f\u7528\u4e86",(0,t.kt)("inlineCode",{parentName:"p"},"java"),"\u7684\u53cd\u5c04\u673a\u5236, \u4f1a\u5bfc\u81f4\u6784\u5efa\u5931\u8d25(\ngraalvm\u9700\u8981\u5728\u7f16\u8bd1\u65f6\u5c31\u77e5\u9053\u8fd9\u4e9b\u4fe1\u606f\u6765\u751f\u6210)\n\u4e0b\u9762\u5c06\u4ecb\u7ecd\u53e6\u4e00\u79cd\u65b9\u5f0f, \u901a\u8fc7",(0,t.kt)("inlineCode",{parentName:"p"},"gradle"),"\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"JavaPackager"),"\u63d2\u4ef6\u6765\u6784\u5efa\u4e8c\u8fdb\u5236\u6587\u4ef6."))}m.isMDXComponent=!0}}]);