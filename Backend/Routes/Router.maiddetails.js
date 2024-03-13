const express = require('express')
const app = express()

const Router = express.Router()
const mysql2 = require('mysql2');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = (conn) => {
    
    Router.get('/',  (req, res) => {
        
        const body=req.body
        let sql = `SELECT * FROM maid_table `;
        if(Object.keys(body).length>0){
            let key=Object.keys(body)[0]
            sql+=`WHERE ${key} = '${body[key]}';`
        }
        else
        sql+=';'
        console.log(sql)
    
        conn.query(sql, (err, result) => {
            if (err) res.status(400).send(error);
            else res.send(result);
        });

    })

    Router.get('/?Aadhar=785499441242',  (req, res) => {
        console.log(req.query)
        res.send('Yo')
        // let sql = "SELECT * FROM maid_table;";
        // conn.query(sql, (err, result) => {
        //     if (err) res.status(400).send(error);
        //     else res.send(result);
        // });

    })
    return Router
}

