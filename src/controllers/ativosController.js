const express = require('express');
const ativosService = require('../services/ativosService');
const transacoesService = require('../services/transacoesService');

const ativosRouter = express.Router();

ativosRouter.get('/', async (_req, res) => {    
    const [rows] = await ativosService.getAll();
    res.status(200).json(rows);    
});

ativosRouter.get('/:id', async (req, res) => {
    const { id } = req.params;

    if (id.charAt(0) === 'a') {
        const rows = await ativosService.getById(id.charAt(1));
        res.status(200).json(rows[0]);        
    } else if (id.charAt(0) === 'c') {
        const rows = await transacoesService.getByClientId(id.charAt(1));
        res.status(200).json(rows);
    } else {
        res.status(404).json({message: 'Código de "Ativo ou Cliente" inválido'})
    }
    
});

module.exports = ativosRouter;