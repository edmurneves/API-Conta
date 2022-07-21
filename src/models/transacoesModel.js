const connection = require('../db');

const getAll = () => connection.execute('SELECT * FROM desafioXP.transacoes');

module.exports = { getAll };