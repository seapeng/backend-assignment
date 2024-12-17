const asyncHandler = require('express-async-handler')
const UserModel = require('../models/users.js')

const createUser = asyncHandler(async (req, res) => {
    const user = new UserModel(req.body)
    
    const result = await user.save()
    return res.json(result)
})

const getUsers = asyncHandler(async (req, res) => {
    // Get all courses 
    const users = await UserModel.find()
    return res.json(users)
})

const getUserById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const user = await UserModel.findById(id)
    return res.json(user)
})

const deleteUserbyId = asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = await UserModel.deleteOne({ _id: id })
    return res.json(result)
})

const updateUserById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = await UserModel.updateOne({ _id: id }, req.body)
    return res.json(result)
})

module.exports = {
    createUser,
    getUserById,
    getUsers,
    deleteUserbyId,
    updateUserById
}