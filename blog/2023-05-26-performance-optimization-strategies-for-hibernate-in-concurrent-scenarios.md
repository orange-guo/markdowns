---
authors: [ xiangcheng.kuo ]
tags: [ spring-boot, spring-data-jpa, hibernate, performance ]
---

# 基于hibernate的spring-data-jpa的并发性能优化配置

## 摘要

默认情况下，`spring-data-jpa`使用`hibernate`作为`jpa`的实现, 当并发量较大时, 由于框架的一些默认配置可能会引发性能瓶颈,
下面将介绍一些常见的配置项来改善并发量较大时的性能问题.

<!--truncate-->

## 禁用`open-in-view`

在`spring-boot`中默认开启了`open-in-view`，这个配置项的作用是在整个请求上下文复用同一个`EntityManager`.<br/>
该实现的好处是避免在同一个请求中多次创建一个`EntityManager`, 从而提高性能.<br/>
当系统并发较大时且系统相应较慢, 由于`EntityManager`会持有数据库链接直到整个请求处理完成, 如果没有特别的需求, 例如:

- 在`View`层使用Entity对象中`cascade`为`lazy`的关联对象

可以考虑禁用`open-in-view`来提高性能

### 解决方案

在`application.yml`中添加如下配置:

```yaml title="application.yml"
spring:
  jpa:
    open-in-view: false
```

## 覆盖`hibernate.connection.handling_mode`配置项的默认配置

`hibernate.connection.handling_mode`用于配置`EntityManager`中关联的数据库连接(创建及销毁时机)的控制.<br/>
默认值创建时机为第一次与数据库交互, 关闭时机为`EntitiyManager`被关闭, 此举的目的是为了确保数据连接的最大化利用(
因为数据库连接的创建通常比较昂贵).<br/>
但是对于带用`DataSource`的应用来说, 此配置并不会改善性能问题, 因为`DataSource`存在的意义就是复用数据库连接.<br/>
并且由于`EntityManager`关联的数据库连接只有在关闭时才会被释放, 如果遇到`EntityManager`
长时间存活时并且此时系统并发较大会导致数据库没有空闲的连接导致后续请求被堵塞甚至获取数据库连接超时.<br/>

为了解决这个问题, 可以考虑配置`hibernate.connection.handling_mode`配置项对应的值,
该配置对应的枚举类为`PhysicalConnectionHandlingMode`, 枚举类中有如下几个值

对于没有使用`DataSource`的应用来说, 可以考虑以下几个值, 这几个值都是为了确保数据库连接的最大化利用, 因为创建数据库连接比较昂贵.

- IMMEDIATE_ACQUISITION_AND_HOLD
  <br/>表示连接会在`EntityManager`创建时获取, 关闭时释放.
  <br/>该配置的目的是为了能够在整个请求上下文中复用同一个数据库连接, 因为创建数据库连接比较昂贵.
  但是对于带用`DataSource`的应用来说, 此配置并不会改善性能问题, 因为`DataSource`存在的意义就是复用数据库连接.
- DELAYED_ACQUISITION_AND_HOLD  
  <br/>表示连接会`EntityManager`和数据库产生交互时获取, 关闭时释放. 这是默认的配置.
  <br/>此配置和上面的配置除了获取连接的时机不同外, 其他都相同.

对于使用`DataSource`的应用来说, 可以积极地释放数据库链接来提高系统吞吐率, 因为`DataSource`已经帮我们做了数据库连接的复用,

- DELAYED_ACQUISITION_AND_RELEASE_AFTER_STATEMENT
  <br/>如果需要执行多个独立的语句，那么可以选择此配置
- DELAYED_ACQUISITION_AND_RELEASE_BEFORE_TRANSACTION_COMPLETION
  <br/>如果应用程序需要执行多个事务，并且不在乎事务的一致性，那么可以选择此配置.<br/>
  <br/>这个配置一个潜在的问题是由于事务提交前会释放数据库连接, 如果后续事务提交时需要获取数据库连接时出现了问题会导致事务提交失败,
  从而导致数据库中的事务一直处于开启状态
- DELAYED_ACQUISITION_AND_RELEASE_AFTER_TRANSACTION
  <br/>如果需要处理事务, 并且为了保证事务的一致性, 那么可以选择此配置

一般来说, 如果应用程序需要处理事务, 并且为了保证事务的一致性,
那么可以选择`DELAYED_ACQUISITION_AND_RELEASE_AFTER_TRANSACTION`配置.
如果应用不在乎事务的一致性, 那么可以选择`DELAYED_ACQUISITION_AND_RELEASE_BEFORE_TRANSACTION_COMPLETION`配置,
由于此配置会在事务提交前释放数据库连接,有可能会导致后续事务提交时获取数据库连接失败, 从而导致事务提交失败,
从而导致数据库中的事务一直处于开启状态, 所以此配置需要谨慎使用.
如果应用不需要处理事务, 那么可以选择`DELAYED_ACQUISITION_AND_RELEASE_AFTER_STATEMENT`配置.

### 解决方案

在`application.yml`中添加如下配置:

```yaml title="application.yml"
spring:
  jpa:
    properties:
      hibernate:
        connection:
          handling_mode: your_handling_mode
```

## 总结

## 参考资料

### Open In View

- [A Guide to Spring’s Open Session in View](https://www.baeldung.com/spring-open-session-in-view)
- [OpenEntityManagerInViewInterceptor](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/orm/jpa/support/OpenEntityManagerInViewInterceptor.html)

### Connection Control

- [How does aggressive connection release work in Hibernate](https://vladmihalcea.com/hibernate-aggressive-connection-release/)
- [Connection handling](https://docs.jboss.org/hibernate/orm/6.2/userguide/html_single/Hibernate_User_Guide.html#database-connection-handling)
- [PhysicalConnectionHandlingMode](https://docs.jboss.org/hibernate/orm/6.2/javadocs/org/hibernate/resource/jdbc/spi/PhysicalConnectionHandlingMode.html)
- [AvailableSettings](https://docs.jboss.org/hibernate/orm/6.2/javadocs/org/hibernate/cfg/AvailableSettings.html)

### Additional High-Performance Optimizations

- [High-Performance Hibernate Tutorial](https://vladmihalcea.com/tutorials/hibernate/)
- [Performance Tuning and Best Practices](https://docs.jboss.org/hibernate/orm/6.2/userguide/html_single/Hibernate_User_Guide.html#best-practices)