"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[1658],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={authors:["xiangcheng.kuo"],tags:["problem-solving","testcontainers","docker","ldap-failover"]},i="TestContainers\u56fa\u5b9a\u5bb9\u5668\u7aef\u53e3",l={permalink:"/markdowns/zh-CN/blog/2023/03/16/testcontainers-fixed-port",source:"@site/blog/2023-03-16/testcontainers-fixed-port.md",title:"TestContainers\u56fa\u5b9a\u5bb9\u5668\u7aef\u53e3",description:"\u8fd9\u7bc7\u6587\u7ae0\u7684\u5185\u5bb9\u53d1\u751f\u7684\u80cc\u666f\u548c\u6d4b\u8bd5java\u7684ldap\u7684failover\u6709\u5173.",date:"2023-03-16T00:00:00.000Z",formattedDate:"2023\u5e743\u670816\u65e5",tags:[{label:"problem-solving",permalink:"/markdowns/zh-CN/blog/tags/problem-solving"},{label:"testcontainers",permalink:"/markdowns/zh-CN/blog/tags/testcontainers"},{label:"docker",permalink:"/markdowns/zh-CN/blog/tags/docker"},{label:"ldap-failover",permalink:"/markdowns/zh-CN/blog/tags/ldap-failover"}],readingTime:1.205,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","testcontainers","docker","ldap-failover"]},prevItem:{title:"transport endpoint is not connected\u95ee\u9898\u89e3\u51b3",permalink:"/markdowns/zh-CN/blog/2023/03/23/transport-endpoint-is-not-connected"},nextItem:{title:"\u901a\u8fc7\u589e\u52a0timeout-control\u4ee5\u89e3\u51b3\u5f53tcp\u8fde\u63a5\u4e00\u76f4\u5904\u4e8eSYN_SENT\u72b6\u6001\u5bfc\u81f4java\u4e2d\u7684ldap-client\u7684failover\u4e0d\u5de5\u4f5c\u7684\u95ee\u9898",permalink:"/markdowns/zh-CN/blog/2023/03/15/ldap-client-failover"}},s={authorsImageUrls:[void 0]},p=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u542f\u52a8\u5bb9\u5668\u65f6\u589e\u52a0<code>fixedExposedPort</code>",id:"\u542f\u52a8\u5bb9\u5668\u65f6\u589e\u52a0fixedexposedport",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u7684\u5185\u5bb9\u53d1\u751f\u7684\u80cc\u666f\u548c\u6d4b\u8bd5",(0,o.kt)("inlineCode",{parentName:"p"},"java"),"\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"ldap"),"\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"failover"),"\u6709\u5173.",(0,o.kt)("br",null),"\n\u6d4b\u8bd5",(0,o.kt)("inlineCode",{parentName:"p"},"failover"),"\u9700\u8981\u542f\u52a8\u4e24\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"ldap"),"\u7684\u5bb9\u5668\u5e76",(0,o.kt)("inlineCode",{parentName:"p"},"stop"),"\u5176\u4e2d\u4e00\u4e2a. ",(0,o.kt)("br",null),"\n\u4f46\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"stop"),"\u5b8c\u4e4b\u540e\u9047\u5230\u4e86\u4e00\u4e2a\u95ee\u9898\u5f53\u4e0b\u6b21\u542f\u52a8\u540e\u5206\u914d\u7684\u7aef\u53e3\u4f1a\u53d8\u5316(\u8fd9\u662f\u7531\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"docker"),"\u7684\u5185\u90e8\u673a\u5236\u5bfc\u81f4\u7684).",(0,o.kt)("br",null),"\n\u63a5\u4e0b\u6765\u5c06\u4f1a\u4ecb\u7ecd\u5982\u4f55\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898."),(0,o.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,o.kt)("h3",{id:"\u542f\u52a8\u5bb9\u5668\u65f6\u589e\u52a0fixedexposedport"},"\u542f\u52a8\u5bb9\u5668\u65f6\u589e\u52a0",(0,o.kt)("inlineCode",{parentName:"h3"},"fixedExposedPort")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val container = FixedHostPortGenericContainer<*>("<your-docker-image>")\ncontainer.withExposedPorts(389)\ncontainer.withFixedExposedPort(\n    TestSocketUtils.findAvailableTcpPort(),\n    389\n) // we need to fix the port to make sure the port is the same when the container is restarted\n')),(0,o.kt)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,o.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u51e0\u70b9:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u521b\u5efaFixedHostPortGenericContainer\u7684\u5b9e\u4f8b\u6765\u56fa\u5b9a\u7aef\u53e3",(0,o.kt)("br",null),"`FixedHostPortGenericContainer`\u662f`TestContainers`\u63d0\u4f9b\u7684\u4e00\u4e2a`GenericContainer`\u7684\u5b50\u7c7b, \u7528\u6765\u56fa\u5b9a\u5bb9\u5668\u7684\u7aef\u53e3"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"TestSocketUtils.findAvailableTcpPort()"),"\u83b7\u53d6\u4e00\u4e2a\u53ef\u7528\u7684\u7aef\u53e3",(0,o.kt)("br",null),"\u4f7f\u7528`TestSocketUtils.findAvailableTcpPort()`\u83b7\u53d6\u4e00\u4e2a\u53ef\u7528\u7684\u7aef\u53e3\u786e\u4fdd`host`\u4e0a\u7684\u7aef\u53e3\u6ca1\u6709\u88ab\u5360\u7528")),(0,o.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/test/util/TestSocketUtils.html"},"Class TestSocketUtils")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://javadoc.io/static/org.testcontainers/testcontainers/1.15.1/org/testcontainers/containers/FixedHostPortGenericContainer.html"},"Class FixedHostPortGenericContainer<SELF extends FixedHostPortGenericContainer<SELF",">",">")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.tabnine.com/code/java/classes/org.testcontainers.containers.FixedHostPortGenericContainer"},"How to useFixedHostPortGenericContainerinorg.testcontainers.containers"))))}m.isMDXComponent=!0}}]);