const express = require('express');
const clientesService = require('../services/clientesService');

const clientesRouter = express.Router();

clientesRouter.get('/', async (_req, res) => {    
    const [rows] = await clientesService.getAll();
    res.status(200).json(rows);    
});

module.exports = clientesRouter;