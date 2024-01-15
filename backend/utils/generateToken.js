const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.SECRET_KEY || 'roronoazoro';

const generateToken = (id) => {
    return jwt.sign({ id }, SECRET_KEY, { expiresIn: "10d" });
}

module.exports = generateToken;