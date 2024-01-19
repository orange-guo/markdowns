# Distributed System Middleware


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