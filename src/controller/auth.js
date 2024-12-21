const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt');
const UserModel = require('../models/user.js');

const signUp = asyncHandler(async (req, res) => {
    const { firstname, lastname, email, username, password, confirmPassword } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    if(password !== confirmPassword){
        throw new Error("Password not matched!");
    }

    const user = new UserModel({
        firstname,
        lastname,
        email,
        username,
        password: hashedPassword,
    });

    const result = await user.save();
    result.password="";
    return res.json(result);
  });

  const login = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
  });

  module.exports = {
    signUp,
    login,
  };