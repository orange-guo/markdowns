"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[2441],{2167:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>h,toc:()=>c});var t=n(85893),o=n(11151);const r={},i="ssh",h={id:"note/infra/linux/ssh",title:"ssh",description:"ssh-keygen",source:"@site/docs/note/infra/linux/ssh.md",sourceDirName:"note/infra/linux",slug:"/note/infra/linux/ssh",permalink:"/docs/note/infra/linux/ssh",draft:!1,unlisted:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/note/infra/linux/ssh.md",tags:[],version:"current",lastUpdatedBy:"Xiangcheng Kuo",lastUpdatedAt:1711945422,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{},sidebar:"note",previous:{title:"shell",permalink:"/docs/note/infra/linux/shell"},next:{title:"tar",permalink:"/docs/note/infra/linux/tar"}},a={},c=[{value:"ssh-keygen",id:"ssh-keygen",level:2},{value:"no matching host key type found. Their offer: ssh-rsa,ssh-dss",id:"no-matching-host-key-type-found-their-offer-ssh-rsassh-dss",level:2},{value:"change directory",id:"change-directory",level:2},{value:"How to Keep Alive SSH Sessions",id:"how-to-keep-alive-ssh-sessions",level:2}];function l(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"ssh",children:"ssh"}),"\n",(0,t.jsx)(s.h2,{id:"ssh-keygen",children:"ssh-keygen"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'echo "y" | ssh-keygen -f /tmp/id_rsa -N "" # generate new key\nssh-keygen -p -N "" -m pem -f /tmp/id_rsa # Openssh Private Key to RSA Private Key\n'})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://stackoverflow.com/questions/54994641/openssh-private-key-to-rsa-private-key",children:"https://stackoverflow.com/questions/54994641/openssh-private-key-to-rsa-private-key"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://superuser.com/questions/1720991/differences-between-begin-rsa-private-key-and-begin-openssh-private-key",children:"https://superuser.com/questions/1720991/differences-between-begin-rsa-private-key-and-begin-openssh-private-key"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://stackoverflow.com/questions/59524727/how-to-overwrite-existing-ssh-key-file-using-ssh-keygen-and-powershell-without-t",children:"https://stackoverflow.com/questions/59524727/how-to-overwrite-existing-ssh-key-file-using-ssh-keygen-and-powershell-without-t"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/zh_cn/cloudhsm/classic/userguide/generate_ssh_key.html",children:"https://docs.aws.amazon.com/zh_cn/cloudhsm/classic/userguide/generate_ssh_key.html"})}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"no-matching-host-key-type-found-their-offer-ssh-rsassh-dss",children:"no matching host key type found. Their offer: ssh-rsa,ssh-dss"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-log",children:"Unable to negotiate with 52.131.77.121 port 22: no matching host key type found. Their offer: ssh-rsa,ssh-dss\n"})}),"\n",(0,t.jsx)(s.p,{children:"solution"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"ssh -oHostKeyAlgorithms=+ssh-dss\n# The latest OpenSSH version disables RSA, if you run into the error now, you should use +ssh-rsa instead of +ssh-dss\nssh -oHostKeyAlgorithms=+ssh-rsa\n\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://askubuntu.com/questions/836048/ssh-returns-no-matching-host-key-type-found-their-offer-ssh-dss",children:"SSH returns: no matching host key type found. Their offer: ssh-dss"})}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"change-directory",children:"change directory"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'ssh -t user@host "cd /path/to/dir && command"\n'})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["-t Force pseudo-terminal allocation.",(0,t.jsx)("br",{}),"\nThis can be used to execute arbitrary screen-based programs on a remote machine, ",(0,t.jsx)("br",{}),"\nwhich can be very useful, e.g. when implementing menu services."]}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://stackoverflow.com/questions/626533/how-can-i-ssh-directly-to-a-particular-directory",children:"How can I ssh directly to a particular directory?"})}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"how-to-keep-alive-ssh-sessions",children:"How to Keep Alive SSH Sessions"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://patrickmn.com/aside/how-to-keep-alive-ssh-sessions/",children:"How to Keep Alive SSH Sessions"})}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>h,a:()=>i});var t=n(67294);const o={},r=t.createContext(o);function i(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function h(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);