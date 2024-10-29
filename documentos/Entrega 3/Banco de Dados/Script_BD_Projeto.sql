CREATE DATABASE Projeto_Banco_De_Dados;
USE Projeto_Banco_De_Dados;

CREATE TABLE Ong (
Id_Ong INT AUTO_INCREMENT PRIMARY KEY,
Nome_Da_Ong VARCHAR (100) NOT NULL,
Email_Ong VARCHAR (100),
Telefone_Ong VARCHAR (100),
Endereco_Ong VARCHAR (100)
);

CREATE TABLE Causa (
Id_Causa INT AUTO_INCREMENT PRIMARY KEY,
Nome_Da_Causa VARCHAR (100) NOT NULL
);

CREATE TABLE Doacao (
Id_Doacao INT AUTO_INCREMENT PRIMARY KEY,
Valor_Da_Doacao DOUBLE,
Forma_Pagamento_Doacao VARCHAR (100),
Data_Da_Doacao DATE,
Hora_Da_Doacao TIME,
Tipo_Da_Doacao ENUM ('ANUAL''MENSAL''SEMANAL')
);

CREATE TABLE FiliadoPf (
Id_Filiado INT AUTO_INCREMENT PRIMARY KEY,
Nome_Do_Filiado VARCHAR (100) NOT NULL,
Sobrenome_Do_Filiado VARCHAR (100) NOT NULL,
Rg_Do_Filiado VARCHAR (100),
Cpf_Do_Filiado VARCHAR (100),
Email_Do_Filiado VARCHAR (100),
Celular_Do_Filiado VARCHAR (100),
Cep_Do_Filiado VARCHAR (100),
Rua_Do_Filiado VARCHAR (100),
Numero_Do_Casa_Do_Filiado VARCHAR (100),
Bairro_Do_Filiado VARCHAR (100),
Cidade_Do_Filiado VARCHAR (100),
Estado_Do_Filiado VARCHAR (100),
Pais_Do_Filiado VARCHAR (100)
);

CREATE TABLE Ong_Causa (
Id_Ong INT,
Id_Causa INT,
FOREIGN KEY (Id_Ong) REFERENCES Ong (Id_Ong),
FOREIGN KEY (Id_Causa) REFERENCES Causa (Id_Causa)
);

CREATE TABLE Doacao_Causa (
Id_Doacao INT,
Id_Causa INT,
Id_Filiado INT,
FOREIGN KEY (Id_Doacao) REFERENCES Doacao (Id_Doacao),
FOREIGN KEY (Id_Causa) REFERENCES Causa (Id_Causa),
FOREIGN KEY (Id_Filiado) REFERENCES FiliadoPf (Id_Filiado)
);