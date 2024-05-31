const express = require('express')
const { hashPassword } = require('../Helper/AuthHelper.js')
const Router = express.Router()

module.exports = (conn) => {
    // console.log('reached here')
    Router.post('/', async (req, res) => {
        try {
            let { email, username, name, password } = req.body
            let sql = `SELECT * from admin_user WHERE username='${username}' OR email='${email}';`
            conn.query(sql, async (error, result) => {
                if (error) res.status(400).send(error)
                if (result.length != 0)
                    res.status(401).send('Username or email already exits')
                else {

                    // res.send('Correct')
                    password = await hashPassword(password)
                    sql = `INSERT INTO admin_user VALUES (?,?,?,?)`
                    console.log([name, email, username, password])
                    conn.query(sql, [name, email, username, password], (error, result) => {
                        if (error) res.status(400).send(error)
                        res.send({ email, name })
                    })
                }
            })

        } catch (error) {
            console.log(error);
            res.status(500).send({
                success: false,
                message: "Error in registration",
                error
            })
        }
    })
    return Router
}

