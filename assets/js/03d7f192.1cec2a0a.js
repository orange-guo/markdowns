"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[3037],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,d=c["".concat(i,".").concat(m)]||c[m]||k[m]||l;return n?a.createElement(d,p(p({ref:t},u),{},{components:n})):a.createElement(d,p({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:r,p[1]=o;for(var s=2;s<l;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={authors:["xiangcheng.kuo"],tags:["evans","grpc"]},p="\u901a\u8fc7\u4f7f\u7528evans\u6765\u66f4\u52a0\u4fbf\u6377\u5730\u8c03\u8bd5grpc\u670d\u52a1",o={permalink:"/markdowns/blog/2023/03/25/evans",source:"@site/blog/2023-03-25/evans.md",title:"\u901a\u8fc7\u4f7f\u7528evans\u6765\u66f4\u52a0\u4fbf\u6377\u5730\u8c03\u8bd5grpc\u670d\u52a1",description:"\u6709\u7684\u65f6\u5019\u9700\u8981\u8c03\u8bd5grpc\u670d\u52a1, \u4f46\u662f\u901a\u8fc7\u4ee3\u7801\u6765\u8fdb\u884c\u8c03\u8bd5\u6bd4\u8f83\u9ebb\u70e6, \u56e0\u4e3a\u9700\u8981\u7f16\u5199\u76f8\u5173\u4ee3\u7801, \u8fd9\u4e2a\u65f6\u5019\u9700\u8981\u4e00\u4e2a\u5de5\u5177\u6765\u5e2e\u52a9\u6211\u4eec\u8fdb\u884c\u8c03\u8bd5,",date:"2023-03-25T00:00:00.000Z",formattedDate:"March 25, 2023",tags:[{label:"evans",permalink:"/markdowns/blog/tags/evans"},{label:"grpc",permalink:"/markdowns/blog/tags/grpc"}],readingTime:4.49,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["evans","grpc"]},prevItem:{title:"grpc\u670d\u52a1tls\u8fde\u63a5\u63e1\u624b\u5931\u8d25\u95ee\u9898\u6392\u67e5",permalink:"/markdowns/blog/2023/03/27/grpc-tls-handshake-failed"},nextItem:{title:"Kubernetes\u76f8\u5173\u6280\u672f\u5217\u8868",permalink:"/markdowns/blog/2023/03/24/curated-list-kubernetes"}},i={authorsImageUrls:[void 0]},s=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2},{value:"\u670d\u52a1\u8c03\u7528",id:"\u670d\u52a1\u8c03\u7528",level:2},{value:"\u5217\u51fa<code>package</code>",id:"\u5217\u51fapackage",level:3},{value:"\u8bbe\u7f6e<code>package</code>",id:"\u8bbe\u7f6epackage",level:3},{value:"\u5217\u51fa<code>service</code>",id:"\u5217\u51faservice",level:3},{value:"\u8bbe\u7f6e<code>service</code>",id:"\u8bbe\u7f6eservice",level:3},{value:"\u8c03\u7528<code>rpc</code>",id:"\u8c03\u7528rpc",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],u={toc:s},c="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6709\u7684\u65f6\u5019\u9700\u8981\u8c03\u8bd5",(0,r.kt)("inlineCode",{parentName:"p"},"grpc"),"\u670d\u52a1, \u4f46\u662f\u901a\u8fc7\u4ee3\u7801\u6765\u8fdb\u884c\u8c03\u8bd5\u6bd4\u8f83\u9ebb\u70e6, \u56e0\u4e3a\u9700\u8981\u7f16\u5199\u76f8\u5173\u4ee3\u7801, \u8fd9\u4e2a\u65f6\u5019\u9700\u8981\u4e00\u4e2a\u5de5\u5177\u6765\u5e2e\u52a9\u6211\u4eec\u8fdb\u884c\u8c03\u8bd5,\n\u8fd9\u91cc\u4ecb\u7ecd\u4e00\u4e2a\u5de5\u5177",(0,r.kt)("inlineCode",{parentName:"p"},"evans"),"."),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("p",null,"\u8fdb\u5165",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ktr0731/evans/releases"},"Releases"),"\u9875\u9762\u4e0b\u8f7d\u5bf9\u5e94\u7684\u7248\u672c, \u7136\u540e\u8fdb\u884c\u89e3\u538b. ",(0,r.kt)("br",null),"\n\u89e3\u538b\u540e\u7684\u6587\u4ef6\u5939\u4e2d\u6709\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"evans"),"\u7684\u53ef\u6267\u884c\u6587\u4ef6, \u5982\u679c\u60f3\u5728\u4efb\u610f\u4f4d\u7f6e\u90fd\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"evans"),"\u6765\u8c03\u7528, \u90a3\u4e48\u9700\u8981\u505a\u4ee5\u4e0b\u64cd\u4f5c\u5217\u8868\u4e2d\u7684\u4efb\u610f\u4e00\u79cd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u653e\u5230",(0,r.kt)("inlineCode",{parentName:"li"},"/usr/local/bin"),"\u76ee\u5f55\u4e0b."),(0,r.kt)("li",{parentName:"ul"},"\u5c06",(0,r.kt)("inlineCode",{parentName:"li"},"/path/to/evans"),"\u6dfb\u52a0\u5230",(0,r.kt)("inlineCode",{parentName:"li"},"PATH"),"\u73af\u5883\u53d8\u91cf\u4e2d.")),(0,r.kt)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,r.kt)("p",null,"\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"evans"),"\u547d\u4ee4\u542f\u52a8, \u7531\u4e8e\u670d\u52a1\u8c03\u7528\u9700\u8981\u77e5\u9053\u5951\u7ea6, \u6240\u4ee5\u9700\u8981\u6307\u5b9a\u5951\u7ea6\u6587\u4ef6, \u6709\u4e24\u79cd\u65b9\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7ed9\u5b9aprotobuf\u6587\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"evans --host <HOST> --port <PORT> --path <PROTOBUF_ROOT> --proto <PROTOBUF_FILE>\n")),(0,r.kt)("p",null,"\u5176\u4e2d:",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"<PROTOBUF_ROOT>"),"\u662fprotobuf\u6587\u4ef6\u7684\u6839\u76ee\u5f55",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"<PROTOBUF_FILE>"),"\u662fprotobuf\u6587\u4ef6\u76f8\u5bf9\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"<PROTOBUF_ROOT>"),"\u7684\u8def\u5f84",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\u4f8b\u5982\u4ee5\u4e0b\u7ed9\u5b9a\u53c2\u6570:",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"--path /Users/kuoxiangcheng/protobuf --proto test/test.proto"),(0,r.kt)("br",null),"\n\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"test/test.proto"),"\u662f\u5904\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"/Users/kuoxiangcheng/protobuf"),"\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6.",(0,r.kt)("br",null),"\n\u5f53\u591a\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"protobuf"),"\u4e4b\u95f4\u5b58\u5728\u4f9d\u8d56\u5173\u7cfb\u65f6, \u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"--path"),"\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u65b9\u5f0f, \u56e0\u4e3a\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"--path"),"\u6765\u6307\u5b9aprotobuf\u6587\u4ef6\u7684\u6839\u76ee\u5f55"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7reflection\u65b9\u5f0f\u8fd0\u884c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"evans --host <HOST> --port <PORT> -r\n")),(0,r.kt)("p",null,"\u5f53\u6267\u884c\u4e0a\u9762\u7684\u547d\u4ee4\u540e, \u4f1a\u8fdb\u5165evans\u7684\u4ea4\u4e92\u5f0f\u754c\u9762, \u5185\u5bb9\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"\n  ______\n |  ____|\n | |__    __   __   __ _   _ __    ___\n |  __|   \\ \\ / /  / _. | | '_ \\  / __|\n | |____   \\ V /  | (_| | | | | | \\__ \\\n |______|   \\_/    \\__,_| |_| |_| |___/\n\n more expressive universal gRPC client\n\n\n192.168.16.243:27778>\n")),(0,r.kt)("h2",{id:"\u670d\u52a1\u8c03\u7528"},"\u670d\u52a1\u8c03\u7528"),(0,r.kt)("p",null,"\u5f53\u8fdb\u5165evans\u7684\u4ea4\u4e92\u5f0f\u754c\u9762\u540e, \u540e\u7eed\u8fde\u63a5\u7279\u5b9a\u7684\u670d\u52a1, \u8c03\u7528\u7279\u5b9a\u7684\u65b9\u6cd5, \u4ee5\u53ca\u4f20\u9012\u53c2\u6570\u90fd\u662f\u901a\u8fc7\u4ea4\u4e92\u5f0f\u754c\u9762\u6765\u5b8c\u6210\u7684.",(0,r.kt)("br",null),"\n\u63a5\u4e0b\u6765\u9700\u8981\u51e0\u4e2a\u6b65\u9aa4\u6765\u5b8c\u6210\u670d\u52a1\u7684\u8c03\u7528"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"li"},"package")),(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"li"},"service")),(0,r.kt)("li",{parentName:"ul"},"\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"rpc"))),(0,r.kt)("h3",{id:"\u5217\u51fapackage"},"\u5217\u51fa",(0,r.kt)("inlineCode",{parentName:"h3"},"package")),(0,r.kt)("p",null,"\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"show package"),"\u547d\u4ee4\u6765\u67e5\u770b\u5f53\u524d\u8fde\u63a5\u7684\u670d\u52a1\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"package")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"show package\n")),(0,r.kt)("p",null,"\u5f53\u6267\u884c\u4e0a\u8ff0\u547d\u4ee4\u540e, \u4f1a\u5217\u51fa\u5f53\u524d\u8fde\u63a5\u7684\u670d\u52a1\u4e2d\u7684\u6240\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"package"),", \u53c2\u8003\u8f93\u51fa\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"+---------------+\n|    PACKAGE    |\n+---------------+\n| nott.v1.nottd |\n| nott.v1.nottm |\n+---------------+\n")),(0,r.kt)("h3",{id:"\u8bbe\u7f6epackage"},"\u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"h3"},"package")),(0,r.kt)("p",null,"\u6839\u636e\u547d\u4ee4\u6267\u884c\u7684\u7ed3\u679c\u9009\u62e9\u4e00\u4e2a\u7279\u5b9a\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"package"),"\u8fdb\u884c\u8bbe\u7f6e.",(0,r.kt)("br",null),"\n\u4f8b\u5982: \u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"package"),"\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"nott.v1.nottm")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"service nott.v1.nottm\n")),(0,r.kt)("h3",{id:"\u5217\u51faservice"},"\u5217\u51fa",(0,r.kt)("inlineCode",{parentName:"h3"},"service")),(0,r.kt)("p",null,"\u5f53\u8bbe\u7f6e\u5b8c",(0,r.kt)("inlineCode",{parentName:"p"},"package"),"\u540e, \u8fd8\u9700\u8981\u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"service"),", \u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"show service"),"\u547d\u4ee4\u6765\u67e5\u770b\u5f53\u524d",(0,r.kt)("inlineCode",{parentName:"p"},"package"),"\u4e0b\u7684\u6240\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"service")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"show service\n")),(0,r.kt)("p",null,"\u5f53\u6267\u884c\u4e0a\u8ff0\u547d\u4ee4\u540e, \u4f1a\u5217\u51fa\u5f53\u524d\u8fde\u63a5\u7684\u670d\u52a1\u4e2d\u7684\u6240\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"service"),", \u53c2\u8003\u8f93\u51fa\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"+---------+---------------------+-----------------------+------------------------+\n| SERVICE |         RPC         |     REQUEST TYPE      |     RESPONSE TYPE      |\n+---------+---------------------+-----------------------+------------------------+\n| Nottm   | Register            | RegisterRequest       | RegisterResponse       |\n| Nottm   | ListRegisters       | ListRegistersRequest  | ListRegistersResponse  |\n| Nottm   | UpdateRegister      | UpdateRegisterRequest | UpdateRegisterResponse |\n| Nottm   | RevokeRegister      | RevokeRegisterRequest | RevokeRegisterResponse |\n| Nottm   | Push                | PushRequest           | PushResponse           |\n| Nottm   | Poll                | PollRequest           | PollResponse           |\n| Nottm   | RetrieveSentMessage | PollRequest           | PollResponse           |\n| Nottm   | QueryMessages       | QueryMessagesRequest  | QueryMessagesResponse  |\n| Nottm   | CheckState          | CheckStateRequest     | CheckStateResponse     |\n| Nottm   | QueueStatus         | QueueStatusRequest    | QueueStatusResponse    |\n| Nottm   | InspectNottd        | InspectNottdRequest   | InspectNottdResponse   |\n| Nottm   | InspectNottm        | InspectNottmRequest   | InspectNottmResponse   |\n| Nottm   | RestartNottd        | RestartNottdRequest   | RestartNottdResponse   |\n+---------+---------------------+-----------------------+------------------------+\n")),(0,r.kt)("h3",{id:"\u8bbe\u7f6eservice"},"\u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"h3"},"service")),(0,r.kt)("p",null,"\u6839\u636e\u547d\u4ee4\u6267\u884c\u7684\u7ed3\u679c\u9009\u62e9\u4e00\u4e2a\u7279\u5b9a\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"service"),"\u8fdb\u884c\u8bbe\u7f6e.",(0,r.kt)("br",null),"\n\u4f8b\u5982: \u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"service"),"\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"Nottm")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"service Nottm\n")),(0,r.kt)("h3",{id:"\u8c03\u7528rpc"},"\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"h3"},"rpc")),(0,r.kt)("p",null,"\u5f53\u8bbe\u7f6e\u5b8c",(0,r.kt)("inlineCode",{parentName:"p"},"service"),"\u540e, \u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"call <RPC>"),"\u547d\u4ee4\u6765\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"rpc"),"\u65b9\u6cd5.",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\u4f8b\u5982: \u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Register"),"\u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"call Register\n")),(0,r.kt)("p",null,"\u7136\u540e\u6839\u636e\u63d0\u793a\u8f93\u5165\u53c2\u6570, \u5f53\u8f93\u5165\u5b8c\u6bd5\u540e, \u4f1a\u8fd4\u56de\u8c03\u7528\u7ed3\u679c.",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ktr0731/evans"},"evans")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.tencent.com/developer/article/1892716"},"\u8d85\u5b9e\u7528\u7684 gRPC \u5ba2\u6237\u7aef\u8c03\u8bd5\u5de5\u5177"))))}k.isMDXComponent=!0}}]);