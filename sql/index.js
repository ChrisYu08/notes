var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'yuyue',
  password: 'yy19920808',
  database: 'test'
})

connection.connect()

let query = (sql, callback) => {
  connection.query(sql, function (err, results, fields) {
    callback(err, results);
  })
}

exports.query = query
// connection.end()