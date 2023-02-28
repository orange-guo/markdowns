---
authors: [xiangcheng.kuo]
tags: [postgresql]
---

# 将`postgresql`中指定的`database`导出为`sql`文件

在使用`postgresql`时, 有时候需要将`database`导出为`sql`文件, 以便于在其他环境中使用.

<!--truncate-->

## 解决方案

```bash
pg_dump --column-inserts --data-only --table=<table> <database>
```

该命令会将`<database>`中的`<table>`导出为`sql`文件

### 参考

- [Using pg_dump to only get insert statements from one table within database](https://stackoverflow.com/questions/2857989/using-pg-dump-to-only-get-insert-statements-from-one-table-within-database)
- [Dump Your PostgreSQL Database](https://www.netguru.com/blog/how-to-dump-and-restore-postgresql-database)
