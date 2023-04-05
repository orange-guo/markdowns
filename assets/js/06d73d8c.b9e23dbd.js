"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[9291],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(t),g=r,k=c["".concat(l,".").concat(g)]||c[g]||m[g]||o;return t?a.createElement(k,i(i({ref:n},d),{},{components:t})):a.createElement(k,i({ref:n},d))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},579:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const o={authors:["xiangcheng.kuo"],tags:["springdoc","spring"]},i="springdoc-v2\u4e2d\u5728\u4e0d\u914d\u7f6e@ParameterObject\u7684\u60c5\u51b5\u4e0b\u5b9e\u73b0Pageable\u4ee5\u53caSort\u5bf9\u8c61\u5230API\u53c2\u6570\u7684\u8f6c\u6362",p={permalink:"/blog/2023/02/22/springdoc-v2-parameter-object",source:"@site/blog/2023-02-22/springdoc-v2-parameter-object.md",title:"springdoc-v2\u4e2d\u5728\u4e0d\u914d\u7f6e@ParameterObject\u7684\u60c5\u51b5\u4e0b\u5b9e\u73b0Pageable\u4ee5\u53caSort\u5bf9\u8c61\u5230API\u53c2\u6570\u7684\u8f6c\u6362",description:"springdoc\u662f\u4e00\u4e2a\u53ef\u4ee5\u5feb\u901f\u751f\u6210API\u6587\u6863\u7684\u7b2c\u4e09\u65b9\u516c\u5171\u5e93, \u5e76\u63d0\u4f9b\u4e86UI\u9875\u9762\u4ee5\u4f9b\u8bbf\u95ee.",date:"2023-02-22T00:00:00.000Z",formattedDate:"February 22, 2023",tags:[{label:"springdoc",permalink:"/blog/tags/springdoc"},{label:"spring",permalink:"/blog/tags/spring"}],readingTime:4.98,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["springdoc","spring"]},prevItem:{title:"\u5e38\u89c1\u7684\u547d\u540d\u524d\u7f00",permalink:"/blog/2023/02/23/naming-pattern-prefix"},nextItem:{title:"\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u6ce8\u5165\u6570\u7ec4\u5230\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e",permalink:"/blog/2023/02/21/inject-environment-as-array-into-spring-application"}},l={authorsImageUrls:[void 0]},s=[{value:"\u601d\u8def",id:"\u601d\u8def",level:2},{value:"@ParameterObject",id:"parameterobject",level:3},{value:"HandlerMethod",id:"handlermethod",level:3},{value:"MethodParameter",id:"methodparameter",level:3},{value:"HandlerMapping",id:"handlermapping",level:3},{value:"BeanPostProcessor",id:"beanpostprocessor",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u65b0\u589e<code>AppendSpringdocAnnotationBeanPostProcessor</code>\u7528\u4e8e\u5b9e\u73b0\u589e\u52a0<code>@ParameterObject</code>\u6ce8\u89e3\u7684\u80fd\u529b",id:"\u65b0\u589eappendspringdocannotationbeanpostprocessor\u7528\u4e8e\u5b9e\u73b0\u589e\u52a0parameterobject\u6ce8\u89e3\u7684\u80fd\u529b",level:3},{value:"\u65b0\u589e<code>@ParameterObject</code>\u7684\u5b9e\u73b0\u7c7b, \u7531\u4e8e<code>kotlin</code>\u4e0d\u652f\u6301\u7ee7\u627f<code>annotation</code>, \u9700\u8981\u65b0\u5efa<code>java</code>\u7c7b\u6765\u7ee7\u627f<code>annotation</code>",id:"\u65b0\u589eparameterobject\u7684\u5b9e\u73b0\u7c7b-\u7531\u4e8ekotlin\u4e0d\u652f\u6301\u7ee7\u627fannotation-\u9700\u8981\u65b0\u5efajava\u7c7b\u6765\u7ee7\u627fannotation",level:3},{value:"\u65b0\u589eConfiguration, \u5c06<code>AppendSpringdocAnnotationBeanPostProcessor</code>\u6dfb\u52a0\u5230\u5bb9\u5668\u4e2d",id:"\u65b0\u589econfiguration-\u5c06appendspringdocannotationbeanpostprocessor\u6dfb\u52a0\u5230\u5bb9\u5668\u4e2d",level:3},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2},{value:"\u53cd\u5c04",id:"\u53cd\u5c04",level:3},{value:"<code>springdoc</code>\u5e94\u8be5\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u5173\u95ed",id:"springdoc\u5e94\u8be5\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u5173\u95ed",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2},{value:"springdoc-v2",id:"springdoc-v2",level:3},{value:"spring",id:"spring",level:3},{value:"kotlin",id:"kotlin",level:3}],d={toc:s},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"springdoc"),"\u662f\u4e00\u4e2a\u53ef\u4ee5\u5feb\u901f\u751f\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"API"),"\u6587\u6863\u7684\u7b2c\u4e09\u65b9\u516c\u5171\u5e93, \u5e76\u63d0\u4f9b\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"UI"),"\u9875\u9762\u4ee5\u4f9b\u8bbf\u95ee.",(0,r.kt)("br",null),"\n\u540c\u65f6\u5b83\u4e5f\u63d0\u4f9b\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"spring-webmvc"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"handler"),"\u4e2d\u7684\u53c2\u6570\u5bf9\u8c61\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"API"),"\u53c2\u6570\u7684\u8f6c\u6362.",(0,r.kt)("br",null),"\n\u5bf9\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"spring-data-commons"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Pageable"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Sort"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"springdoc"),"\u63d0\u4f9b\u4e86\u5f00\u7bb1\u5373\u7528\u7684\u529f\u80fd,\n\u9700\u8981\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u542f\u7528\u4ee5\u53ca\u5728\u53c2\u6570\u4e2d\u58f0\u660e",(0,r.kt)("inlineCode",{parentName:"p"},"@ParameterObject"),(0,r.kt)("br",null)),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="application.yml"',title:'"application.yml"'},"springdoc:\n  model-converters:\n    pageable-converter:\n      enabled: true\n")),(0,r.kt)("p",null,"\u5bf9\u4e8e\u5df2\u7ecf\u5b58\u5728\u7684\u9879\u76ee, \u5f53\u521a\u5f15\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"springdoc"),"\u65f6, \u9700\u8981\u914d\u7f6e\u5927\u91cf\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"@ParameterObject"),"\u6ce8\u89e3\u4ee5\u5b9e\u73b0\u53c2\u6570\u8f6c\u6362\u529f\u80fd.",(0,r.kt)("br",null),"\n\u8fd9\u4e2a\u8fc7\u7a0b\u901a\u5e38\u6bd4\u8f83\u7e41\u7410, \u56e0\u4e3a\u5bf9\u4e8e\u4e00\u4e2a\u5177\u6709\u4e00\u5b9a\u89c4\u6a21\u7684\u9879\u76ee\u800c\u8a00, \u5176\u5bf9\u5916\u63d0\u4f9b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"API"),"\u5f80\u5f80\u4f1a\u975e\u5e38\u591a,\n\u9700\u8981\u8fdb\u884c\u5927\u91cf\u7684\u4fee\u6539\u529f\u80fd\u624d\u80fd\u5b9e\u73b0\u8be5\u529f\u80fd",(0,r.kt)("br",null),"\n\u90a3\u4e48\u6b64\u65f6\u6211\u4eec\u9700\u8981\u4e00\u79cd\u89e3\u51b3\u65b9\u6848, \u5373\u5982\u4f55\u5728\u4e0d\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"@ParameterObject"),"\u7684\u60c5\u51b5\u4e0b\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"Pageable"),"\u4ee5\u53ca",(0,r.kt)("inlineCode",{parentName:"p"},"Sort"),"\u5bf9\u8c61\u5230API\u53c2\u6570\u7684\u8f6c\u6362"),(0,r.kt)("h2",{id:"\u601d\u8def"},"\u601d\u8def"),(0,r.kt)("h3",{id:"parameterobject"},"@ParameterObject"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"springdoc"),"\u4e2d, ",(0,r.kt)("inlineCode",{parentName:"p"},"@ParameterObject"),"\u6ce8\u89e3\u7684\u83b7\u53d6\u662f\u6765\u81ea\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"spring-webmvc"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"HandlerMethod"),"\u5bf9\u8c61"),(0,r.kt)("h3",{id:"handlermethod"},"HandlerMethod"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u5bf9\u8c61\u662f\u6211\u4eec\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Controller"),"\u4e2d\u58f0\u660e\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Handler"),"\u7684\u62bd\u8c61, \u5b83\u4e3b\u8981\u4fdd\u5b58\u4e86\u6211\u4eec\u58f0\u660e\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Handler"),"\u7684\u4e00\u4e9b\u5143\u4fe1\u606f. ",(0,r.kt)("br",null),"\n\u5b83\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"MethodParameter[] parameters"),"\u5c5e\u6027\u5305\u542b\u4e86\u8be5\u65b9\u6cd5\u7684\u6240\u6709\u53c2\u6570\u7684\u4fe1\u606f.",(0,r.kt)("br",null)),(0,r.kt)("h3",{id:"methodparameter"},"MethodParameter"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MethodParameter"),"\u5bf9\u8c61\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Annotation[] parameterAnnotations"),"\u5c5e\u6027\u5305\u542b\u4e86\u8be5\u53c2\u6570\u7684\u6240\u6709\u6ce8\u89e3.",(0,r.kt)("br",null),"\n\u6211\u4eec\u53ef\u4ee5\u5c1d\u8bd5\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"Annotation[] parameterAnnotations"),"\u5c5e\u6027\u4ee5\u5b9e\u73b0\u52a8\u6001\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"@ParameterObject"),"\u6ce8\u89e3\u7684\u529f\u80fd.",(0,r.kt)("br",null)),(0,r.kt)("h3",{id:"handlermapping"},"HandlerMapping"),(0,r.kt)("p",null,"\u6211\u4eec\u4e0d\u80fd\u76f4\u63a5\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"spring"),"\u5bb9\u5668\u4e2d\u83b7\u53d6\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"MethodHandler"),", \u56e0\u4e3a\u5176\u662f\u4fdd\u5b58\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"HandlerMapping"),"\u4e2d\u7684, ",(0,r.kt)("inlineCode",{parentName:"p"},"HandlerMapping"),"\n\u53ef\u4ee5\u4ece\u5bb9\u5668\u4e2d\u83b7\u53d6\u5230.",(0,r.kt)("br",null)),(0,r.kt)("h3",{id:"beanpostprocessor"},"BeanPostProcessor"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"spring"),"\u4e2d\u63d0\u4f9b\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"BeanPostProcess"),"\u673a\u5236, \u4e3b\u8981\u5b9e\u73b0\u4e86\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"Bean"),"\u7684\u521b\u5efa\u8fdb\u884c\u62e6\u622a\u5904\u7406.",(0,r.kt)("br",null),"\n\u6211\u4eec\u53ef\u4ee5\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"BeanPostProcessor"),"\u6765\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"HandlerMapping"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"MethodHandler"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"MethodParameter"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"parameterAnnotations"),"\n\u8fdb\u884c\u4fee\u6539\u4ee5\u5b9e\u73b0\u8ffd\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"@ParameterObject"),"\u6ce8\u89e3"),(0,r.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,r.kt)("h3",{id:"\u65b0\u589eappendspringdocannotationbeanpostprocessor\u7528\u4e8e\u5b9e\u73b0\u589e\u52a0parameterobject\u6ce8\u89e3\u7684\u80fd\u529b"},"\u65b0\u589e",(0,r.kt)("inlineCode",{parentName:"h3"},"AppendSpringdocAnnotationBeanPostProcessor"),"\u7528\u4e8e\u5b9e\u73b0\u589e\u52a0",(0,r.kt)("inlineCode",{parentName:"h3"},"@ParameterObject"),"\u6ce8\u89e3\u7684\u80fd\u529b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="AppendSpringdocAnnotationBeanPostProcessor.kt"',title:'"AppendSpringdocAnnotationBeanPostProcessor.kt"'},'/**\n * We must add @ParameterObject annotation to Pageable and Sort parameter to ensure that springdoc can generate correct.\n * But declaring @ParameterObject in the controller method is not a good idea, because it will take some time to.\n * So we can use this class to avoid declaring @ParameterObject on method parameter which type is Pageable or Sort.\n *\n * @author Xiangcheng.Kuo\n * @see org.springdoc.core.annotations.ParameterObject\n * @see <a href="https://springdoc.org/v2/#how-can-i-map-pageable-spring-data-commons-object-to-correct-url-parameter-in-swagger-ui">13.22. How can I map Pageable (spring-data-commons) object to correct URL-Parameter in Swagger UI?</a>\n */\ninternal class AppendSpringdocAnnotationBeanPostProcessor : BeanPostProcessor {\n\n    override fun postProcessAfterInitialization(bean: Any, beanName: String): Any {\n        if (bean !is AbstractHandlerMethodMapping<*>) {\n            return bean\n        }\n        bean.handlerMethods?.forEach { (_: Any, handlerMethod: HandlerMethod) ->\n            handlerMethod\n                .methodParameters\n                .filter {\n                    Pageable::class.java.isAssignableFrom(it.parameterType) || Sort::class.java.isAssignableFrom(it.parameterType)\n                }.forEach { methodParameter: MethodParameter ->\n                    addAnnotationForParameter(methodParameter)\n                }\n        }\n        return bean\n    }\n\n    private fun addAnnotationForParameter(methodParameter: MethodParameter) {\n        val parameterAnnotationsField =\n            FieldUtils.getDeclaredField(MethodParameter::class.java, "parameterAnnotations", true)\n        val annotations: MutableList<Annotation> =\n            ((parameterAnnotationsField[methodParameter] as Array<Annotation>?)\n                ?: emptyArray<Annotation>()).toMutableList()\n\n        if (annotations.stream().anyMatch(ParameterObject::class::isInstance)) {\n            return\n        }\n\n        annotations.add(FakeParameterObject.create())\n        parameterAnnotationsField[methodParameter] = annotations.toTypedArray()\n    }\n\n}\n')),(0,r.kt)("h3",{id:"\u65b0\u589eparameterobject\u7684\u5b9e\u73b0\u7c7b-\u7531\u4e8ekotlin\u4e0d\u652f\u6301\u7ee7\u627fannotation-\u9700\u8981\u65b0\u5efajava\u7c7b\u6765\u7ee7\u627fannotation"},"\u65b0\u589e",(0,r.kt)("inlineCode",{parentName:"h3"},"@ParameterObject"),"\u7684\u5b9e\u73b0\u7c7b, \u7531\u4e8e",(0,r.kt)("inlineCode",{parentName:"h3"},"kotlin"),"\u4e0d\u652f\u6301\u7ee7\u627f",(0,r.kt)("inlineCode",{parentName:"h3"},"annotation"),", \u9700\u8981\u65b0\u5efa",(0,r.kt)("inlineCode",{parentName:"h3"},"java"),"\u7c7b\u6765\u7ee7\u627f",(0,r.kt)("inlineCode",{parentName:"h3"},"annotation")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="FakeParameterObject.java"',title:'"FakeParameterObject.java"'},'/**\n * Avoid the following kotlin compile error\n * This type has a constructor, and thus must be initialized here\n * This type is final, so it cannot be inherited from\n *\n * @author Xiangcheng.Kuo\n * @see <a href="https://stackoverflow.com/questions/51608924/implement-inherit-extend-annotation-in-kotlin">Implement (/inherit/~extend) annotation in Kotlin</a>\n */\npublic class FakeParameterObject implements ParameterObject {\n\n    @Override\n    public Class<? extends Annotation> annotationType() {\n        return FakeParameterObject.class;\n    }\n\n    public static ParameterObject create() {\n        return new FakeParameterObject();\n    }\n\n}\n')),(0,r.kt)("h3",{id:"\u65b0\u589econfiguration-\u5c06appendspringdocannotationbeanpostprocessor\u6dfb\u52a0\u5230\u5bb9\u5668\u4e2d"},"\u65b0\u589eConfiguration, \u5c06",(0,r.kt)("inlineCode",{parentName:"h3"},"AppendSpringdocAnnotationBeanPostProcessor"),"\u6dfb\u52a0\u5230\u5bb9\u5668\u4e2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="ApidocAutoConfiguration.kt"',title:'"ApidocAutoConfiguration.kt"'},"/**\n * @author Xiangcheng.Kuo\n */\n@Configuration\ninternal class ApidocAutoConfiguration {\n\n    @Bean\n    @ConditionalOnProperty(Constants.SPRINGDOC_ENABLED, matchIfMissing = true)\n    fun appendSpringdocAnnotationBeanPostProcessor(): BeanPostProcessor =\n        AppendSpringdocAnnotationBeanPostProcessor()\n\n}\n")),(0,r.kt)("h2",{id:"\u5907\u6ce8"},"\u5907\u6ce8"),(0,r.kt)("h3",{id:"\u53cd\u5c04"},"\u53cd\u5c04"),(0,r.kt)("p",null,"\u8be5\u89e3\u51b3\u65b9\u6cd5\u662f\u57fa\u4e8e\u53cd\u5c04\u7684, \u5e76\u4e14\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"spring"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"BeanPostProcessor"),"\u4e2d\u4fee\u6539\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"MethodParameter"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"parameterAnnotations"),"\u5c5e\u6027.\n\u8be5\u5c5e\u6027\u53ef\u80fd\u4f1a\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"spring"),"\u7684\u5176\u4ed6\u5730\u65b9\u88ab\u4f7f\u7528, \u56e0\u6b64\u53ef\u80fd\u4f1a\u5f15\u8d77\u4e00\u4e9b\u4e0d\u53ef\u9884\u77e5\u7684\u95ee\u9898."),(0,r.kt)("h3",{id:"springdoc\u5e94\u8be5\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u5173\u95ed"},(0,r.kt)("inlineCode",{parentName:"h3"},"springdoc"),"\u5e94\u8be5\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u5173\u95ed"),(0,r.kt)("p",null,"\u5728\u751f\u4ea7\u73af\u5883\u4e2d, \u4e0d\u5e94\u8be5\u5f00\u542f",(0,r.kt)("inlineCode",{parentName:"p"},"springdoc"),", \u56e0\u4e3a\u8fd9\u4f1a\u66b4\u9732",(0,r.kt)("inlineCode",{parentName:"p"},"swagger"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"api"),"\u6587\u6863, \u4ece\u800c\u5bfc\u81f4",(0,r.kt)("inlineCode",{parentName:"p"},"api"),"\u6587\u6863\u6cc4\u9732,"),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"spring"),"\u4e2d\u63d0\u4f9b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"profile"),"\u529f\u80fd\u4ee5\u5b9e\u73b0\u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b\u5f00\u542f",(0,r.kt)("inlineCode",{parentName:"p"},"springdoc"),", \u751f\u4ea7\u6a21\u5f0f\u4e0b\u5173\u95ed",(0,r.kt)("inlineCode",{parentName:"p"},"springdoc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="application.yml"',title:'"application.yml"'},"springdoc:\n  api-docs:\n    enabled: false\n  model-converters:\n    pageable-converter:\n      enabled: true\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="application-dev.yml"',title:'"application-dev.yml"'},"springdoc:\n  api-docs:\n    enabled: true\n  model-converters:\n    pageable-converter:\n      enabled: true\n")),(0,r.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.kt)("h3",{id:"springdoc-v2"},"springdoc-v2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://springdoc.org/v2/"},"springdoc v2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://springdoc.org/v2/#how-can-i-map-pageable-spring-data-commons-object-to-correct-url-parameter-in-swagger-ui"},"13.22. How can I map Pageable (spring-data-commons) object to correct URL-Parameter in Swagger UI?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://springdoc.org/v2/#how-can-i-extract-fields-from-parameter-object"},"13.61. How can I extract fields from parameter object ?"))),(0,r.kt)("h3",{id:"spring"},"spring"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/method/HandlerMethod.html"},"Class HandlerMethod")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/core/MethodParameter.html"},"Class MethodParameter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/servlet/HandlerMapping.html"},"Interface HandlerMapping")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/beans/factory/config/BeanPostProcessor.html"},"Interface BeanPostProcessor"))),(0,r.kt)("h3",{id:"kotlin"},"kotlin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/51608924/implement-inherit-extend-annotation-in-kotlin"},"Implement (/inherit/~extend) annotation in Kotlin"))))}m.isMDXComponent=!0}}]);