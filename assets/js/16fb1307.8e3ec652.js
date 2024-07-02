"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[89393],{5800:(e,t,n)=>{n.r(t),n.d(t,{Example:()=>h,assets:()=>u,contentTitle:()=>d,default:()=>w,frontMatter:()=>f,metadata:()=>c,snowflake:()=>g,toc:()=>m});var o=n(74848),r=n(28453);function s(e,t,n){for(var o=[],r=Math.max(e.length,t.length),s=0,i=0;i<r||s;){var a=s+(i<e.length?e[i]:0)+(i<t.length?t[i]:0);o.push(a%n),s=Math.floor(a/n),i++}return o}function i(e,t,n){if(e<0)return null;if(0==e)return[];for(var o=[],r=t;1&e&&(o=s(o,r,n)),0!=(e>>=1);)r=s(r,r,n);return o}function a(e,t,n){var o=function(e,t){for(var n=e.split(""),o=[],r=n.length-1;r>=0;r--){var s=parseInt(n[r],t);if(isNaN(s))return null;o.push(s)}return o}(e,t);if(null===o)return null;for(var r=[],a=[1],l=0;l<o.length;l++)o[l]&&(r=s(r,i(o[l],a,n),n)),a=i(t,a,n);var f="";for(l=r.length-1;l>=0;l--)f+=r[l].toString(n);return f}var l=n(96540);const f={},d="Snowflake id generation",c={id:"software-engineering/development/tools/snowflake-id-generation",title:"Snowflake id generation",description:"",source:"@site/docs/software-engineering/development/tools/snowflake-id-generation.mdx",sourceDirName:"software-engineering/development/tools",slug:"/software-engineering/development/tools/snowflake-id-generation",permalink:"/docs/software-engineering/development/tools/snowflake-id-generation",draft:!1,unlisted:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/software-engineering/development/tools/snowflake-id-generation.mdx",tags:[],version:"current",lastUpdatedBy:"Xiangcheng Kuo",lastUpdatedAt:1719905139e3,frontMatter:{},sidebar:"softwareEngineering",previous:{title:"estimate-time",permalink:"/docs/software-engineering/development/tools/estimate-time"},next:{title:"Architecture",permalink:"/docs/software-engineering/development/architecture"}},u={},g=new class{constructor(e){e=e||{},this.seq=0,this.mid=(e.mid||1)%1023,this.offset=e.offset||0,this.lastTime=0}generate(){const e=Date.now(),t=(e-this.offset).toString(2);if(this.lastTime==e){if(this.seq++,this.seq>4095)for(this.seq=0;Date.now()<=e;);}else this.seq=0;this.lastTime=e;let n=this.seq.toString(2),o=this.mid.toString(2);for(;n.length<12;)n="0"+n;for(;o.length<10;)o="0"+o;const r=t+o+n;let s="";for(let a=r.length;a>0;a-=4)s=parseInt(r.substring(a-4,a),2).toString(16)+s;return"0x"===(i=s).substring(0,2)&&(i=i.substring(2)),a(i=i.toLowerCase(),16,10);var i}}({mid:42,offset:1545264e6});function h(){const e={br:"br",button:"button",div:"div",label:"label",...(0,r.R)()},[t,n]=(0,l.useState)(g.generate()),[s,i]=(0,l.useState)("No snowflake id generated yet");return(0,o.jsxs)(e.div,{children:[(0,o.jsx)(e.label,{children:s}),(0,o.jsx)(e.br,{}),(0,o.jsx)(e.button,{onClick:()=>{n(g.generate()),i("Snowflake id: "+t)},children:"Click here to generate a snowflake id"})]})}const m=[];function p(e){const t={h1:"h1",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"snowflake-id-generation",children:"Snowflake id generation"}),"\n","\n","\n","\n","\n",(0,o.jsx)(h,{})]})}function w(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(96540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);