const express = require('express')
const Router = express.Router()

module.exports = (conn) => {



    Router.get('/', async (req, res) => {
        const date = new Date().getFullYear()
        console.log(date)

        try {
            let datalist = [[], []]
            for (let i = 0; i < 12; i++) {

                //cleaning
                let sql = `SELECT COUNT(email) AS count FROM cleaning_services WHERE MONTH(date_and_time) = ? AND YEAR(date_and_time) = ?`;
                let [rows, fields] = await conn.promise().query(sql, [i + 1, date]);
                datalist[0].push(rows[0].count);

                //cooking
                sql = `SELECT COUNT(email) AS count FROM cooking_services WHERE MONTH(date_and_time) = ? AND YEAR(date_and_time) = ?`;
                [rows, fields] = await conn.promise().query(sql, [i + 1, date]);
                datalist[1].push(rows[0].count);
                console.log(rows, fields)

            }

            res.send(datalist)


        } catch (error) {
            console.log(error);
            res.status(500).send({
                success: false,
                message: "Error fetching the data",
                error
            })
        }
    })

    Router.post('/', (req, res) => {
        const { type, month } = req.body

        const date = new Date().getFullYear()
        let sql = `SELECT * FROM ${type}_services WHERE MONTH(date_and_time)='${month} AND YEAR(date_and_time)='${date}';`
        conn.query(sql, (error, result) => {
            if (error) res.send(error)
            else {
                res.send(error)
            }
        })
    })
    return Router
}

