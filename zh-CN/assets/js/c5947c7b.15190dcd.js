"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[5193],{68566:(s,e,t)=>{t.r(e),t.d(e,{App:()=>k,assets:()=>m,contentTitle:()=>c,default:()=>f,extend:()=>y,fill:()=>I,frontMatter:()=>d,metadata:()=>M,toc:()=>p});var a=t(87462),n=t(67294),o=t(3905),u=t(40482),i=t(91229),l=t(6248),r=t(40730);const d={},c=void 0,M={unversionedId:"collection/tools/estimate-time",id:"collection/tools/estimate-time",title:"estimate-time",description:"",source:"@site/docs/collection/tools/estimate-time.mdx",sourceDirName:"collection/tools",slug:"/collection/tools/estimate-time",permalink:"/zh-CN/docs/collection/tools/estimate-time",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/collection/tools/estimate-time.mdx",tags:[],version:"current",lastUpdatedBy:"Xiangcheng Kuo",lastUpdatedAt:1697512215,formattedLastUpdatedAt:"2023\u5e7410\u670817\u65e5",frontMatter:{},sidebar:"collection",previous:{title:"Tools",permalink:"/zh-CN/docs/category/tools"},next:{title:"Snowflake id generation",permalink:"/zh-CN/docs/collection/tools/snowflake-id-generation"}},m={},p=[];function y(s,e){e.Proj=e?.Proj||s?.Proj||"",e.Mods=e?.Mods||s?.Mods||[],e.Mod=e?.Mod||s?.Mod||"",e.Feats=e?.Feats||s?.Feats||[],e.Feat=e?.Feat||s?.Feat||"",e.Issues=e?.Issues||s?.Issues||[],e.Issue=e?.Issue||s?.Issue||"",e.ManDays=e?.ManDays||s?.ManDays||0}function I(s){for(let e of s.Mods){y(s,e);for(let s of e.Feats){y(e,s);for(let e of s.Issues)y(s,e)}}return s}function k(s){const e=t(41870),[a,d]=(0,n.useState)(JSON.stringify(e)),[c,M]=(0,n.useState)(null),[m,p]=(0,n.useState)("https://localhost:8443"),[y,k]=(0,n.useState)("xxx"),[D,F]=(0,n.useState)(254),[f,h]=(0,n.useState)("198"),[g,v]=(0,n.useState)("17"),b=new u.Issues({host:m,token:y});return(0,o.kt)("div",null,(0,o.kt)("div",null,(0,o.kt)(i.ZP,{value:a,theme:r.light,extensions:[(0,l.AV)()],onChange:d,style:{border:"1px",height:"auto"},mdxType:"CodeMirror"})),(0,o.kt)("div",null,(0,o.kt)("button",{onClick:s=>{try{d(JSON.stringify(JSON.parse(a),void 0,4))}catch(e){alert("Invalid JSON"+e)}}},"Pretty Format"),(0,o.kt)("button",{onClick:s=>{try{const s=JSON.parse(a);I(s),M(s)}catch(e){alert("Invalid JSON"+e)}}},"Submit Your Time Estimate")),(0,o.kt)("div",null,(0,o.kt)("p",null,"Gitlab endpoint is ",m),(0,o.kt)("p",null,"Gitlab project id is ",D),(0,o.kt)("p",null,"Gitlab access token is ",y),(0,o.kt)("p",null,"Gitlab milestone id is ",f),(0,o.kt)("p",null,"Gitlab assignee id is ",g)),null!=c?(0,o.kt)("div",null,(0,o.kt)("h1",null,"Project: ",c.Proj," (",c.Mods.flatMap((s=>s.Feats)).flatMap((s=>s.Issues)).map((s=>s.ManDays)).reduce(((s,e)=>s+e))," Man-Days)"),c.Mods.map((s=>(0,o.kt)("div",null,(0,o.kt)("h2",null,"Module: ",s.Mod," (",s.Feats.flatMap((s=>s.Issues)).map((s=>s.ManDays)).reduce(((s,e)=>s+e))," Man-Days)"),s.Feats.map((s=>(0,o.kt)("div",null,(0,o.kt)("h4",null,"Feature: ",s.Feat," (",(s?.Issues||[0]).map((s=>{let{ManDays:e}=s;return e})).reduce(((s,e)=>s+e))," Man-Days)"),s.Issues.map((s=>{const e=`[${s.ManDays}D][${s.Proj}][${s.Mod}][${s.Feat}]${s.Issue}`;return(0,o.kt)("div",null,(0,o.kt)("p",null,e),(0,o.kt)("button",{onClick:()=>{b.create(D,{title:e,labels:"task",milestone_id:f,assignee_id:g}).then((t=>{b.addTimeEstimate(D,t.iid,`${s.ManDays}D`).then((s=>{alert(`Issue ${e} created`)}))}))}},"Submit"))}))))),(0,o.kt)("hr",null))))):(0,o.kt)("h1",null,"Empty Time Estimate"))}const D={toc:p,extend:y,fill:I,App:k},F="wrapper";function f(s){let{components:e,...t}=s;return(0,o.kt)(F,(0,a.Z)({},D,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(k,{mdxType:"App"}))}f.isMDXComponent=!0},41870:s=>{s.exports=JSON.parse('{"Proj":"sirius","Mods":[{"Mod":"group","Feats":[{"Feat":"create","Issues":[{"Issue":"\u65b0\u5efa\u63a5\u53e3\u5b9a\u4e49","ManDays":0.5},{"Issue":"\u65b0\u5efa\u63a5\u53e3\u5b9e\u73b0","ManDays":0.5}]},{"Feat":"update","Issues":[{"Issue":"\u66f4\u65b0\u63a5\u53e3\u5b9a\u4e49","ManDays":0.5},{"Issue":"\u66f4\u65b0\u63a5\u53e3\u5b9e\u73b0","ManDays":0.5}]},{"Feat":"delete","Issues":[{"Issue":"\u5220\u9664\u63a5\u53e3\u5b9a\u4e49","ManDays":0.5},{"Issue":"\u5220\u9664\u63a5\u53e3\u5b9e\u73b0","ManDays":0.5}]},{"Feat":"list","Issues":[{"Issue":"\u5217\u8868\u63a5\u53e3\u5b9a\u4e49","ManDays":0.5},{"Issue":"\u5217\u8868\u63a5\u53e3\u5b9e\u73b0","ManDays":0.5}]}]},{"Mod":"setting-mount","Feats":[{"Feat":"put","Issues":[{"Issue":"\u63a5\u53e3\u5b9a\u4e49","ManDays":0.5},{"Issue":"\u63a5\u53e3\u5b9e\u73b0","ManDays":0.5}]},{"Feat":"get","Issues":[{"Issue":"\u63a5\u53e3\u5b9a\u4e49","ManDays":0.5},{"Issue":"\u63a5\u53e3\u5b9e\u73b0","ManDays":0.5}]}]},{"Mod":"permission","Feats":[{"Feat":"enhancement","Issues":[{"Issue":"\u652f\u6301\u7ba1\u7406\u5458\u505c\u6b62\u4efb\u52a1","ManDays":0.5},{"Issue":"\u652f\u6301\u7ba1\u7406\u5458\u9500\u6bc1\u4efb\u52a1","ManDays":0.5},{"Issue":"\u6570\u636e\u96c6\u5217\u8868\u652f\u6301ACL","ManDays":0.5}]}]},{"Mod":"deployment","Feats":[{"Feat":"secure-docker-registry","Issues":[{"Issue":"docker-registry\u914d\u7f6etls","ManDays":0.5},{"Issue":"gateway\u914d\u7f6e\u652f\u6301sirius\u7ec4\u4ef6\u7684\u53cd\u5411\u4ee3\u7406","ManDays":0.5}]}]},{"Mod":"mount","Feats":[{"Feat":"job","Issues":[{"Issue":"[state-transition]\u521b\u5efa\u4efb\u52a1\u65f6\u4f20\u9012mount-setting","ManDays":0.5}]},{"Feat":"pod","Issues":[{"Issue":"[api]\u521b\u5efapod\u63a5\u53e3\u589e\u52a0\u6302\u8f7d\u7684\u8bfb\u5199\u6743\u9650\u4ee5\u53ca\u5bb9\u5fcd\u5931\u8d25\u7684\u53c2\u6570\u5b9a\u4e49","ManDays":0.5},{"Issue":"[state-transition]\u521b\u5efa\u5bb9\u5668\u65f6\u4f20\u9012\u8bfb\u5199\u6743\u9650\u4ee5\u53ca\u5bb9\u5fcd\u5931\u8d25\u7684\u53c2\u6570","ManDays":0.5}]},{"Feat":"container","Issues":[{"Issue":"[api]\u6302\u8f7d\u70b9\u5141\u8bb8\u5931\u8d25\u4ee5\u53ca\u8bfb\u5199\u6743\u9650\u53c2\u6570\u5b9a\u4e49","ManDays":0.5}]}]},{"Mod":"deployment-automation","Feats":[{"Feat":"nfs-server","Issues":[{"Issue":"nfs-server\u521d\u59cb\u5316","ManDays":0.5}]},{"Feat":"core","Issues":[{"Issue":"\u5de5\u4f5c\u76ee\u5f55\u521d\u59cb\u5316","ManDays":0.5},{"Issue":"\u6301\u4e45\u5316nfs-mount","ManDays":0.5},{"Issue":"docker-registry\u914d\u7f6e","ManDays":0.5},{"Issue":"\u955c\u50cf\u521d\u59cb\u5316","ManDays":0.5}]},{"Feat":"compute","Issues":[{"Issue":"\u6301\u4e45\u5316nfs-mount","ManDays":0.5},{"Issue":"docker-registry\u914d\u7f6e","ManDays":0.5}]}]}]}')}}]);