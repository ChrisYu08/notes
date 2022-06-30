https://www.tizi365.com/archives/367.html

https://developers.google.com/protocol-buffers/docs/reference/javascript-generated#invocation

https://buf.build/ 

buf是uber/prototool废弃后官方推荐的后继方案(https://github.com/uber/prototool#prototool)，目前已经比较成熟稳定。

日常使用：在相关仓库中执行

.husky/buf build
 程序正常执行即说明protobuf模块可正常编译。

执行

.husky/buf lint
来执行linter。



*由于protobuf模块拆分到不同目录，如果使用带分析跳转能力的IDE/编辑器，需要手动添加所有相关路径到import path之中