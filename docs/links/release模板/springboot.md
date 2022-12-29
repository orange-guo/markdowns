---
title: spring-boot
---
# v3.0.1

## New Features
- Provide a configuration property for the observation patterns of Spring Integration components #33099
## Bug Fixes

- io.micrometer.tracing.Tracer on the classpath breaks AOT processing for tests #33298
- Tracer library HTTP instrumentation is auto-configured unnecessarily #33287
- Auto-configuration ignores user-provided ObservationConventions #33285
- ScheduledBeanLazyInitializationExcludeFilter is auto-configured even when annotation-based scheduled has not been enabled #33284
- SpringBootContextLoader prints banner twice when using a @ContextHierarchy #33263
- Properties migrator causes an application to fail to start if it tries to map a property whose metadata data entry contains an invalid configuration property name #33250
- Wavefront MeterRegistryCustomizer is not applying application tags from application.properties #33244
- Actuator responses no longer format timestamps as ISO-8601 #33236
- Configuration property is not bound in a native image when property has get, set, and is methods #33232
- Configuration property binding does not deal with bridge methods #33212
- Contribute missing resource hints for GraphQL schema files and GraphiQL HTML page #33208
- Hints for ClientHttpRequestFactory should only be generated for matching methods #33203
- Native profile should configure execution in pluginManagement #33184
- Configuring management.server.port via a config tree results in a ConverterNotFoundException when the management context is refreshed #33169
- JBoss logging does not route directly to SLF4J when using Logback #33155
- Test with UseMainMethod.Always do not work with Kotlin main functions #33114
- Maven process-aot does not specify source and target release when compiling generated sources #33112
- Some Actuator beans are ineligible for post-processing #33110
- AOT-generated source fails to compile when Actuator is enabled on a WebFlux project #33106
- @ContextHierarchy should never be used with main method #33078
- Maven process-aot fails when compiler plugin has been configured with --enable-preview #33012
- Wavefront application tags differ from those used in a Spring Boot 2.x application #32844
- Maven goal spring-boot:build-image runs package phase twice #26455

## Documentation

- Document observation for R2DBC #33335
- Align Tomcat multiple connectors example with recommendation to configure SSL declaratively #33333
- Actuator document is misleading about k8s startup probe #33327
- Update documented for @Timed to reflect narrower support #33282
- Update reference documentation to replace mentions of tags providers and contributors with their Observation-based equivalents #33281
- Link to Micrometer's @Timed documentation #33266
- Clarify use of the spring.cache.type property with Hazelcast #33258
- Example git.commit.time in the Actuator API documentation is thousands of years in the future #33256
- Update Spring Security filter dispatcher types docs to reflect change in default value #33252
- Documentation for nested configuration properties in a native image uses @NestedConfigurationProperty too widely #33239
- Document that the jar task should not be disabled when building a native image #33238
- Document nesting configuration properties using records or Kotlin data classes and how and when to use @NestedConfigurationProperty #33235
- Links to Features describes sections that have moved elsewhere #33214
- Fix broken links in docs #33209
- Document the need for compilation with -parameters when targeting a native image #33182
- Remove outdated native image documentation #33109
- Mention @RegisterReflectionForBinding in the docs #32903

## Dependency Upgrades

- Upgrade to Byte Buddy 1.12.19 #33302
- Upgrade to Caffeine 3.1.2 #33339
- Upgrade to Dropwizard Metrics 4.2.13 #33303
- Upgrade to Ehcache3 3.10.8 #33304
- Upgrade to Elasticsearch Client 8.5.1 #33225
- Upgrade to Glassfish JSTL 3.0.1 #33305
- Upgrade to Hazelcast 5.1.5 #33187
- Upgrade to HttpClient5 5.1.4 #33306
- Upgrade to HttpCore5 5.1.5 #33188
- Upgrade to Jackson 2.14.1 #33289
- Upgrade to Jackson Bom 2.14.0 #33189
- Upgrade to Janino 3.1.9 #33307
- Upgrade to Jaybird 4.0.7.java11 #33190
- Upgrade to Kotlin 1.7.21 #33191
- Upgrade to Logback 1.4.5 #33308
- Upgrade to MariaDB 3.0.9 #33192
- Upgrade to Micrometer 1.10.2 #33334
- Upgrade to MongoDB 4.8.0 #33193
- Upgrade to Native Build Tools 0.9.18 #33301
- Upgrade to Netty 4.1.85.Final #33194
- Upgrade to Postgresql 42.5.1 #33340
- Upgrade to R2DBC H2 1.0.0.RELEASE #33195
- Upgrade to R2DBC Pool 1.0.0.RELEASE #33196
- Upgrade to R2DBC Postgresql 1.0.0.RELEASE #33197
- Upgrade to R2DBC Proxy 1.0.1.RELEASE #33309
- Upgrade to REST Assured 5.2.1 #33310
- Upgrade to SLF4J 2.0.4 #33311
- Upgrade to Spring AMQP 3.0.0 #33141
- Upgrade to Spring Batch 5.0.0 #33148
- Upgrade to Spring Data 2022.0.0 #33140
- Upgrade to Spring Framework 6.0.0 #33136
- Upgrade to Spring Framework 6.0.2 #33286
- Upgrade to Spring GraphQL 1.1.0 #33145
- Upgrade to Spring HATEOAS 2.0.0 #33137
- Upgrade to Spring Integration 6.0.0 #33146
- Upgrade to Spring Kafka 3.0.0 #33142
- Upgrade to Spring LDAP 3.0.0 #33138
- Upgrade to Spring REST Docs 3.0.0 #33143
- Upgrade to Spring Retry 2.0.0 #33149
- Upgrade to Spring Security 6.0.0 #33144
- Upgrade to Spring Session 3.0.0 #33147
- Upgrade to Spring WS 4.0.0 #33139
- Upgrade to SQLite JDBC 3.39.4.1 #33312
- Upgrade to Thymeleaf 3.1.0.RELEASE #33313
- Upgrade to Thymeleaf Extras SpringSecurity 3.1.0.RELEASE #33314
- Upgrade to Yasson 3.0.2 #33201

## Contributors

Thank you to all the contributors who worked on this release:

@artembilan, @dreis2211, @hpoettker, @izeye, @jonatan-ivanov, @oppegard, @sdeleuze, @ttddyy, @tumit, and @vpavic