# shell

## 用例

### bash单引号嵌套

```bash
echo 'a'"'"'b' # a'b
echo 'a'\''b'  # a'b
```

- [bash单引号嵌套](https://www.cnblogs.com/gongxin12/p/11363060.html#:~:text=%E5%8D%95%E5%BC%95%E5%8F%B7%E6%98%AF%E6%97%A0%E6%B3%95%E5%B5%8C,%E6%B2%A1%E6%9C%89%E8%B4%AA%E5%A9%AA%E6%89%AB%E6%8F%8F%E7%9A%84%E8%AF%B4%E6%B3%95%E3%80%82&text=%E6%9F%A5%E7%9C%8B%E4%BD%A0%E5%9C%A8shell%E4%B8%AD,%E5%A5%97%E5%8D%95%E5%BC%95%E5%8F%B7%E7%9A%84%E5%8A%9E%E6%B3%95%E3%80%82)

### 去除字符串中的空格

```bash
echo "a b c" | tr -d ' ' # abc
echo "a b c" | sed 's/ //g' # abc
echo "a b c" | awk '{print $1$2$3}' # abc
```

- [How to trim string in bash](https://linuxhint.com/trim_string_bash/)
- [Shell：用sed命令删除特定行](https://blog.csdn.net/weixin_42170236/article/details/119956202)
- [Shell去除空格和空行的方法](https://blog.51cto.com/u_10742668/1944831)
- [shell去掉文件中空行(空白行)的方法详解](https://blog.csdn.net/genghaihua/article/details/43308799)

### Bash函数返回值

```bash
# 1. global variable
global_var=0
function test() {
  global_var=1
}
echo $global_var # 0

# 2. local variables
function test() {
  local local_var=1
  echo $local_var
}
echo $(test) # 1

# 3. return code
function test() {
  return 2
}
echo $(test) # 2
```

- [Returning Values from Bash Functions](https://www.linuxjournal.com/content/return-values-bash-functions)
- [Return value in a Bash function](https://stackoverflow.com/questions/17336915/return-value-in-a-bash-function)

### 清空文件

```bash
echo "" > file 
cp /dev/null file
```

- [linux几种快速清空文件内容的方法](https://blog.51cto.com/u_10624715/3232522)

### Bash中的数组

```bash
# 1. 定义数组
array=(1 2 3 4 5)

# 2. 获取数组长度
echo ${#array[@]} # 5

# 3. 获取数组元素
echo ${array[0]} # 1

# 4. 遍历数组
for i in ${array[@]}; do
  echo $i
done

# 5. 数组拼接
array2=(6 7 8 9 10)
array3=(${array[@]} ${array2[@]})
echo ${array3[@]} # 1 2 3 4 5 6 7 8 9 10
```

- [How to Use Bash Arrays](https://www.hostinger.com/tutorials/bash-array#:~:text=A%20bash%20array%20is%20a,store%20different%20types%20of%20elements.)

### 获取特定行

```bash
# 获取第一行
head -n 1 file 
# 获取最后一行
tail -n 1 file 
# 获取第三行
sed -n '3p' file 
# 获取第三行到第五行
sed -n '3,5p' file
```

### Bash if..else Statement

- [Bash if..else Statement](https://linuxize.com/post/bash-if-else-statement/)
