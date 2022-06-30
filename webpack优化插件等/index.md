## 压缩js
  TersonPlugin({})

## 压缩css
  OptimizeCSSAssetsPlugin({})

## 压缩图片
  image-webpack-loader

## 清楚无用的css
  purgecssPlugin({})

## Tree Shaking

## Scope Hoisting

## 代码分割
## 动态导入或懒加载
```js
document.querySelector('#clickBtn').addEventListener('click',()=>{
  import('./hello').then(result=>{
    console.log(result.default)
  })
})
```

## react动态加载(原来同上)
  React.Lazy()

## preload(预加载)
```js
  import(
    `./utils.js`
    /* webpackPreload:true */
    /* webpackChunkName:utils */
  ).then()
```

## prefetch

```js
  import(
    `./utils.js`
    /* webpackPrefetch:true */
    /* webpackChunkName:utils */
  ).then()
```


## 多页面应用代码分割splitChunks
