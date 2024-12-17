const express = require('express');
const {
    signUp,
} = require('../controller/auth.js');

const authRouter = express.Router();

authRouter.post('/', signUp)

module.exports = authRouter