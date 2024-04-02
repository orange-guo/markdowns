"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[9627],{35613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=n(85893),a=n(11151);const i={authors:["xiangcheng.kuo"],tags:["problem-solving","spring-cloud","spring-cloud-openfeign","openfeign"]},l="\u5347\u7ea7\u6846\u67b6\u540e\u53d1\u73b0Feign\u8c03\u7528\u5931\u8d25\u65f6\u95f4\u683c\u5f0f\u5316\u95ee\u9898\u7684\u6392\u67e5\u548c\u89e3\u51b3",s={permalink:"/zh-CN/blog/2023/12/22/openfeign-zoned-datetime-formatting-problem",source:"@site/blog/2023-12-22/openfeign-zoned-datetime-formatting-problem.md",title:"\u5347\u7ea7\u6846\u67b6\u540e\u53d1\u73b0Feign\u8c03\u7528\u5931\u8d25\u65f6\u95f4\u683c\u5f0f\u5316\u95ee\u9898\u7684\u6392\u67e5\u548c\u89e3\u51b3",description:"\u95ee\u9898\u73b0\u8c61",date:"2023-12-22T00:00:00.000Z",tags:[{label:"problem-solving",permalink:"/zh-CN/blog/tags/problem-solving"},{label:"spring-cloud",permalink:"/zh-CN/blog/tags/spring-cloud"},{label:"spring-cloud-openfeign",permalink:"/zh-CN/blog/tags/spring-cloud-openfeign"},{label:"openfeign",permalink:"/zh-CN/blog/tags/openfeign"}],readingTime:8.31,hasTruncateMarker:!1,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","spring-cloud","spring-cloud-openfeign","openfeign"]},unlisted:!1,prevItem:{title:"kopia\u63a5\u5165\u706b\u5c71\u4e91TOS\u62a5\u9519Access Denied\u95ee\u9898\u7684\u6392\u67e5\u53ca\u4fee\u590d",permalink:"/zh-CN/blog/2024/03/14/kopia-integration-with-volcano-cloud-tos-access-denied-issue-investigation-and-fix"},nextItem:{title:"\u5347\u7ea7\u5230spring-boot-3.1.0\u540enative-image\u542f\u52a8\u62a5\u9519\u4ee5\u53ca\u95ee\u9898\u89e3\u51b3",permalink:"/zh-CN/blog/2023/06/01/upgrading-to-spring-boot-3.1.0-native-image-startup-errors-and-solutions"}},d={authorsImageUrls:[void 0]},o=[{value:"\u95ee\u9898\u73b0\u8c61",id:"\u95ee\u9898\u73b0\u8c61",level:2},{value:"\u95ee\u9898\u539f\u56e0",id:"\u95ee\u9898\u539f\u56e0",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u95ee\u9898\u6392\u67e5\u8fc7\u7a0b",id:"\u95ee\u9898\u6392\u67e5\u8fc7\u7a0b",level:2}];function c(e){const t={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\u95ee\u9898\u73b0\u8c61",children:"\u95ee\u9898\u73b0\u8c61"}),"\n",(0,r.jsx)(t.p,{children:"\u5347\u7ea7\u5185\u90e8\u6846\u67b6\u7248\u672c\u540e\uff0c\u53d1\u73b0Feign\u8c03\u7528\u5931\u8d25\uff0c\u62a5\u9519\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-log",children:"Failed to convert value of type 'java.lang.String' to required type 'java.time.ZonedDateTime'; \nnested exception is org.springframework.core.convert.ConversionFailedException: \n\tFailed to convert from type [java.lang.String] to type [@org.springframework.web.bind.annotation.RequestParam @org.springframework.format.annotation.DateTimeFormat java.time.ZonedDateTime] for value '2023/12/18 02:57'; \n\tnested exception is java.lang.IllegalArgumentException: Parse attempt failed for value [2023/12/18 02:57]\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u5ba2\u6237\u7aef\u4f2a\u4ee3\u7801\u5982\u4e0b:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'public interface FeignClient {\n\n\t@GetMapping("/")\n\tList<PlatformStandardOrderDto> test(\n\t\t\t@RequestParam ZonedDateTime startTime,\n\t\t\t@RequestParam ZonedDateTime endTime\n\t);\n\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["\u8fd9\u4e2a\u95ee\u9898\u7684\u73b0\u8c61\u662fFeign\u8c03\u7528\u65f6\u53c2\u6570\u4e2d\u7684",(0,r.jsx)(t.code,{children:"ZonedDatetime"}),"\u7c7b\u578b\u7684\u65f6\u95f4\u683c\u5f0f\u5316\u7684\u7ed3\u679c\u670d\u52a1\u7aef\u65e0\u6cd5\u89e3\u6790"]}),"\n",(0,r.jsx)(t.h2,{id:"\u95ee\u9898\u539f\u56e0",children:"\u95ee\u9898\u539f\u56e0"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u6846\u67b6\u5347\u7ea7\u524d\u540e\u5185\u90e8\u7684\u65f6\u95f4\u683c\u5f0f\u5316\u884c\u4e3a\u53d1\u751f\u4e86\u53d8\u5316\u5bfc\u81f4\u8fd9\u4e2a\u95ee\u9898\u7684\u51fa\u73b0.",(0,r.jsx)("br",{}),"\n\u5728\u65e9\u671f\u6846\u67b6\u4e2d\u6211\u4eec\u81ea\u5b9a\u4e49\u4e86\u4e00\u4e2a",(0,r.jsx)(t.code,{children:"SpringMvcContract"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"@Bean\n@Primary\nfun contract(mapper: ObjectMapper, discoverer: DefaultParameterNameDiscoverer): Contract =\n\tSpringMvcContract(\n\t\tlistOf(\n\t\t\tEntityFiltersMappingParameterProcessor(mapper, discoverer),\n\t\t\tMatrixVariableParameterProcessor(),\n\t\t\tRequestHeaderParameterProcessor(),\n\t\t\tPathVariableParameterProcessor(),\n\t\t\tRequestPartParameterProcessor(),\n\t\t\tQueryMapParameterProcessor()\n\t\t)\n\t)\n"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"SpringMvcContract"}),"\u591f\u5e2e\u52a9\u6211\u4eec\u5b9e\u73b0Feign\u7684\u6ce8\u89e3\u53c2\u6570\u7684\u89e3\u6790(\u4f8b\u5982",(0,r.jsx)(t.code,{children:"@RequestParam"}),", ",(0,r.jsx)(t.code,{children:"@PathVariable"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u6846\u67b6\u5347\u7ea7\u524d\u7684\u884c\u4e3a:",(0,r.jsx)("br",{}),"\n\u7531\u4e8e\u6846\u67b6\u5347\u7ea7\u524d\u7684\u4ee3\u7801\u6ca1\u6709\u4e3a",(0,r.jsx)(t.code,{children:"SpringMvcContract"}),"\u914d\u7f6e",(0,r.jsx)(t.code,{children:"ConversionService"}),", \u6240\u4ee5",(0,r.jsx)(t.code,{children:"SpringMvcContract"}),"\u65e0\u6cd5\u5904\u7406",(0,r.jsx)(t.code,{children:"ZonedDateTime"}),"\n\u4ece\u800c\u5bfc\u81f4\u89e6\u53d1\u4e86Feign\u7684\u9ed8\u8ba4\u884c\u4e3a\u4e5f\u5c31\u662f\u8c03\u7528\u53c2\u6570\u7684",(0,r.jsx)(t.code,{children:"toString"}),"\u65b9\u6cd5\u6765\u5c06\u53c2\u6570\u8f6c\u4e3aString, \u5bf9\u4e8e",(0,r.jsx)(t.code,{children:"ZonedDateTime"}),"\u7c7b\u578b\u7684\u53c2\u6570,\n\u8c03\u7528",(0,r.jsx)(t.code,{children:"toString"}),"\u65b9\u6cd5, \u751f\u6210\u7684\u5b57\u7b26\u4e32\u683c\u5f0f\u4e3a",(0,r.jsx)(t.code,{children:"iso-8601"}),"\u683c\u5f0f, \u4f8b\u5982",(0,r.jsx)(t.code,{children:"2023-12-18T02:57:00+08:00[Asia/Shanghai]"}),",\n\u8fd9\u79cd\u683c\u5f0f\u7684\u5b57\u7b26\u4e32\u670d\u52a1\u7aef\u662f\u53ef\u4ee5\u89e3\u6790\u7684"]}),"\n",(0,r.jsxs)(t.p,{children:["\u6846\u67b6\u5347\u7ea7\u540e\u7684\u884c\u4e3a:",(0,r.jsx)("br",{}),"\n\u7531\u4e8e\u6846\u67b6\u5185\u90e8\u914d\u7f6e\u4e86",(0,r.jsx)(t.code,{children:"ConversionService"}),", \u6240\u4ee5\u4f1a\u8c03\u7528",(0,r.jsx)(t.code,{children:"ConversionService"}),"\u7684",(0,r.jsx)(t.code,{children:"convert"}),"\n\u65b9\u6cd5\u6765\u5b9e\u73b0\u5c06\u53c2\u6570\u7684\u89e3\u6790, ",(0,r.jsx)(t.code,{children:"ConversionService"}),"\n\u6700\u7ec8\u4f1a\u59d4\u6258",(0,r.jsx)(t.code,{children:"FormattingConversionService"}),"\u5c06",(0,r.jsx)(t.code,{children:"ZonedDateTime"}),"\u7c7b\u578b\u7684\u53c2\u6570\u8f6c\u4e3a\u5b57\u7b26\u4e32, \u8fd9\u79cd\u60c5\u51b5\u4e0b,\n\u4f1a\u5c06\u65f6\u95f4\u8f6c\u4e3a",(0,r.jsx)(t.code,{children:"yyyy/MM/dd HH:mm"}),"\u683c\u5f0f\u7684\u5b57\u7b26\u4e32, \u6240\u4ee5\u5bfc\u81f4\u4e86\u670d\u52a1\u7aef\u65e0\u6cd5\u89e3\u6790."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,r.jsxs)(t.p,{children:["\u4e3a\u53c2\u6570\u589e\u52a0",(0,r.jsx)(t.code,{children:"@DateTimeFormat"}),"\u6ce8\u89e3\u6765\u6307\u5b9a\u65f6\u95f4\u683c\u5f0f\u5316\u7684\u683c\u5f0f, \u4f8b\u5982:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'public interface FeignClient {\n\n\t@GetMapping("/")\n\tList<PlatformStandardOrderDto> test(\n\t\t\t@DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) @RequestParam ZonedDateTime startTime,\n\t\t\t@DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) @RequestParam ZonedDateTime endTime\n\t);\n\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u95ee\u9898\u6392\u67e5\u8fc7\u7a0b",children:"\u95ee\u9898\u6392\u67e5\u8fc7\u7a0b"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\u5f53FeignClient\u63a5\u53e3\u7684\u65b9\u6cd5\u88ab\u8c03\u7528\u65f6, \u4f1a\u8c03\u7528",(0,r.jsx)(t.code,{children:"ReflectiveFeign"}),"\u6765\u59d4\u6258",(0,r.jsx)(t.code,{children:"MethodHandler"}),"\u6765\u5904\u7406\u65b9\u6cd5\u8c03\u7528"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'\n@Override\npublic Object invoke(Object proxy, Method method, Object[] args) throws Throwable {\n\tif ("equals".equals(method.getName())) {\n\t\ttry {\n\t\t\tObject otherHandler =\n\t\t\t\t\targs.length > 0 && args[0] != null ? Proxy.getInvocationHandler(args[0]) : null;\n\t\t\treturn equals(otherHandler);\n\t\t} catch (IllegalArgumentException e) {\n\t\t\treturn false;\n\t\t}\n\t} else if ("hashCode".equals(method.getName())) {\n\t\treturn hashCode();\n\t} else if ("toString".equals(method.getName())) {\n\t\treturn toString();\n\t}\n\n\treturn dispatch.get(method).invoke(args);\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["\u5176\u4e2d",(0,r.jsx)(t.code,{children:"dispatch"}),"\u662f\u7528\u6765\u4fdd\u5b58\u65b9\u6cd5\u540d\u79f0\u548c",(0,r.jsx)(t.code,{children:"MethodHandler"}),"\u7684\u6620\u5c04\u5173\u7cfb\u7684, ",(0,r.jsx)(t.code,{children:"MethodHandler"}),"\u662f\u7528\u6765\u5904\u7406\u65b9\u6cd5\u8c03\u7528(\n\u5f53\u524d\u7684\u5b9e\u73b0\u4e2d",(0,r.jsx)(t.code,{children:"MethodHandler"}),"\u662f",(0,r.jsx)(t.code,{children:"SynchronousMethodHandler"}),")"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"MethodHandler\u5185\u90e8\u7684invoke\u6267\u884c\u6d41\u7a0b\u5982\u4e0b:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"\n@Override\npublic Object invoke(Object[] argv) throws Throwable {\n\tRequestTemplate template = buildTemplateFromArgs.create(argv);\n\tOptions options = findOptions(argv);\n\tRetryer retryer = this.retryer.clone();\n\twhile (true) {\n\t\ttry {\n\t\t\treturn executeAndDecode(template, options);\n\t\t} catch (RetryableException e) {\n\t\t\ttry {\n\t\t\t\tretryer.continueOrPropagate(e);\n\t\t\t} catch (RetryableException th) {\n\t\t\t\tThrowable cause = th.getCause();\n\t\t\t\tif (propagationPolicy == UNWRAP && cause != null) {\n\t\t\t\t\tthrow cause;\n\t\t\t\t} else {\n\t\t\t\t\tthrow th;\n\t\t\t\t}\n\t\t\t}\n\t\t\tif (logLevel != Logger.Level.NONE) {\n\t\t\t\tlogger.logRetry(metadata.configKey(), logLevel);\n\t\t\t}\n\t\t\tcontinue;\n\t\t}\n\t}\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\u4e0a\u8ff0\u4ee3\u7801\u4e2d\u6211\u4eec\u9700\u8981\u5173\u5fc3\u7684\u662f",(0,r.jsx)(t.code,{children:"buildTemplateFromArgs.create(argv);"}),"\u8fd9\u4e00\u884c,\n\u8fd9\u4e00\u884c\u4ee3\u7801\u4f1a\u6839\u636e\u65b9\u6cd5\u7684\u53c2\u6570\u6765\u6784\u5efa",(0,r.jsx)(t.code,{children:"RequestTemplate"}),",\n",(0,r.jsx)(t.code,{children:"RequestTemplate"}),"\u662f\u7528\u6765\u4fdd\u5b58\u8bf7\u6c42\u7684\u4fe1\u606f\u7684, \u4f8b\u5982\u8bf7\u6c42\u7684URL, \u8bf7\u6c42\u7684\u65b9\u6cd5,\n\u8bf7\u6c42\u7684\u53c2\u6570\u7b49\u7b49, \u53ea\u8981\u77e5\u9053\u4e86",(0,r.jsx)(t.code,{children:"RequestTemplate"}),"\u4e2d\u5bf9\u5e94\u53c2\u6570\u7684\u6784\u9020\u8fc7\u7a0b\u90a3\u4e48\u6211\u4eec\u5c31\u53ef\u4ee5\u77e5\u9053Feign\u662f\u5982\u4f55\u5c06\u53c2\u6570\u8f6c\u4e3a\u8bf7\u6c42\u7684\u53c2\u6570\u7684\u4e86"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"buildTemplateFromArgs.create(argv);"}),"\u7684\u5177\u4f53\u5b9e\u73b0\u5982\u4e0b:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'\n@Override\npublic RequestTemplate create(Object[] argv) {\n\tRequestTemplate mutable = RequestTemplate.from(metadata.template());\n\tmutable.feignTarget(target);\n\tif (metadata.urlIndex() != null) {\n\t\tint urlIndex = metadata.urlIndex();\n\t\tcheckArgument(argv[urlIndex] != null, "URI parameter %s was null", urlIndex);\n\t\tmutable.target(String.valueOf(argv[urlIndex]));\n\t}\n\tMap<String, Object> varBuilder = new LinkedHashMap<String, Object>();\n\tfor (Entry<Integer, Collection<String>> entry : metadata.indexToName().entrySet()) {\n\t\tint i = entry.getKey();\n\t\tObject value = argv[entry.getKey()];\n\t\tif (value != null) { // Null values are skipped.\n\t\t\tif (indexToExpander.containsKey(i)) {\n\t\t\t\tvalue = expandElements(indexToExpander.get(i), value);\n\t\t\t}\n\t\t\tfor (String name : entry.getValue()) {\n\t\t\t\tvarBuilder.put(name, value);\n\t\t\t}\n\t\t}\n\t}\n\n\tRequestTemplate template = resolve(argv, mutable, varBuilder);\n\tif (metadata.queryMapIndex() != null) {\n\t\t// add query map parameters after initial resolve so that they take\n\t\t// precedence over any predefined values\n\t\tObject value = argv[metadata.queryMapIndex()];\n\t\tMap<String, Object> queryMap = toQueryMap(value);\n\t\ttemplate = addQueryMapQueryParameters(queryMap, template);\n\t}\n\n\tif (metadata.headerMapIndex() != null) {\n\t\ttemplate =\n\t\t\t\taddHeaderMapHeaders((Map<String, Object>) argv[metadata.headerMapIndex()], template);\n\t}\n\n\treturn template;\n}\n\n\n'})}),"\n",(0,r.jsx)(t.p,{children:"\u4e0a\u8ff0\u4ee3\u7801\u4e2d\u6211\u4eec\u9700\u8981\u5173\u6ce8\u7684\u662f\u8fd9\u4e2a\u8bed\u53e5"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-log",children:"if (value != null) { // Null values are skipped.\n\tif (indexToExpander.containsKey(i)) {\n\t\tvalue = expandElements(indexToExpander.get(i), value);\n\t}\n\tfor (String name : entry.getValue()) {\n\t\tvarBuilder.put(name, value);\n\t}\n}\n\nprivate Object expandElements(Expander expander, Object value) {\n\tif (value instanceof Iterable) {\n\t\treturn expandIterable(expander, (Iterable) value);\n\t}\n\treturn expander.expand(value);\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\u8fd9\u4e2a\u8bed\u53e5\u4f1a\u5c06\u53c2\u6570\u8f6c\u4e3a",(0,r.jsx)(t.code,{children:"RequestTemplate"}),"\u4e2d\u7684\u53c2\u6570, ",(0,r.jsx)(t.code,{children:"Expander"}),"\u662f",(0,r.jsx)(t.code,{children:"Feign"}),"\u4e2d\u7684\u4e00\u4e2a\u63a5\u53e3, \u7528\u6765\u5c06\u53c2\u6570\u8f6c\u4e3a\u5b57\u7b26\u4e32,\n\u800c",(0,r.jsx)(t.code,{children:"indexToExpander"}),"\u8868\u8fbe\u7684\u662f\u53c2\u6570\u7684\u7d22\u5f15\u548c",(0,r.jsx)(t.code,{children:"Expander"}),"\u7684\u6620\u5c04\u5173\u7cfb,\n\u5728\u6211\u4eec\u7684",(0,r.jsx)(t.code,{children:"Case"}),"\u4e2d\u5b9e\u9645\u4e0a\u662f\u6ca1\u6709\u8d70\u5230",(0,r.jsx)(t.code,{children:"indexToExpander"}),"\u7684, \u6240\u4ee5\u6700\u7ec8\u4f1a\u76f4\u63a5\u8c03\u7528",(0,r.jsx)(t.code,{children:"varBuilder.put(name, value);"}),"\u8fd9\u4e00\u884c,\n\u8fd9\u4e00\u884c\u4f1a\u5c06\u53c2\u6570\u8f6c\u4e3a",(0,r.jsx)(t.code,{children:"RequestTemplate"}),"\u4e2d\u7684\u53c2\u6570,\n\u540e\u7eed\u9700\u8981\u5c06\u53c2\u6570\u503c\u8f6c\u4e3a\u5b57\u7b26\u4e32, \u6240\u4ee5\u8fd8\u9700\u8981\u4e86\u89e3",(0,r.jsx)(t.code,{children:"RequestTemplate"}),"\u4e2d\u7684\u53c2\u6570\u662f\u5982\u4f55\u8f6c\u4e3a\u5b57\u7b26\u4e32\u7684,\n\u6240\u4ee5\u9700\u8981\u67e5\u770b",(0,r.jsx)(t.code,{children:"RequestTemplate template = resolve(argv, mutable, varBuilder);"}),"\n\u8fd9\u4e00\u6bb5\u8c03\u7528\u7684resolve\u65b9\u6cd5, \u5177\u4f53\u5b9e\u73b0\u5982\u4e0b:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-log",children:"protected RequestTemplate resolve(Object[] argv,\n\t\t\t\t\t\t\t\t  RequestTemplate mutable,\n\t\t\t\t\t\t\t\t  Map<String, Object> variables) {\n\treturn mutable.resolve(variables);\n}\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\u63a5\u4e0b\u6765\u9700\u8981\u67e5\u770b",(0,r.jsx)(t.code,{children:"RequestTemplate"}),"\u4e2d\u7684",(0,r.jsx)(t.code,{children:"resolve"}),"\u65b9\u6cd5\u7684\u5b9e\u73b0, \u5177\u4f53\u5b9e\u73b0\u5982\u4e0b:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'public RequestTemplate resolve(Map<String, ?> variables) {\n\n\tStringBuilder uri = new StringBuilder();\n\n\t/* create a new template form this one, but explicitly */\n\tRequestTemplate resolved = RequestTemplate.from(this);\n\n\tif (this.uriTemplate == null) {\n\t\t/* create a new uri template using the default root */\n\t\tthis.uriTemplate = UriTemplate.create("", !this.decodeSlash, this.charset);\n\t}\n\n\tString expanded = this.uriTemplate.expand(variables);\n\tif (expanded != null) {\n\t\turi.append(expanded);\n\t}\n\n\t/*\n\t * for simplicity, combine the queries into the uri and use the resulting uri to seed the\n\t * resolved template.\n\t */\n\tif (!this.queries.isEmpty()) {\n\t\t/*\n\t\t * since we only want to keep resolved query values, reset any queries on the resolved copy\n\t\t */\n\t\tresolved.queries(Collections.emptyMap());\n\t\tStringBuilder query = new StringBuilder();\n\t\tIterator<QueryTemplate> queryTemplates = this.queries.values().iterator();\n\n\t\twhile (queryTemplates.hasNext()) {\n\t\t\tQueryTemplate queryTemplate = queryTemplates.next();\n\t\t\tString queryExpanded = queryTemplate.expand(variables);\n\t\t\tif (Util.isNotBlank(queryExpanded)) {\n\t\t\t\tquery.append(queryExpanded);\n\t\t\t\tif (queryTemplates.hasNext()) {\n\t\t\t\t\tquery.append("&");\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tString queryString = query.toString();\n\t\tif (!queryString.isEmpty()) {\n\t\t\tMatcher queryMatcher = QUERY_STRING_PATTERN.matcher(uri);\n\t\t\tif (queryMatcher.find()) {\n\t\t\t\t/* the uri already has a query, so any additional queries should be appended */\n\t\t\t\turi.append("&");\n\t\t\t} else {\n\t\t\t\turi.append("?");\n\t\t\t}\n\t\t\turi.append(queryString);\n\t\t}\n\t}\n\n\t/* add the uri to result */\n\tresolved.uri(uri.toString());\n\n\t/* headers */\n\tif (!this.headers.isEmpty()) {\n\t\t/*\n\t\t * same as the query string, we only want to keep resolved values, so clear the header map on\n\t\t * the resolved instance\n\t\t */\n\t\tresolved.headers(Collections.emptyMap());\n\t\tfor (HeaderTemplate headerTemplate : this.headers.values()) {\n\t\t\t/* resolve the header */\n\t\t\tString header = headerTemplate.expand(variables);\n\t\t\tif (!header.isEmpty()) {\n\t\t\t\t/* split off the header values and add it to the resolved template */\n\t\t\t\tString headerValues = header.substring(header.indexOf(" ") + 1);\n\t\t\t\tif (!headerValues.isEmpty()) {\n\t\t\t\t\t/* append the header as a new literal as the value has already been expanded. */\n\t\t\t\t\tresolved.header(headerTemplate.getName(), Literal.create(headerValues));\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\tif (this.bodyTemplate != null) {\n\t\tresolved.body(this.bodyTemplate.expand(variables));\n\t}\n\n\t/* mark the new template resolved */\n\tresolved.resolved = true;\n\treturn resolved;\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"\u4e0a\u8ff0\u4ee3\u7801\u6bd4\u8f83\u957f, \u6211\u4eec\u9700\u8981\u5173\u6ce8\u7684\u662f\u8fd9\u4e00\u6bb5:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-log",children:'\tif (!this.queries.isEmpty()) {\n      /*\n       * since we only want to keep resolved query values, reset any queries on the resolved copy\n       */\n      resolved.queries(Collections.emptyMap());\n      StringBuilder query = new StringBuilder();\n      Iterator<QueryTemplate> queryTemplates = this.queries.values().iterator();\n\n      while (queryTemplates.hasNext()) {\n        QueryTemplate queryTemplate = queryTemplates.next();\n        String queryExpanded = queryTemplate.expand(variables);\n        if (Util.isNotBlank(queryExpanded)) {\n          query.append(queryExpanded);\n          if (queryTemplates.hasNext()) {\n            query.append("&");\n          }\n        }\n      }\n\n      String queryString = query.toString();\n      if (!queryString.isEmpty()) {\n        Matcher queryMatcher = QUERY_STRING_PATTERN.matcher(uri);\n        if (queryMatcher.find()) {\n          /* the uri already has a query, so any additional queries should be appended */\n          uri.append("&");\n        } else {\n          uri.append("?");\n        }\n        uri.append(queryString);\n      }\n    }\n'})}),"\n",(0,r.jsxs)(t.p,{children:["\u6700\u7ec8\u8fd9\u4e2a\u8bed\u53e5",(0,r.jsx)(t.code,{children:"String queryExpanded = queryTemplate.expand(variables);"}),"\u4f1a\u5c06\u53c2\u6570\u8f6c\u4e3a\u5b57\u7b26\u4e32, \u6240\u4ee5\u6700\u7ec8\u6211\u4eec\u5f97\u5230\u4e86\u53c2\u6570\u7684\u5b57\u7b26\u4e32\u5f62\u5f0f,"]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>l});var r=n(67294);const a={},i=r.createContext(a);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);