const express = require('express')
const { 
    handleUpload,
    getFiles,
    getFileById,
    handleUploads,
    handleS3Upload
} = require('../controller/file')
const { singleUpload, multipleUploads } = require('../middlewares')
const uploadS3 = require('../middlewares/uploads3')
const fileRouter = express.Router()

fileRouter.post('/upload-single', singleUpload, handleUpload)
fileRouter.post('/upload-multiple', multipleUploads, handleUploads)
fileRouter.post('/upload-single-s3', uploadS3, handleS3Upload)
fileRouter.get('/', getFiles)
fileRouter.get('/:id', getFileById)

module.exports = fileRouter