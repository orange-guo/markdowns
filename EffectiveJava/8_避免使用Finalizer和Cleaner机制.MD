> Java规范不能保证Finalizer和Cleaner机制能及时运行, 甚至不能能保证它们一定会运行。[JLS，12.6]。
##1.Finalizer机制
`finalize`是Object类中的一个方法, 当一个对象被销毁前jvm会去调用该对象的`finalize`方法。
```
@Deprecated(since="9")
protected void finalize() throws Throwable { } // 在java9中已被废弃
```
如果一个对象依赖了底层资源(例如Socket, Stream, Connection...)。在对象销毁前, 需要确保其占有的资源被释放出来, 一般都会去重写`finalize`来确保资源被关闭。例如下面的代码
```
public class SocketOperator {

	private final Socket socket;

	public SocketOperator(String host, Integer port) throws IOException {
		this.socket = new Socket(host, port);
	}

	public String readAsString() {
		// 读数据逻辑
		return null;
	}

	public String writeAsString(String msg) {
		// 写数据逻辑
		return null;
	}

	@Override
	protected void finalize() throws Throwable {
		// 关闭网络连接
		System.out.println("Release connection");
		socket.close();
	}

	public void close() throws IOException {
		socket.close();
	}
}
```
下面这段代码定义了声明了`Socket`操作的类, 这个对象依赖一个底层的`Socket`对象。在这个对象销毁时, 其所拥占有的Socket资源也应该被安全的释放。显式地声明了一个`close`方法来让用户调用用于释放资源。但有些时候, 客户端可能忘记了调用这个方法, 我们需要做一些操作来保证资源来被正常释放, 防止资源泄露, 这个时候就可以去重写finalize方法, 让他作为一个安全网（safety net），以防资源的拥有者忽略了它的close方法。

>Finalizer机制线程的运行优先级低于其他应用程序线程，所以对象被回收的速度低于进入队列的速度。语言规范并不保证哪个线程执行Finalizer机制，因此除了避免使用Finalizer机制之外，没有轻便的方法来防止这类问题。

## 2.Cleaner机制
Cleaner机制使用起来有点棘手。下面是演示该功能的一个简单的Room类。假设Room对象必须在被回收前清理干净。Room类实现AutoCloseable接口；它的自动清理安全网使用的是一个Cleaner机制，这仅仅是一个实现细节。与Finalizer机制不同，Cleaner机制不污染一个类的公共API：
```java
// An autocloseable class using a cleaner as a safety net
public class Room implements AutoCloseable {
    private static final Cleaner cleaner = Cleaner.create();

    // Resource that requires cleaning. Must not refer to Room!
    private static class State implements Runnable {
        int numJunkPiles; // Number of junk piles in this room

        State(int numJunkPiles) {
            this.numJunkPiles = numJunkPiles;
        }

        // Invoked by close method or cleaner
        @Override
        public void run() {
            System.out.println("Cleaning room");
            numJunkPiles = 0;
        }
    }

    // The state of this room, shared with our cleanable
    private final State state;

    // Our cleanable. Cleans the room when it’s eligible for gc
    private final Cleaner.Cleanable cleanable;

    public Room(int numJunkPiles) {
        state = new State(numJunkPiles);
        cleanable = cleaner.register(this, state);
    }

    @Override
    public void close() {
        cleanable.clean();
    }
}
```
静态内部State类拥有Cleaner机制清理房间所需的资源。 在这里，它仅仅包含numJunkPiles属性，它代表混乱房间的数量。 更实际地说，它可能是一个final修饰的long类型的指向本地对等类的指针。 State类实现了Runnable接口，其run方法最多只能调用一次，只能被我们在Room构造方法中用Cleaner机制注册State实例时得到的Cleanable调用。 对run方法的调用通过以下两种方法触发：通常，通过调用Room的close方法内调用Cleanable的clean方法来触发。 如果在Room实例有资格进行垃圾回收的时候客户端没有调用close方法，那么Cleaner机制将（希望）调用State的run方法。

