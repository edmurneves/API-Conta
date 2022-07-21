const clientesModel = require('../models/clientesModel');

const getAll = () => {
    return clientesModel.getAll();
}

module.exports = { getAll };