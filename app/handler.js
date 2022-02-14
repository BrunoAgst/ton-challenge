'use-strict'

require('dotenv').config();
require("./config/database")();

const serverless = require("serverless-http");
const express = require("express");
const app = express();

const CounterController = require('./controller/CounterController');
const UserController = require('./controller/UserController');

app.use(express.json());

app.get("/v1/counter", CounterController.get);
app.put("/v1/counter", CounterController.update);
app.get("/v1/user/:tax_id", UserController.get);
app.post("/v1/user", UserController.create);

module.exports.handler = serverless(app);