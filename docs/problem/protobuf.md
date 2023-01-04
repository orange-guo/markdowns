# Protobuf

## cluster-scheduler服务protobuf编译报错Tried to write the same file twice.

### 现象

新增quota_usage.proto文件后编译失败, 输出以下错误

```
[ERROR] PROTOC FAILED: com/fastonetech/contract/computecloud/deploy/v2/QuotaUsage.java: Tried to write the same file twice.
[libprotobuf WARNING ../../../../../src/google/protobuf/compiler/java/java_file.cc:232] cmdb/v1/cmdb.proto: The file's outer class name, "Cmdb", matches the name of one of the types declared inside it when case is ignored. This can cause compilation issues on Windows / MacOS. Please either rename the type or use the java_outer_classname option to specify a different outer class name for the .proto file to be safe.
```

### 原因

编译后的`java class`冲突

`protoc`编译时会一并将`proto`文件编译为class文件<br/>
`quota_usage.proto`文件最终会被编译为`QuotaUsage.class`, 与`license.proto`中的`message QuotaUsage`输出了相同的`class`名称

### 解决方案

- 修改protobuf名称
- 为protobuf文件增加`java_outer_classname`参数`option java_outer_classname = newName`

### 备注

由于我们所有的proto文件内部都增加了`option java_multiple_files = true;`
这个参数可以将一个proto编译后的class文件由一个变为多个
后果则是由于在一个命名空间内随着定义越来越多那么重复的概率也会加大

## mgmt-api服务protobuf编译报错找不到proto文件

### 现象

在新增`submodule/api-contract/protobuf/node_manager/v1/`到`srcDirs`后, 编译报错, 编译输出如下

```log
> Task :generateProto FAILED

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':generateProto'.
> protoc: stdout: . stderr: nodemanager/v1/volume.proto: File not found.
  nodemanager/v1/tag.proto: File not found.
  nodemanager/v1/firewall.proto: File not found.
  node.proto:10:1: Import "nodemanager/v1/volume.proto" was not found or had errors.
  node.proto:11:1: Import "nodemanager/v1/tag.proto" was not found or had errors.
  node.proto:12:1: Import "nodemanager/v1/firewall.proto" was not found or had errors.
  node.proto:153:12: "Tag" is not defined.
  node.proto:177:12: "VolumeSpec" is not defined.
  node.proto:195:12: "Tag" is not defined.
  node.proto:212:12: "Tag" is not defined.
  node.proto:214:12: "RegisterVolumeSpec" is not defined.
  node.proto:269:12: "Tag" is not defined.
  node.proto:277:12: "nodemanager.v1.FirewallRule" seems to be defined in "firewall.proto", which is not imported by "node.proto".  To use it here, please add the necessary import.
  node.proto:299:12: "Volume" is not defined.


* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 4s
3 actionable tasks: 1 executed, 2 up-to-date
```

### 原因

由于该目录下的proto文件之间存在`import`, 需要将文件分别导入而不是只导入其父目录

### 解决方案

修改`build.gradle.kts`

```kotlin
dependencies {
	protobuf(files("submodule/api-contract/protobuf/cmdb/v1"))
	protobuf(files("submodule/api-contract/protobuf/nott/v1/events/quota"))
	protobuf(files("submodule/api-contract/protobuf/node_manager/v1/*.proto"))
}
```

上面两行表示导入目录, 下面一行表示导入匹配的`proto`文件

