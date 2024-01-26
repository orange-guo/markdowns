"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[9544],{92758:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=s(85893),a=s(11151);const r={},t="Distributed System Components",o={id:"software-engineering/infrastructure/distributed-system-components",title:"Distributed System Components",description:"API Gateway",source:"@site/docs/software-engineering/infrastructure/distributed-system-components.md",sourceDirName:"software-engineering/infrastructure",slug:"/software-engineering/infrastructure/distributed-system-components",permalink:"/zh-CN/docs/software-engineering/infrastructure/distributed-system-components",draft:!1,unlisted:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/software-engineering/infrastructure/distributed-system-components.md",tags:[],version:"current",lastUpdatedBy:"Xiangcheng Kuo",lastUpdatedAt:1706265421,formattedLastUpdatedAt:"2024\u5e741\u670826\u65e5",frontMatter:{},sidebar:"softwareEngineering",previous:{title:"yq",permalink:"/zh-CN/docs/software-engineering/infrastructure/linux/yq"},next:{title:"Docker",permalink:"/zh-CN/docs/software-engineering/infrastructure/docker"}},c={},l=[{value:"API Gateway",id:"api-gateway",level:2},{value:"Configuration management",id:"configuration-management",level:2},{value:"Message broker",id:"message-broker",level:2},{value:"CaaS",id:"caas",level:2},{value:"Security",id:"security",level:2},{value:"Monitoring",id:"monitoring",level:2},{value:"Service discovery",id:"service-discovery",level:2},{value:"Distributed tracing",id:"distributed-tracing",level:2},{value:"Rpc",id:"rpc",level:2},{value:"Identity Provider",id:"identity-provider",level:2},{value:"Database",id:"database",level:2},{value:"Stream Processing",id:"stream-processing",level:2},{value:"Orchestration",id:"orchestration",level:2},{value:"Data processing",id:"data-processing",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"distributed-system-components",children:"Distributed System Components"}),"\n",(0,i.jsx)(n.h2,{id:"api-gateway",children:"API Gateway"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.nginx.com/",children:"Nginx"}),"\n",(0,i.jsx)("br",{}),"Nginx is a web server which can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://traefik.io/",children:"Traefik"}),"\n",(0,i.jsx)("br",{}),"Traefik is a modern HTTP reverse proxy and load balancer that makes deploying microservices easy."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://konghq.com/",children:"Kong"}),"\n",(0,i.jsx)("br",{}),"Kong is a cloud-native, fast, scalable, and distributed Microservice Abstraction Layer (also known as an API\nGateway, API Middleware or in some cases Service Mesh). Made available as an open-source project in 2015, its core\nvalues are high performance and extensibility."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://spring.io/projects/spring-cloud-gateway",children:"Spring Cloud Gateway"}),"\n",(0,i.jsx)("br",{}),"Spring Cloud Gateway aims to provide a simple, yet effective way to route to APIs and provide cross cutting\nconcerns to them such as: security, monitoring/metrics, and resiliency."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/apache/apisix",children:"apisix"}),"\n",(0,i.jsx)("br",{}),"The Cloud-Native API Gateway"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/TykTechnologies/tyk",children:"tyk"}),"\n",(0,i.jsx)("br",{}),"Tyk Open Source API Gateway written in Go, supporting REST, GraphQL, TCP and gRPC protocols"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/krakend/krakend-ce",children:"krakend-ce"}),"\n",(0,i.jsx)("br",{}),"KrakenD Community Edition: High-performance, stateless, declarative, API Gateway written in Go."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/gravitee-io/gravitee-api-management",children:"gravitee-api-management"}),"\n",(0,i.jsx)("br",{}),"Gravitee.io - OpenSource API Management"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuration-management",children:"Configuration management"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.consul.io/",children:"consul"}),"\n",(0,i.jsx)("br",{}),"Consul is a service networking solution to connect and secure services across any runtime platform and public or\nprivate cloud"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://nacos.io/",children:"nacos"}),"\n",(0,i.jsx)("br",{}),"An easy-to-use dynamic service discovery, configuration and service management platform for building cloud native\napplications("]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.apolloconfig.com/",children:"apollo"}),"\n",(0,i.jsx)("br",{}),"Apollo is a reliable configuration management system suitable for microservice configuration management\nscenarios."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://etcd.io/",children:"etcd"}),"\n",(0,i.jsx)("br",{}),"A distributed, reliable key-value store for the most critical data of a distributed"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"message-broker",children:"Message broker"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.rabbitmq.com/",children:"rabbitmq"}),"\n",(0,i.jsx)("br",{}),"RabbitMQ is the most widely deployed open source message broker. It is lightweight and easy to deploy on premises\nand in the cloud. It supports multiple messaging protocols. RabbitMQ can be deployed in distributed and federated\nconfigurations to meet high-scale, high-availability requirements."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://kafka.apache.org/",children:"kafka"}),"\n",(0,i.jsx)("br",{}),"Apache Kafka is a distributed streaming platform"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://rocketmq.apache.org/",children:"rocketmq"}),"\n",(0,i.jsx)("br",{}),"Apache RocketMQ is a distributed messaging and streaming platform with low latency, high performance and\nreliability, trillion-level capacity and flexible scalability."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://pulsar.apache.org/",children:"pulsar"}),"\n",(0,i.jsx)("br",{}),"Apache Pulsar is a cloud-native, distributed messaging and streaming platform originally created at Yahoo! and\nnow part of the Apache Software Foundation."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://nats.io/",children:"nats"}),"\n",(0,i.jsx)("br",{}),"NATS is a simple, secure and high performance open source messaging system for cloud native applications,\nIoT messaging, and microservices architectures."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"caas",children:"CaaS"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/hashicorp/nomad",children:"nomad"}),"\n",(0,i.jsx)("br",{}),"Nomad is an easy-to-use, flexible, and performant workload orchestrator that can deploy a mix of microservice,\nbatch, containerized, and non-containerized applications. Nomad is easy to operate and scale and has native Consul and\nVault integrations."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://kubernetes.io/",children:"kubernetes"}),"\n",(0,i.jsx)("br",{}),"Production-Grade Container Orchestration"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://kind.sigs.k8s.io/",children:"kind"}),"\n",(0,i.jsx)("br",{}),"kind is a tool for running local Kubernetes clusters using Docker container \u201cnodes\u201d.\n",(0,i.jsx)("br",{}),"kind was primarily designed for testing Kubernetes itself, but may be used for local development or CI."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://k3s.io/",children:"k3s"}),"\n",(0,i.jsx)("br",{}),"The certified Kubernetes distribution built for IoT & Edge computing"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://minikube.sigs.k8s.io/",children:"minikube"}),"\n",(0,i.jsx)("br",{}),"minikube quickly sets up a local Kubernetes cluster on macOS, Linux, and Windows. We proudly focus on helping\napplication developers and new Kubernetes users."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.cncf.io/",children:"cncf"}),"\n",(0,i.jsx)("br",{}),"CNCF is the open source, vendor-neutral hub of cloud native computing, hosting projects like Kubernetes and\nPrometheus to make cloud native universal and sustainable."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"security",children:"Security"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://casbin.org/",children:"casbin"}),"\n",(0,i.jsx)("br",{}),"An authorization library that supports access control models like ACL, RBAC, ABAC in Golang"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"monitoring",children:"Monitoring"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://prometheus.io/",children:"prometheus"}),"\n",(0,i.jsx)("br",{}),"Prometheus is a systems and service monitoring system. It collects metrics from configured targets at given\nintervals, evaluates rule expressions, displays the results, and can trigger alerts if some condition is observed to\nbe true."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://grafana.com/",children:"grafana"}),"\n",(0,i.jsx)("br",{}),"Grafana is the open source analytics & monitoring solution for every database"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/getsentry/sentry",children:"sentry"}),"\n",(0,i.jsx)("br",{}),"Developer-first error tracking and performance monitoring"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/getsentry/self-hosted",children:"self-hosted"}),"\n",(0,i.jsx)("br",{}),"Sentry, feature-complete and packaged up for low-volume deployments and proofs-of-concept"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/prometheus/alertmanager",children:"alertmanager"}),"\n",(0,i.jsx)("br",{}),"Prometheus Alertmanager"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/zabbix/zabbix",children:"zabbix"}),"\n",(0,i.jsx)("br",{}),"Real-time monitoring of IT components and services, such as networks, servers, VMs, applications and the cloud."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/Icinga/icinga2",children:"icinga2"}),"\n",(0,i.jsx)("br",{}),"The core of our monitoring platform with a powerful configuration language and REST API."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/NagiosEnterprises/nagioscore",children:"nagioscore"}),"\n",(0,i.jsx)("br",{}),"Nagios Core"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/samber/awesome-prometheus-alerts",children:"awesome-prometheus-alerts"}),"\n",(0,i.jsx)("br",{}),"\ud83d\udea8 Collection of Prometheus alerting rules"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"service-discovery",children:"Service discovery"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.consul.io/",children:"consul"}),"\n",(0,i.jsx)("br",{}),"Consul is a service networking solution to connect and secure services across any runtime platform and public or\nprivate cloud"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://nacos.io/",children:"nacos"}),"\n",(0,i.jsx)("br",{}),"An easy-to-use dynamic service discovery, configuration and service management platform for building cloud native\napplications"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"distributed-tracing",children:"Distributed tracing"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://zipkin.io/",children:"zipkin"}),"\n",(0,i.jsx)("br",{}),"Zipkin is a distributed tracing system. It helps gather timing data needed to troubleshoot latency problems in\nmicroservice architectures. Features include both the collection and lookup of this data."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://skywalking.apache.org/",children:"skywalking"}),"\n",(0,i.jsx)("br",{}),"Apache SkyWalking, an APM(application performance monitor) system, especially designed for microservices,\ncloud native and container-based (Docker, K8s, Mesos) architectures."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.jaegertracing.io/",children:"jaeger"}),"\n",(0,i.jsx)("br",{}),"Jaeger, a CNCF graduated project, is a distributed tracing system released as open source by Uber Technologies.\nIt is used for monitoring and troubleshooting microservices-based distributed systems, including:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Distributed context propagation"}),"\n",(0,i.jsx)(n.li,{children:"Distributed transaction monitoring"}),"\n",(0,i.jsx)(n.li,{children:"Root cause analysis"}),"\n",(0,i.jsx)(n.li,{children:"Service dependency analysis"}),"\n",(0,i.jsx)(n.li,{children:"Performance / latency optimization"}),"\n",(0,i.jsx)(n.li,{children:"OpenTracing compatible data model"}),"\n",(0,i.jsx)(n.li,{children:"Multiple storage backends: Badger, Cassandra, Elasticsearch, Memory."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"rpc",children:"Rpc"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://grpc.io/",children:"grpc"}),"\n",(0,i.jsx)("br",{}),"gRPC is a modern open source high performance RPC framework that can run in any environment. It can efficiently\nconnect services in and across data centers with pluggable support for load balancing, tracing, health checking and\nauthentication. It is also applicable in last mile of distributed computing to connect devices, mobile applications\nand browsers to backend services."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://thrift.apache.org/",children:"thrift"}),"\n",(0,i.jsx)("br",{}),"Thrift is a software framework for scalable cross-language services development. It combines a software stack\nwith a code generation engine to build services that work efficiently and seamlessly between C++, Java, Python,\nPHP, Ruby, Erlang, Perl, Haskell, C#, Cocoa, JavaScript, Node.js, Smalltalk, OCaml and Delphi and other languages."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://dubbo.apache.org/",children:"dubbo"}),"\n",(0,i.jsx)("br",{}),"Apache Dubbo\u2122 is a high-performance, java based open source RPC framework."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"identity-provider",children:"Identity Provider"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.keycloak.org/",children:"keycloak"}),"\n",(0,i.jsx)("br",{}),"Open Source Identity and Access Management For Modern Applications and Service"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.freeipa.org/",children:"FreeIPA"}),"\n",(0,i.jsx)("br",{}),"FreeIPA is an integrated Identity and Authentication solution for Linux/UNIX networked environments. A FreeIPA\nserver provides centralized authentication, authorization and account information by storing data about user,\ngroups, hosts and other objects necessary to manage the security aspects of a network of computers."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.okta.com/",children:"okta"}),"\n",(0,i.jsx)("br",{}),"Okta is the leading independent provider of identity for the enterprise. The Okta Identity Cloud enables"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.authelia.com/",children:"Authelia"}),"\n",(0,i.jsx)("br",{}),"Authelia is an open-source authentication and authorization server and portal fulfilling the identity and access\nmanagement (IAM) role of information security in providing multi-factor authentication and single sign-on (SSO) for\nyour applications via a web portal. It acts as a companion for common reverse proxies."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"database",children:"Database"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://rocksdb.org/",children:"rocksdb"}),"\n",(0,i.jsx)("br",{}),"A persistent key-value store for fast storage environments"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"stream-processing",children:"Stream Processing"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://flink.apache.org/",children:"flink"}),"\n",(0,i.jsx)("br",{}),"Apache Flink is an open source stream processing framework with powerful stream- and batch-processing\ncapabilities."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://kafka.apache.org/documentation/streams/",children:"kafka-streams"}),"\n",(0,i.jsx)("br",{}),"Kafka Streams is a client library for processing and analyzing data stored in Kafka. It builds upon important\nstream processing concepts such as properly distinguishing between event time and processing time, windowing support,\nand simple yet efficient management of application state."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://pulsar.apache.org/docs/en/functions-overview/",children:"pulsar-functions"}),"\n",(0,i.jsx)("br",{}),"Apache Pulsar Functions is a lightweight compute framework that allows you to run stateless compute code\nagainst your Pulsar data. It is a serverless framework that allows you to write code that runs in response to\nPulsar events without having to manage any infrastructure."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://storm.apache.org/",children:"storm"}),"\n",(0,i.jsx)("br",{}),"Apache Storm is a free and open source distributed realtime computation system. Storm makes it easy to reliably\nprocess unbounded streams of data, doing for realtime processing what Hadoop did for batch processing. Storm is\nsimple,\ncan be used with any programming language, and is a lot of fun to use!"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://spark.apache.org/streaming/",children:"spark-streaming"}),"\n",(0,i.jsx)("br",{}),"Apache Spark Streaming is an extension of the core Spark API that enables scalable, high-throughput,\nfault-tolerant\nstream processing of live data streams. Data can be ingested from many sources like Kafka, Flume, Kinesis, or TCP\nsockets, and can be processed using complex algorithms expressed with high-level functions like map, reduce, join and\nwindow. Finally, processed data can be pushed out to filesystems, databases, and live dashboards."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://beam.apache.org/",children:"beam"}),"\n",(0,i.jsx)("br",{}),"Apache Beam is an open source, unified model and set of language-specific SDKs for defining data processing\nworkflows that may then be executed on top of a set of supported runners, currently including Apache Flink, Apache\nSpark, and Google Cloud Dataflow."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://samza.apache.org/",children:"samza"}),"\n",(0,i.jsx)("br",{}),"Apache Samza is a distributed stream processing framework that enables you to build high performance streaming\napplications. Samza provides a unified data processing model that can be used for real-time and batch processing.\nSamza applications are portable and can be deployed on any execution environment that supports the Samza API."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://flume.apache.org/",children:"flume"}),"\n",(0,i.jsx)("br",{}),"Apache Flume is a distributed, reliable, and available service for efficiently collecting, aggregating, and\nmoving large amounts of log data. It has a simple and flexible architecture based on streaming data flows. It is\nrobust\nand fault tolerant with tunable reliability mechanisms and many failover and recovery mechanisms. It uses a simple\nextensible data model that allows for online analytic application."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"orchestration",children:"Orchestration"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://netflix.github.io/conductor/",children:"conductor"}),"\n",(0,i.jsx)("br",{}),"Conductor is a distributed, scalable, durable, and elastic orchestration engine. It is designed to handle\nworkflows and tasks in a microservices environment. Conductor is a Netflix open source project."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://azkaban.github.io/",children:"azkaban"}),"\n",(0,i.jsx)("br",{}),"Azkaban is a batch workflow job scheduler created at LinkedIn. It is used to schedule Hadoop jobs and other\nbatch jobs. Azkaban is written in Java and uses a MySQL database to store metadata."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://cadenceworkflow.io/",children:"cadence"}),"\n",(0,i.jsx)("br",{}),"Cadence is a distributed, scalable, durable, and highly available orchestration engine to execute asynchronous\nlong-running business logic in a scalable and resilient way. Cadence is a Uber open source project."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"data-processing",children:"Data processing"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://spring.io/projects/spring-cloud-dataflow/",children:"Spring Cloud Data Flow"}),"\n",(0,i.jsx)("br",{}),"Microservice based Streaming and Batch data processing for Cloud Foundry and Kubernetes.\n",(0,i.jsx)("br",{}),"Spring Cloud Data Flow provides tools to create complex topologies for streaming and batch data pipelines. The\ndata\n",(0,i.jsx)("br",{}),"pipelines consist of Spring Boot apps, built using the Spring Cloud Stream or Spring Cloud Task microservice\nframeworks.\n",(0,i.jsx)("br",{}),"Spring Cloud Data Flow supports a range of data processing use cases, from ETL to import/export, event streaming,\nand\npredictive analytics."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://airflow.apache.org/",children:"Apache Airflow"}),"\n",(0,i.jsx)("br",{}),"Airflow is a platform created by the community to programmatically author, schedule and monitor workflows."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>t});var i=s(67294);const a={},r=i.createContext(a);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);