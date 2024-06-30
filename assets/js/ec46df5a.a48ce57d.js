"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[66637],{68274:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var l=r(74848),i=r(28453);const s={authors:["orange"],tags:["aliyundrive","rclone","docker","fuse"]},d="\u4f7f\u7528aliyundrive-webdav\u548crclone\u5b9e\u73b0\u963f\u91cc\u4e91\u76d8\u6587\u4ef6\u6302\u8f7d\u5230\u672c\u5730",c={permalink:"/blog/2023/02/18/use-aliyundrive-webdav-with-rclone-to-mount-files",source:"@site/blog/2023-02-18-use-aliyundrive-webdav-with-rclone-to-mount-files.md",title:"\u4f7f\u7528aliyundrive-webdav\u548crclone\u5b9e\u73b0\u963f\u91cc\u4e91\u76d8\u6587\u4ef6\u6302\u8f7d\u5230\u672c\u5730",description:"aliyun-webdav\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5de5\u5177, \u53ef\u4ee5\u4e3a\u963f\u91cc\u4e91\u76d8\u63d0\u4f9bWebDAV\u670d\u52a1.",date:"2023-02-18T00:00:00.000Z",tags:[{inline:!0,label:"aliyundrive",permalink:"/blog/tags/aliyundrive"},{inline:!0,label:"rclone",permalink:"/blog/tags/rclone"},{inline:!0,label:"docker",permalink:"/blog/tags/docker"},{inline:!0,label:"fuse",permalink:"/blog/tags/fuse"}],readingTime:1.86,hasTruncateMarker:!0,authors:[{name:"orange",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"orange"}],frontMatter:{authors:["orange"],tags:["aliyundrive","rclone","docker","fuse"]},unlisted:!1,prevItem:{title:"\u901a\u8fc7\u4e3aaws-eks\u6258\u7ba1\u7684k8s\u4e2d\u7684service\u542f\u7528nlb\u4ee5\u5b9e\u73b0\u5bf9\u5916\u66b4\u9732\u670d\u52a1",permalink:"/blog/2023/02/19/enable-nlb-for-eks-service"},nextItem:{title:"\u4f7f\u7528snap\u5b89\u88c5\u6307\u5b9a\u7248\u672c\u7684\u5e94\u7528",permalink:"/blog/2023/02/17/snap-install-specify-version"}},o={authorsImageUrls:[void 0]},a=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u8981\u6c42",id:"\u8981\u6c42",level:3},{value:"\u83b7\u53d6\u963f\u91cc\u4e91\u76d8\u7684<code>refresh_token</code>",id:"\u83b7\u53d6\u963f\u91cc\u4e91\u76d8\u7684refresh_token",level:3},{value:"\u914d\u7f6e<code>aliyundrive-webdav</code>",id:"\u914d\u7f6ealiyundrive-webdav",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function t(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"aliyun-webdav"}),"\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5de5\u5177, \u53ef\u4ee5\u4e3a\u963f\u91cc\u4e91\u76d8\u63d0\u4f9b",(0,l.jsx)(n.code,{children:"WebDAV"}),"\u670d\u52a1.",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.code,{children:"rclone"}),"\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5de5\u5177, \u53ef\u4ee5\u5c06\u672c\u5730\u6587\u4ef6\u540c\u6b65\u5230\u5404\u79cd\u4e91\u5b58\u50a8\u670d\u52a1\u4e2d, \u5305\u62ec\u4f46\u4e0d\u9650\u4e8e"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"S3"}),"\n",(0,l.jsx)(n.li,{children:"WebDAV"}),"\n",(0,l.jsx)(n.li,{children:"FTP"}),"\n",(0,l.jsx)(n.li,{children:"SFTP"}),"\n",(0,l.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4ee5\u4e0b\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528",(0,l.jsx)(n.code,{children:"aliyun-webdav"}),"\u642d\u914d",(0,l.jsx)(n.code,{children:"rclone"}),"\u5b9e\u73b0\u5c06\u672c\u5730\u6587\u4ef6\u540c\u6b65\u5230\u963f\u91cc\u4e91\u76d8.",(0,l.jsx)("br",{}),"\n\u672c\u6848\u4f8b\u662f\u57fa\u4e8e",(0,l.jsx)(n.code,{children:"ubuntu"}),"\u5b9e\u73b0\u7684, \u65b9\u6848\u4f7f\u7528\u5230\u4e86",(0,l.jsx)(n.code,{children:"docker"}),"\u56e0\u6b64\u7406\u8bba\u4e0a\u53ef\u4ee5\u5728\u4efb\u4f55\u652f\u6301",(0,l.jsx)(n.code,{children:"docker"}),"\u7684\u7cfb\u7edf\u4e2d\u5b9e\u73b0."]}),"\n",(0,l.jsx)(n.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,l.jsx)(n.h3,{id:"\u8981\u6c42",children:"\u8981\u6c42"}),"\n",(0,l.jsx)(n.p,{children:"\u7cfb\u7edf\u4e2d\u5fc5\u987b\u5b58\u5728\u4ee5\u4e0b\u5de5\u5177"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"docker"}),"\n",(0,l.jsx)(n.li,{children:"docker-compose"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u53e6\u5916\u786e\u4fdd\u5f53\u524d\u7528\u6237\u6709",(0,l.jsx)(n.code,{children:"docker"}),"\u6743\u9650, \u5982\u679c\u6ca1\u6709, \u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6dfb\u52a0"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo usermod -aG docker $USER\nsudo newgrp docker\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"\u83b7\u53d6\u963f\u91cc\u4e91\u76d8\u7684refresh_token",children:["\u83b7\u53d6\u963f\u91cc\u4e91\u76d8\u7684",(0,l.jsx)(n.code,{children:"refresh_token"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u65b0\u7248\u672c\u7684\u963f\u91cc\u4e91\u76d8\u4e0d\u518d\u652f\u6301\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u83b7\u53d6",(0,l.jsx)(n.code,{children:"refresh_token"}),", \u6240\u4ee5\u9700\u8981\u8bbf\u95ee\u8be5\u9879\u76ee\u5bf9\u5e94\u7684\u5f00\u53d1\u8005\u63d0\u4f9b\u7684\u83b7\u53d6",(0,l.jsx)(n.code,{children:"refresh_token"}),"\u7684\u9875\u9762,\n\u5e76\u5728\u8be5\u9875\u9762\u4e2d\u83b7\u53d6",(0,l.jsx)(n.code,{children:"refresh_token"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u8fdb\u5165",(0,l.jsx)(n.a,{href:"https://messense-aliyundrive-webdav-backendrefresh-token-ucs0wn.streamlit.app/",children:"aliyundrive-webdav refresh token \u83b7\u53d6"}),"\n\u5e76\u6839\u636e\u9875\u9762\u63d0\u793a\u83b7\u53d6",(0,l.jsx)(n.code,{children:"refresh_token"})]}),"\n",(0,l.jsxs)(n.h3,{id:"\u914d\u7f6ealiyundrive-webdav",children:["\u914d\u7f6e",(0,l.jsx)(n.code,{children:"aliyundrive-webdav"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u4e0b\u8f7d\u5e76\u89e3\u538b",(0,l.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(76345).A+"",children:"aliyundrive.zip"}),(0,l.jsx)(n.code,{children:"aliyundrive-webdav"}),", \u8fd9\u4e2a\u538b\u7f29\u5305\u4e2d\u5305\u542b\u4e86\u76f8\u5173\u670d\u52a1\u7684\u914d\u7f6e\u4ee5\u53ca\u542f\u52a8\u811a\u672c.",(0,l.jsx)("br",{}),"\n\u89e3\u538b\u540e\u7684\u6587\u4ef6\u5939\u4e2d\u5b58\u5728",(0,l.jsx)(n.code,{children:"docker-compose.yml"}),"\u6587\u4ef6, \u7f16\u8f91\u8be5\u6587\u4ef6.",(0,l.jsx)("br",{}),"\n\u5c06",(0,l.jsx)(n.code,{children:'REFRESH_TOKEN: "<REFRESH_TOKEN>"'}),"\u4e2d\u7684",(0,l.jsx)(n.code,{children:"<REFRESH_TOKEN>"}),"\n\u6539\u4e3a\u4e0a\u4e00\u6b65\u83b7\u53d6\u5230\u7684",(0,l.jsx)(n.code,{children:"refresh_token"}),".",(0,l.jsx)("br",{})]}),"\n",(0,l.jsx)(n.h3,{id:"\u542f\u52a8",children:"\u542f\u52a8"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u521a\u624d\u7684\u76ee\u5f55\u4e2d\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"./start.sh\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/messense/aliyundrive-webdav",children:"aliyundrive-webdav"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://rclone.org/",children:"rclone"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://www.docker.com/",children:"docker"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://docs.docker.com/compose/",children:"docker-compose"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://www.aliyundrive.com/drive",children:"\u963f\u91cc\u4e91\u76d8"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},76345:(e,n,r)=>{r.d(n,{A:()=>l});const l=r.p+"assets/files/2023-02-18-aliyundrive-4921e0df5a08b36c182df153c5d1b042.zip"},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>c});var l=r(96540);const i={},s=l.createContext(i);function d(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);