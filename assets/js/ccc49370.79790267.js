"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[83249],{37917:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});n(96540);var a=n(34164),s=n(86568),i=n(79872),r=n(65089),o=n(12642),l=n(53935),c=n(45122),d=n(181),m=n(74848);function u(e){const{nextItem:t,prevItem:n}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,m.jsx)(d.A,{...n,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,m.jsx)(d.A,{...t,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function g(){const{assets:e,metadata:t}=(0,r.e7)(),{title:n,description:a,date:i,tags:o,authors:l,frontMatter:c}=t,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(s.be,{title:c.title_meta??n,description:a,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:i}),l.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),o.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:o.map((e=>e.label)).join(",")})]})}var h=n(31171);function p(){const e=(0,r.J_)();return(0,m.jsx)(h.A,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var x=n(14874),f=n(96314);function v(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:s}=(0,r.e7)(),{nextItem:i,prevItem:c,frontMatter:d}=a,{hide_table_of_contents:g,toc_min_heading_level:h,toc_max_heading_level:p}=d;return(0,m.jsxs)(o.A,{sidebar:t,toc:!g&&s.length>0?(0,m.jsx)(x.A,{toc:s,minHeadingLevel:h,maxHeadingLevel:p}):void 0,children:[(0,m.jsx)(f.A,{metadata:a}),(0,m.jsx)(l.A,{children:n}),(i||c)&&(0,m.jsx)(u,{nextItem:i,prevItem:c})]})}function j(e){const t=e.content;return(0,m.jsx)(r.in,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(s.e3,{className:(0,a.A)(i.G.wrapper.blogPages,i.G.page.blogPostPage),children:[(0,m.jsx)(g,{}),(0,m.jsx)(p,{}),(0,m.jsx)(v,{sidebar:e.sidebar,children:(0,m.jsx)(t,{})})]})})}},88181:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var a=n(34164),s=n(43637),i=n(79872),r=n(51293),o=n(74848);function l(e){let{className:t}=e;return(0,o.jsx)(r.A,{type:"caution",title:(0,o.jsx)(s.Rc,{}),className:(0,a.A)(t,i.G.common.unlistedBanner),children:(0,o.jsx)(s.Uh,{})})}function c(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.AE,{}),(0,o.jsx)(l,{...e})]})}},96314:(e,t,n)=>{n.d(t,{A:()=>d});n(96540);var a=n(34164),s=n(43637),i=n(79872),r=n(51293),o=n(74848);function l(e){let{className:t}=e;return(0,o.jsx)(r.A,{type:"caution",title:(0,o.jsx)(s.Yh,{}),className:(0,a.A)(t,i.G.common.draftBanner),children:(0,o.jsx)(s.TT,{})})}var c=n(88181);function d(e){let{metadata:t}=e;const{unlisted:n,frontMatter:a}=t;return(0,o.jsxs)(o.Fragment,{children:[(n||a.unlisted)&&(0,o.jsx)(c.A,{}),a.draft&&(0,o.jsx)(l,{})]})}},181:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var a=n(34164),s=n(68957),i=n(74848);function r(e){const{permalink:t,title:n,subLabel:r,isNext:o}=e;return(0,i.jsxs)(s.A,{className:(0,a.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},14874:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var a=n(34164),s=n(83686);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var r=n(74848);const o="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,a.A)(i.tableOfContents,"thin-scrollbar",t),children:(0,r.jsx)(s.A,{...n,linkClassName:o,linkActiveClassName:l})})}},83686:(e,t,n)=>{n.d(t,{A:()=>p});var a=n(96540),s=n(22263);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):a.push(s)})),a}function r(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=r({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>o(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:r}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let s=t;s<=n;s+=1)a.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:r}),c=l(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var m=n(68957),u=n(74848);function g(e){let{toc:t,className:n,linkClassName:a,isChild:s}=e;return t.length?(0,u.jsx)("ul",{className:s?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(g,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const h=a.memo(g);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:m,...g}=e;const p=(0,s.p)(),x=c??p.tableOfContents.minHeadingLevel,f=m??p.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,a.useMemo)((()=>r({toc:i(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}({toc:t,minHeadingLevel:x,maxHeadingLevel:f});return d((0,a.useMemo)((()=>{if(o&&l)return{linkClassName:o,linkActiveClassName:l,minHeadingLevel:x,maxHeadingLevel:f}}),[o,l,x,f])),(0,u.jsx)(h,{toc:v,className:n,linkClassName:o,...g})}},60080:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var a=n(34164),s=n(68957);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=n(74848);function o(e){let{permalink:t,label:n,count:o,description:l}=e;return(0,r.jsxs)(s.A,{href:t,title:l,className:(0,a.A)(i.tag,o?i.tagWithCount:i.tagRegular),children:[n,o&&(0,r.jsx)("span",{children:o})]})}},29626:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var a=n(34164),s=n(45122),i=n(60080);const r={tags:"tags_jXut",tag:"tag_QGVx"};var o=n(74848);function l(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,a.A)(r.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,o.jsx)("li",{className:r.tag,children:(0,o.jsx)(i.A,{...e})},e.permalink)))})]})}},43637:(e,t,n)=>{n.d(t,{AE:()=>l,Rc:()=>r,TT:()=>d,Uh:()=>o,Yh:()=>c});n(96540);var a=n(45122),s=n(31171),i=n(74848);function r(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,i.jsx)(s.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},53935:(e,t,n)=>{n.d(t,{A:()=>B});var a=n(96540),s=n(34164),i=n(65089),r=n(74848);function o(e){let{children:t,className:n}=e;return(0,r.jsx)("article",{className:n,children:t})}var l=n(68957);const c={title:"title_f1Hy"};function d(e){let{className:t}=e;const{metadata:n,isBlogPostPage:a}=(0,i.e7)(),{permalink:o,title:d}=n,m=a?"h1":"h2";return(0,r.jsx)(m,{className:(0,s.A)(c.title,t),children:a?d:(0,r.jsx)(l.A,{to:o,children:d})})}var m=n(45122),u=n(10538),g=n(68285);const h={container:"container_mt6G"};function p(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,u.W)();return t=>{const n=Math.ceil(t);return e(n,(0,m.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,r.jsx)(r.Fragment,{children:n(t)})}function x(e){let{date:t,formattedDate:n}=e;return(0,r.jsx)("time",{dateTime:t,children:n})}function f(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function v(e){let{className:t}=e;const{metadata:n}=(0,i.e7)(),{date:a,readingTime:o}=n,l=(0,g.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,s.A)(h.container,"margin-vert--md",t),children:[(0,r.jsx)(x,{date:a,formattedDate:(c=a,l.format(new Date(c)))}),void 0!==o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{}),(0,r.jsx)(p,{readingTime:o})]})]});var c}var j=n(61231);const b={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function A(e){let{className:t}=e;const{metadata:{authors:n},assets:a}=(0,i.e7)();if(0===n.length)return null;const o=n.every((e=>{let{name:t}=e;return!t})),l=1===n.length;return(0,r.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",o?b.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,r.jsx)("div",{className:(0,s.A)(!o&&(l?"col col--12":"col col--6"),o?b.imageOnlyAuthorCol:b.authorCol),children:(0,r.jsx)(j.A,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})},t)))})}function N(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(d,{}),(0,r.jsx)(v,{}),(0,r.jsx)(A,{})]})}var y=n(13783),_=n(88365);function L(e){let{children:t,className:n}=e;const{isBlogPostPage:a}=(0,i.e7)();return(0,r.jsx)("div",{id:a?y.LU:void 0,className:(0,s.A)("markdown",n),children:(0,r.jsx)(_.A,{children:t})})}var k=n(79872),C=n(66813),T=n(29626);function w(){return(0,r.jsx)("b",{children:(0,r.jsx)(m.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function H(e){const{blogPostTitle:t,...n}=e;return(0,r.jsx)(l.A,{"aria-label":(0,m.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,r.jsx)(w,{})})}function P(){const{metadata:e,isBlogPostPage:t}=(0,i.e7)(),{tags:n,title:a,editUrl:o,hasTruncateMarker:l,lastUpdatedBy:c,lastUpdatedAt:d}=e,m=!t&&l,u=n.length>0;if(!(u||m||o))return null;if(t){const e=!!(o||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,s.A)("row","margin-top--sm",k.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(T.A,{tags:n})})}),e&&(0,r.jsx)(C.A,{className:(0,s.A)("margin-top--sm",k.G.blog.blogFooterEditMetaRow),editUrl:o,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,s.A)("col",{"col--9":m}),children:(0,r.jsx)(T.A,{tags:n})}),m&&(0,r.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":u}),children:(0,r.jsx)(H,{blogPostTitle:a,to:e.permalink})})]})}function I(e){let{children:t,className:n}=e;const a=function(){const{isBlogPostPage:e}=(0,i.e7)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(o,{className:(0,s.A)(a,n),children:[(0,r.jsx)(N,{}),(0,r.jsx)(L,{children:t}),(0,r.jsx)(P,{})]})}function O({id:e,host:t,repo:s,repoId:i,category:o,categoryId:l,mapping:c,term:d,strict:m,reactionsEnabled:u,emitMetadata:g,inputPosition:h,theme:p,lang:x,loading:f}){const[v,j]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{v||(n.e(1135).then(n.bind(n,1135)),j(!0))}),[]),v?(0,r.jsx)("giscus-widget",{id:e,host:t,repo:s,repoid:i,category:o,categoryid:l,mapping:c,term:d,strict:m,reactionsenabled:u,emitmetadata:g,inputposition:h,theme:p,lang:x,loading:f}):null}var R=n(21720),M=n(22777);function B(e){const{i18n:{defaultLocale:t,localeConfigs:n}}=(0,M.A)(),{colorMode:a}=(0,R.G)(),{metadata:s,isBlogPostPage:o}=(0,i.e7)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(I,{...e}),o&&(0,r.jsx)(O,{repo:"orange-guo/markdowns-comment",repoId:"R_kgDOJSYyJA",category:"Announcements",categoryId:"DIC_kwDOJSYyJM4CVg1x",mapping:"pathname",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"bottom",theme:a,lang:t,crossorigin:"anonymous",term:"Welcome to @giscus/react component!",loading:"lazy",async:!0})]})}}}]);