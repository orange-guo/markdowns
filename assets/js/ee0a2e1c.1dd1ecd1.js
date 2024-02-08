"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[9552],{83513:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>c,default:()=>j,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var l=n(85893),i=n(11151);const r={authors:["xiangcheng.kuo"],tags:["java","decompiler","intellij-idea"]},c="\u4f7f\u7528IntelliJ IDEA\u4e2d\u7684java-decompiler\u63d2\u4ef6\u5c06jar\u5305\u53cd\u7f16\u8bd1\u4e3ajava\u6e90\u7801",d={permalink:"/blog/2023/03/13/intellij-idea-java-decompiler",source:"@site/blog/2023-03-13/intellij-idea-java-decompiler.md",title:"\u4f7f\u7528IntelliJ IDEA\u4e2d\u7684java-decompiler\u63d2\u4ef6\u5c06jar\u5305\u53cd\u7f16\u8bd1\u4e3ajava\u6e90\u7801",description:"\u6709\u7684\u65f6\u5019\u9700\u8981\u5c06jar\u5305\u4e2d\u7684class\u6587\u4ef6\u53cd\u7f16\u8bd1\u4e3ajava\u6e90\u7801\u6587\u4ef6\u5e76\u5bf9\u5176\u884c\u4e3a\u8fdb\u884c\u5206\u6790.",date:"2023-03-13T00:00:00.000Z",formattedDate:"March 13, 2023",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"decompiler",permalink:"/blog/tags/decompiler"},{label:"intellij-idea",permalink:"/blog/tags/intellij-idea"}],readingTime:1.425,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["java","decompiler","intellij-idea"]},unlisted:!1,prevItem:{title:"IntelliJ IDEA\u4e2d\u5b9e\u73b0\u81ea\u5b9a\u4e49\u6ce8\u89e3\u4e2d\u7684\u8bed\u6cd5\u9ad8\u4eae",permalink:"/blog/2023/03/14/intellij-idea-language-injection"},nextItem:{title:"SSH\u547d\u4ee4\u65e0\u6cd5\u521b\u5efa\u8fdc\u7a0b\u8fde\u63a5",permalink:"/blog/2023/03/09/ssh-execution-timeout"}},o={authorsImageUrls:[void 0]},s=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u83b7\u53d6<code>java-decompiler</code>\u63d2\u4ef6",id:"\u83b7\u53d6java-decompiler\u63d2\u4ef6",level:3},{value:"\u53cd\u7f16\u8bd1<code>jar</code>\u5305",id:"\u53cd\u7f16\u8bd1jar\u5305",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function t(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.p,{children:["\u6709\u7684\u65f6\u5019\u9700\u8981\u5c06",(0,l.jsx)(a.code,{children:"jar"}),"\u5305\u4e2d\u7684",(0,l.jsx)(a.code,{children:"class"}),"\u6587\u4ef6\u53cd\u7f16\u8bd1\u4e3a",(0,l.jsx)(a.code,{children:"java"}),"\u6e90\u7801\u6587\u4ef6\u5e76\u5bf9\u5176\u884c\u4e3a\u8fdb\u884c\u5206\u6790.",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(a.code,{children:"IntelliJ IDEA"}),"\u4e2d\u7684",(0,l.jsx)(a.code,{children:"java-decompiler"}),"\u63d2\u4ef6\u53ef\u4ee5\u5c06",(0,l.jsx)(a.code,{children:"jar"}),"\u5305\u4e2d\u7684",(0,l.jsx)(a.code,{children:"class"}),"\u6587\u4ef6\u53cd\u7f16\u8bd1\u4e3a",(0,l.jsx)(a.code,{children:"java"}),"\u6e90\u7801\u6587\u4ef6.",(0,l.jsx)("br",{}),"\n\u4e0b\u9762\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528",(0,l.jsx)(a.code,{children:"IntelliJ IDEA"}),"\u4e2d\u7684",(0,l.jsx)(a.code,{children:"java-decompiler"}),"\u63d2\u4ef6\u5c06",(0,l.jsx)(a.code,{children:"jar"}),"\u5305\u53cd\u7f16\u8bd1\u4e3a",(0,l.jsx)(a.code,{children:"java"}),"\u6e90\u7801.",(0,l.jsx)("br",{})]}),"\n",(0,l.jsx)(a.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,l.jsxs)(a.h3,{id:"\u83b7\u53d6java-decompiler\u63d2\u4ef6",children:["\u83b7\u53d6",(0,l.jsx)(a.code,{children:"java-decompiler"}),"\u63d2\u4ef6"]}),"\n",(0,l.jsxs)(a.p,{children:["\u4ece",(0,l.jsx)(a.code,{children:"IDEA"}),"\u5b89\u88c5\u76ee\u5f55\u4e0b\u7684",(0,l.jsx)(a.code,{children:"plugins/java-decompiler/lib"}),"\u76ee\u5f55\u4e0b\u83b7\u53d6",(0,l.jsx)(a.code,{children:"java-decompiler.jar"}),".",(0,l.jsx)("br",{}),"\n\u5982\u679c\u6ca1\u6709\u5b89\u88c5",(0,l.jsx)(a.code,{children:"java-decompiler"}),"\u63d2\u4ef6,\u53ef\u4ee5\u4ece",(0,l.jsx)(a.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(99983).Z+"",children:"\u70b9\u51fb\u8fd9\u91cc"}),"\u4e0b\u8f7d"]}),"\n",(0,l.jsxs)(a.h3,{id:"\u53cd\u7f16\u8bd1jar\u5305",children:["\u53cd\u7f16\u8bd1",(0,l.jsx)(a.code,{children:"jar"}),"\u5305"]}),"\n",(0,l.jsxs)(a.p,{children:["\u76ee\u524d",(0,l.jsx)(a.code,{children:"java-decompiler"}),"\u53cd\u7f16\u8bd1\u540e\u7684\u7684\u6e90\u7801\u6587\u4ef6\u662f\u6253\u5305\u5728",(0,l.jsx)(a.code,{children:"jar"}),"\u5305\u4e2d\u7684,\u9700\u8981\u5c06\u5176\u89e3\u538b\u51fa\u6765. ",(0,l.jsx)("br",{}),"\n\u8fd9\u6837\u6bd4\u8f83\u4e0d\u65b9\u4fbf, \u4e0b\u9762\u6211\u63d0\u4f9b\u4e00\u4e2a\u811a\u672c\u6765\u53cd\u7f16\u8bd1\u4ee5\u53ca\u89e3\u538b",(0,l.jsx)(a.code,{children:"jar"}),"\u5305\u4e2d\u7684\u6e90\u7801\u6587\u4ef6.",(0,l.jsx)("br",{})]}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-bash",metastring:'title="decompile.sh"',children:"#!/bin/bash\n\nset -ex\n\nJAR_FILE_PATH=$(realpath $1)\nDEST_DIRECTORY=$(realpath $2)\n\nrm -rf $DEST_DIRECTORY\nmkdir $DEST_DIRECTORY\njava -cp java-decompiler.jar org.jetbrains.java.decompiler.main.decompiler.ConsoleDecompiler -hdc=0 -dgs=1 -rsy=1 -rbr=1 -lit=1 -nls=1 -mpm=60 $JAR_FILE_PATH $DEST_DIRECTORY\nunzip $DEST_DIRECTORY/$(basename $JAR_FILE_PATH) -d $DEST_DIRECTORY\n"})}),"\n",(0,l.jsx)(a.p,{children:"\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-bash",children:"./decompile.sh drm-control.jar ./decompiled\n"})}),"\n",(0,l.jsxs)(a.p,{children:["\u8fd9\u4e2a\u811a\u672c\u4f1a\u5c06",(0,l.jsx)(a.code,{children:"drm-control.jar"}),"\u53cd\u7f16\u8bd1\u4e3a",(0,l.jsx)(a.code,{children:"java"}),"\u6e90\u7801\u6587\u4ef6\u5e76\u89e3\u538b\u5230",(0,l.jsx)(a.code,{children:"./decompiled"}),"\u76ee\u5f55\u4e0b.",(0,l.jsx)("br",{})]}),"\n",(0,l.jsx)(a.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsx)(a.li,{children:(0,l.jsx)(a.a,{href:"https://stackoverflow.com/questions/28389006/how-to-decompile-to-java-files-intellij-idea",children:"How to decompile to java files intellij idea"})}),"\n",(0,l.jsx)(a.li,{children:(0,l.jsx)(a.a,{href:"https://github.com/JetBrains/intellij-community/tree/master/plugins/java-decompiler/engine",children:"java-decompiler"})}),"\n",(0,l.jsx)(a.li,{children:(0,l.jsx)(a.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(99983).Z+"",children:"java-decompiler"})}),"\n",(0,l.jsx)(a.li,{children:(0,l.jsx)(a.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(42398).Z+"",children:"decompile.sh"})}),"\n"]})]})}function j(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},42398:(e,a,n)=>{n.d(a,{Z:()=>l});const l=n.p+"assets/files/decompile-1347519645992987f1cef09e93729f3f.sh"},99983:(e,a,n)=>{n.d(a,{Z:()=>l});const l=n.p+"assets/files/java-decompiler-2fb9e72ff407759f9557ff4528d93212.jar"},11151:(e,a,n)=>{n.d(a,{Z:()=>d,a:()=>c});var l=n(67294);const i={},r=l.createContext(i);function c(e){const a=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),l.createElement(r.Provider,{value:a},e.children)}}}]);