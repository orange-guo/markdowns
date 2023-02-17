# TestContainers

## 为容器指定`hostname`

```java
class Test {

	GenericContainer<?> container = new GenericContainer<>(DockerImageName.parse("redis:3.0.2"))
			.withCreateContainerCmdModifier(cmd -> cmd.withHostName("the-cache"));

}
```

- [Customizing the container](https://www.testcontainers.org/features/advanced_options/#customizing-the-container)