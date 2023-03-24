"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[7966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,d=p["".concat(s,".").concat(m)]||p[m]||g[m]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={authors:["xiangcheng.kuo"],tags:["problem-solving","testcontainers","docker"]},i="\u5728TestContainers\u4e2d\u5b9e\u73b0Docker registry\u8ba4\u8bc1",c={permalink:"/markdowns/blog/2023/02/08/testcontainers-docker-registry",source:"@site/blog/2023-02-08/testcontainers-docker-registry.md",title:"\u5728TestContainers\u4e2d\u5b9e\u73b0Docker registry\u8ba4\u8bc1",description:"\u5728docker registry\u914d\u7f6e\u4e86\u8ba4\u8bc1\u540e, \u9879\u76ee\u4e2dCICD\u4e2d\u8fd0\u884c\u7684test case\u5931\u8d25, \u9519\u8bef\u65e5\u5fd7\u5982\u4e0b",date:"2023-02-08T00:00:00.000Z",formattedDate:"February 8, 2023",tags:[{label:"problem-solving",permalink:"/markdowns/blog/tags/problem-solving"},{label:"testcontainers",permalink:"/markdowns/blog/tags/testcontainers"},{label:"docker",permalink:"/markdowns/blog/tags/docker"}],readingTime:.99,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","testcontainers","docker"]},prevItem:{title:"JDK\u6539\u8fdb\u9879\u76ee\u7684\u4ecb\u7ecd",permalink:"/markdowns/blog/2023/02/09/openjdk-project"},nextItem:{title:"TestContainers\u542f\u52a8\u5b8cfastone-auditing\u5bb9\u5668\u540e\u5ba2\u6237\u7aef\u8fde\u63a5\u62a5\u9519",permalink:"/markdowns/blog/2022/12/29/testcontainers-connection-reset"}},s={authorsImageUrls:[void 0]},l=[{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"docker registry"),"\u914d\u7f6e\u4e86\u8ba4\u8bc1\u540e, \u9879\u76ee\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"CICD"),"\u4e2d\u8fd0\u884c\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"test case"),"\u5931\u8d25, \u9519\u8bef\u65e5\u5fd7\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},'Caused by: org.testcontainers.containers.ContainerFetchException: Can\'t get Docker image: RemoteDockerImage(imageName=hub.fastonetech.com/cce/fastone-auditing:latest, imagePullPolicy=AlwaysPullPolicy(), imageNameSubstitutor=org.testcontainers.utility.ImageNameSubstitutor$LogWrappedImageNameSubstitutor@3b68a50c)\n    at app//org.testcontainers.containers.GenericContainer.getDockerImageName(GenericContainer.java:1371)\n    at app//org.testcontainers.containers.GenericContainer.logger(GenericContainer.java:651)\n    at app//org.testcontainers.containers.GenericContainer.doStart(GenericContainer.java:331)\n    ... 153 more\nCaused by: org.testcontainers.containers.ContainerFetchException: Failed to pull image: hub.fastonetech.com/cce/fastone-auditing:latest\n    at app//org.testcontainers.images.RemoteDockerImage.resolve(RemoteDockerImage.java:119)\n    at app//org.testcontainers.images.RemoteDockerImage.resolve(RemoteDockerImage.java:28)\n    at app//org.testcontainers.utility.LazyFuture.getResolvedValue(LazyFuture.java:17)\n    at app//org.testcontainers.utility.LazyFuture.get(LazyFuture.java:39)\n    at app//org.testcontainers.containers.GenericContainer.getDockerImageName(GenericContainer.java:1369)\n    ... 155 more\nCaused by: com.github.dockerjava.api.exception.InternalServerErrorException: Status 500: {"message":"unauthorized: unauthorized to access repository: cce/fastone-auditing, action: pull: unauthorized to access repository: cce/fastone-auditing, action: pull"}\n\n    at app//org.testcontainers.shaded.com.github.dockerjava.core.DefaultInvocationBuilder.execute(DefaultInvocationBuilder.java:247)\n    at app//org.testcontainers.shaded.com.github.dockerjava.core.DefaultInvocationBuilder.lambda$executeAndStream$1(DefaultInvocationBuilder.java:269)\n    at java.base@17.0.1/java.lang.Thread.run(Thread.java:833)\n')),(0,a.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("p",null,"\u6839\u636e\u4e0a\u8ff0\u65e5\u5fd7\u4e2d\u7684\u5173\u952e\u4fe1\u606f\u5f97\u51fa\u7531\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"docker registry"),"\u672a\u8ba4\u8bc1\u5bfc\u81f4\u8be5\u95ee\u9898\u7684\u51fa\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},'Caused by: com.github.dockerjava.api.exception.InternalServerErrorException: Status 500: {"message":"unauthorized: unauthorized to access repository: cce/fastone-auditing, action: pull: unauthorized to access repository: cce/fastone-auditing, action: pull"}\n')),(0,a.kt)("p",null,"\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"docker login"),"\u547d\u4ee4\uff0c\u7136\u540e\u4ece",(0,a.kt)("inlineCode",{parentName:"p"},"~/.docker/config.json"),"\u4e2d\u83b7\u53d6\u8ba4\u8bc1\u4fe1\u606f\u4f5c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"DOCKER_AUTH_CONFIG"),"\u73af\u5883\u53d8\u91cf\u7684\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'docker login -u <username> -p <password> <registry>\nDOCKER_AUTH_CONFIG=""\nDOCKER_AUTH_CONFIG=$(cat ~/.docker/config.json)\nexport DOCKER_AUTH_CONFIG\n')),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.testcontainers.org/supported_docker_environment/#docker-registry-authentication"},"Docker registry authentication"))))}p.isMDXComponent=!0}}]);