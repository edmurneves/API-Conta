const express = require('express');
const authenticateMiddleware = require('./middleware/auth');

const contaController = require('./controllers/contaController');
const ativosController = require('./controllers/ativosController');
const investimentosController = require('./controllers/investimentosController');

const transacoesController = require('./controllers/transacoesController');
const clientesController = require('./controllers/clientesController');
const loginController = require('./controllers/loginController');


const routers = express.Router();
routers.use('/conta', authenticateMiddleware, contaController);
routers.use('/ativos', ativosController);
routers.use('/investimentos', investimentosController);

routers.use('/transacoes', transacoesController);
routers.use('/clientes', clientesController);
routers.use('/login', loginController);


module.exports = routers