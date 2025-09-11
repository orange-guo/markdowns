---
authors: [ orange ]
tags: [ troubleshooting, java, spring-boot, spring-data, spring-data-ldap, ldap ]
---

# 解决Spring Data LDAP中Projection查询@Attribute字段返回空值的问题

Spring Data LDAP是Spring Data项目的子项目，提供了面向LDAP存储库的Spring Data规范实现。<br/>
它让开发者可以像使用Spring Data JPA一样操作LDAP，支持Entity、Repository和Projection等功能。<br/>

问题出现在使用Projection投影查询实体的特定字段时：当实体字段使用@Attribute注解进行字段映射时，查询结果中相关字段值为空。

<!--truncate-->

## 问题描述

以下场景演示了该问题：

**Ldap数据库内容**

```ldif
# base dn
dn: dc=fastonetech,dc=com
objectClass: dcObject
objectClass:  organization
objectClass: top
dc: fastonetech
o: fastonetech

# ou => groups
dn: ou=groups,dc=fastonetech,dc=com
objectClass: organizationalUnit
objectClass: top
ou: groups

# group {tom}
dn: cn=tom,ou=groups,dc=fastonetech,dc=com
objectClass: top
objectClass: posixGroup
cn: tom
gidNumber: 1001
memberUid: tom

# group {tim}
dn: cn=tim,ou=groups,dc=fastonetech,dc=com
objectClass: top
objectClass: posixGroup
cn: tim
gidNumber: 1002
memberUid: tim

# group {joy}
dn: cn=joy,ou=groups,dc=fastonetech,dc=com
objectClass: top
objectClass: posixGroup
cn: joy
gidNumber: 1003
memberUid: joy
```

**实体类定义**

```java
@Data
@Entry(base = "ou=groups", objectClasses = {"posixGroup", "top"})
public final class LdapGroup {

	@Id
	private Name dn;

	@Attribute(name = "cn")
	@DnAttribute(value = "cn", index = 1)
	private String name;

	@Attribute(name = "gidNumber")
	private Integer groupId;

	@Attribute(name = "memberUid")
	private Set<String> members = new HashSet<>();

	public void addMember(String member) {
		members.add(member);
	}

	public boolean isOwnerGroup() {
		return members.contains(this.name) && this.members.size() == 1;
	}

	public boolean isEmpty() {
		return members.isEmpty();
	}

	public void removeMember(String member) {
		members.remove(member);
	}
}
```

**Projection接口定义**

定义两个Projection接口进行测试，都只查询groupId字段：

```java
interface LdapGroupRepositoryClassBasedProjection extends LdapRepository<LdapGroup> {

 record LdapGroupOnlyGroupId(Integer groupId) {

 }

 List<LdapGroupRepositoryClassBasedProjection.LdapGroupOnlyGroupId> findByGroupIdIsNotNull();

}

interface LdapGroupRepositoryInterfaceBasedProjection extends LdapRepository<LdapGroup> {

 interface LdapGroupOnlyGroupId {

  Integer getGroupId();

 }

 List<LdapGroupRepositoryInterfaceBasedProjection.LdapGroupOnlyGroupId> findByGroupIdIsNotNull();

}
```

**测试类**

测试代码期望通过Projection查询到三个groupId值`（1001、1002、1003）`，但实际返回0个结果：

```java
class Test {

	@Test
	void testLdapProjectionInterfaces() {
		assertThat(ldapGroupRepositoryClassBasedProjection.count()).isEqualTo(3);
		var classBasedProjection = ldapGroupRepositoryClassBasedProjection.findByGroupIdIsNotNull();
		var classBasedProjectionGroupIds = classBasedProjection.stream().map(LdapGroupRepositoryClassBasedProjection.LdapGroupOnlyGroupId::groupId).filter(Objects::nonNull).collect(Collectors.toSet());
		assertThat(classBasedProjectionGroupIds).hasSize(3); // 预期 3，实际0


		assertThat(ldapGroupRepositoryInterfaceBasedProjection.count()).isEqualTo(3);
		var interfaceProjection = ldapGroupRepositoryInterfaceBasedProjection.findByGroupIdIsNotNull();
		var interfaceProjectionGroupIds = interfaceProjection.stream().map(LdapGroupRepositoryInterfaceBasedProjection.LdapGroupOnlyGroupId::getGroupId).filter(Objects::nonNull).collect(Collectors.toSet());
		assertThat(interfaceProjectionGroupIds).hasSize(3); // 预期 3，实际0
	}

}
```


## 原因分析

通过断点调试Spring Data LDAP的查询过程来分析问题原因。在Spring Data LDAP中，所有与LDAP服务器的交互都通过LdapTemplate完成，因此在`org.springframework.ldap.core.LdapTemplate`类的search方法上设置断点：

```java
public <T> List<T> search(Name base, String filter, SearchControls controls, 
    ContextMapper<T> mapper, DirContextProcessor processor)
```

![a667049d7ea12a3153a1572ed5f6043c580f30cdf1104352b4303f3ebbdda3ba.png](/blog/a667049d7ea12a3153a1572ed5f6043c580f30cdf1104352b4303f3ebbdda3ba.png)

