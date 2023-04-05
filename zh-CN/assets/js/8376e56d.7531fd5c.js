"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[3456],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(r),m=l,k=p["".concat(u,".").concat(m)]||p[m]||d[m]||n;return r?a.createElement(k,i(i({ref:t},c),{},{components:r})):a.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,i=new Array(n);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<n;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4603:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var a=r(7462),l=(r(7294),r(3905));const n={},i="Others",o={unversionedId:"collection/curated-list/others",id:"collection/curated-list/others",title:"Others",description:"Filesystem",source:"@site/docs/collection/curated-list/others.md",sourceDirName:"collection/curated-list",slug:"/collection/curated-list/others",permalink:"/markdowns/zh-CN/docs/collection/curated-list/others",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/collection/curated-list/others.md",tags:[],version:"current",lastUpdatedBy:"xiangcheng.kuo",lastUpdatedAt:1680685707,formattedLastUpdatedAt:"2023\u5e744\u67085\u65e5",frontMatter:{},sidebar:"collection",previous:{title:"Python\u76f8\u5173\u6280\u672f\u5217\u8868",permalink:"/markdowns/zh-CN/docs/collection/curated-list/curated-list-python"},next:{title:"Technology Radar",permalink:"/markdowns/zh-CN/docs/collection/technology-radar"}},u={},s=[{value:"Filesystem",id:"filesystem",level:2},{value:"DB",id:"db",level:2},{value:"build",id:"build",level:2},{value:"Infrastructure as Code",id:"infrastructure-as-code",level:2},{value:"Security",id:"security",level:2},{value:"Middleware",id:"middleware",level:2},{value:"language",id:"language",level:2},{value:"Others",id:"others-1",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"others"},"Others"),(0,l.kt)("h2",{id:"filesystem"},"Filesystem"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/rclone/rclone"},"rclone"),(0,l.kt)("br",null),'\n"rsync for cloud storage"-Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud\nStorage, Yandex Files'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/juicedata/juicefs"},"juicefs"),(0,l.kt)("br",null),"\nJuiceFS is a distributed POSIX file system built on top of Redis and S3."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://min.io/"},"minio"),(0,l.kt)("br",null),"MinIO offers high-performance, S3 compatible object storage. Native to Kubernetes, MinIO is the only object storage suite available on every public cloud, every Kubernetes distribution, the private cloud and the edge. MinIO is software-defined and is 100% open source under GNU AGPL v3.")),(0,l.kt)("h2",{id:"db"},"DB"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rocksdb.org/"},"rocksdb"),(0,l.kt)("br",null),"A persistent key-value store for fast storage environments")),(0,l.kt)("h2",{id:"build"},"build"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://paketo.io/"},"paketo"),(0,l.kt)("br",null),"Your app,",(0,l.kt)("br",null),"in your favorite language,",(0,l.kt)("br",null),"ready to run in the cloud",(0,l.kt)("br",null))),(0,l.kt)("h2",{id:"infrastructure-as-code"},"Infrastructure as Code"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.ansible.com/"},"ansible")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.terraform.io/"},"terraform"))),(0,l.kt)("h2",{id:"security"},"Security"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://casbin.org/"},"casbin"),(0,l.kt)("br",null),"An authorization library that supports access control models like ACL, RBAC, ABAC in Golang")),(0,l.kt)("h2",{id:"middleware"},"Middleware"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.consul.io/"},"consul")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://etcd.io/"},"etcd"),(0,l.kt)("br",null),"A distributed, reliable key-value store for the most critical data of a distributed system")),(0,l.kt)("h2",{id:"language"},"language"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.jython.org/"},"Jython"),(0,l.kt)("br",null),"Python for the Java Platform"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://elixir-lang.org/"},"elixir")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://ziglang.org/"},"zig"),(0,l.kt)("br",null),"Zig is a general-purpose programming language and toolchain for maintaining robust, optimal and reusable software."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.erlang.org/"},"erlang"),(0,l.kt)("br",null),"Practical functional programming for a parallel world"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://elm-lang.org/"},"elm"),(0,l.kt)("br",null),"A delightful language for reliable web applications.")),(0,l.kt)("h2",{id:"others-1"},"Others"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rsocket.io/"},"rsocket"),(0,l.kt)("br",null),"Application protocol providing Reactive Streams semantics"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/JetBrains/open-radiant"},"open-radiant"),(0,l.kt)("br",null),"JetBrains Branded Art Generator"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/TeamStuQ/skill-map"},"skill-map")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://vaadin.com/"},"vaadin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://ebpf.io/"},"ebpf"),(0,l.kt)("br",null),"Dynamically program the kernel for efficient networking, observability, tracing, and security"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.matrixorigin.cn/"},"matrixone"),(0,l.kt)("br",null),"Hyperconverged cloud-edge native database")))}d.isMDXComponent=!0}}]);