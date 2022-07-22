const connection = require('../db');

const getById = (id) => connection
.execute('SELECT codCliente, saldo FROM desafioXP.clientes WHERE codCliente = ?', [id]);

const updateSaldo = async (id, valor) => {
    const [result] = await connection
    .execute('Update desafioXP.clientes SET saldo = ? WHERE codCliente = ?;', [valor, id]);        
    return result;
};

module.exports = { getById, updateSaldo };
