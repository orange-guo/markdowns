"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[855],{13858:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var t=s(85893),i=s(11151);const c={authors:["xiangcheng.kuo"],tags:["aws","s3"]},a="\u4f7f\u7528S3\u6258\u7ba1\u9759\u6001\u7f51\u7ad9",o={permalink:"/zh-CN/blog/2023/04/16/hosting-a-static-website-using-s3",source:"@site/blog/2023-04-16/hosting-a-static-website-using-s3.md",title:"\u4f7f\u7528S3\u6258\u7ba1\u9759\u6001\u7f51\u7ad9",description:"\u9759\u6001\u7f51\u7ad9\u662f\u6307\u4e0d\u9700\u8981\u540e\u7aef\u670d\u52a1\u7684\u7f51\u7ad9, \u6bd4\u5982\u4e2a\u4eba\u535a\u5ba2, \u4e2a\u4eba\u7b80\u5386, \u4e2a\u4eba\u4f5c\u54c1\u96c6\u7b49.",date:"2023-04-16T00:00:00.000Z",tags:[{label:"aws",permalink:"/zh-CN/blog/tags/aws"},{label:"s3",permalink:"/zh-CN/blog/tags/s-3"}],readingTime:2.105,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["aws","s3"]},unlisted:!1,prevItem:{title:"\u4f7f\u7528kind\u521b\u5efa\u4e00\u4e2ak8s\u96c6\u7fa4",permalink:"/zh-CN/blog/2023/04/23/use-kind-create-a-k8s-cluster"},nextItem:{title:"\u4f7f\u7528Gradle\u7684JavaPackager\u63d2\u4ef6\u5c06Java\u5e94\u7528\u6253\u5305\u6210\u4e8c\u8fdb\u5236\u6587\u4ef6",permalink:"/zh-CN/blog/2023/04/15/use-gradle-plugin-java-packager-to-build-binary-java-app"}},r={authorsImageUrls:[void 0]},l=[{value:"\u521b\u5efas3\u6876",id:"\u521b\u5efas3\u6876",level:2},{value:"\u542f\u7528s3\u9759\u6001\u7f51\u7ad9\u6258\u7ba1",id:"\u542f\u7528s3\u9759\u6001\u7f51\u7ad9\u6258\u7ba1",level:2},{value:"\u516c\u5f00\u6876",id:"\u516c\u5f00\u6876",level:2},{value:"\u4e0a\u4f20\u9759\u6001\u6587\u4ef6",id:"\u4e0a\u4f20\u9759\u6001\u6587\u4ef6",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u9759\u6001\u7f51\u7ad9\u662f\u6307\u4e0d\u9700\u8981\u540e\u7aef\u670d\u52a1\u7684\u7f51\u7ad9, \u6bd4\u5982\u4e2a\u4eba\u535a\u5ba2, \u4e2a\u4eba\u7b80\u5386, \u4e2a\u4eba\u4f5c\u54c1\u96c6\u7b49. ",(0,t.jsx)("br",{}),"\n\u8fd9\u4e9b\u7f51\u7ad9\u7684\u5185\u5bb9\u90fd\u662f\u9759\u6001\u7684, \u4e0d\u9700\u8981\u540e\u7aef\u670d\u52a1, \u53ea\u9700\u8981\u5c06\u9759\u6001\u6587\u4ef6\u6258\u7ba1\u5230\u4e00\u4e2a\u670d\u52a1\u5668\u4e0a\u5373\u53ef.",(0,t.jsx)("br",{}),"\n\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528AWS S3\u6258\u7ba1\u9759\u6001\u7f51\u7ad9."]}),"\n",(0,t.jsx)(n.h2,{id:"\u521b\u5efas3\u6876",children:"\u521b\u5efas3\u6876"}),"\n",(0,t.jsx)(n.p,{children:"\u9996\u5148, \u6211\u4eec\u9700\u8981\u521b\u5efa\u4e00\u4e2as3\u6876, \u7528\u4e8e\u5b58\u653e\u9759\u6001\u6587\u4ef6."}),"\n",(0,t.jsx)(n.p,{children:"\u6253\u5f00AWS\u63a7\u5236\u53f0, \u9009\u62e9S3\u670d\u52a1, \u70b9\u51fb\u521b\u5efa\u6876."}),"\n",(0,t.jsx)(n.h2,{id:"\u542f\u7528s3\u9759\u6001\u7f51\u7ad9\u6258\u7ba1",children:"\u542f\u7528s3\u9759\u6001\u7f51\u7ad9\u6258\u7ba1"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fdb\u5165s3\u6876, \u70b9\u51fb",(0,t.jsx)(n.code,{children:"Properties"}),"\u8fd9\u4e2a",(0,t.jsx)(n.code,{children:"Tab"}),", \u5728",(0,t.jsx)(n.code,{children:"Static website hosting"}),"\u8fd9\u4e2a",(0,t.jsx)(n.code,{children:"Section"}),"\u4e2d\u70b9\u51fb",(0,t.jsx)(n.code,{children:"Edit"}),"\u6309\u94ae.\n\u754c\u9762\u5982\u4e0b:\n",(0,t.jsx)(n.img,{alt:"2023-04-20 14-43-25.png",src:s(56499).Z+"",width:"800",height:"923"}),"\n\u586b\u5199\u5fc5\u8981\u7684\u4fe1\u606f, \u70b9\u51fb\u4fdd\u5b58."]}),"\n",(0,t.jsxs)(n.p,{children:["\u4fdd\u5b58\u5b8c\u6210\u4e4b\u540e\u518d\u6b21\u8fdb\u5165",(0,t.jsx)(n.code,{children:"Properties"}),"\u8fd9\u4e2a",(0,t.jsx)(n.code,{children:"Tab"}),"\u4e2d, \u5728",(0,t.jsx)(n.code,{children:"Static website hosting"}),"\u8fd9\u4e2a",(0,t.jsx)(n.code,{children:"Section"}),"\u4e2d\u53ef\u4ee5\u770b\u5230",(0,t.jsx)(n.code,{children:"Bucket website endpoint"}),"\n\u5df2\u7ecf\u663e\u793a\u51fa\u6765\u4e86, \u8fd9\u4e2a\u5c31\u662f\u6211\u4eec\u7684\u9759\u6001\u7f51\u7ad9\u5730\u5740."]}),"\n",(0,t.jsx)(n.h2,{id:"\u516c\u5f00\u6876",children:"\u516c\u5f00\u6876"}),"\n",(0,t.jsx)(n.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b, s3\u662f\u79c1\u6709\u7684, \u65e0\u6cd5\u901a\u8fc7\u516c\u7f51\u8bbf\u95ee. \u6211\u4eec\u9700\u8981\u5c06\u6876\u8bbe\u7f6e\u4e3a\u516c\u5f00, \u4ee5\u4fbf\u901a\u8fc7\u516c\u7f51\u8bbf\u95ee."}),"\n",(0,t.jsxs)(n.p,{children:["\u8fdb\u5165s3\u6876, \u70b9\u51fb",(0,t.jsx)(n.code,{children:"Permissions"}),"\u8fd9\u4e2a",(0,t.jsx)(n.code,{children:"Tab"}),", \u5728",(0,t.jsx)(n.code,{children:"Block public access (bucket settings)"}),"\u8fd9\u4e2a",(0,t.jsx)(n.code,{children:"Section"}),"\u4e2d\u70b9\u51fb",(0,t.jsx)(n.code,{children:"Edit"}),"\u6309\u94ae, \u754c\u9762\u5982\u4e0b:\n",(0,t.jsx)(n.img,{alt:"2023-04-20 14-49-00.png",src:s(86118).Z+"",width:"972",height:"871"}),"\n\u53d6\u6d88",(0,t.jsx)(n.code,{children:"Block all public access"}),"\u7684\u52fe\u9009, \u70b9\u51fb\u4fdd\u5b58."]}),"\n",(0,t.jsxs)(n.p,{children:["\u53e6\u5916\u8fd8\u9700\u8981\u8bbe\u7f6e",(0,t.jsx)(n.code,{children:"Bucket policy"}),", \u5728",(0,t.jsx)(n.code,{children:"Bucket policy"}),"\u8fd9\u4e2a",(0,t.jsx)(n.code,{children:"Section"}),"\u4e2d\u70b9\u51fb",(0,t.jsx)(n.code,{children:"Edit"}),"\u6309\u94ae, \u8f93\u5165\u5982\u4e0b\u914d\u7f6e\u540e\u4fdd\u5b58."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["\u5c06",(0,t.jsx)(n.code,{children:"Bucket-Name"}),"\u66ff\u6362\u4e3a\u81ea\u5df1\u7684\u6876\u540d\u79f0"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n\t"Version": "2012-10-17",\n\t"Statement": [\n\t\t{\n\t\t\t"Sid": "PublicReadGetObject",\n\t\t\t"Effect": "Allow",\n\t\t\t"Principal": "*",\n\t\t\t"Action": [\n\t\t\t\t"s3:GetObject"\n\t\t\t],\n\t\t\t"Resource": [\n\t\t\t\t"arn:aws:s3:::Bucket-Name/*"\n\t\t\t]\n\t\t}\n\t]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u4e0a\u4f20\u9759\u6001\u6587\u4ef6",children:"\u4e0a\u4f20\u9759\u6001\u6587\u4ef6"}),"\n",(0,t.jsxs)(n.p,{children:["\u901a\u8fc7",(0,t.jsx)(n.code,{children:"aws-cli"}),"\u6216\u8005",(0,t.jsx)(n.code,{children:"web-console"}),"\u4e0a\u4f20\u9759\u6001\u6587\u4ef6\u5230s3\u6876\u4e2d."]}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u8003\u8d44\u6599",children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.amazonaws.cn/en_us/AmazonS3/latest/userguide/WebsiteHosting.html",children:"Hosting a static website using Amazon S3"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteAccessPermissionsReqd.html",children:"Setting permissions for website access"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},56499:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/2023-04-20-14-43-25-b19076b9cc6fb8b10abf06c9a2882029.png"},86118:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/2023-04-20-14-50-45-f7c7722e8a05006617f0f75d3272effe.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var t=s(67294);const i={},c=t.createContext(i);function a(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);