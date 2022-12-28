构造方法和静态工厂方法他们虽然可以构建对象, 但是缺点是不能很好地扩展很多可选参数的情况, 例如下面的例子
```
public class Foo {

	// 员工
	public static class Employee {

		// 这个构造方法能够设置所有的字段
		public Employee(Long id, String name, String email, Boolean isMale, Department department) {
			this.id = id;
			this.name = name;
			this.email = email;
			this.isMale = isMale;
			this.department = department;
		}

		// 只设置id,  name, email, isMale字段, 调用上面的构造方法, 将不需要的字段设置为null
		public Employee(Long id, String name, String email, Boolean isMale) {
			this(id, name, email, isMale, null);
		}

		public Employee(Long id, String name, String email) {
			this(id, name, email, null, null);
		}

		private Long id;

		private String name;

		private String email;

		private Boolean isMale;

		private Department department;

	}

	// 部门
	public static class Department {

		private Long id;

		private String name;

	}

}
```
`Employee`提供了一个能够设置所有字段的构造方法, 当需要设置指定字段时, 只需要创建一个针对与指定字段的构造方法, 并调用能够设置所有字段的构造方法, 将不需要的字段设置成`null`。

例如只需要设置`id`, `name`, `email`字段话, 调用代码如下
```
Employee employee = new Employee(1L, "foo", "foo@foo.foo");
```

实例所在类声明的构造方法代码如下
```
public Employee(Long id, String name, String email) {
	this(id, name, email, null, null);
}
```


>通常情况下, 使用可伸缩性的构造方法在短期内可以解决对象赋值问题。
但是随着一个类字段的变多, 所对应的构造方法也将增多。
这将会导致该类构造方法代码过于冗余, 又或者可能构造方法参数位置发生了变化, 将会对导致调用者代码处发生一系列意想不到的错误。

当遇到很多可选参数时, Java还提供了另外一种方式, 那就是JavaBean, 在这种情况下, 使用setter方法来给每个字段赋值

##javaBean规范

1.JavaBean的类访问权限必须是`public`。

2.JavaBean必须具有一个无参数的构造方法。在Java中如果是显式声明构造器, 会提供一个默认的构造器, 但是如果自定义了有参数构造器, 则需要再提供一个无参的构造器

3.JavaBean一般将字段设置成私有的,通过使用getter方法和setter方法来进行字段的设置。(一般字段[Field]表示的是实例的变量, 而属性[Property]表示的是getter和setter方法)

```
public class Employee {

	public void setId(Long id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	private Long id;

	private String name;

	private String email;

}
```
赋值代码
```
Employee employee = new Employee();
		
employee.setId(1L);
employee.setName("foo");
employee.setEmail("foo@foo.foo");
```
>JavaBan的缺点是赋值代码有些冗长, 并且,让这个对象字段失去了不可变的可能
例如假设需求是`Employee`对象初始化之后不能重新给`name`赋值, 最简单的方法就是将name字段声明为`final` 
```
private final String name;
```
但是这样的话设置name的时候就只能通过构造方法来给name赋值了, 其setter方法编译器将会报错, 因为对象的fianl字段只能在执行构造方法时赋值
>Cannot assign a value to final variable 'name'

所以在JavaBean中只能通过在setter方法中加入判断逻辑来保持不可变
```
public void setName(String name) {

	// 如果实例的name已经赋值过了, 就return
	if (Objects.nonNull(this.name))
		return;

	// 判断传入的name参数不为null 并且不是一个空字符串才赋值
	if (Objects.nonNull(name) && !name.isEmpty())
		this.name = name;

}
```
>这样看起来这个字段暂时不可变的, 但是一旦需要不可变的字段变多了, 其对应setter方法中的判断逻辑也将加多, 但是这些代码其实都是些重复冗余的代码, 而且, 如果是一个恶意的调用者使用反射机制来强制给这个字段赋值, 那么这段判断逻辑的代码其实是无用的

最后还有另一种方式, 那就是使用Builder模式
```
public class Employee {

	private Employee(EmployeeBuilder employeeBuilder) {
		id = employeeBuilder.id;
		name = employeeBuilder.name;
		email = employeeBuilder.email;
	}

	public static class EmployeeBuilder {

		public static EmployeeBuilder newEmployeeBuilder() {
			return new EmployeeBuilder();
		}

		public Employee build() {
			return new Employee(this);
		}

		public EmployeeBuilder id(Long id) {
			this.id = id;
			return this;
		}

		public EmployeeBuilder name(String name) {
			this.name = name;
			return this;
		}

		public EmployeeBuilder email(String email) {
			this.email = email;
			return this;
		}

		private Long id;

		private String name;

		private String email;

	}

	private final Long id;

	private final String name;

	private final String email;

	public static void main(String[] args) {

		Employee employee = EmployeeBuilder.newEmployeeBuilder().id(2L).name("foo").email("foo@foo.foo").build();

		System.out.println(employee.name);

	}

}
```
输出 -> foo
>Builder模式非常适合类层次结构。 使用平行层次的builder，每个嵌套在相应的类中。 抽象类有抽象的builder; 具体的类有具体的builder。 

```
public abstract class Person {

	Person(PersonBuilder personBuilder) {
		name = personBuilder.name;
		age = personBuilder.age;
	}

	final String name;

	final Integer age;

	abstract static class PersonBuilder<T extends PersonBuilder, R extends Person> {

		String name;

		Integer age;

		protected T name(String name) {
			this.name = name;
			return self();
		}

		protected T age(Integer age) {
			this.age = age;
			return self();
		}

		abstract R build();

		abstract T self();

	}

	static class Student extends Person {

		Student(StudentBuilder studentBuilder) {
			super(studentBuilder);
			this.sudentNo = studentBuilder.sudentNo;
		}

		final Integer sudentNo;

		static class StudentBuilder extends PersonBuilder<StudentBuilder, Student> {

			Integer sudentNo;

			@Override
			Student build() {
				return new Student(this);
			}

			@Override
			StudentBuilder self() {
				return this;
			}

		}

	}

}
```
#总结
>Builder模式非常灵活。 单个builder可以重复使用来构建多个对象。但是Builder模式也有缺点。为了创建对象，首先必须创建它的builder。虽然创建这个builder的成本在实践中不太可能被注意到，但在性能关键的情况下可能会出现问题。而且，builder模式比伸缩构造方法模式更冗长，因此只有在有足够的参数时才值得使用它，比如四个或更多。但是请记住，如果希望在将来添加更多的参数。但是，如果从构造方法或静态工厂开始，并切换到builder，当类演化到参数数量失控的时候，过时的构造方法或静态工厂就会面临尴尬的处境。因此，所以，最好从一开始就创建一个builder。
总而言之，当设计类的构造方法或静态工厂的参数超过几个时，Builder模式是一个不错的选择，特别是如果许多参数是可选的或相同类型的。客户端代码比使用伸缩构造方法（telescoping constructors）更容易读写，并且builder比JavaBeans更安全。