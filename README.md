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
### Exemplos de execução utilizando o POSTMAN  
```
Rota http://localhost:3000/conta/c1    //c1 representa cliente 1, c2 cliente 2 etc..
Retorna o saldo da conta do cliente
Caso a conta não exista é retornada a mensagem "conta inexistente".

```
![image](https://user-images.githubusercontent.com/90069492/180653450-44c0d50d-3447-41b3-a2c2-fbf6e1ac72d3.png)

```
Rota http://localhost:3000/ativos/c1    //c1 representa cliente 1, c2 cliente 2 etc..
Retorna os ativos que o cliente possui com suas respectivas quantidades

```
![image](https://user-images.githubusercontent.com/90069492/180654139-05d26bab-3918-4231-b016-340ecd5d4fe6.png)

```
Rota http://localhost:3000/ativos/a1    //a1 representa o ativo 1 e suas informações.
Retorna as informações relativas ao ativo da corretora.

```
![image](https://user-images.githubusercontent.com/90069492/180654278-47ccb9b0-2e56-4e57-a6d7-6bf03c18b8f2.png)

```
Rota http://localhost:3000/investimentos/comprar  // recebe um requisição com os dados informados no body (imagem abaixo).
Caso todas as regras de negócio sejam cumpridas, retorna a mensagem "Transação efetuada com sucesso"

```
![image](https://user-images.githubusercontent.com/90069492/180654376-6f7b7af7-3488-44c3-bef1-65921c86be04.png)

```
Rota http://localhost:3000/investimentos/vender  // recebe um requisição com os dados informados no body (imagem abaixo).
Caso todas as regras de negócio sejam cumpridas, retorna a mensagem "Transação efetuada com sucesso"

```
![image](https://user-images.githubusercontent.com/90069492/180654685-70517c8c-cbd0-448e-993a-800cf2ca8bd5.png)

```
Rota http://localhost:3000/conta/saque  // recebe um requisição com os dados informados no body (imagem abaixo).
Caso todas as regras de negócio sejam cumpridas, retorna a mensagem "Saque efetuado com sucesso! Seu saldo atual é de XXXX.XX Reais"

```
![image](https://user-images.githubusercontent.com/90069492/180654879-ec0f17ce-100d-4c33-8211-aa0b475c15a9.png)

```
Rota http://localhost:3000/conta/deposito  // recebe um requisição com os dados informados no body (imagem abaixo).
Caso todas as regras de negócio sejam cumpridas, retorna a mensagem "Deposito efetuado com sucesso! Seu saldo atual é de XXXX.XX Reais"

```
![image](https://user-images.githubusercontent.com/90069492/180655012-d877954c-fd6b-4e51-b16b-83c1f8661bc2.png)










