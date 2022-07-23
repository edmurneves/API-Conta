# Desafio Técnico XP - BackEnd

# Contexto
Este desafio consiste na criação de Endpoints (APIs), seguindo as regras de contrato de Back-End.

### Requisições para investimento

#### POST (/investimentos/comprar)

``` 
{
  “codCliente”: integer,	// código do cliente (identificador único)
  “codAtivo”: integer,		// código de identificação única do ativo
  “qtdeAtivo”: integer,	  // quantidade de ações a serem compradas
}
``` 
  O endpoint recebe como entrada o código do ativo, a quantidade de ações compradas, número da conta compradora.
Validação: Quantidade de ativo a ser comprada não pode ser maior que a quantidade disponível na corretora.

#### POST (/investimentos/vender)

``` 
{
  “codCliente”: integer,	// código do cliente (identificador único)
  “codAtivo”: integer,		// código de identificação única do ativo
  “qtdeAtivo”: integer,	   // quantidade de ações a serem compradas
}
``` 

  O endpoint recebe como entrada o código do ativo, a quantidade de ações vendidas, número da conta vendedora.
Validação: Quantidade de ativo a ser vendida não pode ser maior que a quantidade disponível na carteira.

#### GET BY CLIENT (/ativos/{cod-client})

```
{
  “codCliente”: integer,	// código do cliente (identificador único da pessoa cliente)
  “codAtivo”: integer,		// código de identificação única do ativo
  “qtdeAtivo”: integer,	// quantidade de ações que a pessoa cliente possui
  “Valor”: decimal,		// Valor da ação
},
{
  “codCliente”: integer,	// código do cliente (identificador único da pessoa cliente)
  “codAtivo”: integer,		// código de identificação única do ativo
  “qtdeAtivo”: integer,	// quantidade de ações que a pessoa cliente possui
  “Valor”: decimal,		// Valor da ação
},
```

#### GET BY ASSETS (/ativos/{cod-ativo})
```
{
  “codAtivo”: integer,		// código de identificação única do ativo
  “qtdeAtivo”: integer,	// quantidade de ações a serem negociadas
  “Valor”: decimal,		// Valor da unitário da ação a ser negociada
}
```
### Requisições para depósitos e saques

#### POST (/conta/deposito)
```
{
  “codCliente”: integer,	// código do cliente (identificador único)
  “Valor”: decimal,		// Valor do depósito
}
```
Validação: Quantidade a ser depositada não poderá ser negativa ou igual a zero.


#### POST (/conta/saque)
```
{
  “codCliente”: integer,	// código do cliente (identificador único)
  “Valor”: decimal,		// Valor do saque
}
```
Validação: Quantidade a ser sacada não poderá ser maior que o saldo da conta, não pode ser negativa e não pode ser igual a zero.

#### GET (/conta/{cod-cliente})
```
{
  “codCliente”: integer,	// código do cliente (identificador único)
  “Saldo”: decimal,		// Saldo em conta
}
```




## Técnologias usadas

Back-end:
> Desenvolvido usando: NodeJS, ExpressJS, MYSQL, ES6


## Instalando Dependências

> Backend
```bash
cd api/ 
npm install
``` 

## Executando aplicação

* Para rodar o back-end:

  ```
  cd api/ && npm start
  ```
* Para rodar o front-end:

  ```
    cd src/ && npm start
  ```

## Executando Testes

* Para rodar todos os testes:

  ```
    npm test
  ```
