# 使用apache-httpclient5并通过DNS请求服务如果域名不符合FQDN规范导致报错`NullPointerException`的问题的排查及修复

此问题是升级apache-httpclient5过程中遇到的问题.<br/>

项目是多租户场景, 每个租户都有自己的服务, 所有服务部署在`kubernetes`上.<br/>
每个租户的服务在独立的`namespace`中 `namespace`是租户的`ID`(例如`1663783236729442304`)

<!--truncate-->

### 现象

业务服务通过`feign`(底层采用`httpclient5`)调用租户服务时报错, 错误日志如下:

```log
java.lang.NullPointerException: Host name
        at java.base/java.util.Objects.requireNonNull(Objects.java:259)
        at org.apache.hc.core5.util.Args.notNull(Args.java:169)
        at org.apache.hc.core5.util.Args.containsNoBlanks(Args.java:88)
        at org.apache.hc.core5.http.HttpHost.<init>(HttpHost.java:84)
        at org.apache.hc.core5.http.HttpHost.<init>(HttpHost.java:104)
        at org.apache.hc.core5.http.HttpHost.create(HttpHost.java:168)
        at feign.hc5.ApacheHttp5Client.execute(ApacheHttp5Client.java:84)
        at feign.micrometer.MicrometerObservationCapability.lambda$enrich$1(MicrometerObservationCapability.java:53)
        at feign.SynchronousMethodHandler.executeAndDecode(SynchronousMethodHandler.java:100)
        at feign.SynchronousMethodHandler.invoke(SynchronousMethodHandler.java:70)
        at feign.ReflectiveFeign$FeignInvocationHandler.invoke(ReflectiveFeign.java:99)
```

### 原因

访问租户服务时, 通过`DNS`请求服务, 格式为`<service-name>.<tenant-id>`.<br/>
上述格式组成的域名不符合`FQDN`规范(以`.`进行分割的列表最后部分的内容为`<tenant-id>`, 必须以字母开头)

`httpclient5`内部解析`URI`时使用的是`java.net.URI#create`方法进行解析,
由于`hostname`部分不符合规范,
会导致返回的`URI`对象获取的`host`值为`null`, 从而导致出现`NullPointerException`

例如上述代码

```kotlin
fun main() {
	val uri = URI.create("http://servicea.1663783236729442304/api/v1/tasks")
	println(uri.host)
}
```

其控制台输出为`null`

`URI`内部解析hostname代码如下

```java
// hostname      = domainlabel [ "." ] | 1*( domainlabel "." ) toplabel [ "." ]
// domainlabel   = alphanum | alphanum *( alphanum | "-" ) alphanum
// toplabel      = alpha | alpha *( alphanum | "-" ) alphanum
//
private int parseHostname(int start, int n, boolean skipParseException)
	throws URISyntaxException {
	int p = start;
	int q;
	int l = -1;                 // Start of last parsed label

	do {
		// domainlabel = alphanum [ *( alphanum | "-" ) alphanum ]
		q = scan(p, n, L_ALPHANUM, H_ALPHANUM);
		if (q <= p)
			break;
		l = p;
		p = q;
		q = scan(p, n, L_ALPHANUM | L_DASH, H_ALPHANUM | H_DASH);
		if (q > p) {
			if (input.charAt(q - 1) == '-')
				fail("Illegal character in hostname", q - 1);
			p = q;
		}
		q = scan(p, n, '.');
		if (q <= p)
			break;
		p = q;
	} while (p < n);

	if ((p < n) && !at(p, n, ':')) {
		if (skipParseException) {
			return p;
		}
		fail("Illegal character in hostname", p);
	}
	if (l < 0)
		failExpecting("hostname", start);

	// for a fully qualified hostname check that the rightmost
	// label starts with an alpha character.
	if (l > start && !match(input.charAt(l), L_ALPHA, H_ALPHA)) {
		fail("Illegal character in hostname", l);
	}

	host = input.substring(start, p);
	return p;
}
```

上述代码中可以看到如下注释

```log
// for a fully qualified hostname check that the rightmost
// label starts with an alpha character.
```

在`RFC 1035`中对`Domain names`进行了规范
其中第`2.3.1`有相关定义

```log
<domain> ::= <subdomain> | " "

<subdomain> ::= <label> | <subdomain> "." <label>

<label> ::= <letter> [ [ <ldh-str> ] <let-dig> ]

<ldh-str> ::= <let-dig-hyp> | <let-dig-hyp> <ldh-str>

<let-dig-hyp> ::= <let-dig> | "-"

<let-dig> ::= <letter> | <digit>

<letter> ::= any one of the 52 alphabetic characters A through Z in
upper case and a through z in lower case

<digit> ::= any one of the ten digits 0 through 9
```

`domain`由`subdomain`组成, `subdomain`的尾部由`label`组成, `label`的开头必须为`letter`(即字母)

### 解决方案

在`kubernetes`中支持`<service-name>.<tenant-id>.svc.cluster.local`这种域名,
将客户端请求方式从`<service-name>.<tenant-id>`改为上述格式即可

### 参考

- [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035#section-2.3.1)
- [DNS for Services and Pods](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/)

