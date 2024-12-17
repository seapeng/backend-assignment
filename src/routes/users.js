const express = require('express')
const { 
    createUser,
    getUsers,
    getUserById,
    deleteUserbyId,
    updateUserById
} = require('../controller/users.js')
const userRouter = express.Router();

userRouter.post('/', createUser)
userRouter.get('/', getUsers)
userRouter.get('/:id', getUserById)
userRouter.delete('/:id', deleteUserbyId)
userRouter.put('/:id', updateUserById)


module.exports = userRouter