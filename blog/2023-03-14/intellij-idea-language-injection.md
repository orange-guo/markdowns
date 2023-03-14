---
authors: [xiangcheng.kuo]
tags: [intellij-idea]
---

# `IntelliJ IDEA`中实现自定义注解中的语法高亮

这篇文章是[基于`clojure`表达式实现更加灵活的数据验证](../2023-03-02-clojure-validation.md)的后续优化的文章.<br/>
主要目的是为了实现在`IntelliJ IDEA`中实现自定义注解中`clojure`表达式的语法高亮问题.<br/>
通过语法高亮, 可以更加直观的看到表达式的结构, 以及表达式中的错误. 从而更加便捷地实现表达式的编写.<br/>

<!--truncate-->

## 要求

`IntelliJ IDEA`中需要安装以下插件

- `cursive`(此插件是`clojure`语言的支持插件, 并且支持`clojure`表达式的语法高亮.)
- `IntelliLang`(`Make sure that the IntelliLang plugin is enabled before you start working with language injections.`)

## 解决方案

代码中增加`@Language`注解, 如下所示

```kotlin title="ClojureExpressionConstraint.kt"
annotation class ClojureExpressionConstraint(
	val message: String,
	val groups: Array<KClass<*>> = [],
	val payload: Array<KClass<out Payload>> = [],
	@Language("clojure") // to enable syntax highlighting
	val value: String,
)
```

## 效果展示

实现后的效果如下图所示

![idea-clojure-syntax-highlighting](./intellij-idea-language-injection.jpeg)

可以看到, 当鼠标悬浮到表达式引用的地方时, 会有相应的提示信息.<br/>

## 参考

- [Language injections](https://www.jetbrains.com/help/idea/using-language-injections.html)