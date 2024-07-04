"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[56461],{63048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>m,frontMatter:()=>d,metadata:()=>o,toc:()=>u});var s=n(74848),r=n(28453),c=n(96540),i=n(95293);const a=e=>{let{src:t,...r}=e;const[a,d]=(0,c.useState)();(0,c.useEffect)((()=>{n.e(64967).then(n.bind(n,64967)).then((e=>{d(e)}))}),[]);const{colorMode:l}=(0,i.G)(),o=(0,c.useRef)(null);return(0,c.useEffect)((()=>{const e=o.current,n=a?.create(t,e,{...r,theme:"dark"===l?"docusaurus-classic-dark":"docusaurus-classic-light"});return()=>{n?.dispose()}}),[t,r,l,a]),(0,s.jsx)("div",{ref:o})},d={authors:["orange"],tags:["docusaurus","react","mdx","asciinema","remark","mdast","mdast-util-mdx-jsx","mdast-util-mdxjs-esm","rehype-katex","remark-math"]},l="\u5c06Asciinema\u96c6\u6210\u5230Docusaurus\u9879\u76ee\u4e2d",o={permalink:"/zh-CN/blog/2024/06/28/integrate-asciinema-into-dodocusaurus-project",source:"@site/blog/2024-06-28-integrate-asciinema-into-dodocusaurus-project.md",title:"\u5c06Asciinema\u96c6\u6210\u5230Docusaurus\u9879\u76ee\u4e2d",description:"\u5728Markdown\u6587\u6863\u4e2d, \u6d89\u53ca\u5230\u4e00\u4e9b\u7ec8\u7aef\u64cd\u4f5c\u65f6, \u9700\u8981\u4e00\u79cd\u65b9\u5f0f\u6765\u5c55\u793a\u8fd9\u4e9b\u64cd\u4f5c.",date:"2024-06-28T00:00:00.000Z",tags:[{inline:!0,label:"docusaurus",permalink:"/zh-CN/blog/tags/docusaurus"},{inline:!0,label:"react",permalink:"/zh-CN/blog/tags/react"},{inline:!0,label:"mdx",permalink:"/zh-CN/blog/tags/mdx"},{inline:!0,label:"asciinema",permalink:"/zh-CN/blog/tags/asciinema"},{inline:!0,label:"remark",permalink:"/zh-CN/blog/tags/remark"},{inline:!0,label:"mdast",permalink:"/zh-CN/blog/tags/mdast"},{inline:!0,label:"mdast-util-mdx-jsx",permalink:"/zh-CN/blog/tags/mdast-util-mdx-jsx"},{inline:!0,label:"mdast-util-mdxjs-esm",permalink:"/zh-CN/blog/tags/mdast-util-mdxjs-esm"},{inline:!0,label:"rehype-katex",permalink:"/zh-CN/blog/tags/rehype-katex"},{inline:!0,label:"remark-math",permalink:"/zh-CN/blog/tags/remark-math"}],readingTime:8.425,hasTruncateMarker:!0,authors:[{name:"orange",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"orange"}],frontMatter:{authors:["orange"],tags:["docusaurus","react","mdx","asciinema","remark","mdast","mdast-util-mdx-jsx","mdast-util-mdxjs-esm","rehype-katex","remark-math"]},unlisted:!1,nextItem:{title:"X Window System",permalink:"/zh-CN/blog/2024/06/23/x-window-system"}},h={authorsImageUrls:[void 0]},u=[{value:"\u5e38\u89c1\u7684\u89e3\u51b3\u65b9\u6848",id:"\u5e38\u89c1\u7684\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u5de5\u5177\u4ecb\u7ecd",id:"\u5de5\u5177\u4ecb\u7ecd",level:2},{value:"Asciinema",id:"asciinema",level:3},{value:"Docusaurus",id:"docusaurus",level:3},{value:"MDX",id:"mdx",level:3},{value:"\u529f\u80fd\u8bbe\u8ba1",id:"\u529f\u80fd\u8bbe\u8ba1",level:2},{value:"\u5c01\u88c5<code>React</code>\u7ec4\u4ef6",id:"\u5c01\u88c5react\u7ec4\u4ef6",level:3},{value:"\u6269\u5c55<code>Markdown</code>\u89e3\u6790\u5668\u5e76\u5b9e\u73b0<code>link</code>\u8bed\u6cd5\u7684\u6e32\u67d3",id:"\u6269\u5c55markdown\u89e3\u6790\u5668\u5e76\u5b9e\u73b0link\u8bed\u6cd5\u7684\u6e32\u67d3",level:3},{value:"\u529f\u80fd\u5b9e\u73b0",id:"\u529f\u80fd\u5b9e\u73b0",level:2},{value:"\u5c01\u88c5<code>Asciinema</code>\u5e93\u4e3a<code>React</code>\u7ec4\u4ef6",id:"\u5c01\u88c5asciinema\u5e93\u4e3areact\u7ec4\u4ef6",level:3},{value:"\u81ea\u5b9a\u4e49<code>Markdown</code>\u8bed\u6cd5\u6811\u89e3\u6790",id:"\u81ea\u5b9a\u4e49markdown\u8bed\u6cd5\u6811\u89e3\u6790",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function x(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["\u5728",(0,s.jsx)(t.code,{children:"Markdown"}),"\u6587\u6863\u4e2d, \u6d89\u53ca\u5230\u4e00\u4e9b\u7ec8\u7aef\u64cd\u4f5c\u65f6, \u9700\u8981\u4e00\u79cd\u65b9\u5f0f\u6765\u5c55\u793a\u8fd9\u4e9b\u64cd\u4f5c."]}),"\n",(0,s.jsx)(t.h2,{id:"\u5e38\u89c1\u7684\u89e3\u51b3\u65b9\u6848",children:"\u5e38\u89c1\u7684\u89e3\u51b3\u65b9\u6848"}),"\n",(0,s.jsxs)(t.p,{children:["\u867d\u7136",(0,s.jsx)(t.code,{children:"Markdown"}),"\u5185\u7f6e\u7684",(0,s.jsx)(t.code,{children:"codeblock"}),"\u8bed\u6cd5\u65b9\u4fbf, \u4f46\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b, \u5b83\u4e5f\u6709\u4e0d\u8db3\u4e4b\u5904. ",(0,s.jsx)("br",{}),"\n\u6bd4\u5982, \u5f53\u7ec8\u7aef\u64cd\u4f5c\u6b65\u9aa4\u8fc7\u957f, \u5305\u542b\u5927\u91cf\u8f93\u5165\u8f93\u51fa\u5185\u5bb9\u65f6, \u4f1a\u5bfc\u81f4\u6587\u6863\u5360\u7528\u8fc7\u591a\u7a7a\u95f4, \u5f71\u54cd\u9605\u8bfb\u4f53\u9a8c. ",(0,s.jsx)("br",{}),"\n\u53e6\u4e00\u79cd\u65b9\u6cd5\u662f\u5c06\u7ec8\u7aef\u64cd\u4f5c\u5f55\u5236\u6210\u89c6\u9891\u5e76\u901a\u8fc7\u94fe\u63a5\u5f15\u7528, \u8fd9\u6837\u89c6\u9891\u53ef\u4ee5\u5d4c\u5165\u9875\u9762\u4e2d\u5c55\u793a\u64cd\u4f5c\u8fc7\u7a0b. ",(0,s.jsx)("br",{}),"\n\u7136\u800c, \u89c6\u9891\u6587\u4ef6\u901a\u5e38\u8f83\u5927, \u5360\u7528\u8f83\u591a\u7a7a\u95f4, \u800c\u7ec8\u7aef\u64cd\u4f5c\u672c\u8d28\u4e0a\u53ea\u662f\u5b57\u7b26\u4e32."]}),"\n",(0,s.jsx)(t.h2,{id:"\u5de5\u5177\u4ecb\u7ecd",children:"\u5de5\u5177\u4ecb\u7ecd"}),"\n",(0,s.jsx)(t.h3,{id:"asciinema",children:"Asciinema"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://asciinema.org/",children:"Asciinema"}),"\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u7ec8\u7aef\u5f55\u5236\u5de5\u5177, \u53ef\u4ee5\u8bb0\u5f55\u7ec8\u7aef\u64cd\u4f5c\u5e76\u751f\u6210\u53ef\u64ad\u653e\u7684\u6587\u4ef6.",(0,s.jsx)("br",{}),"\n\u8fd9\u4e2a\u6587\u4ef6\u4ec5\u5305\u542b\u6587\u672c\u4fe1\u606f, \u4e0d\u5360\u7528\u592a\u591a\u7a7a\u95f4, \u975e\u5e38\u9002\u5408\u5c55\u793a\u7ec8\u7aef\u64cd\u4f5c\u6f14\u793a.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(t.p,{children:["\u8981\u751f\u6210\u7ec8\u7aef\u64cd\u4f5c\u6f14\u793a, \u9700\u8981\u5b89\u88c5",(0,s.jsx)(t.code,{children:"Asciinema"}),"\u7684\u547d\u4ee4\u884c\u5de5\u5177, \u5e76\u4f7f\u7528\u8be5\u5de5\u5177\u8fdb\u884c\u5f55\u5236.",(0,s.jsx)("br",{}),"\n\u8be6\u7ec6\u7684\u5b89\u88c5\u548c\u4f7f\u7528\u6559\u7a0b\u53ef\u4ee5\u53c2\u8003",(0,s.jsx)(t.a,{href:"https://docs.asciinema.org/getting-started/",children:"getting-started"}),"\u9875\u9762."]}),"\n",(0,s.jsx)(t.h3,{id:"docusaurus",children:"Docusaurus"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docusaurus.io/",children:"Docusaurus"}),"\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u9759\u6001\u7f51\u7ad9\u751f\u6210\u5668, \u57fa\u4e8e ",(0,s.jsx)(t.code,{children:"React"})," \u5b9e\u73b0, \u5141\u8bb8\u4f7f\u7528",(0,s.jsx)(t.code,{children:"Markdown"}),"\u7f16\u5199\u6587\u6863, \u5e76\u7528\n",(0,s.jsx)(t.code,{children:"React"}),"\u6e32\u67d3. ",(0,s.jsx)("br",{}),"\n\u5728",(0,s.jsx)(t.code,{children:"Docusaurus"}),"\u4e2d, \u652f\u6301\u4f7f\u7528",(0,s.jsx)(t.code,{children:"MDX"}),"\u6269\u5c55.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(t.h3,{id:"mdx",children:"MDX"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://mdxjs.com/",children:"MDX"}),"\u662f",(0,s.jsx)(t.code,{children:"Markdown"}),"\u7684\u6269\u5c55, \u5141\u8bb8\u6211\u4eec\u5728",(0,s.jsx)(t.code,{children:"Markdown"}),"\u6587\u6863\u4e2d\u4f7f\u7528",(0,s.jsx)(t.code,{children:"JavaScript"}),"\n\u4ee3\u7801\u6765\u5b9e\u73b0\u66f4\u4e30\u5bcc\u7684\u6587\u6863\u5185\u5bb9\u6e32\u67d3.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(t.h2,{id:"\u529f\u80fd\u8bbe\u8ba1",children:"\u529f\u80fd\u8bbe\u8ba1"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Docusaurus"}),"\u652f\u6301",(0,s.jsx)(t.code,{children:"MDX"}),"\u8bed\u6cd5, \u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u5728\u6587\u6863\u4e2d\u5f15\u5165",(0,s.jsx)(t.code,{children:"JavaScript"}),"\u4ee3\u7801\u6765\u6e32\u67d3\u9875\u9762.",(0,s.jsx)("br",{}),"\n\u867d\u7136",(0,s.jsx)(t.code,{children:"Asciinema"}),"\u63d0\u4f9b\u4e86\u7528\u4e8e\u9875\u9762\u6e32\u67d3\u7684",(0,s.jsx)(t.code,{children:"JavaScript"}),"\u5e93, \u4f46\u9057\u61be\u7684\u662f\u76ee\u524d\u53ea\u6709\u57fa\u672c\u7684",(0,s.jsx)(t.code,{children:"JavaScript"}),"\u5b9e\u73b0. ",(0,s.jsx)("br",{}),"\n\u7531\u4e8e",(0,s.jsx)(t.code,{children:"Docusaurus"}),"\u662f\u57fa\u4e8e",(0,s.jsx)(t.code,{children:"React"}),"\u5b9e\u73b0\u7684, \u56e0\u6b64\u6211\u4eec\u9700\u8981\u5c06",(0,s.jsx)(t.code,{children:"Asciinema"}),"\u63d0\u4f9b\u7684",(0,s.jsx)(t.code,{children:"JavaScript"}),"\u5e93\u5c01\u88c5\u4e3a",(0,s.jsx)(t.code,{children:"Docusaurus"}),"\u652f\u6301\u7684",(0,s.jsx)(t.code,{children:"React"}),"\n\u7ec4\u4ef6.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(t.h3,{id:"\u5c01\u88c5react\u7ec4\u4ef6",children:["\u5c01\u88c5",(0,s.jsx)(t.code,{children:"React"}),"\u7ec4\u4ef6"]}),"\n",(0,s.jsxs)(t.p,{children:["\u5982\u679c\u6211\u4eec\u9700\u8981\u5728",(0,s.jsx)(t.code,{children:"Docusaurus"}),"\u4e2d\u96c6\u6210",(0,s.jsx)(t.code,{children:"Asciinema"}),", \u90a3\u4e48\u9700\u8981\u5b8c\u6210\u4ee5\u4e0b\u6b65\u9aa4:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\u5c06",(0,s.jsx)(t.code,{children:"Asciinema"}),"\u63d0\u4f9b\u7684",(0,s.jsx)(t.code,{children:"JavaScript"}),"\u5e93\u5c01\u88c5\u4e3a",(0,s.jsx)(t.code,{children:"Docusaurus"}),"\u652f\u6301\u7684",(0,s.jsx)(t.code,{children:"React"}),"\u7ec4\u4ef6."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["\u5b8c\u6210\u4e0a\u8ff0\u5b9e\u73b0\u540e, \u6211\u4eec\u5c31\u53ef\u4ee5\u5728",(0,s.jsx)(t.code,{children:"Markdown"}),"\u6587\u6863\u4e2d\u5f15\u5165",(0,s.jsx)(t.code,{children:"Asciinema"}),"\u52a8\u753b\u6587\u4ef6, \u5e76\u5c06\u5176\u6e32\u67d3\u5230\u9875\u9762\u4e2d."]}),"\n",(0,s.jsx)(t.p,{children:"\u4f8b\u5982\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-mdxjs",children:"import AsciinemaPlayer from '@site/src/components/asciinema/react';\n\n<AsciinemaPlayer src=\"/blog/2024-06-28-demo.cast\" />\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u8fd9\u6837, \u6700\u7ec8\u7684\u6e32\u67d3\u6548\u679c\u5e94\u8be5\u662f:",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(a,{src:"/blog/2024-06-28-demo.cast",theme:"docusaurus-classic-light",rows:"30",idleTimeLimit:"3",preload:"true"})}),"\n",(0,s.jsxs)(t.h3,{id:"\u6269\u5c55markdown\u89e3\u6790\u5668\u5e76\u5b9e\u73b0link\u8bed\u6cd5\u7684\u6e32\u67d3",children:["\u6269\u5c55",(0,s.jsx)(t.code,{children:"Markdown"}),"\u89e3\u6790\u5668\u5e76\u5b9e\u73b0",(0,s.jsx)(t.code,{children:"link"}),"\u8bed\u6cd5\u7684\u6e32\u67d3"]}),"\n",(0,s.jsxs)(t.p,{children:["\u5728\u4e0a\u4e00\u4e2a\u6b65\u9aa4\u4e2d, \u6700\u7ec8\u7684",(0,s.jsx)(t.code,{children:"Markdown"}),"\u6587\u4ef6\u4e2d\u9700\u8981\u7f16\u5199",(0,s.jsx)(t.code,{children:"JavaScript"}),"\u4ee3\u7801\u6765\u5b8c\u6210\u6e32\u67d3, \u4f46\u5bf9\u4e8e\u6587\u6863\u7f16\u5199\u8005\u6765\u8bf4\u4f1a\u9762\u4e34\u4ee5\u4e0b\u95ee\u9898:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u5982\u679c\u6587\u6863\u9879\u76ee\u7531\u591a\u4eba\u7f16\u5199, \u8bed\u6cd5\u95ee\u9898\u7684\u6982\u7387\u4f1a\u589e\u52a0."}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Markdown"}),"\u8fc1\u79fb\u96be\u5ea6\u52a0\u5927, \u56e0\u4e3a",(0,s.jsx)(t.code,{children:"JS"}),"\u4ee3\u7801\u53ea\u662f\u5b9e\u73b0\u67d0\u4e2a\u529f\u80fd\u7684\u4e00\u79cd\u65b9\u5f0f, \u800c\u4e0d\u5e94\u8be5\u5728",(0,s.jsx)(t.code,{children:"Markdown"}),"\u6587\u4ef6\u4e2d\u663e\u5f0f\u4f9d\u8d56\u89e3\u51b3\u65b9\u6848\u7a7a\u95f4\u7684\u7ec6\u8282."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["\u4e3a\u4e86\u89e3\u51b3\u4ee5\u4e0a\u95ee\u9898, \u6211\u4eec\u9700\u8981\u4f18\u5316\u4f7f\u7528\u65b9\u5f0f, \u964d\u4f4e\u4f7f\u7528\u8005\u7684\u96be\u5ea6, \u540c\u65f6\u5c4f\u853d\u5e95\u5c42\u7684\u7ec6\u8282. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(t.p,{children:["\u6700\u7ec8\u7684\u4f7f\u7528\u8005\u53ef\u80fd\u66f4\u5e0c\u671b\u5728",(0,s.jsx)(t.code,{children:"Markdown"}),"\u4e2d\u4f7f\u7528",(0,s.jsx)(t.code,{children:"link"}),"\u8bed\u6cd5\u6765\u5f15\u5165",(0,s.jsx)(t.code,{children:"Asciinema"}),"\u52a8\u753b\u6587\u4ef6, \u800c\u5728\u5e95\u5c42\u6211\u4eec\u9700\u8981\u901a\u8fc7",(0,s.jsx)(t.code,{children:"Docusaurus"}),"\n\u63d0\u4f9b\u7684\u529f\u80fd\u8fdb\u884c\u6269\u5c55\u6e32\u67d3."]}),"\n",(0,s.jsx)(t.p,{children:"\u4f8b\u5982, \u7528\u6237\u5728\u6587\u6863\u4e2d\u589e\u52a0\u5982\u4e0b\u5185\u5bb9:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-markdown",children:"[x](/blog/2024-06-28-demo.cast)\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u90a3\u4e48, \u6700\u7ec8\u7684\u6e32\u67d3\u6548\u679c\u5e94\u8be5\u662f:",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(a,{src:"/blog/2024-06-28-demo.cast",theme:"docusaurus-classic-light",rows:"30",idleTimeLimit:"3",preload:"true"})}),"\n",(0,s.jsxs)(t.p,{children:["\u4e0a\u8ff0\u5b9e\u73b0\u601d\u8def\u4e3b\u8981\u662f\u6269\u5c55",(0,s.jsx)(t.code,{children:"Docusaurus"}),"\u7684",(0,s.jsx)(t.code,{children:"Markdown"}),"\u89e3\u6790\u5668, \u5e76\u5bf9\u5176\u8fdb\u884c\u6269\u5c55, \u6700\u7ec8\u8f6c\u6362\u4e3a\u4e0a\u4e00\u4e2a\u6b65\u9aa4\u4e2d\u7684",(0,s.jsx)(t.code,{children:"React"}),"\u7ec4\u4ef6.",(0,s.jsx)("br",{}),"\n\u5728",(0,s.jsx)(t.code,{children:"Docusaurus"}),"\u4e2d, \u53ef\u4ee5\u901a\u8fc7\u6269\u5c55",(0,s.jsx)(t.code,{children:"remark"}),"\u548c",(0,s.jsx)(t.code,{children:"rehype"}),"\u6765\u5b9e\u73b0\u5bf9",(0,s.jsx)(t.code,{children:"Markdown"}),"\u8bed\u6cd5\u89e3\u6790\u7684\u6269\u5c55. ",(0,s.jsx)("br",{}),"\n\u8fd9\u79cd\u65b9\u6cd5\u5141\u8bb8\u6211\u4eec\u5728",(0,s.jsx)(t.code,{children:"Markdown"}),"\u89e3\u6790\u4e3a",(0,s.jsx)(t.code,{children:"AST"}),"\u540e\u8fdb\u884c\u4fee\u6539, \u4ece\u800c\u5b9e\u73b0\u5bf9",(0,s.jsx)(t.code,{children:"Markdown"}),"\u7684\u6269\u5c55\u529f\u80fd. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(t.p,{children:["\u8be6\u7ec6\u7684\u6587\u6863\u548c\u63d2\u4ef6\u5f00\u53d1\u4fe1\u606f, \u8bf7\u53c2\u8003",(0,s.jsx)(t.a,{href:"https://docusaurus.io/docs/Markdown-features/plugins",children:"MDX Plugins"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"\u529f\u80fd\u5b9e\u73b0",children:"\u529f\u80fd\u5b9e\u73b0"}),"\n",(0,s.jsxs)(t.h3,{id:"\u5c01\u88c5asciinema\u5e93\u4e3areact\u7ec4\u4ef6",children:["\u5c01\u88c5",(0,s.jsx)(t.code,{children:"Asciinema"}),"\u5e93\u4e3a",(0,s.jsx)(t.code,{children:"React"}),"\u7ec4\u4ef6"]}),"\n",(0,s.jsxs)(t.p,{children:["\u9996\u5148, \u5c06",(0,s.jsx)(t.code,{children:"Asciinema"}),"\u6dfb\u52a0\u5230\u9879\u76ee\u4e2d:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"yarn add asciinema-player\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u63a5\u4e0b\u6765, \u6211\u4eec\u9700\u8981\u5c01\u88c5\u6210",(0,s.jsx)(t.code,{children:"React"}),"\u7ec4\u4ef6."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="src/components/asciinema/react/index.js"',children:"\n// import 'asciinema-player/dist/bundle/asciinema-player.css';\nimport './asciinema-player.css'; // We hacked the CSS of the asciinema-player located at 'asciinema-player/dist/bundle/asciinema-player.css'.\n\nimport {FC, useEffect, useRef, useState} from 'react';\nimport {useColorMode} from '@docusaurus/theme-common';\n\ntype Props = {\n\tsrc: string;\n\tcols: string;\n\trows: string;\n\tautoPlay: boolean\n\tpreload: boolean;\n\tloop: boolean | number;\n\tstartAt: number | string;\n\tspeed: number;\n\tidleTimeLimit: number;\n\ttheme: string;\n\tposter: string;\n\tfit: string;\n\tfontSize: string;\n};\n\nconst AsciinemaPlayer: FC<Props> = ({src, ...rest}) => {\n\tconst [player, setPlayer] = useState<typeof import ('asciinema-player')>()\n\tuseEffect(() => {\n\t\timport(\"asciinema-player\").then(p => {setPlayer(p)})\n\t}, []) // executed once\n\n\tconst { colorMode } = useColorMode();\n\tconst ref = useRef<HTMLDivElement>(null);\n\n\tuseEffect(\n\t\t() => {\n\t\t\tconst currentRef = ref.current\n\n\t\t\tconst instance = player?.create(src, currentRef, {...rest, theme: colorMode === 'dark' ? 'docusaurus-classic-dark' : 'docusaurus-classic-light'});\n\n\t\t\treturn () => {\n\t\t\t\tinstance?.dispose()\n\t\t\t}\n\t\t}, [src, rest, colorMode, player] // executed every time the array items change\n\t);\n\n\treturn <div ref={ref}/>;\n};\n\nexport default AsciinemaPlayer;\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(70921).A+"",children:"src/components/asciinema/react/asciinema-player.css"})}),"\n",(0,s.jsxs)(t.p,{children:["\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d, \u6211\u4eec\u5c06",(0,s.jsx)(t.code,{children:"Asciinema"}),"\u7684",(0,s.jsx)(t.code,{children:"JavaScript"}),"\u5e93\u5c01\u88c5\u4e3a",(0,s.jsx)(t.code,{children:"React"}),"\u7ec4\u4ef6.",(0,s.jsx)("br",{}),"\n\u5229\u7528",(0,s.jsx)(t.code,{children:"React"}),"\u63d0\u4f9b\u7684",(0,s.jsx)(t.code,{children:"Ref"}),"\u529f\u80fd, \u5c06",(0,s.jsx)(t.code,{children:"Asciinema"}),"\u64cd\u4f5c\u7684",(0,s.jsx)(t.code,{children:"DOM"}),"\u7ec4\u4ef6\u4e0e",(0,s.jsx)(t.code,{children:"React"}),"\u7ec4\u4ef6\u5173\u8054\u8d77\u6765, \u4ee5\u786e\u4fdd",(0,s.jsx)(t.code,{children:"React"}),"\u80fd\u591f\u96c6\u6210\u8be5\u7ec4\u4ef6. ",(0,s.jsx)("br",{}),"\n\u4e3a\u4e86\u907f\u514d\u91cd\u590d\u6e32\u67d3, \u9700\u8981\u786e\u4fdd\u7ec4\u4ef6\u5728\u9002\u5f53\u7684\u65f6\u5019\u88ab",(0,s.jsx)(t.code,{children:"dispose"}),".",(0,s.jsx)("br",{}),"\n\u4e3a\u4e86\u9002\u914d",(0,s.jsx)(t.code,{children:"Docusaurus"}),"\u7684\u4e3b\u9898, \u6211\u4eec\u9700\u8981\u5f15\u5165\u81ea\u5b9a\u4e49\u7684",(0,s.jsx)(t.code,{children:"CSS"}),"\u6837\u5f0f. \u5728",(0,s.jsx)(t.code,{children:"Asciinema"}),"\u63d0\u4f9b\u7684\u57fa\u7840\u6837\u5f0f\u4e0a, \u6dfb\u52a0\u5bf9",(0,s.jsx)(t.code,{children:"Docusaurus"}),"\u4e3b\u9898\u7684\u652f\u6301."]}),"\n",(0,s.jsxs)(t.h3,{id:"\u81ea\u5b9a\u4e49markdown\u8bed\u6cd5\u6811\u89e3\u6790",children:["\u81ea\u5b9a\u4e49",(0,s.jsx)(t.code,{children:"Markdown"}),"\u8bed\u6cd5\u6811\u89e3\u6790"]}),"\n",(0,s.jsx)(t.p,{children:"\u9996\u5148, \u6211\u4eec\u9700\u8981\u5c06\u4e0b\u9762\u7684\u4f9d\u8d56\u5b89\u88c5\u5230\u9879\u76ee\u4e2d:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"yarn add rehype-katex remark-math\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u8fd9\u4e24\u4e2a\u5e93\u7528\u4e8e\u89e3\u6790",(0,s.jsx)(t.code,{children:"Markdown"}),"\u8bed\u6cd5\u6811, \u5e76\u5bf9\u8bed\u6cd5\u6811\u5185\u5bb9\u8fdb\u884c\u4fee\u6539, \u4ee5\u5b9e\u73b0\u6211\u4eec\u7684\u76ee\u7684.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(t.p,{children:"\u73b0\u5728\u53ef\u4ee5\u5f00\u59cb\u7f16\u5199\u4e0b\u9762\u7684\u4ee3\u7801\u6765\u5b9e\u73b0"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="src/components/asciinema/Markdown/Markdown.ts"',children:"import {visit} from 'unist-util-visit';\n\nconst plugin = (options) => {\n\tconst transformer = async (tree) => {\n\t\tlet importInserted = false;\n\n\t\tvisit(tree, 'link', (node, index, parent) => {\n\t\t\tif (!node.url.endsWith(\".cast\")) {\n\t\t\t\treturn\n\t\t\t}\n\n\t\t\tif (!importInserted) {\n\t\t\t\tconst importNode = {\n\t\t\t\t\ttype: 'mdxjsEsm',\n\t\t\t\t\tvalue: `import AsciinemaPlayer from '@site/src/components/asciinema/react';`,\n\t\t\t\t\tdata: {\n\t\t\t\t\t\testree: {\n\t\t\t\t\t\t\ttype: 'Program',\n\t\t\t\t\t\t\tbody: [\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\ttype: 'ImportDeclaration',\n\t\t\t\t\t\t\t\t\tspecifiers: [\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\ttype: 'ImportDefaultSpecifier',\n\t\t\t\t\t\t\t\t\t\t\tlocal: {type: 'Identifier', name: 'AsciinemaPlayer'}\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\t\t\tsource: {type: 'Literal', value: '@site/src/components/asciinema/react'}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t};\n\n\t\t\t\ttree.children.unshift(importNode);\n\t\t\t\timportInserted = true;\n\t\t\t}\n\n\t\t\tconst jsxNode = {\n\t\t\t\ttype: 'mdxJsxFlowElement',\n\t\t\t\tname: 'AsciinemaPlayer',\n\t\t\t\tattributes: [\n\t\t\t\t\t{type: 'mdxJsxAttribute', name: 'src', value: node.url},\n\t\t\t\t\t{type: 'mdxJsxAttribute', name: 'theme', value: 'docusaurus-classic-light'},\n\t\t\t\t\t{type: 'mdxJsxAttribute', name: 'rows', value: 30},\n\t\t\t\t\t{type: 'mdxJsxAttribute', name: 'idleTimeLimit', value: 3},\n\t\t\t\t\t{type: 'mdxJsxAttribute', name: 'preload', value: true}\n\t\t\t\t],\n\t\t\t\tchildren: []\n\t\t\t};\n\n\t\t\tparent.children.splice(index, 1, jsxNode);\n\t\t});\n\t};\n\treturn transformer;\n};\n\nexport default plugin;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d, \u6211\u4eec\u5bf9",(0,s.jsx)(t.code,{children:"link"}),"\u8fdb\u884c\u4e86\u4fee\u6539, \u5e76\u5c06\u5176\u8f6c\u6362\u4e3a",(0,s.jsx)(t.code,{children:"JSX"}),"\u8bed\u6cd5, \u8fd9\u6837\u53ef\u4ee5\u5728",(0,s.jsx)(t.code,{children:"Markdown"}),"\u4e2d\u76f4\u63a5\u4f7f\u7528",(0,s.jsx)(t.code,{children:"Asciinema"}),"\u7ec4\u4ef6.\n\u9664\u4e86\u4e0a\u8ff0\u4ee3\u7801, \u6211\u4eec\u8fd8\u9700\u8981\u5728",(0,s.jsx)(t.code,{children:"Docusaurus"}),"\u4e2d\u8fdb\u884c\u914d\u7f6e\u4ee5\u8fdb\u884c\u529f\u80fd\u96c6\u6210.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(t.p,{children:["\u53c2\u8003\u4ee5\u4e0b\u914d\u7f6e\u6765\u914d\u7f6e",(0,s.jsx)(t.code,{children:"Docusaurus"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="docusaurus.config.js"',children:"import rehypeKatex from 'rehype-katex';\nimport asciinema from './src/components/asciinema/Markdown/Markdown';\n\nexport default {\n\tpresets: [\n\t\t[\n\t\t\t'@docusaurus/preset-classic',\n\t\t\t{\n\t\t\t\tdocs: {\n\t\t\t\t\tpath: 'docs',\n\t\t\t\t\tbeforeDefaultRemarkPlugins: [asciinema],\n\t\t\t\t\trehypePlugins: [rehypeKatex],\n\t\t\t\t},\n\t\t\t\tblog: {\n\t\t\t\t\tbeforeDefaultRemarkPlugins: [asciinema],\n\t\t\t\t\trehypePlugins: [rehypeKatex],\n\t\t\t\t}\n\t\t\t},\n\t\t],\n\t],\n};\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u4e0a\u8ff0\u914d\u7f6e\u5bf9",(0,s.jsx)(t.code,{children:"Docusaurus"}),"\u4e2d\u7684",(0,s.jsx)(t.code,{children:"Docs"}),"\u548c",(0,s.jsx)(t.code,{children:"Blog"}),"\u8fdb\u884c\u4e86\u914d\u7f6e, \u5e76\u5b9e\u73b0\u4e86",(0,s.jsx)(t.code,{children:"Markdown"}),"\u4e2d\u7684",(0,s.jsx)(t.code,{children:"Asciinema"}),"\u7ec4\u4ef6\u7684\u89e3\u6790.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(t.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u4e00\u70b9\u662f, \u6211\u4eec\u4f7f\u7528",(0,s.jsx)(t.code,{children:"beforeDefaultRemarkPlugins"}),"\u800c\u4e0d\u662f",(0,s.jsx)(t.code,{children:"remarkPlugins"}),"\u8fdb\u884c\u914d\u7f6e\u7684\u4e3b\u8981\u539f\u56e0\u662f, ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.code,{children:"Docusaurus"}),"\u4f1a\u5bf9",(0,s.jsx)(t.code,{children:"Markdown"}),"\u8bed\u6cd5\u6811\u8fdb\u884c\u4fee\u6539, \u56e0\u6b64\u6211\u4eec\u9700\u8981\u5728\u5176\u4fee\u6539\u4e4b\u524d\u8fdb\u884c\u914d\u7f6e, \u4ee5\u786e\u4fdd\u6700\u7ec8\u7684\u7ed3\u679c\u6b63\u786e.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(t.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://mdxjs.com/",children:"MDX"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docusaurus.io/docs/Markdown-features/plugins",children:"MDX Plugins"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/remarkjs/remark",children:"remark"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/syntax-tree/mdast",children:"mdast"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/syntax-tree/mdast-util-mdx-jsx",children:"mdast-util-mdx-jsx"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/syntax-tree/mdast-util-mdxjs-esm?tab=readme-ov-file#mdxjsesm",children:"mdast-util-mdxjs-esm"})}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},70921:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/files/2024-06-28-asciinema-player-31d6cfe0d16ae931b73c59d7e0c089c0.css"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(96540);const r={},c=s.createContext(r);function i(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);