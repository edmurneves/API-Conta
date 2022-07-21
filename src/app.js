require('express-async-errors');
const express = require('express');

const errorMiddleware = require('../src/middleware/error');

const app = express();

app.use(express.json());

app.use(require('./router'));

app.use(errorMiddleware);


module.exports = app;