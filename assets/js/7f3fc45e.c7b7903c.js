"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[2670],{84323:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(85893),n=a(11151);const o={authors:["xiangcheng.kuo"],tags:["problem-solving","kotlin","java","postgresql"]},i="\u5f53\u8c03\u5ea6\u670d\u52a1\u63a5\u53e3\u65f6\u62a5\u9519\u63d0\u793acannot execute UPDATE in a read-only transaction\u95ee\u9898\u89e3\u51b3",s={permalink:"/blog/2023/01/30/fix-cannot-execute-update-in-a-readonly-transaction",source:"@site/blog/2023-01-30/fix-cannot-execute-update-in-a-readonly-transaction.md",title:"\u5f53\u8c03\u5ea6\u670d\u52a1\u63a5\u53e3\u65f6\u62a5\u9519\u63d0\u793acannot execute UPDATE in a read-only transaction\u95ee\u9898\u89e3\u51b3",description:"\u524d\u7aef\u8bf7\u6c42\u670d\u52a1\u76f8\u5e94\u63a5\u53e3\u62a5\u9519, \u65e5\u5fd7\u5982\u4e0b",date:"2023-01-30T00:00:00.000Z",tags:[{label:"problem-solving",permalink:"/blog/tags/problem-solving"},{label:"kotlin",permalink:"/blog/tags/kotlin"},{label:"java",permalink:"/blog/tags/java"},{label:"postgresql",permalink:"/blog/tags/postgresql"}],readingTime:2.55,hasTruncateMarker:!1,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","kotlin","java","postgresql"]},unlisted:!1,prevItem:{title:"\u901a\u8fc7\u8c03\u7528shell\u6a21\u5757\u6765\u89e3\u51b3\u65e7\u7248\u672cansible\u65e0\u6cd5\u8bbe\u7f6e\u5bc6\u7801\u8fc7\u671f\u65f6\u95f4\u7684\u95ee\u9898",permalink:"/blog/2023/02/07/use-chage-command-to-set-password-never-expire"},nextItem:{title:"TestContainers\u542f\u52a8\u5b8cfastone-auditing\u5bb9\u5668\u540e\u5ba2\u6237\u7aef\u8fde\u63a5\u62a5\u9519",permalink:"/blog/2022/12/29/testcontainers-connection-reset"}},l={authorsImageUrls:[void 0]},c=[{value:"\u539f\u56e0",id:"\u539f\u56e0",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"\u524d\u7aef\u8bf7\u6c42\u670d\u52a1\u76f8\u5e94\u63a5\u53e3\u62a5\u9519, \u65e5\u5fd7\u5982\u4e0b"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-log",children:"2023-01-30 12:10:14.822  WARN 1 --- [nio-4396-exec-6] o.h.engine.jdbc.spi.SqlExceptionHelper   : SQL Error: 0, SQLState: 25006\n2023-01-30 12:10:14.822 ERROR 1 --- [nio-4396-exec-6] o.h.engine.jdbc.spi.SqlExceptionHelper   : ERROR: cannot execute UPDATE in a read-only transaction\n\tat org.springframework.security.web.authentication.AnonymousAuthen\n\tat org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336)\n\tat org.springframework.security.web.session.SessionManagementFilter.doFilter(SessionManagementFilter.java:81)\n\tat org.springframework.security.web.session.SessionManagementFilter.doFilter(SessionManagementFilter.java:126)\n\tat org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336)\n\tat org.springframework.security.web.access.ExceptionTranslationFilter.doFilter(ExceptionTranslationFilter.java:115)\n\tat org.springframework.security.web.access.ExceptionTranslationFilter.doFilter(ExceptionTranslationFilter.java:121)\n\tat org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:336)\n\tat org.springframework.security.web.access.intercept.FilterSecurityInterceptor.doFilter(FilterSecurityInterceptor.java:81)\n\tat org.springframework.security.web.access.intercept.FilterSecurityInterceptor.invoke(FilterSecurityInterceptor.java:115)\n\tat org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:327)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189)\n\tat org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:53)\n\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)\n\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:227)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:764)\n\tat org.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java:883)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:684)\n\tat org.springframework.web.servlet.FrameworkServlet.doPut(FrameworkServlet.java:920)\n\tat org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:1006)\n\tat org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java:963)\n\tat org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java:1067)\n\tat org.springframework.web.servlet.mvc.method.AbstractHandlerMethodAdapter.handle(AbstractHandlerMethodAdapter.java:87)\n\tat org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.handleInternal(RequestMappingHandlerAdapter.java:808)\n\tat org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.invokeHandlerMethod(RequestMappingHandlerAdapter.java:895)\n\tat org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod.invokeAndHandle(ServletInvocableHandlerMethod.java:117)\n\tat org.springframework.web.method.support.InvocableHandlerMethod.invokeForRequest(InvocableHandlerMethod.java:150)\n\tat org.springframework.web.method.support.InvocableHandlerMethod.doInvoke(InvocableHandlerMethod.java:205)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat jdk.internal.reflect.GeneratedMethodAccessor355.invoke(Unknown Source)\n\tat com.fastonetech.computecloud.api.regional.software.controller.LaunchableAppController.lastAccessAt(LaunchableAppController.kt:56)\n\tat com.fastonetech.computecloud.api.regional.software.service.UserSoftwareUsageServiceImpl$$EnhancerBySpringCGLIB$$1caff315.lastAccessAt(<generated>)\n\tat org.springframework.aop.framework.CglibAopProxy$DynamicAdvisedInterceptor.intercept(CglibAopProxy.java:698)\n\tat org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:753)\n\tat org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186)\n\tat org.springframework.transaction.interceptor.TransactionInterceptor.invoke(TransactionInterceptor.java:119)\n\tat org.springframework.transaction.interceptor.TransactionAspectSupport.invokeWithinTransaction(TransactionAspectSupport.java:407)\n\tat org.springframework.transaction.interceptor.TransactionAspectSupport.commitTransactionAfterReturning(TransactionAspectSupport.java:654)\n\tat org.springframework.transaction.support.AbstractPlatformTransactionManager.commit(AbstractPlatformTransactionManager.java:711)\n\tat org.springframework.transaction.support.AbstractPlatformTransactionManager.processCommit(AbstractPlatformTransactionManager.java:743)\n\tat org.springframework.orm.jpa.JpaTransactionManager.doCommit(JpaTransactionManager.java:562)\n\tat org.hibernate.engine.transaction.internal.TransactionImpl.commit(TransactionImpl.java:101)\n\tat org.hibernate.resource.transaction.backend.jdbc.internal.JdbcResourceLocalTransactionCoordinatorImpl$TransactionDriverControlImpl.commit(JdbcResourceLocalTransactionCoordinatorImpl.java:281)\n\tat org.hibernate.resource.transaction.backend.jdbc.internal.JdbcResourceLocalTransactionCoordinatorImpl.access$300(JdbcResourceLocalTransactionCoordinatorImpl.java:40)\n\tat org.hibernate.resource.transaction.backend.jdbc.internal.JdbcResourceLocalTransactionCoordinatorImpl.beforeCompletionCallback(JdbcResourceLocalTransactionCoordinatorImpl.java:183)\n\tat org.hibernate.engine.jdbc.internal.JdbcCoordinatorImpl.beforeTransactionCompletion(JdbcCoordinatorImpl.java:448)\n\tat org.hibernate.internal.SessionImpl.beforeTransactionCompletion(SessionImpl.java:2380)\n\tat org.hibernate.internal.SessionImpl.flushBeforeTransactionCompletion(SessionImpl.java:3212)\n\tat org.hibernate.internal.SessionImpl.managedFlush(SessionImpl.java:453)\n\tat org.hibernate.internal.SessionImpl.doFlush(SessionImpl.java:1362)\n\tat org.hibernate.event.service.internal.EventListenerGroupImpl.fireEventOnEachListener(EventListenerGroupImpl.java:99)\n\tat org.hibernate.event.internal.DefaultFlushEventListener.onFlush(DefaultFlushEventListener.java:40)\n\tat org.hibernate.event.internal.AbstractFlushingEventListener.performExecutions(AbstractFlushingEventListener.java:344)\n\tat org.hibernate.engine.spi.ActionQueue.executeActions(ActionQueue.java:475)\n\tat java.base/java.util.LinkedHashMap.forEach(LinkedHashMap.java:721)\n\tat org.hibernate.engine.spi.ActionQueue.lambda$executeActions$1(ActionQueue.java:478)\n\tat org.hibernate.engine.spi.ActionQueue.executeActions(ActionQueue.java:604)\n\tat org.hibernate.action.internal.EntityUpdateAction.execute(EntityUpdateAction.java:201)\n\tat org.hibernate.persister.entity.AbstractEntityPersister.update(AbstractEntityPersister.java:3769)\n\tat org.hibernate.persister.entity.AbstractEntityPersister.updateOrInsert(AbstractEntityPersister.java:3355)\n\tat org.hibernate.persister.entity.AbstractEntityPersister.update(AbstractEntityPersister.java:3493)\n\tat org.hibernate.engine.jdbc.internal.ResultSetReturnImpl.executeUpdate(ResultSetReturnImpl.java:197)\n\tat com.zaxxer.hikari.pool.HikariProxyPreparedStatement.executeUpdate(HikariProxyPreparedStatement.java)\n\tat com.zaxxer.hikari.pool.ProxyPreparedStatement.executeUpdate(ProxyPreparedStatement.java:61)\n\tat org.postgresql.jdbc.PgPreparedStatement.executeUpdate(PgPreparedStatement.java:130)\n\tat org.postgresql.jdbc.PgPreparedStatement.executeWithFlags(PgPreparedStatement.java:164)\n\tat org.postgresql.jdbc.PgStatement.execute(PgStatement.java:401)\n\tat org.postgresql.jdbc.PgStatement.executeInternal(PgStatement.java:481)\n\tat org.postgresql.core.v3.QueryExecutorImpl.execute(QueryExecutorImpl.java:322)\n\tat org.postgresql.core.v3.QueryExecutorImpl.processResults(QueryExecutorImpl.java:2297)\n\tat org.postgresql.core.v3.QueryExecutorImpl.receiveErrorResponse(QueryExecutorImpl.java:2565)\norg.postgresql.util.PSQLException: ERROR: cannot execute UPDATE in a read-only transaction\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u539f\u56e0",children:"\u539f\u56e0"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u6570\u636e\u5e93\u91c7\u7528\u4e3b\u4ece\u67b6\u6784, \u7531\u4e8e\u4e3b\u5e93\u5b95\u673a, ",(0,r.jsx)(t.code,{children:"Load balancer"}),"\u5c06\u8bf7\u6c42\u8f6c\u53d1\u5230\u4e86\u4ece\u5e93, \u4ece\u5e93\u7684\u4e8b\u52a1\u4e3a",(0,r.jsx)(t.code,{children:"read only"}),"\u5bfc\u81f4\u66f4\u65b0\u5931\u8d25\u3002"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"\u540e\u7aef\u76f8\u5173\u4ee3\u7801\u5982\u4e0b"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"@javax.transaction.Transactional\nfun lastAccessAt(id: Long, type: LaunchableAppType): UserSoftwareUsageDTO {\n    val userId = authService.currentAsPortal().bind().userId\n    val userSoftwareUsage =\n        getOrElseCreate(userId, id, type).copy(lastAccessAt = ZonedDateTime.now()).let(repository::save)\n    return UserSoftwareUsageDTO(\n        userSoftwareUsage.appId,\n        userSoftwareUsage.appType,\n        userSoftwareUsage.lastAccessAt,\n        userSoftwareUsage.collected\n    )\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\u5176\u91c7\u7528\u7684",(0,r.jsx)(t.code,{children:"javax"}),"\u7684",(0,r.jsx)(t.code,{children:"@Transactional"}),"\u8fdb\u884c\u4e8b\u52a1\u63a7\u5236.",(0,r.jsx)("br",{}),"\n\u8be5\u6ce8\u89e3\u6ca1\u6709\u63d0\u4f9b\u663e\u5f0f\u6307\u5b9a\u6570\u636e\u5e93\u4e8b\u52a1\u7684\u8bfb\u5199\u884c\u4e3a\u76f8\u5173\u5c5e\u6027, \u662f\u5426\u662f\u53ea\u8bfb\u6216\u8005\u5199\u5165\u53ea\u80fd\u7531\u7531\u6570\u636e\u5e93\u7684\u9ed8\u8ba4\u884c\u4e3a\u51b3\u5b9a.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(t.p,{children:["\u5728",(0,r.jsx)(t.code,{children:"PostgreSQL"}),"\u4e2d, \u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6765\u67e5\u770b\u9ed8\u8ba4\u7684\u8bfb\u5199\u884c\u4e3a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-postgresql",children:"show default_transaction_read_only;\n-- return true if default transaction is read only, false otherwise\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"\u6570\u636e\u5e93\u4e3b\u673a\u5b95\u673a\u65f6, \u4ece\u5e93\u5347\u7ea7\u4e3a\u4e3b\u5e93. \u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd\u6570\u636e\u5e93\u8bfb\u5199\u4e0d\u53d7\u5f71\u54cd\u3002"}),"\n",(0,r.jsxs)(t.li,{children:["java\u4fa7\u9700\u8981\u91c7\u7528\u53ef\u4ee5\u663e\u5f0f\u63a7\u5236\u4e8b\u52a1\u662f\u5426\u4e3a",(0,r.jsx)(t.code,{children:"readonly"}),"\u7684\u6846\u67b6, \u5982spring\u7684",(0,r.jsx)(t.code,{children:"@Transactional"}),"\u6ce8\u89e3, \u8be5\u6ce8\u89e3\u63d0\u4f9b\u4e86",(0,r.jsx)(t.code,{children:"readOnly"}),"\u5c5e\u6027,\n\u53ef\u4ee5\u663e\u5f0f\u63a7\u5236\u4e8b\u52a1\u7684\u8bfb\u5199\u884c\u4e3a\u3002\u8fd9\u6837\u53ef\u4ee5\u4e0d\u9690\u5f0f\u4f9d\u8d56\u6570\u636e\u5e93\u7684\u9ed8\u8ba4\u884c\u4e3a, \u4ece\u800c\u5728\u521b\u5efa\u4e8b\u52a1\u65f6\u63d0\u524d\u53d1\u73b0\u95ee\u9898\u3002"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"\u5907\u6ce8",children:"\u5907\u6ce8"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.postgresql.org/docs/current/runtime-config-client.html",children:"Client Connection Defaults"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://jkatz05.com/post/postgres/postgres-read-only/",children:'"READ-ONLY" MODE FOR POSTGRESQL'})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>i});var r=a(67294);const n={},o=r.createContext(n);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);