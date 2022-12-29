[toc]

# Practices

## 1. Automation

云原生的核心原则, 自动化重复的手动任务以加速应用程序的交付和部署

### 优势

- 使流程和任务可重复
- 使整个系统更加稳定可靠
- 相较于手动自动化可以获得更可靠和更高效的结果

### 云自动化

#### Infrastructure As Code

通过源代码定义计算和网络基础设施的方法，然后可以像对待任何软件系统一样对待它 e.g. Terraform

#### Configuration As Code

供应计算资源后，您可以管理它们并自动配置它们。解释前面的定义，配置即代码是通过源代码定义计算资源配置的方法，可以像对待任何软件系统一样对待。 e.g. Ansible

#### 总结

- 通过自动执行与基础架构供应和配置管理相关的所有任务，您可以避免不稳定、不可靠的雪花服务器
- 当每个服务器都被手动配置、管理和配置时，结果是一片雪花：一个脆弱的、独特的服务器，无法复制，并且有更改的风险
- 自动化有助于避免有利于凤凰服务器的雪花：在这些服务器上执行的所有任务都是自动化的，每个更改都可以在源代码控制中进行跟踪，从而降低风险，并且每个设置都是可重现的
- 通过将这个概念发挥到极致，您可以实现所谓的不可变服务器，CNCF 在其云原生定义中也将其称为不可变基础设施

## 2. Continuous Delivery

一种软件开发学科，您可以在其中构建软件，使软件可以随时发布到生产环境中 通过持续交付，团队在短周期内实现功能，确保软件可以随时可靠地发布

### Continuous Integration

- 持续交付的先决条件
- 在提交更改后集成软件、构建它，最后在类似生产的环境中运行自动化测试。这个过程应该由 CI 服务器自动化和执行。该过程中涉及的步骤被声明为管道。
- 在运行自动化测试之后，软件被打包，一个版本被构建并部署到类似生产的环境中以验证它是否有效。持续交付中使用的自动化管道称为部署管道。
- 由于持续交付假设持续集成，我们通常将它们称为 CI/CD

### Continuous Delivery Vs Continuous Deploy

前一种方法确保在每次更改后，软件都处于可以部署的状态。在实际执行此操作时，这是一个商业决策。相反，通过持续部署，您可以向 CI/CD 管道添加最后一步，以在每次更改后自动在生产中部署新版本。

## 3. DevOps

### 定义

- 一种文化，人们，无论头衔或背景如何，都一起工作来想象、开发、部署和操作一个系统。
- DevOps 是一种文化，它是为了共同的目标而共同努力。开发人员、测试人员、操作员/运营工程师和其他人员，无论其职位或背景如何，都将共同将想法投入生产
- You build it, you run it
- DevOps 是关于开发人员和运营商一起工作，从创意到生产，同时可能自动化他们的一些流程，比如持续交付。
- 凭借 DevOps 思维，您可以真正实现 CNCF 为云原生应用程序定义的目标：“以最少的劳动频繁地、可预测地做出高影响力的更改”。

### 误解

- DevOps 并不意味着没有运维, 这是一种合作。一个团队将包括这两个角色，有助于提高整体团队技能，将产品从最初的想法带入生产。
- DevOps不是工具, DevOps 不是产品，但工具是相关的推动因素。
- DevOps 不是自动化(自动化是 DevOps 的重要组成部分)
- DevOps不是角色
- DevOps不是一个团队