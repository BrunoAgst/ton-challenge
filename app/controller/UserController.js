'use-strict'

class UserController {
    constructor() {}

    async get(request, response){
        return response.status(200).json({
            message: 'ok'
        })
    }

    async create(request, response){
        return response.status(200).json({
            message: 'ok'
        })
    }
}

module.exports = new UserController();