"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[35088],{44145:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var r=o(74848),s=o(28453);const t={authors:["orange"],tags:["problem-solving","nodejs","openssl","compatibility","jetbrains","code2art","open-radiant"]},a="node.js v17\u53ca\u4ee5\u4e0a\u7248\u672c\u4f7f\u7528openssl v3.0\u5f15\u53d1\u7684\u54c8\u5e0c\u7b97\u6cd5\u9519\u8bef\u53ca\u5176\u89e3\u51b3\u65b9\u6cd5",l={permalink:"/zh-CN/blog/2023/03/30/fix-node-v17-upwards-openssl-hash-error",source:"@site/blog/2023-03-30-fix-node-v17-upwards-openssl-hash-error.md",title:"node.js v17\u53ca\u4ee5\u4e0a\u7248\u672c\u4f7f\u7528openssl v3.0\u5f15\u53d1\u7684\u54c8\u5e0c\u7b97\u6cd5\u9519\u8bef\u53ca\u5176\u89e3\u51b3\u65b9\u6cd5",description:"\u6700\u8fd1\u5728\u672c\u5730\u6784\u5efaopen-radiant\u9879\u76ee.",date:"2023-03-30T00:00:00.000Z",tags:[{inline:!0,label:"problem-solving",permalink:"/zh-CN/blog/tags/problem-solving"},{inline:!0,label:"nodejs",permalink:"/zh-CN/blog/tags/nodejs"},{inline:!0,label:"openssl",permalink:"/zh-CN/blog/tags/openssl"},{inline:!0,label:"compatibility",permalink:"/zh-CN/blog/tags/compatibility"},{inline:!0,label:"jetbrains",permalink:"/zh-CN/blog/tags/jetbrains"},{inline:!0,label:"code2art",permalink:"/zh-CN/blog/tags/code-2-art"},{inline:!0,label:"open-radiant",permalink:"/zh-CN/blog/tags/open-radiant"}],readingTime:2.145,hasTruncateMarker:!1,authors:[{name:"orange",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"orange"}],frontMatter:{authors:["orange"],tags:["problem-solving","nodejs","openssl","compatibility","jetbrains","code2art","open-radiant"]},unlisted:!1,prevItem:{title:"\u89e3\u51b3elm\u4f9d\u8d56\u4e0b\u8f7d\u5931\u8d25\u7684\u95ee\u9898",permalink:"/zh-CN/blog/2023/03/30/fix-elm-package-download-failed"},nextItem:{title:"\u901a\u8fc7\u5ef6\u957folcIdleTimeout\u4ee5\u51cf\u5c11nslcd\u4e2d\u7684Can't contact LDAP server\u65e5\u5fd7\u62a5\u9519",permalink:"/zh-CN/blog/2023/03/28/ldap-idle-timeout"}},i={authorsImageUrls:[void 0]},d=[{value:"\u95ee\u9898\u539f\u56e0",id:"\u95ee\u9898\u539f\u56e0",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u6700\u8fd1\u5728\u672c\u5730\u6784\u5efa",(0,r.jsx)(n.a,{href:"https://github.com/JetBrains/open-radiant",children:"open-radiant"}),"\u9879\u76ee.",(0,r.jsx)("br",{}),"\n\u8be5\u9879\u76ee\u662f",(0,r.jsx)(n.code,{children:"JetBrains"}),"\u5f00\u6e90\u7684\u4e00\u4e2a\u9879\u76ee, \u7528\u4e8e\u751f\u6210AI\u827a\u672f\u56fe\u7247, \u5728\u7ebf\u6f14\u793a\u5730\u5740\u4e3a: ",(0,r.jsx)(n.a,{href:"https://code2art.jetbrains.com/",children:"code2art"}),(0,r.jsx)("br",{}),"\n\u5728\u6784\u5efa\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u4e86\u4e00\u4e9b\u95ee\u9898.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4e2d\u7684\u4e00\u4e2a\u95ee\u9898\u662f\u5f53\u6267\u884c",(0,r.jsx)(n.code,{children:"npm start"}),"\u65f6\u62a5\u9519, \u76f8\u5173\u9519\u8bef\u4fe1\u606f\u5982\u4e0b:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n> jb-animation-generator@1.0.0 start\n> ./node_modules/.bin/webpack-dev-server --mode=development\n\n\u2139 \uff62wds\uff63: Project is running at http://localhost:8080/\n\u2139 \uff62wds\uff63: webpack output is served from /\n\u2139 \uff62wds\uff63: Content not from webpack is served from /home/orange/Documents/Project/Github/open-radiant\nnode:internal/crypto/hash:71\n  this[kHandle] = new _Hash(algorithm, xofLen);\n                  ^\n\nError: error:0308010C:digital envelope routines::unsupported\n    at new Hash (node:internal/crypto/hash:71:19)\n    at Object.createHash (node:crypto:133:10)\n    at module.exports (/home/orange/Documents/Project/Github/open-radiant/node_modules/webpack/lib/util/createHash.js:135:53)\n    at NormalModule._initBuildHash (/home/orange/Documents/Project/Github/open-radiant/node_modules/webpack/lib/NormalModule.js:417:16)\n    at handleParseError (/home/orange/Documents/Project/Github/open-radiant/node_modules/webpack/lib/NormalModule.js:471:10)\n    at /home/orange/Documents/Project/Github/open-radiant/node_modules/webpack/lib/NormalModule.js:503:5\n    at /home/orange/Documents/Project/Github/open-radiant/node_modules/webpack/lib/NormalModule.js:358:12\n    at /home/orange/Documents/Project/Github/open-radiant/node_modules/loader-runner/lib/LoaderRunner.js:373:3\n    at iterateNormalLoaders (/home/orange/Documents/Project/Github/open-radiant/node_modules/loader-runner/lib/LoaderRunner.js:214:10)\n    at Array.<anonymous> (/home/orange/Documents/Project/Github/open-radiant/node_modules/loader-runner/lib/LoaderRunner.js:205:4) {\n  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],\n  library: 'digital envelope routines',\n  reason: 'unsupported',\n  code: 'ERR_OSSL_EVP_UNSUPPORTED'\n}\n\nNode.js v18.12.1\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u95ee\u9898\u539f\u56e0",children:"\u95ee\u9898\u539f\u56e0"}),"\n",(0,r.jsxs)(n.p,{children:["\u7ecf\u8fc7\u7f51\u4e0a\u7684\u4e00\u756a\u641c\u7d22, \u53d1\u73b0\u8fd9\u4e2a\u95ee\u9898\u662f\u7531\u4e8e",(0,r.jsx)(n.code,{children:"node.js"}),"\u7684\u7248\u672c\u5347\u7ea7\u5230",(0,r.jsx)(n.code,{children:"v17"}),"\u53ca\u4ee5\u4e0a\u7248\u672c, \u800c",(0,r.jsx)(n.code,{children:"openssl"}),"\u7684\u7248\u672c\u5347\u7ea7\u5230",(0,r.jsx)(n.code,{children:"v3.0"}),"\u5f15\u8d77\u7684.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"openssl"}),"\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5b89\u5168\u5957\u63a5\u5b57\u5c42\u5bc6\u7801\u5e93, \u7528\u4e8e\u63d0\u4f9b\u52a0\u5bc6\u548c\u8ba4\u8bc1\u670d\u52a1.",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.code,{children:"node.js"}),"\u5728",(0,r.jsx)(n.code,{children:"v17"}),"\u53ca\u4ee5\u4e0a\u7248\u672c\u4e2d\u4f7f\u7528\u4e86",(0,r.jsx)(n.code,{children:"openssl"}),"\u7684",(0,r.jsx)(n.code,{children:"v3.0"}),"\u7248\u672c, \u8be5\u7248\u672c\u4e2d\u79fb\u9664\u4e86\u4e00\u4e9b\u54c8\u5e0c\u7b97\u6cd5, \u5bfc\u81f4\u5728\u4f7f\u7528\u8fd9\u4e9b\u7b97\u6cd5\u65f6\u62a5\u9519.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(n.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u4e2a\u95ee\u9898\u7684\u89e3\u51b3\u89e3\u51b3\u65b9\u6848\u6709\u4ee5\u4e0b\u51e0\u79cd:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u964d\u4f4e",(0,r.jsx)(n.code,{children:"node.js"}),"\u7684\u7248\u672c\u5230v16\u53ca\u4ee5\u4e0b\u7248\u672c"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"npm start"}),"\u4e4b\u524d\u5148\u6267\u884c",(0,r.jsx)(n.code,{children:"export NODE_OPTIONS=--openssl-legacy-provider"}),"\n",(0,r.jsx)("br",{}),"\u901a\u8fc7\u8be5\u73af\u5883\u53d8\u91cf\u53ef\u4ee5\u542f\u7528",(0,r.jsx)(n.code,{children:"openssl"}),"\u7684",(0,r.jsx)(n.code,{children:"legacy provider"}),"\uff0c\u652f\u6301\u4e00\u4e9b\u65e7\u7684\u54c8\u5e0c\u7b97\u6cd5.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(n.li,{children:["\u5347\u7ea7\u76f8\u5173\u4f9d\u8d56\u5305\u5230\u6700\u65b0\u7248\u672c\uff0c\u53ef\u80fd\u4f1a\u4fee\u590d\u8fd9\u4e2a\u95ee\u9898.",(0,r.jsx)("br",{})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u8003\u8d44\u6599",children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported",children:"Stack Overflow\u4e0a\u5173\u4e8e\u8fd9\u4e2a\u95ee\u9898\u7684\u8ba8\u8bba"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://nodejs.org/api/crypto.html#crypto_openssl_3_0",children:"Node.js\u5b98\u65b9\u6587\u6863\u4e2d\u5173\u4e8eOpenSSL 3.0\u7684\u8bf4\u660e"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/nodejs/help/issues/4021",children:"GitHub\u4e0a\u5173\u4e8e\u8fd9\u4e2a\u95ee\u9898\u7684\u62a5\u544a"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>l});var r=o(96540);const s={},t=r.createContext(s);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);