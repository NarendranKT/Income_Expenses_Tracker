const User = require("../../model/User");
const bcrypt = require('bcrypt');
const generateToken = require("../../utils/generateToken");
const { AppErr } = require("../../utils/appError");



// $register controller
const register = async (req, res, next) => {
    const { email, fullname, password } = req.body;
    try {

        // *Check if email already exist
        const userFound = await User.findOne({ email });
        if (userFound) {
            return next(new AppErr('User Registered Already'))
        }


        // *Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashedPwd = await bcrypt.hash(password, salt);

        const createUser = await User.create({
            fullname, 
            email,
            password : hashedPwd,
        })

        // *On success -->
        res.json({
            status: "success",
            data: createUser
        })
    } catch (error) {
        next(new AppErr(error))
    }
}


// $Login controller
const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        // *Check if user exist
        const userFound = await User.findOne({ email });
        if (!userFound) {
            return next(new AppErr('User not found', 400));
        }

        // *Check Password
        const isPasswordMatched = await bcrypt.compare(password, userFound.password);
        if (!isPasswordMatched) {
            return next(new AppErr('Invalid Credentials', 400))
        }

        // *Generate Token
        const token = generateToken(userFound._id);
        res.json({
                status: "success",
                username: userFound.fullname,
                id: userFound._id,
                token : token
            })
        
    } catch (error) {
        next(new AppErr(error))
    }
}


// $Profile controller
const profile = async (req, res, next) => {
    try {
        // Middleware isLogin will check for validity or login credentials
        const user = await User.findById(req.userId).populate({
            path: "accounts",
            populate: {
                path : 'transactions',
                model : "Transaction"
            }
        });
        if (!user) {
            return next(new AppErr('User not found', 400));
        }
        res.json({  
            status: 'success',
            data: user
        })
    } catch (error) {
        next(new AppErr(error, 500));
    }
}


// $update user
const updateUser = async (req, res, next) => {
    try {
        // *Check if email exist
        if (req.body.email) {
            const userFound = await User.findOne({email : req.body.email});
            if (!userFound) return next(new new AppErr("Email is taken", 400));
        }

        // *Check if user is updating the password
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            console.log(hashedPassword);
            // *Update the user
            const user = await User.findByIdAndUpdate(req.userId, {
                password: hashedPassword
            }, {
                new: true,
                runValidators: true
            })

            return res.status(200).json({
                status: "Success",
                data : user
            })
        }

        const user = await User.findByIdAndUpdate(req.userId, req.body, {
            new: true, 
            runValidators: true
        })
        res.status(200).json({
            status: "Success",
            data: user
        })
    } catch (error) {
        next(new AppErr(error, 500))
    }
}


// $Delete user
const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.userId);
        res.status(200).json({
            message: "User has been deleted successfully"
        })
    } catch (error) {
        next(new AppErr(error, 500))
    }
}



module.exports = {register, login, profile, updateUser, deleteUser}