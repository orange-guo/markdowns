Object中提供了一系列可以Overwrite的方法, 例如
```

// hashcode
public native int hashCode();

public boolean equals(Object obj);

// 克隆自身
protected native Object clone() 

public String toString()

// 对象被销毁之前调用的方法
protected void finalize()
```

#### 使用equals来实现逻辑相等
在业务中需要经常会使用到User类
有的情况下会去判断两个user是否相同, 从逻辑上来说通过Id就可以判断是否为同一个user Object提供的equals显然不满足我们的需求, 因为它的默认实现是==比较
所以需要自定义equals方法

####如果满足以下条件则不需要重写equals
1.类每个实例本质是唯一的, 例如Thread每个Thread都是唯一的
2.没有必要重写equals来实现逻辑相等的判断
3.超类重写过equals方法, 并且可以满足自身需求
4.类是私有的, 可以确定它永远不会被调用

#### 重写equals需要遵守的约定
1. 非空性: 任何非null的值equals null 永远为false
2. 自反性: 比较自身永远为true x.equals(x) = true
3. 对称性: 若x.equals(y) = true 则 y.equals(x) = true
4. 传递性: 若x.equals(y) = true && y.equals(z) = true 则 x.equals(z) = true
5. 一致性: x和y中equals方法涉及到的信息没有修改情况下多次调用x.equals(y)值永远唯一 true|false


