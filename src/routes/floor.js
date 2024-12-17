const express = require('express')
const {
    createFloor,
    getFloorById,
    getFloor,
    deleteFloorbyId,
    updateFloorById
} = require('../controller/floor.js');
const floorRouter = express.Router();

floorRouter.post('/', createFloor)
floorRouter.get('/', getFloor)
floorRouter.get('/:id', getFloorById)
floorRouter.delete('/:id', deleteFloorbyId)
floorRouter.put('/:id', updateFloorById)

module.exports = floorRouter