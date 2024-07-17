---
authors: [ orange ]
tags: [ problem-solving, java, spring-boot, spring-boot-configuration-properties ]
---

# spring-boot项目中yml配置文件对duration配置在不给定单位的情况下默认为毫秒

如果在`application.yml`中配置duration值时不给定单位的话, 那么解析出的单位为毫秒, 如果需要自定义单位的话需要提供`@DurationUnit`, 

建议配置Duration单位, 强制指定单位确保行为符合期望

## 内部调用栈

- `BindConverter`
- `List<ConversionService> delegates`
- `List<Converter> converters`
- `StringToDurationConverter (SpringBoot)`
- `NumberToDurationConverter (SpringBoot) 此处会根据注解去判断单位`
- `DurationStyle.SIMPLE.parse`