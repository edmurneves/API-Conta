const connection = require('../db');

const getAll = () => connection.execute('SELECT * FROM desafioXP.transacoes');

const getByClientId = async (id) => {

    const query = `SELECT t.codCliente, t.codAtivo, t.qtde as qtdeAtivo, a.valor AS valor
    FROM desafioXP.transacoes AS t
    INNER JOIN desafioXP.ativos AS a ON t.codAtivo = a.codAtivo
    WHERE codCliente = ?;`
    
    const [result] = await connection.execute(query, [id]);
        
    return result;
}

module.exports = { getAll, getByClientId };