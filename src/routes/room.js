const express = require('express')
const { 
    createRoom,
    getRoom,
    getRoomById,
    deleteRoombyId,
    updateRoomById
} = require('../controller/room.js')

const roomRouter = express.Router();

roomRouter.post('/', createRoom)
roomRouter.get('/', getRoom)
roomRouter.get('/:id', getRoomById)
roomRouter.delete('/:id', deleteRoombyId)
roomRouter.put('/:id', updateRoomById)


module.exports = roomRouter