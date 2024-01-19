# Gradle

## Project

### Plugin

- [Shadow](https://imperceptiblethoughts.com/shadow/)
  <br/>Shadow is a Gradle plugin for combining a project's dependency classes and resources into a single output Jar.
  The combined Jar is often referred to a fat-jar or uber-jar. Shadow utilizes JarInputStream and JarOutputStream to
  efficiently process dependent libraries into the output jar without incurring the I/O overhead of expanding the jars
  to disk.

## Reference

### Doc

- [Compatibility Matrix](https://docs.gradle.org/current/userguide/compatibility.html)
- [Sharing dependency versions between projects](https://docs.gradle.org/current/userguide/platforms.html)
- [Understanding dependency resolution](https://docs.gradle.org/current/userguide/dependency_resolution.html)