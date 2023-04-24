"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[1332],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>g});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=t.createContext({}),d=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},u=function(e){var a=d(e.components);return t.createElement(o.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},k=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=d(n),k=r,g=c["".concat(o,".").concat(k)]||c[k]||m[k]||i;return n?t.createElement(g,l(l({ref:a},u),{},{components:n})):t.createElement(g,l({ref:a},u))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[c]="string"==typeof e?e:r,l[1]=p;for(var d=2;d<i;d++)l[d]=n[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}k.displayName="MDXCreateElement"},98810:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var t=n(87462),r=(n(67294),n(3905));const i={authors:["xiangcheng.kuo"],tags:["binary-build","java-packager","gradle-plugin"]},l="\u4f7f\u7528Gradle\u7684JavaPackager\u63d2\u4ef6\u5c06Java\u5e94\u7528\u6253\u5305\u6210\u4e8c\u8fdb\u5236\u6587\u4ef6",p={permalink:"/zh-CN/blog/2023/04/15/use-gradle-plugin-java-packager-to-build-binary-java-app",source:"@site/blog/2023-04-15/use-gradle-plugin-java-packager-to-build-binary-java-app.md",title:"\u4f7f\u7528Gradle\u7684JavaPackager\u63d2\u4ef6\u5c06Java\u5e94\u7528\u6253\u5305\u6210\u4e8c\u8fdb\u5236\u6587\u4ef6",description:"\u5728\u4e4b\u524d\u7684\u6587\u7ae0\u4e2d, \u6211\u4ecb\u7ecd\u8fc7\u5982\u4f55\u901a\u8fc7graalvm\u5c06java\u5e94\u7528\u6253\u5305\u6210\u4e8c\u8fdb\u5236\u6587\u4ef6, \u4f46\u662f\u8fd9\u79cd\u65b9\u5f0f\u9700\u8981\u5728graalvm\u4e2d\u5b89\u88c5native-image",date:"2023-04-15T00:00:00.000Z",formattedDate:"2023\u5e744\u670815\u65e5",tags:[{label:"binary-build",permalink:"/zh-CN/blog/tags/binary-build"},{label:"java-packager",permalink:"/zh-CN/blog/tags/java-packager"},{label:"gradle-plugin",permalink:"/zh-CN/blog/tags/gradle-plugin"}],readingTime:6.02,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["binary-build","java-packager","gradle-plugin"]},prevItem:{title:"\u4f7f\u7528S3\u6258\u7ba1\u9759\u6001\u7f51\u7ad9",permalink:"/zh-CN/blog/2023/04/16/hosting-a-static-website-using-s3"},nextItem:{title:"\u89e3\u51b3\u5728Kotlin Coroutines\u4e2d\u7684\u547d\u4ee4\u884c\u8c03\u7528\u4e2d\u51fa\u73b0Stream Closed\u5f02\u5e38",permalink:"/zh-CN/blog/2023/04/05/fix-stream-closed-exception-in-command-line-invocation-in-kotlin-coroutine"}},o={authorsImageUrls:[void 0]},d=[{value:"\u6dfb\u52a0\u63d2\u4ef6",id:"\u6dfb\u52a0\u63d2\u4ef6",level:2},{value:"\u63d2\u4ef6\u914d\u7f6e",id:"\u63d2\u4ef6\u914d\u7f6e",level:2},{value:"\u6784\u5efa",id:"\u6784\u5efa",level:2},{value:"\u5df2\u77e5\u95ee\u9898",id:"\u5df2\u77e5\u95ee\u9898",level:2},{value:"<code>packagingJdk</code>\u4e0d\u4f1a\u81ea\u52a8\u63a8\u65ad\u5bfc\u81f4\u6253\u5305\u5931\u8d25",id:"packagingjdk\u4e0d\u4f1a\u81ea\u52a8\u63a8\u65ad\u5bfc\u81f4\u6253\u5305\u5931\u8d25",level:3},{value:"\u95ee\u9898\u539f\u56e0",id:"\u95ee\u9898\u539f\u56e0",level:4},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:4},{value:"<code>jdeps</code>\u547d\u4ee4\u6267\u884c\u5931\u8d25\u62a5\u9519<code>Module xxx not found, required by xxx</code>",id:"jdeps\u547d\u4ee4\u6267\u884c\u5931\u8d25\u62a5\u9519module-xxx-not-found-required-by-xxx",level:3},{value:"\u95ee\u9898\u539f\u56e0",id:"\u95ee\u9898\u539f\u56e0-1",level:4},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-1",level:4},{value:"<code>jdeps</code>\u547d\u4ee4\u6267\u884c\u5931\u8d25\u62a5\u9519<code>java.util.concurrent.ExecutionException: com.sun.tools.jdeps.MultiReleaseException</code>",id:"jdeps\u547d\u4ee4\u6267\u884c\u5931\u8d25\u62a5\u9519javautilconcurrentexecutionexception-comsuntoolsjdepsmultireleaseexception",level:3},{value:"\u6784\u5efa\u8fc7\u7a0b\u4e2d\u51fa\u73b0<code>java.lang.Exception: https://github.com/AppImage/AppImageKit/releases/download/13/appimagetool-x86_64.AppImagenot found! ... Unsupported OS architecture x86_64?</code>",id:"\u6784\u5efa\u8fc7\u7a0b\u4e2d\u51fa\u73b0javalangexception-httpsgithubcomappimageappimagekitreleasesdownload13appimagetool-x86_64appimagenot-found--unsupported-os-architecture-x86_64",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-2",level:4},{value:"<code>arch</code>\u914d\u7f6e\u4e0d\u751f\u6548\u5bfc\u81f4\u751f\u6210\u51fa\u7684deb\u6587\u4ef6\u65e0\u6cd5\u5b89\u88c5",id:"arch\u914d\u7f6e\u4e0d\u751f\u6548\u5bfc\u81f4\u751f\u6210\u51fa\u7684deb\u6587\u4ef6\u65e0\u6cd5\u5b89\u88c5",level:3},{value:"\u95ee\u9898\u539f\u56e0",id:"\u95ee\u9898\u539f\u56e0-2",level:4},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-3",level:4},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2},{value:"\u89e3\u538bAppImage",id:"\u89e3\u538bappimage",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],u={toc:d},c="wrapper";function m(e){let{components:a,...n}=e;return(0,r.kt)(c,(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728\u4e4b\u524d\u7684\u6587\u7ae0\u4e2d, \u6211\u4ecb\u7ecd\u8fc7\u5982\u4f55\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"graalvm"),"\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"java"),"\u5e94\u7528\u6253\u5305\u6210\u4e8c\u8fdb\u5236\u6587\u4ef6, \u4f46\u662f\u8fd9\u79cd\u65b9\u5f0f\u9700\u8981\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"graalvm"),"\u4e2d\u5b89\u88c5",(0,r.kt)("inlineCode",{parentName:"p"},"native-image"),"\n\u5de5\u5177, \u5e76\u4e14\u9700\u8981\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"graalvm"),"\u4e2d\u7f16\u8bd1",(0,r.kt)("inlineCode",{parentName:"p"},"java"),"\u5e94\u7528, \u8fd9\u6837\u7684\u65b9\u5f0f\u5bf9\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"java"),"\u5e94\u7528\u7684\u5f00\u53d1\u8005\u6765\u8bf4, \u6709\u4e00\u5b9a\u7684\u95e8\u69db, \u800c\u4e14\u4e5f\u4e0d\u591f\u7075\u6d3b.\n\u5e76\u4e14\u6784\u5efa\u8fc7\u7a0b\u4e2d\u7531\u4e8e\u4ee3\u7801\u6ca1\u6709\u6ee1\u8db3",(0,r.kt)("inlineCode",{parentName:"p"},"graalvm"),"\u7684\u8981\u6c42, \u4f8b\u5982\u4f7f\u7528\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"java"),"\u7684\u53cd\u5c04\u673a\u5236, \u4f1a\u5bfc\u81f4\u6784\u5efa\u5931\u8d25(\ngraalvm\u9700\u8981\u5728\u7f16\u8bd1\u65f6\u5c31\u77e5\u9053\u8fd9\u4e9b\u4fe1\u606f\u6765\u751f\u6210)\n\u4e0b\u9762\u5c06\u4ecb\u7ecd\u53e6\u4e00\u79cd\u65b9\u5f0f, \u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"gradle"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"JavaPackager"),"\u63d2\u4ef6\u6765\u6784\u5efa\u4e8c\u8fdb\u5236\u6587\u4ef6."),(0,r.kt)("h2",{id:"\u6dfb\u52a0\u63d2\u4ef6"},"\u6dfb\u52a0\u63d2\u4ef6"),(0,r.kt)("p",null,"\u8981\u542f\u7528\u6b64\u63d2\u4ef6, \u9700\u8981\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle.kts"),"\u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e:"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u7531\u4e8e\u8be5\u63d2\u4ef6\u6ca1\u6709\u53d1\u5e03\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"gradle"),"\u7684\u63d2\u4ef6\u4ed3\u5e93\u4e2d, \u6240\u4ee5\u9700\u8981\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"buildscript"),"\u4e2d\u6dfb\u52a0\u5bf9\u5e94\u7684\u4f9d\u8d56\u5e76\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"apply"),"\u6765\u542f\u7528\u8be5\u63d2\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="build.gradle.kts"',title:'"build.gradle.kts"'},'buildscript {\n    repositories {\n        maven { setUrl("https://mirrors.huaweicloud.com/repository/maven/") }\n        maven { setUrl("https://mirrors.tencent.com/nexus/repository/maven-public/") }\n        maven { setUrl("https://maven.aliyun.com/nexus/content/groups/public/") }\n        maven { setUrl("https://oss.sonatype.org/content/repositories/snapshots") }\n    }\n    dependencies {\n        classpath("io.github.fvarrui:javapackager:1.7.0")\n    }\n}\n\napply(plugin = "io.github.fvarrui.javapackager.plugin")\n')),(0,r.kt)("h2",{id:"\u63d2\u4ef6\u914d\u7f6e"},"\u63d2\u4ef6\u914d\u7f6e"),(0,r.kt)("p",null,"\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"linux"),"\u4e3a\u4f8b, \u4ecb\u7ecd\u5982\u4f55\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"JavaPackager"),"\u63d2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="build.gradle.kts"',title:'"build.gradle.kts"'},'configure<PackagePluginExtension>() {\n    mainClass("<MAIN-CLASS>")\n    platform(Platform.linux)\n    packagingJdk(file(System.getProperty("java.home")))\n    // arch(Arch.x64) not work\n    // arch is not configured in DefaultPackageTask(\u5bfc\u81f4\u81ea\u5b9a\u4e49arch\u5931\u6548)\n    // packagingJdk\u6ca1\u6709\u8bbe\u7f6e\u9ed8\u8ba4\u503c(\u5bfc\u81f4jink\u5b9a\u4f4d\u5230\u4e86/bin\u76ee\u5f55\u4e0b\u800c\u4e0d\u662f\u7528\u6237\u7684jdk\u7684home\u76ee\u5f55\u4e0b\u7684bin\u76ee\u5f55)\n}\n')),(0,r.kt)("p",null,"\u5c06\u4e0a\u9762\u7684\u7684\u6a21\u677f\u66ff\u6362\u4e3a\u81ea\u5df1\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"mainClass"),"\u5373\u53ef, \u5176\u4ed6\u7684\u914d\u7f6e\u53ef\u4ee5\u6839\u636e\u9700\u8981\u8fdb\u884c\u4fee\u6539."),(0,r.kt)("h2",{id:"\u6784\u5efa"},"\u6784\u5efa"),(0,r.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u5373\u53ef\u6784\u5efa:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./gradlew package -x test\n")),(0,r.kt)("h2",{id:"\u5df2\u77e5\u95ee\u9898"},"\u5df2\u77e5\u95ee\u9898"),(0,r.kt)("h3",{id:"packagingjdk\u4e0d\u4f1a\u81ea\u52a8\u63a8\u65ad\u5bfc\u81f4\u6253\u5305\u5931\u8d25"},(0,r.kt)("inlineCode",{parentName:"h3"},"packagingJdk"),"\u4e0d\u4f1a\u81ea\u52a8\u63a8\u65ad\u5bfc\u81f4\u6253\u5305\u5931\u8d25"),(0,r.kt)("p",null,"\u6267\u884c\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u5982\u4e0b\u9519\u8bef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"}," /bin/sh: 1: /bin/jdeps: not found\n")),(0,r.kt)("h4",{id:"\u95ee\u9898\u539f\u56e0"},"\u95ee\u9898\u539f\u56e0"),(0,r.kt)("p",null,"\u8be5\u95ee\u9898\u7684\u539f\u56e0\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"JavaPackager"),"\u63d2\u4ef6\u5728\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"jdeps"),"\u547d\u4ee4\u65f6\u4f1a\u6839\u636e",(0,r.kt)("inlineCode",{parentName:"p"},"packagingJdk"),"\u914d\u7f6e\u7684\u503c\u62fc\u63a5",(0,r.kt)("inlineCode",{parentName:"p"},"/bin/jdeps"),"\u6765\u6267\u884c,\n\u4f46\u662f\u7531\u4e8e\u6ca1\u6709\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"packagingJdk"),"\u7684\u503c, \u6240\u4ee5\u9ed8\u8ba4\u4f7f\u7528\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"/bin/jdeps"),"\u6765\u6267\u884c, \u4f46\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"/bin/jdeps"),"\u5e76\u4e0d\u5b58\u5728, \u6240\u4ee5\u5bfc\u81f4\u4e86\u4e0a\u9762\u7684\u9519\u8bef."),(0,r.kt)("p",null,"\u76f8\u5173\u4ee3\u7801\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"io.github.fvarrui.javapackager.packagers.BundleJre"),"\u7c7b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"doApply"),"\u65b9\u6cd5\u4e2d, \u8fd9\u4e2a\u65b9\u6cd5\u4e2d\u4f1a\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"jdeps"),"\u547d\u4ee4\u6765\u83b7\u53d6\u4f9d\u8d56\u4fe1\u606f."),(0,r.kt)("h4",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,r.kt)("p",null,"\u89e3\u51b3\u65b9\u6848\u5c31\u662f\u5728\u4e0a\u9762\u7684\u914d\u7f6e\u4e2d\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"packagingJdk"),"\u7684\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},'packagingJdk(file(System.getProperty("java.home")))'),"."),(0,r.kt)("h3",{id:"jdeps\u547d\u4ee4\u6267\u884c\u5931\u8d25\u62a5\u9519module-xxx-not-found-required-by-xxx"},(0,r.kt)("inlineCode",{parentName:"h3"},"jdeps"),"\u547d\u4ee4\u6267\u884c\u5931\u8d25\u62a5\u9519",(0,r.kt)("inlineCode",{parentName:"h3"},"Module xxx not found, required by xxx")),(0,r.kt)("p",null,"\u5728\u6211\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"case"),"\u4e2d\u62a5\u9519\u4e3a:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"Module org.yaml.snakeyaml not found, required by com.fasterxml.jackson.dataformat.yaml\n")),(0,r.kt)("h4",{id:"\u95ee\u9898\u539f\u56e0-1"},"\u95ee\u9898\u539f\u56e0"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u901a\u5e38\u662f\u56e0\u4e3a\u88ab\u4f9d\u8d56\u7684\u6a21\u5757\u7248\u672c\u9700\u8981\u5347\u7ea7\u5230\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"p"},"java9"),"\u6a21\u5757\u5316\u4e4b\u540e\u7684\u7248\u672c"),(0,r.kt)("h4",{id:"\u89e3\u51b3\u65b9\u6848-1"},"\u89e3\u51b3\u65b9\u6848"),(0,r.kt)("p",null,"\u5728\u6211\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"case"),"\u4e2d\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"org.yaml.snakeyaml"),"\u9700\u8981\u5347\u7ea7, \u5728",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle.kts"),"\u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\u540e\u95ee\u9898\u89e3\u51b3:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="build.gradle.kts"',title:'"build.gradle.kts"'},'implementation("org.yaml:snakeyaml:2.0")\n')),(0,r.kt)("h3",{id:"jdeps\u547d\u4ee4\u6267\u884c\u5931\u8d25\u62a5\u9519javautilconcurrentexecutionexception-comsuntoolsjdepsmultireleaseexception"},(0,r.kt)("inlineCode",{parentName:"h3"},"jdeps"),"\u547d\u4ee4\u6267\u884c\u5931\u8d25\u62a5\u9519",(0,r.kt)("inlineCode",{parentName:"h3"},"java.util.concurrent.ExecutionException: com.sun.tools.jdeps.MultiReleaseException")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f\u56e0\u4e3ajdk17\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"jdeps"),"\u547d\u4ee4\u5b58\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"bug"),"(\u65e0\u6cd5\u5904\u7406\u4e0d\u540cjar\u4e2d\u5177\u6709\u76f8\u540c\u540d\u79f0\u7684\u7c7b)\u5bfc\u81f4\u7684, \u5728jdk18\u4e2d\u5df2\u7ecf\u4fee\u590d\u4e86\u8fd9\u4e2a\u95ee\u9898."),(0,r.kt)("p",null,"\u5173\u4e8e\u8fd9\u4e2a\u95ee\u9898\u7684\u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/69943899/jdeps-cant-print-module-deps-due-to-a-multireleaseexception"},"jdeps can't print-module-deps due to a MultiReleaseException")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bugs.openjdk.org/browse/JDK-8277165"},"JDK-8277165")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bugs.openjdk.org/browse/JDK-8277166"},"JDK-8277166")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bugs.openjdk.org/browse/JDK-8277123"},"JDK-8277123"))),(0,r.kt)("h3",{id:"\u6784\u5efa\u8fc7\u7a0b\u4e2d\u51fa\u73b0javalangexception-httpsgithubcomappimageappimagekitreleasesdownload13appimagetool-x86_64appimagenot-found--unsupported-os-architecture-x86_64"},"\u6784\u5efa\u8fc7\u7a0b\u4e2d\u51fa\u73b0",(0,r.kt)("inlineCode",{parentName:"h3"},"java.lang.Exception: https://github.com/AppImage/AppImageKit/releases/download/13/appimagetool-x86_64.AppImagenot found! ... Unsupported OS architecture x86_64?")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f\u5728\u6253\u5305",(0,r.kt)("inlineCode",{parentName:"p"},"linux"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"AppImage"),"\u65f6, \u4f1a\u53bb\u4e0b\u8f7d",(0,r.kt)("inlineCode",{parentName:"p"},"appimagetool"),"\u6765\u8fdb\u884c\u6253\u5305, \u4e0b\u8f7d\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u4f1a\u51fa\u73b0\u7f51\u7edc\u95ee\u9898\u5bfc\u81f4\u4e0b\u8f7d\u5931\u8d25,\n\u4ece\u800c\u5bfc\u81f4\u6253\u5305\u5931\u8d25.\n\u4f46\u662f\u4f5c\u8005\u6355\u83b7\u76f8\u5173\u5f02\u5e38\u540e\u6ca1\u6709\u5c06\u539f\u59cb\u4fe1\u606f\u6253\u5370\u51fa\u6765, \u5bfc\u81f4\u6211\u4eec\u65e0\u6cd5\u77e5\u9053\u5177\u4f53\u7684\u9519\u8bef\u4fe1\u606f, \u4ece\u800c\u5bfc\u81f4\u4e86\u4e0a\u9762\u7684\u9519\u8bef.\n(\u8fd9\u4e2a\u5f02\u5e38\u4fe1\u606f\u662f\u4f2a\u4fe1\u606f)"),(0,r.kt)("p",null,"\u76f8\u5173\u4ee3\u7801\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"io.github.fvarrui.javapackager.packagers.GenerateAppImage"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"getAppImageTool"),"\u65b9\u6cd5\u4e2d.",(0,r.kt)("br",null)),(0,r.kt)("h4",{id:"\u89e3\u51b3\u65b9\u6848-2"},"\u89e3\u51b3\u65b9\u6848"),(0,r.kt)("p",null,"\u91cd\u8bd5\u540e\u95ee\u9898\u89e3\u51b3.\u5bf9\u4e8e\u8fd9\u4e2a\u95ee\u9898\u540e\u7eed\u8ba1\u5212\u63d0PR\u7ed9\u4f5c\u8005."),(0,r.kt)("h3",{id:"arch\u914d\u7f6e\u4e0d\u751f\u6548\u5bfc\u81f4\u751f\u6210\u51fa\u7684deb\u6587\u4ef6\u65e0\u6cd5\u5b89\u88c5"},(0,r.kt)("inlineCode",{parentName:"h3"},"arch"),"\u914d\u7f6e\u4e0d\u751f\u6548\u5bfc\u81f4\u751f\u6210\u51fa\u7684deb\u6587\u4ef6\u65e0\u6cd5\u5b89\u88c5"),(0,r.kt)("p",null,"\u6267\u884c\u5b8c",(0,r.kt)("inlineCode",{parentName:"p"},"package"),"\u4efb\u52a1\u540e, \u4f1a\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"build"),"\u76ee\u5f55\u4e0b\u751f\u6210\u76f8\u5e94\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"deb"),"\u6587\u4ef6\u540d\u79f0\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"xxx.deb"),".\n\u5bf9\u6b64\u6587\u4ef6\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"sudo dpkg -i xxx.deb"),"\u547d\u4ee4\u4f1a\u51fa\u73b0\u5982\u4e0b\u9519\u8bef:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"dpkg: warning: parsing file '/var/lib/dpkg/tmp.ci/control' near line 5 package 'upshift:${info.arch.deb}':\n '${info.arch.deb}' is not a valid architecture name in 'Architecture' field: must start with an alphanumeric\ndpkg: error processing archive upshift_1.0-SNAPSHOT.deb (--install):\n package architecture (${info.arch.deb}) does not match system (amd64)\nErrors were encountered while processing:\n upshift_1.0-SNAPSHOT.deb\n")),(0,r.kt)("p",null,"\u540e\u7eed\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"gradle"),"\u4e2d\u7684task\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"arch(Arch.x64)"),"\u4f9d\u7136\u4e0d\u751f\u6548."),(0,r.kt)("h4",{id:"\u95ee\u9898\u539f\u56e0-2"},"\u95ee\u9898\u539f\u56e0"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"JavaPackager"),"\u63d2\u4ef6\u5bf9\u5e94\u7684gradle\u4e2d\u7684\u5b9e\u73b0\u7c7b\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"io.github.fvarrui.javapackager.gradle.DefaultPackageTask"),",\n\u6b64\u63d2\u4ef6\u5e76\u6ca1\u6709\u83b7\u53d6\u6211\u4eec\u914d\u7f6e\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"PackagePluginExtension"),"\u4e2d\u7684\u503c.\n\u540e\u7eed",(0,r.kt)("inlineCode",{parentName:"p"},"io.github.fvarrui.javapackager.packagers.GenerateDeb"),"\u4f1a\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"velocity"),"\u6765\u6e32\u67d3",(0,r.kt)("inlineCode",{parentName:"p"},"control.vtl"),".\n\u7531\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"arch"),"\u4e3a\u7a7a, \u6240\u4ee5\u5bfc\u81f4",(0,r.kt)("inlineCode",{parentName:"p"},"${info.arch.deb}"),"\u6ca1\u6709\u88ab\u6e32\u67d3, \u6a21\u677f\u5185\u5bb9\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:'language-title="control.vtl"'},"Package: ${info.name}\nVersion: ${info.version}\nSection: misc\nPriority: optional\nArchitecture: ${info.arch.deb}\nMaintainer: ${info.organizationName} <$!{info.organizationEmail}>\nDescription: ${info.description}\nDistribution: development\n#if(${info.url})\nHomepage: ${info.url}\n#end\n")),(0,r.kt)("h4",{id:"\u89e3\u51b3\u65b9\u6848-3"},"\u89e3\u51b3\u65b9\u6848"),(0,r.kt)("p",null,"\u76ee\u524d\u6ca1\u6709\u4e00\u4e2a\u597d\u7684\u529e\u6cd5\u89e3\u51b3\u6b64\u95ee\u9898, \u540e\u7eed\u51c6\u5907\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"JavaPackager"),"\u63d2\u4ef6\u4e2d\u63d0\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"PR"),"\u6765\u89e3\u51b3\u6b64\u95ee\u9898."),(0,r.kt)("h2",{id:"\u5907\u6ce8"},"\u5907\u6ce8"),(0,r.kt)("h3",{id:"\u89e3\u538bappimage"},"\u89e3\u538bAppImage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./xxx.AppImage --appimage-extract\n")),(0,r.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fvarrui/JavaPackager/blob/master/src/main/java/io/github/fvarrui/javapackager/packagers/BundleJre.java"},"BundleJre.java")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fvarrui/JavaPackager/blob/master/src/main/java/io/github/fvarrui/javapackager/gradle/DefaultPackageTask.java"},"DefaultPackageTask.java")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fvarrui/JavaPackager/blob/master/src/main/java/io/github/fvarrui/javapackager/packagers/LinuxPackager.java"},"LinuxPackager.java")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fvarrui/JavaPackager/blob/master/src/main/java/io/github/fvarrui/javapackager/packagers/GenerateDeb.java"},"GenerateDeb.java")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fvarrui/JavaPackager/blob/master/src/main/resources/linux/control.vtl"},"control.vtl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fvarrui/JavaPackager/blob/master/src/main/java/io/github/fvarrui/javapackager/packagers/GenerateAppImage.java"},"GenerateAppImage.java"))))}m.isMDXComponent=!0}}]);