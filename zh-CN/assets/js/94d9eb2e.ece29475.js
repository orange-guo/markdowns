"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[8812],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=c(t),u=a,d=s["".concat(l,".").concat(u)]||s[u]||g[u]||o;return t?r.createElement(d,i(i({ref:n},m),{},{components:t})):r.createElement(d,i({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3340:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={authors:["xiangcheng.kuo"],tags:["springdoc","spring"]},i="springdoc-v2\u4e2d\u5728\u4e0d\u914d\u7f6e@ParameterObject\u7684\u60c5\u51b5\u4e0b\u5b9e\u73b0Pageable\u4ee5\u53caSort\u5bf9\u8c61\u5230API\u53c2\u6570\u7684\u8f6c\u6362",p={permalink:"/markdowns/zh-CN/blog/2023/02/22/springdoc-v2-parameter-object",source:"@site/blog/2023-02-22/springdoc-v2-parameter-object.md",title:"springdoc-v2\u4e2d\u5728\u4e0d\u914d\u7f6e@ParameterObject\u7684\u60c5\u51b5\u4e0b\u5b9e\u73b0Pageable\u4ee5\u53caSort\u5bf9\u8c61\u5230API\u53c2\u6570\u7684\u8f6c\u6362",description:"springdoc\u662f\u4e00\u4e2a\u53ef\u4ee5\u5feb\u901f\u751f\u6210API\u6587\u6863\u7684\u7b2c\u4e09\u65b9\u516c\u5171\u5e93, \u5e76\u63d0\u4f9b\u4e86UI\u9875\u9762\u4ee5\u4f9b\u8bbf\u95ee.",date:"2023-02-22T00:00:00.000Z",formattedDate:"2023\u5e742\u670822\u65e5",tags:[{label:"springdoc",permalink:"/markdowns/zh-CN/blog/tags/springdoc"},{label:"spring",permalink:"/markdowns/zh-CN/blog/tags/spring"}],readingTime:4.98,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["springdoc","spring"]},prevItem:{title:"\u5e38\u89c1\u7684\u547d\u540d\u524d\u7f00",permalink:"/markdowns/zh-CN/blog/2023/02/23/naming-pattern-prefix"},nextItem:{title:"\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u6ce8\u5165\u6570\u7ec4\u5230\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e",permalink:"/markdowns/zh-CN/blog/2023/02/21/inject-environment-as-array-into-spring-application"}},l={authorsImageUrls:[void 0]},c=[],m={toc:c},s="wrapper";function g(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"springdoc"),"\u662f\u4e00\u4e2a\u53ef\u4ee5\u5feb\u901f\u751f\u6210",(0,a.kt)("inlineCode",{parentName:"p"},"API"),"\u6587\u6863\u7684\u7b2c\u4e09\u65b9\u516c\u5171\u5e93, \u5e76\u63d0\u4f9b\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"UI"),"\u9875\u9762\u4ee5\u4f9b\u8bbf\u95ee.",(0,a.kt)("br",null),"\n\u540c\u65f6\u5b83\u4e5f\u63d0\u4f9b\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"spring-webmvc"),"\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"handler"),"\u4e2d\u7684\u53c2\u6570\u5bf9\u8c61\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"API"),"\u53c2\u6570\u7684\u8f6c\u6362.",(0,a.kt)("br",null),"\n\u5bf9\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"spring-data-commons"),"\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Pageable"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"Sort"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"springdoc"),"\u63d0\u4f9b\u4e86\u5f00\u7bb1\u5373\u7528\u7684\u529f\u80fd,\n\u9700\u8981\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u542f\u7528\u4ee5\u53ca\u5728\u53c2\u6570\u4e2d\u58f0\u660e",(0,a.kt)("inlineCode",{parentName:"p"},"@ParameterObject"),(0,a.kt)("br",null)),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="application.yml"',title:'"application.yml"'},"springdoc:\n  model-converters:\n    pageable-converter:\n      enabled: true\n")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5df2\u7ecf\u5b58\u5728\u7684\u9879\u76ee, \u5f53\u521a\u5f15\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"springdoc"),"\u65f6, \u9700\u8981\u914d\u7f6e\u5927\u91cf\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"@ParameterObject"),"\u6ce8\u89e3\u4ee5\u5b9e\u73b0\u53c2\u6570\u8f6c\u6362\u529f\u80fd.",(0,a.kt)("br",null),"\n\u8fd9\u4e2a\u8fc7\u7a0b\u901a\u5e38\u6bd4\u8f83\u7e41\u7410, \u56e0\u4e3a\u5bf9\u4e8e\u4e00\u4e2a\u5177\u6709\u4e00\u5b9a\u89c4\u6a21\u7684\u9879\u76ee\u800c\u8a00, \u5176\u5bf9\u5916\u63d0\u4f9b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"API"),"\u5f80\u5f80\u4f1a\u975e\u5e38\u591a,\n\u9700\u8981\u8fdb\u884c\u5927\u91cf\u7684\u4fee\u6539\u529f\u80fd\u624d\u80fd\u5b9e\u73b0\u8be5\u529f\u80fd",(0,a.kt)("br",null),"\n\u90a3\u4e48\u6b64\u65f6\u6211\u4eec\u9700\u8981\u4e00\u79cd\u89e3\u51b3\u65b9\u6848, \u5373\u5982\u4f55\u5728\u4e0d\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"@ParameterObject"),"\u7684\u60c5\u51b5\u4e0b\u5b9e\u73b0",(0,a.kt)("inlineCode",{parentName:"p"},"Pageable"),"\u4ee5\u53ca",(0,a.kt)("inlineCode",{parentName:"p"},"Sort"),"\u5bf9\u8c61\u5230API\u53c2\u6570\u7684\u8f6c\u6362"))}g.isMDXComponent=!0}}]);