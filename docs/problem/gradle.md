# Gradle

## implementation和api的区别

- implementation
  依赖不会传递并且生成的pom scope为runtime
- api
  依赖会传递，并且生成的pom scope为compile 其为maven中默认scope