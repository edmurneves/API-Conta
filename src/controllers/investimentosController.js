const express = require('express');
const investimentosService = require('../services/investimentosService');

const investimentosRouter = express.Router();

investimentosRouter.post('/comprar', async (req, res) => {
    const { message } = await investimentosService.createInvestment(req.body);
        
    res.status(200).json({ message });

});

investimentosRouter.post('/vender', async (req, res) => {
    const { message }  = await investimentosService.sellShares(req.body);

    res.status(200).json({ message });

});

module.exports = investimentosRouter;