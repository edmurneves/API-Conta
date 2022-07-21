const express = require('express');

const clientesController = require('./controllers/clientesController');

const routers = express.Router();
routers.use('/clientes', clientesController);

module.exports = routers