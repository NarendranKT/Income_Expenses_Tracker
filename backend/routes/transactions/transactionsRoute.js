const express = require('express');
const router = express.Router();
const { createTransaction, getAllTransactions, getTransaction, updateTransaction, deleteTransaction} = require('../../controller/trasactions/transactionController');
const isLogin = require('../../middlewares/isLogin');

// $POST: create transaction
router.post('/create', isLogin, createTransaction);

// $GET: fetch trasactions
router.get('/', isLogin, getAllTransactions);

// $GET: one trasaction
router.get('/:id',isLogin, getTransaction);

// $UPDATE: transaction
router.put('/:id',isLogin, updateTransaction);

// $DELETE: transaction
router.delete('/:id',isLogin, deleteTransaction);

module.exports = router;