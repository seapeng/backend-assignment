const asyncHandler = require('express-async-handler')
const BuildingModel = require('../models/building.js')

const createBuilding = asyncHandler(async (req, res) => {
    const building = new BuildingModel(req.body)
    const result = await building.save()
    return res.json(result)
})

const getBuilding = asyncHandler(async (req, res) => {
    // console.log(req.user)
    const result = await BuildingModel.find()
    // const books = await BookModel.paginate({
    //     price:{$gte: 50, $lte: 100}
    // })
    return res.json(result)
})

const getBuildingById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = await BuildingModel.findById(id)
    return res.json(result)
})



const deleteBuildingbyId = asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = await BuildingModel.deleteOne({ _id: id })
    return res.json(result)
})

const updateBuildingById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = await BuildingModel.updateOne({ _id: id }, req.body)
    return res.json(result)
})

module.exports = {
    createBuilding,
    getBuilding,
    getBuildingById,
    deleteBuildingbyId,
    updateBuildingById
}