### 备注
- [:generateProto fails with directory not found when importing other proto definitions](https://github.com/google/protobuf-gradle-plugin/issues/405)

## protobuf生成的java代码编译报错找不到symbol

### 现象

使用gradle build时报错找不到symbol, 输出如下

```log
> Task :compileJava FAILED
/home/orange/Documents/Dev/Project/Fastone/mgmt-api/build/generated/main/java/nott/v1/events/quota/Mgmt2StackQuota.java:430: error: cannot find symbol
                if (!super.parseUnknownField(input, extensionRegistry, tag)) {
                          ^
  symbol: method parseUnknownField(CodedInputStream,ExtensionRegistryLite,int)
/home/orange/Documents/Dev/Project/Fastone/mgmt-api/build/generated/main/java/nott/v1/events/quota/Mgmt2StackQuota.java:1032: error: cannot find symbol
                if (!super.parseUnknownField(input, extensionRegistry, tag)) {
                          ^
  symbol: method parseUnknownField(CodedInputStream,ExtensionRegistryLite,int)
/home/orange/Documents/Dev/Project/Fastone/mgmt-api/build/generated/main/java/nott/v1/events/quota/Mgmt2StackQuota.java:1915: error: cannot find symbol
                if (!super.parseUnknownField(input, extensionRegistry, tag)) {
                          ^
  symbol: method parseUnknownField(CodedInputStream,ExtensionRegistryLite,int)
/home/orange/Documents/Dev/Project/Fastone/mgmt-api/build/generated/main/java/cmdb/v1/Cmdb.java:479: error: cannot find symbol
                if (!super.parseUnknownField(input, extensionRegistry, tag)) {
                          ^
  symbol: method parseUnknownField(CodedInputStream,ExtensionRegistryLite,int)
/home/orange/Documents/Dev/Project/Fastone/mgmt-api/build/generated/main/java/cmdb/v1/Cmdb.java:1263: error: cannot find symbol
                if (!super.parseUnknownField(input, extensionRegistry, tag)) {
                          ^
  symbol: method parseUnknownField(CodedInputStream,ExtensionRegistryLite,int)
/home/orange/Documents/Dev/Project/Fastone/mgmt-api/build/generated/main/java/cmdb/v1/Cmdb.java:2342: error: cannot find symbol
                if (!super.parseUnknownField(input, extensionRegistry, tag)) {
                          ^
  symbol: method parseUnknownField(CodedInputStream,ExtensionRegistryLite,int)
/home/orange/Documents/Dev/Project/Fastone/mgmt-api/build/generated/main/java/cmdb/v1/Cmdb.java:3397: error: cannot find symbol
                if (!super.parseUnknownField(input, extensionRegistry, tag)) {
                          ^
  symbol: method parseUnknownField(CodedInputStream,ExtensionRegistryLite,int)
/home/orange/Documents/Dev/Project/Fastone/mgmt-api/build/generated/main/java/cmdb/v1/Cmdb.java:4262: error: cannot find symbol
                if (!super.parseUnknownField(input, extensionRegistry, tag)) {
                          ^
  symbol: method parseUnknownField(CodedInputStream,ExtensionRegistryLite,int)
/home/orange/Documents/Dev/Project/Fastone/mgmt-api/build/generated/main/java/cmdb/v1/Cmdb.java:4985: error: cannot find symbol
                if (!super.parseUnknownField(input, extensionRegistry, tag)) {
                          ^
  symbol: method parseUnknownField(CodedInputStream,ExtensionRegistryLite,int)
/home/orange/Documents/Dev/Project/Fastone/mgmt-api/build/generated/main/java/cmdb/v1/Cmdb.java:5578: error: cannot find symbol
                if (!super.parseUnknownField(input, extensionRegistry, tag)) {
                          ^
  symbol: method parseUnknownField(CodedInputStream,ExtensionRegistryLite,int)
/home/orange/Documents/Dev/Project/Fastone/mgmt-api/build/generated/main/java/cmdb/v1/Cmdb.java:6165: error: cannot find symbol
                if (!super.parseUnknownField(input, extensionRegistry, tag)) {
                          ^
  symbol: method parseUnknownField(CodedInputStream,ExtensionRegistryLite,int)
/home/orange/Documents/Dev/Project/Fastone/mgmt-api/build/generated/main/java/cmdb/v1/Cmdb.java:9640: error: cannot find symbol
                if (!super.parseUnknownField(input, extensionRegistry, tag)) {
                          ^
  symbol: method parseUnknownField(CodedInputStream,ExtensionRegistryLite,int)
12 errors

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':compileJava'.
> Compilation failed; see the compiler error output for details.

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 22s
9 actionable tasks: 9 executed
```

### 原因

> If you are receiving this message, you are using new codegen with old runtime code. The recent security fix uses new
> methods in GeneratedMessageV3.Builder.
> https://github.com/protocolbuffers/protobuf/blob/main/java/core/src/main/java/com/google/protobuf/GeneratedMessageV3.java (line 823)
> Old generated code will work with the new runtime (but will not be security-fixed)
> New generated code will not work with pre-patched runtimes.

### 解决方案
升级`protobuf`到最新版本
### 备注

- [Java Compile Error on parseUnknownField](https://github.com/protocolbuffers/protobuf/issues/10695)