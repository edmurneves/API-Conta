const express = require('express');

const clientesController = require('./controllers/clientesController');
const ativosController = require('./controllers/ativosController');
const transacoesController = require('./controllers/transacoesController');
const contaController = require('./controllers/contaController');


const routers = express.Router();
routers.use('/clientes', clientesController);
routers.use('/ativos', ativosController);
routers.use('/transacoes', transacoesController);
routers.use('/conta', contaController);


module.exports = routers