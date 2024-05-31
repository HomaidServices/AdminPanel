const express = require('express')
const app = express()
const { verifyPassword } = require('../Helper/AuthHelper.js')
const jwt = require('jsonwebtoken');

const Router = express.Router()
const mysql2 = require('mysql2');
const bcrypt = require('bcrypt')
require('dotenv').config()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const process.env.secretKey = 'your_secret_key';

module.exports = (conn) => {
    function verifyToken(req, res, next) {
        // Check for token in headers
        // console.log('header',req.headers)
        const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
        if (!token) {
            next()
        }
        // Verify token
        else {


            jwt.verify(token, process.env.secretKey, (err, decoded) => {
                if (err) {
                    next()

                }
                // Token is valid, attach decoded user information to request object
                req.user = decoded;
                // console.log("hello", req.user)
                res.send(['Correct', { username: req.user.username, email: req.user.email, }])
                // next();

            });
        }
    }
    Router.post('/', verifyToken, (req, res) => {
        // console.log('hi')
        const { username, password } = req.body
        if (username === undefined || password === undefined) {
            res.send('Not found')
            return
        }
        // console.log("user here", req.user)
        let sql = `SELECT email,username,password FROM admin_user WHERE username='${username}';`
        conn.query(sql, (err, result) => {
            if (err) res.send(err);
            console.log(result)
            if (result.length == 0) {
                res.send('Invalid username')
                return
            }

            verifyPassword(password, result[0].password).then((val) => {
                if (val) {
                    // Generate JWT
                    const token = jwt.sign({ username: username, email: result[0].email }, process.env.secretKey, { expiresIn: '7d' });
                    // res.json({ token });
                    res.send(['Correct', { username: result[0].username, email: result[0].email, token: token }])
                }
                // res.send(result[0])
                else
                    res.send('Wrong password')
            })
        });
    })

    return Router
}