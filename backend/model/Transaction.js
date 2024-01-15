const mongoose = require('mongoose');


const trasactionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    transactionType: {
        type: String, 
        enum: [
            "Income",
            "Expense"
        ]
    },
    amount: {
        type: Number,
        required: true
    },
    category: {
        type: String, 
        enum: [
            "Food",
            "Transportation",
            "Enterntainment",
            "Shopping",
            "Utilities",
            "Health",
            "Travel",
            "Education",
            "Personal",
            "Groceries",
            "Bills",
            "Building",
            "Education",
            "Uncategorized"
        ],
        required: true
    },
    color: {
        type: String,
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    notes: {
        type: String, 
        required: true
    },
}, {
    timestamps: true,
    toJSON: {virtuals: true}
})

const Transaction = mongoose.model("Transaction", trasactionSchema);
module.exports = Transaction;