"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[138],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},68058:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(83117),n=(a(67294),a(3905));const i={},o="Others",l={unversionedId:"software-engineering/others",id:"software-engineering/others",title:"Others",description:"Data Access",source:"@site/docs/software-engineering/others.md",sourceDirName:"software-engineering",slug:"/software-engineering/others",permalink:"/docs/software-engineering/others",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/software-engineering/others.md",tags:[],version:"current",lastUpdatedBy:"Xiangcheng Kuo",lastUpdatedAt:1705633703,formattedLastUpdatedAt:"Jan 19, 2024",frontMatter:{},sidebar:"softwareEngineering",previous:{title:"Methodologies",permalink:"/docs/software-engineering/methodologies"},next:{title:"Principles",permalink:"/docs/software-engineering/principles"}},s={},p=[{value:"Data Access",id:"data-access",level:2},{value:"build",id:"build",level:2},{value:"Infrastructure as Code",id:"infrastructure-as-code",level:2},{value:"Security",id:"security",level:2},{value:"Others",id:"others-1",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Code Art",id:"code-art",level:2},{value:"OpenAPI",id:"openapi",level:2},{value:"Monitoring",id:"monitoring",level:2},{value:"Paas",id:"paas",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"others"},"Others"),(0,n.kt)("h2",{id:"data-access"},"Data Access"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rclone/rclone"},"rclone"),(0,n.kt)("br",null),'\n"rsync for cloud storage"-Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud\nStorage, Yandex Files'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/juicedata/juicefs"},"juicefs"),(0,n.kt)("br",null),"\nJuiceFS is a distributed POSIX file system built on top of Redis and S3."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://min.io/"},"minio"),(0,n.kt)("br",null),"MinIO offers high-performance, S3 compatible object storage. Native to Kubernetes, MinIO is the only object storage suite available on every public cloud, every Kubernetes distribution, the private cloud and the edge. MinIO is software-defined and is 100% open source under GNU AGPL v3."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cognusion/fuse-copyfs"},"fuse-copyfs"),(0,n.kt)("br",null),"CopyFS is the copy-on-write (COW) versioned filesystem for FUSE. Years ago I added features to CopyFS 1.0, then 1.0.1 came out and I never bothered to forward-port my changes. Now I have. Master is 1.3.1M, which is CopyFS 1.0.1 + 1.3M"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-opendal"},"incubator-opendal"),(0,n.kt)("br",null),"Apache OpenDAL: access data freely.")),(0,n.kt)("h2",{id:"build"},"build"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://paketo.io/"},"paketo"),(0,n.kt)("br",null),"Your app,",(0,n.kt)("br",null),"in your favorite language,",(0,n.kt)("br",null),"ready to run in the cloud",(0,n.kt)("br",null))),(0,n.kt)("h2",{id:"infrastructure-as-code"},"Infrastructure as Code"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ansible/ansible"},"ansible"),(0,n.kt)("br",null),"Ansible is a radically simple IT automation platform that makes your applications and systems easier to deploy and maintain. Automate everything from code deployment to network configuration to cloud management, in a language that approaches plain English, using SSH, with no agents to install on remote systems. https://docs.ansible.com."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hashicorp/terraform"},"terraform"),(0,n.kt)("br",null),"erraform enables you to safely and predictably create, change, and improve infrastructure. It is a source-available tool that codifies APIs into declarative configuration files that can be shared amongst team members, treated as code, edited, reviewed, and versioned."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/futurice/terraform-examples"},"terraform-examples"),(0,n.kt)("br",null),"Terraform samples for all the major clouds you can copy and paste. The future, co-created.")),(0,n.kt)("h2",{id:"security"},"Security"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://casbin.org/"},"casbin"),(0,n.kt)("br",null),"An authorization library that supports access control models like ACL, RBAC, ABAC in Golang")),(0,n.kt)("h2",{id:"others-1"},"Others"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JetBrains/open-radiant"},"open-radiant"),(0,n.kt)("br",null),"JetBrains Branded Art Generator"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/TeamStuQ/skill-map"},"skill-map")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://vaadin.com/"},"vaadin")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ebpf.io/"},"ebpf"),(0,n.kt)("br",null),"Dynamically program the kernel for efficient networking, observability, tracing, and security"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.matrixorigin.cn/"},"matrixone"),(0,n.kt)("br",null),"Hyperconverged cloud-edge native database"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hashicorp/hcl"},"hcl"),(0,n.kt)("br",null),"HCL is the HashiCorp configuration language.")),(0,n.kt)("h2",{id:"documentation"},"Documentation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rust-lang/mdBook"},"mdBook"),(0,n.kt)("br",null),"Create book from markdown files. Like Gitbook but implemented in Rust"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mkdocs/mkdocs"},"mkdocs"),(0,n.kt)("br",null),"Project documentation with Markdown."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/docsifyjs/docsify/"},"docsify"),(0,n.kt)("br",null),"\ud83c\udccf A magical documentation site generator."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebook/docusaurus"},"docusaurus"),(0,n.kt)("br",null),"Easy to maintain open source documentation websites."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/signcl/docusaurus-prince-pdf"},"docusaurus-prince-pdf"),(0,n.kt)("br",null),"Docusaurus PDF generator using Prince XML")),(0,n.kt)("h2",{id:"code-art"},"Code Art"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://mp.weixin.qq.com/s/0HXmHpb658DvSQpAZUQWew"},"\u201cIDE \u542f\u52a8\u753b\u9762\u662f\u5982\u4f55\u8bde\u751f\u7684\uff1f\u201d | JetBrains AI \u56fe\u5f62\u53d1\u5c55\u53f2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.jetbrains.com/blog/2020/09/29/intelligent-code-art/"},"Intelligent Code Art")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://gradient-public.labs.jb.gg/"},"Gradient"),(0,n.kt)("br",null),"We propose a rethinking of the gradient concept as a spatial expression of time, the fundamental basis of any dynamics, any movement and any drive."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dots.labs.jb.gg/"},"dots.labs.jb.gg")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://code2art.jetbrains.com/"},"Eidos - Code2Art 2023")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cai.jetbrains.com/"},"Computational Arts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/company/brand/desktop-art/"},"Desktop Art")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tiler.labs.jb.gg/"},"Tiler"),(0,n.kt)("br",null),"We implemented a collaborative approach that combined individual artistic expression with a computational tiling algorithm.")),(0,n.kt)("h2",{id:"openapi"},"OpenAPI"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/OpenAPITools/openapi-generator-cli"},"openapi-generator-cli"),(0,n.kt)("br",null),"A node package wrapper for https://github.com/OpenAPITools/openapi-generator"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/drwpow/openapi-typescript"},"openapi-typescript"),(0,n.kt)("br",null),"Generate TypeScript types from OpenAPI 3 specs")),(0,n.kt)("h2",{id:"monitoring"},"Monitoring"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/getsentry/sentry"},"sentry"),(0,n.kt)("br",null),"Developer-first error tracking and performance monitoring"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/getsentry/self-hosted"},"self-hosted"),(0,n.kt)("br",null),"Sentry, feature-complete and packaged up for low-volume deployments and proofs-of-concept"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/prometheus/alertmanager"},"alertmanager"),(0,n.kt)("br",null),"Prometheus Alertmanager"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zabbix/zabbix"},"zabbix"),(0,n.kt)("br",null),"Real-time monitoring of IT components and services, such as networks, servers, VMs, applications and the cloud."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Icinga/icinga2"},"icinga2"),(0,n.kt)("br",null),"The core of our monitoring platform with a powerful configuration language and REST API."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/NagiosEnterprises/nagioscore"},"nagioscore"),(0,n.kt)("br",null),"Nagios Core"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/samber/awesome-prometheus-alerts"},"awesome-prometheus-alerts"),(0,n.kt)("br",null),"\ud83d\udea8 Collection of Prometheus alerting rules")),(0,n.kt)("h2",{id:"paas"},"Paas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hashicorp/nomad"},"nomad"),(0,n.kt)("br",null),"Nomad is an easy-to-use, flexible, and performant workload orchestrator that can deploy a mix of microservice, batch, containerized, and non-containerized applications. Nomad is easy to operate and scale and has native Consul and Vault integrations.")))}m.isMDXComponent=!0}}]);