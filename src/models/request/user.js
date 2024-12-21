const Joi = require('@hapi/joi')

module.exports = {
    // create
    0: {
        body: {
            firstname: Joi.string().required().default('Sea'),
            lastname: Joi.string().required().default('Peng'),
            email: Joi.string().required().default('seapeng@camfix.net'),
            username: Joi.string().required().default('seapeng'),
            password: Joi.string().required().default('123456'),
            confirmPassword: Joi.string().required().default('123456'),
        },
        model: "createUser", // Name of the model
        group: "User", // Swagger tag for apis.
        description: "Create user and save to database"
    },
    // get all
    1: {
        body: "",
        model: "getUser", // Name of the model
        group: "User", // Swagger tag for apis.
        description: "Get all user from database"
    },
    // get by id
    2: {
        // body: {
        //     title: Joi.string().required(),
        //     price: Joi.number().required(),
        //     author: Joi.string().required(),
        // },
        model: "getUserById", // Name of the model
        group: "User", // Swagger tag for apis.
        description: "Get user by id from database"
    },
    // delete by id
    3: {
        body: "",
        model: "deleteUserbyId", // Name of the model
        group: "User", // Swagger tag for apis.
        description: "Create user and save details in database"
    },
    // update by id
    4: {
        body: {
            firstname: Joi.string().required(),
            lastname: Joi.string().required(),
            email: Joi.string().required(),
            username: Joi.string().required(),
            password: Joi.string().required(),
        },
        model: "updateUserbyId", // Name of the model
        group: "User", // Swagger tag for apis.
        description: "Create user and save details in database"
    }
}