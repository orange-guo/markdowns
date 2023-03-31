"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[7794],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>b});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(t),c=o,b=m["".concat(s,".").concat(c)]||m[c]||u[c]||a;return t?r.createElement(b,l(l({ref:n},d),{},{components:t})):r.createElement(b,l({ref:n},d))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1105:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={authors:["xiangcheng.kuo"],tags:["problem-solving","nodejs","openssl","compatibility","jetbrains","code2art","open-radiant"]},l="node.js v17\u53ca\u4ee5\u4e0a\u7248\u672c\u4f7f\u7528openssl v3.0\u5f15\u53d1\u7684\u54c8\u5e0c\u7b97\u6cd5\u9519\u8bef\u53ca\u5176\u89e3\u51b3\u65b9\u6cd5",i={permalink:"/markdowns/blog/2023/03/30/fix-node-v17-upwards-openssl-hash-error",source:"@site/blog/2023-03-30/fix-node-v17-upwards-openssl-hash-error.md",title:"node.js v17\u53ca\u4ee5\u4e0a\u7248\u672c\u4f7f\u7528openssl v3.0\u5f15\u53d1\u7684\u54c8\u5e0c\u7b97\u6cd5\u9519\u8bef\u53ca\u5176\u89e3\u51b3\u65b9\u6cd5",description:"\u6700\u8fd1\u5728\u672c\u5730\u6784\u5efaopen-radiant\u9879\u76ee.",date:"2023-03-30T00:00:00.000Z",formattedDate:"March 30, 2023",tags:[{label:"problem-solving",permalink:"/markdowns/blog/tags/problem-solving"},{label:"nodejs",permalink:"/markdowns/blog/tags/nodejs"},{label:"openssl",permalink:"/markdowns/blog/tags/openssl"},{label:"compatibility",permalink:"/markdowns/blog/tags/compatibility"},{label:"jetbrains",permalink:"/markdowns/blog/tags/jetbrains"},{label:"code2art",permalink:"/markdowns/blog/tags/code-2-art"},{label:"open-radiant",permalink:"/markdowns/blog/tags/open-radiant"}],readingTime:2.145,hasTruncateMarker:!1,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","nodejs","openssl","compatibility","jetbrains","code2art","open-radiant"]},prevItem:{title:"\u901a\u8fc7\u624b\u52a8\u4e0b\u8f7d\u5e76\u5b89\u88c5elm\u4f9d\u8d56\u89e3\u51b3\u6267\u884celm make\u65f6\u4f9d\u8d56\u4e0b\u8f7d\u5931\u8d25\u95ee\u9898",permalink:"/markdowns/blog/2023/03/30/fix-elm-package-download-failed"},nextItem:{title:"\u5ef6\u957folcIdleTimeout\u4ee5\u51cf\u5c11nslcd\u4e2d\u7684Can't contact LDAP server\u65e5\u5fd7\u62a5\u9519",permalink:"/markdowns/blog/2023/03/28/ldap-idle-timeout"}},s={authorsImageUrls:[void 0]},p=[{value:"\u95ee\u9898\u539f\u56e0",id:"\u95ee\u9898\u539f\u56e0",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],d={toc:p};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6700\u8fd1\u5728\u672c\u5730\u6784\u5efa",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JetBrains/open-radiant"},"open-radiant"),"\u9879\u76ee.",(0,o.kt)("br",null),"\n\u8be5\u9879\u76ee\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"JetBrains"),"\u5f00\u6e90\u7684\u4e00\u4e2a\u9879\u76ee, \u7528\u4e8e\u751f\u6210AI\u827a\u672f\u56fe\u7247, \u5728\u7ebf\u6f14\u793a\u5730\u5740\u4e3a: ",(0,o.kt)("a",{parentName:"p",href:"https://code2art.jetbrains.com/"},"code2art"),(0,o.kt)("br",null),"\n\u5728\u6784\u5efa\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u4e86\u4e00\u4e9b\u95ee\u9898.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"\u5176\u4e2d\u7684\u4e00\u4e2a\u95ee\u9898\u662f\u5f53\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"npm start"),"\u65f6\u62a5\u9519, \u76f8\u5173\u9519\u8bef\u4fe1\u606f\u5982\u4e0b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n> jb-animation-generator@1.0.0 start\n> ./node_modules/.bin/webpack-dev-server --mode=development\n\n\u2139 \uff62wds\uff63: Project is running at http://localhost:8080/\n\u2139 \uff62wds\uff63: webpack output is served from /\n\u2139 \uff62wds\uff63: Content not from webpack is served from /home/orange/Documents/Project/Github/open-radiant\nnode:internal/crypto/hash:71\n  this[kHandle] = new _Hash(algorithm, xofLen);\n                  ^\n\nError: error:0308010C:digital envelope routines::unsupported\n    at new Hash (node:internal/crypto/hash:71:19)\n    at Object.createHash (node:crypto:133:10)\n    at module.exports (/home/orange/Documents/Project/Github/open-radiant/node_modules/webpack/lib/util/createHash.js:135:53)\n    at NormalModule._initBuildHash (/home/orange/Documents/Project/Github/open-radiant/node_modules/webpack/lib/NormalModule.js:417:16)\n    at handleParseError (/home/orange/Documents/Project/Github/open-radiant/node_modules/webpack/lib/NormalModule.js:471:10)\n    at /home/orange/Documents/Project/Github/open-radiant/node_modules/webpack/lib/NormalModule.js:503:5\n    at /home/orange/Documents/Project/Github/open-radiant/node_modules/webpack/lib/NormalModule.js:358:12\n    at /home/orange/Documents/Project/Github/open-radiant/node_modules/loader-runner/lib/LoaderRunner.js:373:3\n    at iterateNormalLoaders (/home/orange/Documents/Project/Github/open-radiant/node_modules/loader-runner/lib/LoaderRunner.js:214:10)\n    at Array.<anonymous> (/home/orange/Documents/Project/Github/open-radiant/node_modules/loader-runner/lib/LoaderRunner.js:205:4) {\n  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],\n  library: 'digital envelope routines',\n  reason: 'unsupported',\n  code: 'ERR_OSSL_EVP_UNSUPPORTED'\n}\n\nNode.js v18.12.1\n")),(0,o.kt)("h2",{id:"\u95ee\u9898\u539f\u56e0"},"\u95ee\u9898\u539f\u56e0"),(0,o.kt)("p",null,"\u7ecf\u8fc7\u7f51\u4e0a\u7684\u4e00\u756a\u641c\u7d22, \u53d1\u73b0\u8fd9\u4e2a\u95ee\u9898\u662f\u7531\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"node.js"),"\u7684\u7248\u672c\u5347\u7ea7\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"v17"),"\u53ca\u4ee5\u4e0a\u7248\u672c, \u800c",(0,o.kt)("inlineCode",{parentName:"p"},"openssl"),"\u7684\u7248\u672c\u5347\u7ea7\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"v3.0"),"\u5f15\u8d77\u7684.",(0,o.kt)("br",null)),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"openssl"),"\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5b89\u5168\u5957\u63a5\u5b57\u5c42\u5bc6\u7801\u5e93, \u7528\u4e8e\u63d0\u4f9b\u52a0\u5bc6\u548c\u8ba4\u8bc1\u670d\u52a1.",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"node.js"),"\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"v17"),"\u53ca\u4ee5\u4e0a\u7248\u672c\u4e2d\u4f7f\u7528\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"openssl"),"\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"v3.0"),"\u7248\u672c, \u8be5\u7248\u672c\u4e2d\u79fb\u9664\u4e86\u4e00\u4e9b\u54c8\u5e0c\u7b97\u6cd5, \u5bfc\u81f4\u5728\u4f7f\u7528\u8fd9\u4e9b\u7b97\u6cd5\u65f6\u62a5\u9519.",(0,o.kt)("br",null)),(0,o.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u7684\u89e3\u51b3\u89e3\u51b3\u65b9\u6848\u6709\u4ee5\u4e0b\u51e0\u79cd:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u964d\u4f4e",(0,o.kt)("inlineCode",{parentName:"li"},"node.js"),"\u7684\u7248\u672c\u5230v16\u53ca\u4ee5\u4e0b\u7248\u672c"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"npm start"),"\u4e4b\u524d\u5148\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"li"},"export NODE_OPTIONS=--openssl-legacy-provider"),(0,o.kt)("br",null),"\u901a\u8fc7\u8be5\u73af\u5883\u53d8\u91cf\u53ef\u4ee5\u542f\u7528`openssl`\u7684`legacy provider`\uff0c\u652f\u6301\u4e00\u4e9b\u65e7\u7684\u54c8\u5e0c\u7b97\u6cd5.",(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ul"},"\u5347\u7ea7\u76f8\u5173\u4f9d\u8d56\u5305\u5230\u6700\u65b0\u7248\u672c\uff0c\u53ef\u80fd\u4f1a\u4fee\u590d\u8fd9\u4e2a\u95ee\u9898.",(0,o.kt)("br",null))),(0,o.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported"},"Stack Overflow\u4e0a\u5173\u4e8e\u8fd9\u4e2a\u95ee\u9898\u7684\u8ba8\u8bba")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/api/crypto.html#crypto_openssl_3_0"},"Node.js\u5b98\u65b9\u6587\u6863\u4e2d\u5173\u4e8eOpenSSL 3.0\u7684\u8bf4\u660e")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nodejs/help/issues/4021"},"GitHub\u4e0a\u5173\u4e8e\u8fd9\u4e2a\u95ee\u9898\u7684\u62a5\u544a"))))}m.isMDXComponent=!0}}]);