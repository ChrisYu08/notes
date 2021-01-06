## 常用的setHeader
### node express
``` javascript
// 设置允许跨域 允许哪个源访问我
- res.setHeader('Access-Control-Allow-Origin','baidu.com')
- res.setHeader('Access-Control-Allow-Origin','*')
// 设置允许的请求头 允许携带哪个头访问我
- res.setHeader('Access-Control-Allow-Headers','name')
//  设置允许跨域的方法
- res.setHeader('Access-Control-Allow-Methods','PUT')
// 设置允许携带cookie的跨域
- res.setHeader('Access-Control-Allow-Credentials',true)
// 设置负载option put等请求的预检存活时间（检测是否可以跨域发送）
- res.setHeader('Access-Control-Max-Age',6)
// 允许前端获取哪个响应头
- res.setHeader('Access-Control-Expose-Headers','name')

```
