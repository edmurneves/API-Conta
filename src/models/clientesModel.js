const connection = require('../db');

const getAll = () => connection.execute('SELECT * FROM desafioXP.clientes');

module.exports = { getAll };