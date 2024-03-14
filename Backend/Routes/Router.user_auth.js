const express = require('express')
const app = express()

const Router = express.Router()
const mysql2 = require('mysql2');
const bcrypt = require('bcrypt')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function verifyPassword(plainPassword, hashedPassword) {
    try {
        // Compare the provided password with the stored hashed password
        const result = await bcrypt.compare(plainPassword, hashedPassword);
        console.log(result)
        return result
    } catch (error) {
        throw new Error('Error verifying password');
    }
}

module.exports=(conn)=>{
    // console.log('User has come')
    Router.post('/',(req,res)=>{
        console.log('hi')
        const {username,password}=req.body
        console.log(req.body)
        let sql= `SELECT password FROM admin_user WHERE username='${username}';`
        conn.query(sql, (err, result) => {
            if (err) console.log(err);
            console.log(result)
            if(result.length==0){
                res.send('Invalid username')
                return
            }
            
            verifyPassword(password,result[0].password).then((val)=>{
                if(val)
                res.send('Correct')
                else
                res.send('Wrong password')
            })
        });
    })
    return Router
}