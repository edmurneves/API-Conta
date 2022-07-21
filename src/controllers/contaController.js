const express = require('express');
const contaService = require('../services/contaService');

const contaRouter = express.Router();

contaRouter.get('/:id', async (req, res) => {
    const { id } = req.params;    
    const [rows] = await contaService.getById(id);

    if (rows.length === 0) {
        return res.status(404).json({message: 'Conta inexistente'});
    }
    
    res.status(200).json(rows[0]);    
});

contaRouter.post('/saque', async (req, res) => {
    const { codCliente, valor } = req.body;
    console.log(codCliente);
    console.log(valor);
});

module.exports = contaRouter;