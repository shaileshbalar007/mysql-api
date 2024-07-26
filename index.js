const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const db=mysql.createConnection({
    host:"bkzxncghk1ifv5wzjskz-mysql.services.clever-cloud.com",
    user:"ujr8oazafgzfufij",
    password:"0eI17MdQ0e0ts4y0Ongi",
    database:"bkzxncghk1ifv5wzjskz",
    connectionLimit: 10,
    fatal: true
});

//user - shaileshbalar07
// password - 1I6pSQ3taBJ5uS9k
// connection string - mongodb+srv://shaileshbalar07:1I6pSQ3taBJ5uS9k@myfirstdb.3hzp7gm.mongodb.net/
// mongodb+srv://shaileshbalar07:<password>@myfirstdb.3hzp7gm.mongodb.net/


const PORT = 8810;

// to send from html body
app.use(express.json())
app.use(cors())

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
app.get("/",(req,res)=>{
    res.json("Hello World")
})

app.get("/getstudents",(req,res)=>{
    const q="SELECT * FROM tbl_students"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(process.env.PORT || PORT,()=>{
    console.log("Connect to backend.")
})