>单例的类只有一个实例。即一个类只有一个对象实例
常见实现单例的方法有两种, 两者都是基于构造器私有, 然后对外提供该类的实例作为静态变量

第一种方法就是使用final修饰静态变量
```
public class Foo {

	private Foo() {
	}

	public static final Foo foo = new Foo();

	public void doSomething() {

	}

}
```
>构造方法被设置成私有的, 在类的内部初始化对象, 使用final保证只被初始化一次, 但是需要注意, 如果调用者使用反射来调用构造器来创建对象的话, 将会导致内存中出现两个实例对象, 对此避免的方法是使其在请求创建第二个实例时抛出异常。

第二种方法是对外提供一个静态工厂方法, 静态成员变量私有化
```
public class Foo {

	private Foo() {
	}

	private static Foo foo = new Foo();

	public static Foo getFoo() {
		return foo;
	}

	public void doSomething() {

	}

}
```
每次调用`getFoo()`都将返回同一个`Foo`实例
>静态工厂方法的一个优点是，它可以灵活地改变你的想法，无论该类是否为单例而不必更改其API。 工厂方法返回唯一的实例，但是可以修改，比如，返回调用它的每个线程的单独实例。 第二个好处是，如果你的应用程序需要它，可以编写一个泛型单例工厂（generic singleton factory ）。 使用静态工厂的最后一个优点是方法引用可以用supplier，例如`Foo::getFoo`等同于`Supplier<Foo>`。 除非与这些优点相关的，否则公共属性方法是可取的。

如果想序列化单例类, 仅仅将implements Serializable添加到声明中是不够的。为了维护单例的保证，声明所有的实例属性为transient，并提供一个readResolve方法。否则，每当序列化实例被反序列化时，就会创建一个新的实例，为了防止这种情况, 则需要将这个readResolve方法添加到单例所在类

```
// readResolve方法用来提供单例对象
private Object readResolve() {
	return foo;
}
```

最后一种实现单例的方法是声明单一枚举类
```
public enum Foo {
	
	FOO;

	public void doSomething() {
	}

}
```