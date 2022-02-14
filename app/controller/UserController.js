'use-strict'

const UserFactory = require("../factory/UserFactory");
const { createUser, getUser } = require("../service/UserService");

class UserController {
    constructor() {}

    async get(request, response){

        const tax_id = request.params.tax_id;

        const { code, message } = await getUser(tax_id);

        if(code === 404) {
            return response.status(404).json(message);
        }

        const user = new UserFactory(message).ResponseFactory();

        return response.status(code).json(user);
    }

    async create(request, response){

        try {
            
            const payload = request.body;
            
            const user = new UserFactory(payload).RequestFactory();
            
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