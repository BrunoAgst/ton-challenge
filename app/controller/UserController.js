'use-strict'

const { createUser } = require('../service/UserService');

class UserController {
    constructor() {}

    async get(request, response){
        return response.status(200).json({
            message: 'ok'
        })
    }

    async create(request, response){

        try {
            
            const payload = request.body;
            
            const { code, message } = await createUser(payload);

            if(code === 400) {
                return response.status(code).json({ message: message });
            }

            return response.status(200).json({
                message: 'created success'
            })
            
        } catch (error) {
            console.log(error);
            return response.status(503).json({ message: "Service Unavailable" });
        }
    }
}

module.exports = new UserController();