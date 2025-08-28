---
authors: [ orange ]
tags: [ troubleshooting, guacamole, guacamole-server, guacd, ssh, linux, terminal, c, pthread, pthread_key ]
---

# 解决`Apache Guacamole`中SSH连接数量超过60个以后无法建立新连接的问题

## 问题描述

在使用 `Apache Guacamole` 建立大量并发 SSH 连接时，当连接数超过60个，新的 SSH 连接将无法建立。
`guacd` 服务的日志会输出以下关键错误。

```log
guacd[1]: INFO: Creating new client for protocol "ssh"
guacd[1]: INFO: Connection ID is "$9ab9b061-a1ae-4a18-b56a-83202fa22b5c"
guacd[3882]: INFO:      User "@fc5e98ea-74ab-49c9-9b06-c3206469cab0" joined connection "$9ab9b061-a1ae-4a18-b56a-83202fa22b5c" (1 users now present)
GLib (gthread-posix.c): Unexpected error from C library during 'pthread_key_create': Resource temporarily unavailable.  Aborting.
guacd[3882]: ERROR:     SSH handshake failed.
guacd[3882]: INFO:      User "@fc5e98ea-74ab-49c9-9b06-c3206469cab0" disconnected (0 users remain)
guacd[3882]: INFO:      Last user of connection "$9ab9b061-a1ae-4a18-b56a-83202fa22b5c" disconnected
guacd[1]: INFO: Connection "$9ab9b061-a1ae-4a18-b56a-83202fa22b5c" removed.
```

<!--truncate-->

## 问题分析

错误日志中的核心信息 `pthread_key_create': Resource temporarily unavailable` 指向了问题的根源：guacd 进程耗尽了系统为其分配的
pthread_key_t 资源。

glibc 对每个进程可创建的 pthread_key_t 数量设有上限，这个上限值通常是 1024。

```bash
getconf PTHREAD_KEYS_MAX # 1024
```

## 解决方案

由于 PTHREAD_KEYS_MAX 的限制硬编码于 glibc 源码中，我们无法通过修改系统配置来调整此上限。

为了绕过这一限制，决定放弃 pthread_key，转而实现一套自定义的、更高效的线程本地存储（Thread-Local Storage, TLS）机制。

**混合存储策略：**

- 直接 __thread 存储：对于错误处理等频繁访问的简单场景，直接使用 __thread 关键字声明线程本地变量，以获得极致性能。
- 基于哈希表的存储：对于需要支持析构函数、动态 key 分配的复杂场景，实现了一个线程安全的哈希表作为后端。

**兼容的 API 接口：**

为了最小化对现有代码库的侵入性，新实现的 API 在函数签名上与原有的 pthread 函数高度兼容，便于平滑迁移。

```c
#include <pthread.h>

int pthread_key_create(pthread_key_t *key, typeof(void (void *)) *destr_function;
int pthread_key_delete(pthread_key_t key);
int pthread_setspecific(pthread_key_t key, const void *pointer);
void * pthread_getspecific(pthread_key_t key);
```

## 代码实现

### 线程本地存储API (thread-local.h)

```c
typedef uintptr_t guac_thread_local_key_t;
typedef void (*guac_thread_local_destructor_t)(void*);

int guac_thread_local_key_create(guac_thread_local_key_t* key, guac_thread_local_destructor_t destructor);
int guac_thread_local_key_delete(guac_thread_local_key_t key);
int guac_thread_local_setspecific(guac_thread_local_key_t key, const void* value);
void* guac_thread_local_getspecific(guac_thread_local_key_t key);
```

### 2.2 哈希表实现 (thread-local.c)

- 最大支持 1024 个 key（可配置）
- 使用 __thread 关键字提供更好的性能
- 全局 key 注册表，支持析构函数
- 线程安全，使用 mutex 保护共享数据结构

```c
#define MAX_THREAD_KEYS 1024

typedef struct guac_thread_storage {
    void* values[MAX_THREAD_KEYS];
} guac_thread_storage_t;

static __thread guac_thread_storage_t* thread_storage = NULL;
```

### 2.3 错误处理优化 (error.c)

将错误处理从 pthread key 改为直接使用 __thread 存储，获得最佳性能：

```c
static __thread guac_status __guac_error_storage;
static __thread const char* __guac_error_message_storage = NULL;

guac_status* __guac_error() {
    return &__guac_error_storage;
}

const char** __guac_error_message() {
    return &__guac_error_message_storage;
}
```

## 效果验证

在应用上述代码修改并重新编译 guacd 后，进行了压力测试。通过以下脚本模拟了 300 个并发连接请求：

```bash
for i in $(seq 1 300); do
  firefox --new-tab 'https://localhost:8443/#/client/MQBjAHBvc3RncmVzcWw' &
  sleep 0.1s
done
```

测试结果表明，新实现可以稳定处理超过 300 个并发连接，未出现任何连接失败的情况，问题得到解决。

## 构建与环境配置

以下是在 Arch Linux 环境下编译和运行此解决方案的参考步骤。

1. 依赖安装

```bash
# 安装测试框架依赖
yay -S --noconfirm --needed cunit

# 安装 SSH 相关依赖
yay -S --noconfirm --needed libssh2 openssl pango
```

2. 项目配置

```bash
autoreconf -fiv
./configure 'CPPFLAGS=-Wno-error=deprecated-declarations'
```

3. 代码编译

```bash
make -j12
```

4. 运行产物

```bash
export LD_LIBRARY_PATH=/usr/local/lib && ./src/guacd/guacd -b 0.0.0.0 -f -L debug
```

## 相关资源

- [Guacamole](https://guacamole.apache.org/)
- [Guacamole Issue](https://issues.apache.org/jira/browse/GUACAMOLE-2124)
- [Github Pull Request](https://github.com/apache/guacamole-server/pull/614)
- [man pthread key create](https://man7.org/linux/man-pages/man3/pthread_key_create.3.html)