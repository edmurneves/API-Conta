const transacoesModel = require('../models/transacoesModel');

const getAll = () => {
    return transacoesModel.getAll();
}

module.exports = { getAll };