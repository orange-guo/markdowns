# PostgreSQL

## max_connections

### 查看

```bash
SHOW max_connections;
```

### 重置

```bash
RESET max_connections

```

### 修改

```bash
ALTER SYSTEM SET max_connections = 500;
```

容器模式下将对应`sql`文件映射到`/docker-entrypoint-initdb.d/`

### Reference

- [Query a parameter (postgresql.conf setting) like "max_connections"](https://stackoverflow.com/questions/8288823/query-a-parameter-postgresql-conf-setting-like-max-connections)
- [How to increase max_connection in the official PostgreSQL Docker image](https://stackoverflow.com/questions/47252026/how-to-increase-max-connection-in-the-official-postgresql-docker-image)
- [Tuning Postgres Max Connections](https://linuxhint.com/tuning-postgres-max-connections/)

## pg_dump

### dump出insert语句

```bash
pg_dump --column-inserts --data-only --table=<table> <database>
```

### Reference

- [Using pg_dump to only get insert statements from one table within database](https://stackoverflow.com/questions/2857989/using-pg-dump-to-only-get-insert-statements-from-one-table-within-database)
- [Dump Your PostgreSQL Database](https://www.netguru.com/blog/how-to-dump-and-restore-postgresql-database)
