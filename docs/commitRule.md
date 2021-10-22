---
  title: 代码commit 规范
---

### 为什么需要制定提交规范？

在团队协作开发时，每个人提交代码时都会写 commit message。

每个人都有自己的书写风格，翻看我们组的git log, 可以说是五花八门，十分不利于阅读和维护。

因此，我们需要制定统一标准，促使团队形成一致的代码提交风格，更好的提高工作效率。
### 我们的 git commit 提交规范
#### 格式


``` :sh
type: description
```
#### 1. type 类型

type 是 commit 的类别，只允许如下几种标识：

- fix: 修复bug
- add: 新功能
- update: 更新
- style : 代码格式改变
- test: 增加测试代码
- revert: 撤销上一次的commit
- build: 构建工具或构建过程等的变动，如：gulp 换成了 webpack，webpack 升级等
- 
#### 2. description
description 是对本次提交的简短描述。

不超过50个字符。

推荐以动词开头，如： 设置、修改、增加、删减、撤销等