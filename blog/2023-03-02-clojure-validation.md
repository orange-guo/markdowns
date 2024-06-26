---
authors: [ orange ]
tags: [clojure, kotlin, java, spring, validation]
---

# 基于`clojure`表达式实现更加灵活的数据验证

数据验证是一个非常常见的需求, 对于`java`项目来说, 目前`jakarta`的`bean validation`已经成为了java中的标准. <br/>
其自带了一些常见的数据验证注解, 例如`@NotNull`, `@NotEmpty`, `@Size`等.<br/>
这些注解如果遇到复杂的数据验证需求时, 就会显得力不从心. 所以需要一种更加灵活的数据验证方式.<br/>
为了满足这种需求, 我们可以通过`clojure`表达式来实现数据验证.<br/>
同时我们需要和现有的`bean validation`一起使用, 以便于满足现有的业务需求.<br/>

<!--truncate-->

## Why clojure

### 基于表达式

`clojure`是一个基于表达式的语言, 所以它的数据验证功能也是基于表达式的.<br/>
表达式的好处是, 它的表达能力非常强大, 通过表达式, 我们可以实现非常复杂的数据验证.<br/>
同时表达式的可读性也非常强, 通过表达式, 我们可以很容易的理解数据验证的逻辑.<br/>

### 数据处理

`clojure`是一个函数式语言(`functional programming`).<br/>
函数式语言的一个特点就是数据处理能力非常强大.<br/>
它抽象了数据的操作, 通过函数式的方式来处理数据.<br/>
对于`clojure`来说, 它提供了一些非常方便的数据操作函数, 例如

- `map`
- `filter`
- `reduce`
- `zipmap`
- `group-by`
- `partition`
- `sort-by`
- `sort-with`
- `take`
- `take-while`
- `drop`
- ...

### 基于`jvm`

`clojure`是基于`jvm`的, 所以它可以和`java`无缝集成.<br/>

## 实现

实现主要分以下几个部分

- `jakarta`扩展实现
- `clojure`表达式处理
- `springboot`集成

### `jakarta`扩展实现

#### 新增自定义注解`@ClojureExpressionConstraint`

因为`jakarta`的`bean validation`是基于注解的, 最终用户在使用时, 需要通过注解的方式来使用该功能.<br/>
所以我们也需要设计一个注解, 通过该注解来使用我们的数据验证功能.<br/>

代码如下:

```kotlin
/**
 * This is a validation annotation based on clojure expression to validate your data.
 *
 * Note:
 * 1. The expression only has one parameter, which is the value that will be validated.
 * The parameter is bound to the symbol "it". You can use "it" to refer to the value.
 * 2. The expression must return a boolean value.
 * Example:
 * Right expression: (> (count it) 5)
 * Bad expression: (count it)
 * 3. The size of the outer form must be 1.
 * If you want to use multiple expressions, you can use "and" or "or" to combine them.
 * Example:
 * The expression "(and (> (count it) 5) (= it (clojure.string/lower-case it)))" is right.
 * The expression "(> (count it) 5) (= it (clojure.string/lower-case it))" is wrong.
 *
 * Examples:
 * 1. The type of value is string. We validate the length of the string must be greater than 5.
 * (> (count it) 5)
 * 2. The type of value is collection. We validate the size of the collection must be greater than 5.
 * (> (count it) 5)
 * 3. The type of value is string. We validate the string must be a lower case string.
 * (= it (clojure.string/lower-case it))
 * 4. The type is javaBean, and it has a property named age. We validate the age must be greater than 0 and less than 100.
 * (let [age (:age it)] (and (> age 0) (< age 100)))
 *
 * @author Xiangcheng.Kuo
 * @see ClojureExpressionConstraintValidator
 */
@Repeatable
@Target(AnnotationTarget.PROPERTY, AnnotationTarget.FIELD)
@Retention(AnnotationRetention.RUNTIME)
@Constraint(validatedBy = [ClojureExpressionConstraintValidator::class])
annotation class ClojureExpressionConstraint(
	val message: String,
	val groups: Array<KClass<*>> = [],
	val payload: Array<KClass<out Payload>> = [],
	val value: String,
)
```

