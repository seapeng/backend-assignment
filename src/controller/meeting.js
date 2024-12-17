const asyncHandler = require('express-async-handler')
const MeetingModel = require('../models/meeting.js')

const createMeeting = asyncHandler(async (req, res) => {
    const meeting = new MeetingModel(req.body)
    const result = await meeting.save()
    return res.json(result)
})

const getMeetingById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const meeting = await MeetingModel.findById(id)
    return res.json(meeting)
})

const getMeeting = asyncHandler(async (req, res) => {
    // console.log(req.user)
    const meeting = await MeetingModel.find()
    // const books = await BookModel.paginate({
    //     price:{$gte: 50, $lte: 100}
    // })
    return res.json(meeting)
})

const deleteMeetingbyId = asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = await MeetingModel.deleteOne({ _id: id })
    return res.json(result)
})

const updateMeetingById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = await MeetingModel.updateOne({ _id: id }, req.body)
    return res.json(result)
})

module.exports = {
    createMeeting,
    getMeeting,
    getMeetingById,
    deleteMeetingbyId,
    updateMeetingById
}