一个State实例不引用它的Room实例是非常重要的。如果它引用了，则创建了一个循环，阻止了Room实例成为垃圾收集的资格(以及自动清除)。因此，State必须是静态的嵌内部类，因为非静态内部类包含对其宿主类的实例的引用。同样，使用lambda表达式也是不明智的，因为它们很容易获取对宿主类对象的引用。

就像我们之前说的，Room的Cleaner机制仅仅被用作一个安全网。如果客户将所有Room的实例放在try-with-resource块中，则永远不需要自动清理。行为良好的客户端如下所示：
```
public class Adult {
    public static void main(String[] args) {
        try (Room myRoom = new Room(7)) {
            System.out.println("Goodbye");
        }
    }
}
```
正如你所预料的，运行Adult程序会打印Goodbye字符串，随后打印Cleaning room字符串。但是如果时不合规矩的程序，它从来不清理它的房间会是什么样的?
```
public class Teenager {
    public static void main(String[] args) {
        new Room(99);
        System.out.println("Peace out");
    }
}
```
你可能期望它打印出Peace out，然后打印Cleaning room字符串，但在我的机器上，它从不打印Cleaning room字符串；仅仅是程序退出了。 这是我们之前谈到的不可预见性。 Cleaner机制的规范说：“System.exit方法期间的清理行为是特定于实现的。 不保证清理行为是否被调用。”虽然规范没有说明，但对于正常的程序退出也是如此。 在我的机器上，将System.gc()方法添加到Teenager类的main方法足以让程序退出之前打印Cleaning room，但不能保证在你的机器上会看到相同的行为。
>Cleaner机制比Finalizer机制要好一些，因为Java类的创建者可以控制自己cleaner机制的线程，但cleaner机制仍然在后台运行，在垃圾回收器的控制下运行，但不能保证及时清理。


##总结
> 1.不要相信System.gc和System.runFinalization方法。 

他们可能会增加Finalizer和Cleaner机制被执行的几率，但不能保证一定会执行。 曾经声称做出这种保证的两个方法：System.runFinalizersOnExit和它的孪生兄弟Runtime.runFinalizersOnExit，包含致命的缺陷，并已被弃用了几十年[ThreadStop]。

> 2.在执行Finalizer机制过程中，未捕获的异常会被忽略，并且该对象的Finalizer机制也会终止 [JLS, 12.6]。

未捕获的异常会使其他对象陷入一种损坏的状态（corrupt state）。如果另一个线程试图使用这样一个损坏的对象，可能会导致任意不确定的行为。通常情况下，未捕获的异常将终止线程并打印堆栈跟踪（ stacktrace），但如果发生在Finalizer机制中，则不会发出警告。Cleaner机制没有这个问题，因为使用Cleaner机制的类库可以控制其线程。

> 3.使用finalizer和cleaner机制会导致严重的性能损失。

使用finalizer机制创建和销毁对象的速度要慢50倍。 这主要是因为finalizer机制会阻碍有效的垃圾收集。 如果使用它们来清理类的所有实例，那么cleaner机制的速度与finalizer机制的速度相当，但是如果仅将它们用作安全网（ safety net），则cleaner机制要快得多。

> 4.Finalizer和Cleaner机制有什么好处呢？

一个是作为一个安全网（safety net），以防资源的拥有者忽略了它的close方法。虽然不能保证Finalizer和Cleaner机制会迅速运行(或者根本就没有运行)，最好是把资源释放晚点出来，也要好过客户端没有这样做。
第二种合理使用Cleaner机制的方法与本地对等类（native peers）有关。本地对等类是一个由普通对象委托的本地(非Java)对象。由于本地对等类不是普通的 Java对象，所以垃圾收集器并不知道它，当它的Java对等对象被回收时，本地对等类也不会回收。

> 总之，除了作为一个安全网或者终止非关键的本地资源，不要使用Cleaner机制，或者是在Java 9发布之前的finalizers机制。即使是这样，也要当心不确定性和性能影响。

