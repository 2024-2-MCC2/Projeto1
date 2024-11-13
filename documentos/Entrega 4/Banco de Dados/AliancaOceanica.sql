create DATABASE AliancaOceanica;
use AliancaOceanica;

create table Noticias(
id INT primary key AUTO_INCREMENT,
Titulo varchar(400) not null,
Entidade varchar(400) not null,
Autor varchar(400) not null,
Data datetime not null,
TempoDeLeitura int not null,
Chamada varchar(400) not null,
LinkURL varchar(400) not null,
Referencia varchar(400) not null,
Texto varchar(400) not null,
Imagem varchar(400) not null
);
create table Animais(
id INT primary key AUTO_INCREMENT,
Nome varchar(400) not null, 
Nome_Cientifico varchar(400) not null, 
Localizacao varchar(400) not null, 
Populacao varchar(400) not null, 
Peso varchar(400) not null, 
Comprimento varchar(400) not null, 
Habitat varchar(400) not null, 
Ameacas varchar(400) not null, 
Importancia varchar(400) not null, 
imagem_Animal varchar(400) not null, 
imagem_Habitat varchar(400) not null
);
INSERT INTO Noticias (Titulo, Entidade, Autor, Data, TempoDeLeitura, Chamada, LinkURL, Referencia, Texto, Imagem) VALUES
(
    "Navio do Greenpeace resgata baleia presa em equipamentos de pesca",
    "Greenpeace", 
    "Laís Modelli", 
    "2023-11-07 00:00:00", 
    2, 
    "Mais de 300 mil golfinhos e baleias morrem todos os anos ao se prenderem em emaranhados da indústria pesqueira. É inaceitável que atividades econômicas prosperem às custas de vidas.", 
    "https://www.greenpeace.org/brasil/blog/navio-do-greenpeace-resgata-baleia-jubarte-presa-em-equipamentos-de-pesca/", 
    "GREENPEACE. Navio do Greenpeace resgata baleia jubarte presa em equipamentos de pesca. Disponível em: https://www.greenpeace.org/brasil/blog/navio-do-greenpeace-resgata-baleia-jubarte-presa-em-equipamentos-de-pesca/. Acesso em: 24 set. 2024.", 
    "uploads/Navio do Greenpeace resgata baleia presa em equipamentos de pesca.txt", 
    "uploads/Noticia_1"
),
(
    "Cientistas detectam branqueamento de corais pela primeira vez em recifes de águas profundas do Atlântico Sul",
    "WWF-Brasil",
    "Por WWF-Brasil",
    "2024-05-27 00:00:00",
    2,
    "Trata-se de um alerta severo sobre os danos causados pelo aumento das temperaturas ocasionadas pelas mudanças climáticas",
    "https://www.wwf.org.br/nossosconteudos/notas_e_releases/?88720/Cientistas-detectam-branqueamento-de-corais-pela-primeira-vez-em-recifes-de-aguas-profundas-do-Atlantico-Sul",
    "WWF-Brasil. (2024, 27 de maio). Cientistas detectam branqueamento de corais pela primeira vez em recifes de águas profundas do Atlântico Sul. WWF Brasil. Disponível em https://www.wwf.org.br/nossosconteudos/notas_e_releases/?88720/Cientistas-detectam-branqueamento-de-corais-pela-primeira-vez-em-recifes-de-aguas-profundas-do-Atlantico-Sul",
    "uploads/Cientistas detectam branqueamento de corais.txt",
    "uploads/Noticia_2"
),
(
    "Santuários oceânicos são essenciais para proteção da vida marinha",
    "Greenpeace",
    "Lu Sudré",
    "2023-09-14 00:00:00",
    3,
    "Novo relatório do Greenpeace reforça importância da ratificação do Tratado Global dos Oceanos e indica áreas prioritárias para a criação dos santuários oceânicos",
    "https://www.greenpeace.org/brasil/blog/santuarios-oceanicos-sao-essenciais-para-proteger-vida-marinha/",
    "GREENPEACE. Santuários oceânicos são essenciais para proteger vida marinha. Disponível em: https://www.greenpeace.org/brasil/blog/santuarios-oceanicos-sao-essenciais-para-proteger-vida-marinha/. Acesso em: 24 set. 2024.",
    "uploads/Santuários oceânicos são essenciais para proteção da vida marinha.txt",
    "uploads/Noticia_3"
),
(
    "Qualidade da água melhora e tartarugas marinhas da Baía de Guanabara estão mais saudáveis",
    "CNN",
    "Renato Spyrro",
    "2024-09-02 00:00:00",
    2,
    "Cientistas disseram que esse resultado aconteceu após as autoridades fazerem um esforço para limpar a água do porto natural que molda a identidade da região, no Rio de Janeiro",
    "https://www.cnnbrasil.com.br/nacional/qualidade-da-agua-melhora-e-tartarugas-marinhas-da-baia-de-guanabara-estao-mais-saudaveis/",
    "CNN BRASIL. Qualidade da água melhora e tartarugas marinhas da Baía de Guanabara estão mais saudáveis. Disponível em: https://www.cnnbrasil.com.br/nacional/qualidade-da-agua-melhora-e-tartarugas-marinhas-da-baia-de-guanabara-estao-mais-saudaveis/. Acesso em: 24 set. 2024.",
    "uploads/Qualidade da água melhora e tartarugas marinhas.txt",
    "uploads/Noticia_4"
),
(
    "Oceanos têm mais de 170 trilhões de partículas de plástico, diz estudo",
    "CNN",
    "Laura Paddison",
    "2024-03-09 00:00:00",
    5,
    "Cientistas descobriram um aumento “rápido e sem precedentes” na poluição plástica oceânica desde 2005",
    "https://www.cnnbrasil.com.br/internacional/oceanos-tem-mais-de-170-trilhoes-de-particulas-de-plastico-diz-estudo/",
    "CNN BRASIL. Oceanos têm mais de 170 trilhões de partículas de plástico, diz estudo. Disponível em: https://www.cnnbrasil.com.br/internacional/oceanos-tem-mais-de-170-trilhoes-de-particulas-de-plastico-diz-estudo/. Acesso em: 24 set. 2024.",
    "uploads/Oceanos têm mais de 170 trilhões de partículas de plástico.txt",
    "uploads/Noticia_5"
),
(
    "Poluição plástica nos oceanos quadruplicará até 2050",
    "WWF e WWF-BRASIL",
    "WWF e WWF-BRASIL",
    "2022-04-25 00:00:00",
    5,
    "Impactos negativos já são detectáveis em várias espécies; recifes de corais e manguezais estão sob risco significativo",
    "https://www.wwf.org.br/?82290/Poluicao-plastica-nos-oceanos-quadruplicara-ate-2050-aponta-estudo#:~:text=Polui%C3%A7%C3%A3o%20pl%C3%A1stica%20nos%20oceanos%20quadruplicar%C3%A1%20at%C3%A9%202050%20%7C%20WWF%20Brasil&text=Uma%20revis%C3%A3o%20de%202.592%20estudos,nas%20esp%C3%A9cies%20e%20ecossistemas%20oce%C3%A2nicos.",
    "WWF Brasil. Poluição plástica nos oceanos quadruplicará até 2050, aponta estudo. 2021. Disponível em: https://www.wwf.org.br/?82290/Poluicao-plastica-nos-oceanos-quadruplicara-ate-2050-aponta-estudo. Acesso em: 5 nov. 2024.",
    "uploads/Poluição plástica nos oceanos quadruplicará até 2050.txt",
    "uploads/Noticia_6"
),
(
    "Aquecimento e aumento dos níveis do Oceano Pacífico atingem níveis alarmantes, diz ONU",
    "National Geographic Brasil",
    "National Geographic Brasil",
    "2024-08-27 00:00:00",
    5,
    "Relatório divulgado pelas Nações Unidas ressalta a subida no nível do mar e o aquecimento das águas como ameaça à existência das ilhas do Pacífico. Ondas de calor marinhas na região dobraram de frequência.",
    "https://www.nationalgeographicbrasil.com/meio-ambiente/2024/08/aquecimento-e-aumento-dos-niveis-do-oceano-pacifico-atingem-niveis-alarmantes-diz-onu",
    "National Geographic Brasil. (2024, agosto). Aquecimento e aumento dos níveis do Oceano Pacífico atingem níveis alarmantes, diz ONU. National Geographic Brasil. Disponível em https://www.nationalgeographicbrasil.com/meio-ambiente/2024/08/aquecimento-e-aumento-dos-niveis-do-oceano-pacifico-atingem-niveis-alarmantes-diz-onu",
    "uploads/Aquecimento e aumento dos níveis do Oceano Pacífico.txt",
    "uploads/Noticia_7"
),
(
    "Sem marco regulatório, litoral brasileiro seguirá ameaçado, alerta Greenpeace Brasil",
    "Greenpeace",
    "Vinicius Oliveira",
    "2024-07-07 00:00:00",
    5,
    "Em tramitação no Congresso, o PL 6969/2013, conhecido como “Lei do Mar”, institui a Política Nacional para a Conservação e o Uso Sustentável do Bioma Marinho Brasileiro. Ainda sem data para votação no plenário, lei contribuiria para gestão da costa marinha brasileira, que atualmente segue fragmentada",
    "https://www.greenpeace.org/brasil/imprensa/sem-marco-regulatorio-litoral-brasileiro-seguira-ameacado-alerta-greenpeace-brasil/",
    "GREENPEACE Brasil. Sem marco regulatório, litoral brasileiro seguirá ameaçado, alerta Greenpeace Brasil. 2024. Disponível em: https://www.greenpeace.org/brasil/imprensa/sem-marco-regulatorio-litoral-brasileiro-seguira-ameacado-alerta-greenpeace-brasil/. Acesso em: 5 nov. 2024.",
    "uploads/Sem marco regulatório litoral brasileiro seguirá ameaçado.txt",
    "uploads/Noticia_8"
),
(
    "Greenpeace Brasil e IEPA lançam dados consolidados de estudo que demonstra impactos de possível vazamento de óleo na Bacia da Foz do Amazonas",
    "Greenpeace",
    "Vinicius Oliveira",
    "2024-06-03 00:00:00",
    5,
    "Pesquisadores analisaram as intensas correntes marítimas da região com o auxílio de derivadores e concluíram que um derramamento tanto na Foz do Amazonas, quanto no Bloco 59 – poço de interesse da Petrobras – atingiria a costa do Amapá,  e chegaria a três países vizinhos.",
    "https://www.greenpeace.org/brasil/imprensa/greenpeace-brasil-e-iepa-lancam-dados-consolidados-de-estudo-que-demonstra-impactos-de-possivel-vazamento-de-oleo-na-bacia-da-foz-do-amazonas/",
    "GREENPEACE Brasil. Greenpeace Brasil e Iepa lançam dados consolidados de estudo que demonstra impactos de possível vazamento de óleo na Bacia da Foz do Amazonas. 2024. Disponível em: https://www.greenpeace.org/brasil/imprensa/greenpeace-brasil-e-iepa-lancam-dados-consolidados-de-estudo-que-demonstra-impactos-de-possivel-vazamento-de-oleo-na-bacia-da-foz-do-amazonas/. Acesso em: 5 nov. 2024.",
    "uploads/Greenpeace Brasil e IEPA lançam dados consolidados.txt",
    "uploads/Noticia_9"
),
(
    "Brasil lança por ano 1,3 milhão de toneladas de plástico no oceano",
    "Agência Brasil",
    "Fabíola Sinimbú - Repórter da Agência Brasil",
    "2024-10-17 00:00:00",
    5,
    "Brasil lança por ano 1,3 milhão de toneladas de plástico no oceano",
    "https://agenciabrasil.ebc.com.br/meio-ambiente/noticia/2024-10/brasil-lanca-por-ano-13-milhao-de-toneladas-de-plastico-no-oceano",
    "AGÊNCIA BRASIL. Brasil lança por ano 1,3 milhão de toneladas de plástico no oceano. 2024. Disponível em: https://agenciabrasil.ebc.com.br/meio-ambiente/noticia/2024-10/brasil-lanca-por-ano-13-milhao-de-toneladas-de-plastico-no-oceano. Acesso em: 5 nov. 2024.",
    "uploads/Brasil lança por ano 1,3 milhão de toneladas de plástico.txt",
    "uploads/Noticia_10"
);

SELECT * FROM Noticias;
Select * FROM Animais;