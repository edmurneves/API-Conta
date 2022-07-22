const connection = require('../db');

const getAll = () => connection.execute('SELECT * FROM desafioXP.ativos');

const getById = (id) => connection
.execute('SELECT * FROM desafioXP.ativos WHERE codAtivo = ?', [id]);

module.exports = { getAll, getById };