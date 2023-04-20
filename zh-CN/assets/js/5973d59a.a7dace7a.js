"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[1973],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(s,".").concat(b)]||p[b]||k[b]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},9170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},i="Kubernetes\u76f8\u5173\u6280\u672f\u5217\u8868",l={unversionedId:"collection/kubernetes-list",id:"collection/kubernetes-list",title:"Kubernetes\u76f8\u5173\u6280\u672f\u5217\u8868",description:"- kubernetes",source:"@site/docs/collection/kubernetes-list.md",sourceDirName:"collection",slug:"/collection/kubernetes-list",permalink:"/zh-CN/docs/collection/kubernetes-list",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/collection/kubernetes-list.md",tags:[],version:"current",lastUpdatedBy:"xiangcheng.kuo",lastUpdatedAt:1681963052,formattedLastUpdatedAt:"2023\u5e744\u670820\u65e5",frontMatter:{},sidebar:"collection",previous:{title:"Kotlin\u516c\u5171\u5e93",permalink:"/zh-CN/docs/collection/kotlin-libraries"},next:{title:"\u8bed\u8a00",permalink:"/zh-CN/docs/collection/languages"}},s={},u=[{value:"See also",id:"see-also",level:2}],c={toc:u},p="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kubernetes\u76f8\u5173\u6280\u672f\u5217\u8868"},"Kubernetes\u76f8\u5173\u6280\u672f\u5217\u8868"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"kubernetes"),(0,a.kt)("br",null),"Production-Grade Container Orchestration"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},"kind"),(0,a.kt)("br",null),"kind is a tool for running local Kubernetes clusters using Docker container \u201cnodes\u201d.",(0,a.kt)("br",null),"kind was primarily designed for testing Kubernetes itself, but may be used for local development or CI."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://k3s.io/"},"k3s"),(0,a.kt)("br",null),"The certified Kubernetes distribution built for IoT & Edge computing"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/"},"minikube"),(0,a.kt)("br",null),"minikube quickly sets up a local Kubernetes cluster on macOS, Linux, and Windows. We proudly focus on helping application developers and new Kubernetes users."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.cncf.io/"},"cncf"),(0,a.kt)("br",null),"CNCF is the open source, vendor-neutral hub of cloud native computing, hosting projects like Kubernetes and Prometheus to make cloud native universal and sustainable."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://istio.io/"},"istio"),(0,a.kt)("br",null),"Simplify observability, traffic management, security, and policy with the leading service mesh."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://knative.dev/"},"Knative"),(0,a.kt)("br",null),"Knative is an Open-Source Enterprise-level solution to build Serverless and Event Driven Applications Serverless Containers in Kubernetes environments."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dapr.io/"},"dapr"),(0,a.kt)("br",null),"APIs for building portable and reliable microservices",(0,a.kt)("br",null),"Leverage industry best practices and focus on your application\u2019s logic."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.openfaas.com/"},"openfaas"),(0,a.kt)("br",null),"Serverless Functions, Made Simple.",(0,a.kt)("br",null),"OpenFaaS\xae makes it simple to deploy both functions and existing code to Kubernetes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubevela.io/"},"https://kubevela.io/"),(0,a.kt)("br",null),"Make shipping applications more enjoyable."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/feiskyer/kubernetes-handbook"},"kubernetes-handbook"),(0,a.kt)("br",null),"Kubernetes Handbook")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tomhuang12/awesome-k8s-resources"},"awesome-k8s-resources"),(0,a.kt)("br",null),"A curated list of awesome Kubernetes tools and resources.")))}k.isMDXComponent=!0}}]);