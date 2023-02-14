"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[7605],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return t?n.createElement(f,c(c({ref:r},u),{},{components:t})):n.createElement(f,c({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[d]="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2256:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const a={},c="Image-Builder",l={unversionedId:"problem/image-builder",id:"problem/image-builder",title:"Image-Builder",description:"SELINUX\u6ca1\u6709\u5f00\u542f(cc-fs-head-centos)",source:"@site/docs/problem/image-builder.md",sourceDirName:"problem",slug:"/problem/image-builder",permalink:"/markdowns/docs/problem/image-builder",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/problem/image-builder.md",tags:[],version:"current",lastUpdatedBy:"xiangcheng.kuo",lastUpdatedAt:1676359388,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{},sidebar:"problem",previous:{title:"Gradle",permalink:"/markdowns/docs/problem/gradle"},next:{title:"Java",permalink:"/markdowns/docs/problem/java"}},i={},s=[{value:"SELINUX\u6ca1\u6709\u5f00\u542f(cc-fs-head-centos)",id:"selinux\u6ca1\u6709\u5f00\u542fcc-fs-head-centos",level:2},{value:"\u6ca1\u6709\u4e3aFsadmin\u7ec4\u914d\u7f6esudoer(cc-fs-head)",id:"\u6ca1\u6709\u4e3afsadmin\u7ec4\u914d\u7f6esudoercc-fs-head",level:2}],u={toc:s};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"image-builder"},"Image-Builder"),(0,o.kt)("h2",{id:"selinux\u6ca1\u6709\u5f00\u542fcc-fs-head-centos"},"SELINUX\u6ca1\u6709\u5f00\u542f(cc-fs-head-centos)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Oracle\u57fa\u7840\u955c\u50cf\u6ca1\u6709\u5173\u95edSELINUX, \u9700\u8981\u624b\u52a8\u5173\u95ed\nCentos\u9ed8\u8ba4\u5f00\u542fSELINUX, UBUNTU\u9ed8\u8ba4\u5173\u95ed")),(0,o.kt)("h2",{id:"\u6ca1\u6709\u4e3afsadmin\u7ec4\u914d\u7f6esudoercc-fs-head"},"\u6ca1\u6709\u4e3aFsadmin\u7ec4\u914d\u7f6esudoer(cc-fs-head)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u6dfb\u52a0feature\u5c06fsadmin\u7ec4\u52a0\u5165\u5230sudoers\u91cc\n/etc/sudoers.d/fastonetech-init-users"),(0,o.kt)("h1",{parentName:"blockquote",id:"user-rules-for-fastone"},"User rules for fastone"),(0,o.kt)("p",{parentName:"blockquote"},"fastone ALL=(ALL) NOPASSWD:ALL\n%fsadmin ALL=(ALL) NOPASSWD:ALL")))}d.isMDXComponent=!0}}]);