## loader的叠加顺序
post(后置)+inline（内联）+normal(正常)+pre(前置)
执行顺序是重后往前

loader执行用的库(loader-runne r)


```js
  const babel=require('@babel/core');
  function loader(source,inputSourceMap,data){
    const options={
      presets:["@babel/preset-env"],
      inputSourceMap:inputSourceMap,
      sourceMaps:true,
      filename: this.request.split("!")[1].split("/").pop(), 
    };
    // 在webpack.config.js中 增加devtool:'eval-source-map'
    let {code,map,ast}=babel.transform(source,options);
    return this.callback(null,code,map,ast);
  }

  module.exports=loader;
```