#### 新增`ClojureExpressionConstraintValidator`以实现注解的验证

对于自定义的注解的处理, 我们需要实现`ConstraintValidator`来进行验证.<br/>

代码如下:

```kotlin
/**
 * This is a validator for [ClojureExpressionConstraint] annotation.
 * It will evaluate the expression with the given value and return the boolean result as the validation result.
 *
 * @author Xiangcheng.Kuo
 * @see ClojureExpressionConstraint
 */
class ClojureExpressionConstraintValidator(
	private val evaluator: ClojureExpressionEvaluator
) : ConstraintValidator<ClojureExpressionConstraint, Any> {

	private lateinit var annotation: ClojureExpressionConstraint

	override fun initialize(constraintAnnotation: ClojureExpressionConstraint) {
		this.annotation = constraintAnnotation
	}

	override fun isValid(value: Any?, context: ConstraintValidatorContext): Boolean {
		return evaluator.evaluate(annotation.value, value) as Boolean
	}

}
```

### `clojure`表达式处理

#### 新增`ClojureExpressionEvaluator`以实现`clojure`表达式的处理

`ClojureExpressionEvaluator`抽象了`clojure`表达式的处理. 对于上层调用方来说不需要关心`clojure`表达式的处理细节,
只需要调用`evaluate`方法即可.<br/>
它的主要功能是根据给定的`clojure`表达式及输入进行处理并得出返回结果.<br/>
通过与`clojure`的互操作, 我们可以很方便的实现`clojure`表达式的解析.<br/>
以下是相关代码:

```kotlin
/**
 * An interface used to evaluate the clojure expression with the given param and return the result.
 *
 * @author Xiangcheng.Kuo
 */
interface ClojureExpressionEvaluator {

	fun evaluate(expression: String, param: Any?): Any?

}

/**
 * The default implementation of [ClojureExpressionEvaluator].
 *
 * @author Xiangcheng.Kuo
 * @see Class to refer to
 */
object DefaultClojureExpressionEvaluator : ClojureExpressionEvaluator {

	private val evalFun: IFn

	init {
		com.fastonetech.lib.clojure.require("com.fastonetech.lib.clojure.support.evaluation".toCljSymbol())
		evalFun = Clojure.`var`("com.fastonetech.lib.clojure.support.evaluation/evaluate-expression")
	}

	override fun evaluate(expression: String, param: Any?): Any? =
		evalFun(expression, param.toCljValue())

}
```

#### 新增evaluation.clj来实现最终的`clojure`表达式的解析处理

`evaluation.clj`是一个`clojure`的文件, 用于实现`clojure`表达式的解析.<br/>
以下是相关代码:

