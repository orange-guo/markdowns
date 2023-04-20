"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[6233],{3905:(e,t,s)=>{s.d(t,{Zo:()=>h,kt:()=>m});var n=s(7294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,n,r=function(e,t){if(null==e)return{};var s,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)s=o[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)s=o[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var s=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=c(s),d=r,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return s?n.createElement(m,a(a({ref:t},h),{},{components:s})):n.createElement(m,a({ref:t},h))}));function m(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=s.length,a=new Array(o);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<o;c++)a[c]=s[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,s)}d.displayName="MDXCreateElement"},8288:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=s(7462),r=(s(7294),s(3905));const o={},a="ssh",i={unversionedId:"note/linux/ssh",id:"note/linux/ssh",title:"ssh",description:"ssh-keygen",source:"@site/docs/note/linux/ssh.md",sourceDirName:"note/linux",slug:"/note/linux/ssh",permalink:"/docs/note/linux/ssh",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/note/linux/ssh.md",tags:[],version:"current",lastUpdatedBy:"xiangcheng.kuo",lastUpdatedAt:1681962746,formattedLastUpdatedAt:"Apr 20, 2023",frontMatter:{},sidebar:"note",previous:{title:"shell",permalink:"/docs/note/linux/shell"},next:{title:"tar",permalink:"/docs/note/linux/tar"}},l={},c=[{value:"ssh-keygen",id:"ssh-keygen",level:2},{value:"no matching host key type found. Their offer: ssh-rsa,ssh-dss",id:"no-matching-host-key-type-found-their-offer-ssh-rsassh-dss",level:2},{value:"change directory",id:"change-directory",level:2},{value:"How to Keep Alive SSH Sessions",id:"how-to-keep-alive-ssh-sessions",level:2}],h={toc:c},u="wrapper";function p(e){let{components:t,...s}=e;return(0,r.kt)(u,(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ssh"},"ssh"),(0,r.kt)("h2",{id:"ssh-keygen"},"ssh-keygen"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "y" | ssh-keygen -f /tmp/id_rsa -N "" # generate new key\nssh-keygen -p -N "" -m pem -f /tmp/id_rsa # Openssh Private Key to RSA Private Key\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/54994641/openssh-private-key-to-rsa-private-key"},"https://stackoverflow.com/questions/54994641/openssh-private-key-to-rsa-private-key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://superuser.com/questions/1720991/differences-between-begin-rsa-private-key-and-begin-openssh-private-key"},"https://superuser.com/questions/1720991/differences-between-begin-rsa-private-key-and-begin-openssh-private-key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/59524727/how-to-overwrite-existing-ssh-key-file-using-ssh-keygen-and-powershell-without-t"},"https://stackoverflow.com/questions/59524727/how-to-overwrite-existing-ssh-key-file-using-ssh-keygen-and-powershell-without-t")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/zh_cn/cloudhsm/classic/userguide/generate_ssh_key.html"},"https://docs.aws.amazon.com/zh_cn/cloudhsm/classic/userguide/generate_ssh_key.html"))),(0,r.kt)("h2",{id:"no-matching-host-key-type-found-their-offer-ssh-rsassh-dss"},"no matching host key type found. Their offer: ssh-rsa,ssh-dss"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"Unable to negotiate with 52.131.77.121 port 22: no matching host key type found. Their offer: ssh-rsa,ssh-dss\n")),(0,r.kt)("p",null,"solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -oHostKeyAlgorithms=+ssh-dss\n# The latest OpenSSH version disables RSA, if you run into the error now, you should use +ssh-rsa instead of +ssh-dss\nssh -oHostKeyAlgorithms=+ssh-rsa\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://askubuntu.com/questions/836048/ssh-returns-no-matching-host-key-type-found-their-offer-ssh-dss"},"SSH returns: no matching host key type found. Their offer: ssh-dss"))),(0,r.kt)("h2",{id:"change-directory"},"change directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'ssh -t user@host "cd /path/to/dir && command"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"-t Force pseudo-terminal allocation.",(0,r.kt)("br",null),"\nThis can be used to execute arbitrary screen-based programs on a remote machine, ",(0,r.kt)("br",null),"\nwhich can be very useful, e.g. when implementing menu services.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/626533/how-can-i-ssh-directly-to-a-particular-directory"},"How can I ssh directly to a particular directory?"))),(0,r.kt)("h2",{id:"how-to-keep-alive-ssh-sessions"},"How to Keep Alive SSH Sessions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://patrickmn.com/aside/how-to-keep-alive-ssh-sessions/"},"How to Keep Alive SSH Sessions"))))}p.isMDXComponent=!0}}]);