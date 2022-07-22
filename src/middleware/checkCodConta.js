const checkCodConta = (req, _res, next) => {
    const { id } = req.params;

    if (id.charAt(0) !== 'c') {
        const error = { status: 404, message: 'Código da conta inválido'}
        throw error;
    }    
    next();
}

module.exports = { checkCodConta };