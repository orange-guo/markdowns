---
sidebar_position: 0
---

# Projects

- [objenesis](https://github.com/easymock/objenesis)
  <br/>Okay, it's pretty easy to instantiate objects in Java through standard reflection. However there are many cases
  where you need to go beyond what reflection provides. For example, if there's no public constructor, you want to
  bypass the constructor code, or set final fields. There are numerous clever (but fiddly) approaches to getting around
  this…

## File System

- [commons-vfs](https://github.com/apache/commons-vfs)
  <br/>Commons VFS provides a single API for accessing various different file systems. It presents a uniform view of the
  files from various different sources, such as the files on local disk, on an HTTP server, or inside a Zip archive.
  <br/>Some of the features of Commons VFS are:
  <br/>A single consistent API for accessing files of different types.
  <br/>Support for numerous file system types .
  <br/>Caching of file information. Caches information in-JVM, and optionally can cache remote file information on the
  local file system (replicator).
  <br/>Event delivery.
  <br/>Support for logical file systems made up of files from various different file systems.
  <br/>Utilities for integrating Commons VFS into applications, such as a VFS-aware ClassLoader and
  URLStreamHandlerFactory.
  <br/>A set of VFS-enabledAnt tasks.

## Gtk

- [java-gtk](https://github.com/bailuk/java-gtk)
  <br/>GTK bindings for Java

## Deep Learning

- [deeplearning4j](https://github.com/deeplearning4j/deeplearning4j)
  <br/>Suite of tools for deploying and training deep learning models using the JVM. Highlights include model import for
  keras, tensorflow, and onnx/pytorch, a modular and tiny c++ library for running math code and a java based math
  library on top of the core c++ library. Also includes samediff: a pytorch/tensorflow like library for running deep
  learni…

## Profiling

- [async-profiler](https://github.com/async-profiler/async-profiler)
  <br/>Sampling CPU and HEAP profiler for Java featuring AsyncGetCallTrace + perf_events

## Spring

- [spring-search](https://github.com/sipios/spring-search)
  <br/>Provides advanced search capabilities to a JPA entity

## Dependency Injection

- [avaje-inject](https://github.com/avaje/avaje-inject)
  <br/>Dependency injection via APT (source code generation) ala "Server-Side Dagger DI"

- [Dagger](https://github.com/google/dagger)
  <br/>A fast dependency injector for Android and Java.

## Testing

- [approval-tests](https://approvaltests.com/)
  <br/>Unit testing asserts can be difficult to use. Approval tests simplify this by taking a snapshot of the results,
  and confirming that they have not changed.
- [Testcontainers](https://www.testcontainers.org/)
  <br/>Testcontainers is a Java library that supports JUnit tests, providing lightweight, throwaway instances of common
  databases, Selenium web browsers, or anything else that can run in a Docker container.
- [karate](https://github.com/karatelabs/karate)
  <br/>Test Automation Made Simple
- [cucumber-jvm](https://github.com/cucumber/cucumber-jvm)
  <br/>Cucumber for the JVM

## Workflow

- [conductor](https://conductor.netflix.com/)
  <br/>Conductor is a platform created by Netflix to orchestrate workflows that span across microservices.
- [flowable](https://www.flowable.com/)
  <br/>A compact and highly efficient workflow and Business Process Management (BPM) platform for developers, system
  admins and business users.
- [camunda](https://github.com/camunda/camunda-bpm-platform)
  <br/>Flexible framework for workflow and decision automation with BPMN and DMN. Integration with Spring, Spring Boot,
  CDI.
- [Activiti](https://github.com/Activiti/Activiti)
  <br/>Activiti is a light-weight workflow and Business Process Management (BPM) Platform targeted at business people,
  developers and system admins. Its core is a super-fast and rock-solid BPMN 2 process engine for Java. It's open-source
  and distributed under the Apache license. Activiti runs in any Java application, on a server, on a cluster or in the…
- [Airflow](https://airflow.apache.org/)
  <br/>Airflow is a platform created by the community to programmatically author, schedule and monitor workflows.

## Language Extension

- [Project Lombok](https://projectlombok.org/)
  <br/>Project Lombok is a java library that automatically plugs into your editor and build tools, spicing up your java.
  <br/>Never write another getter or equals method again, with one annotation your class has a fully featured builder,
  Automate your logging variables, and much more.
- [Manifold](http://manifold.systems/)
  <br/>Manifold is a Java compiler plugin, its features include Metaprogramming, Properties, Extension Methods, Operator
  Overloading, Templates, a Preprocessor, and more.

## Framework

- [helidon](https://helidon.io/)
  <br/>Helidon is a cloud-native, open‑source set of Java libraries for writing microservices that run on a fast web
  core powered by Netty.
- [micronaut](https://micronaut.io/)
  <br/>A MODERN, JVM-BASED, FULL-STACK FRAMEWORK FOR BUILDING MODULAR, EASILY TESTABLE MICROSERVICE AND SERVERLESS
  APPLICATIONS
- [vert.x](https://vertx.io/)
  <br/>Eclipse Vert.x™ Reactive applications on the JVM.
- [quarkus](https://quarkus.io/)
  <br/>A Kubernetes Native Java stack tailored for OpenJDK HotSpot and GraalVM, crafted from the best of breed Java
  libraries and standards.
- [javalin](https://javalin.io/)
  <br/>A simple web framework for Java and Kotlin

## Console

- [jline](https://github.com/jline/jline3)
  <br/>JLine is a Java library for handling console input.

## Command Execution

- [commons-exec](https://github.com/apache/commons-exec)
  <br/>Apache Commons Exec.
- [zt-exec](https://github.com/zeroturnaround/zt-exec)
  <br/>ZeroTurnaround Process Executor.
- [mina-sshd](https://github.com/apache/mina-sshd)
  <br/>Apache MINA sshd is a comprehensive Java library for client- and server-side SSH.
- [sshj](https://github.com/hierynomus/sshj)
  <br/>ssh, scp and sftp for java.

## Template Engine

- [thymeleaf](https://github.com/thymeleaf/thymeleaf)
  <br/>Thymeleaf is a modern server-side Java template engine for both web and standalone environments.
- [mustache.java](https://github.com/spullara/mustache.java)
  <br/>Implementation of mustache.js for Java
- [freemarker](https://github.com/apache/freemarker)
  <br/>Apache Freemarker
- [velocity-engine](https://github.com/apache/velocity-engine)
  <br/>Mirror of Apache Velocity Engine
- [pebble](https://github.com/PebbleTemplates/pebble)
  <br/>Java Template Engine
- [jte](https://github.com/casid/jte)
  <br/>Secure and speedy templates for Java and Kotlin.

## Observation

- [micrometer](https://micrometer.io/)
  <br/>Micrometer provides a simple facade over the instrumentation clients for the most popular monitoring systems,
  allowing you to instrument your JVM-based application code without vendor lock-in. Think SLF4J, but for metrics.
- [opentelemetry-java](https://github.com/open-telemetry/opentelemetry-java)
  <br/>OpenTelemetry Java SDK

## Reactive

- [reactor](https://projectreactor.io/)
  <br/>Reactor is a fourth-generation reactive library, based on the Reactive Streams
  specification, for building non-blocking applications on the JVM.
- [rsocket](https://rsocket.io/)
  <br/>Application protocol providing Reactive Streams semantics.
- [r2dbc](https://r2dbc.io/)
  <br/>The Reactive Relational Database Connectivity (R2DBC) project brings reactive programming APIs to relational
  databases.

## Data access

- [jOOQ](https://github.com/jOOQ/jOOQ)
  <br/>jOOQ is the best way to write SQL in Java

## Curated list

- [awesome-java](https://github.com/akullpp/awesome-java)
  <br/>A curated list of awesome frameworks, libraries and software for the Java programming language.

## Reference

## Article

- [Measuring Object Sizes in the JVM](https://www.baeldung.com/jvm-measuring-object-sizes)
- [Using Watch with the Kubernetes API](https://www.baeldung.com/java-kubernetes-watch)
- [深入浅出Java多线程](https://redspider.gitbook.io/concurrent/)
- [Java Volatile Keyword](https://jenkov.com/tutorials/java-concurrency/volatile.html)
- [Java Memory Model](https://jenkov.com/tutorials/java-concurrency/java-memory-model.html)