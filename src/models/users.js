const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    createdDate: { type: Date, required: true, default: new Date() },
})

const UserModel = mongoose.model('Users', userSchema)

module.exports = UserModel