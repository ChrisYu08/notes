const path =require('path');
const webpack = require('webpack')
module.exports={
  entry:'./src/index.js',     //入口配置*
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'./js/bundle.js'
  },    //出口配置*
  module:{
    // 这里就是Loader，通过Loader，webpack能够针对每一种特定的资源做出相应的处理
    // 1.test参数用来指示当前配置项针对哪些资源，该值应是一个条件值(condition)。
    // 2.exclude参数用来剔除掉需要忽略的资源，该值应是一个条件值(condition)。
    // 3.include参数用来表示本loader配置仅针对哪些目录/文件，该值应是一个条件值(condition)。
    // 而include参数则用来指示目录；注意同时使用这两者的时候，实际上是and的关系。
    // 4.use参数，用来指示用哪个或哪些loader来处理目标资源。
    rules : [
      {
        test: /\.(js|jsx)$/,
        use : {
          loader : "babel-loader",
          // options : {
          //   presets : ['env','react']
          // }
        },
        exclude : /node_modules/
      },
      // {
      //   test: /\.less$/,
      //   exclude: /node_modules/,
      //   use : [{loader : "style-loader"},{loader : "css-loader"},{loader : "less-loader"}]
      // },
      // {
      //   test : /\.css$/,
      //   use : [{loader : "style-loader"},{loader : "css-loader"}]
      // },
      // {
      //   test: /\.(png|gif|jpg|jpeg|bmp)$/i,
      //   use : {
      //     loader : 'url-loader',
      //     options : {
      //       limit : '8192'
      //     }
      //   }
      // },
      // {
      //   test: /\.(woff|woff2|svg|ttf|eot)($|\?)/i,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       limit: '8192'
      //     }
      //   }
      // }
    ]
},   //module.rules loader
  // plugins:[],   //插件
  // devServer:{}   //开发服务器
}