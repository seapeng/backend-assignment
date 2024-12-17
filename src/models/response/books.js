
// The name of each response payload should be model name defined in Request model schema.

// The name of each response payload should be  model name defined in Request model schema and should sufix with ResponseModel.

module.exports = {
    createBuilding: {
        201: {
            message: {
                type: 'Successfully created building'
            }
        },
        500: {
            internal: {
                type: 'Server Error'
            }
        }
    }
};