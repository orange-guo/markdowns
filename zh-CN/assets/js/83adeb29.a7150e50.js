"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[5558],{54246:(s,e,t)=>{t.r(e),t.d(e,{App:()=>h,assets:()=>M,contentTitle:()=>c,default:()=>j,extend:()=>p,fill:()=>I,frontMatter:()=>l,metadata:()=>m,toc:()=>y});var a=t(85893),n=t(11151),i=t(40482),o=t(67294),r=t(91229),d=t(6248),u=t(40730);const l={},c=void 0,m={id:"development/tools/estimate-time",title:"estimate-time",description:"",source:"@site/docs/development/tools/estimate-time.mdx",sourceDirName:"development/tools",slug:"/development/tools/estimate-time",permalink:"/zh-CN/docs/development/tools/estimate-time",draft:!1,unlisted:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/development/tools/estimate-time.mdx",tags:[],version:"current",lastUpdatedBy:"Xiangcheng Kuo",lastUpdatedAt:1712400292e3,frontMatter:{},sidebar:"development",previous:{title:"Intellij IDEA",permalink:"/zh-CN/docs/development/tools/ides/intellij-idea"},next:{title:"generate-state-machine-diagram-from-smcat-definition",permalink:"/zh-CN/docs/development/tools/generate-state-machine-diagram-from-smcat-definition"}},M={};function p(s,e){e.Proj=e?.Proj||s?.Proj||"",e.Mods=e?.Mods||s?.Mods||[],e.Mod=e?.Mod||s?.Mod||"",e.Feats=e?.Feats||s?.Feats||[],e.Feat=e?.Feat||s?.Feat||"",e.Issues=e?.Issues||s?.Issues||[],e.Issue=e?.Issue||s?.Issue||"",e.ManDays=e?.ManDays||s?.ManDays||0}function I(s){for(let e of s.Mods){p(s,e);for(let s of e.Feats){p(e,s);for(let e of s.Issues)p(s,e)}}return s}function h(s){const e={button:"button",div:"div",h1:"h1",h2:"h2",h4:"h4",hr:"hr",p:"p",...(0,n.a)()},l=t(35552),[c,m]=(0,o.useState)(JSON.stringify(l)),[M,p]=(0,o.useState)(null),[h,y]=(0,o.useState)("https://localhost:8443"),[D,j]=(0,o.useState)("xxx"),[x,F]=(0,o.useState)(254),[f,v]=(0,o.useState)("198"),[g,k]=(0,o.useState)("17"),b=new i.Issues({host:h,token:D});return(0,a.jsxs)(e.div,{children:[(0,a.jsx)(e.div,{children:(0,a.jsx)(r.ZP,{value:c,theme:u.light,extensions:[(0,d.AV)()],onChange:m,style:{border:"1px",height:"auto"}})}),(0,a.jsxs)(e.div,{children:[(0,a.jsx)(e.button,{onClick:s=>{try{m(JSON.stringify(JSON.parse(c),void 0,4))}catch(e){alert("Invalid JSON"+e)}},children:"Pretty Format"}),(0,a.jsx)(e.button,{onClick:s=>{try{const s=JSON.parse(c);I(s),p(s)}catch(e){alert("Invalid JSON"+e)}},children:"Submit Your Time Estimate"})]}),(0,a.jsxs)(e.div,{children:[(0,a.jsxs)(e.p,{children:["Gitlab endpoint is ",h]}),(0,a.jsxs)(e.p,{children:["Gitlab project id is ",x]}),(0,a.jsxs)(e.p,{children:["Gitlab access token is ",D]}),(0,a.jsxs)(e.p,{children:["Gitlab milestone id is ",f]}),(0,a.jsxs)(e.p,{children:["Gitlab assignee id is ",g]})]}),null!=M?(0,a.jsxs)(e.div,{children:[(0,a.jsxs)(e.h1,{children:["Project: ",M.Proj," (",M.Mods.flatMap((s=>s.Feats)).flatMap((s=>s.Issues)).map((s=>s.ManDays)).reduce(((s,e)=>s+e))," Man-Days)"]}),M.Mods.map((s=>(0,a.jsxs)(e.div,{children:[(0,a.jsxs)(e.h2,{children:["Module: ",s.Mod," (",s.Feats.flatMap((s=>s.Issues)).map((s=>s.ManDays)).reduce(((s,e)=>s+e))," Man-Days)"]}),s.Feats.map((s=>(0,a.jsxs)(e.div,{children:[(0,a.jsxs)(e.h4,{children:["Feature: ",s.Feat," (",(s?.Issues||[0]).map((({ManDays:s})=>s)).reduce(((s,e)=>s+e))," Man-Days)"]}),s.Issues.map((s=>{const t=`[${s.ManDays}D][${s.Proj}][${s.Mod}][${s.Feat}]${s.Issue}`;return(0,a.jsxs)(e.div,{children:[(0,a.jsx)(e.p,{children:t}),(0,a.jsx)(e.button,{onClick:()=>{b.create(x,{title:t,labels:"task",milestone_id:f,assignee_id:g}).then((e=>{b.addTimeEstimate(x,e.iid,`${s.ManDays}D`).then((s=>{alert(`Issue ${t} created`)}))}))},children:"Submit"})]})}))]}))),(0,a.jsx)(e.hr,{})]})))]}):(0,a.jsx)(e.h1,{children:"Empty Time Estimate"})]})}const y=[];function D(s){return(0,a.jsx)(h,{})}function j(s={}){const{wrapper:e}={...(0,n.a)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(D,{...s})}):D()}},35552:s=>{s.exports=JSON.parse('{"Proj":"sirius","Mods":[{"Mod":"group","Feats":[{"Feat":"create","Issues":[{"Issue":"\u65b0\u5efa\u63a5\u53e3\u5b9a\u4e49","ManDays":0.5},{"Issue":"\u65b0\u5efa\u63a5\u53e3\u5b9e\u73b0","ManDays":0.5}]},{"Feat":"update","Issues":[{"Issue":"\u66f4\u65b0\u63a5\u53e3\u5b9a\u4e49","ManDays":0.5},{"Issue":"\u66f4\u65b0\u63a5\u53e3\u5b9e\u73b0","ManDays":0.5}]},{"Feat":"delete","Issues":[{"Issue":"\u5220\u9664\u63a5\u53e3\u5b9a\u4e49","ManDays":0.5},{"Issue":"\u5220\u9664\u63a5\u53e3\u5b9e\u73b0","ManDays":0.5}]},{"Feat":"list","Issues":[{"Issue":"\u5217\u8868\u63a5\u53e3\u5b9a\u4e49","ManDays":0.5},{"Issue":"\u5217\u8868\u63a5\u53e3\u5b9e\u73b0","ManDays":0.5}]}]},{"Mod":"setting-mount","Feats":[{"Feat":"put","Issues":[{"Issue":"\u63a5\u53e3\u5b9a\u4e49","ManDays":0.5},{"Issue":"\u63a5\u53e3\u5b9e\u73b0","ManDays":0.5}]},{"Feat":"get","Issues":[{"Issue":"\u63a5\u53e3\u5b9a\u4e49","ManDays":0.5},{"Issue":"\u63a5\u53e3\u5b9e\u73b0","ManDays":0.5}]}]},{"Mod":"permission","Feats":[{"Feat":"enhancement","Issues":[{"Issue":"\u652f\u6301\u7ba1\u7406\u5458\u505c\u6b62\u4efb\u52a1","ManDays":0.5},{"Issue":"\u652f\u6301\u7ba1\u7406\u5458\u9500\u6bc1\u4efb\u52a1","ManDays":0.5},{"Issue":"\u6570\u636e\u96c6\u5217\u8868\u652f\u6301ACL","ManDays":0.5}]}]},{"Mod":"deployment","Feats":[{"Feat":"secure-docker-registry","Issues":[{"Issue":"docker-registry\u914d\u7f6etls","ManDays":0.5},{"Issue":"gateway\u914d\u7f6e\u652f\u6301sirius\u7ec4\u4ef6\u7684\u53cd\u5411\u4ee3\u7406","ManDays":0.5}]}]},{"Mod":"mount","Feats":[{"Feat":"job","Issues":[{"Issue":"[state-transition]\u521b\u5efa\u4efb\u52a1\u65f6\u4f20\u9012mount-setting","ManDays":0.5}]},{"Feat":"pod","Issues":[{"Issue":"[api]\u521b\u5efapod\u63a5\u53e3\u589e\u52a0\u6302\u8f7d\u7684\u8bfb\u5199\u6743\u9650\u4ee5\u53ca\u5bb9\u5fcd\u5931\u8d25\u7684\u53c2\u6570\u5b9a\u4e49","ManDays":0.5},{"Issue":"[state-transition]\u521b\u5efa\u5bb9\u5668\u65f6\u4f20\u9012\u8bfb\u5199\u6743\u9650\u4ee5\u53ca\u5bb9\u5fcd\u5931\u8d25\u7684\u53c2\u6570","ManDays":0.5}]},{"Feat":"container","Issues":[{"Issue":"[api]\u6302\u8f7d\u70b9\u5141\u8bb8\u5931\u8d25\u4ee5\u53ca\u8bfb\u5199\u6743\u9650\u53c2\u6570\u5b9a\u4e49","ManDays":0.5}]}]},{"Mod":"deployment-automation","Feats":[{"Feat":"nfs-server","Issues":[{"Issue":"nfs-server\u521d\u59cb\u5316","ManDays":0.5}]},{"Feat":"core","Issues":[{"Issue":"\u5de5\u4f5c\u76ee\u5f55\u521d\u59cb\u5316","ManDays":0.5},{"Issue":"\u6301\u4e45\u5316nfs-mount","ManDays":0.5},{"Issue":"docker-registry\u914d\u7f6e","ManDays":0.5},{"Issue":"\u955c\u50cf\u521d\u59cb\u5316","ManDays":0.5}]},{"Feat":"compute","Issues":[{"Issue":"\u6301\u4e45\u5316nfs-mount","ManDays":0.5},{"Issue":"docker-registry\u914d\u7f6e","ManDays":0.5}]}]}]}')}}]);