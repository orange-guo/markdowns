# Java

## SwitchCase里每一个Case都要记得break不然可能会出现意想不到的错

## compareTo方法并不是总返回-1

### 原因

根据compareTo返回值是否为-1来错误地判断是否是小的

```
(take-while #(= -1 (compare (parse-iso-date %) (parse-iso-date end-date))))
```

### 解决方案

需要根据comparseTo方法返回的值是否小于0来判断

```
(take-while #(< 0 (compare (parse-iso-date %) (parse-iso-date end-date))))
```

## Future如果实例化不提供ThreadPool将使用Jdk内部的ThreadPool可能会产生资源竞争获取不到Thread

### 现象

如果在Jdk内部的ThreadPool的没有空余的Thread那么Future将获取不到资源从而引发超时