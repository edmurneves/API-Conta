const connection = require('../db');

const getById = async (email, password) => {
    const query = `SELECT * FROM desafioXP.clientes WHERE email = ? AND pwd = ?`;
    const [result] = await connection.execute(query, [email, password]);

    return result;
};

module.exports = { getById };