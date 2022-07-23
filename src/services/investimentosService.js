const ativosService = require('../services/ativosService');
const contaService = require('../services/contaService');
const transacoesModel = require('../models/transacoesModel');
const ativosModel = require('../models/ativosModel');
const clientesModel = require('../models/clientesModel');

const createInvestment = async ({codCliente, codAtivo, qtdeAtivo }) => {

    const [ativosCorretora] = await ativosService.getById(codAtivo);
    const [saldoCliente] = await contaService.getById(codCliente);
    const [ativosCliente] = await transacoesModel.getByClientIdAtivo(codCliente, codAtivo);

    let saldo = Number(saldoCliente.saldo);
    let valorCompra = Number(ativosCorretora.valor) * qtdeAtivo; 
      

    if (ativosCorretora.qtd < qtdeAtivo) {
        const error = {status: 400, message: 'Não há quantidade de ações suficientes para compra'};
        throw error;
    }

    if (valorCompra > saldo) {
        const error = {status:400, message: 'Saldo insuficiente para efetuar compra'};
        throw error;
    }

    if (ativosCliente === undefined) {
        await transacoesModel.createTransacao(codCliente, codAtivo, qtdeAtivo);
        
    } else {
        newQtde = ativosCliente.qtde + qtdeAtivo;
        await transacoesModel.updateTransacao(codCliente, codAtivo, newQtde);        
    }

    let newAtivosCorretora = Number(ativosCorretora.qtd - qtdeAtivo);
    await ativosModel.updateAtivosQtde(codAtivo, newAtivosCorretora );

    let newSaldoCliente = saldo - valorCompra;
    await clientesModel.updateSaldoCliente(codCliente, newSaldoCliente);
   
    const status = { message: 'Transação efetuada com sucesso'}
    return status;  

}

const sellShares = async ({codCliente, codAtivo, qtdeAtivo }) => {

    const [ativosCliente] = await transacoesModel.getByClientIdAtivo(codCliente, codAtivo);
    const [ativosCorretora] = await ativosService.getById(codAtivo);
    const [saldoCliente] = await contaService.getById(codCliente);

    let valorVenda = Number(ativosCorretora.valor) * qtdeAtivo;
    let saldo = Number(saldoCliente.saldo); 

    if (ativosCliente.qtde < qtdeAtivo) {
        const error = {status: 400, message: 'A quantidade de ações informada é maior que a disponível na carteira' };
        throw error;
    }

    let newAtivosCorretora = Number(ativosCorretora.qtd + qtdeAtivo);
    await ativosModel.updateAtivosQtde(codAtivo, newAtivosCorretora );

    newQtde = ativosCliente.qtde - qtdeAtivo;
    await transacoesModel.updateTransacao(codCliente, codAtivo, newQtde);

    let newSaldoCliente = saldo + valorVenda;
    await clientesModel.updateSaldoCliente(codCliente, newSaldoCliente);
    
    const status = { message: 'Transação efetuada com sucesso'}
    return status;    

}

module.exports = { createInvestment, sellShares };