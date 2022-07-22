const contaModel = require('../models/contaModel');

const getById = async (id) => {
    const [rows] = await contaModel.getById(id);

    if (rows.length === 0) {
        const error = {status:404, message: 'Conta inexistente' };
        throw error;        
    }
    return rows;
}

const debit = async ({ codCliente, valor }) => {
    const conta = await getById(codCliente);
    const saldo = Number(conta[0].saldo);
    
    if (saldo < valor) {
        const error = {status: 400, message:'Saldo insuficiente para saque'};
        throw error;
    }

    let newSaldo = saldo - valor;

    const result = await contaModel.updateSaldo(codCliente, newSaldo);

    if (result.affectedRows === 0) {
        const error = {status: 400, message: 'Erro ao processar o saque, tente novamente mais tarde.'};
        throw error;
    }
    
    return newSaldo;   

};
const credit = async ({ codCliente, valor }) => {
    const conta = await getById(codCliente);
    const saldo = Number(conta[0].saldo);

    let newSaldo = saldo + valor;

    const result = await contaModel.updateSaldo(codCliente, newSaldo);

    if (result.affectedRows === 0) {
        const error = {status: 400, message: 'Erro ao processar o deposito, tente novamente mais tarde.'};
        throw error;
    }

    return newSaldo;  

}

module.exports = { getById, debit, credit };