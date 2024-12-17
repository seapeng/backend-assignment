const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    filename: { type: String, required: true },
    size: { type: Number, required: true },
    path: { type: String, required: true },
    mimetype: { type: String, required: true },
    createdDate: { type: Date, required: true, default: new Date() },
})

const FileModel = mongoose.model('Files', fileSchema)

module.exports = FileModel