var fs = require('fs');
var http = require('http');
var querystring = require('querystring');
var data = querystring.stringify({
  info:'hi',
  test:5
});
const options = {
  hostname: '127.0.0.1',
  port: 8089,
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': data.length  
  }
};
//设置属性内容
const req = http.request(options, (res) => {
  console.log(`状态码: ${res.statusCode}`);
  console.log(`响应头: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
    //设置格式
  res.on('data', (chunk) => {
    console.log(`响应主体: ${chunk}`);
    //${}模版字符串语法
  });
    //监听data事件，并且将获得到的数据进行打印
  res.on('end', () => {
    console.log('响应中已无数据.');
  });
    //监听end事件，响应结束时弹出提示
});

req.on('error', (e) => {
  console.error(`请求遇到问题: ${e.message}`);
});

    //监听error事件，响应出错时弹出错误信息
  req.write(data);
  req.end();