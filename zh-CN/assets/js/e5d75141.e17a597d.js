"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[7400],{3905:(e,n,t)=>{t.d(n,{Zo:()=>k,kt:()=>u});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},k=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,u=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return t?r.createElement(u,l(l({ref:n},k),{},{components:t})):r.createElement(u,l({ref:n},k))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},96539:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={authors:["xiangcheng.kuo"],tags:["kind","k8s","docker"]},l="\u4f7f\u7528kind\u521b\u5efa\u4e00\u4e2ak8s\u96c6\u7fa4",i={permalink:"/zh-CN/blog/2023/04/23/kind-helloworld",source:"@site/blog/2023-04-23/kind-helloworld.md",title:"\u4f7f\u7528kind\u521b\u5efa\u4e00\u4e2ak8s\u96c6\u7fa4",description:"kind\u662f\u4e00\u4e2a\u7528\u4e8e\u521b\u5efak8s\u96c6\u7fa4\u7684\u5de5\u5177, \u5b83\u4f7f\u7528docker\u5bb9\u5668\u4f5c\u4e3a\u8282\u70b9, \u53ef\u4ee5\u5feb\u901f\u521b\u5efa\u4e00\u4e2ak8s\u96c6\u7fa4, \u7528\u4e8e\u6d4b\u8bd5\u6216\u8005\u5f00\u53d1.",date:"2023-04-23T00:00:00.000Z",formattedDate:"2023\u5e744\u670823\u65e5",tags:[{label:"kind",permalink:"/zh-CN/blog/tags/kind"},{label:"k8s",permalink:"/zh-CN/blog/tags/k-8-s"},{label:"docker",permalink:"/zh-CN/blog/tags/docker"}],readingTime:4.095,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["kind","k8s","docker"]},nextItem:{title:"\u4f7f\u7528S3\u6258\u7ba1\u9759\u6001\u7f51\u7ad9",permalink:"/zh-CN/blog/2023/04/16/hosting-a-static-website-using-s3"}},p={authorsImageUrls:[void 0]},s=[{value:"\u5b89\u88c5kind",id:"\u5b89\u88c5kind",level:2},{value:"\u521b\u5efa\u4e00\u4e2ak8s\u96c6\u7fa4",id:"\u521b\u5efa\u4e00\u4e2ak8s\u96c6\u7fa4",level:2},{value:"\u5b89\u88c5<code>kong</code>",id:"\u5b89\u88c5kong",level:2},{value:"\u914d\u7f6e<code>kong</code>",id:"\u914d\u7f6ekong",level:2},{value:"\u542f\u52a8\u6d4b\u8bd5\u5e94\u7528",id:"\u542f\u52a8\u6d4b\u8bd5\u5e94\u7528",level:2},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:2},{value:"\u9047\u5230\u7684\u95ee\u9898",id:"\u9047\u5230\u7684\u95ee\u9898",level:2},{value:"<code>nginx</code>\u548c<code>contour</code>\u7b49<code>ingress</code>\u5b89\u88c5\u5931\u8d25",id:"nginx\u548ccontour\u7b49ingress\u5b89\u88c5\u5931\u8d25",level:3},{value:"\u5b98\u65b9\u6587\u6863\u4e2d\u7684\u5173\u4e8e<code>kong</code>\u7684<code>ingress</code>\u7684\u914d\u7f6e\u65e0\u6cd5\u751f\u6548",id:"\u5b98\u65b9\u6587\u6863\u4e2d\u7684\u5173\u4e8ekong\u7684ingress\u7684\u914d\u7f6e\u65e0\u6cd5\u751f\u6548",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],k={toc:s},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"kind\u662f\u4e00\u4e2a\u7528\u4e8e\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"k8s"),"\u96c6\u7fa4\u7684\u5de5\u5177, \u5b83\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"docker"),"\u5bb9\u5668\u4f5c\u4e3a\u8282\u70b9, \u53ef\u4ee5\u5feb\u901f\u521b\u5efa\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"k8s"),"\u96c6\u7fa4, \u7528\u4e8e\u6d4b\u8bd5\u6216\u8005\u5f00\u53d1.",(0,a.kt)("br",null),"\n\u5b98\u65b9\u63d0\u4f9b\u4e86\u76f8\u5e94\u7684\u6587\u6863",(0,a.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/ingress/"},"Ingress"),".",(0,a.kt)("br",null),"\n\u5728\u4f7f\u7528\u8be5\u6587\u6863\u7684\u65f6\u5019\u51fa\u73b0\u4e86\u4e00\u4e9b\u95ee\u9898, \u672c\u6587\u57fa\u4e8e\u5b98\u65b9\u6587\u6863\u5e76\u4f5c\u51fa\u4e86\u4e00\u5b9a\u7684\u4fee\u6539\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"kind"),"\u521b\u5efa\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"k8s"),"\u96c6\u7fa4,\n\u5e76\u5728\u96c6\u7fa4\u4e2d\u90e8\u7f72",(0,a.kt)("inlineCode",{parentName:"p"},"kong-ingress"),".",(0,a.kt)("br",null)),(0,a.kt)("h2",{id:"\u5b89\u88c5kind"},"\u5b89\u88c5kind"),(0,a.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5",(0,a.kt)("inlineCode",{parentName:"p"},"kind")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go install sigs.k8s.io/kind@v0.18.0\n")),(0,a.kt)("h2",{id:"\u521b\u5efa\u4e00\u4e2ak8s\u96c6\u7fa4"},"\u521b\u5efa\u4e00\u4e2ak8s\u96c6\u7fa4"),(0,a.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"k8s"),"\u96c6\u7fa4, \u96c6\u7fa4\u4e2d\u5305\u542b\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"master"),"\u8282\u548c\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"worker"),"\u8282\u70b9.",(0,a.kt)("br",null),"\n\u540c\u65f6\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"master"),"\u8282\u70b9\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"80&443"),"\u7aef\u53e3\u6620\u5c04\u5230\u5bbf\u4e3b\u673a\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"80&443"),"\u7aef\u53e3, \u7528\u4e8e\u540e\u7eed\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"ingress"),"\u6620\u5c04\u5230\u5bbf\u4e3b\u673a\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"80&443"),"\u7aef\u53e3.",(0,a.kt)("br",null)),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cat <<EOF | kind create cluster --config=-\nkind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nnodes:\n  - role: control-plane\n    kubeadmConfigPatches:\n      - |\n        kind: InitConfiguration\n        nodeRegistration:\n          kubeletExtraArgs:\n            node-labels: "ingress-ready=true"\n    extraPortMappings:\n      - containerPort: 80\n        hostPort: 80\n        protocol: TCP\n      - containerPort: 443\n        hostPort: 443\n        protocol: TCP\n  - role: worker\nEOF\n')),(0,a.kt)("p",null,"\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"docker ps"),"\u547d\u4ee4\u67e5\u770b",(0,a.kt)("inlineCode",{parentName:"p"},"kind"),"\u521b\u5efa\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"docker"),"\u5bb9\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE                               COMMAND                  CREATED       STATUS       PORTS                                                                 NAMES\nb4368e7fbfb1   kindest/node:v1.26.3                "/usr/local/bin/entr\u2026"   2 hours ago   Up 2 hours   0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp, 127.0.0.1:45145->6443/tcp   kind-control-plane\nc0638805438a   kindest/node:v1.26.3                "/usr/local/bin/entr\u2026"   2 hours ago   Up 2 hours                                                                         kind-worker\n')),(0,a.kt)("h2",{id:"\u5b89\u88c5kong"},"\u5b89\u88c5",(0,a.kt)("inlineCode",{parentName:"h2"},"kong")),(0,a.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5",(0,a.kt)("inlineCode",{parentName:"p"},"kong-ingress")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/Kong/kubernetes-ingress-controller/main/deploy/single/all-in-one-dbless.yaml\n")),(0,a.kt)("h2",{id:"\u914d\u7f6ekong"},"\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"h2"},"kong")),(0,a.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"kong"),".",(0,a.kt)("br",null),"\n\u7b2c\u4e00\u4e2a\u547d\u4ee4\u7528\u4e8e\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"deployment"),"\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"proxy-kong"),"\u4e0b\u9762\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"pod"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"replicas"),"\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"\u540c\u65f6\u5c06\u7aef\u53e3\u6620\u5c04\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"host"),"\u4e0a(\n\u8fd9\u91cc\u7684host\u5c31\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"docker"),"\u5bb9\u5668\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"host"),", \u540c\u65f6docker\u5bb9\u5668\u5bf9\u5e94\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"port"),"\u53c8\u6620\u5c04\u5230\u4e86\u672c\u5730\u7684\u7aef\u53e3).",(0,a.kt)("br",null)),(0,a.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u547d\u4ee4\u7528\u4e8e\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"kong-proxy"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"service"),"\u7684\u7c7b\u578b\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"NodePort"),", \u8fd9\u6837\u5c31\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"host"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"port"),"\u8bbf\u95ee",(0,a.kt)("inlineCode",{parentName:"p"},"kong"),"\u4e86."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl patch deployment -n kong proxy-kong -p \'{"spec":{"replicas":1, "template":{"spec":{"containers":[{"name":"proxy", "ports":[{"containerPort":8000,"hostPort":80,"name":"proxy","protocol":"TCP"},{"containerPort":8443,"hostPort":443,"name":"proxy-ssl","protocol":"TCP"}]}],"nodeSelector":{"ingress-ready":"true"},"tolerations":[{"key":"node-role.kubernetes.io/control-plane","operator":"Equal","effect":"NoSchedule"},{"key":"node-role.kubernetes.io/master","operator":"Equal","effect":"NoSchedule"}]}}}}\'\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl patch service -n kong kong-proxy -p \'{"spec":{"type":"NodePort"}}\'\n')),(0,a.kt)("h2",{id:"\u542f\u52a8\u6d4b\u8bd5\u5e94\u7528"},"\u542f\u52a8\u6d4b\u8bd5\u5e94\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="usage.yml"',title:'"usage.yml"'},'kind: Pod\napiVersion: v1\nmetadata:\n  name: foo-app\n  labels:\n    app: foo\nspec:\n  containers:\n    - command:\n        - /agnhost\n        - netexec\n        - --http-port\n        - "8080"\n      image: opsdockerimage/e2e-test-images-agnhost:2.26\n      name: foo-app\n---\nkind: Service\napiVersion: v1\nmetadata:\n  name: foo-service\nspec:\n  selector:\n    app: foo\n  ports:\n    # Default port used by the image\n    - port: 8080\n---\nkind: Pod\napiVersion: v1\nmetadata:\n  name: bar-app\n  labels:\n    app: bar\nspec:\n  containers:\n    - command:\n        - /agnhost\n        - netexec\n        - --http-port\n        - "8080"\n      image: opsdockerimage/e2e-test-images-agnhost:2.26\n      name: bar-app\n---\nkind: Service\napiVersion: v1\nmetadata:\n  name: bar-service\nspec:\n  selector:\n    app: bar\n  ports:\n    # Default port used by the image\n    - port: 8080\n---\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: example-ingress\n  annotations:\n    nginx.ingress.kubernetes.io/rewrite-target: /$2\nspec:\n  rules:\n    - http:\n        paths:\n          - pathType: Prefix\n            path: /foo(/|$)(.*)\n            backend:\n              service:\n                name: foo-service\n                port:\n                  number: 8080\n          - pathType: Prefix\n            path: /bar(/|$)(.*)\n            backend:\n              service:\n                name: bar-service\n                port:\n                  number: 8080\n---\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker puull kind load docker-image opsdockerimage/e2e-test-images-agnhost:2.26s\nkind load docker-image opsdockerimage/e2e-test-images-agnhost:2.26\nkubectl apply -f usage.yml\n")),(0,a.kt)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6d4b\u8bd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl localhost/foo/hostname\ncurl localhost/bar/hostname\n")),(0,a.kt)("h2",{id:"\u9047\u5230\u7684\u95ee\u9898"},"\u9047\u5230\u7684\u95ee\u9898"),(0,a.kt)("h3",{id:"nginx\u548ccontour\u7b49ingress\u5b89\u88c5\u5931\u8d25"},(0,a.kt)("inlineCode",{parentName:"h3"},"nginx"),"\u548c",(0,a.kt)("inlineCode",{parentName:"h3"},"contour"),"\u7b49",(0,a.kt)("inlineCode",{parentName:"h3"},"ingress"),"\u5b89\u88c5\u5931\u8d25"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f\u56e0\u4e3a\u56fd\u5185\u65e0\u6cd5\u4e0b\u8f7d\u5bf9\u5e94\u7684\u955c\u50cf\u5bfc\u81f4\u65e0\u6cd5\u5b89\u88c5\u6210\u529f.",(0,a.kt)("br",null),"\n\u89e3\u51b3\u65b9\u6848\u662f\u91c7\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"kong"),"\u4f5c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"ingress"),".",(0,a.kt)("br",null)),(0,a.kt)("h3",{id:"\u5b98\u65b9\u6587\u6863\u4e2d\u7684\u5173\u4e8ekong\u7684ingress\u7684\u914d\u7f6e\u65e0\u6cd5\u751f\u6548"},"\u5b98\u65b9\u6587\u6863\u4e2d\u7684\u5173\u4e8e",(0,a.kt)("inlineCode",{parentName:"h3"},"kong"),"\u7684",(0,a.kt)("inlineCode",{parentName:"h3"},"ingress"),"\u7684\u914d\u7f6e\u65e0\u6cd5\u751f\u6548"),(0,a.kt)("p",null,"\u6267\u884c\u5b98\u65b9\u6587\u6863\u4e2d\u7684\u5982\u4e0b\u547d\u4ee4\u5931\u8d25"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl patch deployment -n kong ingress-kong -p \'{"spec":{"template":{"spec":{"containers":[{"name":"proxy","ports":[{"containerPort":8000,"hostPort":80,"name":"proxy","protocol":"TCP"},{"containerPort":8443,"hostPort":443,"name":"proxy-ssl","protocol":"TCP"}]}],"nodeSelector":{"ingress-ready":"true"},"tolerations":[{"key":"node-role.kubernetes.io/control-plane","operator":"Equal","effect":"NoSchedule"},{"key":"node-role.kubernetes.io/master","operator":"Equal","effect":"NoSchedule"}]}}}}\'\n')),(0,a.kt)("p",null,"\u62a5\u9519\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},'The Deployment "ingress-kong" is invalid: spec.template.spec.containers[0].image: Required value\n')),(0,a.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f\u56e0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"deployment"),"\u7ed9\u9519\u4e86, \u6b63\u786e\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"deployment"),"\u5e94\u8be5\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"proxy-kong"),".",(0,a.kt)("br",null)),(0,a.kt)("p",null,"\u5c06\u547d\u4ee4\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"ingress-kong"),"\u66ff\u6362\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"proxy-kong"),"\u540e, \u6267\u884c\u6210\u529f.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"\u5bf9\u4e8e\u8fd9\u4e2a\u95ee\u9898, \u6211\u5df2\u7ecf\u63d0\u4ea4\u4e86pr, \u4f46\u662f\u8fd8\u6ca1\u6709\u88ab\u5408\u5e76, \u53ef\u4ee5\u53c2\u8003",(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kind/pull/3183"},"doc: fix wrong implementation of creation of kong-ingress #3183")),(0,a.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},"kind"))))}d.isMDXComponent=!0}}]);