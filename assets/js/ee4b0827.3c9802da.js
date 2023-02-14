"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[384],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8163:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},l="Maven",s={unversionedId:"problem/maven",id:"problem/maven",title:"Maven",description:"Mavne\u591a\u4ed3\u5e93\u914d\u7f6e",source:"@site/docs/problem/maven.md",sourceDirName:"problem",slug:"/problem/maven",permalink:"/markdowns/docs/problem/maven",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/problem/maven.md",tags:[],version:"current",lastUpdatedBy:"xiangcheng.kuo",lastUpdatedAt:1676359388,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{},sidebar:"problem",previous:{title:"Linux",permalink:"/markdowns/docs/problem/linux"},next:{title:"Nginx",permalink:"/markdowns/docs/problem/nginx"}},i={},c=[{value:"Mavne\u591a\u4ed3\u5e93\u914d\u7f6e",id:"mavne\u591a\u4ed3\u5e93\u914d\u7f6e",level:2},{value:"Could not transfer artifact <code>xxx</code> from/to maven-default-http-blocker (http://0.0.0.0/)",id:"could-not-transfer-artifact-xxx-fromto-maven-default-http-blocker-http0000",level:2}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"maven"},"Maven"),(0,o.kt)("h2",{id:"mavne\u591a\u4ed3\u5e93\u914d\u7f6e"},"Mavne\u591a\u4ed3\u5e93\u914d\u7f6e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/25424338/maven-settings-for-multiple-repositories"},"Maven Settings for multiple repositories")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.tencent.com/developer/article/1677690"},"Maven\u914d\u7f6e\u591a\u4ed3\u5e93\u65e0\u6548\uff1f\u6765\u770b\u770b\u8fd9\u7bc7\u6587\u7ae0"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml" live',title:'"pom.xml"',live:!0},"\n<repositories>\n    <repository>\n        <id>fastone</id>\n        <url>http://nexus.fastonetech.com/repository/fastone-snapshot/</url>\n        <releases>\n            <enabled>true</enabled>\n        </releases>\n        <snapshots>\n            <enabled>true</enabled>\n            <updatePolicy>always</updatePolicy>\n        </snapshots>\n    </repository>\n    <repository>\n        <id>tencent</id>\n        <url>https://mirrors.tencent.com/nexus/repository/maven-public/</url>\n        <releases>\n            <enabled>true</enabled>\n        </releases>\n        <snapshots>\n            <enabled>true</enabled>\n            <updatePolicy>always</updatePolicy>\n        </snapshots>\n    </repository>\n</repositories>\n")),(0,o.kt)("h2",{id:"could-not-transfer-artifact-xxx-fromto-maven-default-http-blocker-http0000"},"Could not transfer artifact ",(0,o.kt)("inlineCode",{parentName:"h2"},"xxx")," from/to maven-default-http-blocker (",(0,o.kt)("a",{parentName:"h2",href:"http://0.0.0.0/"},"http://0.0.0.0/"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"[ERROR] Failed to execute goal on project specification-lib: Could not resolve dependencies for project com.fastonetech:specification-lib:jar:3.0.0-SNAPSHOT: Failed to collect dependencies at io.cucumber:cucumber-spring:jar:7.9.0 -> io.cucumber:cucumber-core:jar:7.9.0 -> io.cucumber:html-formatter:jar:20.1.0 -> io.cucumber:messages:jar:19.1.4-SNAPSHOT: Failed to read artifact descriptor for io.cucumber:messages:jar:19.1.4-SNAPSHOT: Could not transfer artifact io.cucumber:messages:pom:19.1.4-SNAPSHOT from/to maven-default-http-blocker (http://0.0.0.0/): Blocked mirror for repositories: [nexus-tencentyun (http://mirrors.tencent.com/nexus/repository/maven-public/, default, releases+snapshots), fastone (http://nexus.fastonetech.com/repository/fastone-snapshot/, default, releases+snapshots)] -> [Help 1]\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"(How to disable maven blocking external HTTP repositories?)","[https://stackoverflow.com/questions/67001968/how-to-disable-maven-blocking-external-http-repositories]")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="$project/.m2/settings.xml" live',title:'"$project/.m2/settings.xml"',live:!0},"\n<mirrors>\n    <mirror>\n        <id>fastone</id>\n        <mirrorOf>fastone</mirrorOf>\n        <name>fastone</name>\n        <url>http://nexus.fastonetech.com/repository/fastone-snapshot/</url>\n    </mirror>\n</mirrors>\n")))}m.isMDXComponent=!0}}]);