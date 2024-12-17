const asyncHandler = require('express-async-handler')
const UserModel = require('../models/users.js')

const signUp = asyncHandler(async (req, res) => {
    const user = new UserModel(req.body)
    const result = await user.save()
    return res.json(result)
})

module.exports = { signUp }