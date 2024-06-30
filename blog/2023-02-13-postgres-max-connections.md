---
authors: [ orange ]
tags: [postgresql]
---

# 修改`postgresql`中的最大连接数

`postgresql`默认连接数量有的时候可能会出现不够用的情况, 这时就需要修改`postgresql`的最大连接数

<!--truncate-->

## 解决方案

### 通过`ALTER SYSTEM`修改

```bash
ALTER SYSTEM SET max_connections = 1000;
```

## 备注

### 重置`max_connections`

```bash
ALTER SYSTEM RESET max_connections;
```

### 查看`max_connections`

```bash
SHOW max_connections;
```

## 参考

- [Query a parameter (postgresql.conf setting) like "max_connections"](https://stackoverflow.com/questions/8288823/query-a-parameter-postgresql-conf-setting-like-max-connections)
- [How to increase max_connection in the official PostgreSQL Docker image](https://stackoverflow.com/questions/47252026/how-to-increase-max-connection-in-the-official-postgresql-docker-image)
- [Tuning Postgres Max Connections](https://linuxhint.com/tuning-postgres-max-connections/)