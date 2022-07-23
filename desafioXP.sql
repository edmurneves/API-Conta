DROP DATABASE IF EXISTS desafioXP;
CREATE DATABASE desafioXP;
USE desafioXP;

CREATE TABLE desafioXP.ativos (
    codAtivo INT AUTO_INCREMENT PRIMARY KEY,
    acao VARCHAR(100) NOT NULL,
    qtd INT NOT NULL,
    valor DECIMAL(10 , 2 ) NOT NULL
)  ENGINE=INNODB;

INSERT INTO desafioXP.ativos (acao, qtd, valor)
VALUES
	('XPTO1', 100, 50.00),
    	('XPTO4', 75, 100.00),
    	('XABLAU5', 25, 300.00),
    	('PETR4', 200, 50.00);

CREATE TABLE desafioXP.clientes (
    codCliente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    pwd VARCHAR(100) NOT NULL,
    saldo DECIMAL(10, 2 ) NOT NULL
)  ENGINE=INNODB;

INSERT INTO desafioXP.clientes (nome, email, pwd, saldo)
VALUES
	('Edmur', 'edmur@gmail.com','123456', 1000.00),
	('Regiane', 'regiane@gmail.com','123456', 1500.00),
	('Hanry', 'hanry@gmail.com','123456', 1900.00),
	('Aparecido', 'cido@gmail.com','123456', 2000.00);
	

CREATE TABLE desafioXP.transacoes (    
    codCliente INT NOT NULL,
    codAtivo INT NOT NULL,
    qtde INT NOT NULL,   
    FOREIGN KEY (codCliente) REFERENCES clientes(codCliente),
	FOREIGN KEY (codAtivo) REFERENCES ativos(codAtivo),
    CONSTRAINT PRIMARY KEY (codCliente, codAtivo)	
)  ENGINE=INNODB;

INSERT INTO desafioXP.transacoes (codCliente, codAtivo, qtde)
VALUES
	(1, 1, 10),
	(2, 2, 15),
	(3, 3, 20),
	(2, 3, 10),
	(2, 3, 15);

CREATE TABLE desafioXP.logtransacoes (
    codTrans INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(10) NOT NULL,
    historico DATETIME NOT NULL,
    codCliente INT NOT NULL,
    codAtivo INT NOT NULL,
    qtde INT NOT NULL    
)  ENGINE=INNODB;

INSERT INTO desafioXP.logtransacoes (tipo, historico, codCliente, codAtivo, qtde)
VALUES
	('compra', '2022-07-15 10:45:55', 1, 1, 10),
	('compra', '2022-07-15 10:50:55', 2, 2, 15),
	('compra', '2022-07-15 10:55:55', 3, 3, 20),
	('venda', '2022-07-15 12:20:55', 2, 3, 10),
	('venda', '2022-07-15 12:50:55', 2, 3, 15);

	