const jwt = require('jsonwebtoken');
const secretKey = require('../config/config').secretKey;

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message : "Authentication required"})

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.status(403).json({message: "Invalid Token"});
        req.user = user;
        next()
    });
};

module.exports = authenticateToken;