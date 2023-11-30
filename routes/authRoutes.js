const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Sign-up route
router.get('/signup', authController.signupForm);
router.post('/signup', authController.signup);

// Log-in route
router.get('/login', authController.loginForm);
router.post('/login', authController.login);

// Log-out route
router.get('/logout', authController.logout);

module.exports = router;
