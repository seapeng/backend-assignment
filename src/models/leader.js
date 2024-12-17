const mongoose = require('mongoose')

const leaderSchema = new mongoose.Schema({
    sort: { type: Number, required: true},
    title_id: { type: String, required: true},
    fullname: { type: String, required: true},
    position: {type: String, required: true},
})

const LeaderModel = mongoose.model('Leader', leaderSchema)

module.exports = LeaderModel