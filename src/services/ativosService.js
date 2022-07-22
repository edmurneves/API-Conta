const ativosModel = require('../models/ativosModel');

const getAll = () => {
    return ativosModel.getAll();
}

const getById = async (id) => {
    const [rows] = await ativosModel.getById(id);

    if (rows.length === 0) {
        const error = {status:404, message: 'Ativo inexistente' };
        throw error;        
    }
    return rows;
}

module.exports = { getAll, getById };