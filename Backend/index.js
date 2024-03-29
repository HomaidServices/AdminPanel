const express=require('express')
const app=express()
const mysql2 = require('mysql2');
const cors=require('cors')
port=3000
const MaidRouter=require('./Routes/Router.maiddetails.js')
const UserRouter=require('./Routes/Router.user_auth.js')
const SettingsRouter=require('./Routes/Router_settings.js')
const addUserRouter=require('./Routes/Routes.addUser.js')
const recordsRouter=require('./Routes/Routes.records.js')
const servicesRouter=require('./Routes/Router.services.js')
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cors())

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
app.use('/',UserRouter(conn))
app.use('/settings',SettingsRouter(conn))
app.use('/adduser',addUserRouter(conn))
app.use('/records',recordsRouter(conn))
app.use('/services',servicesRouter(conn))


