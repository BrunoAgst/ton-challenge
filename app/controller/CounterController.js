'use-strict'

const { getNumberOfHits, updateNumberOfHits } = require('../service/CounterService');
class CounterController {
    constructor(){}

    async get(request, response) {
        try {
            const { value } = await getNumberOfHits();
            return response.status(200).json({ "Number of hits": value });
        } catch (error) {
            console.log(error);
            return response.status(503).json({ message: "Service Unavailable" });
        }
    }

    async update(request, response) {
        try {
            await updateNumberOfHits();
            return response.status(200).json({ message: "Update success" });
        } catch (error) {
            console.log(error);
            return response.status(503).json({ message: "Service Unavailable" });
        }
    }
}

module.exports = new CounterController();