const express = require('express');
const investimentosService = require('../services/investimentosService');

const investimentosRouter = express.Router();

investimentosRouter.post('/comprar', async (req, res) => {
    const newInvestment = await investimentosService.createInvestment(req.body);
        
    res.status(200).json(newInvestment);

});

module.exports = investimentosRouter;