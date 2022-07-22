const express = require('express');
const { checkSaqueDeposito } = require('../middleware/checkSaqueDeposito');
const contaService = require('../services/contaService');

const contaRouter = express.Router();

contaRouter.get('/:id', async (req, res) => {
    const { id } = req.params;    
    const rows = await contaService.getById(id);   
    
    res.status(200).json(rows[0]);    
});

contaRouter.post('/saque', checkSaqueDeposito, async (req, res) => {   
    
    const newSaldo = await contaService.debit(req.body);
    
    return res.status(200).json({message: `Saque efetuado com sucesso!, Seu saldo atual é de e ${newSaldo} Reais`});
});

module.exports = contaRouter;