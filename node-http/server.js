const http = require('http');
const url = require('url'); //{pathname,query}
const fs = require('fs');
const path = require('path');
const mime = require('mime');

let server = http.createServer();
server.on('request', (req, res) => {
  //路由的概念 根据不同的路径 返回不同的结果
  let {
    pathname
  } = url.parse(req.url);
  //实现一个静态服务 http://...
  let absFilePath = path.join(__dirname, pathname);
  //pathname 是否是一个ajax
  if (pathname == './data') {
    res.setHeader('Content-Type', 'application/json');
    switch (req.method.toLowerCase()) {
      case 'get':
        res.end(JSON.stringify({
          name: 'yy'
        }));
        break;

      default:
        break;
    }
  }
  //判断文件是否存在
  fs.stat(absFilePath, function (err, statObj) {
    if (err) {
      res.statusCode = 404;
      return res.end('Not Found');
    }
    if (statObj.isDirectory()) {
      let homePage = path.join(absFilePath, 'index.html');
      fs.access(homePage, function (err) {
        if (err) {
          res.statusCode = 404;
          return res.end('Not Found')
        } else {
          res.setHeader('Content-Type', 'text/html;charset=utf8')
          fs.createReadStream(homePage).pipe(res);
        }
      })
    } else {
      //设置响应头
      res.setHeader('Content-Type', mime.getType(absFilePath) + ';charset=utf8')
      //对于多文件
      // fs.readFile(absFilePath,function (err,data) {
      //   res.end(data)
      // })
      //对于多端流 例如视频1个g
      fs.createReadStream(absFilePath).pipe(res);
    }
  })


})
server.listen(8088, function () { //这个ip不写就是localhost
  console.log('server start 8088')
})