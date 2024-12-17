const mongoose = require('mongoose')

const buildingSchema = new mongoose.Schema({
    sort: { type: Number, required: true},
    name: { type: String, required: true},
})

const buildingModel = mongoose.model('Building', buildingSchema)

module.exports = buildingModel