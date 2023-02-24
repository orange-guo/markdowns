"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[8808],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(a),g=n,c=d["".concat(p,".").concat(g)]||d[g]||m[g]||o;return a?r.createElement(c,i(i({ref:t},u),{},{components:a})):r.createElement(c,i({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},9536:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={title:"Springboot"},i="v3.0.1",l={unversionedId:"note/software-engineering/develop/release-template/springboot",id:"note/software-engineering/develop/release-template/springboot",title:"Springboot",description:"New Features",source:"@site/docs/note/software-engineering/develop/release-template/springboot.md",sourceDirName:"note/software-engineering/develop/release-template",slug:"/note/software-engineering/develop/release-template/springboot",permalink:"/markdowns/docs/note/software-engineering/develop/release-template/springboot",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/note/software-engineering/develop/release-template/springboot.md",tags:[],version:"current",lastUpdatedBy:"xiangcheng.kuo",lastUpdatedAt:1677237920,formattedLastUpdatedAt:"Feb 24, 2023",frontMatter:{title:"Springboot"},sidebar:"note",previous:{title:"Kotlin",permalink:"/markdowns/docs/note/software-engineering/develop/release-template/kotlin"},next:{title:"Filesystem",permalink:"/markdowns/docs/note/software-engineering/middleware/filesystem"}},p={},s=[{value:"New Features",id:"new-features",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Dependency Upgrades",id:"dependency-upgrades",level:2},{value:"Contributors",id:"contributors",level:2}],u={toc:s};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"v301"},"v3.0.1"),(0,n.kt)("h2",{id:"new-features"},"New Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Provide a configuration property for the observation patterns of Spring Integration components #33099")),(0,n.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"io.micrometer.tracing.Tracer on the classpath breaks AOT processing for tests #33298"),(0,n.kt)("li",{parentName:"ul"},"Tracer library HTTP instrumentation is auto-configured unnecessarily #33287"),(0,n.kt)("li",{parentName:"ul"},"Auto-configuration ignores user-provided ObservationConventions #33285"),(0,n.kt)("li",{parentName:"ul"},"ScheduledBeanLazyInitializationExcludeFilter is auto-configured even when annotation-based scheduled has not been\nenabled #33284"),(0,n.kt)("li",{parentName:"ul"},"SpringBootContextLoader prints banner twice when using a @ContextHierarchy #33263"),(0,n.kt)("li",{parentName:"ul"},"Properties migrator causes an application to fail to start if it tries to map a property whose metadata data entry\ncontains an invalid configuration property name #33250"),(0,n.kt)("li",{parentName:"ul"},"Wavefront MeterRegistryCustomizer is not applying application tags from application.properties #33244"),(0,n.kt)("li",{parentName:"ul"},"Actuator responses no longer format timestamps as ISO-8601 #33236"),(0,n.kt)("li",{parentName:"ul"},"Configuration property is not bound in a native image when property has get, set, and is methods #33232"),(0,n.kt)("li",{parentName:"ul"},"Configuration property binding does not deal with bridge methods #33212"),(0,n.kt)("li",{parentName:"ul"},"Contribute missing resource hints for GraphQL schema files and GraphiQL HTML page #33208"),(0,n.kt)("li",{parentName:"ul"},"Hints for ClientHttpRequestFactory should only be generated for matching methods #33203"),(0,n.kt)("li",{parentName:"ul"},"Native profile should configure execution in pluginManagement #33184"),(0,n.kt)("li",{parentName:"ul"},"Configuring management.server.port via a config tree results in a ConverterNotFoundException when the management\ncontext is refreshed #33169"),(0,n.kt)("li",{parentName:"ul"},"JBoss logging does not route directly to SLF4J when using Logback #33155"),(0,n.kt)("li",{parentName:"ul"},"Test with UseMainMethod.Always do not work with Kotlin main functions #33114"),(0,n.kt)("li",{parentName:"ul"},"Maven process-aot does not specify source and target release when compiling generated sources #33112"),(0,n.kt)("li",{parentName:"ul"},"Some Actuator beans are ineligible for post-processing #33110"),(0,n.kt)("li",{parentName:"ul"},"AOT-generated source fails to compile when Actuator is enabled on a WebFlux project #33106"),(0,n.kt)("li",{parentName:"ul"},"@ContextHierarchy should never be used with main method #33078"),(0,n.kt)("li",{parentName:"ul"},"Maven process-aot fails when compiler plugin has been configured with --enable-preview #33012"),(0,n.kt)("li",{parentName:"ul"},"Wavefront application tags differ from those used in a Spring Boot 2.x application #32844"),(0,n.kt)("li",{parentName:"ul"},"Maven goal spring-boot:build-image runs package phase twice #26455")),(0,n.kt)("h2",{id:"documentation"},"Documentation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Document observation for R2DBC #33335"),(0,n.kt)("li",{parentName:"ul"},"Align Tomcat multiple connectors example with recommendation to configure SSL declaratively #33333"),(0,n.kt)("li",{parentName:"ul"},"Actuator document is misleading about k8s startup probe #33327"),(0,n.kt)("li",{parentName:"ul"},"Update documented for @Timed to reflect narrower support #33282"),(0,n.kt)("li",{parentName:"ul"},"Update reference documentation to replace mentions of tags providers and contributors with their Observation-based\nequivalents #33281"),(0,n.kt)("li",{parentName:"ul"},"Link to Micrometer's @Timed documentation #33266"),(0,n.kt)("li",{parentName:"ul"},"Clarify use of the spring.cache.type property with Hazelcast #33258"),(0,n.kt)("li",{parentName:"ul"},"Example git.commit.time in the Actuator API documentation is thousands of years in the future #33256"),(0,n.kt)("li",{parentName:"ul"},"Update Spring Security filter dispatcher types docs to reflect change in default value #33252"),(0,n.kt)("li",{parentName:"ul"},"Documentation for nested configuration properties in a native image uses @NestedConfigurationProperty too widely\n#33239"),(0,n.kt)("li",{parentName:"ul"},"Document that the jar task should not be disabled when building a native image #33238"),(0,n.kt)("li",{parentName:"ul"},"Document nesting configuration properties using records or Kotlin data classes and how and when to use\n@NestedConfigurationProperty #33235"),(0,n.kt)("li",{parentName:"ul"},"Links to Features describes sections that have moved elsewhere #33214"),(0,n.kt)("li",{parentName:"ul"},"Fix broken links in docs #33209"),(0,n.kt)("li",{parentName:"ul"},"Document the need for compilation with -parameters when targeting a native image #33182"),(0,n.kt)("li",{parentName:"ul"},"Remove outdated native image documentation #33109"),(0,n.kt)("li",{parentName:"ul"},"Mention @RegisterReflectionForBinding in the docs #32903")),(0,n.kt)("h2",{id:"dependency-upgrades"},"Dependency Upgrades"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Upgrade to Byte Buddy 1.12.19 #33302"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Caffeine 3.1.2 #33339"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Dropwizard Metrics 4.2.13 #33303"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Ehcache3 3.10.8 #33304"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Elasticsearch Client 8.5.1 #33225"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Glassfish JSTL 3.0.1 #33305"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Hazelcast 5.1.5 #33187"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to HttpClient5 5.1.4 #33306"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to HttpCore5 5.1.5 #33188"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Jackson 2.14.1 #33289"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Jackson Bom 2.14.0 #33189"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Janino 3.1.9 #33307"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Jaybird 4.0.7.java11 #33190"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Kotlin 1.7.21 #33191"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Logback 1.4.5 #33308"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to MariaDB 3.0.9 #33192"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Micrometer 1.10.2 #33334"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to MongoDB 4.8.0 #33193"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Native Build Tools 0.9.18 #33301"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Netty 4.1.85.Final #33194"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Postgresql 42.5.1 #33340"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to R2DBC H2 1.0.0.RELEASE #33195"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to R2DBC Pool 1.0.0.RELEASE #33196"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to R2DBC Postgresql 1.0.0.RELEASE #33197"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to R2DBC Proxy 1.0.1.RELEASE #33309"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to REST Assured 5.2.1 #33310"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to SLF4J 2.0.4 #33311"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Spring AMQP 3.0.0 #33141"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Spring Batch 5.0.0 #33148"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Spring Data 2022.0.0 #33140"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Spring Framework 6.0.0 #33136"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Spring Framework 6.0.2 #33286"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Spring GraphQL 1.1.0 #33145"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Spring HATEOAS 2.0.0 #33137"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Spring Integration 6.0.0 #33146"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Spring Kafka 3.0.0 #33142"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Spring LDAP 3.0.0 #33138"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Spring REST Docs 3.0.0 #33143"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Spring Retry 2.0.0 #33149"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Spring Security 6.0.0 #33144"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Spring Session 3.0.0 #33147"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Spring WS 4.0.0 #33139"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to SQLite JDBC 3.39.4.1 #33312"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Thymeleaf 3.1.0.RELEASE #33313"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Thymeleaf Extras SpringSecurity 3.1.0.RELEASE #33314"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Yasson 3.0.2 #33201")),(0,n.kt)("h2",{id:"contributors"},"Contributors"),(0,n.kt)("p",null,"Thank you to all the contributors who worked on this release:"),(0,n.kt)("p",null,"@artembilan, @dreis2211, @hpoettker, @izeye, @jonatan-ivanov, @oppegard, @sdeleuze, @ttddyy, @tumit, and @vpavic"))}d.isMDXComponent=!0}}]);