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

   
    return codAtivo;

}

module.exports = { createInvestment };