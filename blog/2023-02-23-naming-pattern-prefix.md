---
authors: [ orange ]
tags: [naming]
---

# 常见的命名前缀

在编程中, 命名是一件非常重要的事情, 好的命名能够让代码更加易读, 也能够让代码更加易于维护.<br/>
通常我们在阅读第三方库的代码时, 会发现很多方法的命名都是以一些固定的命名前缀开头的.<br/>
本文主要总结目前我所了解的一些常见的命名前缀的含义. 并对其进行分类, 大致的分类主要如下.<br/>

- 对象的创建
- 对象的属性和状态
- 对象的元素操作
- 其他

对于每种命名规则, 我都会给出自定义的例子, 同时也会附带第三方库中的现有案例以便于更好的理解.<br/>
代码以`kotlin`实现, 但是大部分的命名规则都是通用的, 也适用于其他的语言.<br/>

<!--truncate-->

## 对象创建

这些命名前缀用于表示对象的创建

### new

创建新的对象实例, 该方法通常是一个静态方法, 用于创建一个新的对象实例.<br/>

#### 案例

- 声明静态方法`newAccount`用于创建一个新的`Account`对象实例

```kotlin
class Account(
	val name: String,
	val createdAt: ZonedDateTime,
) {

	companion object {

		fun newAccount(name: String, createdAt: ZonedDateTime): Account =
			TODO("DO SOMETHING")

	}

}
```

#### 现有案例

- `com.google.common.collect.Lists#newArrayList`

### valueOf

该方法通常用于将基本类型值转换为相应的包装类对象, 一般适用于底层库中.<br/>
该方法在业务代码中的使用场景并不多, 但是在底层库中, 该方法的使用场景还是比较多的.<br/>

#### 现有案例

- `java.lang.Integer#valueOf`

### getInstance

该方法通常用于获取单例对象.<br/>
在`kotlin`中, 通常使用`companion object`来声明单例对象

#### 案例

- 通过声明`getInstance`方法来获取单例对象

```kotlin
class AccountService {

	companion object {

		fun getInstance(): AccountService =
			TODO("DO SOMETHING")

	}

}
```

#### 现有案例

- `org.springframework.cloud.openfeign.FeignContext#getInstance`

### create

该方法通常用于创建新的对象实例, 但是它与`new`方法的区别在于, 它通常用于工厂方法模式中.<br/>

#### 案例

- 通过`SessionRepositoryFactory`中声明的各种`create`方法来创建不同的`SessionRepository`对象

```kotlin
interface SessionRepository {

	fun getSession(requestId: String): Session

}

interface SessionRepositoryFactory {

	fun createInMemorySessionRepository(): SessionRepository

	fun createDatabaseSessionRepository(): SessionRepository

}
```

#### 现有案例

- `org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory#createBean`

### from

该方法通常用于将对象从一种类型转换为另一种类型.<br/>

#### 案例

- 通过`Account`中声明的`fromDto`和`fromEntity`方法来将`AccountDto`和`AccountEntity`转换为`Account`对象

```kotlin
class Account {

	companion object {


		fun fromDto(dto: AccountDto): Account =
			TODO("DO SOMETHING")

		fun fromEntity(entity: AccountEntity): Account =
			TODO("DO SOMETHING")

	}

}
```

#### 现有案例

- `java.time.ZonedDateTime#from`
- `io.vavr.control.Validation#fromEither`

### copy

该方法用于复制对象, 返回新的副本.<br/>
在`kotlin`中`copy`是`data class`自带的方法, 该方法用于复制一个不可变对象.<br/>

#### 案例

- `kotlin`中的`copy`方法

```kotlin
data class Person(val name: String, val age: Int)

val person = Person("Tom", 18)
val copiedPerson = person.copy(age = 20)
```

#### 现有案例

- `java.lang.String#copyValueOf`

### clone

该方法用于复制对象, 返回新的副本.<br/>
在`java`中, `clone`是`Object`类中的方法, 该方法用于复制一个对象.<br/>
`copy`和`clone`之间的区别在于, `copy`方法是对一个不可变对象的复制, 而`clone`方法则没有这个限制.<br/>

#### 现有案例

- `java.lang.Object#clone`

#### 案例

- `java`中的`clone`方法

```java
public class Person implements Cloneable {

	private String name;

	private int age;

	@Override
	public Person clone() {
		try {
			return (Person) super.clone();
		} catch (CloneNotSupportedException e) {
			throw new AssertionError();
		}
	}

}
```

### with

该方法通常用于复制对象并修改其特定属性.<br/>
一般被复制的对象为不可变对象.<br/>
和copy的区别在于, 调用copy时, 可以选择性的修改对象的某些属性,
而调用with时, 通常是修改对象的单个属性.<br/>

它们之间的区别类似于函数式编程中`curring`和`partial apply`的区别.<br/>
主要相似点在于, 参数传入的数量不同, 另外返回的都是一个新的对象/函数.<br/>

