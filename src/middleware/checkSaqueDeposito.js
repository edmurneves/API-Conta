const checkSaqueDeposito = (req, res, next) => {
    const { codCliente, valor } = req.body;

    if (!codCliente) {
        return res.status(400).json({message: '"Campos codCliente" são obrigatórios'});
    }
    if (valor <= 0 || !valor) {
        return res.status(422).json({message: 'Campo "valor" é obrigatório e não pode ser menor ou igual a zero'});
    }
    next();
}

module.exports = { checkSaqueDeposito };