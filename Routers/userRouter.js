// routes/userRouter.js
const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');

// Route to get all users
router.post('/api/user-register', UserController.registerUser);
router.get('/api/all-users',UserController.allUsers);
router.post('/api/login',UserController.login);
// Add other routes as needed

module.exports = router;
