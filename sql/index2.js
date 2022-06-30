var mysql = require('mysql')
var connection = mysql.createConnection({ //连接池
  host: 'localhost',
  user: 'yuyue',
  password: 'yy19920808',
  database: 'test'
})
connection.connect();
connection.beginTransaction(function (err) {
  if (err) throw err;
  connection.query('update account set balance=balance-10 where id = 1', function (err) {
    if (err) {
      connection.rollback(err => { throw err });
      throw err;
    } else {
      connection.query('update account set balance=balance+10 where id = 2', function (err) {
        if (err) {
          connection.rollback();
          throw err;
        } else {
          connection.commit((err) => {
            console.log(err)
            console.log('transaction success')
          });
        }
      })
    }
  })
})
