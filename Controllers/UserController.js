// controllers/UserController.js
const UserModel = require('../Models/UserModel');


const getAllUsers = async (req, res) =>{
   
    res.send('users');
}

module.exports = {
    getAllUsers
  };