const express = require('express')
const app = express()



const Router = express.Router()
const mysql2 = require('mysql2');
const bcrypt = require('bcrypt')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = (conn) => {
    // console.log('User has come')
    Router.get('/:id', (req, res) => {
        const { id } = req.params
        let sql = `SELECT r.customer_email, r.type, r.subtype, mt.Aadhar, mt.Name, mt.Address 
        FROM records r
        JOIN maid_table mt ON r.maid_aadhar = mt.Aadhar 
        ORDER BY mt.Aadhar
        LIMIT 10 OFFSET ${id*10};
         ;`
        conn.query(sql, (error, result) => {
            if (error) res.status(400).send(error)

            res.send(result)
        })
    })

    return Router
}