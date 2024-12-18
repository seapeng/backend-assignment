const express = require('express')
const { 
    createMeeting,
    getMeeting,
    getMeetingById,
    deleteMeetingbyId,
    updateMeetingById
} = require('../controller/meeting.js')

const meetingRouter = express.Router();

meetingRouter.post('/', createMeeting)
meetingRouter.get('/', getMeeting)
meetingRouter.get('/:id', getMeetingById)
meetingRouter.delete('/:id', deleteMeetingbyId)
meetingRouter.put('/:id', updateMeetingById)


module.exports = meetingRouter