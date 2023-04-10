"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[1576],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),k=a,b=p["".concat(s,".").concat(k)]||p[k]||d[k]||l;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},8643:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={authors:["xiangcheng.kuo"],tags:["kubernetes","curated-list"]},i="Kubernetes\u76f8\u5173\u6280\u672f\u5217\u8868",o={unversionedId:"collection/curated-list/curated-list-kubernetes",id:"collection/curated-list/curated-list-kubernetes",title:"Kubernetes\u76f8\u5173\u6280\u672f\u5217\u8868",description:"- kubernetes",source:"@site/docs/collection/curated-list/curated-list-kubernetes.md",sourceDirName:"collection/curated-list",slug:"/collection/curated-list/curated-list-kubernetes",permalink:"/docs/collection/curated-list/curated-list-kubernetes",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/collection/curated-list/curated-list-kubernetes.md",tags:[{label:"kubernetes",permalink:"/docs/tags/kubernetes"},{label:"curated-list",permalink:"/docs/tags/curated-list"}],version:"current",lastUpdatedBy:"xiangcheng.kuo",lastUpdatedAt:1681092907,formattedLastUpdatedAt:"Apr 10, 2023",frontMatter:{authors:["xiangcheng.kuo"],tags:["kubernetes","curated-list"]},sidebar:"collection",previous:{title:"Kotlin\u76f8\u5173\u6280\u672f\u5217\u8868",permalink:"/docs/collection/curated-list/curated-list-kotlin"},next:{title:"Python\u76f8\u5173\u6280\u672f\u5217\u8868",permalink:"/docs/collection/curated-list/curated-list-python"}},s={},u=[{value:"See also",id:"see-also",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kubernetes\u76f8\u5173\u6280\u672f\u5217\u8868"},"Kubernetes\u76f8\u5173\u6280\u672f\u5217\u8868"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"kubernetes"),(0,a.kt)("br",null),"Production-Grade Container Orchestration"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},"kind"),(0,a.kt)("br",null),"kind is a tool for running local Kubernetes clusters using Docker container \u201cnodes\u201d.",(0,a.kt)("br",null),"kind was primarily designed for testing Kubernetes itself, but may be used for local development or CI."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://k3s.io/"},"k3s"),(0,a.kt)("br",null),"The certified Kubernetes distribution built for IoT & Edge computing"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/"},"minikube"),(0,a.kt)("br",null),"minikube quickly sets up a local Kubernetes cluster on macOS, Linux, and Windows. We proudly focus on helping application developers and new Kubernetes users."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.cncf.io/"},"cncf"),(0,a.kt)("br",null),"CNCF is the open source, vendor-neutral hub of cloud native computing, hosting projects like Kubernetes and Prometheus to make cloud native universal and sustainable."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://istio.io/"},"istio"),(0,a.kt)("br",null),"Simplify observability, traffic management, security, and policy with the leading service mesh."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://knative.dev/"},"Knative"),(0,a.kt)("br",null),"Knative is an Open-Source Enterprise-level solution to build Serverless and Event Driven Applications Serverless Containers in Kubernetes environments."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dapr.io/"},"dapr"),(0,a.kt)("br",null),"APIs for building portable and reliable microservices",(0,a.kt)("br",null),"Leverage industry best practices and focus on your application\u2019s logic."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.openfaas.com/"},"openfaas"),(0,a.kt)("br",null),"Serverless Functions, Made Simple.",(0,a.kt)("br",null),"OpenFaaS\xae makes it simple to deploy both functions and existing code to Kubernetes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubevela.io/"},"https://kubevela.io/"),(0,a.kt)("br",null),"Make shipping applications more enjoyable."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/feiskyer/kubernetes-handbook"},"kubernetes-handbook"),(0,a.kt)("br",null),"Kubernetes Handbook")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tomhuang12/awesome-k8s-resources"},"awesome-k8s-resources"),(0,a.kt)("br",null),"A curated list of awesome Kubernetes tools and resources.")))}d.isMDXComponent=!0}}]);