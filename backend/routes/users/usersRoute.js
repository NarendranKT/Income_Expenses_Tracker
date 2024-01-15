const express = require('express');
const router = express.Router(); 
const { register, login, profile, updateUser, deleteUser } = require('../../controller/user/userController');
const isLogin = require('../../middlewares/isLogin');

// $POST:register
router.post('/register', register);

// $POST:login
router.post('/login', login)

// $GET:profile
router.get('/profile', isLogin, profile)

// $PUT:update
router.put('/', isLogin, updateUser)

// $DELETE user
router.delete('/', isLogin, deleteUser)

module.exports = router;