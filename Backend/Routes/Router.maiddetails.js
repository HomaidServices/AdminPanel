const express = require('express')
const app = express()

const Router = express.Router()
const mysql2 = require('mysql2');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = (conn) => {
    
    Router.get('/',  (req, res) => {
        
        let sql = `SELECT * FROM maid_table; `;
        // const body=req.body
        // if(Object.keys(body).length>0){
        //     let key=Object.keys(body)[0]
        //     sql+=`WHERE ${key} = '${body[key]}';`
        // }
        // else
        sql+=';'
        console.log(sql)
    
        conn.query(sql, (err, result) => {
            if (err) res.status(400).send(err);
            else res.send(result);
        });

    })

    Router.post('/',  (req, res) => {
        let sql = `SELECT * FROM maid_table `;
        const body=req.body
        if(Object.keys(body).length>0){
            let key=Object.keys(body)[0]
            sql+=`WHERE ${key} = '${body[key]}';`
        }
        else
        sql+=';';
    
        conn.query(sql, (err, result) => {
            if (err) res.status(400).send(err);
            else res.send(result);
        });

    })

    // Router.post('/:id',  (req, res) => {
    //     let sql = `SELECT * FROM maid_table `;
    //     const {id,body}=req
    //     if(Object.keys(body).length>0){
    //         let key=Object.keys(body)[0]
    //         sql+=`WHERE ${key} = '${body[key]}';`
    //     }
    //     else
    //     sql+=`LIMIT 10 OFFSET ${id*10};`;
    
    //     conn.query(sql, (err, result) => {
    //         if (err) res.status(400).send(err);
    //         else res.send(result);
    //     });

    // })

    // Router.get('/:id', (req, res) => {
    //     const { id } = req.params
    //     let sql = `SELECT * FROM maid_table LIMIT 10 OFFSET ${id*10};
    //      ;`
    //     conn.query(sql, (error, result) => {
    //         if (error) res.status(400).send(error)

    //         res.send(result)
    //     })
    // })
    return Router
}

