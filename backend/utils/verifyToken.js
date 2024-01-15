const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY || 'roronoazoro';

const verifyToken = (token) => {
    return jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return false;
        }

        return decoded;
    })
}

module.exports = verifyToken;