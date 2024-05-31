const mysql2 = require('mysql2');
const bcrypt = require('bcrypt')
const conn = mysql2.createConnection({
    host: 'localhost',
    user: 'krishnendu19802',
    password: 'Draco1982',
    database: 'homaid'
});


const saltRounds = 10; // Number of salt rounds to use (recommended: 10)

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

// Example usage
;

// hashPassword(plainPassword)
//     .then(hash => {
//         // Store the hash in the database
//         console.log('Hashed password:', hash);
//     })
//     .catch(error => {
//         console.error(error);
//     });



let user = {
    name: 'Krishnendu',
    email: 'xyz@abc.com',
    username: 'krish123',
    password: 'abc123'
}
async function verifyPassword(plainPassword, hashedPassword) {
    try {
        // Compare the provided password with the stored hashed password
        const result = await bcrypt.compare(plainPassword, hashedPassword);
        console.log(result)
    } catch (error) {
        throw new Error('Error verifying password');
    }
}
// conn.connect((err) => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err);
//         return;
//     }
//     console.log('Connected to MySQL');
//     let newpwd = ''
//     hashPassword(user.password).then(hash => {
//         user.password = hash
//         let sql = 'INSERT INTO admin_user SET ?'
//         conn.query(sql, user, (err, result) => {
//             if (err) console.log(err);
//             else console.log('Successfully entered', result);
//         });
//     })
//         .catch(error => {
//             console.error(error);
//         });


// });


conn.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            return;
        }
        console.log('Connected to MySQL');
        let orgpwd = 'abc123'
        let sql= "SELECT password FROM admin_user WHERE email='xyz@abc.com';"
        conn.query(sql, (err, result) => {
            if (err) console.log(err);
            // else console.log(result[0].password);
            verifyPassword(orgpwd,result[0].password)
        });
    
    
    });