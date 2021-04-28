Java类库中包含许多必须通过调用close方法手动关闭的资源。 比如`InputStream`，`OutputStream`和`java.sql.Connection`。 客户经常忽视关闭资源，其性能结果可想而知。 尽管这些资源中有很多使用finalizer机制作为安全网，但finalizer机制却不能很好地工作
从以往来看，try-finally语句是保证资源正确关闭的最佳方式，即使是在程序抛出异常或返回的情况下：
```java
// try-finally - No longer the best way to close resources!
static String firstLineOfFile(String path) throws IOException {
    BufferedReader br = new BufferedReader(new FileReader(path));
    try {
        return br.readLine();
    } finally {
        br.close();
    }
}
```
这可能看起来并不坏，但是当添加第二个资源时，情况会变得更糟：
```java
// try-finally is ugly when used with more than one resource!
static void copy(String src, String dst) throws IOException {
    InputStream in = new FileInputStream(src);
    try {
        OutputStream out = new FileOutputStream(dst);
        try {
            byte[] buf = new byte[BUFFER_SIZE];
            int n;
            while ((n = in.read(buf)) >= 0)
                out.write(buf, 0, n);
        } finally {
            out.close();
        }
    } finally {
        in.close();
    }
}
```

>当Java 7引入了try-with-resources语句时，所有这些问题一下子都得到了解决[JLS,14.20.3]。要使用这个构造，资源必须实现 AutoCloseable接口，该接口由一个返回为void的close组成。Java类库和第三方类库中的许多类和接口现在都实现或继承了AutoCloseable接口。如果你编写的类表示必须关闭的资源，那么这个类也应该实现AutoCloseable接口。

try-with-resources示例
```java
// try-with-resources - the the best way to close resources!
static String firstLineOfFile(String path) throws IOException {
    try (BufferedReader br = new BufferedReader(
           new FileReader(path))) {
       return br.readLine();
    }
}
```

## 总结
>在处理必须关闭的资源时，使用try-with-resources语句替代try-finally语句。 生成的代码更简洁，更清晰，并且生成的异常更有用。 try-with-resources语句在编写必须关闭资源的代码时会更容易，也不会出错，而使用try-finally语句实际上是不可能的。