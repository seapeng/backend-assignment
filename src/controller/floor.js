const asyncHandler = require('express-async-handler')
const FloorModel = require('../models/floor.js')

const createFloor = asyncHandler(async (req, res) => {
    const floor = new FloorModel(req.body)
    const result = await floor.save()
    return res.json(result)
})

const getFloorById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const floor = await FloorModel.findById(id)
    return res.json(floor)
})

const getFloor = asyncHandler(async (req, res) => {
    console.log(req.user)
    const floor = await FloorModel.find()
    return res.json(floor)
})

const deleteFloorbyId = asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = await FloorModel.deleteOne({ _id: id })
    return res.json(result)
})

const updateFloorById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = await FloorModel.updateOne({ _id: id }, req.body)
    return res.json(result)
})

module.exports = {
    createFloor,
    getFloorById,
    getFloor,
    deleteFloorbyId,
    updateFloorById
}