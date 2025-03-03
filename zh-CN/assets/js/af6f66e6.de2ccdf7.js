"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[17479],{74283:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"software-engineering/ops/openvpn","title":"Openvpn","description":"References","source":"@site/docs/software-engineering/ops/openvpn.md","sourceDirName":"software-engineering/ops","slug":"/software-engineering/ops/openvpn","permalink":"/zh-CN/docs/software-engineering/ops/openvpn","draft":false,"unlisted":false,"editUrl":"https://github.com/orange-guo/markdowns/tree/master/docs/software-engineering/ops/openvpn.md","tags":[],"version":"current","lastUpdatedBy":"Xiangcheng Kuo","lastUpdatedAt":1740990801000,"frontMatter":{},"sidebar":"softwareEngineering","previous":{"title":"Keycloak","permalink":"/zh-CN/docs/software-engineering/ops/identity-providers/keycloak"},"next":{"title":"OS","permalink":"/zh-CN/docs/software-engineering/ops/os"}}');var i=t(74848),s=t(28453);const o={},a="Openvpn",c={},h=[{value:"References",id:"references",level:2},{value:"Ethernet Bridging",id:"ethernet-bridging",level:3},{value:"Errors",id:"errors",level:2}];function l(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"openvpn",children:"Openvpn"})}),"\n",(0,i.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,i.jsx)(n.h3,{id:"ethernet-bridging",children:"Ethernet Bridging"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://openvpn.net/community-resources/ethernet-bridging/",children:"Ethernet Bridging"}),"\n",(0,i.jsx)("br",{}),"Ethernet bridging essentially involves combining an ethernet interface with one or more virtual TAP interfaces\nand bridging them together under the umbrella of a single bridge interface. Ethernet bridges represent the software\nanalog to a physical ethernet switch. The ethernet bridge can be thought of as a kind of software switch which can be\nused to connect multiple ethernet interfaces (either physical or virtual) on a single machine while sharing a single\nIP subnet.",(0,i.jsx)("br",{}),"By bridging a physical ethernet NIC with an OpenVPN-driven TAP interface at two separate locations, it\nis possible to logically merge both ethernet networks, as if they were a single ethernet subnet."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"errors",children:"Errors"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://openvpn.net/faq/tls-error-tls-key-negotiation-failed-to-occur-within-60-seconds-check-your-network-connectivity/",children:"TLS Error: TLS key negotiation failed to occur within 60 seconds (check your network connectivity)"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);