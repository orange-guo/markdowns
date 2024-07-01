"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[28200],{81194:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var o=s(74848),r=s(28453);const c={authors:["orange"],tags:["kind","k8s","docker","github-pr"]},i="\u4f7f\u7528kind\u521b\u5efa\u4e00\u4e2ak8s\u96c6\u7fa4",d={permalink:"/blog/2023/04/23/use-kind-create-a-k8s-cluster",source:"@site/blog/2023-04-23-use-kind-create-a-k8s-cluster.md",title:"\u4f7f\u7528kind\u521b\u5efa\u4e00\u4e2ak8s\u96c6\u7fa4",description:"kind\u662f\u4e00\u4e2a\u7528\u4e8e\u521b\u5efak8s\u96c6\u7fa4\u7684\u5de5\u5177, \u5b83\u4f7f\u7528docker\u5bb9\u5668\u4f5c\u4e3a\u8282\u70b9, \u53ef\u4ee5\u5feb\u901f\u521b\u5efa\u4e00\u4e2ak8s\u96c6\u7fa4,",date:"2023-04-23T00:00:00.000Z",tags:[{inline:!0,label:"kind",permalink:"/blog/tags/kind"},{inline:!0,label:"k8s",permalink:"/blog/tags/k-8-s"},{inline:!0,label:"docker",permalink:"/blog/tags/docker"},{inline:!0,label:"github-pr",permalink:"/blog/tags/github-pr"}],readingTime:4.275,hasTruncateMarker:!0,authors:[{name:"orange",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"orange"}],frontMatter:{authors:["orange"],tags:["kind","k8s","docker","github-pr"]},unlisted:!1,prevItem:{title:"\u901a\u8fc7\u521b\u5efarsa\u683c\u5f0f\u7684\u79c1\u94a5\u4ee5\u53ca\u670d\u52a1\u7aef\u542f\u7528rsa\u8ba4\u8bc1\u89e3\u51b3jsch\u8fde\u63a5ssh\u5931\u8d25\u7684\u95ee\u9898",permalink:"/blog/2023/05/05/solve-jsch-ssh-connection-failure-by-creating-rsa-private-key-and-enabling-rsa-authentication-on-server"},nextItem:{title:"\u4f7f\u7528S3\u6258\u7ba1\u9759\u6001\u7f51\u7ad9",permalink:"/blog/2023/04/16/hosting-a-static-website-using-s3"}},l={authorsImageUrls:[void 0]},a=[{value:"\u5b89\u88c5kind",id:"\u5b89\u88c5kind",level:2},{value:"\u521b\u5efa\u4e00\u4e2ak8s\u96c6\u7fa4",id:"\u521b\u5efa\u4e00\u4e2ak8s\u96c6\u7fa4",level:2},{value:"\u5b89\u88c5<code>kong</code>",id:"\u5b89\u88c5kong",level:2},{value:"\u914d\u7f6e<code>kong</code>",id:"\u914d\u7f6ekong",level:2},{value:"\u542f\u52a8\u6d4b\u8bd5\u5e94\u7528",id:"\u542f\u52a8\u6d4b\u8bd5\u5e94\u7528",level:2},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:2},{value:"\u9047\u5230\u7684\u95ee\u9898",id:"\u9047\u5230\u7684\u95ee\u9898",level:2},{value:"<code>nginx</code>\u548c<code>contour</code>\u7b49<code>ingress</code>\u5b89\u88c5\u5931\u8d25",id:"nginx\u548ccontour\u7b49ingress\u5b89\u88c5\u5931\u8d25",level:3},{value:"\u5b98\u65b9\u6587\u6863\u4e2d\u7684\u5173\u4e8e<code>kong</code>\u7684<code>ingress</code>\u7684\u914d\u7f6e\u65e0\u6cd5\u751f\u6548",id:"\u5b98\u65b9\u6587\u6863\u4e2d\u7684\u5173\u4e8ekong\u7684ingress\u7684\u914d\u7f6e\u65e0\u6cd5\u751f\u6548",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}];function t(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["kind\u662f\u4e00\u4e2a\u7528\u4e8e\u521b\u5efa",(0,o.jsx)(n.code,{children:"k8s"}),"\u96c6\u7fa4\u7684\u5de5\u5177, \u5b83\u4f7f\u7528",(0,o.jsx)(n.code,{children:"docker"}),"\u5bb9\u5668\u4f5c\u4e3a\u8282\u70b9, \u53ef\u4ee5\u5feb\u901f\u521b\u5efa\u4e00\u4e2a",(0,o.jsx)(n.code,{children:"k8s"}),"\u96c6\u7fa4,\n\u7528\u4e8e\u6d4b\u8bd5\u6216\u8005\u5f00\u53d1.",(0,o.jsx)("br",{}),"\n\u5b98\u65b9\u63d0\u4f9b\u4e86\u76f8\u5e94\u7684\u6587\u6863",(0,o.jsx)(n.a,{href:"https://kind.sigs.k8s.io/docs/user/ingress/",children:"Ingress"}),", \u5728\u4f7f\u7528\u8be5\u6587\u6863\u7684\u65f6\u5019\u51fa\u73b0\u4e86\u4e00\u4e9b\u95ee\u9898.",(0,o.jsx)("br",{}),"\n\u672c\u6587\u57fa\u4e8e\u5b98\u65b9\u6587\u6863\u5e76\u4f5c\u51fa\u4e86\u4e00\u5b9a\u7684\u4fee\u6539\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528",(0,o.jsx)(n.code,{children:"kind"}),"\u521b\u5efa\u4e00\u4e2a",(0,o.jsx)(n.code,{children:"k8s"}),"\u96c6\u7fa4, \u5e76\u5728\u96c6\u7fa4\u4e2d\u90e8\u7f72",(0,o.jsx)(n.code,{children:"kong-ingress"}),".\u6700\u540e\u90e8\u7f72\u4e00\u4e2a\u6d4b\u8bd5\u5e94\u7528\u5e76\u901a\u8fc7\n",(0,o.jsx)(n.code,{children:"kong-ingress"}),"\u8bbf\u95ee\u8be5\u5e94\u7528."]}),"\n",(0,o.jsx)(n.h2,{id:"\u5b89\u88c5kind",children:"\u5b89\u88c5kind"}),"\n",(0,o.jsxs)(n.p,{children:["\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5",(0,o.jsx)(n.code,{children:"kind"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"go install sigs.k8s.io/kind@v0.18.0\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u521b\u5efa\u4e00\u4e2ak8s\u96c6\u7fa4",children:"\u521b\u5efa\u4e00\u4e2ak8s\u96c6\u7fa4"}),"\n",(0,o.jsxs)(n.p,{children:["\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\u4e00\u4e2a",(0,o.jsx)(n.code,{children:"k8s"}),"\u96c6\u7fa4, \u96c6\u7fa4\u4e2d\u5305\u542b\u4e00\u4e2a",(0,o.jsx)(n.code,{children:"master"}),"\u8282\u548c\u4e00\u4e2a",(0,o.jsx)(n.code,{children:"worker"}),"\u8282\u70b9.",(0,o.jsx)("br",{}),"\n\u540c\u65f6\u5c06",(0,o.jsx)(n.code,{children:"master"}),"\u8282\u70b9\u7684",(0,o.jsx)(n.code,{children:"80&443"}),"\u7aef\u53e3\u6620\u5c04\u5230\u5bbf\u4e3b\u673a\u7684",(0,o.jsx)(n.code,{children:"80&443"}),"\u7aef\u53e3, \u7528\u4e8e\u540e\u7eed\u5c06",(0,o.jsx)(n.code,{children:"ingress"}),"\u6620\u5c04\u5230\u5bbf\u4e3b\u673a\u7684",(0,o.jsx)(n.code,{children:"80&443"}),"\u7aef\u53e3.",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'cat <<EOF | kind create cluster --config=-\nkind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nnodes:\n  - role: control-plane\n    kubeadmConfigPatches:\n      - |\n        kind: InitConfiguration\n        nodeRegistration:\n          kubeletExtraArgs:\n            node-labels: "ingress-ready=true"\n    extraPortMappings:\n      - containerPort: 80\n        hostPort: 80\n        protocol: TCP\n      - containerPort: 443\n        hostPort: 443\n        protocol: TCP\n  - role: worker\nEOF\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u6267\u884c",(0,o.jsx)(n.code,{children:"docker ps"}),"\u547d\u4ee4\u67e5\u770b",(0,o.jsx)(n.code,{children:"kind"}),"\u521b\u5efa\u7684",(0,o.jsx)(n.code,{children:"docker"}),"\u5bb9\u5668"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'CONTAINER ID   IMAGE                               COMMAND                  CREATED       STATUS       PORTS                                                                 NAMES\nb4368e7fbfb1   kindest/node:v1.26.3                "/usr/local/bin/entr\u2026"   2 hours ago   Up 2 hours   0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp, 127.0.0.1:45145->6443/tcp   kind-control-plane\nc0638805438a   kindest/node:v1.26.3                "/usr/local/bin/entr\u2026"   2 hours ago   Up 2 hours                                                                         kind-worker\n'})}),"\n",(0,o.jsxs)(n.h2,{id:"\u5b89\u88c5kong",children:["\u5b89\u88c5",(0,o.jsx)(n.code,{children:"kong"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5",(0,o.jsx)(n.code,{children:"kong-ingress"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/Kong/kubernetes-ingress-controller/main/deploy/single/all-in-one-dbless.yaml\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"\u914d\u7f6ekong",children:["\u914d\u7f6e",(0,o.jsx)(n.code,{children:"kong"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u914d\u7f6e",(0,o.jsx)(n.code,{children:"kong"}),".",(0,o.jsx)("br",{}),"\n\u7b2c\u4e00\u4e2a\u547d\u4ee4\u7528\u4e8e\u5c06",(0,o.jsx)(n.code,{children:"deployment"}),"\u4e3a",(0,o.jsx)(n.code,{children:"proxy-kong"}),"\u4e0b\u9762\u7684",(0,o.jsx)(n.code,{children:"pod"}),"\u7684",(0,o.jsx)(n.code,{children:"replicas"}),"\u8bbe\u7f6e\u4e3a",(0,o.jsx)(n.code,{children:"1"}),"\u540c\u65f6\u5c06\u7aef\u53e3\u6620\u5c04\u5230",(0,o.jsx)(n.code,{children:"host"}),"\u4e0a(\n\u8fd9\u91cc\u7684host\u5c31\u662f",(0,o.jsx)(n.code,{children:"docker"}),"\u5bb9\u5668\u7684",(0,o.jsx)(n.code,{children:"host"}),", \u540c\u65f6docker\u5bb9\u5668\u5bf9\u5e94\u7684",(0,o.jsx)(n.code,{children:"port"}),"\u53c8\u6620\u5c04\u5230\u4e86\u672c\u5730\u7684\u7aef\u53e3).",(0,o.jsx)("br",{})]}),"\n",(0,o.jsxs)(n.p,{children:["\u7b2c\u4e8c\u4e2a\u547d\u4ee4\u7528\u4e8e\u5c06",(0,o.jsx)(n.code,{children:"kong-proxy"}),"\u7684",(0,o.jsx)(n.code,{children:"service"}),"\u7684\u7c7b\u578b\u8bbe\u7f6e\u4e3a",(0,o.jsx)(n.code,{children:"NodePort"}),", \u8fd9\u6837\u5c31\u53ef\u4ee5\u901a\u8fc7",(0,o.jsx)(n.code,{children:"host"}),"\u7684",(0,o.jsx)(n.code,{children:"port"}),"\u8bbf\u95ee",(0,o.jsx)(n.code,{children:"kong"}),"\u4e86."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'kubectl patch deployment -n kong proxy-kong -p \'{"spec":{"replicas":1, "template":{"spec":{"containers":[{"name":"proxy", "ports":[{"containerPort":8000,"hostPort":80,"name":"proxy","protocol":"TCP"},{"containerPort":8443,"hostPort":443,"name":"proxy-ssl","protocol":"TCP"}]}],"nodeSelector":{"ingress-ready":"true"},"tolerations":[{"key":"node-role.kubernetes.io/control-plane","operator":"Equal","effect":"NoSchedule"},{"key":"node-role.kubernetes.io/master","operator":"Equal","effect":"NoSchedule"}]}}}}\'\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'kubectl patch service -n kong kong-proxy -p \'{"spec":{"type":"NodePort"}}\'\n'})}),"\n",(0,o.jsx)(n.h2,{id:"\u542f\u52a8\u6d4b\u8bd5\u5e94\u7528",children:"\u542f\u52a8\u6d4b\u8bd5\u5e94\u7528"}),"\n",(0,o.jsxs)(n.p,{children:["\u521b\u5efa\u5982\u4e0b\u6587\u4ef6\u7528\u4e8e\u540e\u7eed\u6267\u884c",(0,o.jsx)(n.code,{children:"kubectl apply"}),"\u547d\u4ee4"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="usage.yml"',children:'kind: Pod\napiVersion: v1\nmetadata:\n  name: foo-app\n  labels:\n    app: foo\nspec:\n  containers:\n    - command:\n        - /agnhost\n        - netexec\n        - --http-port\n        - "8080"\n      image: opsdockerimage/e2e-test-images-agnhost:2.26\n      name: foo-app\n---\nkind: Service\napiVersion: v1\nmetadata:\n  name: foo-service\nspec:\n  selector:\n    app: foo\n  ports:\n    # Default port used by the image\n    - port: 8080\n---\nkind: Pod\napiVersion: v1\nmetadata:\n  name: bar-app\n  labels:\n    app: bar\nspec:\n  containers:\n    - command:\n        - /agnhost\n        - netexec\n        - --http-port\n        - "8080"\n      image: opsdockerimage/e2e-test-images-agnhost:2.26\n      name: bar-app\n---\nkind: Service\napiVersion: v1\nmetadata:\n  name: bar-service\nspec:\n  selector:\n    app: bar\n  ports:\n    # Default port used by the image\n    - port: 8080\n---\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: example-ingress\n  annotations:\n    nginx.ingress.kubernetes.io/rewrite-target: /$2\nspec:\n  rules:\n    - http:\n        paths:\n          - pathType: Prefix\n            path: /foo(/|$)(.*)\n            backend:\n              service:\n                name: foo-service\n                port:\n                  number: 8080\n          - pathType: Prefix\n            path: /bar(/|$)(.*)\n            backend:\n              service:\n                name: bar-service\n                port:\n                  number: 8080\n---\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker puull kind load docker-image opsdockerimage/e2e-test-images-agnhost:2.26s\nkind load docker-image opsdockerimage/e2e-test-images-agnhost:2.26\nkubectl apply -f usage.yml\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u6d4b\u8bd5",children:"\u6d4b\u8bd5"}),"\n",(0,o.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6d4b\u8bd5"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl localhost/foo/hostname\ncurl localhost/bar/hostname\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u9047\u5230\u7684\u95ee\u9898",children:"\u9047\u5230\u7684\u95ee\u9898"}),"\n",(0,o.jsxs)(n.h3,{id:"nginx\u548ccontour\u7b49ingress\u5b89\u88c5\u5931\u8d25",children:[(0,o.jsx)(n.code,{children:"nginx"}),"\u548c",(0,o.jsx)(n.code,{children:"contour"}),"\u7b49",(0,o.jsx)(n.code,{children:"ingress"}),"\u5b89\u88c5\u5931\u8d25"]}),"\n",(0,o.jsxs)(n.p,{children:["\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f\u56e0\u4e3a\u56fd\u5185\u65e0\u6cd5\u4e0b\u8f7d\u5bf9\u5e94\u7684\u955c\u50cf\u5bfc\u81f4\u65e0\u6cd5\u5b89\u88c5\u6210\u529f.",(0,o.jsx)("br",{}),"\n\u89e3\u51b3\u65b9\u6848\u662f\u91c7\u7528",(0,o.jsx)(n.code,{children:"kong"}),"\u4f5c\u4e3a",(0,o.jsx)(n.code,{children:"ingress"}),".",(0,o.jsx)("br",{})]}),"\n",(0,o.jsxs)(n.h3,{id:"\u5b98\u65b9\u6587\u6863\u4e2d\u7684\u5173\u4e8ekong\u7684ingress\u7684\u914d\u7f6e\u65e0\u6cd5\u751f\u6548",children:["\u5b98\u65b9\u6587\u6863\u4e2d\u7684\u5173\u4e8e",(0,o.jsx)(n.code,{children:"kong"}),"\u7684",(0,o.jsx)(n.code,{children:"ingress"}),"\u7684\u914d\u7f6e\u65e0\u6cd5\u751f\u6548"]}),"\n",(0,o.jsx)(n.p,{children:"\u6267\u884c\u5b98\u65b9\u6587\u6863\u4e2d\u7684\u5982\u4e0b\u547d\u4ee4\u5931\u8d25"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'kubectl patch deployment -n kong ingress-kong -p \'{"spec":{"template":{"spec":{"containers":[{"name":"proxy","ports":[{"containerPort":8000,"hostPort":80,"name":"proxy","protocol":"TCP"},{"containerPort":8443,"hostPort":443,"name":"proxy-ssl","protocol":"TCP"}]}],"nodeSelector":{"ingress-ready":"true"},"tolerations":[{"key":"node-role.kubernetes.io/control-plane","operator":"Equal","effect":"NoSchedule"},{"key":"node-role.kubernetes.io/master","operator":"Equal","effect":"NoSchedule"}]}}}}\'\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u62a5\u9519\u5982\u4e0b"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-log",children:'The Deployment "ingress-kong" is invalid: spec.template.spec.containers[0].image: Required value\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f\u56e0\u4e3a",(0,o.jsx)(n.code,{children:"deployment"}),"\u7ed9\u9519\u4e86, \u6b63\u786e\u7684",(0,o.jsx)(n.code,{children:"deployment"}),"\u5e94\u8be5\u662f",(0,o.jsx)(n.code,{children:"proxy-kong"}),".",(0,o.jsx)("br",{})]}),"\n",(0,o.jsxs)(n.p,{children:["\u5c06\u547d\u4ee4\u4e2d\u7684",(0,o.jsx)(n.code,{children:"ingress-kong"}),"\u66ff\u6362\u4e3a",(0,o.jsx)(n.code,{children:"proxy-kong"}),"\u540e, \u6267\u884c\u6210\u529f.",(0,o.jsx)("br",{})]}),"\n",(0,o.jsxs)(n.p,{children:["\u5bf9\u4e8e\u8fd9\u4e2a\u95ee\u9898, \u6211\u5df2\u7ecf\u63d0\u4ea4\u4e86pr, \u4f46\u662f\u8fd8\u6ca1\u6709\u88ab\u5408\u5e76, \u53ef\u4ee5\u53c2\u8003",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/kind/pull/3183",children:"doc: fix wrong implementation of creation of kong-ingress #3183"})]}),"\n",(0,o.jsx)(n.h2,{id:"\u53c2\u8003\u8d44\u6599",children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://kind.sigs.k8s.io/",children:"kind"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var o=s(96540);const r={},c=o.createContext(r);function i(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);