const express = require('express')
const { 
    createUser,
    getUser,
    getUserById,
    deleteUserbyId,
    updateUserById
} = require('../controller/user.js')
const userRouter = express.Router();

userRouter.post('/', createUser)
userRouter.get('/', getUser)
userRouter.get('/:id', getUserById)
userRouter.delete('/:id', deleteUserbyId)
userRouter.put('/:id', updateUserById)


module.exports = userRouter