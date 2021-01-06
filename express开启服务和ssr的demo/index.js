var http = require('http')
var express = require('express')
var bodyParser = require('body-parser') 
var app = express()
var router = require('./router')
var path = require('path')
var fs = require('fs')
var ejs=require('ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());  
//设置跨域请求
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

const options = {
  hostname: '10.0.112.197',
  port: 3000,
  path: '/user?ID=153',
  method: 'GET',
  // headers: {
  //   'Content-Type': 'application/json',
  //   'Content-Length': data.length
  // }
}

app.get('/user1', function (req, res) {
  console.log(req.query,req.method)
  res.send({title:'user'+req.query.ID})
})
// app.get('/',function(req,res){
//   res.end('home')
// })
// app.post('/urlencoded', function(req, res){
//   console.log(req.body);
//   res.send(" post successfully!");
// });

app.use('/',router);

app.use("/uncle",(req,res,next)=>{
  res.writeHead(200, {
    'Content-Type': 'text/html' 
  });
// 渲染文件 index.ejs
  ejs.renderFile('./build/index.html', {
    title: 'ejs-index',  // 渲染的数据key: 对应到了ejs中的title
    index: '首页'},  // 渲染的数据key: 对应到了ejs中的index
    (err, data) => {
    if (err ) {
        console.log(err);
    } else {
        console.log(data);
        res.end(data);
    }
  })
})

app.use("/house",(req,res,next)=>{
  res.writeHead(200, {
    'Content-Type': 'text/html' 
});
// 渲染文件 index.ejs
ejs.renderFile('./build/index1.html', {},
  (err, data) => {
  if (err ) {
      console.log(err);
  } else {
      console.log(data);
      res.end(data);
  }
})
})
// app.use('/',express.static(path.resolve('build')));

const req = http.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', (d) => {console.log(d,d.toString("utf8"),123)
    // process.stdout.write(d)
  })
})
req.on('error', (error) => {
  console.error(error,456)
})
req.end()

app.listen(3000)