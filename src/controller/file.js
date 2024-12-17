const asyncHandler = require("express-async-handler");
const FileModel = require('../models/file.js')

const handleUpload = asyncHandler(async (req, res) => {
    // save file path in DB
    const file = new FileModel(req.file)
    file.save()
    return res.json(file)

    // console.log(req.file)
    // return res.json(req.file)

})

const handleUploads = asyncHandler(async (req, res) => {
    // const file = new FileModel(req.file)
    // file.save()
    const files = req.files
    return res.json(files)
})

const handleS3Upload = asyncHandler(async (req, res) => {
    console.log("hello")
    return res.json(req.file)
})

const getFiles = asyncHandler(async (req, res) => {
    // Get all courses 
    const files = await FileModel.find()
    return res.json(files)
})

const getFileById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const file = await FileModel.findById(id)
    return res.json(file)
})

module.exports = { handleUpload, handleUploads, getFiles, getFileById,handleS3Upload }