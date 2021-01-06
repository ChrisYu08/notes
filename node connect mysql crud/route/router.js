var express = require('express')
var router = express.Router();
const mysql = require("mysql");

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'yy19920808',
    database:'nodemysql'
})
db.connect((err)=>{
    if(err) throw err;
    console.log('connect successfully')
})
// 首頁路由 (http://localhost:3000)
router.use(function(req, res, next) {

  // 輸出記錄訊息至終端機
  console.log(req.method, req.url);

  // 繼續路由處理
  next();
});
// router.get("/createdb",(req,res)=>{
//     let sql="CREATE DATABASE nodemysql";
//     db.query(sql,(err,result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log(result);
//             res.send("Datebase create successfully")
//         }
//     })
// })

//创建数据
router.get('/createpoststable',(req,res)=>{
    //创建表 表名为posts id自增 title字符串长度255 body字符串长度255 主键是ID
    let sql = "CREATE TABLE posts(id int AUTO_INCREMENT,title VARCHAR(255),body VARCHAR(255),PRIMARY KEY(ID))";
    db.query(sql,(err,result) => {
        if(err){
            console.log(err)
        }else{
            console.log(result);
            res.send("posts表创建成功")
        }
    })
})

//插入数据
router.get("/addpost1",(req,res)=>{
    let post = {title:"post one",body:"haha"};
    let sql = "INSERT INTO posts SET ?"
    // 写个问号 防止sql注入 会在执行时把post传进sql语句 替换问号
    db.query(sql,post,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result);
            res.send("post1 added...")
        }
    })
})

// 查询内容
router.get("/getposts",(req,res)=>{
    let sql="SELECT * FROM posts";
    db.query(sql,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result);
            // res.send("query successfully")
            res.json(result)
        }
    })
})

//查询单条内容
router.get("/getposts/:id",(req,res)=>{
    let sql= `SELECT * FROM posts WHERE id = ${req.params.id}`;
    db.query(sql,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result);
            // res.send("query successfully")
            res.json(result)
        }
    })
})

//删除内容
router.get("/deletepost/:id",(req,res)=>{
    let sql=`DELETE FROM posts WHERE id = ${req.params.id}`;
    db.query(sql,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result);
            res.send("delete successfully")
        }
    })
})

//修改
router.get("/updatepost/:id",(req,res)=>{
    let sql=`UPDATE posts SET title = 'haha', Body = 'Nanjing' WHERE id = ${req.params.id}`
    db.query(sql,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result);
            res.send("update successfully")
        }
    })
})

module.exports=router