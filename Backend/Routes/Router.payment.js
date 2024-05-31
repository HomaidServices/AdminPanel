const express = require('express')
const app = express()

const Router = express.Router()
const mysql2 = require('mysql2');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = (conn) => {

    Router.get('/', async (req, res) => {


        const date = new Date().getFullYear()
        console.log(date)

        try {
            let datalist = [[], []]
            for (let i = 0; i < 12; i++) {

                //cleaning
                let sql = `SELECT sum(p.amount) FROM payment_history p,cleaning_services cs WHERE MONTH(p.date_and_time) = ? AND YEAR(p.date_and_time) = ? AND p.payment_id=cs.payment_id`;
                let [rows, fields] = await conn.promise().query(sql, [i + 1, date]);
                if (rows[0]['sum(p.amount)'] == null)
                    datalist[0].push(0);
                else
                    datalist[0].push(rows[0]['sum(p.amount)'])
                console.log(rows)

                // //cooking
                sql = `SELECT sum(p.amount) FROM payment_history p,cooking_services as cs WHERE MONTH(p.date_and_time) = ? AND YEAR(p.date_and_time) = ? AND p.payment_id=cs.payment_id`;
                [rows, fields] = await conn.promise().query(sql, [i + 1, date]);
                if (rows[0]['sum(p.amount)'] == null)
                    datalist[1].push(0);
                else
                    datalist[1].push(rows[0]['sum(p.amount)'])
                console.log(rows)

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


    Router.post('/user-record', async (req, res) => {
        const { email } = req.body
        console.log(email)
        let details = {
            total_amount_paid: 0,
            cleaning_services: [],
            cooking_services: []
        }

        try {
            //cleaning
            let sql = `select cs.email,cs.name,cs.cleaning_service_type,cs.date_and_time,p.payment_id,p.amount from payment_history as p, cleaning_services as cs where p.payment_id=cs.payment_id AND cs.email='${email}';`
            let [cleaningrows, fields1] = await conn.promise().query(sql)
            console.log(cleaningrows[0])
            details['cleaning_services'] = cleaningrows
            // cleaningrows.map((cl)=>{
            //     return {...cl,'date_and_time':cl.split('T')[0]}
            // })

            //cooking
            sql = `select cs.email,cs.name,cs.date_and_time,p.payment_id,p.amount from payment_history as p, cooking_services as cs where p.payment_id=cs.payment_id AND cs.email='${email}';`
            let [cookingrows, fields] = await conn.promise().query(sql)
            details['cooking_services'] = cookingrows

            // //total
            // Query for cleaning services
            sql = `SELECT cs.email, SUM(p.amount) AS total_amount
FROM cleaning_services AS cs
JOIN payment_history AS p ON cs.payment_id = p.payment_id
WHERE cs.email='${email}'
GROUP BY cs.email;`;

            let [rowstot1, fields3] = await conn.promise().query(sql);

            // Query for cooking services
            sql = `SELECT cs.email, SUM(p.amount) AS total_amount
FROM cooking_services AS cs
JOIN payment_history AS p ON cs.payment_id = p.payment_id
WHERE cs.email='${email}'
GROUP BY cs.email;`;

            let [rowstot2, fields2] = await conn.promise().query(sql);

            // Calculate total amount paid
            let totalAmountPaid = 0;
            if (rowstot1.length > 0) {
                totalAmountPaid += rowstot1[0]['total_amount'];
            }
            if (rowstot2.length > 0) {
                totalAmountPaid += rowstot2[0]['total_amount'];
            }

            // Assign total amount paid to details object
            details['total_amount_paid'] = totalAmountPaid;

            // Logging total amount paid for debugging
            console.log(totalAmountPaid);

            res.send(details)

        } catch (error) {
            res.send(error)
        }
    })



    return Router
}

