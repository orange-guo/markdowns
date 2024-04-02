"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[6606],{56365:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=a(85893),o=a(11151);const r={authors:["xiangcheng.kuo"],tags:["clojure","kotlin","java","spring","validation"]},i="\u57fa\u4e8eclojure\u8868\u8fbe\u5f0f\u5b9e\u73b0\u66f4\u52a0\u7075\u6d3b\u7684\u6570\u636e\u9a8c\u8bc1",l={permalink:"/blog/2023/03/02/clojure-validation",source:"@site/blog/2023-03-02/clojure-validation.md",title:"\u57fa\u4e8eclojure\u8868\u8fbe\u5f0f\u5b9e\u73b0\u66f4\u52a0\u7075\u6d3b\u7684\u6570\u636e\u9a8c\u8bc1",description:"\u6570\u636e\u9a8c\u8bc1\u662f\u4e00\u4e2a\u975e\u5e38\u5e38\u89c1\u7684\u9700\u6c42, \u5bf9\u4e8ejava\u9879\u76ee\u6765\u8bf4, \u76ee\u524djakarta\u7684bean validation\u5df2\u7ecf\u6210\u4e3a\u4e86java\u4e2d\u7684\u6807\u51c6.",date:"2023-03-02T00:00:00.000Z",tags:[{label:"clojure",permalink:"/blog/tags/clojure"},{label:"kotlin",permalink:"/blog/tags/kotlin"},{label:"java",permalink:"/blog/tags/java"},{label:"spring",permalink:"/blog/tags/spring"},{label:"validation",permalink:"/blog/tags/validation"}],readingTime:15.07,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["clojure","kotlin","java","spring","validation"]},unlisted:!1,prevItem:{title:"\u811a\u672c\u4e2d\u5b9e\u73b0\u4fee\u6539\u7528\u6237\u5bc6\u7801",permalink:"/blog/2023/03/03/passwd-in-script"},nextItem:{title:"ubuntu\u4e2d\u5e38\u7528\u7684apt\u6e90",permalink:"/blog/2023/02/26/apt-mirror"}},s={authorsImageUrls:[void 0]},c=[];function u(e){const n={code:"code",p:"p",...(0,o.a)(),...e.components};return(0,t.jsxs)(n.p,{children:["\u6570\u636e\u9a8c\u8bc1\u662f\u4e00\u4e2a\u975e\u5e38\u5e38\u89c1\u7684\u9700\u6c42, \u5bf9\u4e8e",(0,t.jsx)(n.code,{children:"java"}),"\u9879\u76ee\u6765\u8bf4, \u76ee\u524d",(0,t.jsx)(n.code,{children:"jakarta"}),"\u7684",(0,t.jsx)(n.code,{children:"bean validation"}),"\u5df2\u7ecf\u6210\u4e3a\u4e86java\u4e2d\u7684\u6807\u51c6. ",(0,t.jsx)("br",{}),"\n\u5176\u81ea\u5e26\u4e86\u4e00\u4e9b\u5e38\u89c1\u7684\u6570\u636e\u9a8c\u8bc1\u6ce8\u89e3, \u4f8b\u5982",(0,t.jsx)(n.code,{children:"@NotNull"}),", ",(0,t.jsx)(n.code,{children:"@NotEmpty"}),", ",(0,t.jsx)(n.code,{children:"@Size"}),"\u7b49.",(0,t.jsx)("br",{}),"\n\u8fd9\u4e9b\u6ce8\u89e3\u5982\u679c\u9047\u5230\u590d\u6742\u7684\u6570\u636e\u9a8c\u8bc1\u9700\u6c42\u65f6, \u5c31\u4f1a\u663e\u5f97\u529b\u4e0d\u4ece\u5fc3. \u6240\u4ee5\u9700\u8981\u4e00\u79cd\u66f4\u52a0\u7075\u6d3b\u7684\u6570\u636e\u9a8c\u8bc1\u65b9\u5f0f.",(0,t.jsx)("br",{}),"\n\u4e3a\u4e86\u6ee1\u8db3\u8fd9\u79cd\u9700\u6c42, \u6211\u4eec\u53ef\u4ee5\u901a\u8fc7",(0,t.jsx)(n.code,{children:"clojure"}),"\u8868\u8fbe\u5f0f\u6765\u5b9e\u73b0\u6570\u636e\u9a8c\u8bc1.",(0,t.jsx)("br",{}),"\n\u540c\u65f6\u6211\u4eec\u9700\u8981\u548c\u73b0\u6709\u7684",(0,t.jsx)(n.code,{children:"bean validation"}),"\u4e00\u8d77\u4f7f\u7528, \u4ee5\u4fbf\u4e8e\u6ee1\u8db3\u73b0\u6709\u7684\u4e1a\u52a1\u9700\u6c42.",(0,t.jsx)("br",{})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>i});var t=a(67294);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);