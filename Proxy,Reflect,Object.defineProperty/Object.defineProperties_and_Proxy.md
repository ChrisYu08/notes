## website:https://blog.csdn.net/qwe435541908/article/details/107360849

1. Proxy使用上比Object.defineProperty方便的多。
2. Proxy代理整个对象，Object.defineProperty只代理对象上的某个属性。
3. 如果对象内部要全部递归代理，则Proxy可以只在调用时递归，而Object.defineProperty需要在一开始就全部递归，Proxy性能优于Object.defineProperty。
4. 对象上定义新属性时，Proxy可以监听到，Object.defineProperty监听不到。
5. 数组新增删除修改时，Proxy可以监听到，Object.defineProperty监听不到。
6. Proxy不兼容IE，Object.defineProperty不兼容IE8及以下。