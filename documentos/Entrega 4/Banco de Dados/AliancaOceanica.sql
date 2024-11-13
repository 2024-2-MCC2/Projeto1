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

INSERT INTO Noticias (Titulo, Entidade, Autor, Data, TempoDeLeitura, Chamada, LinkURL, Referencia, Texto, Imagem) VALUES
(
"Navio do Greenpeace resgata baleia presa em equipamentos de pesca",
"Greenpeace", 
"Laís Modelli", 
2023-11-07, 
2, 
"Mais de 300 mil golfinhos e baleias morrem todos os anos ao se prenderem em emaranhados da indústria pesqueira. É inaceitável que atividades econômicas prosperem às custas de vidas.", "https://www.greenpeace.org/brasil/blog/navio-do-greenpeace-resgata-baleia-jubarte-presa-em-equipamentos-de-pesca/", 
"GREENPEACE. Navio do Greenpeace resgata baleia jubarte presa em equipamentos de pesca. Disponível em: https://www.greenpeace.org/brasil/blog/navio-do-greenpeace-resgata-baleia-jubarte-presa-em-equipamentos-de-pesca/. Acesso em: 24 set. 2024.", 
"uploads/Navio do Greenpeace resgata baleia presa em equipamentos de pesca.txt", 
"uploads/Noticia_1"
);

Select * FROM Noticias;
Select * FROM Animais;