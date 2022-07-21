const ativosModel = require('../models/ativosModel');

const getAll = () => {
    return ativosModel.getAll();
}

module.exports = { getAll };