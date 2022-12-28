# Library

## junit5中使用@Ignore不生效

使用@Disable

## slf4j缺少StaticLoggerBinder

### 原因

缺少底层对接的Log库, 否则无法输出日志

### 解决方案

添加org.slf4j:slf4j-simple:1.7.29依赖

### 备注

- slf4j-simple 输出到控制台
- slf4j-log4j 若添加该库, 还需要配置log4j的配置文件, 比较麻烦
- slf4j-nop 该库no operation 不输出日志