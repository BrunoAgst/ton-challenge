'use-strict'

const UserFactory = require('../factory/UserFactory');
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

            const user = new UserFactory(payload).factory();
            
            const { code, message } = await createUser(user);

            if(code === 400) {
                return response.status(code).json({ message });
            }

            return response.status(code).json({ message });
            
        } catch (error) {
            console.log(error);
            return response.status(503).json({ message: "Service Unavailable" });
        }
    }
}

module.exports = new UserController();