从调试信息可以看到`controls.attributes`值为`["groupId"]`，这是问题所在：`groupId`在LDAP中对应的字段名应该是`gidNumber`。

```java
    /**
     *  Contains the list of attributes to be returned in
     * {@code SearchResult} for each matching entry of search. {@code null}
     * indicates that all attributes are to be returned.
     * @serial
     */
    private String[] attributesToReturn;
```

`attributesToReturn`字段用于控制LDAP返回哪些字段，问题在于上层传递该值时没有进行字段映射转换。

跟踪该值的传递流程，定位到`LdapTemplate.searchControlsForQuery`方法中的`query.attributes()`：


```java
public class LdapTemplate implements LdapOperations, InitializingBean {

    private SearchControls searchControlsForQuery(LdapQuery query, boolean returnObjFlag) {
		SearchControls searchControls = getDefaultSearchControls(this.defaultSearchScope, returnObjFlag,
				query.attributes());

		if (query.searchScope() != null) {
			searchControls.setSearchScope(query.searchScope().getId());
		}

		if (query.countLimit() != null) {
			searchControls.setCountLimit(query.countLimit());
		}

		if (query.timeLimit() != null) {
			searchControls.setTimeLimit(query.timeLimit());
		}
		return searchControls;
	}

}	
```

`query.attributes()`中的数据在`LdapQueryCreator.create`方法中创建：


```java
class LdapQueryCreator extends AbstractQueryCreator<LdapQuery, ContainerCriteria> {

	@Override
	protected ContainerCriteria create(Part part, Iterator<Object> iterator) {

		Entry entry = AnnotatedElementUtils.findMergedAnnotation(entityType, Entry.class);

		LdapQueryBuilder query = query();

		if (entry != null) {
			query = query.base(entry.base());
		}

		if (!inputProperties.isEmpty()) {
			query.attributes(inputProperties.toArray(new String[0]));
		}

		ConditionCriteria criteria = query.where(getAttribute(part));

		return appendCondition(part, iterator, criteria);
	}

}
```

值来自`inputProperties`，继续追踪发现它在`PartTreeLdapRepositoryQuery.createQuery`中设置：


```java
public class PartTreeLdapRepositoryQuery extends AbstractLdapRepositoryQuery {

	private final PartTree partTree;
	private final ObjectDirectoryMapper objectDirectoryMapper;

	public PartTreeLdapRepositoryQuery(LdapQueryMethod queryMethod, Class<?> entityType, LdapOperations ldapOperations,
			MappingContext<? extends PersistentEntity<?, ?>, ? extends PersistentProperty<?>> mappingContext,
			EntityInstantiators instantiators) {

		super(queryMethod, entityType, ldapOperations, mappingContext, instantiators);

		partTree = new PartTree(queryMethod.getName(), entityType);
		objectDirectoryMapper = ldapOperations.getObjectDirectoryMapper();
	}

	@Override
	protected LdapQuery createQuery(LdapParameterAccessor parameters) {

		List<String> inputProperties = Collections.emptyList();
		ReturnedType returnedType = getQueryMethod().getResultProcessor().withDynamicProjection(parameters)
				.getReturnedType();

		if (returnedType.needsCustomConstruction()) {
			inputProperties = returnedType.getInputProperties();
		}

		org.springframework.data.ldap.repository.query.LdapQueryCreator queryCreator = new LdapQueryCreator(partTree,
				getEntityClass(), objectDirectoryMapper, parameters, inputProperties);
		return queryCreator.createQuery();
	}
}
```

关键代码段：

```java
if (returnedType.needsCustomConstruction()) {
    inputProperties = returnedType.getInputProperties();
}
```

在Projection场景下，`needsCustomConstruction()`返回`true`，`returnedType.getInputProperties()`返回Projection声明的字段名。

问题根源在于Spring Data LDAP没有对Projection字段进行实体到LDAP的字段映射。我们的映射定义：

```java
@Attribute(name = "gidNumber")
private Integer groupId;
```


## 解决方案

解决方案是在`LdapQueryCreator.create`方法中添加字段映射处理。该类的`getAttribute`方法已经处理其他场景的映射：

```java
private String getAttribute(Part part) {
    PropertyPath path = part.getProperty();
        if (path.hasNext()) {
        throw new IllegalArgumentException("Nested properties are not supported");
    }

    return mapper.attributeFor(entityType, path.getSegment());
}
```

通过`mapper.attributeFor`可以获取实体字段映射后的LDAP字段名。修改`create`方法来支持映射：

```java
@Override
protected ContainerCriteria create(Part part, Iterator<Object> iterator) {

	Entry entry = AnnotatedElementUtils.findMergedAnnotation(entityType, Entry.class);

	LdapQueryBuilder query = query();

	if (entry != null) {
		query = query.base(entry.base());
	}

	if (!inputProperties.isEmpty()) {
		query.attributes(inputProperties.stream().map(prop -> mapper.attributeFor(entityType, prop)).toList().toArray(new String[0]));
	}

	ConditionCriteria criteria = query.where(getAttribute(part));

	return appendCondition(part, iterator, criteria);
}
```

