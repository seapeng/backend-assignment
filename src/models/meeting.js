const mongoose = require('mongoose')

const meetingSchema = new mongoose.Schema({
    topic: { type: String, required: true},
    leader_id: { type: String, required: true},
    room_id: {type: String, required: true},
    date: { type: Date, required: true, default: new Date() },
    start_time: {type: String, required: true},
    end_time: {type: String, required: true},
})

const MeetingModel = mongoose.model('Meeting', meetingSchema)

module.exports = MeetingModel