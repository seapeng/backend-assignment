const Joi = require('@hapi/joi')

module.exports = {
    // create
    0: {
        body: {
            sort: Joi.number().required(),
            name : Joi.string().required(),
            floor_id : Joi.string().required(),
            building_id : Joi.string().required(),
        },
        model: "createRoom", // Name of the model
        group: "Room", // Swagger tag for apis.
        description: "Create a room and save details in database"
    },
    // get all
    1: {
        model: "getRoom", // Name of the model
        group: "Room", // Swagger tag for apis.
        description: "get all rooms from database"
    },
    // get by id
    2: {
        body: "",
        model: "getRoomById", // Name of the model
        group: "Room", // Swagger tag for apis.
        description: "get room by id from database"
    },
    // delete by id
    3: {
        // body: {
        //     title: Joi.string().required(),
        //     price: Joi.number().required(),
        //     author: Joi.string().required(),
        // },
        model: "deleteRoombyId", // Name of the model
        group: "Room", // Swagger tag for apis.
        description: "delete a room from database"
    },
    // update by id
    4: {
        body: {
            sort: Joi.number().required(),
            name : Joi.string().required(),
            floor_id : Joi.string().required(),
            building_id : Joi.string().required(),
        },
        model: "updateRoomById", // Name of the model
        group: "Room", // Swagger tag for apis.
        description: "update a room to database"
    }
}