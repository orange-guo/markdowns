"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[5643],{21651:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var t=o(85893),s=o(11151);const c={authors:["xiangcheng.kuo"],tags:["problem-solving","umount","fuse"]},r="transport endpoint is not connected\u95ee\u9898\u89e3\u51b3",d={permalink:"/blog/2023/03/23/transport-endpoint-is-not-connected",source:"@site/blog/2023-03-23/transport-endpoint-is-not-connected.md",title:"transport endpoint is not connected\u95ee\u9898\u89e3\u51b3",description:"\u5728\u5347\u7ea7\u6267\u884c\u8fc7\u7a0b\u4e2d\u9047\u5230\u95ee\u9898, \u5347\u7ea7\u6267\u884c\u8fc7\u7a0b\u4f1adown\u8001\u7684\u73af\u5883\u5e76setup\u65b0\u7684\u73af\u5883",date:"2023-03-23T00:00:00.000Z",tags:[{label:"problem-solving",permalink:"/blog/tags/problem-solving"},{label:"umount",permalink:"/blog/tags/umount"},{label:"fuse",permalink:"/blog/tags/fuse"}],readingTime:1.725,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","umount","fuse"]},unlisted:!1,prevItem:{title:"\u901a\u8fc7\u4f7f\u7528evans\u6765\u66f4\u52a0\u4fbf\u6377\u5730\u8c03\u8bd5grpc\u670d\u52a1",permalink:"/blog/2023/03/25/evans"},nextItem:{title:"TestContainers\u56fa\u5b9a\u5bb9\u5668\u7aef\u53e3",permalink:"/blog/2023/03/16/testcontainers-fixed-port"}},i={authorsImageUrls:[void 0]},l=[{value:"\u539f\u56e0",id:"\u539f\u56e0",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2}];function a(e){const n={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u5728\u5347\u7ea7\u6267\u884c\u8fc7\u7a0b\u4e2d\u9047\u5230\u95ee\u9898, \u5347\u7ea7\u6267\u884c\u8fc7\u7a0b\u4f1a",(0,t.jsx)(n.code,{children:"down"}),"\u8001\u7684\u73af\u5883\u5e76",(0,t.jsx)(n.code,{children:"setup"}),"\u65b0\u7684\u73af\u5883",(0,t.jsx)("br",{}),"\n\u5728",(0,t.jsx)(n.code,{children:"ymir setup"}),"\u8fc7\u7a0b\u4e2d\u51fa\u73b0",(0,t.jsx)(n.code,{children:"transport endpoint is not connected"}),", \u8be5\u95ee\u9898\u5bfc\u81f4\u5347\u7ea7\u5931\u8d25",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(n.h2,{id:"\u539f\u56e0",children:"\u539f\u56e0"}),"\n",(0,t.jsxs)(n.p,{children:["\u65e7\u73af\u5883\u6267\u884c",(0,t.jsx)(n.code,{children:"ymir down"}),"\u7684\u65f6\u5019\u6ca1\u6709\u6210\u529f",(0,t.jsx)(n.code,{children:"detach"}),"\u6389\u76f8\u5173\u6302\u8f7d",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(n.p,{children:["\u76ee\u524d",(0,t.jsx)(n.code,{children:"detach"}),"\u6302\u8f7d\u7684\u884c\u4e3a\u662f\u5728",(0,t.jsx)(n.code,{children:"fastone-rclone"}),"\u5bb9\u5668\u4e2d\u8d1f\u8d23\u7684, \u5176\u6267\u884c\u539f\u7406\u662f\u5f53\u8fdb\u7a0b\u6536\u5230",(0,t.jsx)(n.code,{children:"sigkill"}),"\u4fe1\u53f7(\u8be5\u4fe1\u53f7\u7531",(0,t.jsx)(n.code,{children:"ymir down"}),"\u89e6\u53d1)\n\u65f6\u8fdb\u884c\u8c03\u7528",(0,t.jsx)(n.code,{children:"fusermount -u /fastone-mnt"}),"\u547d\u4ee4\u6765\u8fdb\u884c",(0,t.jsx)(n.code,{children:"detach"}),", \u6b64detach\u884c\u4e3a\u6ca1\u6267\u884c\u6210\u529f\u76ee\u524d\u63a8\u6d4b\u6709\u4ee5\u4e0b\u51e0\u79cd\u53ef\u80fd"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u8d85\u51fa\u4e86",(0,t.jsx)(n.code,{children:"ymir down"}),"\u6700\u5927\u5bb9\u5fcd\u65f6\u95f4(",(0,t.jsx)(n.code,{children:"ymir down"}),"\u5e95\u5c42\u8c03\u7528",(0,t.jsx)(n.code,{children:"docker-compose"}),"\u6765\u505c\u6b62\u670d\u52a1\u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4\u662f10s)"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5728",(0,t.jsx)(n.code,{children:"fastone-rclone"}),"\u5bb9\u5668\u6536\u5230",(0,t.jsx)(n.code,{children:"sigkill"}),"\u4fe1\u53f7\u5e76\u6267\u884c",(0,t.jsx)(n.code,{children:"detach"}),"\u65f6\u7531\u4e8e\u8be5",(0,t.jsx)(n.code,{children:"devide"}),"\u4e0b\u7684",(0,t.jsx)(n.code,{children:"fd"}),"\u88ab\u76f8\u5173\u8fdb\u7a0b\u5360\u7528\u5bfc\u81f4\u65e0\u6cd5",(0,t.jsx)(n.code,{children:"detach"}),"\n",(0,t.jsx)("br",{}),"(\u5982\u679c\u5728\u5378\u8f7d\u8bbe\u5907\u6216\u6587\u4ef6\u7cfb\u7edf\u65f6, \u4ecd\u7136\u6709\u8fdb\u7a0b\u4f7f\u7528\u76f8\u5173\u6587\u4ef6\u53e5\u67c4, \u90a3\u4e48\u5378\u8f7d\u64cd\u4f5c\u901a\u5e38\u4f1a\u5931\u8d25. \u8fd9\u662f\u56e0\u4e3a",(0,t.jsx)(n.code,{children:"linux"}),"\u5185\u6838\u4f1a\u68c0\u6d4b\u5230\u6709\u8fdb\u7a0b\u4ecd\u7136\u5728\u4f7f\u7528\u6587\u4ef6\u53e5\u67c4, \u56e0\u6b64\u65e0\u6cd5\u5378\u8f7d\u8bbe\u5907\u6216\u6587\u4ef6\u7cfb\u7edf.)"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ymir down"}),"\u7684\u8d85\u65f6\u65f6\u95f4\u53ef\u914d\u7f6e\u786e\u4fdd\u670d\u52a1\u80fd\u591f\u90fd\u6b63\u5e38\u6e05\u7406\u5e76\u6210\u529f\u9000\u51fa"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"fastone-rclone"}),"\u670d\u52a1",(0,t.jsx)(n.code,{children:"detach"}),"\u6302\u8f7d\u65f6\u9700\u8981\u5f3a\u5236",(0,t.jsx)(n.code,{children:"detach"}),", \u8003\u8651\u91c7\u7528",(0,t.jsx)(n.code,{children:"umount -l"}),"\u6765\u5b9e\u73b0\u8be5\u529f\u80fd"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>d,a:()=>r});var t=o(67294);const s={},c=t.createContext(s);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);