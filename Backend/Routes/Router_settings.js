const express = require('express')
const app = express()
const jwt = require('jsonwebtoken');

const Router = express.Router()
const mysql2 = require('mysql2');
const bcrypt = require('bcrypt')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const secretKey = 'your_secret_key';

const saltRounds = 10;
// Function to hash and salt a password
async function hashPassword(password) {
    try {
        // Generate a salt
        const salt = await bcrypt.genSalt(saltRounds);

        // Hash the password with the salt
        const hash = await bcrypt.hash(password, salt);

        return hash;
    } catch (error) {
        throw new Error('Error hashing password');
    }
}

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

module.exports = (conn) => {
    // console.log('User has come')
    Router.post('/', (req, res) => {

        //{identification:value,update:[fieldtoupdate,value]}

        console.log('hi')
        const { update } = req.body
        const identification = Object.keys(req.body)[0]
        const idfvalue = req.body[identification]
        const fieldtoUpdate = update[0]
        const value = update[1]
        // res.send(fieldtoUpdate)
        let sql;
        if (fieldtoUpdate === 'username' || fieldtoUpdate === 'email') {
            sql = `UPDATE admin_user SET ${fieldtoUpdate} = '${value}' WHERE ${identification}='${idfvalue}'; `
            conn.query(sql, (error, result) => {
                if (error) res.send(error)
                let sql = `SELECT username,email FROM admin_user WHERE ${identification}='${idfvalue}';`
                conn.query(sql, (err, result) => {
                    const token = jwt.sign({ username: result[0].username, email: result[0].email }, secretKey, { expiresIn: '7d' });
                    if (err) res.status(400).send('Error fetching response')
                    res.send({...result[0],'token':token})
                })
            })

        }
        else {
            hashPassword(value).then(hash => {
                sql = `UPDATE admin_user SET ${fieldtoUpdate} = '${hash}' WHERE ${identification}='${idfvalue}'; `

                conn.query(sql, (err, result) => {
                    if (err) console.log(err);
                    // res.send(idfvalue)
                    let sql = `SELECT username,email FROM admin_user WHERE ${identification}='${idfvalue}';`
                    conn.query(sql, (err, result) => {
                        if (err) res.status(400).send('Error fetching response')
                        res.send(result[0])
                    })
                });
            })
                .catch(error => {
                    console.error(error);
                });
        }
        // res.send(sql)

        // conn.query(sql, (err, result) => {
        //     if (err) console.log(err);
        //     console.log(result)
        //     if(result.length==0){
        //         res.send('Invalid username')
        //         return
        //     }

        //     verifyPassword(password,result[0].password).then((val)=>{
        //         if(val)
        //         res.send('Correct')
        //         else
        //         res.send('Wrong password')
        //     })
        // });
    })

    Router.get('/', (req, res) => {
        const { username } = req.body
        // res.send(username)
        let sql = `SELECT username,email FROM admin_user WHERE username='${username}';`
        conn.query(sql, (err, result) => {
            if (err) res.status(400).send('Error fetching response')
            res.send(result[0])
        })
    })
    return Router
}