const express = require('express')
const { 
    createBuilding,
    getBuilding,
    getBuildingById,
    deleteBuildingbyId,
    updateBuildingById,
} = require('../controller/building.js')

const buildingRouter = express.Router();

buildingRouter.post('/', createBuilding)
buildingRouter.get('/', getBuilding)
buildingRouter.get('/:id', getBuildingById)
buildingRouter.delete('/:id', deleteBuildingbyId)
buildingRouter.put('/:id', updateBuildingById)

module.exports = buildingRouter