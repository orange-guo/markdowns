if __name__ == "__main__":
	# 生成50个文件, 格式如下
	# 0001.md 0002.md ...

	range_start = 1
	range_end = 10
	for i in range(range_start, range_end + 1):
		filename = str(i).zfill(4) + ".md"
		with open(filename, "w") as f:
			f.write("")
