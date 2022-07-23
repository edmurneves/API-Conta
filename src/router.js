const express = require('express');

const contaController = require('./controllers/contaController');
const ativosController = require('./controllers/ativosController');
const investimentosController = require('./controllers/investimentosController');

const transacoesController = require('./controllers/transacoesController');
const clientesController = require('./controllers/clientesController');


const routers = express.Router();
routers.use('/conta', contaController);
routers.use('/ativos', ativosController);
routers.use('/investimentos', investimentosController);

routers.use('/transacoes', transacoesController);
routers.use('/clientes', clientesController);


module.exports = routers