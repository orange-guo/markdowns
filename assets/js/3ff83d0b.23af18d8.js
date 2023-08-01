"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[2045],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||h[m]||l;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={},o="shell",s={unversionedId:"note/linux/shell",id:"note/linux/shell",title:"shell",description:"\u7528\u4f8b",source:"@site/docs/note/linux/shell.md",sourceDirName:"note/linux",slug:"/note/linux/shell",permalink:"/docs/note/linux/shell",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/note/linux/shell.md",tags:[],version:"current",lastUpdatedBy:"Xiangcheng Kuo",lastUpdatedAt:1690866787,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{},sidebar:"note",previous:{title:"process",permalink:"/docs/note/linux/process"},next:{title:"ssh",permalink:"/docs/note/linux/ssh"}},i={},c=[{value:"\u7528\u4f8b",id:"\u7528\u4f8b",level:2},{value:"bash\u5355\u5f15\u53f7\u5d4c\u5957",id:"bash\u5355\u5f15\u53f7\u5d4c\u5957",level:3},{value:"\u53bb\u9664\u5b57\u7b26\u4e32\u4e2d\u7684\u7a7a\u683c",id:"\u53bb\u9664\u5b57\u7b26\u4e32\u4e2d\u7684\u7a7a\u683c",level:3},{value:"Bash\u51fd\u6570\u8fd4\u56de\u503c",id:"bash\u51fd\u6570\u8fd4\u56de\u503c",level:3},{value:"\u6e05\u7a7a\u6587\u4ef6",id:"\u6e05\u7a7a\u6587\u4ef6",level:3},{value:"Bash\u4e2d\u7684\u6570\u7ec4",id:"bash\u4e2d\u7684\u6570\u7ec4",level:3},{value:"\u83b7\u53d6\u7279\u5b9a\u884c",id:"\u83b7\u53d6\u7279\u5b9a\u884c",level:3},{value:"Bash if..else Statement",id:"bash-ifelse-statement",level:3}],u={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"shell"},"shell"),(0,r.kt)("h2",{id:"\u7528\u4f8b"},"\u7528\u4f8b"),(0,r.kt)("h3",{id:"bash\u5355\u5f15\u53f7\u5d4c\u5957"},"bash\u5355\u5f15\u53f7\u5d4c\u5957"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'a'\"'\"'b' # a'b\necho 'a'\\''b'  # a'b\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/gongxin12/p/11363060.html#:~:text=%E5%8D%95%E5%BC%95%E5%8F%B7%E6%98%AF%E6%97%A0%E6%B3%95%E5%B5%8C,%E6%B2%A1%E6%9C%89%E8%B4%AA%E5%A9%AA%E6%89%AB%E6%8F%8F%E7%9A%84%E8%AF%B4%E6%B3%95%E3%80%82&text=%E6%9F%A5%E7%9C%8B%E4%BD%A0%E5%9C%A8shell%E4%B8%AD,%E5%A5%97%E5%8D%95%E5%BC%95%E5%8F%B7%E7%9A%84%E5%8A%9E%E6%B3%95%E3%80%82"},"bash\u5355\u5f15\u53f7\u5d4c\u5957"))),(0,r.kt)("h3",{id:"\u53bb\u9664\u5b57\u7b26\u4e32\u4e2d\u7684\u7a7a\u683c"},"\u53bb\u9664\u5b57\u7b26\u4e32\u4e2d\u7684\u7a7a\u683c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo \"a b c\" | tr -d ' ' # abc\necho \"a b c\" | sed 's/ //g' # abc\necho \"a b c\" | awk '{print $1$2$3}' # abc\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://linuxhint.com/trim_string_bash/"},"How to trim string in bash")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/weixin_42170236/article/details/119956202"},"Shell\uff1a\u7528sed\u547d\u4ee4\u5220\u9664\u7279\u5b9a\u884c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.51cto.com/u_10742668/1944831"},"Shell\u53bb\u9664\u7a7a\u683c\u548c\u7a7a\u884c\u7684\u65b9\u6cd5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/genghaihua/article/details/43308799"},"shell\u53bb\u6389\u6587\u4ef6\u4e2d\u7a7a\u884c(\u7a7a\u767d\u884c)\u7684\u65b9\u6cd5\u8be6\u89e3"))),(0,r.kt)("h3",{id:"bash\u51fd\u6570\u8fd4\u56de\u503c"},"Bash\u51fd\u6570\u8fd4\u56de\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# 1. global variable\nglobal_var=0\nfunction test() {\n  global_var=1\n}\necho $global_var # 0\n\n# 2. local variables\nfunction test() {\n  local local_var=1\n  echo $local_var\n}\necho $(test) # 1\n\n# 3. return code\nfunction test() {\n  return 2\n}\necho $(test) # 2\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linuxjournal.com/content/return-values-bash-functions"},"Returning Values from Bash Functions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/17336915/return-value-in-a-bash-function"},"Return value in a Bash function"))),(0,r.kt)("h3",{id:"\u6e05\u7a7a\u6587\u4ef6"},"\u6e05\u7a7a\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "" > file \ncp /dev/null file\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.51cto.com/u_10624715/3232522"},"linux\u51e0\u79cd\u5feb\u901f\u6e05\u7a7a\u6587\u4ef6\u5185\u5bb9\u7684\u65b9\u6cd5"))),(0,r.kt)("h3",{id:"bash\u4e2d\u7684\u6570\u7ec4"},"Bash\u4e2d\u7684\u6570\u7ec4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# 1. \u5b9a\u4e49\u6570\u7ec4\narray=(1 2 3 4 5)\n\n# 2. \u83b7\u53d6\u6570\u7ec4\u957f\u5ea6\necho ${#array[@]} # 5\n\n# 3. \u83b7\u53d6\u6570\u7ec4\u5143\u7d20\necho ${array[0]} # 1\n\n# 4. \u904d\u5386\u6570\u7ec4\nfor i in ${array[@]}; do\n  echo $i\ndone\n\n# 5. \u6570\u7ec4\u62fc\u63a5\narray2=(6 7 8 9 10)\narray3=(${array[@]} ${array2[@]})\necho ${array3[@]} # 1 2 3 4 5 6 7 8 9 10\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.hostinger.com/tutorials/bash-array#:~:text=A%20bash%20array%20is%20a,store%20different%20types%20of%20elements."},"How to Use Bash Arrays"))),(0,r.kt)("h3",{id:"\u83b7\u53d6\u7279\u5b9a\u884c"},"\u83b7\u53d6\u7279\u5b9a\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u83b7\u53d6\u7b2c\u4e00\u884c\nhead -n 1 file \n# \u83b7\u53d6\u6700\u540e\u4e00\u884c\ntail -n 1 file \n# \u83b7\u53d6\u7b2c\u4e09\u884c\nsed -n '3p' file \n# \u83b7\u53d6\u7b2c\u4e09\u884c\u5230\u7b2c\u4e94\u884c\nsed -n '3,5p' file\n")),(0,r.kt)("h3",{id:"bash-ifelse-statement"},"Bash if..else Statement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://linuxize.com/post/bash-if-else-statement/"},"Bash if..else Statement"))))}h.isMDXComponent=!0}}]);