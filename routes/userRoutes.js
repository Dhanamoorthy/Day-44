const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Registration
router.post('/register', userController.register);

// Login
router.post('/login', userController.login);

// Forgot Password
router.post('/forgot-password', userController.forgotPassword);

// Reset Password
router.post('/reset-password', userController.resetPassword);

module.exports = router;
