"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[8296],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,m=c["".concat(s,".").concat(d)]||c[d]||k[d]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},28936:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(83117),a=(r(67294),r(3905));const o={},l="Kubernetes",i={unversionedId:"collection/curated-list/kubernetes-list",id:"collection/curated-list/kubernetes-list",title:"Kubernetes",description:"- kubernetes",source:"@site/docs/collection/curated-list/kubernetes-list.md",sourceDirName:"collection/curated-list",slug:"/collection/curated-list/kubernetes-list",permalink:"/zh-CN/docs/collection/curated-list/kubernetes-list",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/collection/curated-list/kubernetes-list.md",tags:[],version:"current",lastUpdatedBy:"Xiangcheng Kuo",lastUpdatedAt:1698049746,formattedLastUpdatedAt:"2023\u5e7410\u670823\u65e5",frontMatter:{},sidebar:"collection",previous:{title:"Kotlin",permalink:"/zh-CN/docs/collection/curated-list/kotlin-libraries"},next:{title:"Language",permalink:"/zh-CN/docs/collection/curated-list/languages"}},s={},p=[{value:"See also",id:"see-also",level:2},{value:"Reference",id:"reference",level:2}],u={toc:p},c="wrapper";function k(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kubernetes"},"Kubernetes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"kubernetes"),(0,a.kt)("br",null),"Production-Grade Container Orchestration"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},"kind"),(0,a.kt)("br",null),"kind is a tool for running local Kubernetes clusters using Docker container \u201cnodes\u201d.",(0,a.kt)("br",null),"kind was primarily designed for testing Kubernetes itself, but may be used for local development or CI."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://k3s.io/"},"k3s"),(0,a.kt)("br",null),"The certified Kubernetes distribution built for IoT & Edge computing"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/"},"minikube"),(0,a.kt)("br",null),"minikube quickly sets up a local Kubernetes cluster on macOS, Linux, and Windows. We proudly focus on helping application developers and new Kubernetes users."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.cncf.io/"},"cncf"),(0,a.kt)("br",null),"CNCF is the open source, vendor-neutral hub of cloud native computing, hosting projects like Kubernetes and Prometheus to make cloud native universal and sustainable."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://istio.io/"},"istio"),(0,a.kt)("br",null),"Simplify observability, traffic management, security, and policy with the leading service mesh."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://knative.dev/"},"Knative"),(0,a.kt)("br",null),"Knative is an Open-Source Enterprise-level solution to build Serverless and Event Driven Applications Serverless Containers in Kubernetes environments."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dapr.io/"},"dapr"),(0,a.kt)("br",null),"APIs for building portable and reliable microservices",(0,a.kt)("br",null),"Leverage industry best practices and focus on your application\u2019s logic."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.openfaas.com/"},"openfaas"),(0,a.kt)("br",null),"Serverless Functions, Made Simple.",(0,a.kt)("br",null),"OpenFaaS\xae makes it simple to deploy both functions and existing code to Kubernetes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubevela.io/"},"https://kubevela.io/"),(0,a.kt)("br",null),"Make shipping applications more enjoyable."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/feiskyer/kubernetes-handbook"},"kubernetes-handbook"),(0,a.kt)("br",null),"Kubernetes Handbook")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tomhuang12/awesome-k8s-resources"},"awesome-k8s-resources"),(0,a.kt)("br",null),"A curated list of awesome Kubernetes tools and resources.")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://theithollow.com/2019/09/16/kubernetes-desired-state-and-control-loops/"},"Kubernetes \u2013 Desired State and Control Loops"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/volumes/"},"Volumes"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"Deployments"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"},"Resource Management for Pods and Containers"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/"},"Pods"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/controller/"},"Controllers"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/"},"Kubernetes Scheduler"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#built-in-node-labels"},"Assigning Pods to Nodes"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"},"DaemonSet"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/"},"Pod Priority and Preemption"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/"},"Kubernetes Scheduler")))))}k.isMDXComponent=!0}}]);