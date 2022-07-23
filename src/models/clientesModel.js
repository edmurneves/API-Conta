const connection = require('../db');

const getAll = () => connection.execute('SELECT * FROM desafioXP.clientes');


const updateSaldoCliente = async (codCliente, saldo) => {
    const query = `UPDATE desafioXP.clientes SET saldo = ? WHERE codCliente = ?;`
    const [result] = await connection.execute(query, [ saldo, codCliente]);

    return result;
}

module.exports = { getAll, updateSaldoCliente };