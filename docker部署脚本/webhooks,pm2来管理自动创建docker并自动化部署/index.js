let http = require('http');
let crypto = require('crypto');
let {spawn} = require('child_process');

let SECRET = '123456';
function sign (body) {
  return `sha1=${crypto.createHmac('sha1', SECRET).update(body).digest('hex')}`;
}
//接收gitlab发出的request
let server = http.createServer(function (req, res) {
  if (req.method === 'POST' && req.url === '/Webhook') {
    let buffer = [];
    req.on('data',function (buffer) {
      buffer.push(buffer);
    })
    req.on('end',function (buffer) {
      let body = Buffer.concat(buffer);
      let event = req.headers['x-gitHub-event']; //event=push
      // github 请求来的时候，要传递请求体body，另外还会传一个signature过来，你需要验证签名是否正确
      let signature = req.headers['x-hub-signature'];
      if (signature !== sign(body)) {
        return res.end('Not Allowed')
      }
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ ok: true }));
      if (event === 'push') { // start to deploy
        let payload = JSON.parse(body);
        let child = spawn('sh', [`./${payload.repository.name}`]); //子进程执行
        let buffers = [];
        child.stdout.on('data', function (buffer) {
          buffers.push(buffer);
        })
        child.stdout.on('end', function (buffer) {
          let log = Buffer.concat(buffers);
          console.log(log)
        })
      }
    })
  } else {
    res.end('Not Found')
  }
})

server.listen(4000, () => {
  console.log('server is listening on port 4000')
})