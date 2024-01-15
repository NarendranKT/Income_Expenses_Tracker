const globalErrorHandler = (err, req, res, next) => {
    // *Message
    // *Status
    // *StatusCode
    // *Stack
    
    const statusCode = err.statusCode = err.statusCode || 500;
    const status = err.status = err.status || "error";
    res.status(statusCode).json({
        status, 
        message: err.message,
        stack: err.stack
    })
}

module.exports = globalErrorHandler;