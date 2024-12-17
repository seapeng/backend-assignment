const asyncHandler = require('express-async-handler')
const LeaderModel = require('../models/leader.js')

const createLeader = asyncHandler(async (req, res) => {
    const leader = new LeaderModel(req.body)
    const result = await leader.save()
    return res.json(result)
})

const getLeaderById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const leader = await LeaderModel.findById(id)
    return res.json(leader)
})

const getLeader = asyncHandler(async (req, res) => {
    // console.log(req.user)
    const leader = await LeaderModel.find()
    // const books = await BookModel.paginate({
    //     price:{$gte: 50, $lte: 100}
    // })
    return res.json(leader)
})

const deleteLeaderbyId = asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = await LeaderModel.deleteOne({ _id: id })
    return res.json(result)
})

const updateLeaderById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = await LeaderModel.updateOne({ _id: id }, req.body)
    return res.json(result)
})

module.exports = {
    createLeader,
    getLeader,
    getLeaderById,
    deleteLeaderbyId,
    updateLeaderById
}