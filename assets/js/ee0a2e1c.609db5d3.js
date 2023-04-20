"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[9552],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>j});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=m(a),u=r,j=d["".concat(p,".").concat(u)]||d[u]||s[u]||l;return a?n.createElement(j,i(i({ref:t},c),{},{components:a})):n.createElement(j,i({ref:t},c))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4456:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={authors:["xiangcheng.kuo"],tags:["java","decompiler","intellij-idea"]},i="\u4f7f\u7528IntelliJ IDEA\u4e2d\u7684java-decompiler\u63d2\u4ef6\u5c06jar\u5305\u53cd\u7f16\u8bd1\u4e3ajava\u6e90\u7801",o={permalink:"/blog/2023/03/13/intellij-idea-java-decompiler",source:"@site/blog/2023-03-13/intellij-idea-java-decompiler.md",title:"\u4f7f\u7528IntelliJ IDEA\u4e2d\u7684java-decompiler\u63d2\u4ef6\u5c06jar\u5305\u53cd\u7f16\u8bd1\u4e3ajava\u6e90\u7801",description:"\u6709\u7684\u65f6\u5019\u9700\u8981\u5c06jar\u5305\u4e2d\u7684class\u6587\u4ef6\u53cd\u7f16\u8bd1\u4e3ajava\u6e90\u7801\u6587\u4ef6\u5e76\u5bf9\u5176\u884c\u4e3a\u8fdb\u884c\u5206\u6790.",date:"2023-03-13T00:00:00.000Z",formattedDate:"March 13, 2023",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"decompiler",permalink:"/blog/tags/decompiler"},{label:"intellij-idea",permalink:"/blog/tags/intellij-idea"}],readingTime:1.425,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["java","decompiler","intellij-idea"]},prevItem:{title:"IntelliJ IDEA\u4e2d\u5b9e\u73b0\u81ea\u5b9a\u4e49\u6ce8\u89e3\u4e2d\u7684\u8bed\u6cd5\u9ad8\u4eae",permalink:"/blog/2023/03/14/intellij-idea-language-injection"},nextItem:{title:"SSH\u547d\u4ee4\u65e0\u6cd5\u521b\u5efa\u8fdc\u7a0b\u8fde\u63a5",permalink:"/blog/2023/03/09/ssh-execution-timeout"}},p={authorsImageUrls:[void 0]},m=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u83b7\u53d6<code>java-decompiler</code>\u63d2\u4ef6",id:"\u83b7\u53d6java-decompiler\u63d2\u4ef6",level:3},{value:"\u53cd\u7f16\u8bd1<code>jar</code>\u5305",id:"\u53cd\u7f16\u8bd1jar\u5305",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],c={toc:m},d="wrapper";function s(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6709\u7684\u65f6\u5019\u9700\u8981\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"jar"),"\u5305\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"class"),"\u6587\u4ef6\u53cd\u7f16\u8bd1\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"java"),"\u6e90\u7801\u6587\u4ef6\u5e76\u5bf9\u5176\u884c\u4e3a\u8fdb\u884c\u5206\u6790.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"IntelliJ IDEA"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"java-decompiler"),"\u63d2\u4ef6\u53ef\u4ee5\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"jar"),"\u5305\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"class"),"\u6587\u4ef6\u53cd\u7f16\u8bd1\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"java"),"\u6e90\u7801\u6587\u4ef6.",(0,r.kt)("br",null),"\n\u4e0b\u9762\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"IntelliJ IDEA"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"java-decompiler"),"\u63d2\u4ef6\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"jar"),"\u5305\u53cd\u7f16\u8bd1\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"java"),"\u6e90\u7801.",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,r.kt)("h3",{id:"\u83b7\u53d6java-decompiler\u63d2\u4ef6"},"\u83b7\u53d6",(0,r.kt)("inlineCode",{parentName:"h3"},"java-decompiler"),"\u63d2\u4ef6"),(0,r.kt)("p",null,"\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"IDEA"),"\u5b89\u88c5\u76ee\u5f55\u4e0b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"plugins/java-decompiler/lib"),"\u76ee\u5f55\u4e0b\u83b7\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"java-decompiler.jar"),".",(0,r.kt)("br",null),"\n\u5982\u679c\u6ca1\u6709\u5b89\u88c5",(0,r.kt)("inlineCode",{parentName:"p"},"java-decompiler"),"\u63d2\u4ef6,\u53ef\u4ee5\u4ece",(0,r.kt)("a",{target:"_blank",href:a(9983).Z},"\u70b9\u51fb\u8fd9\u91cc"),"\u4e0b\u8f7d"),(0,r.kt)("h3",{id:"\u53cd\u7f16\u8bd1jar\u5305"},"\u53cd\u7f16\u8bd1",(0,r.kt)("inlineCode",{parentName:"h3"},"jar"),"\u5305"),(0,r.kt)("p",null,"\u76ee\u524d",(0,r.kt)("inlineCode",{parentName:"p"},"java-decompiler"),"\u53cd\u7f16\u8bd1\u540e\u7684\u7684\u6e90\u7801\u6587\u4ef6\u662f\u6253\u5305\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"jar"),"\u5305\u4e2d\u7684,\u9700\u8981\u5c06\u5176\u89e3\u538b\u51fa\u6765. ",(0,r.kt)("br",null),"\n\u8fd9\u6837\u6bd4\u8f83\u4e0d\u65b9\u4fbf, \u4e0b\u9762\u6211\u63d0\u4f9b\u4e00\u4e2a\u811a\u672c\u6765\u53cd\u7f16\u8bd1\u4ee5\u53ca\u89e3\u538b",(0,r.kt)("inlineCode",{parentName:"p"},"jar"),"\u5305\u4e2d\u7684\u6e90\u7801\u6587\u4ef6.",(0,r.kt)("br",null)),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="decompile.sh"',title:'"decompile.sh"'},"#!/bin/bash\n\nset -ex\n\nJAR_FILE_PATH=$(realpath $1)\nDEST_DIRECTORY=$(realpath $2)\n\nrm -rf $DEST_DIRECTORY\nmkdir $DEST_DIRECTORY\njava -cp java-decompiler.jar org.jetbrains.java.decompiler.main.decompiler.ConsoleDecompiler -hdc=0 -dgs=1 -rsy=1 -rbr=1 -lit=1 -nls=1 -mpm=60 $JAR_FILE_PATH $DEST_DIRECTORY\nunzip $DEST_DIRECTORY/$(basename $JAR_FILE_PATH) -d $DEST_DIRECTORY\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./decompile.sh drm-control.jar ./decompiled\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u811a\u672c\u4f1a\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"drm-control.jar"),"\u53cd\u7f16\u8bd1\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"java"),"\u6e90\u7801\u6587\u4ef6\u5e76\u89e3\u538b\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"./decompiled"),"\u76ee\u5f55\u4e0b.",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/28389006/how-to-decompile-to-java-files-intellij-idea"},"How to decompile to java files intellij idea")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/JetBrains/intellij-community/tree/master/plugins/java-decompiler/engine"},"java-decompiler")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{target:"_blank",href:a(9983).Z},"java-decompiler")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{target:"_blank",href:a(2398).Z},"decompile.sh"))))}s.isMDXComponent=!0},2398:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/decompile-1347519645992987f1cef09e93729f3f.sh"},9983:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/java-decompiler-2fb9e72ff407759f9557ff4528d93212.jar"}}]);