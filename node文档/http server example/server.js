var fs = require('fs');
var http = require('http');
var querystring = require('querystring');
http.createServer(function (req, response){
  console.log('有客户端连接');
  // 定义了一个post变量，用于暂存请求体的信息
   var post = '';     

   // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
   req.on('data', function(chunk){    
       post += chunk;
   });

   // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
   req.on('end', function(){    
       post = querystring.parse(post);
       console.log(post);
   });
   //读取文件下的值并且将获得数据写入响应，并结束响应。
fs.readFile('data.txt', function readData(err, data) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end(data);
 });
}).listen(8089, '127.0.0.1');