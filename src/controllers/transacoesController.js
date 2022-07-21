const express = require('express');
const transacoesService = require('../services/transacoesService');

const transacoesRouter = express.Router();

transacoesRouter.get('/', async (_req, res) => {    
    const [rows] = await transacoesService.getAll();
    res.status(200).json(rows);    
});

module.exports = transacoesRouter;