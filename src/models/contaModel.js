const connection = require('../db');

const getById = (id) => connection
.execute('SELECT codCliente, saldo FROM desafioXP.clientes WHERE codCliente = ?', [id]);


module.exports = { getById };