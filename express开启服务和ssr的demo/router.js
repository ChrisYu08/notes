var express = require('express')
var router = express.Router();
// 首頁路由 (http://localhost:8080)
router.use(function(req, res, next) {

  // 輸出記錄訊息至終端機
  console.log(req.method, req.url);

  // 繼續路由處理
  next();
});
router.get('/', function(req, res) {
  res.send('home page!');
});

// 另一張網頁路由 (http://localhost:8080/about)
router.get('/user', function(req, res) {
  res.send('user page!');
});


module.exports=router