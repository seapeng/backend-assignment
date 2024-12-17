const Joi = require('@hapi/joi')

module.exports = {
    // create
    0: {
        body: {
            topic : Joi.string().required(),
            leader_id : Joi.string().required(),
            room_id : Joi.string().required(),
            date : Joi.date().required(),
            start_time : Joi.string().required(),
            end_time : Joi.string().required(),
        },
        model: "createMeeting", // Name of the model
        group: "Meeting", // Swagger tag for apis.
        description: "Create a meeting and save details in database"
    },
    // get all
    1: {
        model: "getMeeting", // Name of the model
        group: "Meeting", // Swagger tag for apis.
        description: "get all meetings from database"
    },
    // get by id
    2: {
        body: "",
        model: "getMeetingById", // Name of the model
        group: "Meeting", // Swagger tag for apis.
        description: "get meeting by id from database"
    },
    // delete by id
    3: {
        // body: {
        //     title: Joi.string().required(),
        //     price: Joi.number().required(),
        //     author: Joi.string().required(),
        // },
        model: "deleteMeetingbyId", // Name of the model
        group: "Meeting", // Swagger tag for apis.
        description: "delete a meeting from database"
    },
    // update by id
    4: {
        body: {
            topic : Joi.string().required(),
            leader_id : Joi.string().required(),
            room_id : Joi.string().required(),
            date : Joi.date().required(),
            start_time : Joi.string().required(),
            end_time : Joi.string().required(),
        },
        model: "updateMeetingById", // Name of the model
        group: "Meeting", // Swagger tag for apis.
        description: "update a meeting to database"
    }
}