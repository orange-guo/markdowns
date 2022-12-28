# Protobuf

## cluster-scheduler服务protobuf编译失败

### 现象

新增quota_usage.proto文件后编译失败, 输出以下错误

```
[ERROR] PROTOC FAILED: com/fastonetech/contract/computecloud/deploy/v2/QuotaUsage.java: Tried to write the same file twice.
[libprotobuf WARNING ../../../../../src/google/protobuf/compiler/java/java_file.cc:232] cmdb/v1/cmdb.proto: The file's outer class name, "Cmdb", matches the name of one of the types declared inside it when case is ignored. This can cause compilation issues on Windows / MacOS. Please either rename the type or use the java_outer_classname option to specify a different outer class name for the .proto file to be safe.
```

### 原因

protoc编译proto文件为java的class文件时, 也会一并将proto文件编译为class文件<br/>
本次case里的`quota_usage.proto`文件最终会被编译为`QuotaUsage.class`, 这样就与`license.proto`中的`message QuotaUsage`冲突

### 解决方案

- 修改protobuf名称
- 为protobuf文件增加`java_outer_classname`参数`option java_outer_classname = newName`

### 备注

由于我们所有的proto文件内部都增加了`option java_multiple_files = true;`
这个参数可以将一个proto编译后的class文件由一个变为多个
后果则是由于在一个命名空间内随着定义越来越多那么重复的概率也会加大