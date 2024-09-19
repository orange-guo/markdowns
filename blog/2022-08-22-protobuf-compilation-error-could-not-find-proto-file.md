---
authors: [ orange ]
tags: [ troubleshooting, java, protobuf, grpc ]
---

# protobuf编译报错找不到proto文件

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

<!--truncate-->

## 原因

对于存在import的proto文件, 需要确保其在同一个目录下这样生成出的路径才是正确的, 但是由于根目录并不是所有的文件都是我们关心的,
我们需要只导入特定的文件

## 解决方案

maven中可以通过`<includes>`来指定需要编译的文件
gradle中的解决方案如下, protobuf编译前将原始的`protobuf`文件拷贝到一个临时目录, 拷贝的时候只copy特定文件, 然后再编译

```kotlin
sourceSets {
	// make sure the protobuf files we specified are right
	val sourceProtobufPath = "${rootProject.rootDir}/api-contract/protobuf"
	val targetPath = "$buildDir/protobuf"
	copy {
		from(sourceProtobufPath) {
			include("nott/v1/nottd/*.proto")
			include("nott/v1/nottm/*.proto")
		}
		into(targetPath)
	}
	main {
		proto {
			srcDir(targetPath)
		}
	}
	test {
		proto {
			srcDir(targetPath)
		}
	}
}
```

## 备注

- [:generateProto fails with directory not found when importing other proto definitions](https://github.com/google/protobuf-gradle-plugin/issues/405)
