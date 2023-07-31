# "Simple Made Easy" - Rich Hickey (2011)

> 此文章为`Rich Hickey`在2011年`Strange Loop`大会上的演讲的演讲的笔记, 主要讲述了`Simple`和`Easy`
> 的区别，以及如何在软件开发中做到`Simple`.<br/>
> 演讲的视频地址: ["Simple Made Easy" - Rich Hickey (2011)](https://www.youtube.com/watch?v=LKtk3HCgTa8&t=14s)

## Simple And Easy

### Simple

`Simple`的定义是`不复杂(not complex)`, 没有多余的部分或关系. <br/>

### Easy

`Easy`的定义是接近`near`, 即符合我们的经验, 知识, 能力, 或偏好. <br/>

### Simple和Easy的区别

`Simple`和`Easy`是两个不同的维度, 他们之间没有必然的联系. <br/>
一个事物可以同时是`Simple`和`Easy`, 也可以是`Simple`但不是`Easy`, 也可以是`Easy`但不是`Simple`. <br/>

例如: <br/>

- 对于一个熟练掌握`Java`程序员来说, `Java`是`Easy`的, 但不是`Simple`的(因为语言里设计到很多抽象的概念).
- 对于一个不熟悉`Java`的程序员来说, `Java`既不是`Easy`的, 也不是`Simple`的.

## 复杂性(Complexity)

### 复杂性导致的问题

复杂性是软件开发中的主要障碍, 它会导致如下问题:

- `低效(inefficiency)`
- `错误(error)`
- `不可靠(unreliability)`
- `不可维护(unmaintainability)`
- `不可扩展(unscalability)`
- `不可重用(unreusability)`

### 复杂性的表现形式

复杂性有以下几种表现形式:

- `混乱(conjoined)`
  <br/>定义: 多个不相关或不必要的事物在一起, 使它们难以分开或区分.
  <br/>案例: 订单(Order)的`创建`、`支付`、`发货`、`评价`等功能都放在一个类或一个方法里，就会造成混乱的复杂性.

```java
public class OrderService {

	public void create();

	public void pay();

	public void deliver();

	public void evaluate();

}
```

- `缠绕(entangled）`
  <br/>定义: 多个相关或必要的事物彼此交织或依赖, 使它们难以独立或修改.
  <br/>案例: 用户(Use)的`基本信息`, `权限`, `角色`, `积分`等属性和行为都耦合在一起，就会造成缠绕的复杂性.

```java
public class User {

	private String name;

	private String password;

	private String email;

	private String phone;

	private String address;

	private List<String> roles;

	private List<String> permissions;

	private int points;

	public void login() {
		// ...
	}

	public void logout() {
		// ...
	}

	public void register() {
		// ...
	}

	public void changePassword() {
		// ...
	}

	public void changeEmail() {
		// ...
	}

	public void changePhone() {
		// ...
	}

	public void changeAddress() {
		// ...
	}

	public void changeRoles() {
		// ...
	}

	public void changePermissions() {
		// ...
	}

	public void changePoints() {
		// ...
	}

}
```

- `重叠(overlapping)`
  <br/>定义: 多个相似或重复的事物存在于同一个范围或层次，使它们难以区分或管理.
  <br/>案例: 商品(Product)的名称, 价格, 库存, 描述, 图片, 分类, 标签等属性和方法都定义在同一个类或同一个层次上，就会造成重叠的复杂性.

```java
public class Product {

	private String name;

	private BigDecimal price;

	private int stock;

	private String description;

	private String image;

	private String category;

	private List<String> tags;

	public void create() {
		// ...
	}

	public void update() {
		// ...
	}

	public void delete() {
		// ...
	}

	public void get() {
		// ...
	}

	public void list() {
		// ...
	}

	public void search() {
		// ...
	}

}
```

- `模糊(ambiguous)`
  <br/>定义：多个不明确或不确定的事物表达或使用，使它们难以理解或预测.
  <br/>案例: 一个日期(Date)的格式、时区、语言等参数都没有明确指定或使用默认值，就会造成模糊的复杂性.

```java
public class Date {

	public void format() {
		// ...
	}

	public void parse() {
		// ...
	}

}
```

- `隐晦(opaque)`
  <br/>定义: 多个难以观察或检测的事物隐藏或封装，使它们难以测试或调试.
  <br/>案例: 一个算法(Algorithm)的实现细节、输入输出、错误处理等都隐藏在一个黑盒（Black Box）里，就会造成隐晦的复杂性.

```java
public class Algorithm {

	public void execute() {
		// ...
	}

}
```

- `变化(variable)`
  <br/>定义: 多个易变或不稳定的事物引入或依赖，使它们难以控制或适应.
  <br/>案例: `org.springframework.web.context.request.RequestContextHolder`.
  <br/>这个类的实现方式是基于`ThreadLocal`的, 而`ThreadLocal`是一个线程级别的变量，它的值只能在当前线程中共享，所以它的值是不稳定的，这就会造成变化的复杂性.

## 简单性(Simplicity)

### 避免复杂性, 追求简单性

我们应该尽量避免复杂性, 追求简单性.
简单性有多种优点:

- 可理解(understandable)
- 可测试(testable)
- 可组合(composable)
- 可重构(refactorable)
- 可扩展(extensible)
- 可重用(reusable)

### 实现简单性的原则和方法

为了实现简单性, 我们需要一些原则和方法.

- 分解(decompose)
- 抽象(abstract)
- 封装(encapsulate)
- 模块化(modularize)
- 标准化(standardize)
- 最小化(minimize)
- ...

### 实现简单性的例子

- 使用纯函数(Pure Function)
- 使用数据结构(Data Structure)而不是对象(Object)
- 使用值(Value)而不是变量(Variable)
- 使用不可变(Immutable)而不是可变(Mutable)

## 总结

## 参考资料

- ["Simple Made Easy" - Rich Hickey (2011)](https://www.youtube.com/watch?v=LKtk3HCgTa8&t=14s)
- [On 'Simple Made Easy' by Rich Hickey](https://dev.to/ruthmoog/on-simple-made-easy-by-rich-hickey-2olo)
- [Simple Made Easy](https://www.infoq.com/presentations/Simple-Made-Easy/)
- [Simple Made Easy](https://paulrcook.com/blog/simple-made-easy)
- [Simple Made Easy](https://github.com/matthiasn/talk-transcripts/blob/master/Hickey_Rich/SimpleMadeEasy.md)