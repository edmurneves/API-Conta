const contaModel = require('../models/contaModel');

const getById = async (id) => {
    return contaModel.getById(id);
}

module.exports = { getById };