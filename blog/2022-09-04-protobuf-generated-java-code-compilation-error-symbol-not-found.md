---
authors: [ orange ]
tags: [ troubleshooting, java, protobuf, grpc ]
---

# protobuf生成的java代码编译报错找不到symbol

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

<!--truncate-->

## 原因

> If you are receiving this message, you are using new codegen with old runtime code. The recent security fix uses new
> methods in GeneratedMessageV3.Builder.
> https://github.com/protocolbuffers/protobuf/blob/main/java/core/src/main/java/com/google/protobuf/GeneratedMessageV3.java (
> line 823)
> Old generated code will work with the new runtime (but will not be security-fixed)
> New generated code will not work with pre-patched runtimes.

## 解决方案

升级`protobuf`到最新版本

## 备注

- [Java Compile Error on parseUnknownField](https://github.com/protocolbuffers/protobuf/issues/10695)
  
  