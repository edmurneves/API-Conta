const transacoesModel = require('../models/transacoesModel');

const getAll = () => {
    return transacoesModel.getAll();
}

const getByClientId = async (id) => {
    const rows = await transacoesModel.getByClientId(id);     

    if (rows.length === 0) {
        const error = {status:404, message: 'Este cliente não possui ações!' };
        throw error;        
    }

    return rows;

}

module.exports = { getAll, getByClientId };