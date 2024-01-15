const Account = require("../../model/Account");
const Transaction = require("../../model/Transaction");
const User = require("../../model/User");
const { AppErr } = require("../../utils/appError");


// $create Transaction function
const createTransaction = async (req, res, next) => {
    const { name, amount, notes, transactionType, account, category } = req.body;
    try {
        // *Find user
        const user = await User.findById(req.userId)
        if (!user) return next(new AppErr("User not found", 400));

        // *find the account
        const accountFound = await Account.findById(account);
        if (!accountFound) return next(new AppErr("Account not found", 400));

        // *Create the transaction
        const transaction = await Transaction.create({
            name, amount, notes, transactionType, account, category, createdBy : user._id
        })

        // *Push transaction to account
        accountFound.transactions.push(transaction._id);

        // *Save transaction
        accountFound.save();

        res.json({
            status: "success",
            data : transaction
        })
    } catch (error) {
        next(error.message)
    }
}

// $getAllTrasaction function
const getAllTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();
        res.json({
            status: "success",
            data: transactions
        })
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

// $get one Transaction function
const getTransaction = async (req, res, next) => {
    try {
        const id = req.params.id;
        const transaction = await Transaction.findById(id);

        res.status(200).json({
            status: "success",
            data : transaction
        })

    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

// $update Trasaction function
const updateTransaction = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updates = await Transaction.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        })

        res.json({
            status: "success",
            data : updates
        })

    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

// $delete trasaction function
const deleteTransaction = async (req, res, next) => {
    try {
        const id = req.params.id;
        await Transaction.findByIdAndDelete(id);
        res.json({
            status : "Transaction deleted successfully"
        })
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

module.exports = {
    createTransaction,
    getAllTransactions,
    getTransaction,
    updateTransaction,
    deleteTransaction
}
