const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String,
        required: true
    },
    hasCreatedAccount: {
        type: Boolean,
        default: false,
    },
    accounts: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Account'
    }]
}, {
    timestamps: true,
    toJSON: {virtuals:true}
})


// $model
const User = mongoose.model('User', userSchema);
module.exports = User;