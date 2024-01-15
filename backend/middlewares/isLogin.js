const { appErr, AppErr } = require("../utils/appError");
const getToken = require("../utils/getTokenFromHeader");
const verifyToken = require("../utils/verifyToken");

const isLogin = (req, res, next) => {
    //* get token from req header
    const token = getToken(req);

    // *verify
    const decodedUser = verifyToken(token);

    // *Save the user into request object
    req.userId = decodedUser.id;

    // *Check user validity
    if (!decodedUser) {
        return next(new AppErr('Invalid/Expired Token, Please login again', 401));
    }
    next()
}

module.exports = isLogin;