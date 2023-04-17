"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[3195],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(t),d=a,b=s["".concat(u,".").concat(d)]||s[d]||m[d]||o;return t?r.createElement(b,l(l({ref:n},p),{},{components:t})):r.createElement(b,l({ref:n},p))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2296:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={authors:["xiangcheng.kuo"],tags:["aliyundrive","rclone","docker","fuse"]},l="\u4f7f\u7528aliyundrive-webdav\u548crclone\u5b9e\u73b0\u963f\u91cc\u4e91\u76d8\u6587\u4ef6\u6302\u8f7d\u5230\u672c\u5730",i={permalink:"/zh-CN/blog/2023/02/18/use-aliyundrive-webdav-with-rclone-to-mount-files",source:"@site/blog/2023-02-18/use-aliyundrive-webdav-with-rclone-to-mount-files.md",title:"\u4f7f\u7528aliyundrive-webdav\u548crclone\u5b9e\u73b0\u963f\u91cc\u4e91\u76d8\u6587\u4ef6\u6302\u8f7d\u5230\u672c\u5730",description:"aliyun-webdav\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5de5\u5177, \u53ef\u4ee5\u4e3a\u963f\u91cc\u4e91\u76d8\u63d0\u4f9bWebDAV\u670d\u52a1.",date:"2023-02-18T00:00:00.000Z",formattedDate:"2023\u5e742\u670818\u65e5",tags:[{label:"aliyundrive",permalink:"/zh-CN/blog/tags/aliyundrive"},{label:"rclone",permalink:"/zh-CN/blog/tags/rclone"},{label:"docker",permalink:"/zh-CN/blog/tags/docker"},{label:"fuse",permalink:"/zh-CN/blog/tags/fuse"}],readingTime:1.86,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["aliyundrive","rclone","docker","fuse"]},prevItem:{title:"\u901a\u8fc7\u4e3aaws-eks\u6258\u7ba1\u7684k8s\u4e2d\u7684service\u542f\u7528nlb\u4ee5\u5b9e\u73b0\u5bf9\u5916\u66b4\u9732\u670d\u52a1",permalink:"/zh-CN/blog/2023/02/19/enable-nlb-for-eks-service"},nextItem:{title:"\u4f7f\u7528snap\u5b89\u88c5\u6307\u5b9a\u7248\u672c\u7684\u5e94\u7528",permalink:"/zh-CN/blog/2023/02/17/snap-install-specify-version"}},u={authorsImageUrls:[void 0]},c=[],p={toc:c},s="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"aliyun-webdav"),"\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5de5\u5177, \u53ef\u4ee5\u4e3a\u963f\u91cc\u4e91\u76d8\u63d0\u4f9b",(0,a.kt)("inlineCode",{parentName:"p"},"WebDAV"),"\u670d\u52a1.",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"rclone"),"\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5de5\u5177, \u53ef\u4ee5\u5c06\u672c\u5730\u6587\u4ef6\u540c\u6b65\u5230\u5404\u79cd\u4e91\u5b58\u50a8\u670d\u52a1\u4e2d, \u5305\u62ec\u4f46\u4e0d\u9650\u4e8e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"S3"),(0,a.kt)("li",{parentName:"ul"},"WebDAV"),(0,a.kt)("li",{parentName:"ul"},"FTP"),(0,a.kt)("li",{parentName:"ul"},"SFTP"),(0,a.kt)("li",{parentName:"ul"},"...")),(0,a.kt)("p",null,"\u4ee5\u4e0b\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"aliyun-webdav"),"\u642d\u914d",(0,a.kt)("inlineCode",{parentName:"p"},"rclone"),"\u5b9e\u73b0\u5c06\u672c\u5730\u6587\u4ef6\u540c\u6b65\u5230\u963f\u91cc\u4e91\u76d8.",(0,a.kt)("br",null),"\n\u672c\u6848\u4f8b\u662f\u57fa\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"ubuntu"),"\u5b9e\u73b0\u7684, \u65b9\u6848\u4f7f\u7528\u5230\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"docker"),"\u56e0\u6b64\u7406\u8bba\u4e0a\u53ef\u4ee5\u5728\u4efb\u4f55\u652f\u6301",(0,a.kt)("inlineCode",{parentName:"p"},"docker"),"\u7684\u7cfb\u7edf\u4e2d\u5b9e\u73b0."))}m.isMDXComponent=!0}}]);