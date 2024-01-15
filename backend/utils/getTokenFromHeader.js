const getToken = (req) => {
    // *Getting token from header
        const header = req.headers;
    const token = header['authorization'].split(" ")[1];
    if (token !== undefined) {
        return token;
    }else{
        return {
            status: 'failed',
            message: "There is no token attached to the header"
        }
    }
    // return token;
}

module.exports = getToken;