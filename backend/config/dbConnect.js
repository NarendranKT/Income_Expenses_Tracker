const mongoose = require('mongoose');
const CONNECTION = "mongodb://127.0.0.1:27017/Expenses-tracker";


// $connect db
const dbConnect = async () => {
    try {
        await mongoose.connect(CONNECTION);
        console.log("Database Connection Established");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = dbConnect;