## typescript implements的作用和意义

意义在于工程化开发
比如跨端开发,使用依赖注入模式的话,顶层API依赖各端适配器,那就可以约定好interface,各端分头implements.这样要重构,要加新功能,新端都是非常容易.便于测试,便于开发.


我认为interface更像是ts的header file,它的结构就好像C语言的头文件(.h)与代码文件(.c).

这样做的好处有以下几点:

- 让编译器开发人员更容易

- 可以共享接口给其他的开发者, 当需要共享接口时,选择共享interface可以保护内部逻辑不被暴露

说回到TS中, 我觉得这样设计的原因应该也是为了开发者进行工程化构建.

那么如果不想写那么多遍function定义有没有什么办法? 当然有.


