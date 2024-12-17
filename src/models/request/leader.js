const Joi = require('@hapi/joi')

module.exports = {
    // create
    0: {
        body: {
            sort: Joi.number().required(),
            title : Joi.string().required(),
            fullname : Joi.string().required(),
            position : Joi.string().required(),
        },
        model: "createLeader", // Name of the model
        group: "Leader", // Swagger tag for apis.
        description: "Create a leader and save details in database"
    },
    // get all
    1: {
        model: "getLeader", // Name of the model
        group: "Leader", // Swagger tag for apis.
        description: "get all leaders from database"
    },
    // get by id
    2: {
        body: "",
        model: "getLeaderById", // Name of the model
        group: "Leader", // Swagger tag for apis.
        description: "get leader by id from database"
    },
    // delete by id
    3: {
        // body: {
        //     title: Joi.string().required(),
        //     price: Joi.number().required(),
        //     author: Joi.string().required(),
        // },
        model: "deleteLeaderbyId", // Name of the model
        group: "Leader", // Swagger tag for apis.
        description: "delete a leader from database"
    },
    // update by id
    4: {
        body: {
            sort: Joi.number().required(),
            title : Joi.string().required(),
            fullname : Joi.string().required(),
            position : Joi.string().required(),
        },
        model: "updateLeaderById", // Name of the model
        group: "Leader", // Swagger tag for apis.
        description: "update a leader to database"
    }
}