## website:https://github.com/shfshanyue/Daily-Question/issues/204

### 对于已经 import 但未实际使用的模块使用 webpack 还会对它打包吗？

tree shaking通过扫描所有 ES6 的 export，找出被 import 的内容并添加到最终代码中。tree shaking的使用时 源码必须遵循 ES6 的模块规范 (import & export)，如果是 CommonJS 规范 (require) 则无法使用。 也就是说，需要给babel里面配置一下"es6不要解析"：

// .babelrc

{
    "presets": [
        ["es2015", {"modules": false}]
    ]
}
tree shaking在webpack2.0里面需要进行手动设置，webpack3和webpack4里面为默认设置。

一、对于方法的处理
通过tree shaking设置后，webpack里面会将没有使用的方法标记为：
unused harmony export xxx，但代码仍然保留。（webpack编译后的源码里面仍然包含没有使用的方法）
随后使用UglifyJSPlugin进行第二步，将已经标记的没有使用的方法进行删除。

二、对于类的处理
与标记方法不同，webpack打包时会将整个类进行标记，也就是说，即使类里面的方法没有被使用也会进行打包编译。 这表明 webpack tree shaking 只处理顶层内容，例如类和对象内部都不会再被分别处理。
综上所述，可以得出 “对于已经 import 但未实际使用的模块使用 webpack 还会对它打包” 。
当然，想要精简代码是可以实现的，具体文章参考：<a href="https://www.jianshu.com/p/cf930283d404"></a>Webpack 之 treeShaking