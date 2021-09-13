---
  title: 代码commit 规范
---
为什么要规范git commit 行为？因为良好的commit 能够在以下场景发挥很好的作用：

- 某个版本的代码线上出了问题
- 开发交接代码的时候接手的人能够根据history查看整个迭代流程，从而快速熟悉代码
####  commit 时机
- 小模块功能开发完毕，建议最迟2到3天commit 一次
- bug 修复后
- 分支合并后
- 代码优化重构/优化/回滚后（小范围）
####  commit 规范
**注意**：若多人在同一分支开发commit 之前【必须】，git stash && and git pull 操作，然后再stash apply

commit message格式：


```
<type>(<scope>): <subject>
```

##### type(必须)
用于说明git commit的类别，只允许使用下面的标识。

- feat：新功能（feature）。
- fix/to：修复bug，可以是QA发现的BUG，也可以是研发自己发现的BUG。
- fix：产生diff并自动修复此问题。适合于一次提交直接修复问题
- to：只产生diff不自动修复此问题。适合于多次提交。最终修复问题提交时使用fix
- docs：文档（documentation）。
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）。
- perf：优化相关，比如提升性能、体验。
- test：增加测试。
- chore：构建过程或辅助工具的变动。
- revert：回滚到上一个版本。
- merge：代码合并。
- sync：同步主线或分支的Bug。
##### scope(可选)
scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

例如在Angular，可以是location，browser，compile，compile，rootScope， ngHref，ngClick，ngView等。如果你的修改影响了不止一个scope，你可以使用*代替。

##### subject(必须)
subject是commit目的的简短描述，不超过50个字符。

建议使用中文（感觉中国人用中文描述问题能更清楚一些）。

结尾不加句号或其他标点符号。 根据以上规范git commit message将是如下的格式：


```
fix(DAO):用户查询缺少username属性 
feat(Controller):用户查询接口开发
```
