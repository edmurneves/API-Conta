const checkInvestFields = (req, res, next) => {
    const { codCliente, codAtivo, qtdeAtivo } = req.body;

    if (!codCliente) {
        return res.status(400).json({message: '"Campo codCliente" é obrigatórios'});        
    }

    if (!codAtivo) {
        return res.status(400).json({message: '"Campo codAtivo" é obrigatórios'});
    }

    if (qtdeAtivo <= 0 || !qtdeAtivo) {
        return res.status(422).json({message: 'Campo "qtde" é obrigatório e não pode ser menor ou igual a zero'});
    }
    next();
}

module.exports = { checkInvestFields };