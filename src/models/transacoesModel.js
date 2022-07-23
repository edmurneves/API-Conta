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
const getByClientIdAtivo = async (codCliente, codAtivo) => {

    const query = `SELECT * FROM desafioXP.transacoes WHERE codCliente = ? AND codAtivo = ?;`
    const [result] = await connection.execute(query, [codCliente, codAtivo]);

    return result;
}

const createTransacao = async(codCliente, codAtivo, qdteAtivo) => {
    const query = `INSERT INTO desafioXP.transacoes (codCliente, codAtivo, qtde)
    VALUES	(?, ?, ?);`
    const [result] = await connection.execute(query, [codCliente, codAtivo, qdteAtivo]);

    return result;
}

const updateTransacao = async(codCliente, codAtivo, newQtde) => {

    const query = `UPDATE desafioXP.transacoes SET qtde = ? WHERE codCliente = ? AND codAtivo = ?;`

    const [result] = await connection.execute(query, [newQtde, codCliente, codAtivo ]);

    return result;

}

module.exports = { 
    getAll, 
    getByClientId, 
    getByClientIdAtivo, 
    createTransacao,
    updateTransacao,
 };