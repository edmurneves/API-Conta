const express = require('express');
const ativosService = require('../services/ativosService');

const ativosRouter = express.Router();

ativosRouter.get('/', async (_req, res) => {    
    const [rows] = await ativosService.getAll();
    res.status(200).json(rows);    
});

module.exports = ativosRouter;