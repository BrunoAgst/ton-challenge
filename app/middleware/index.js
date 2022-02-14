'use strict'

const requestUserJoi = require("../../app/schema/RequestUserJoi");

module.exports = {
    create: (request, response, next) => {
        const { error } = requestUserJoi.validate(request.body);

        if(error){
            response.status(400);
            response.json({ error: error.details[0].message });
            return
        }

        next();
    }
}