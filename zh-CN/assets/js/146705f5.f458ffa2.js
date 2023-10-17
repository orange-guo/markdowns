"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[6060],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),k=i,f=u["".concat(p,".").concat(k)]||u[k]||d[k]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},38459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={},o="Principles",l={unversionedId:"collection/software-engineering/principles",id:"collection/software-engineering/principles",title:"Principles",description:"SOLID",source:"@site/docs/collection/software-engineering/principles.md",sourceDirName:"collection/software-engineering",slug:"/collection/software-engineering/principles",permalink:"/zh-CN/docs/collection/software-engineering/principles",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/collection/software-engineering/principles.md",tags:[],version:"current",lastUpdatedBy:"Xiangcheng Kuo",lastUpdatedAt:1697512215,formattedLastUpdatedAt:"2023\u5e7410\u670817\u65e5",frontMatter:{},sidebar:"collection",previous:{title:"\u65b9\u6cd5\u8bba",permalink:"/zh-CN/docs/collection/software-engineering/methodologies"},next:{title:"Tools",permalink:"/zh-CN/docs/category/tools"}},p={},c=[{value:"SOLID",id:"solid",level:2},{value:"Separation of concerns",id:"separation-of-concerns",level:2},{value:"Law of Demeter",id:"law-of-demeter",level:2},{value:"Don&#39;t repeat yourself",id:"dont-repeat-yourself",level:2},{value:"KISS principle(KISS\u539f\u5219)",id:"kiss-principlekiss\u539f\u5219",level:2},{value:"Pareto principle(\u5e15\u7d2f\u6258\u6cd5\u5219, \u4e8c\u516b\u6cd5\u5219)",id:"pareto-principle\u5e15\u7d2f\u6258\u6cd5\u5219-\u4e8c\u516b\u6cd5\u5219",level:2},{value:"You aren&#39;t gonna need it(\u4f60\u4e0d\u9700\u8981\u5b83)",id:"you-arent-gonna-need-it\u4f60\u4e0d\u9700\u8981\u5b83",level:2},{value:"Occam&#39;s razor(\u5965\u5361\u59c6\u5243\u5200\u539f\u7406)",id:"occams-razor\u5965\u5361\u59c6\u5243\u5200\u539f\u7406",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"principles"},"Principles"),(0,i.kt)("h2",{id:"solid"},"SOLID"),(0,i.kt)("p",null,"SOLID\u662f\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b(OOP)\u4e2d\u7684\u4e94\u4e2a\u57fa\u672c\u539f\u5219\uff0c\u5b83\u4eec\u5206\u522b\u662f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Single_responsibility_principle"},"Single responsibility principle")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle"},"Open\u2013closed principle")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Liskov_substitution_principle"},"Liskov substitution principle")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Interface_segregation_principle"},"Interface segregation principle")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Dependency_inversion_principle"},"Dependency inversion principle"))),(0,i.kt)("h2",{id:"separation-of-concerns"},"Separation of concerns"),(0,i.kt)("p",null,"Separation of concerns(SoC)\u662f\u6307\u5c06\u4e00\u4e2a\u7cfb\u7edf\u5206\u89e3\u4e3a\u4e00\u4e9b\u76f8\u4e92\u5206\u79bb\u7684\u90e8\u5206\uff0c\u6bcf\u4e2a\u90e8\u5206\u90fd\u6709\u81ea\u5df1\u7684\u804c\u8d23\uff0c\u8fd9\u4e9b\u90e8\u5206\u4e4b\u95f4\u4e92\u4e0d\u5e72\u6270\uff0c\u4e92\u4e0d\u5f71\u54cd\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Separation_of_concerns"},"Separation of concerns"))),(0,i.kt)("h2",{id:"law-of-demeter"},"Law of Demeter"),(0,i.kt)("p",null,"Law of Demeter(Law of Least Knowledge)\u662f\u6307\u4e00\u4e2a\u5bf9\u8c61\u5e94\u8be5\u5bf9\u5176\u4ed6\u5bf9\u8c61\u6709\u6700\u5c11\u7684\u4e86\u89e3\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u4e00\u4e2a\u5bf9\u8c61\u5e94\u8be5\u5bf9\u81ea\u5df1\u9700\u8981\u8026\u5408\u6216\u8005\u8c03\u7528\u7684\u7c7b\u77e5\u9053\u5f97\u6700\u5c11\u3002"),(0,i.kt)("h2",{id:"dont-repeat-yourself"},"Don't repeat yourself"),(0,i.kt)("p",null,"DRY\u539f\u5219\u662f\u6307\u5728\u8f6f\u4ef6\u5f00\u53d1\u4e2d\uff0c\u4e0d\u8981\u91cd\u590d\u81ea\u5df1\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u4e0d\u8981\u91cd\u590d\u81ea\u5df1\u7684\u4ee3\u7801\uff0c\u4e0d\u8981\u91cd\u590d\u81ea\u5df1\u7684\u601d\u60f3\uff0c\u4e0d\u8981\u91cd\u590d\u81ea\u5df1\u7684\u5de5\u4f5c\u3002"),(0,i.kt)("p",null,"-",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"},"Don't repeat yourself")),(0,i.kt)("h2",{id:"kiss-principlekiss\u539f\u5219"},"KISS principle(KISS\u539f\u5219)"),(0,i.kt)("p",null,"KISS\u539f\u5219\u662f\u6307Keep It Simple, Stupid\u7684\u7f29\u5199\uff0c\u610f\u601d\u662f\u5c3d\u91cf\u4fdd\u6301\u7b80\u5355\uff0c\u4e0d\u8981\u505a\u8fc7\u5ea6\u8bbe\u8ba1\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/KISS_principle"},"KISS principle"))),(0,i.kt)("h2",{id:"pareto-principle\u5e15\u7d2f\u6258\u6cd5\u5219-\u4e8c\u516b\u6cd5\u5219"},"Pareto principle(\u5e15\u7d2f\u6258\u6cd5\u5219, \u4e8c\u516b\u6cd5\u5219)"),(0,i.kt)("p",null,"\u5e15\u7d2f\u6258\u6cd5\u5219\uff0c\u53c8\u79f0\u4e8c\u516b\u6cd5\u5219\uff0c\u662f\u7531\u610f\u5927\u5229\u7ecf\u6d4e\u5b66\u5bb6\u5e15\u7d2f\u6258\u63d0\u51fa\u7684\uff0c\u6307\u7684\u662f\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c80%\u7684\u7ed3\u679c\u6765\u81ea20%\u7684\u539f\u56e0\u3002\u8fd9\u4e2a\u6cd5\u5219\u4e5f\u53ef\u4ee5\u7528\u6765\u63cf\u8ff0\u4e00\u4e2a\u4eba\u7684\u6536\u5165\uff0c80%\u7684\u6536\u5165\u6765\u81ea20%\u7684\u5de5\u4f5c\u3002\u8fd9\u4e2a\u6cd5\u5219\u4e5f\u53ef\u4ee5\u7528\u6765\u63cf\u8ff0\u4e00\u4e2a\u4eba\u7684\u6536\u5165\uff0c80%\u7684\u6536\u5165\u6765\u81ea20%\u7684\u5de5\u4f5c\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Pareto_principle"},"Pareto principle"))),(0,i.kt)("h2",{id:"you-arent-gonna-need-it\u4f60\u4e0d\u9700\u8981\u5b83"},"You aren't gonna need it(\u4f60\u4e0d\u9700\u8981\u5b83)"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You aren't gonna need\nit\uff08\u4f60\u4e0d\u9700\u8981\u5b83\uff09\u662f\u4e00\u79cd\u8f6f\u4ef6\u5de5\u7a0b\u7684\u8bbe\u8ba1\u539f\u5219\uff0c\u5b83\u6307\u51fa\u5728\u8bbe\u8ba1\u8f6f\u4ef6\u65f6\uff0c\u4e0d\u8981\u4e3a\u4e86\u53ef\u80fd\u7528\u5230\u7684\u529f\u80fd\u800c\u8bbe\u8ba1\u5b83\uff0c\u53ea\u8981\u5728\u771f\u6b63\u9700\u8981\u5b83\u7684\u65f6\u5019\u518d\u53bb\u8bbe\u8ba1\u5b83\u3002\u8fd9\u4e2a\u539f\u5219\u7684\u6838\u5fc3\u601d\u60f3\u662f\uff1a\u4e0d\u8981\u4e3a\u4e86\u53ef\u80fd\u7528\u5230\u7684\u529f\u80fd\u800c\u8bbe\u8ba1\u5b83\uff0c\u53ea\u8981\u5728\u771f\u6b63\u9700\u8981\u5b83\u7684\u65f6\u5019\u518d\u53bb\u8bbe\u8ba1\u5b83\u3002")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it"},"You aren't gonna need it"))),(0,i.kt)("h2",{id:"occams-razor\u5965\u5361\u59c6\u5243\u5200\u539f\u7406"},"Occam's razor(\u5965\u5361\u59c6\u5243\u5200\u539f\u7406)"),(0,i.kt)("p",null,"Occam's razor(\u5965\u5361\u59c6\u5243\u5200\u539f\u7406)\u662f\u4e00\u79cd\u903b\u8f91\u539f\u7406\uff0c\u5b83\u8ba4\u4e3a\uff0c\u5f53\u6709\u591a\u4e2a\u89e3\u91ca\u53ef\u4ee5\u89e3\u91ca\u4e00\u4e2a\u73b0\u8c61\u65f6\uff0c\u6700\u7b80\u5355\u7684\u89e3\u91ca\u662f\u6700\u53ef\u80fd\u7684\u89e3\u91ca\u3002\u8fd9\u4e2a\u539f\u7406\u662f\u7531William\nof Ockham(\u5965\u5361\u59c6)\u63d0\u51fa\u7684\uff0c\u4ed6\u662f\u4e00\u4e2a14\u4e16\u7eaa\u7684\u54f2\u5b66\u5bb6\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Occam%27s_razor"},"Occam's razor"))))}d.isMDXComponent=!0}}]);