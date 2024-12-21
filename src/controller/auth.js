const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
    const user = await UserModel.findOne({ username });

    if (!user) {
      return res.status(404).json('User not found!');
    }

    const compareResult = await bcrypt.compare(password, user.password);
    if (!compareResult) {
      return res.status(401).json('Incorrect email or password');
    }

    // Sign JWT Token
    const token = jwt.sign(
      {id: user._id, email: user.email, username: user.username},
      process.env.JWT_SECRET,
      {expiresIn: '1h'}
    );

    return res.json(token);
  });

  module.exports = {
    signUp,
    login,
  };