`curring`: 每次只能传入一个参数, 返回一个函数, 该函数接收剩余的参数.<br/>
`partial apply`: 每次可以传入多个参数, 返回一个函数, 该函数接收剩余的参数.<br/>

在`lombok`中, 通过`@With`注解来实现`with`方法.<br/>

#### 案例

- 通过`with`方法修改特定属性

```kotlin
val person = Person()
person.withName("John").withAge(30)
```

#### 现有案例

- `io.vavr.collection.BitSet#withBytes`

### parse

该方法通常用于将字符串解析为对象.<br/>

#### 案例

- 将字符串解析为`Date`对象

```kotlin
val date = Date.parse("2020-01-01")
```

#### 现有案例

- `java.time.ZonedDateTime#parse`

### of

该方法通常用于将多个参数组合为一个对象.<br/>

#### 案例

- 将多个参数组合为一个对象

```kotlin
val list = List.of(1, 2, 3)
```

#### 现有案例

- `java.time.ZonedDateTime#of`

## 属性和状态

这些命名前缀用于表示对象的属性和状态

### get

该方法通常用于获取对象的属性.<br/>

#### 案例

- 获取用户的姓名

```kotlin
person.getName()
```

#### 现有案例

- `org.springframework.boot.configurationprocessor.json.JSONObject#getString`

### set or put

该方法通常用于设置对象的属性.<br/>

#### 案例

- 修改用户的姓名

```kotlin
person.setName(name = "Jack")
```

#### 现有案例

- `org.springframework.boot.configurationprocessor.json.JSONObject#put`

### is

该方法通常用于判断对象的状态.<br/>

#### 案例

- 判断用户是否成年

```kotlin
person.isAdult()
```

#### 现有案例

- `org.springframework.boot.configurationprocessor.json.JSONObject#isNull`

## 对象的元素操作

这些命名前缀用于表示含有一些元素的对象的操作, 通常在具有一对多的关系的对象中比较常见<br/>

### has

该方法通常用于判断对象是否包含某个元素.<br/>

#### 案例

- 判断用户是否具有`ADMIN`角色

#### 现有案例

- `org.springframework.boot.configurationprocessor.json.JSONObject#has`

```kotlin
user.hasRole(role = "ADMIN")
```

### add

该方法通常用于向对象中添加元素.<br/>

#### 案例

- 为用户授予`ADMIN`角色

```kotlin
user.addRole(role = "ADMIN")
```

#### 现有案例

- `java.util.List#add`

### remove

该方法通常用于从对象中移除元素.<br/>

#### 案例

- 为用户移除`ADMIN`角色

```kotlin
user.removeRole(role = "ADMIN")
```

#### 现有案例

- `java.util.List#remove`

## 其他

这些命名前缀没有特定的含义, 但是在一些特定的场景中, 会有特定的含义.<br/>

### to

该方法通常用于将对象转换为另一种类型.<br/>

#### 案例

- 将`Account`转换为`AccountDto`

```kotlin
account.toDto()
```

- 将`Account`转换为`AccountEntity`

```kotlin
account.toEntity()
```

#### 现有案例

- `org.springframework.boot.configurationprocessor.json.JSONObject#toJSONArray`
- `java.time.ZonedDateTime#toLocalDateTime`

### do

该方法通常用于执行某个操作.<br/>
该方法在`spring`中比较常见, 通常表示在执行完某些前置工作, 例如输入验证, 然后开始执行真正的操作.<br/>

#### 案例

- `org.springframework:spring-beans`中`AbstractBeanFactory`的`doGetBean`方法

```java
public abstract class AbstractBeanFactory extends FactoryBeanRegistrySupport implements ConfigurableBeanFactory {

	protected <T> T doGetBean(
		String name, @Nullable Class<T> requiredType, @Nullable Object[] args, boolean typeCheckOnly)
		throws BeansException {

	}

}
```

- `org.springframework:spring-webmvc`中`DispatcherServlet`的`doDispatch`方法

```java
public class DispatcherServlet extends FrameworkServlet {

	@Override
	protected void doDispatch(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// DO SOMETHING
	}

}
```

- `org.springframework:spring-jdbc`中`AbstractPlatformTransactionManager`的`doBegin`方法

```java
public abstract class AbstractPlatformTransactionManager implements PlatformTransactionManager {

	protected void doBegin(Object transaction, TransactionDefinition definition) {
		// DO SOMETHING
	}

}
```

## 参考

- [Effective Java第一章中关于静态工厂的命名习惯](https://github.com/clxering/Effective-Java-3rd-edition-Chinese-English-bilingual/blob/dev/Chapter-2/Chapter-2-Item-1-Consider-static-factory-methods-instead-of-constructors.md)
- [ORACLE Naming Conventions](https://www.oracle.com/java/technologies/javase/codeconventions-namingconventions.html)
- [Naming Conventions in Java](https://www.geeksforgeeks.org/java-naming-conventions/)