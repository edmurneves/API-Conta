const connection = require('../db');

const getAll = () => connection.execute('SELECT * FROM desafioXP.ativos');

const getById = (id) => connection
.execute('SELECT * FROM desafioXP.ativos WHERE codAtivo = ?', [id]);

const updateAtivosQtde = async (codAtivo, qtde) => {
    const query = `UPDATE desafioXP.ativos SET qtd = ? WHERE codAtivo = ?;`
    const [result] = await connection.execute(query, [ qtde, codAtivo]);

    return result;
}

module.exports = { getAll, getById, updateAtivosQtde };