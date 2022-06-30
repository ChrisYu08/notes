var mysql = require('mysql')
var pool = mysql.createConnection({ //连接池
  connectTimeout:10, //并发链接数
  host: 'localhost',
  user: 'yuyue',
  password: 'yy19920808',
  database: 'test'
})

// pool.connect()   连接池就不用手动connect了


pool.query(sql, function (err, results, fields) {
  callback(err, results, fields);
})

// exports.query = query
// connection.end()