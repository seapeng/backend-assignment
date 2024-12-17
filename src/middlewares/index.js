// File Upload
const multer = require('multer')
const path = require('path')


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

const storage = multer.diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname))
    },
})

const singleUpload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb)
    },
}).single('file')

const multipleUploads = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb)
    },
}).array('files')

// Check file type
function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif|pdf/
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    // Check mime
    const mimetype = filetypes.test(file.mimetype)

    if (mimetype && extname) {
        return cb(null, true)
    } else {
        cb(new Error('Error: Images Only!'), false)
    }
}

module.exports = { 
    logger, 
    handleError,
    singleUpload,
    multipleUploads
}