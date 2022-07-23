# Desafio Técnico XP - BackEnd

# Contexto
Este desafio consiste na criação de Endpoints (APIs), seguindo as regras de contrato de Back-End.  
O desenvolvimento seguiu a arquitetura utilizando o conceito de camadas MSC - Models, Services e Controllers. Separando as responsabilidades em:  
> **Controllers:** Responsável pelo recebimento das requisições e validações da entrada de dados (req.body, req.params, authorization etc).  
> **Service:** Responsável pelas regras de negócio e validações mais específicas.  
> **Models:** Responsável pelas requisições ao Banco de Dados.



### Requisições para investimento

#### *POST (/investimentos/comprar)*

``` 
{
  “codCliente”: integer,	// código do cliente (identificador único)
  “codAtivo”: integer,		// código de identificação única do ativo
  “qtdeAtivo”: integer,	  // quantidade de ações a serem compradas
}
``` 
  O endpoint recebe como entrada o código do ativo, a quantidade de ações compradas, número da conta compradora.
Validação: Quantidade de ativo a ser comprada não pode ser maior que a quantidade disponível na corretora.

#### *POST (/investimentos/vender)*

``` 
{
  “codCliente”: integer,	// código do cliente (identificador único)
  “codAtivo”: integer,		// código de identificação única do ativo
  “qtdeAtivo”: integer,	   // quantidade de ações a serem compradas
}
``` 

  O endpoint recebe como entrada o código do ativo, a quantidade de ações vendidas, número da conta vendedora.
Validação: Quantidade de ativo a ser vendida não pode ser maior que a quantidade disponível na carteira.

#### *GET BY CLIENT (/ativos/{cod-client})*

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

#### *GET BY ASSETS (/ativos/{cod-ativo})*
```
{
  “codAtivo”: integer,		// código de identificação única do ativo
  “qtdeAtivo”: integer,	// quantidade de ações a serem negociadas
  “Valor”: decimal,		// Valor da unitário da ação a ser negociada
}
```
### Requisições para depósitos e saques

#### *POST (/conta/deposito)*
```
{
  “codCliente”: integer,	// código do cliente (identificador único)
  “Valor”: decimal,		// Valor do depósito
}
```
Validação: Quantidade a ser depositada não poderá ser negativa ou igual a zero.


#### *POST (/conta/saque)*
```
{
  “codCliente”: integer,	// código do cliente (identificador único)
  “Valor”: decimal,		// Valor do saque
}
```
Validação: Quantidade a ser sacada não poderá ser maior que o saldo da conta, não pode ser negativa e não pode ser igual a zero.

#### *GET (/conta/{cod-cliente})*
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
#### Clone o repositório abaixo  para o seu ambiente:
``` 
git clone git@github.com:edmurneves/desafioXP.git
``` 
#### Acesse o diretorio e faça a instalação das dependências com o comanndo abaixo
```bash
cd api/ 
npm install
``` 
#### Neste projeto foi utilizado um banco de dados MySQL - Seguindo a estrutura de tabelas abaixo.

![image](https://user-images.githubusercontent.com/90069492/180620039-6185ad04-9394-4288-9e91-8378f9fb1b45.png)


#### Execute o script do arquivo que se encontra na raiz do projeto para criar o banco de dados da aplicação. 
#### Utilize o MySQL WorkBench para rodar o script ou rode direto no CLI do MySQL
``` 
desafioXP.sql
``` 
Configure o arquivo .env com as variáveis do seu ambiente (credenciais do BD e Porta da aplicação)
A aplicação está rodando por padrão na Porta 3000 e o BD na Porta padrão 3306

## Executando aplicação

* Para rodar o back-end:

  ```
  npm run dev
  ```
* Para simular as requisições (GET /POST) do front-end, sugerimos o uso do Postman ou Insomia:
```
https://www.postman.com/
https://insomnia.rest/
```


