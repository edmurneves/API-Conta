const express = require('express');
const { checkCodConta } = require('../middleware/checkCodConta');
const { checkSaqueDeposito } = require('../middleware/checkSaqueDeposito');
const contaService = require('../services/contaService');

const contaRouter = express.Router();

contaRouter.get('/', (req, res) => {
    res.status(404).json({message: 'Necessário informar uma conta'});
});

contaRouter.get('/:id', checkCodConta, async (req, res) => {
    const { id } = req.params;   
   
    const rows = await contaService.getById(id.charAt(1));   
    
    res.status(200).json(rows[0]);    
});

contaRouter.post('/saque', checkSaqueDeposito, async (req, res) => {   
    const newSaldo = await contaService.debit(req.body);
    
    return res.status(200).json({message: `Saque efetuado com sucesso! Seu saldo atual é de ${newSaldo} Reais`});
});

contaRouter.post('/deposito', checkSaqueDeposito, async (req, res) => {    
    const newSaldo = await contaService.credit(req.body);
    
    return res.status(200).json({message: `Deposito efetuado com sucesso! Seu saldo atual é de ${newSaldo} Reais`});
});


module.exports = contaRouter;