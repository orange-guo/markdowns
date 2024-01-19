"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[989],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(g,l(l({ref:t},s),{},{components:a})):n.createElement(g,l({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},11877:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(83117),r=(a(67294),a(3905));const o={},l="Jdk",i={unversionedId:"software-engineering/language/java/jdk",id:"software-engineering/language/java/jdk",title:"Jdk",description:"Website",source:"@site/docs/software-engineering/language/java/jdk.md",sourceDirName:"software-engineering/language/java",slug:"/software-engineering/language/java/jdk",permalink:"/zh-CN/docs/software-engineering/language/java/jdk",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/software-engineering/language/java/jdk.md",tags:[],version:"current",lastUpdatedBy:"Xiangcheng Kuo",lastUpdatedAt:1705633703,formattedLastUpdatedAt:"2024\u5e741\u670819\u65e5",frontMatter:{},sidebar:"softwareEngineering",previous:{title:"Java",permalink:"/zh-CN/docs/software-engineering/language/java/"},next:{title:"Spring",permalink:"/zh-CN/docs/software-engineering/language/java/spring"}},p={},u=[{value:"Website",id:"website",level:2},{value:"Openjdk",id:"openjdk",level:2},{value:"JEP",id:"jep",level:2}],s={toc:u},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"jdk"},"Jdk"),(0,r.kt)("h2",{id:"website"},"Website"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://openjdk.org/"},"https://openjdk.org/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/en/java/javase/index.html"},"Java Platform, Standard Edition Documentation"))),(0,r.kt)("h2",{id:"openjdk"},"Openjdk"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/openjdk/jdk"},"jdk"),(0,r.kt)("br",null),"JDK main-line development"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/openjdk/jol"},"jol"),(0,r.kt)("br",null),"Java Object Layout"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/openjdk/loom"},"loom"),(0,r.kt)("br",null),"Project Loom's mission is to make it easier to write, debug, profile and maintain concurrent applications meeting"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/openjdk/amber"},"amber"),(0,r.kt)("br",null),"Project Amber is the place to express, explore, and incubate next-generation features for the Java platform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/openjdk/valhalla"},"valhalla"),(0,r.kt)("br",null),"Project Valhalla is an OpenJDK project to develop major new features for the Java language. The project was"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/openjdk/jmc"},"jmc"),(0,r.kt)("br",null),"Repository for OpenJDK Mission Control, a production time profiling and diagnostics tools suite."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/openjdk/jfx"},"jfx"),(0,r.kt)("br",null),"JavaFX mainline development",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/CRaC/docs#crac"},"CRaC"),(0,r.kt)("br",null),"CRaC is a tool for analyzing the performance of Java applications. It is based on the Java Virtual Machine")),(0,r.kt)("h2",{id:"jep"},"JEP"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://openjdk.org/jeps/444"},"JEP 444"),(0,r.kt)("br",null),"JEP 444: Virtual Threads")))}m.isMDXComponent=!0}}]);