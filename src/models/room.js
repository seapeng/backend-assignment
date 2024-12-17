const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    sort: { type: Number, required: true},
    name: { type: String, required: true},
    floor_id: { type: String, required: true},
    building_id: {type: String, required: true},
})

const RoomModel = mongoose.model('Room', roomSchema)

module.exports = RoomModel