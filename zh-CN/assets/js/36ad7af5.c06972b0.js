"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[8921],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7028:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const o={authors:["xiangcheng.kuo"],tags:["java","curated-list"]},i="Java\u76f8\u5173\u6280\u672f\u5217\u8868",l={unversionedId:"collection/curated-list/curated-list-java",id:"collection/curated-list/curated-list-java",title:"Java\u76f8\u5173\u6280\u672f\u5217\u8868",description:"\u4ee5\u4e0b\u662f",source:"@site/docs/collection/curated-list/curated-list-java.md",sourceDirName:"collection/curated-list",slug:"/collection/curated-list/curated-list-java",permalink:"/zh-CN/docs/collection/curated-list/curated-list-java",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/collection/curated-list/curated-list-java.md",tags:[{label:"java",permalink:"/zh-CN/docs/tags/java"},{label:"curated-list",permalink:"/zh-CN/docs/tags/curated-list"}],version:"current",lastUpdatedBy:"xiangcheng.kuo",lastUpdatedAt:1681092907,formattedLastUpdatedAt:"2023\u5e744\u670810\u65e5",frontMatter:{authors:["xiangcheng.kuo"],tags:["java","curated-list"]},sidebar:"collection",previous:{title:"\u524d\u7aef\u76f8\u5173\u6280\u672f\u5217\u8868",permalink:"/zh-CN/docs/collection/curated-list/curated-list-frontend"},next:{title:"Kotlin\u76f8\u5173\u6280\u672f\u5217\u8868",permalink:"/zh-CN/docs/collection/curated-list/curated-list-kotlin"}},s={},u=[{value:"Testing",id:"testing",level:2},{value:"Workflow",id:"workflow",level:2},{value:"Language Extension",id:"language-extension",level:2},{value:"Framework",id:"framework",level:2},{value:"Console",id:"console",level:2},{value:"Command Execution",id:"command-execution",level:2},{value:"AOT",id:"aot",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"java\u76f8\u5173\u6280\u672f\u5217\u8868"},"Java\u76f8\u5173\u6280\u672f\u5217\u8868"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u662f"),(0,n.kt)("h2",{id:"testing"},"Testing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://approvaltests.com/"},"approval-tests"),(0,n.kt)("br",null),"Unit testing asserts can be difficult to use. Approval tests simplify this by taking a snapshot of the results, and confirming that they have not changed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.testcontainers.org/"},"Testcontainers"),(0,n.kt)("br",null),"Testcontainers is a Java library that supports JUnit tests, providing lightweight, throwaway instances of common databases, Selenium web browsers, or anything else that can run in a Docker container.")),(0,n.kt)("h2",{id:"workflow"},"Workflow"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://conductor.netflix.com/"},"conductor"),(0,n.kt)("br",null),"Conductor is a platform created by Netflix to orchestrate workflows that span across microservices."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.flowable.com/"},"flowable"),(0,n.kt)("br",null),"A compact and highly efficient workflow and Business Process Management (BPM) platform for developers, system admins and business users."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/camunda/camunda-bpm-platform"},"camunda"),(0,n.kt)("br",null),"Flexible framework for workflow and decision automation with BPMN and DMN. Integration with Spring, Spring Boot, CDI."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Activiti/Activiti"},"Activiti"),(0,n.kt)("br",null),"Activiti is a light-weight workflow and Business Process Management (BPM) Platform targeted at business people, developers and system admins. Its core is a super-fast and rock-solid BPMN 2 process engine for Java. It's open-source and distributed under the Apache license. Activiti runs in any Java application, on a server, on a cluster or in the\u2026"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://airflow.apache.org/"},"Airflow"),(0,n.kt)("br",null),"Airflow is a platform created by the community to programmatically author, schedule and monitor workflows.")),(0,n.kt)("h2",{id:"language-extension"},"Language Extension"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://projectlombok.org/"},"Project Lombok"),(0,n.kt)("br",null),"Project Lombok is a java library that automatically plugs into your editor and build tools, spicing up your java.",(0,n.kt)("br",null),"Never write another getter or equals method again, with one annotation your class has a fully featured builder, Automate your logging variables, and much more."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://manifold.systems/"},"Manifold"),(0,n.kt)("br",null),"Manifold is a Java compiler plugin, its features include Metaprogramming, Properties, Extension Methods, Operator Overloading, Templates, a Preprocessor, and more.")),(0,n.kt)("h2",{id:"framework"},"Framework"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-boot"},"spring-boot"),(0,n.kt)("br",null),'Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can "just run".',(0,n.kt)("br",null),"We take an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss. Most Spring Boot applications need minimal Spring configuration.",(0,n.kt)("br",null),"If you\u2019re looking for information about a specific version, or instructions about how to upgrade from an earlier release, check out the project release notes section on our wiki."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://helidon.io/"},"helidon"),(0,n.kt)("br",null),"Helidon is a cloud-native, open\u2011source set of Java libraries for writing microservices that run on a fast web core powered by Netty."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://micronaut.io/"},"micronaut"),(0,n.kt)("br",null),"A MODERN, JVM-BASED, FULL-STACK FRAMEWORK FOR BUILDING MODULAR, EASILY TESTABLE MICROSERVICE AND SERVERLESS APPLICATIONS"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://vertx.io/"},"vert.x"),(0,n.kt)("br",null),"Eclipse Vert.x\u2122 Reactive applications on the JVM."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://quarkus.io/"},"quarkus"),(0,n.kt)("br",null),"A Kubernetes Native Java stack tailored for OpenJDK HotSpot and GraalVM, crafted from the best of breed Java libraries and standards."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-modulith"},"spring-modulith"),(0,n.kt)("br",null),"Spring Modulith allows developers to build well-structured Spring Boot applications and guides developers in finding and working with application modules driven by the domain. It supports the verification of such modular arrangements, integration testing individual modules, observing the application\u2019s behavior on the module level and creating documentation snippets based on the arrangement created."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://javalin.io/"},"javalin"),(0,n.kt)("br",null),"A simple web framework for Java and Kotlin")),(0,n.kt)("h2",{id:"console"},"Console"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/jline/jline3"},"jline"),(0,n.kt)("br",null),"JLine is a Java library for handling console input.")),(0,n.kt)("h2",{id:"command-execution"},"Command Execution"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/commons-exec"},"commons-exec"),(0,n.kt)("br",null),"Apache Commons Exec."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zeroturnaround/zt-exec"},"zt-exec"),(0,n.kt)("br",null),"ZeroTurnaround Process Executor."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/mina-sshd"},"mina-sshd"),(0,n.kt)("br",null),"Apache MINA sshd is a comprehensive Java library for client- and server-side SSH."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hierynomus/sshj"},"sshj"),(0,n.kt)("br",null),"ssh, scp and sftp for java.")),(0,n.kt)("h2",{id:"aot"},"AOT"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.graalvm.org/"},"graalvm"),(0,n.kt)("br",null),"GraalVM is a high-performance, polyglot virtual machine for running applications written in JavaScript, Python, Ruby, R, JVM-based languages like Java, Scala, Kotlin, and LLVM-based languages such as C and C++.")),(0,n.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/akullpp/awesome-java"},"awesome-java"),(0,n.kt)("br",null),"A curated list of awesome frameworks, libraries and software for the Java programming language.")))}m.isMDXComponent=!0}}]);