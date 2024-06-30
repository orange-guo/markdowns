---
authors: [ orange ]
tags: [ problem-solving, golang, kopia, volcengine, tos, s3 ]
---

# kopia接入火山云TOS报错Access Denied问题的排查及修复

`kopia`是一个备份工具, 支持多种存储后端, 包括`对象存储`, `文件系统`等,
通过kopia可以将数据备份到不同的存储后端, 也可以从不同的存储后端恢复数据.
火山云`TOS`是火山云提供的对象存储服务, 支持通过`S3`协议访问.
最近在使用kopia接入火山云`TOS`时, 遇到了一个问题, 问题的现象是调用`kopia`提供的`s3_storage`接入火山云TOS时, 报错`Access Denied.`

```log
unable to determine if bucket "xxxxx" exists: Access Denied.
```

以下是该问题的原因及解决方案总结.

<!--truncate-->

## 问题原因

火山云对`S3`协议只有部分实现.
以请求方式为例, 只支持`Virtual Hosted-Style`的请求方式, 不支持`Path-Style`的请求方式.
> 上述两种请求方式主要用于区分对不同的存储桶进行操作.
> `Virtual Hosted-Style`:
> 这种请求方式是通过在域名中指定存储桶名称来进行操作, 如`https://{bucket-name}.s3.{region-code}.amazonaws.com`.
> `Path-Style`:
> 这种请求方式是通过在域名后面指定存储桶名称来进行操作, 如`https://s3.{region-code}.amazonaws.com/{bucket-name}

`kopia`通过`minio`实现了对`S3`协议的支持, `minio`中默认情况下使用`Path-Style`的请求方式,
所以导致了`Access Denied`的问题.

## 解决方案

`minio`在创建`client`的时候提供了`BucketLookup`选项, 用于指定`client`使用的请求方式, 但是`kopia`没有暴露这个选项.<br/>
目前已在`kopia`的`repo`中开了一个[issue](https://github.com/kopia/kopia/issues/3734), 需要等待后续的进展.

## 参考

- [kopia](https://github.com/kopia/kopia)
- [TOS](https://www.volcengine.com/docs/6349)

- [AWS S3 协议兼容性说明](https://www.volcengine.com/docs/6349/147050)

> TOS 仅支持使用虚拟主机（即 VirtualHostStyle）的请求方式，不支持路径样式（即 PathStyle）的请求方式。因此使用各种支持 S3 协议的
> SDK 和工具访问 TOS 时，请务必确保配置了 VirtualHostStyle 的请求方式。例如，使用 AWS S3 Java SDK 时，需要在客户端初始化时确保设置了禁用
> PathStyle 的配置参数：AmazonS3Builder.withPathStyleAccessEnabled(false)。

- [Virtual hosting of buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html?spm=a2c4g.11186623.0.0.6b9d64012JMDoP)

- [Custmize minio creation options](https://github.com/kopia/kopia/issues/3734)