const mysql = require("mysql");
const express = require("express")
const router = require("./route/router");
let app=express();

// const db=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:'yy19920808',
//     database:'nodemysql'
// })
// db.connect((err)=>{
//     if(err) throw err;
//     console.log('connect successfully')
// })

// app.get("/createdb",(req,res)=>{
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
app.use('/',router);

app.listen(3000,()=>{
    console.log("server start at port 3000")
})
