'use-strict'

class CounterController {
    constructor(){}

    async get(request, response) {
        return response.status(200).json({
            message: 'ok'
        })
    }

    async update(request, response) {
        return response.status(200).json({
            message: 'ok'
        })
    }
}

module.exports = new CounterController();