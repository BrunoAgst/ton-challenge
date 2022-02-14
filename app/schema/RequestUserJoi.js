'use strict'

const Joi = require("joi");

module.exports = Joi.object({
    name: Joi.string().required(),
    age: Joi.number(),
    email: Joi.string().required(),
    tax_id: Joi.string().required()
})
