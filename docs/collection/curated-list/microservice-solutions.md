# 微服务解决方案列表

- [consul](https://www.consul.io/)
- [etcd](https://etcd.io/)
  <br/>A distributed, reliable key-value store for the most critical data of a distributed system

## Monitoring

- [prometheus](https://prometheus.io/)
  <br/>Prometheus is a systems and service monitoring system. It collects metrics from configured targets at given
  intervals, evaluates rule expressions, displays the results, and can trigger alerts if some condition is observed to
  be true.
- [grafana](https://grafana.com/)
  <br/>Grafana is the open source analytics & monitoring solution for every database

## Distributed tracing

- [zipkin](https://zipkin.io/)
  <br/>Zipkin is a distributed tracing system. It helps gather timing data needed to troubleshoot latency problems in
  microservice architectures. Features include both the collection and lookup of this data.
- [skywalking](https://skywalking.apache.org/)
  <br/>Apache SkyWalking, an APM(application performance monitor) system, especially designed for microservices,
  cloud native and container-based (Docker, K8s, Mesos) architectures.
- [OpenTelemetry](https://opentelemetry.io/)
  <br/>OpenTelemetry is a collection of tools, APIs, and SDKs. Use it to instrument, generate, collect, and export
  telemetry data (metrics, logs, and traces) to help you analyze your software’s performance and behavior.

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

## RPC

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

## Message Queue

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