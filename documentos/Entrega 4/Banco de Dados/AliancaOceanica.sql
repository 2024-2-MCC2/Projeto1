create DATABASE AliancaOceanica;
use AliancaOceanica;

create table Noticias(
id INT primary key AUTO_INCREMENT,
Titulo varchar(255) not null,
Entidade varchar(255) not null,
Autor varchar(255) not null,
Data datetime not null,
TempoDeLeitura int not null,
Chamada varchar(255) not null,
LinkURL varchar(255) not null,
Referencia varchar(255) not null,
Texto varchar(255) not null,
Imagem varchar(255) not null
);
create table Animais(
id INT primary key AUTO_INCREMENT,
Nome varchar(255) not null, 
Nome_Cientifico varchar(255) not null, 
Localizacao varchar(255) not null, 
Populacao varchar(255) not null, 
Peso varchar(255) not null, 
Comprimento varchar(255) not null, 
Habitat varchar(255) not null, 
Ameacas varchar(255) not null, 
Importancia varchar(255) not null, 
imagem_Animal varchar(255) not null, 
imagem_Habitat varchar(255) not null
);