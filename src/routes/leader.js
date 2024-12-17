const express = require('express')
const { 
    createLeader,
    getLeader,
    getLeaderById,
    deleteLeaderbyId,
    updateLeaderById
} = require('../controller/leader.js')

const leaderRouter = express.Router();

leaderRouter.post('/', createLeader)
leaderRouter.get('/', getLeader)
leaderRouter.get('/:id', getLeaderById)
leaderRouter.delete('/:id', deleteLeaderbyId)
leaderRouter.put('/:id', updateLeaderById)


module.exports = leaderRouter