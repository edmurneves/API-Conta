const express = require('express');
const investimentosService = require('../services/investimentosService');
const { checkInvestFields }  = require('../middleware/checkInvestFields');

const investimentosRouter = express.Router();

investimentosRouter.post('/comprar', checkInvestFields, async (req, res) => {
    const { message } = await investimentosService.createInvestment(req.body);
        
    res.status(200).json({ message });

});

investimentosRouter.post('/vender', checkInvestFields, async (req, res) => {
    const { message }  = await investimentosService.sellShares(req.body);

    res.status(200).json({ message });

});

module.exports = investimentosRouter;