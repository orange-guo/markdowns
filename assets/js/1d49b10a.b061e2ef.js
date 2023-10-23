"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[917],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,g=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return t?r.createElement(g,l(l({ref:n},c),{},{components:t})):r.createElement(g,l({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},62138:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(83117),a=(t(67294),t(3905));const o={authors:["xiangcheng.kuo"],tags:["snap"]},l="\u6e05\u7406\u65e7\u7248\u672c\u7684snap\u5e94\u7528\u4ee5\u91ca\u653e\u7a7a\u95f4",i={permalink:"/blog/2023/02/20/cleanup-old-version-of-snap-package",source:"@site/blog/2023-02-20/cleanup-old-version-of-snap-package.md",title:"\u6e05\u7406\u65e7\u7248\u672c\u7684snap\u5e94\u7528\u4ee5\u91ca\u653e\u7a7a\u95f4",description:"snap\u9ed8\u8ba4\u4f1a\u4fdd\u7559\u65e7\u7248\u672c\u7684\u5e94\u7528, \u4f46\u662f\u8fd9\u4e9b\u65e7\u7248\u672c\u7684\u5e94\u7528\u5360\u7528\u4e86\u5927\u91cf\u7684\u7a7a\u95f4, \u6240\u4ee5\u6211\u4eec\u9700\u8981\u6e05\u7406\u65e7\u7248\u672c\u7684\u5e94\u7528, \u4ee5\u91ca\u653e\u7a7a\u95f4.",date:"2023-02-20T00:00:00.000Z",formattedDate:"February 20, 2023",tags:[{label:"snap",permalink:"/blog/tags/snap"}],readingTime:.645,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["snap"]},prevItem:{title:"\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u6ce8\u5165\u6570\u7ec4\u5230\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e",permalink:"/blog/2023/02/21/inject-environment-as-array-into-spring-application"},nextItem:{title:"\u901a\u8fc7\u4e3aaws-eks\u6258\u7ba1\u7684k8s\u4e2d\u7684service\u542f\u7528nlb\u4ee5\u5b9e\u73b0\u5bf9\u5916\u66b4\u9732\u670d\u52a1",permalink:"/blog/2023/02/19/enable-nlb-for-eks-service"}},p={authorsImageUrls:[void 0]},s=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],c={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"snap"),"\u9ed8\u8ba4\u4f1a\u4fdd\u7559\u65e7\u7248\u672c\u7684\u5e94\u7528, \u4f46\u662f\u8fd9\u4e9b\u65e7\u7248\u672c\u7684\u5e94\u7528\u5360\u7528\u4e86\u5927\u91cf\u7684\u7a7a\u95f4, \u6240\u4ee5\u6211\u4eec\u9700\u8981\u6e05\u7406\u65e7\u7248\u672c\u7684\u5e94\u7528, \u4ee5\u91ca\u653e\u7a7a\u95f4."),(0,a.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("p",null,"\u65b0\u589e\u811a\u672c\u7528\u4e8e\u6e05\u7406\u65e7\u7248\u672c\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"snap"),"\u5e94\u7528."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="cleanup-old-snaps.sh"',title:'"cleanup-old-snaps.sh"'},'#!/bin/bash\n\nset -eu\n\necho "Old versions of snaps will be removed."\n\nsudo rm -rf /var/lib/snapd/cache/*\nsnap list --all | awk \'/disabled/{print $1, $3}\' | while read -r package revision; do\n  snap remove "$package" --revision="$revision"\ndone\n\necho "Old revisions of snaps are removed."\n\n')),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.linuxuprising.com/2019/04/how-to-remove-old-snap-versions-to-free.html"},"How To Remove Old Snap Versions To Free Up Disk Space"))))}m.isMDXComponent=!0}}]);