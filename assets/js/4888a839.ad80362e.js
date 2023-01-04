"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[6056],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var l=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,l,a=function(e,t){if(null==e)return{};var i,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)i=n[l],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)i=n[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var u=l.createContext({}),s=function(e){var t=l.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=s(e.components);return l.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(i),k=a,m=p["".concat(u,".").concat(k)]||p[k]||d[k]||n;return i?l.createElement(m,r(r({ref:t},c),{},{components:i})):l.createElement(m,r({ref:t},c))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,r=new Array(n);r[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,r[1]=o;for(var s=2;s<n;s++)r[s]=i[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,i)}k.displayName="MDXCreateElement"},8255:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var l=i(7462),a=(i(7294),i(3905));const n={},r=void 0,o={unversionedId:"books/cloudnative/six_main_areas/application_properties",id:"books/cloudnative/six_main_areas/application_properties",title:"application_properties",description:"[toc]",source:"@site/docs/books/cloudnative/six_main_areas/application_properties.md",sourceDirName:"books/cloudnative/six_main_areas",slug:"/books/cloudnative/six_main_areas/application_properties",permalink:"/markdowns/docs/books/cloudnative/six_main_areas/application_properties",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/books/cloudnative/six_main_areas/application_properties.md",tags:[],version:"current",lastUpdatedBy:"xiangcheng.kuo",lastUpdatedAt:1672810241,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4e91\u539f\u751f",permalink:"/markdowns/docs/books/cloudnative/"},next:{title:"architectures",permalink:"/markdowns/docs/books/cloudnative/six_main_areas/architectures"}},u={},s=[{value:"1. Scalability(\u53ef\u6269\u5c55\u6027)",id:"1-scalability\u53ef\u6269\u5c55\u6027",level:2},{value:"\u533a\u522b",id:"\u533a\u522b",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3},{value:"2. Manageability(\u53ef\u7ba1\u7406\u6027)",id:"2-manageability\u53ef\u7ba1\u7406\u6027",level:2},{value:"3. Observability(\u53ef\u89c2\u5bdf\u6027)",id:"3-observability\u53ef\u89c2\u5bdf\u6027",level:2},{value:"Monitoring(\u76d1\u63a7)",id:"monitoring\u76d1\u63a7",level:3},{value:"Alerting/Visualization(\u544a\u8b66/\u53ef\u89c6\u5316)",id:"alertingvisualization\u544a\u8b66\u53ef\u89c6\u5316",level:3},{value:"Distributed systems tracing infrastructure(\u5206\u5e03\u5f0f\u8ffd\u8e2a\u57fa\u7840\u8bbe\u65bd)",id:"distributed-systems-tracing-infrastructure\u5206\u5e03\u5f0f\u8ffd\u8e2a\u57fa\u7840\u8bbe\u65bd",level:3},{value:"Log aggregation/analytics(\u65e5\u5fd7\u805a\u5408/\u5206\u6790)",id:"log-aggregationanalytics\u65e5\u5fd7\u805a\u5408\u5206\u6790",level:3},{value:"4. Resilience(\u5f39\u6027)",id:"4-resilience\u5f39\u6027",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:3},{value:"\u76f8\u5173\u6280\u672f",id:"\u76f8\u5173\u6280\u672f",level:3},{value:"5. Loose coupling(\u677e\u8026\u5408)",id:"5-loose-coupling\u677e\u8026\u5408",level:2},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:3},{value:"\u76ee\u6807",id:"\u76ee\u6807",level:3},{value:"\u6a21\u5757\u5316",id:"\u6a21\u5757\u5316",level:3},{value:"\u6a21\u5757\u5316\u7684\u597d\u5904",id:"\u6a21\u5757\u5316\u7684\u597d\u5904",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3-1",level:2}],c={toc:s};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,l.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"[toc]"),(0,a.kt)("h1",{id:"application-properties"},"Application Properties"),(0,a.kt)("h2",{id:"1-scalability\u53ef\u6269\u5c55\u6027"},"1. Scalability(\u53ef\u6269\u5c55\u6027)"),(0,a.kt)("p",null,"| \u65b9\u5f0f | \u5b9a\u4e49 | \u662f\u5426\u9700\u8981\u53ef\u6269\u5c55\u6027\u8bbe\u8ba1 | | :-: | :-: | :-: | | Vertical scalability(\u5782\u76f4\u6269\u5c55) | \u5411\u8282\u70b9\u6dfb\u52a0\u786c\u4ef6\u8d44\u6e90(CPU/\u5185\u5b58)\uff0c\u8fd9\u79cd\u65b9\u6cd5\u662f\u6709\u9650\u7684\uff0c\u56e0\u4e3a\u4e0d\u53ef\u80fd\u4e0d\u65ad\u6dfb\u52a0\u786c\u4ef6\u8d44\u6e90 |\u5426|\n| Horizontal scalability(\u6c34\u5e73\u6269\u5c55) | \u5411\u7cfb\u7edf(Kubernetes)\u589e\u52a0\u66f4\u591a\u8282\u70b9\u6216\u5bb9\u5668 |\u662f|"),(0,a.kt)("h3",{id:"\u533a\u522b"},"\u533a\u522b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f20\u7edf\u7cfb\u7edf\u901a\u5e38\u4f1a\u5728\u7cfb\u7edf\u589e\u52a0\u8d1f\u8f7d\u65f6\u91c7\u7528\u5782\u76f4\u6269\u5c55, \u65e0\u9700\u91cd\u65b0\u8bbe\u8ba1\u53ef\u6269\u5c55\u6027"),(0,a.kt)("li",{parentName:"ul"},"\u5782\u76f4\u6269\u5c55\u4e3a\u8ba1\u7b97\u8282\u70b9\u589e\u52a0\u8d44\u6e90"),(0,a.kt)("li",{parentName:"ul"},"\u6c34\u5e73\u6269\u5c55\u589e\u52a0\u66f4\u591a\u8ba1\u7b97\u8282\u70b9")),(0,a.kt)("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u73af\u5883\u4e0d\u65ad\u53d8\u5316\u7684\u4e91\u4e2d\u6c34\u5e73\u6269\u5c55\u662f\u9996\u8981\u9009\u62e9",(0,a.kt)("br",null),"\n\u53ef\u6269\u5c55\u6027\u7684\u4e00\u5927\u969c\u788d\u662f\u5e94\u7528\u7a0b\u5e8f\u72b6\u6001")),(0,a.kt)("h2",{id:"2-manageability\u53ef\u7ba1\u7406\u6027"},"2. Manageability(\u53ef\u7ba1\u7406\u6027)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5916\u90e8\u8f93\u5165\u5728\u6709\u9650\u7684\u65f6\u95f4\u95f4\u9694\u5185\u6539\u53d8\u7cfb\u7edf\u72b6\u6001\u6216\u8f93\u51fa\u7684\u80fd\u529b",(0,a.kt)("br",null),"\n\u662f\u4e00\u79cd\u65e0\u9700\u66f4\u6539\u5176\u4ee3\u7801\u5373\u53ef\u4fee\u6539\u5e94\u7528\u7a0b\u5e8f\u884c\u4e3a\u7684\u80fd\u529b")),(0,a.kt)("h2",{id:"3-observability\u53ef\u89c2\u5bdf\u6027"},"3. Observability(\u53ef\u89c2\u5bdf\u6027)"),(0,a.kt)("p",null,"\u53ef\u89c2\u5bdf\u6027\u662f\u8861\u91cf\u60a8\u53ef\u4ee5\u4ece\u5176\u5916\u90e8\u8f93\u51fa\u63a8\u65ad\u5176\u5185\u90e8\u72b6\u6001\u7684\u7a0b\u5ea6\u3002"),(0,a.kt)("h3",{id:"monitoring\u76d1\u63a7"},"Monitoring(\u76d1\u63a7)"),(0,a.kt)("p",null,"\u6d4b\u91cf\u5e94\u7528\u7a0b\u5e8f\u7684\u7279\u5b9a\u65b9\u9762\uff0c\u4ee5\u83b7\u53d6\u6709\u5173\u5176\u6574\u4f53\u5065\u5eb7\u72b6\u51b5\u7684\u4fe1\u606f\u5e76\u8bc6\u522b\u6545\u969c",(0,a.kt)("br",null),"\ne.g. Spring Boot Actuator"),(0,a.kt)("h3",{id:"alertingvisualization\u544a\u8b66\u53ef\u89c6\u5316"},"Alerting/Visualization(\u544a\u8b66/\u53ef\u89c6\u5316)"),(0,a.kt)("p",null,"\u5f53\u5728\u76d1\u89c6\u5e94\u7528\u7a0b\u5e8f\u65f6\u53d1\u73b0\u6545\u969c\u65f6\u89e6\u53d1\u8b66\u62a5\u5e76\u5e94\u91c7\u53d6\u4e00\u4e9b\u63aa\u65bd\u6765\u5904\u7406\u5b83, \u4eea\u8868\u677f\u7528\u4e8e\u53ef\u89c6\u5316\u6536\u96c6\u7684\u6570\u636e\u5e76\u5c06\u5176\u7ed8\u5236\u5728\u76f8\u5173\u56fe\u8868\u4e2d",(0,a.kt)("br",null),"\ne.g. Grafana"),(0,a.kt)("h3",{id:"distributed-systems-tracing-infrastructure\u5206\u5e03\u5f0f\u8ffd\u8e2a\u57fa\u7840\u8bbe\u65bd"},"Distributed systems tracing infrastructure(\u5206\u5e03\u5f0f\u8ffd\u8e2a\u57fa\u7840\u8bbe\u65bd)"),(0,a.kt)("p",null,"\u8ddf\u8e2a\u6d41\u7ecf\u4e0d\u540c\u5b50\u7cfb\u7edf\u7684\u6570\u636e",(0,a.kt)("br",null),"\ne.g. Spring Cloud Sleuth"),(0,a.kt)("h3",{id:"log-aggregationanalytics\u65e5\u5fd7\u805a\u5408\u5206\u6790"},"Log aggregation/analytics(\u65e5\u5fd7\u805a\u5408/\u5206\u6790)"),(0,a.kt)("p",null,"\u8ddf\u8e2a\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u4e8b\u4ef6\u5e76\u63a8\u65ad\u8f6f\u4ef6\u7684\u884c\u4e3a\uff0c\u5728\u51fa\u73b0\u95ee\u9898\u65f6\u8fdb\u884c\u8c03\u8bd5\u81f3\u5173\u91cd\u8981",(0,a.kt)("br",null),"\ne.g. EFK stack (Elastic, Fluentd, Kibana)"),(0,a.kt)("h2",{id:"4-resilience\u5f39\u6027"},"4. Resilience(\u5f39\u6027)"),(0,a.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u7cfb\u7edf\u51fa\u73b0\u6545\u969c\u4f9d\u7136\u53ef\u4ee5\u5de5\u4f5c, \u90a3\u4e48\u5b83\u5c31\u5177\u6709\u5f39\u6027"),(0,a.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Circuit Breakers(\u65ad\u8def\u5668)"),(0,a.kt)("li",{parentName:"ul"},"Retries(\u91cd\u8bd5)"),(0,a.kt)("li",{parentName:"ul"},"Redundancy(\u5197\u4f59)")),(0,a.kt)("h3",{id:"\u76f8\u5173\u6280\u672f"},"\u76f8\u5173\u6280\u672f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Spring Cloud Circuit Breaker"),(0,a.kt)("li",{parentName:"ul"},"Resilience4j")),(0,a.kt)("h2",{id:"5-loose-coupling\u677e\u8026\u5408"},"5. Loose coupling(\u677e\u8026\u5408)"),(0,a.kt)("h3",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u7684\u57fa\u672c\u5c5e\u6027"),(0,a.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u4e2d\u4e2a\u90e8\u5206\u4e4b\u95f4\u4e86\u89e3\u5c3d\u53ef\u80fd\u5c11")),(0,a.kt)("h3",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,a.kt)("p",null,"\u72ec\u7acb\u8fdb\u5316\u6bcf\u4e2a\u90e8\u5206, \u5f53\u4e00\u4e2a\u90e8\u5206\u53d1\u751f\u53d8\u5316\u65f6\u5176\u4ed6\u90e8\u5206\u4e0d\u9700\u8981\u4f5c\u51fa\u76f8\u5e94\u7684\u6539\u53d8"),(0,a.kt)("h3",{id:"\u6a21\u5757\u5316"},"\u6a21\u5757\u5316"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u5176\u4ed6\u90e8\u5206\u7684\u4f9d\u8d56\u6700\u5c0f(\u677e\u8026\u5408)"),(0,a.kt)("li",{parentName:"ul"},"\u6a21\u5757\u4e2d\u7684\u4ee3\u7801\u5c01\u88c5\u5728\u4e00\u8d77(\u9ad8\u5185\u805a)")),(0,a.kt)("h3",{id:"\u6a21\u5757\u5316\u7684\u597d\u5904"},"\u6a21\u5757\u5316\u7684\u597d\u5904"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7ba1\u7406 \u6bcf\u4e2a\u6a21\u5757\u90fd\u662f\u677e\u8026\u5408\u7684, \u8d1f\u8d23\u5f00\u53d1\u7684\u4eba\u82b1\u8d39\u66f4\u5c11\u7684\u5f00\u53d1\u65f6\u95f4, \u56e0\u4e3a\u4e0d\u9700\u8981\u4e0e\u5176\u4ed6\u56e2\u961f\u6c9f\u901a"),(0,a.kt)("li",{parentName:"ul"},"\u4ea7\u54c1\u7075\u6d3b \u6bcf\u4e2a\u6a21\u5757\u72ec\u7acb\u4e8e\u5176\u4ed6\u6a21\u5757\u53d1\u5c55"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u7406\u89e3 \u6ca1\u5fc5\u8981\u5c06\u7cfb\u7edf\u4f5c\u4e3a\u4e00\u4e2a\u6574\u4f53\u6765\u4e86\u89e3\u7279\u5b9a\u6a21\u5757")),(0,a.kt)("h2",{id:"\u603b\u7ed3-1"},"\u603b\u7ed3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e91\u539f\u751f\u8f6f\u4ef6\u662f\u7531\u4f60\u7684\u8ba1\u7b97\u65b9\u5f0f\u5b9a\u4e49\u7684\uff0c\u800c\u4e0d\u662f\u4f60\u5728\u54ea\u91cc\u8ba1\u7b97\u7684"),(0,a.kt)("li",{parentName:"ul"},"\u4e91\u662f\u5173\u4e8e\u54ea\u91cc\uff0c\u4e91\u539f\u751f\u662f\u5173\u4e8e\u5982\u4f55")))}p.isMDXComponent=!0}}]);