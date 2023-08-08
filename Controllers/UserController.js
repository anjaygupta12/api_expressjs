// controllers/UserController.js

const bcrypt = require("bcryptjs");
const User = require("../Models/UserModel");
const secorePassword = async (password) => {
  try {
    const haspassword = await bcrypt.genSalt(password);
    return haspassword;
  } catch (error) {
    
    res.status(400).send(error.message);
  }
};

const registerUser = async (req, res) => {

  try {
    const bcryptPassword = await secorePassword(req.body.password);
   
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcryptPassword,
      phone: req.body.phone,
    });
    const userExit = await User.findOne({email:req.body.email});
    // const allUsers = await User.find();
   console.log(allUsers);
    if(userExit){
      res.status(200).send({success:false,msg:"This Email all ready exist!"});
    }else{
      const user_data = await user.save();
      res.status(200).send({success:false,data:user_data});
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const allUsers = async (req,res)=>{
  try {
    const users = await User.find();
    // res.status(200).send({status:200,msg:success,data:users});
    res.status(200).send({success:true,data:users});
  } catch (error) {
    res.status(400).send(error.message);
  }
}
const login = async(req,res)=>{
  try {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
  //  const userData = await User.findOne({email:req.body.email});
  //  console.log(userData);
   if(userData){
    const passwordmatched = await bcrypt.compare(password,userData.password);
    if(passwordmatched){
      const userResult = {
        _id:userData._id,
        name:userData.name,
        email:userData.email,
        password:userData.password,
        phone:userData.phone,
      }
      const response ={
        success:true,
        msg:"Login successfully!",
        data:userResult
      }
      res.status(200).send(response);
    }else{
      res.status(400).send('Email and password do not matched!');
    }

   }else{
    res.status(400).send('Email and password do not matched!');
   }
  } catch (error) {
    
  }
}

module.exports = {
  registerUser,
  allUsers,
  login
};
