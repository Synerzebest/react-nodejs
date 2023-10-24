const User = require('../models/user.model');
const argon2 = require('argon2');

const register = async (req, res) => {
    try {
        const { name, firstname, email, password, phone } = req.body;
        const hashedPass = await argon2.hash(password);
        const user = new User({
            name,
            firstname,
            email,
            phone,
            password: hashedPass
        });
        await user.save();
        console.log('User saved')
        res.redirect('/login')
    } catch(error) {
        console.log('error: ', error);
        res.redirect('/register')
    }
}

module.exports = register;