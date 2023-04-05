"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[3734],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(a),m=n,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||o;return a?r.createElement(d,i(i({ref:t},p),{},{components:a})):r.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},460:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={authors:["xiangcheng.kuo"],tags:["problem-solving","kotlin","java","postgresql"]},i="\u5f53\u8c03\u5ea6\u670d\u52a1\u63a5\u53e3\u65f6\u62a5\u9519\u63d0\u793acannot execute UPDATE in a read-only transaction\u95ee\u9898\u89e3\u51b3",l={permalink:"/zh-CN/blog/2023/01/30/fix-cannot-execute-update-in-a-readonly-transaction",source:"@site/blog/2023-01-30/fix-cannot-execute-update-in-a-readonly-transaction.md",title:"\u5f53\u8c03\u5ea6\u670d\u52a1\u63a5\u53e3\u65f6\u62a5\u9519\u63d0\u793acannot execute UPDATE in a read-only transaction\u95ee\u9898\u89e3\u51b3",description:"\u524d\u7aef\u8bf7\u6c42\u670d\u52a1\u76f8\u5e94\u63a5\u53e3\u62a5\u9519, \u65e5\u5fd7\u5982\u4e0b",date:"2023-01-30T00:00:00.000Z",formattedDate:"2023\u5e741\u670830\u65e5",tags:[{label:"problem-solving",permalink:"/zh-CN/blog/tags/problem-solving"},{label:"kotlin",permalink:"/zh-CN/blog/tags/kotlin"},{label:"java",permalink:"/zh-CN/blog/tags/java"},{label:"postgresql",permalink:"/zh-CN/blog/tags/postgresql"}],readingTime:2.55,hasTruncateMarker:!1,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","kotlin","java","postgresql"]},prevItem:{title:"\u5728TestContainers\u4e2d\u5b9e\u73b0Docker registry\u8ba4\u8bc1",permalink:"/zh-CN/blog/2023/02/08/testcontainers-docker-registry"},nextItem:{title:"TestContainers\u542f\u52a8\u5b8cfastone-auditing\u5bb9\u5668\u540e\u5ba2\u6237\u7aef\u8fde\u63a5\u62a5\u9519",permalink:"/zh-CN/blog/2022/12/29/testcontainers-connection-reset"}},s={authorsImageUrls:[void 0]},c=[{value:"\u539f\u56e0",id:"\u539f\u56e0",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2}],p={toc:c},g="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(g,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u524d\u7aef\u8bf7\u6c42\u670d\u52a1\u76f8\u5e94\u63a5\u53e3\u62a5\u9519, \u65e5\u5fd7\u5982\u4e0b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-log"},"2023-01-30 12:10:14.822  WARN 1 --- [nio-4396-exec-6] o.h.engine.jdbc.spi.SqlExceptionHelper   : SQL Error: 0, SQLState: 25006\n2023-01-30 12:10:14.822 ERROR 1 --- [nio-4396-exec-6] o.h.engine.jdbc.spi.SqlExceptionHelper   : ERROR: cannot execute UPDATE in a read-only transaction\n    at org.springframework.security.web.authentication.AnonymousAuthen\n    at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336)\n    at org.springframework.security.web.session.SessionManagementFilter.doFilter(SessionManagementFilter.java:81)\n    at org.springframework.security.web.session.SessionManagementFilter.doFilter(SessionManagementFilter.java:126)\n    at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336)\n    at org.springframework.security.web.access.ExceptionTranslationFilter.doFilter(ExceptionTranslationFilter.java:115)\n    at org.springframework.security.web.access.ExceptionTranslationFilter.doFilter(ExceptionTranslationFilter.java:121)\n    at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336)\n    at org.springframework.security.web.access.intercept.FilterSecurityInterceptor.doFilter(FilterSecurityInterceptor.java:81)\n    at org.springframework.security.web.access.intercept.FilterSecurityInterceptor.invoke(FilterSecurityInterceptor.java:115)\n    at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:327)\n    at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)\n    at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189)\n    at org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:53)\n    at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)\n    at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:227)\n    at javax.servlet.http.HttpServlet.service(HttpServlet.java:764)\n    at org.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java:883)\n    at javax.servlet.http.HttpServlet.service(HttpServlet.java:684)\n    at org.springframework.web.servlet.FrameworkServlet.doPut(FrameworkServlet.java:920)\n    at org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:1006)\n    at org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java:963)\n    at org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java:1067)\n    at org.springframework.web.servlet.mvc.method.AbstractHandlerMethodAdapter.handle(AbstractHandlerMethodAdapter.java:87)\n    at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.handleInternal(RequestMappingHandlerAdapter.java:808)\n    at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.invokeHandlerMethod(RequestMappingHandlerAdapter.java:895)\n    at org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod.invokeAndHandle(ServletInvocableHandlerMethod.java:117)\n    at org.springframework.web.method.support.InvocableHandlerMethod.invokeForRequest(InvocableHandlerMethod.java:150)\n    at org.springframework.web.method.support.InvocableHandlerMethod.doInvoke(InvocableHandlerMethod.java:205)\n    at java.base/java.lang.reflect.Method.invoke(Method.java:568)\n    at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n    at jdk.internal.reflect.GeneratedMethodAccessor355.invoke(Unknown Source)\n    at com.fastonetech.computecloud.api.regional.software.controller.LaunchableAppController.lastAccessAt(LaunchableAppController.kt:56)\n    at com.fastonetech.computecloud.api.regional.software.service.UserSoftwareUsageServiceImpl$$EnhancerBySpringCGLIB$$1caff315.lastAccessAt(<generated>)\n    at org.springframework.aop.framework.CglibAopProxy$DynamicAdvisedInterceptor.intercept(CglibAopProxy.java:698)\n    at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:753)\n    at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186)\n    at org.springframework.transaction.interceptor.TransactionInterceptor.invoke(TransactionInterceptor.java:119)\n    at org.springframework.transaction.interceptor.TransactionAspectSupport.invokeWithinTransaction(TransactionAspectSupport.java:407)\n    at org.springframework.transaction.interceptor.TransactionAspectSupport.commitTransactionAfterReturning(TransactionAspectSupport.java:654)\n    at org.springframework.transaction.support.AbstractPlatformTransactionManager.commit(AbstractPlatformTransactionManager.java:711)\n    at org.springframework.transaction.support.AbstractPlatformTransactionManager.processCommit(AbstractPlatformTransactionManager.java:743)\n    at org.springframework.orm.jpa.JpaTransactionManager.doCommit(JpaTransactionManager.java:562)\n    at org.hibernate.engine.transaction.internal.TransactionImpl.commit(TransactionImpl.java:101)\n    at org.hibernate.resource.transaction.backend.jdbc.internal.JdbcResourceLocalTransactionCoordinatorImpl$TransactionDriverControlImpl.commit(JdbcResourceLocalTransactionCoordinatorImpl.java:281)\n    at org.hibernate.resource.transaction.backend.jdbc.internal.JdbcResourceLocalTransactionCoordinatorImpl.access$300(JdbcResourceLocalTransactionCoordinatorImpl.java:40)\n    at org.hibernate.resource.transaction.backend.jdbc.internal.JdbcResourceLocalTransactionCoordinatorImpl.beforeCompletionCallback(JdbcResourceLocalTransactionCoordinatorImpl.java:183)\n    at org.hibernate.engine.jdbc.internal.JdbcCoordinatorImpl.beforeTransactionCompletion(JdbcCoordinatorImpl.java:448)\n    at org.hibernate.internal.SessionImpl.beforeTransactionCompletion(SessionImpl.java:2380)\n    at org.hibernate.internal.SessionImpl.flushBeforeTransactionCompletion(SessionImpl.java:3212)\n    at org.hibernate.internal.SessionImpl.managedFlush(SessionImpl.java:453)\n    at org.hibernate.internal.SessionImpl.doFlush(SessionImpl.java:1362)\n    at org.hibernate.event.service.internal.EventListenerGroupImpl.fireEventOnEachListener(EventListenerGroupImpl.java:99)\n    at org.hibernate.event.internal.DefaultFlushEventListener.onFlush(DefaultFlushEventListener.java:40)\n    at org.hibernate.event.internal.AbstractFlushingEventListener.performExecutions(AbstractFlushingEventListener.java:344)\n    at org.hibernate.engine.spi.ActionQueue.executeActions(ActionQueue.java:475)\n    at java.base/java.util.LinkedHashMap.forEach(LinkedHashMap.java:721)\n    at org.hibernate.engine.spi.ActionQueue.lambda$executeActions$1(ActionQueue.java:478)\n    at org.hibernate.engine.spi.ActionQueue.executeActions(ActionQueue.java:604)\n    at org.hibernate.action.internal.EntityUpdateAction.execute(EntityUpdateAction.java:201)\n    at org.hibernate.persister.entity.AbstractEntityPersister.update(AbstractEntityPersister.java:3769)\n    at org.hibernate.persister.entity.AbstractEntityPersister.updateOrInsert(AbstractEntityPersister.java:3355)\n    at org.hibernate.persister.entity.AbstractEntityPersister.update(AbstractEntityPersister.java:3493)\n    at org.hibernate.engine.jdbc.internal.ResultSetReturnImpl.executeUpdate(ResultSetReturnImpl.java:197)\n    at com.zaxxer.hikari.pool.HikariProxyPreparedStatement.executeUpdate(HikariProxyPreparedStatement.java)\n    at com.zaxxer.hikari.pool.ProxyPreparedStatement.executeUpdate(ProxyPreparedStatement.java:61)\n    at org.postgresql.jdbc.PgPreparedStatement.executeUpdate(PgPreparedStatement.java:130)\n    at org.postgresql.jdbc.PgPreparedStatement.executeWithFlags(PgPreparedStatement.java:164)\n    at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:401)\n    at org.postgresql.jdbc.PgStatement.executeInternal(PgStatement.java:481)\n    at org.postgresql.core.v3.QueryExecutorImpl.execute(QueryExecutorImpl.java:322)\n    at org.postgresql.core.v3.QueryExecutorImpl.processResults(QueryExecutorImpl.java:2297)\n    at org.postgresql.core.v3.QueryExecutorImpl.receiveErrorResponse(QueryExecutorImpl.java:2565)\norg.postgresql.util.PSQLException: ERROR: cannot execute UPDATE in a read-only transaction\n")),(0,n.kt)("h2",{id:"\u539f\u56e0"},"\u539f\u56e0"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6570\u636e\u5e93\u91c7\u7528\u4e3b\u4ece\u67b6\u6784, \u7531\u4e8e\u4e3b\u5e93\u5b95\u673a, ",(0,n.kt)("inlineCode",{parentName:"p"},"Load balancer"),"\u5c06\u8bf7\u6c42\u8f6c\u53d1\u5230\u4e86\u4ece\u5e93, \u4ece\u5e93\u7684\u4e8b\u52a1\u4e3a",(0,n.kt)("inlineCode",{parentName:"p"},"read only"),"\u5bfc\u81f4\u66f4\u65b0\u5931\u8d25\u3002")),(0,n.kt)("p",null,"\u540e\u7aef\u76f8\u5173\u4ee3\u7801\u5982\u4e0b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"@javax.transaction.Transactional\nfun lastAccessAt(id: Long, type: LaunchableAppType): UserSoftwareUsageDTO {\n    val userId = authService.currentAsPortal().bind().userId\n    val userSoftwareUsage =\n        getOrElseCreate(userId, id, type).copy(lastAccessAt = ZonedDateTime.now()).let(repository::save)\n    return UserSoftwareUsageDTO(\n        userSoftwareUsage.appId,\n        userSoftwareUsage.appType,\n        userSoftwareUsage.lastAccessAt,\n        userSoftwareUsage.collected\n    )\n}\n")),(0,n.kt)("p",null,"\u5176\u91c7\u7528\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"javax"),"\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"@Transactional"),"\u8fdb\u884c\u4e8b\u52a1\u63a7\u5236.",(0,n.kt)("br",null),"\n\u8be5\u6ce8\u89e3\u6ca1\u6709\u63d0\u4f9b\u663e\u5f0f\u6307\u5b9a\u6570\u636e\u5e93\u4e8b\u52a1\u7684\u8bfb\u5199\u884c\u4e3a\u76f8\u5173\u5c5e\u6027, \u662f\u5426\u662f\u53ea\u8bfb\u6216\u8005\u5199\u5165\u53ea\u80fd\u7531\u7531\u6570\u636e\u5e93\u7684\u9ed8\u8ba4\u884c\u4e3a\u51b3\u5b9a.",(0,n.kt)("br",null)),(0,n.kt)("p",null,"\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"PostgreSQL"),"\u4e2d, \u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6765\u67e5\u770b\u9ed8\u8ba4\u7684\u8bfb\u5199\u884c\u4e3a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-postgresql"},"show default_transaction_read_only;\n-- return true if default transaction is read only, false otherwise\n")),(0,n.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u6570\u636e\u5e93\u4e3b\u673a\u5b95\u673a\u65f6, \u4ece\u5e93\u5347\u7ea7\u4e3a\u4e3b\u5e93. \u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd\u6570\u636e\u5e93\u8bfb\u5199\u4e0d\u53d7\u5f71\u54cd\u3002"),(0,n.kt)("li",{parentName:"ol"},"java\u4fa7\u9700\u8981\u91c7\u7528\u53ef\u4ee5\u663e\u5f0f\u63a7\u5236\u4e8b\u52a1\u662f\u5426\u4e3a",(0,n.kt)("inlineCode",{parentName:"li"},"readonly"),"\u7684\u6846\u67b6, \u5982spring\u7684",(0,n.kt)("inlineCode",{parentName:"li"},"@Transactional"),"\u6ce8\u89e3, \u8be5\u6ce8\u89e3\u63d0\u4f9b\u4e86",(0,n.kt)("inlineCode",{parentName:"li"},"readOnly"),"\u5c5e\u6027,\n\u53ef\u4ee5\u663e\u5f0f\u63a7\u5236\u4e8b\u52a1\u7684\u8bfb\u5199\u884c\u4e3a\u3002\u8fd9\u6837\u53ef\u4ee5\u4e0d\u9690\u5f0f\u4f9d\u8d56\u6570\u636e\u5e93\u7684\u9ed8\u8ba4\u884c\u4e3a, \u4ece\u800c\u5728\u521b\u5efa\u4e8b\u52a1\u65f6\u63d0\u524d\u53d1\u73b0\u95ee\u9898\u3002")),(0,n.kt)("h2",{id:"\u5907\u6ce8"},"\u5907\u6ce8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/runtime-config-client.html"},"Client Connection Defaults")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://jkatz05.com/post/postgres/postgres-read-only/"},'"READ-ONLY" MODE FOR POSTGRESQL'))))}u.isMDXComponent=!0}}]);