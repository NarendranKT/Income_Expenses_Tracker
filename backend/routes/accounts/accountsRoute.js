const express = require('express');
const router = express.Router();
const { createAccount, getAllAccount, getOneAccount, updateAccount, deleteAccount} = require('../../controller/accounts/accountsController');
const isLogin = require('../../middlewares/isLogin');

// $POST: create account
router.post('/', isLogin, createAccount);

// $GET: fetch all account
router.get('/',isLogin, getAllAccount);

// $GET: fetch one account
router.get('/:id',isLogin, getOneAccount);

// $PUT: update an account
router.put('/:id',isLogin, updateAccount);

// $DELETE: delete an account
router.delete('/:id',isLogin, deleteAccount);


module.exports = router;