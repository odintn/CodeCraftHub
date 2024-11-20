// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateRegister, validateLogin, validate } = require('../middleware/validationMiddleware');

// Registration route (should not require authentication)
router.post('/register', validateRegister, validate, userController.register);

// Login route (should also not require authentication)
router.post('/login', validateLogin, validate, userController.login);

module.exports = router;


