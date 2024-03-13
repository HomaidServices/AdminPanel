const express=require('express')
const app=express()
const mysql2 = require('mysql2');

port=3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const MaidRouter=require('./Routes/Router.maiddetails.js')
const conn = mysql2.createConnection({
    host: 'localhost',
    user: 'krishnendu19802',
    password: 'Draco1982',
    database: 'homaid'
});


conn.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
    app.listen(port,()=>{
        console.log('App listening on port: ',port)
    })
});

// conn.end((err) => {
//     if (err) {
//         console.error('Error closing MySQL connection:', err);
//         return;
//     }
//     console.log('MySQL connection closed');
// });
app.use('/maiddetails',MaidRouter(conn))