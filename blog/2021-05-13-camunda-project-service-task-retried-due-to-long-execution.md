---
authors: [ orange ]
tags: [ problem-solving, java, bpmn, camunda, camunda-service-task ]
---

# 在camunda项目中由于service task执行过长导致被重试

```yaml
camunda:
  bpm:
    job-execution:
      lock-time-in-millis: 999999999
```