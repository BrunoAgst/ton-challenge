'use-strict'

const CounterService = require("../service/CounterService");
class CounterController {
    constructor(){}

    async get(request, response) {
        try {
            
            const { value } = await CounterService.getNumberOfHits();
            response.status(200);
            response.json({ "Number of hits": value });

        } catch (error) {
            console.log(error);
            response.status(503);
            response.json({ message: "Service Unavailable" });
        }
    }

    async update(request, response) {
        try {

            await CounterService.updateNumberOfHits();
            response.status(200);
            response.json({ message: "Update success" });

        } catch (error) {
            console.log(error);
            response.status(503);
            response.json({ message: "Service Unavailable" });
        }
    }
}

module.exports = new CounterController();