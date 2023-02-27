"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[4805],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),k=a,d=u["".concat(p,".").concat(k)]||u[k]||m[k]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6958:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={authors:["xiangcheng.kuo"],tags:["k8s","aws"]},i="\u901a\u8fc7\u542f\u7528nlb\u4ee5\u5b9e\u73b0\u4e3aaws-eks\u6258\u7ba1\u7684k8s\u4e2d\u7684service\u542f\u7528\u5916\u90e8\u8bbf\u95ee\u80fd\u529b",l={permalink:"/markdowns/blog/2023/02/19/index",source:"@site/blog/2023-02-19/index.md",title:"\u901a\u8fc7\u542f\u7528nlb\u4ee5\u5b9e\u73b0\u4e3aaws-eks\u6258\u7ba1\u7684k8s\u4e2d\u7684service\u542f\u7528\u5916\u90e8\u8bbf\u95ee\u80fd\u529b",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0bk8s\u4e2d\u7684Service\u4e3aClusterIP\u7c7b\u578b, \u5373\u53ea\u80fd\u5728\u96c6\u7fa4\u5185\u90e8\u8bbf\u95ee, \u65e0\u6cd5\u901a\u8fc7\u5916\u90e8\u8bbf\u95ee(\u8fd9\u91cc\u7684\u5916\u90e8\u6307\u7684\u662fk8s\u96c6\u7fa4\u5916\u90e8,",date:"2023-02-19T00:00:00.000Z",formattedDate:"February 19, 2023",tags:[{label:"k8s",permalink:"/markdowns/blog/tags/k-8-s"},{label:"aws",permalink:"/markdowns/blog/tags/aws"}],readingTime:1.015,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["k8s","aws"]},prevItem:{title:"\u6e05\u7406\u65e7\u7248\u672c\u7684snap\u5e94\u7528\u4ee5\u91ca\u653e\u7a7a\u95f4",permalink:"/markdowns/blog/2023/02/20/index"}},p={authorsImageUrls:[void 0]},s=[],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b",(0,a.kt)("inlineCode",{parentName:"p"},"k8s"),"\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Service"),"\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterIP"),"\u7c7b\u578b, \u5373\u53ea\u80fd\u5728\u96c6\u7fa4\u5185\u90e8\u8bbf\u95ee, \u65e0\u6cd5\u901a\u8fc7\u5916\u90e8\u8bbf\u95ee(\u8fd9\u91cc\u7684\u5916\u90e8\u6307\u7684\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"k8s"),"\u96c6\u7fa4\u5916\u90e8,\n\u5373",(0,a.kt)("inlineCode",{parentName:"p"},"k8s"),"\u96c6\u7fa4\u6240\u5728\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"VPC"),"\u5916\u90e8).",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"NodeProt"),"\u4e5f\u5b58\u5728\u540c\u6837\u7684\u95ee\u9898, \u65e0\u6cd5\u901a\u8fc7\u5916\u90e8\u8bbf\u95ee.",(0,a.kt)("br",null),"\n\u4e3a\u4e86\u80fd\u591f\u901a\u8fc7\u5916\u90e8\u8bbf\u95ee",(0,a.kt)("inlineCode",{parentName:"p"},"k8s"),"\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"service"),", \u9700\u8981\u542f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"nlb"),"\u4ee5\u5b9e\u73b0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"aws-eks"),"\u6258\u7ba1\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"k8s"),"\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"service"),"\u542f\u7528\u5916\u90e8\u8bbf\u95ee\u80fd\u529b."))}u.isMDXComponent=!0}}]);