const express = require('express')
const app = express()
const { verifyPassword } = require('../Helper/AuthHelper.js')


const Router = express.Router()
const mysql2 = require('mysql2');
const bcrypt = require('bcrypt')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports=(conn)=>{
    // console.log('User has come')
    Router.post('/',(req,res)=>{
        console.log('hi')
        const {username,password}=req.body
        console.log(req.body)
        let sql= `SELECT email,username,password FROM admin_user WHERE username='${username}';`
        conn.query(sql, (err, result) => {
            if (err) console.log(err);
            console.log(result)
            if(result.length==0){
                res.send('Invalid username')
                return
            }
            
            verifyPassword(password,result[0].password).then((val)=>{
                if(val)
                res.send(['Correct',{username: result[0].username,email: result[0].email}])
            // res.send(result[0])
                else
                res.send('Wrong password')
            })
        });
    })

    return Router
}