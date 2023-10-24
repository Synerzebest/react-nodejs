const User = require('../models/user.model');
const argon2 = require('argon2');
const jwt =  require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.SECRET_KEY;


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select('password'); // à vérifier

        if (!user) {
            res.status(401).json({ message: 'User not found' });
            return;
        };

        const passwordMatch = await argon2.verify(user.password, password);

        if (passwordMatch) {
            const token = jwt.sign({ email: user.email }, secretKey, { expiresIn: '2h'});

            req.session.token = token;

            req.session.user = {
                email: user.email,
                name: user.name,
                firstname: user.firstname,
                phone: user.phone,
            }
            res.json({message: "Connection successfull", token});
        } else {
            res.status(401).json({ message: 'Password incorrect' });
        };
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occured during the connection' });
    };
};

module.exports = login;