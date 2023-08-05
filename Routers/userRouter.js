// routes/userRouter.js
const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');

// Route to get all users
router.get('/testing', UserController.getAllUsers);

// Add other routes as needed

module.exports = router;
