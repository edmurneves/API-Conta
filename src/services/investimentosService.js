const ativosService = require('../services/ativosService');
const contaService = require('../services/contaService');

const createInvestment = async ({codCliente, codAtivo, qtdeAtivo }) => {

    const [ativosCorretora] = await ativosService.getById(codAtivo);
    const [saldoCliente] = await contaService.getById(codCliente);

    let saldo = Number(saldoCliente.saldo);
    let valorCompra = Number(ativosCorretora.valor) * qtdeAtivo;

    console.log(valorCompra);
    

    if (ativosCorretora.qtd < qtdeAtivo) {
        const error = {status: 400, message: 'Não há quantidade de ações suficientes para compra'};
        throw error;
    }

    if (valorCompra > saldo) {
        const error = {status:400, message: 'Saldo insuficiente para efetuar compra'};
        throw error;
    }
   

    console.log(codCliente);
    console.log(codAtivo);
    console.log(qtdeAtivo);
    return codAtivo;

}

module.exports = { createInvestment };