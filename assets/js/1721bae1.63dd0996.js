"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[7455],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},66914:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={},o="Distributed System Middleware",s={unversionedId:"collection/curated-list/technical-architecture-solution",id:"collection/curated-list/technical-architecture-solution",title:"Distributed System Middleware",description:"Service discovery",source:"@site/docs/collection/curated-list/technical-architecture-solution.md",sourceDirName:"collection/curated-list",slug:"/collection/curated-list/technical-architecture-solution",permalink:"/docs/collection/curated-list/technical-architecture-solution",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/collection/curated-list/technical-architecture-solution.md",tags:[],version:"current",lastUpdatedBy:"Xiangcheng Kuo",lastUpdatedAt:1694673406,formattedLastUpdatedAt:"Sep 14, 2023",frontMatter:{},sidebar:"collection",previous:{title:"spring",permalink:"/docs/collection/curated-list/spring"},next:{title:"Links",permalink:"/docs/category/links"}},l={},c=[{value:"Service discovery",id:"service-discovery",level:2},{value:"Configuration management",id:"configuration-management",level:2},{value:"Message broker",id:"message-broker",level:2},{value:"API Gateway",id:"api-gateway",level:2},{value:"Monitoring",id:"monitoring",level:2},{value:"Distributed tracing",id:"distributed-tracing",level:2},{value:"Rpc",id:"rpc",level:2},{value:"Identity Provider",id:"identity-provider",level:2},{value:"Database",id:"database",level:2},{value:"Stream Processing",id:"stream-processing",level:2},{value:"Orchestration",id:"orchestration",level:2},{value:"Data processing",id:"data-processing",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"distributed-system-middleware"},"Distributed System Middleware"),(0,n.kt)("h2",{id:"service-discovery"},"Service discovery"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.consul.io/"},"consul"),(0,n.kt)("br",null),"Consul is a service networking solution to connect and secure services across any runtime platform and public or private cloud"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://nacos.io/"},"nacos"),(0,n.kt)("br",null),"An easy-to-use dynamic service discovery, configuration and service management platform for building cloud native applications")),(0,n.kt)("h2",{id:"configuration-management"},"Configuration management"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.consul.io/"},"consul"),(0,n.kt)("br",null),"Consul is a service networking solution to connect and secure services across any runtime platform and public or private cloud"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://nacos.io/"},"nacos"),(0,n.kt)("br",null),"An easy-to-use dynamic service discovery, configuration and service management platform for building cloud native applications("),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.apolloconfig.com/"},"apollo"),(0,n.kt)("br",null),"Apollo is a reliable configuration management system suitable for microservice configuration management scenarios."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://etcd.io/"},"etcd"),(0,n.kt)("br",null),"A distributed, reliable key-value store for the most critical data of a distributed")),(0,n.kt)("h2",{id:"message-broker"},"Message broker"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.rabbitmq.com/"},"rabbitmq"),(0,n.kt)("br",null),"RabbitMQ is the most widely deployed open source message broker. It is lightweight and easy to deploy on premises and in the cloud. It supports multiple messaging protocols. RabbitMQ can be deployed in distributed and federated configurations to meet high-scale, high-availability requirements."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kafka.apache.org/"},"kafka"),(0,n.kt)("br",null),"Apache Kafka is a distributed streaming platform"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://rocketmq.apache.org/"},"rocketmq"),(0,n.kt)("br",null),"Apache RocketMQ is a distributed messaging and streaming platform with low latency, high performance and reliability, trillion-level capacity and flexible scalability."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/"},"pulsar"),(0,n.kt)("br",null),"Apache Pulsar is a cloud-native, distributed messaging and streaming platform originally created at Yahoo! and now part of the Apache Software Foundation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://nats.io/"},"nats"),(0,n.kt)("br",null),"NATS is a simple, secure and high performance open source messaging system for cloud native applications, IoT messaging, and microservices architectures.")),(0,n.kt)("h2",{id:"api-gateway"},"API Gateway"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.nginx.com/"},"Nginx"),(0,n.kt)("br",null),"Nginx is a web server which can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://traefik.io/"},"Traefik"),(0,n.kt)("br",null),"Traefik is a modern HTTP reverse proxy and load balancer that makes deploying microservices easy."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://konghq.com/"},"Kong"),(0,n.kt)("br",null),"Kong is a cloud-native, fast, scalable, and distributed Microservice Abstraction Layer (also known as an API Gateway, API Middleware or in some cases Service Mesh). Made available as an open-source project in 2015, its core values are high performance and extensibility."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-cloud-gateway"},"Spring Cloud Gateway"),(0,n.kt)("br",null),"Spring Cloud Gateway aims to provide a simple, yet effective way to route to APIs and provide cross cutting concerns to them such as: security, monitoring/metrics, and resiliency.")),(0,n.kt)("h2",{id:"monitoring"},"Monitoring"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://prometheus.io/"},"prometheus"),(0,n.kt)("br",null),"Prometheus is a systems and service monitoring system. It collects metrics from configured targets at given intervals, evaluates rule expressions, displays the results, and can trigger alerts if some condition is observed to be true."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://grafana.com/"},"grafana"),(0,n.kt)("br",null),"Grafana is the open source analytics & monitoring solution for every database")),(0,n.kt)("h2",{id:"distributed-tracing"},"Distributed tracing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://zipkin.io/"},"zipkin"),(0,n.kt)("br",null),"Zipkin is a distributed tracing system. It helps gather timing data needed to troubleshoot latency problems in microservice architectures. Features include both the collection and lookup of this data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://skywalking.apache.org/"},"skywalking"),(0,n.kt)("br",null),"Apache SkyWalking, an APM(application performance monitor) system, especially designed for microservices, cloud native and container-based (Docker, K8s, Mesos) architectures."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.jaegertracing.io/"},"jaeger"),(0,n.kt)("br",null),"Jaeger, a CNCF graduated project, is a distributed tracing system released as open source by Uber Technologies. It is used for monitoring and troubleshooting microservices-based distributed systems, including: - Distributed context propagation - Distributed transaction monitoring - Root cause analysis - Service dependency analysis - Performance / latency optimization - OpenTracing compatible data model - Multiple storage backends: Badger, Cassandra, Elasticsearch, Memory.")),(0,n.kt)("h2",{id:"rpc"},"Rpc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://grpc.io/"},"grpc"),(0,n.kt)("br",null),"gRPC is a modern open source high performance RPC framework that can run in any environment. It can efficiently connect services in and across data centers with pluggable support for load balancing, tracing, health checking and authentication. It is also applicable in last mile of distributed computing to connect devices, mobile applications and browsers to backend services."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://thrift.apache.org/"},"thrift"),(0,n.kt)("br",null),"Thrift is a software framework for scalable cross-language services development. It combines a software stack with a code generation engine to build services that work efficiently and seamlessly between C++, Java, Python, PHP, Ruby, Erlang, Perl, Haskell, C#, Cocoa, JavaScript, Node.js, Smalltalk, OCaml and Delphi and other languages."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://dubbo.apache.org/"},"dubbo"),(0,n.kt)("br",null),"Apache Dubbo\u2122 is a high-performance, java based open source RPC framework.")),(0,n.kt)("h2",{id:"identity-provider"},"Identity Provider"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.keycloak.org/"},"keycloak"),(0,n.kt)("br",null),"Open Source Identity and Access Management For Modern Applications and Service"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.freeipa.org/"},"FreeIPA"),(0,n.kt)("br",null),"FreeIPA is an integrated Identity and Authentication solution for Linux/UNIX networked environments. A FreeIPA server provides centralized authentication, authorization and account information by storing data about user, groups, hosts and other objects necessary to manage the security aspects of a network of computers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.okta.com/"},"okta"),(0,n.kt)("br",null),"Okta is the leading independent provider of identity for the enterprise. The Okta Identity Cloud enables"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.authelia.com/"},"Authelia"),(0,n.kt)("br",null),"Authelia is an open-source authentication and authorization server and portal fulfilling the identity and access management (IAM) role of information security in providing multi-factor authentication and single sign-on (SSO) for your applications via a web portal. It acts as a companion for common reverse proxies.")),(0,n.kt)("h2",{id:"database"},"Database"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rocksdb.org/"},"rocksdb"),(0,n.kt)("br",null),"A persistent key-value store for fast storage environments")),(0,n.kt)("h2",{id:"stream-processing"},"Stream Processing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://flink.apache.org/"},"flink"),(0,n.kt)("br",null),"Apache Flink is an open source stream processing framework with powerful stream- and batch-processing capabilities."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kafka.apache.org/documentation/streams/"},"kafka-streams"),(0,n.kt)("br",null),"Kafka Streams is a client library for processing and analyzing data stored in Kafka. It builds upon important stream processing concepts such as properly distinguishing between event time and processing time, windowing support, and simple yet efficient management of application state."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/docs/en/functions-overview/"},"pulsar-functions"),(0,n.kt)("br",null),"Apache Pulsar Functions is a lightweight compute framework that allows you to run stateless compute code against your Pulsar data. It is a serverless framework that allows you to write code that runs in response to Pulsar events without having to manage any infrastructure."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://storm.apache.org/"},"storm"),(0,n.kt)("br",null),"Apache Storm is a free and open source distributed realtime computation system. Storm makes it easy to reliably process unbounded streams of data, doing for realtime processing what Hadoop did for batch processing. Storm is simple, can be used with any programming language, and is a lot of fun to use!"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/streaming/"},"spark-streaming"),(0,n.kt)("br",null),"Apache Spark Streaming is an extension of the core Spark API that enables scalable, high-throughput, fault-tolerant stream processing of live data streams. Data can be ingested from many sources like Kafka, Flume, Kinesis, or TCP sockets, and can be processed using complex algorithms expressed with high-level functions like map, reduce, join and window. Finally, processed data can be pushed out to filesystems, databases, and live dashboards."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://beam.apache.org/"},"beam"),(0,n.kt)("br",null),"Apache Beam is an open source, unified model and set of language-specific SDKs for defining data processing workflows that may then be executed on top of a set of supported runners, currently including Apache Flink, Apache Spark, and Google Cloud Dataflow."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://samza.apache.org/"},"samza"),(0,n.kt)("br",null),"Apache Samza is a distributed stream processing framework that enables you to build high performance streaming applications. Samza provides a unified data processing model that can be used for real-time and batch processing. Samza applications are portable and can be deployed on any execution environment that supports the Samza API."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://flume.apache.org/"},"flume"),(0,n.kt)("br",null),"Apache Flume is a distributed, reliable, and available service for efficiently collecting, aggregating, and moving large amounts of log data. It has a simple and flexible architecture based on streaming data flows. It is robust and fault tolerant with tunable reliability mechanisms and many failover and recovery mechanisms. It uses a simple extensible data model that allows for online analytic application.")),(0,n.kt)("h2",{id:"orchestration"},"Orchestration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://netflix.github.io/conductor/"},"conductor")),(0,n.kt)("br",null),"Conductor is a distributed, scalable, durable, and elastic orchestration engine. It is designed to handle workflows and tasks in a microservices environment. Conductor is a Netflix open source project."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://azkaban.github.io/"},"azkaban")),(0,n.kt)("br",null),"Azkaban is a batch workflow job scheduler created at LinkedIn. It is used to schedule Hadoop jobs and other batch jobs. Azkaban is written in Java and uses a MySQL database to store metadata."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://cadenceworkflow.io/"},"cadence")),(0,n.kt)("br",null),"Cadence is a distributed, scalable, durable, and highly available orchestration engine to execute asynchronous long-running business logic in a scalable and resilient way. Cadence is a Uber open source project.")),(0,n.kt)("h2",{id:"data-processing"},"Data processing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-cloud-dataflow/"},"Spring Cloud Data Flow"),(0,n.kt)("br",null),"Microservice based Streaming and Batch data processing for Cloud Foundry and Kubernetes.",(0,n.kt)("br",null),"Spring Cloud Data Flow provides tools to create complex topologies for streaming and batch data pipelines. The data",(0,n.kt)("br",null),"pipelines consist of Spring Boot apps, built using the Spring Cloud Stream or Spring Cloud Task microservice frameworks.",(0,n.kt)("br",null),"Spring Cloud Data Flow supports a range of data processing use cases, from ETL to import/export, event streaming, and predictive analytics."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://airflow.apache.org/"},"Apache Airflow"),(0,n.kt)("br",null),"Airflow is a platform created by the community to programmatically author, schedule and monitor workflows.")))}d.isMDXComponent=!0}}]);