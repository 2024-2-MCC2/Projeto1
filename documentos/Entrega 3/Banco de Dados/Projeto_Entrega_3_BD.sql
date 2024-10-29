CREATE DATABASE Alianca_Oceanica;
USE Alianca_Oceanica;

CREATE TABLE ONG (
Id_ONG INT AUTO_INCREMENT PRIMARY KEY,
Nome_Da_ONG VARCHAR (100) NOT NULL,
Email_ONG VARCHAR (100),
Telefone_ONG VARCHAR (100),
Endereco_ONG VARCHAR (100)
);

CREATE TABLE Causa (
Id_Causa INT AUTO_INCREMENT PRIMARY KEY,
Nome_Da_Causa VARCHAR (100) NOT NULL
);

CREATE TABLE Filiado (
Id_Filiado INT AUTO_INCREMENT PRIMARY KEY,
Nome_Do_Filiado VARCHAR (100) NOT NULL,
Sobrenome_Do_Filiado VARCHAR (100) NOT NULL,
RG_Do_Filiado VARCHAR (100),
CPF_Do_Filiado VARCHAR (100),
Email_Do_Filiado VARCHAR (100),
Celular_Do_Filiado VARCHAR (100),
CEP_Do_Filiado VARCHAR (100),
Rua_Do_Filiado VARCHAR (100),
Numero_Do_Casa_Do_Filiado VARCHAR (100),
Bairro_Do_Filiado VARCHAR (100),
Cidade_Do_Filiado VARCHAR (100),
Estado_Do_Filiado VARCHAR (100),
Pais_Do_Filiado VARCHAR (100)
);


CREATE TABLE Doacao (
Id_Doacao INT AUTO_INCREMENT PRIMARY KEY,
Id_Filiado INT,
Valor_Da_Doacao DOUBLE NOT NULL,
Forma_Pagamento_Doacao VARCHAR (100),
Data_Da_Doacao DATE,
Hora_Da_Doacao TIME,
Tipo_Da_Doacao VARCHAR (100) CHECK (Tipo_Da_Doacao = "MENSAL" OR Tipo_Da_Doacao = "ESPORADICO"),
FOREIGN KEY (Id_Filiado) REFERENCES Filiado (Id_Filiado)
);

CREATE TABLE ONG_Causa (
Id_ONG INT,
Id_Causa INT,
FOREIGN KEY (Id_ONG) REFERENCES ONG (Id_ONG),
FOREIGN KEY (Id_Causa) REFERENCES Causa (Id_Causa)
);

CREATE TABLE Doacao_Causa (
Id_Doacao INT,
Id_Causa INT,
FOREIGN KEY (Id_Doacao) REFERENCES Doacao (Id_Doacao),
FOREIGN KEY (Id_Causa) REFERENCES Causa (Id_Causa)
);

