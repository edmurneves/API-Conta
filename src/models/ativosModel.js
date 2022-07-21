const connection = require('../db');

const getAll = () => connection.execute('SELECT * FROM desafioXP.ativos');

module.exports = { getAll };