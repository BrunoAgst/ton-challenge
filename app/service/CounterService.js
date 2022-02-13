'use-strict'

const axios = require("axios");

const { GETNUMBEROFHITS, UPDATENUMBEROFHITS} = require("../util/EnumURL");

class CounterService {
    constructor(){}

    async getNumberOfHits(){
        const url = GETNUMBEROFHITS;
        const { data } = await axios.get(url);
        return data;
    }

    async updateNumberOfHits(){
        const url = UPDATENUMBEROFHITS;
        return await axios.get(url);
    }
}

module.exports = new CounterService();