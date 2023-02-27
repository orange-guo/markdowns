# Configuration Properties

### 通过环境变量传递数组给@ConfigurationProperties注释的类的类型为列表的属性

```bash
export SPRING_LDAP_URLS="ldap://host1:389,ldap://host2:389"
java -jar my-app.jar
```

- [Inject Arrays and Lists From Spring Properties Files](https://www.baeldung.com/spring-inject-arrays-lists#reading-properties-programmatically)