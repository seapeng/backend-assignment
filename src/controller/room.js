const asyncHandler = require('express-async-handler')
const RoomModel = require('../models/room.js')

const createRoom = asyncHandler(async (req, res) => {
    const room = new RoomModel(req.body)
    const result = await room.save()
    return res.json(result)
})

const getRoomById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const room = await RoomModel.findById(id)
    return res.json(room)
})

const getRoom = asyncHandler(async (req, res) => {
    // console.log(req.user)
    const room = await RoomModel.find()
    // const books = await BookModel.paginate({
    //     price:{$gte: 50, $lte: 100}
    // })
    return res.json(room)
})

const deleteRoombyId = asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = await RoomModel.deleteOne({ _id: id })
    return res.json(result)
})

const updateRoomById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = await RoomModel.updateOne({ _id: id }, req.body)
    return res.json(result)
})

module.exports = {
    createRoom,
    getRoom,
    getRoomById,
    deleteRoombyId,
    updateRoomById
}