# Distributed System Components

## API Gateway

- [Nginx](https://www.nginx.com/)
  <br/>Nginx is a web server which can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.
- [Traefik](https://traefik.io/)
  <br/>Traefik is a modern HTTP reverse proxy and load balancer that makes deploying microservices easy.
- [Kong](https://konghq.com/)
  <br/>Kong is a cloud-native, fast, scalable, and distributed Microservice Abstraction Layer (also known as an API
  Gateway, API Middleware or in some cases Service Mesh). Made available as an open-source project in 2015, its core
  values are high performance and extensibility.
- [Spring Cloud Gateway](https://spring.io/projects/spring-cloud-gateway)
  <br/>Spring Cloud Gateway aims to provide a simple, yet effective way to route to APIs and provide cross cutting
  concerns to them such as: security, monitoring/metrics, and resiliency.
- [apisix](https://github.com/apache/apisix)
  <br/>The Cloud-Native API Gateway
- [tyk](https://github.com/TykTechnologies/tyk)
  <br/>Tyk Open Source API Gateway written in Go, supporting REST, GraphQL, TCP and gRPC protocols
- [krakend-ce](https://github.com/krakend/krakend-ce)
  <br/>KrakenD Community Edition: High-performance, stateless, declarative, API Gateway written in Go.
- [gravitee-api-management](https://github.com/gravitee-io/gravitee-api-management)
  <br/>Gravitee.io - OpenSource API Management

## Configuration management

- [consul](https://www.consul.io/)
  <br/>Consul is a service networking solution to connect and secure services across any runtime platform and public or
  private cloud
- [nacos](https://nacos.io/)
  <br/>An easy-to-use dynamic service discovery, configuration and service management platform for building cloud native
  applications(
- [apollo](https://www.apolloconfig.com/)
  <br/>Apollo is a reliable configuration management system suitable for microservice configuration management
  scenarios.
- [etcd](https://etcd.io/)
  <br/>A distributed, reliable key-value store for the most critical data of a distributed

## Message broker

- [rabbitmq](https://www.rabbitmq.com/)
  <br/>RabbitMQ is the most widely deployed open source message broker. It is lightweight and easy to deploy on premises
  and in the cloud. It supports multiple messaging protocols. RabbitMQ can be deployed in distributed and federated
  configurations to meet high-scale, high-availability requirements.
- [kafka](https://kafka.apache.org/)
  <br/>Apache Kafka is a distributed streaming platform
- [rocketmq](http://rocketmq.apache.org/)
  <br/>Apache RocketMQ is a distributed messaging and streaming platform with low latency, high performance and
  reliability, trillion-level capacity and flexible scalability.
- [pulsar](https://pulsar.apache.org/)
  <br/>Apache Pulsar is a cloud-native, distributed messaging and streaming platform originally created at Yahoo! and
  now part of the Apache Software Foundation.
- [nats](https://nats.io/)
  <br/>NATS is a simple, secure and high performance open source messaging system for cloud native applications,
  IoT messaging, and microservices architectures.

## CaaS

- [nomad](https://github.com/hashicorp/nomad)
  <br/>Nomad is an easy-to-use, flexible, and performant workload orchestrator that can deploy a mix of microservice,
  batch, containerized, and non-containerized applications. Nomad is easy to operate and scale and has native Consul and
  Vault integrations.
- [kubernetes](https://kubernetes.io/)
  <br/>Production-Grade Container Orchestration
- [kind](https://kind.sigs.k8s.io/)
  <br/>kind is a tool for running local Kubernetes clusters using Docker container “nodes”.
  <br/>kind was primarily designed for testing Kubernetes itself, but may be used for local development or CI.
- [k3s](https://k3s.io/)
  <br/>The certified Kubernetes distribution built for IoT & Edge computing
- [minikube](https://minikube.sigs.k8s.io/)
  <br/>minikube quickly sets up a local Kubernetes cluster on macOS, Linux, and Windows. We proudly focus on helping
  application developers and new Kubernetes users.
- [cncf](https://www.cncf.io/)
  <br/>CNCF is the open source, vendor-neutral hub of cloud native computing, hosting projects like Kubernetes and
  Prometheus to make cloud native universal and sustainable.

## Security

- [casbin](https://casbin.org/)
  <br/>An authorization library that supports access control models like ACL, RBAC, ABAC in Golang

## Monitoring

- [prometheus](https://prometheus.io/)
  <br/>Prometheus is a systems and service monitoring system. It collects metrics from configured targets at given
  intervals, evaluates rule expressions, displays the results, and can trigger alerts if some condition is observed to
  be true.
- [grafana](https://grafana.com/)
  <br/>Grafana is the open source analytics & monitoring solution for every database
- [sentry](https://github.com/getsentry/sentry)
  <br/>Developer-first error tracking and performance monitoring
- [self-hosted](https://github.com/getsentry/self-hosted)
  <br/>Sentry, feature-complete and packaged up for low-volume deployments and proofs-of-concept
- [alertmanager](https://github.com/prometheus/alertmanager)
  <br/>Prometheus Alertmanager
- [zabbix](https://github.com/zabbix/zabbix)
  <br/>Real-time monitoring of IT components and services, such as networks, servers, VMs, applications and the cloud.
- [icinga2](https://github.com/Icinga/icinga2)
  <br/>The core of our monitoring platform with a powerful configuration language and REST API.
- [nagioscore](https://github.com/NagiosEnterprises/nagioscore)
  <br/>Nagios Core
- [awesome-prometheus-alerts](https://github.com/samber/awesome-prometheus-alerts)
  <br/>🚨 Collection of Prometheus alerting rules

## Service discovery

- [consul](https://www.consul.io/)
  <br/>Consul is a service networking solution to connect and secure services across any runtime platform and public or
  private cloud
- [nacos](https://nacos.io/)
  <br/>An easy-to-use dynamic service discovery, configuration and service management platform for building cloud native
  applications

## Distributed tracing

- [zipkin](https://zipkin.io/)
  <br/>Zipkin is a distributed tracing system. It helps gather timing data needed to troubleshoot latency problems in
  microservice architectures. Features include both the collection and lookup of this data.
- [skywalking](https://skywalking.apache.org/)
  <br/>Apache SkyWalking, an APM(application performance monitor) system, especially designed for microservices,
  cloud native and container-based (Docker, K8s, Mesos) architectures.
- [jaeger](https://www.jaegertracing.io/)
  <br/>Jaeger, a CNCF graduated project, is a distributed tracing system released as open source by Uber Technologies.
  It is used for monitoring and troubleshooting microservices-based distributed systems, including:
    - Distributed context propagation
    - Distributed transaction monitoring
    - Root cause analysis
    - Service dependency analysis
    - Performance / latency optimization
    - OpenTracing compatible data model
    - Multiple storage backends: Badger, Cassandra, Elasticsearch, Memory.

## Rpc

- [grpc](https://grpc.io/)
  <br/>gRPC is a modern open source high performance RPC framework that can run in any environment. It can efficiently
  connect services in and across data centers with pluggable support for load balancing, tracing, health checking and
  authentication. It is also applicable in last mile of distributed computing to connect devices, mobile applications
  and browsers to backend services.
- [thrift](https://thrift.apache.org/)
  <br/>Thrift is a software framework for scalable cross-language services development. It combines a software stack
  with a code generation engine to build services that work efficiently and seamlessly between C++, Java, Python,
  PHP, Ruby, Erlang, Perl, Haskell, C#, Cocoa, JavaScript, Node.js, Smalltalk, OCaml and Delphi and other languages.
- [dubbo](http://dubbo.apache.org/)
  <br/>Apache Dubbo™ is a high-performance, java based open source RPC framework.

## Identity Provider

- [keycloak](https://www.keycloak.org/)
  <br/>Open Source Identity and Access Management For Modern Applications and Service
- [FreeIPA](https://www.freeipa.org/)
  <br/>FreeIPA is an integrated Identity and Authentication solution for Linux/UNIX networked environments. A FreeIPA
  server provides centralized authentication, authorization and account information by storing data about user,
  groups, hosts and other objects necessary to manage the security aspects of a network of computers.
- [okta](https://www.okta.com/)
  <br/>Okta is the leading independent provider of identity for the enterprise. The Okta Identity Cloud enables
- [Authelia](https://www.authelia.com/)
  <br/>Authelia is an open-source authentication and authorization server and portal fulfilling the identity and access
  management (IAM) role of information security in providing multi-factor authentication and single sign-on (SSO) for
  your applications via a web portal. It acts as a companion for common reverse proxies.

## Database

- [rocksdb](https://rocksdb.org/)
  <br/>A persistent key-value store for fast storage environments

## Stream Processing

- [flink](https://flink.apache.org/)
  <br/>Apache Flink is an open source stream processing framework with powerful stream- and batch-processing
  capabilities.
- [kafka-streams](https://kafka.apache.org/documentation/streams/)
  <br/>Kafka Streams is a client library for processing and analyzing data stored in Kafka. It builds upon important
  stream processing concepts such as properly distinguishing between event time and processing time, windowing support,
  and simple yet efficient management of application state.
- [pulsar-functions](https://pulsar.apache.org/docs/en/functions-overview/)
  <br/>Apache Pulsar Functions is a lightweight compute framework that allows you to run stateless compute code
  against your Pulsar data. It is a serverless framework that allows you to write code that runs in response to
  Pulsar events without having to manage any infrastructure.
- [storm](https://storm.apache.org/)
  <br/>Apache Storm is a free and open source distributed realtime computation system. Storm makes it easy to reliably
  process unbounded streams of data, doing for realtime processing what Hadoop did for batch processing. Storm is
  simple,
  can be used with any programming language, and is a lot of fun to use!
- [spark-streaming](https://spark.apache.org/streaming/)
  <br/>Apache Spark Streaming is an extension of the core Spark API that enables scalable, high-throughput,
  fault-tolerant
  stream processing of live data streams. Data can be ingested from many sources like Kafka, Flume, Kinesis, or TCP
  sockets, and can be processed using complex algorithms expressed with high-level functions like map, reduce, join and
  window. Finally, processed data can be pushed out to filesystems, databases, and live dashboards.
- [beam](https://beam.apache.org/)
  <br/>Apache Beam is an open source, unified model and set of language-specific SDKs for defining data processing
  workflows that may then be executed on top of a set of supported runners, currently including Apache Flink, Apache
  Spark, and Google Cloud Dataflow.
- [samza](https://samza.apache.org/)
  <br/>Apache Samza is a distributed stream processing framework that enables you to build high performance streaming
  applications. Samza provides a unified data processing model that can be used for real-time and batch processing.
  Samza applications are portable and can be deployed on any execution environment that supports the Samza API.
- [flume](https://flume.apache.org/)
  <br/>Apache Flume is a distributed, reliable, and available service for efficiently collecting, aggregating, and
  moving large amounts of log data. It has a simple and flexible architecture based on streaming data flows. It is
  robust
  and fault tolerant with tunable reliability mechanisms and many failover and recovery mechanisms. It uses a simple
  extensible data model that allows for online analytic application.

## Orchestration

- [conductor](https://netflix.github.io/conductor/)
  <br/>Conductor is a distributed, scalable, durable, and elastic orchestration engine. It is designed to handle
  workflows and tasks in a microservices environment. Conductor is a Netflix open source project.

- [azkaban](https://azkaban.github.io/)
  <br/>Azkaban is a batch workflow job scheduler created at LinkedIn. It is used to schedule Hadoop jobs and other
  batch jobs. Azkaban is written in Java and uses a MySQL database to store metadata.
- [cadence](https://cadenceworkflow.io/)
  <br/>Cadence is a distributed, scalable, durable, and highly available orchestration engine to execute asynchronous
  long-running business logic in a scalable and resilient way. Cadence is a Uber open source project.

## Data processing

- [Spring Cloud Data Flow](https://spring.io/projects/spring-cloud-dataflow/)
  <br/>Microservice based Streaming and Batch data processing for Cloud Foundry and Kubernetes.
  <br/>Spring Cloud Data Flow provides tools to create complex topologies for streaming and batch data pipelines. The
  data
  <br/>pipelines consist of Spring Boot apps, built using the Spring Cloud Stream or Spring Cloud Task microservice
  frameworks.
  <br/>Spring Cloud Data Flow supports a range of data processing use cases, from ETL to import/export, event streaming,
  and
  predictive analytics.
- [Apache Airflow](https://airflow.apache.org/)
  <br/>Airflow is a platform created by the community to programmatically author, schedule and monitor workflows.