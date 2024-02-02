const Account = require("../../model/Account");
const User = require("../../model/User");
const { AppErr } = require("../../utils/appError");


// $Create an account
const createAccount = async (req, res, next) => {
    const { name, initialBalance, accountType, notes } = req.body;
    try {
        // *Get Logged In user
        const user = await User.findById(req.userId);
        if (!user) return next(new AppErr("User not found", 404));

        // *Create an account
        const account = await Account.create({
            name, initialBalance, accountType, notes,
            createdBy: req.userId
        })

        // *Push account into user
        user.accounts.push(account._id);

        // *save the user again
        await user.save();

        res.json({
            status: "success",
            data : account
        })

    } catch (error) {
        next(error.message);
    }
}

// $get all accounts function
const getAllAccount = async (req, res, next) => {
    const user = req.user;
    try {
        const accounts = await Account.find({createdBy:user?._id}).populate('transactions');
        res.json({
            status: "success",
            data : accounts
        })
    } catch (error) {
        res.json(error);
    }
}

// $get single account function
const getOneAccount = async (req, res, next) => {
    const id = req.params.id;
    try {
        const account = await Account.findById(id).populate('transactions');
        res.json({
            status: "success",
            account
        })
    } catch (error) {
        next(new AppErr(error.message));
    }
}

// $update an account function
const updateAccount = async (req, res, next) => {
    try {
        const id = req.params.id;
        const account = await Account.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        })

        res.status(200).json({
            status: "success",
            data : account
        })
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

// $delete an account function
const deleteAccount = async (req, res, next) => {
    try {
        const id = req.params.id;
        await Account.findByIdAndDelete(id);

        res.json({
            status: "Account deleted successfully"
        })
    } catch (error) {
        next(new AppErr(error.message, 500));
    }
}

module.exports = {createAccount, getAllAccount, getOneAccount, deleteAccount, updateAccount}
