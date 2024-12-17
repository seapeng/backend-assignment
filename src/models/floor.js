const mongoose = require('mongoose')

const floorSchema = new mongoose.Schema({
    sort: { type: Number, required: true },
    name: { type: String, required: true },
})

const FloorModel = mongoose.model('Floor', floorSchema)

module.exports = FloorModel