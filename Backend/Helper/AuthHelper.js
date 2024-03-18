const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashedPassowrd = await bcrypt.hash(password, saltRounds);
        return hashedPassowrd;
    } catch (error) {
        console.log(error);
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


module.exports = { hashPassword, verifyPassword };