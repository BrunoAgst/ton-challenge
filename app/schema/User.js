'use strict'

const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number
        },
        email: { 
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = model('User', userSchema);