const serverless = require("serverless-http");
const express = require("express");
const app = express();

const CounterController = require('./controller/CounterController');
const UserController = require('./controller/UserController');

app.get("/counter", CounterController.get);
app.put("/counter", CounterController.update);
app.get("/user", UserController.get);
app.post("/user", UserController.create);

module.exports.handler = serverless(app);
