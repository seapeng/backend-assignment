const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const UserModel = require('../models/user');


const verifyJWT = asyncHandler(async (req, res, next) => {
    const token = req.headers.authorization;
    
    if (!token) {
        return res.status(401).json({ message: 'Authentication failed' });
    }

    const extract = token.split(' ')[1];
    const decoded = jwt.verify(extract, process.env.JWT_SECRET);
    const user = await UserModel.findById(decoded.id);
    req.user = user;
    next();
});


function logger(req, res, next) {
    // console.log(req)
    console.log("Incoming request", req.rawHeaders[3])
    // Example, request from unauthorized user
    // return res.status(404).send("Forbidden")
    next()
}

function handleError(error, req, res, next) {
    // console.log("Hello")
    // console.log(error.message)
    return res.status(500).json(error.message)
}

module.exports = { 
    logger, 
    handleError,
    verifyJWT,
}