完整的修改代码如下。要在本地项目中应用此修复，可以创建同名类覆盖Spring的原始实现：


```java
/*
 * Copyright 2016-2025 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.springframework.data.ldap.repository.query;

import static org.springframework.ldap.query.LdapQueryBuilder.*;

import java.util.Iterator;
import java.util.List;

import org.springframework.core.annotation.AnnotatedElementUtils;
import org.springframework.data.domain.Sort;
import org.springframework.data.mapping.PropertyPath;
import org.springframework.data.repository.query.parser.AbstractQueryCreator;
import org.springframework.data.repository.query.parser.Part;
import org.springframework.data.repository.query.parser.PartTree;
import org.springframework.ldap.odm.annotations.Entry;
import org.springframework.ldap.odm.core.ObjectDirectoryMapper;
import org.springframework.ldap.query.ConditionCriteria;
import org.springframework.ldap.query.ContainerCriteria;
import org.springframework.ldap.query.LdapQuery;
import org.springframework.ldap.query.LdapQueryBuilder;
import org.springframework.util.Assert;

/**
 * Creator of dynamic queries based on method names.
 *
 * @author Mattias Hellborg Arthursson
 * @author Mark Paluch
 */
class LdapQueryCreator extends AbstractQueryCreator<LdapQuery, ContainerCriteria> {

	private final Class<?> entityType;
	private final ObjectDirectoryMapper mapper;
	private final List<String> inputProperties;

	/**
	 * Constructs a new {@link LdapQueryCreator}.
	 *
	 * @param tree must not be {@literal null}.
	 * @param entityType must not be {@literal null}.
	 * @param mapper must not be {@literal null}.
	 * @param parameterAccessor must not be {@literal null}.
	 * @param inputProperties must not be {@literal null}.
	 */
	LdapQueryCreator(PartTree tree, Class<?> entityType, ObjectDirectoryMapper mapper,
			LdapParameterAccessor parameterAccessor, List<String> inputProperties) {

		super(tree, parameterAccessor);

		Assert.notNull(entityType, "Entity type must not be null");
		Assert.notNull(mapper, "ObjectDirectoryMapper must not be null");

		this.entityType = entityType;
		this.mapper = mapper;
		this.inputProperties = inputProperties;
	}

	@Override
	protected ContainerCriteria create(Part part, Iterator<Object> iterator) {

		Entry entry = AnnotatedElementUtils.findMergedAnnotation(entityType, Entry.class);

		LdapQueryBuilder query = query();

		if (entry != null) {
			query = query.base(entry.base());
		}

		if (!inputProperties.isEmpty()) {
			query.attributes(inputProperties.stream().map(prop -> mapper.attributeFor(entityType, prop)).toList().toArray(new String[0]));
		}

		ConditionCriteria criteria = query.where(getAttribute(part));

		return appendCondition(part, iterator, criteria);
	}

	private ContainerCriteria appendCondition(Part part, Iterator<Object> iterator, ConditionCriteria criteria) {

		Part.Type type = part.getType();

		String value = null;
		if (iterator.hasNext()) {
			Object next = iterator.next();
			value = next != null ? next.toString() : null;
		}
		switch (type) {
			case NEGATING_SIMPLE_PROPERTY:
				return criteria.not().is(value);
			case SIMPLE_PROPERTY:
				return criteria.is(value);
			case STARTING_WITH:
				return criteria.like(value + "*");
			case ENDING_WITH:
				return criteria.like("*" + value);
			case CONTAINING:
				return criteria.like("*" + value + "*");
			case LIKE:
				return criteria.like(value);
			case NOT_LIKE:
				return criteria.not().like(value);
			case GREATER_THAN_EQUAL:
				return criteria.gte(value);
			case LESS_THAN_EQUAL:
				return criteria.lte(value);
			case IS_NOT_NULL:
				return criteria.isPresent();
			case IS_NULL:
				return criteria.not().isPresent();
			default:
				throw new IllegalArgumentException(String.format("%s queries are not supported for LDAP repositories", type));
		}

	}

	private String getAttribute(Part part) {
		PropertyPath path = part.getProperty();
		if (path.hasNext()) {
			throw new IllegalArgumentException("Nested properties are not supported");
		}

		return mapper.attributeFor(entityType, path.getSegment());
	}

	@Override
	protected ContainerCriteria and(Part part, ContainerCriteria base, Iterator<Object> iterator) {
		ConditionCriteria criteria = base.and(getAttribute(part));

		return appendCondition(part, iterator, criteria);
	}

	@Override
	protected ContainerCriteria or(ContainerCriteria base, ContainerCriteria criteria) {
		return base.or(criteria);
	}

	@Override
	protected LdapQuery complete(ContainerCriteria criteria, Sort sort) {
		return criteria;
	}
}
```

## 参考资料

- [Github Pull Request](https://github.com/spring-projects/spring-data-ldap/pull/573)
- [Spring Data Ldap - Projections](https://docs.spring.io/spring-data/ldap/reference/repositories/projections.html)