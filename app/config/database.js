'use strict'

const { connect, connection } = require("mongoose");

module.exports = () => {
    const url = process.env.DB_HOST;
    connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    connection.once('open', () => { console.log('database connected') });
}