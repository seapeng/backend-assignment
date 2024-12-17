const Joi = require('@hapi/joi')

module.exports = {
    // create
    0: {
        body: {
            sort: Joi.number().required(),
            name: Joi.string().required(),
        },
        model: "createBuilding", // Name of the model
        group: "Building", // Swagger tag for apis.
        description: "Create building and save to database"
    },
    // get all
    1: {
        body: "",
        model: "getBuilding", // Name of the model
        group: "Building", // Swagger tag for apis.
        description: "Get all buildings from database"
    },
    // get by id
    2: {
        // body: {
        //     title: Joi.string().required(),
        //     price: Joi.number().required(),
        //     author: Joi.string().required(),
        // },
        model: "getBuildingById", // Name of the model
        group: "Building", // Swagger tag for apis.
        description: "Get building by id from database"
    },
    // delete by id
    3: {
        body: "",
        model: "deleteBuildingbyId", // Name of the model
        group: "Building", // Swagger tag for apis.
        description: "Create building and save details in database"
    },
    // update by id
    4: {
        body: {
            sort: Joi.number().required(),
            name: Joi.string().required(),
        },
        model: "updateBuildingbyId", // Name of the model
        group: "Building", // Swagger tag for apis.
        description: "Create building and save details in database"
    }
}