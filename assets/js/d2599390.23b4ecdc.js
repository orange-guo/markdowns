"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[73432],{40493:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(74848),i=t(28453);const l={authors:["orange"],tags:["problem-solving","java","kotlin","FQDN"]},r="\u4f7f\u7528apache-httpclient5\u5e76\u901a\u8fc7DNS\u8bf7\u6c42\u670d\u52a1\u5982\u679c\u57df\u540d\u4e0d\u7b26\u5408FQDN\u89c4\u8303\u5bfc\u81f4\u62a5\u9519NullPointerException\u7684\u95ee\u9898\u7684\u6392\u67e5\u53ca\u4fee\u590d",o={permalink:"/blog/2024/03/15/troubleshooting-and-fixing-null-pointer-exception-when-using-apache-httpclient5-for-dns-requests-for-services-with-non-compliant-fqdn",source:"@site/blog/2024-03-15-troubleshooting-and-fixing-null-pointer-exception-when-using-apache-httpclient5-for-dns-requests-for-services-with-non-compliant-fqdn.md",title:"\u4f7f\u7528apache-httpclient5\u5e76\u901a\u8fc7DNS\u8bf7\u6c42\u670d\u52a1\u5982\u679c\u57df\u540d\u4e0d\u7b26\u5408FQDN\u89c4\u8303\u5bfc\u81f4\u62a5\u9519NullPointerException\u7684\u95ee\u9898\u7684\u6392\u67e5\u53ca\u4fee\u590d",description:"\u6b64\u95ee\u9898\u662f\u5347\u7ea7apache-httpclient5\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898.",date:"2024-03-15T00:00:00.000Z",tags:[{inline:!0,label:"problem-solving",permalink:"/blog/tags/problem-solving"},{inline:!0,label:"java",permalink:"/blog/tags/java"},{inline:!0,label:"kotlin",permalink:"/blog/tags/kotlin"},{inline:!0,label:"FQDN",permalink:"/blog/tags/fqdn"}],readingTime:3.4,hasTruncateMarker:!0,authors:[{name:"orange",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"orange"}],frontMatter:{authors:["orange"],tags:["problem-solving","java","kotlin","FQDN"]},unlisted:!1,prevItem:{title:"Gnome\u684c\u9762\u73af\u5883\u542f\u7528Wayland",permalink:"/blog/2024/03/27/gnome-desktop-environment-enabling-wayland"},nextItem:{title:"kopia\u63a5\u5165\u706b\u5c71\u4e91TOS\u62a5\u9519Access Denied\u95ee\u9898\u7684\u6392\u67e5\u53ca\u4fee\u590d",permalink:"/blog/2024/03/14/kopia-integration-with-volcano-cloud-tos-access-denied-issue-investigation-and-fix"}},c={authorsImageUrls:[void 0]},s=[{value:"\u73b0\u8c61",id:"\u73b0\u8c61",level:3},{value:"\u539f\u56e0",id:"\u539f\u56e0",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["\u6b64\u95ee\u9898\u662f\u5347\u7ea7apache-httpclient5\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(n.p,{children:["\u9879\u76ee\u662f\u591a\u79df\u6237\u573a\u666f, \u6bcf\u4e2a\u79df\u6237\u90fd\u6709\u81ea\u5df1\u7684\u670d\u52a1, \u6240\u6709\u670d\u52a1\u90e8\u7f72\u5728",(0,a.jsx)(n.code,{children:"kubernetes"}),"\u4e0a.",(0,a.jsx)("br",{}),"\n\u6bcf\u4e2a\u79df\u6237\u7684\u670d\u52a1\u5728\u72ec\u7acb\u7684",(0,a.jsx)(n.code,{children:"namespace"}),"\u4e2d ",(0,a.jsx)(n.code,{children:"namespace"}),"\u662f\u79df\u6237\u7684",(0,a.jsx)(n.code,{children:"ID"}),"(\u4f8b\u5982",(0,a.jsx)(n.code,{children:"1663783236729442304"}),")"]}),"\n",(0,a.jsx)(n.h3,{id:"\u73b0\u8c61",children:"\u73b0\u8c61"}),"\n",(0,a.jsxs)(n.p,{children:["\u4e1a\u52a1\u670d\u52a1\u901a\u8fc7",(0,a.jsx)(n.code,{children:"feign"}),"(\u5e95\u5c42\u91c7\u7528",(0,a.jsx)(n.code,{children:"httpclient5"}),")\u8c03\u7528\u79df\u6237\u670d\u52a1\u65f6\u62a5\u9519, \u9519\u8bef\u65e5\u5fd7\u5982\u4e0b:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-log",children:"java.lang.NullPointerException: Host name\n        at java.base/java.util.Objects.requireNonNull(Objects.java:259)\n        at org.apache.hc.core5.util.Args.notNull(Args.java:169)\n        at org.apache.hc.core5.util.Args.containsNoBlanks(Args.java:88)\n        at org.apache.hc.core5.http.HttpHost.<init>(HttpHost.java:84)\n        at org.apache.hc.core5.http.HttpHost.<init>(HttpHost.java:104)\n        at org.apache.hc.core5.http.HttpHost.create(HttpHost.java:168)\n        at feign.hc5.ApacheHttp5Client.execute(ApacheHttp5Client.java:84)\n        at feign.micrometer.MicrometerObservationCapability.lambda$enrich$1(MicrometerObservationCapability.java:53)\n        at feign.SynchronousMethodHandler.executeAndDecode(SynchronousMethodHandler.java:100)\n        at feign.SynchronousMethodHandler.invoke(SynchronousMethodHandler.java:70)\n        at feign.ReflectiveFeign$FeignInvocationHandler.invoke(ReflectiveFeign.java:99)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u539f\u56e0",children:"\u539f\u56e0"}),"\n",(0,a.jsxs)(n.p,{children:["\u8bbf\u95ee\u79df\u6237\u670d\u52a1\u65f6, \u901a\u8fc7",(0,a.jsx)(n.code,{children:"DNS"}),"\u8bf7\u6c42\u670d\u52a1, \u683c\u5f0f\u4e3a",(0,a.jsx)(n.code,{children:"<service-name>.<tenant-id>"}),".",(0,a.jsx)("br",{}),"\n\u4e0a\u8ff0\u683c\u5f0f\u7ec4\u6210\u7684\u57df\u540d\u4e0d\u7b26\u5408",(0,a.jsx)(n.code,{children:"FQDN"}),"\u89c4\u8303(\u4ee5",(0,a.jsx)(n.code,{children:"."}),"\u8fdb\u884c\u5206\u5272\u7684\u5217\u8868\u6700\u540e\u90e8\u5206\u7684\u5185\u5bb9\u4e3a",(0,a.jsx)(n.code,{children:"<tenant-id>"}),", \u5fc5\u987b\u4ee5\u5b57\u6bcd\u5f00\u5934)"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"httpclient5"}),"\u5185\u90e8\u89e3\u6790",(0,a.jsx)(n.code,{children:"URI"}),"\u65f6\u4f7f\u7528\u7684\u662f",(0,a.jsx)(n.code,{children:"java.net.URI#create"}),"\u65b9\u6cd5\u8fdb\u884c\u89e3\u6790,\n\u7531\u4e8e",(0,a.jsx)(n.code,{children:"hostname"}),"\u90e8\u5206\u4e0d\u7b26\u5408\u89c4\u8303,\n\u4f1a\u5bfc\u81f4\u8fd4\u56de\u7684",(0,a.jsx)(n.code,{children:"URI"}),"\u5bf9\u8c61\u83b7\u53d6\u7684",(0,a.jsx)(n.code,{children:"host"}),"\u503c\u4e3a",(0,a.jsx)(n.code,{children:"null"}),", \u4ece\u800c\u5bfc\u81f4\u51fa\u73b0",(0,a.jsx)(n.code,{children:"NullPointerException"})]}),"\n",(0,a.jsx)(n.p,{children:"\u4f8b\u5982\u4e0a\u8ff0\u4ee3\u7801"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'fun main() {\n\tval uri = URI.create("http://servicea.1663783236729442304/api/v1/tasks")\n\tprintln(uri.host)\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u5176\u63a7\u5236\u53f0\u8f93\u51fa\u4e3a",(0,a.jsx)(n.code,{children:"null"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"URI"}),"\u5185\u90e8\u89e3\u6790hostname\u4ee3\u7801\u5982\u4e0b"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'// hostname      = domainlabel [ "." ] | 1*( domainlabel "." ) toplabel [ "." ]\n// domainlabel   = alphanum | alphanum *( alphanum | "-" ) alphanum\n// toplabel      = alpha | alpha *( alphanum | "-" ) alphanum\n//\nprivate int parseHostname(int start, int n, boolean skipParseException)\n\tthrows URISyntaxException {\n\tint p = start;\n\tint q;\n\tint l = -1;                 // Start of last parsed label\n\n\tdo {\n\t\t// domainlabel = alphanum [ *( alphanum | "-" ) alphanum ]\n\t\tq = scan(p, n, L_ALPHANUM, H_ALPHANUM);\n\t\tif (q <= p)\n\t\t\tbreak;\n\t\tl = p;\n\t\tp = q;\n\t\tq = scan(p, n, L_ALPHANUM | L_DASH, H_ALPHANUM | H_DASH);\n\t\tif (q > p) {\n\t\t\tif (input.charAt(q - 1) == \'-\')\n\t\t\t\tfail("Illegal character in hostname", q - 1);\n\t\t\tp = q;\n\t\t}\n\t\tq = scan(p, n, \'.\');\n\t\tif (q <= p)\n\t\t\tbreak;\n\t\tp = q;\n\t} while (p < n);\n\n\tif ((p < n) && !at(p, n, \':\')) {\n\t\tif (skipParseException) {\n\t\t\treturn p;\n\t\t}\n\t\tfail("Illegal character in hostname", p);\n\t}\n\tif (l < 0)\n\t\tfailExpecting("hostname", start);\n\n\t// for a fully qualified hostname check that the rightmost\n\t// label starts with an alpha character.\n\tif (l > start && !match(input.charAt(l), L_ALPHA, H_ALPHA)) {\n\t\tfail("Illegal character in hostname", l);\n\t}\n\n\thost = input.substring(start, p);\n\treturn p;\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u4e0a\u8ff0\u4ee3\u7801\u4e2d\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u6ce8\u91ca"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-log",children:"// for a fully qualified hostname check that the rightmost\n// label starts with an alpha character.\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u5728",(0,a.jsx)(n.code,{children:"RFC 1035"}),"\u4e2d\u5bf9",(0,a.jsx)(n.code,{children:"Domain names"}),"\u8fdb\u884c\u4e86\u89c4\u8303\n\u5176\u4e2d\u7b2c",(0,a.jsx)(n.code,{children:"2.3.1"}),"\u6709\u76f8\u5173\u5b9a\u4e49"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-log",children:'<domain> ::= <subdomain> | " "\n\n<subdomain> ::= <label> | <subdomain> "." <label>\n\n<label> ::= <letter> [ [ <ldh-str> ] <let-dig> ]\n\n<ldh-str> ::= <let-dig-hyp> | <let-dig-hyp> <ldh-str>\n\n<let-dig-hyp> ::= <let-dig> | "-"\n\n<let-dig> ::= <letter> | <digit>\n\n<letter> ::= any one of the 52 alphabetic characters A through Z in\nupper case and a through z in lower case\n\n<digit> ::= any one of the ten digits 0 through 9\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"domain"}),"\u7531",(0,a.jsx)(n.code,{children:"subdomain"}),"\u7ec4\u6210, ",(0,a.jsx)(n.code,{children:"subdomain"}),"\u7684\u5c3e\u90e8\u7531",(0,a.jsx)(n.code,{children:"label"}),"\u7ec4\u6210, ",(0,a.jsx)(n.code,{children:"label"}),"\u7684\u5f00\u5934\u5fc5\u987b\u4e3a",(0,a.jsx)(n.code,{children:"letter"}),"(\u5373\u5b57\u6bcd)"]}),"\n",(0,a.jsx)(n.h3,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728",(0,a.jsx)(n.code,{children:"kubernetes"}),"\u4e2d\u652f\u6301",(0,a.jsx)(n.code,{children:"<service-name>.<tenant-id>.svc.cluster.local"}),"\u8fd9\u79cd\u57df\u540d,\n\u5c06\u5ba2\u6237\u7aef\u8bf7\u6c42\u65b9\u5f0f\u4ece",(0,a.jsx)(n.code,{children:"<service-name>.<tenant-id>"}),"\u6539\u4e3a\u4e0a\u8ff0\u683c\u5f0f\u5373\u53ef"]}),"\n",(0,a.jsx)(n.h3,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc1035#section-2.3.1",children:"RFC 1035"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/",children:"DNS for Services and Pods"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var a=t(96540);const i={},l=a.createContext(i);function r(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);