```clojure
(ns com.fastonetech.lib.clojure.support.evaluation
  (:require [clojure.java.data :as data]))

; We need to convert the list to vector to avoid the evaluator think the list is a function call.
; For example, if we have a list like (1 2 3), the evaluator will think it is a function call.
; So we need to convert it to [1 2 3] to avoid this problem.
(defn as-available-form [form]
  (if (seq? form) (into [] form) form))

(defn object-to-map [object]
  (data/from-java-deep object {:add-class false}))

(defn object-to-form [^Object object]
  (clojure.walk/postwalk as-available-form (object-to-map object)))

(defn build-form [value-form expression-form]
  (list `let ['it value-form] expression-form))

(defn expression-as-form [^String expression]
  (read-string expression))

(defn evaluate-expression [^String expression ^Object param]
  (let [value-form (object-to-form param)
        expression-form (expression-as-form expression)
        form (build-form value-form expression-form)]
    (println "Expression form: " form)
    (let [result (eval form)]
      (println "Result: " result)
      result)))
```

### `springboot`集成

该部分主要是将上面的代码集成到`springboot`中.<br/>
主要是将`ClojureExpressionConstraintValidator`添加到容器中这样`springboot`就可以自动的对注解进行验证了.<br/>

#### ClojureExpressionValidationAutoConfiguration

```kotlin
@AutoConfiguration
class ClojureExpressionValidationAutoConfiguration {

	@Bean
	@ConditionalOnMissingBean
	fun clojureExpressionConstraintValidator(evaluator: ClojureExpressionEvaluator): ClojureExpressionConstraintValidator =
		ClojureExpressionConstraintValidator(
			evaluator = evaluator
		)

	@Bean
	@ConditionalOnMissingBean
	fun clojureExpressionEvaluator(): ClojureExpressionEvaluator =
		DefaultClojureExpressionEvaluator

}
```

#### 配置`META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports`

在springboot3中, 我们需要在`META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports`
中添加需要自动配置的类.<br/>
旧的版本是`spring.factories`, 但是在springboot3中已经不能继续使用了.<br/>

```kotlin
com.fastonetech.lib.validation.spring.autoconfigure.ClojureExpressionValidationAutoConfiguration
```

## 总结

我们可以看到, 通过`clojure`的互操作, 我们可以很方便的实现`clojure`表达式的解析.<br/>
这样我们就可以在`springboot`中使用`clojure`表达式来进行验证了.<br/>
但是目前的实现还有很多不足, 主要如下

- 没有对`clojure`表达式进行缓存, 对于同一个表达式的多次验证会重复解析<br/>
- `clojure`表达式内只能访问`clojure.core`命名空间的内容, 不能访问其他命名空间的内容<br/>

这些都是可以优化的地方, 但是目前还没有时间去做.<br/>

## 遇到的问题

### 自定义注解没有被识别

#### 原因

这个问题的主要原因在定义注解是指定了`@Target`注解中的`AnnotationTarget.PROPERTY`造成的

反编译后的`java`代码如下

```java

@Metadata(
		mv = {1, 8, 0},
		k = 1,
		d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\b\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b\u0086\b\u0018\u00002\u00020\u0001B\r\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0002\u0010\u0004J\t\u0010\t\u001a\u00020\u0003HÆ\u0003J\u0013\u0010\n\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u000b\u001a\u00020\f2\b\u0010\r\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u000e\u001a\u00020\u000fHÖ\u0001J\t\u0010\u0010\u001a\u00020\u0003HÖ\u0001R\u001c\u0010\u0002\u001a\u00020\u00038\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\b\u0005\u0010\u0006\u001a\u0004\b\u0007\u0010\b¨\u0006\u0011"},
		d2 = {"Lcom/fastonetech/lib/validation/clojure/PatchUser;", "", "username", "", "(Ljava/lang/String;)V", "getUsername$annotations", "()V", "getUsername", "()Ljava/lang/String;", "component1", "copy", "equals", "", "other", "hashCode", "", "toString", "fastone-web-spring-boot-starter"}
)
public final class PatchUser {

	@NotNull
	private final String username;

	/** @deprecated */
	// $FF: synthetic method
	@ClojureExpressionConstraint(
			message = "the username must be a string and the length must be greater than 5",
			value = "(and (string? it) (> (count it) 5))"
	)
	public static void getUsername$annotations() {
	}

	@NotNull
	public final String getUsername() {
		return this.username;
	}

	public PatchUser(@NotNull String username) {
		Intrinsics.checkNotNullParameter(username, "username");
		super();
		this.username = username;
	}

	@NotNull
	public final String component1() {
		return this.username;
	}

	@NotNull
	public final PatchUser copy(@NotNull String username) {
		Intrinsics.checkNotNullParameter(username, "username");
		return new PatchUser(username);
	}

	// $FF: synthetic method
	public static PatchUser copy$default(PatchUser var0, String var1, int var2, Object var3) {
		if ((var2 & 1) != 0) {
			var1 = var0.username;
		}

		return var0.copy(var1);
	}

	@NotNull
	public String toString() {
		return "PatchUser(username=" + this.username + ")";
	}

	public int hashCode() {
		String var10000 = this.username;
		return var10000 != null ? var10000.hashCode() : 0;
	}

	public boolean equals(@Nullable Object var1) {
		if (this != var1) {
			if (var1 instanceof PatchUser) {
				PatchUser var2 = (PatchUser) var1;
				if (Intrinsics.areEqual(this.username, var2.username)) {
					return true;
				}
			}

			return false;
		} else {
			return true;
		}
	}

}
```

可以看到注解最终并没有在`getUsername`方法上, 而是在`getUsername$annotations`方法上.<br/>
我之前以为`AnnotationTarget.PROPERTY`是会将注解应用到`get`和`set`方法上, 但是实际上并不是这样.<br/>

#### 解决方案

是将`@Target`注解中的`AnnotationTarget.PROPERTY`去掉.<br/>

解决后反编译的`java`代码如下

```java
package com.fastonetech.lib.validation.clojure;

import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

@Metadata(
		mv = {1, 8, 0},
		k = 1,
		d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b\u0086\b\u0018\u00002\u00020\u0001B\r\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0002\u0010\u0004J\t\u0010\u0007\u001a\u00020\u0003HÆ\u0003J\u0013\u0010\b\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\t\u001a\u00020\n2\b\u0010\u000b\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\f\u001a\u00020\rHÖ\u0001J\t\u0010\u000e\u001a\u00020\u0003HÖ\u0001R\u0016\u0010\u0002\u001a\u00020\u00038\u0006X\u0087\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0005\u0010\u0006¨\u0006\u000f"},
		d2 = {"Lcom/fastonetech/lib/validation/clojure/PatchUser;", "", "username", "", "(Ljava/lang/String;)V", "getUsername", "()Ljava/lang/String;", "component1", "copy", "equals", "", "other", "hashCode", "", "toString", "fastone-web-spring-boot-starter"}
)
public final class PatchUser {

	@ClojureExpressionConstraint(
			message = "the username must be a string and the length must be greater than 5",
			value = "(and (string? it) (> (count it) 5))"
	)
	@NotNull
	private final String username;

	@NotNull
	public final String getUsername() {
		return this.username;
	}

	public PatchUser(@NotNull String username) {
		Intrinsics.checkNotNullParameter(username, "username");
		super();
		this.username = username;
	}

	@NotNull
	public final String component1() {
		return this.username;
	}

	@NotNull
	public final PatchUser copy(@NotNull String username) {
		Intrinsics.checkNotNullParameter(username, "username");
		return new PatchUser(username);
	}

	// $FF: synthetic method
	public static PatchUser copy$default(PatchUser var0, String var1, int var2, Object var3) {
		if ((var2 & 1) != 0) {
			var1 = var0.username;
		}

		return var0.copy(var1);
	}

	@NotNull
	public String toString() {
		return "PatchUser(username=" + this.username + ")";
	}

	public int hashCode() {
		String var10000 = this.username;
		return var10000 != null ? var10000.hashCode() : 0;
	}

	public boolean equals(@Nullable Object var1) {
		if (this != var1) {
			if (var1 instanceof PatchUser) {
				PatchUser var2 = (PatchUser) var1;
				if (Intrinsics.areEqual(this.username, var2.username)) {
					return true;
				}
			}

			return false;
		} else {
			return true;
		}
	}

}

```

这次注解在`username`字段上了.<br/>

### `clojure`中的`eval`函数所需的`form`中不能依赖外部的变量

当执行如下代码时

```clojure
(defn eval-example []
  (let [x 10]
    (eval `(+ x 20))))
(eval-example)
```

会报错以下信息

```log
Syntax error compiling at (/tmp/form-init13157191612884728008.clj:1:1).
No such var: user/x
```

#### 原因

这个问题的原因是`eval`函数所需的`form`中不能依赖外部的变量, 要么被依赖的变量是全局
从报错可以看到它尝试从`user`这个命名空间中找`x`这个变量, 但是并没有找到.<br/>
而我们的命名空间不是`user`所以会报错.<br/>
这个问题的本质原因是因为`eval`函数内部执行的代码和外部的代码是不同的命名空间, 所以不能依赖调用外部调用`eval`
函数的函数的局部变量.<br/>

需要在`form`中重新`binding`或者变量

#### 解决方案

在需要`eval`的`form`中重新`binding`变量

### `clojure`中的`eval`函数所需的`form`中`binding`了自定义对象当执行时会报错

报错如下

```log
embed object in code, maybe print-dup not defined: Person(age=30)
```

#### 原因

由于`eval`需要将表达式转换为`clojure`数据结构, 然后在运行时解释和执行这个表达式.<br/>
在将表达式转换为`clojure`数据结构的过程中, `clojure`需要使用`print-dup`函数将表达式中的所有对象转换为字符串,
以便后续可以通过`read`函数将这些字符串还原为Clojure数据结构.<br/>
因此, 当使用`eval`函数执行表达式时，如果表达式中包含无法序列化为字符串的对象，就会出现上述错误.<br/>
而当不使用`eval`函数，而是直接使用这个对象时，由于`clojure`不需要将它转换为字符串，所以就不会出现上述错误.<br/>
综上所述, `eval`函数所需的`form`中`binding`了自定义对象当执行时会报错.<br/>

#### 解决方案

将自定义对象转换为`clojure`的内置数据结构从而避免这个问题.<br/>
通过`clojure.java.data`中的函数`from-java-deep`进行转换<br/>
转换后的数据结构如果是`list`还需要转为`vec`, 这是因为`clojure`中的`list`代表了函数调用, 而`vec`代表了数据结构,
所以需要转换为`vec`.<br/>
可以通过`clojure.walk/postwalk`函数进行递归转换.<br/>

## 备注

### `clojure`中的`eval`函数

`eval`函数是将给定的`form`编译执行, 返回执行结果.<br/>

### `clojure`中的`form`

`form`是`clojure`中的表达式, 也就是`clojure`中的代码.<br/>
例如:

```clojure
(+ 1 2)
```

### `clojure`中的`binding`

`binding`是将变量绑定到一个值, 使得在`binding`的作用域内, 变量的值为绑定的值.<br/>

### `clojure`中的全局变量

`clojure`中的全局变量是指在`clojure`的命名空间中的变量.<br/>
例如:

```clojure
(def x 10)
```

这个`x`就是全局变量.<br/>

局部变量是指在函数中定义的变量.<br/>
例如:

```clojure
(defn test []
  (let [x 10] x))
```

## 参考

- [Annotation use-site targets](https://kotlinlang.org/docs/annotations.html#annotation-use-site-targets)
- [Spring MVC Custom Validation](https://www.baeldung.com/spring-mvc-custom-validator)
- [Evaluation](https://clojure.org/reference/evaluation)
- [Variable scope + eval in Clojure](https://stackoverflow.com/questions/6221716/variable-scope-eval-in-clojure)
- [Modifying expressions at runtime](https://stackoverflow.com/questions/23039818/modifying-expressions-at-runtime)
- [clojure and ^:dynamic](https://stackoverflow.com/questions/11730828/clojure-and-dynamic)
- [convert Java objects to Clojure types](https://stackoverflow.com/questions/64075760/convert-java-objects-to-clojure-types)
- [Access Java fields dynamically in Clojure?](https://stackoverflow.com/questions/6630432/access-java-fields-dynamically-in-clojure)
- [Clojure入门教程](https://wizardforcel.gitbooks.io/clojure-fpftj/content/index.html)