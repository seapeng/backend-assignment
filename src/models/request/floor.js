const Joi = require('@hapi/joi')

module.exports = {
    // create
    0: {
        body: {
            sort: Joi.number().required(),
            name : Joi.string().required(),
        },
        model: "createFloor", // Name of the model
        group: "Floor", // Swagger tag for apis.
        description: "Create a floor and save details in database"
    },
    // get all
    1: {
        model: "getFloor", // Name of the model
        group: "Floor", // Swagger tag for apis.
        description: "get all floors from database"
    },
    // get by id
    2: {
        body: "",
        model: "getFloorById", // Name of the model
        group: "Floor", // Swagger tag for apis.
        description: "get floor by id from database"
    },
    // delete by id
    3: {
        // body: {
        //     title: Joi.string().required(),
        //     price: Joi.number().required(),
        //     author: Joi.string().required(),
        // },
        model: "deleteFloorbyId", // Name of the model
        group: "Floor", // Swagger tag for apis.
        description: "delete a floor from database"
    },
    // update by id
    4: {
        body: {
            sort: Joi.number().required(),
            name : Joi.string().required(),
        },
        model: "updateFloorById", // Name of the model
        group: "Floor", // Swagger tag for apis.
        description: "update a floor to database"
    }
}