'use-strict'

const UserFactory = require("../factory/UserFactory");
const UserService = require("../service/UserService");

class UserController {
    constructor() {}

    async get(request, response){

        const tax_id = request.params.tax_id;

        const { code, message } = await UserService.getUser(tax_id);

        if(code === 404) {
            response.status(404);
            response.json(message);
            return
        }

        const user = new UserFactory(message).ResponseFactory();

        response.status(code);
        response.json(user);
        return
    }

    async create(request, response){

        try {
            const payload = request.body;
            
            const user = new UserFactory(payload).RequestFactory();
            
            const { code, message } = await UserService.createUser(user);

            if(code === 400) {
                response.status(code);
                response.json({ message });
                return
            }

            response.status(code);
            response.json({ message });
            
        } catch (error) {
            console.log(error);
            response.status(503);
            response.json({ message: "Service Unavailable" });
        }
    }
}

module.exports = new UserController();