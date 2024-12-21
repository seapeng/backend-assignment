const Joi = require('@hapi/joi');

module.exports = {
  // signup
  0: {
    body: {
      firstname: Joi.string().required().default('Sea'),
      lastname: Joi.string().required().default('Peng'),
      email: Joi.string().required().default('seapeng@camfix.net'),
      username: Joi.string().required().default('seapeng'),
      password: Joi.string().required().default('123456'),
      confirmPassword: Joi.string().required().default('123456'),
    },
    model: 'signUp', // Name of the model
    group: 'Authentication', // Swagger tag for apis.
    description: 'Sign up user',
  },
  1: {
    body: {
      email: Joi.string().required().default('seapeng@camfix.net'),
      password: Joi.string().required().default('123456'),
    },
    model: 'login', // Name of the model
    group: 'Authentication', // Swagger tag for apis.
    description: 'Login to user',
  },
  2: {
    group: 'Authentication',
  },
  3: {
    group: 'Authentication',
  },
  4: {
    group: 'Authentication',
  },
  5: {
    group: 'Authentication',
  },
};
