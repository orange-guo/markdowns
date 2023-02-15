if __name__ == "__main__":
	# 获取时间戳, 纯数字
	import time

	timestamp = int(time.time())

	file_name = str(timestamp) + ".md"

	# create file
	with open(file_name, "w") as f:
		f.write(
			"""# 标题

## 现象

## 原因

## 解决方案

## 备注

## 排查过程

## 日志

## 参考""")

# range_start = 11
# range_end = 15
# for i in range(range_start, range_end + 1):
# 	filename = str(i).zfill(4) + ".md"
# 	with open(filename, "w") as f:
# 		f.write("")
