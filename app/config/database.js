'use strict'

const { connect, connection } = require("mongoose");

module.exports = () => {
    const url = 'mongodb://localhost:27017/ton';
    connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    connection.once('open', () => { console.log('database connected') });
}