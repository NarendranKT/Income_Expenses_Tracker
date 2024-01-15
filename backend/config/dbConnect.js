const mongoose = require('mongoose');
// const CONNECTION = "mongodb://127.0.0.1:27017/Expenses-tracker";
const CONNECTION = "mongodb+srv://test_user_008:ycPzT4YpBWAhl9z9@incomeandexpensetracker.k4ipyys.mongodb.net/Income_Expense_TrackerretryWrites=true&w=majority"


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
