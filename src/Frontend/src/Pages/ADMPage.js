import ADM from "../Components/ADM";
import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../Service/api';

import Noticia_1 from "../Assets/Fotos_Noticias/Noticia_1.jpg"
import Noticia_2 from "../Assets/Fotos_Noticias/Noticia_2.jpg"
import Noticia_3 from "../Assets/Fotos_Noticias/Noticia_3.jpg"
import Noticia_4 from "../Assets/Fotos_Noticias/Noticia_4.jpg"
import Noticia_5 from "../Assets/Fotos_Noticias/Noticia_5.jpg"
import Noticia_6 from "../Assets/Fotos_Noticias/Noticia_6.jpg"
import Noticia_7 from "../Assets/Fotos_Noticias/Noticia_7.jpg"
import Noticia_8 from "../Assets/Fotos_Noticias/Noticia_8.jpg"
import Noticia_9 from "../Assets/Fotos_Noticias/Noticia_9.jpg"
import Noticia_10 from "../Assets/Fotos_Noticias/Noticia_10.jpg"
import TextoNoticia_1 from "../Assets/Texto_Noticias/Navio do Greenpeace resgata baleia presa em equipamentos de pesca.txt"
import TextoNoticia_2 from "../Assets/Texto_Noticias/Cientistas detectam branqueamento de corais pela primeira vez em recifes de águas profundas do Atlântico Sul.txt"
import TextoNoticia_3 from "../Assets/Texto_Noticias/Santuários oceânicos são essenciais para proteção da vida marinha.txt"
import TextoNoticia_4 from "../Assets/Texto_Noticias/Qualidade da água melhora e tartarugas marinhas da Baía de Guanabara estão mais saudáveis.txt"
import TextoNoticia_5 from "../Assets/Texto_Noticias/Oceanos têm mais de 170 trilhões de partículas de plástico, diz estudo.txt"
import TextoNoticia_6 from "../Assets/Texto_Noticias/Poluição plástica nos oceanos quadruplicará até 2050.txt"
import TextoNoticia_7 from "../Assets/Texto_Noticias/Aquecimento e aumento dos níveis do Oceano Pacífico atingem níveis alarmantes, diz ONU.txt"
import TextoNoticia_8 from "../Assets/Texto_Noticias/Sem marco regulatório, litoral brasileiro seguirá ameaçado, alerta Greenpeace Brasil.txt"
import TextoNoticia_9 from "../Assets/Texto_Noticias/Greenpeace Brasil e IEPA lançam dados consolidados de estudo que demonstra impactos de possível vazamento de óleo na Bacia da Foz do Amazonas.txt"
import TextoNoticia_10 from "../Assets/Texto_Noticias/Brasil lança por ano 1,3 milhão de toneladas de plástico no oceano.txt"

const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 75px;
width: 100%;
`;

function ADMPage(){

    const [noticias, setNoticias] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNoticias = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/noticias'); // Altere para o URL do seu backend
                setNoticias(response.data);
            } catch (error) {
                console.error('Erro ao buscar notícias:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNoticias();
    }, []);

    useEffect(() => {
        // Rola para o topo da página quando o componente é montado
        window.scrollTo(0, 0);
    }, []);

    if (loading) return <p>Carregando...</p>;
/*
    const Noticias = [
        {
            id: 1,
            Titulo: "Navio do Greenpeace resgata baleia presa em equipamentos de pesca",
            Entidade: "Greenpeace",
            Autor: "Laís Modelli",
            Data: "7 de novembro de 2023",
            TempoDeLeitura: "Leitura de 2 minutos",
            Chamada: "Mais de 300 mil golfinhos e baleias morrem todos os anos ao se prenderem em emaranhados da indústria pesqueira. É inaceitável que atividades econômicas prosperem às custas de vidas.",
            LinkURL: "https://www.greenpeace.org/brasil/blog/navio-do-greenpeace-resgata-baleia-jubarte-presa-em-equipamentos-de-pesca/",
            Imagem: Noticia_1,
            Referencia: "GREENPEACE. Navio do Greenpeace resgata baleia jubarte presa em equipamentos de pesca. Disponível em: https://www.greenpeace.org/brasil/blog/navio-do-greenpeace-resgata-baleia-jubarte-presa-em-equipamentos-de-pesca/. Acesso em: 24 set. 2024.",
            Texto: TextoNoticia_1
        },
        {
            id: 2,
            Titulo: "Cientistas detectam branqueamento de corais pela primeira vez em recifes de águas profundas do Atlântico Sul",
            Entidade: "WWF-Brasil",
            Autor: "Por WWF-Brasil ",
            Data: "27 de maio de 2024",
            TempoDeLeitura: "Leitura de 2 minutos",
            Chamada: "Trata-se de um alerta severo sobre os danos causados pelo aumento das temperaturas ocasionadas pelas mudanças climáticas",
            LinkURL: "https://www.greenpeace.org/brasil/blog/navio-do-greenpeace-resgata-baleia-jubarte-presa-em-equipamentos-de-pesca/",
            Imagem: Noticia_2,
            Referencia: "WWF-Brasil. (2024, 27 de maio). Cientistas detectam branqueamento de corais pela primeira vez em recifes de águas profundas do Atlântico Sul. WWF Brasil. Disponível em https://www.wwf.org.br/nossosconteudos/notas_e_releases/?88720/Cientistas-detectam-branqueamento-de-corais-pela-primeira-vez-em-recifes-de-aguas-profundas-do-Atlantico-Sul",
            Texto: TextoNoticia_2
        },
        {
            id: 3,
            Titulo: "Santuários oceânicos são essenciais para proteção da vida marinha",
            Entidade: "Greenpeace",
            Autor: "Lu Sudré",
            Data: "14 de setembro de 2023 ",
            TempoDeLeitura: "Leitura de 3 minutos",
            Chamada: "Novo relatório do Greenpeace reforça importância da ratificação do Tratado Global dos Oceanos e indica áreas prioritárias para a criação dos santuários oceânicos",
            LinkURL: "https://www.greenpeace.org/brasil/blog/santuarios-oceanicos-sao-essenciais-para-proteger-vida-marinha/",
            Imagem: Noticia_3,
            Referencia: "GREENPEACE. Santuários oceânicos são essenciais para proteger vida marinha. Disponível em: https://www.greenpeace.org/brasil/blog/santuarios-oceanicos-sao-essenciais-para-proteger-vida-marinha/. Acesso em: 24 set. 2024.",
            Texto: TextoNoticia_3
        },
        {
            id: 4,
            Titulo: "Qualidade da água melhora e tartarugas marinhas da Baía de Guanabara estão mais saudáveis",
            Entidade: "CNN",
            Autor: "Renato Spyrro",
            Data: "2 de setembro de 2024",
            TempoDeLeitura: "Leitura de 2 minutos",
            Chamada: "Cientistas disseram que esse resultado aconteceu após as autoridades fazerem um esforço para limpar a água do porto natural que molda a identidade da região, no Rio de Janeiro",
            LinkURL: "https://www.cnnbrasil.com.br/nacional/qualidade-da-agua-melhora-e-tartarugas-marinhas-da-baia-de-guanabara-estao-mais-saudaveis/",
            Imagem: Noticia_4,
            Referencia: "CNN BRASIL. Qualidade da água melhora e tartarugas marinhas da Baía de Guanabara estão mais saudáveis. Disponível em: https://www.cnnbrasil.com.br/nacional/qualidade-da-agua-melhora-e-tartarugas-marinhas-da-baia-de-guanabara-estao-mais-saudaveis/. Acesso em: 24 set. 2024.",
            Texto: TextoNoticia_4
        },
        {
            id: 5,
            Titulo: "Oceanos têm mais de 170 trilhões de partículas de plástico, diz estudo",
            Entidade: "CNN",
            Autor: "Laura Paddison",
            Data: "9 de março de 2024",
            TempoDeLeitura: "Leitura de 5 minutos",
            Chamada: "Cientistas descobriram um aumento “rápido e sem precedentes” na poluição plástica oceânica desde 2005",
            LinkURL: "https://www.cnnbrasil.com.br/internacional/oceanos-tem-mais-de-170-trilhoes-de-particulas-de-plastico-diz-estudo/",
            Imagem: Noticia_5,
            Referencia: "CNN BRASIL. Oceanos têm mais de 170 trilhões de partículas de plástico, diz estudo. Disponível em: https://www.cnnbrasil.com.br/internacional/oceanos-tem-mais-de-170-trilhoes-de-particulas-de-plastico-diz-estudo/. Acesso em: 24 set. 2024.",
            Texto: TextoNoticia_5
        },
        {
            id: 6,
            Titulo: "Poluição plástica nos oceanos quadruplicará até 2050",
            Entidade: "WWF e WWF-BRASIL",
            Autor: "WWF e WWF-BRASIL",
            Data: "25 de abril de 2022",
            TempoDeLeitura: "Leitura de 5 minutos",
            Chamada: "​Impactos negativos já são detectáveis em várias espécies; recifes de corais e manguezais estão sob risco significativo",
            LinkURL: "https://www.wwf.org.br/?82290/Poluicao-plastica-nos-oceanos-quadruplicara-ate-2050-aponta-estudo#:~:text=Polui%C3%A7%C3%A3o%20pl%C3%A1stica%20nos%20oceanos%20quadruplicar%C3%A1%20at%C3%A9%202050%20%7C%20WWF%20Brasil&text=Uma%20revis%C3%A3o%20de%202.592%20estudos,nas%20esp%C3%A9cies%20e%20ecossistemas%20oce%C3%A2nicos.",
            Imagem: Noticia_6,
            Referencia: "WWF Brasil. Poluição plástica nos oceanos quadruplicará até 2050, aponta estudo. 2021. Disponível em: https://www.wwf.org.br/?82290/Poluicao-plastica-nos-oceanos-quadruplicara-ate-2050-aponta-estudo. Acesso em: 5 nov. 2024.",
            Texto: TextoNoticia_6
        },
        {
            id: 7,
            Titulo: "Aquecimento e aumento dos níveis do Oceano Pacífico atingem níveis alarmantes, diz ONU",
            Entidade: " National Geographic Brasil",
            Autor: " National Geographic Brasil",
            Data: "27 de agosto de 2024",
            TempoDeLeitura: "Leitura de 5 minutos ",
            Chamada: "Relatório divulgado pelas Nações Unidas ressalta a subida no nível do mar e o aquecimento das águas como ameaça à existência das ilhas do Pacífico. Ondas de calor marinhas na região dobraram de frequência.",
            LinkURL: "https://www.nationalgeographicbrasil.com/meio-ambiente/2024/08/aquecimento-e-aumento-dos-niveis-do-oceano-pacifico-atingem-niveis-alarmantes-diz-onu",
            Imagem: Noticia_7,
            Referencia: "National Geographic Brasil. (2024, agosto). Aquecimento e aumento dos níveis do Oceano Pacífico atingem níveis alarmantes, diz ONU. National Geographic Brasil. Disponível em https://www.nationalgeographicbrasil.com/meio-ambiente/2024/08/aquecimento-e-aumento-dos-niveis-do-oceano-pacifico-atingem-niveis-alarmantes-diz-onu",
            Texto: TextoNoticia_7
        },
        {
            id: 8,
            Titulo: "Sem marco regulatório, litoral brasileiro seguirá ameaçado, alerta Greenpeace Brasil",
            Entidade: "Greenpeace",
            Autor: "Vinicius Oliveira",
            Data: "7 de julho de 2024",
            TempoDeLeitura: "Leitura de 5 minutos",
            Chamada: "Em tramitação no Congresso, o PL 6969/2013, conhecido como “Lei do Mar”, institui a Política Nacional para a Conservação e o Uso Sustentável do Bioma Marinho Brasileiro. Ainda sem data para votação no plenário, lei contribuiria para gestão da costa marinha brasileira, que atualmente segue fragmentada",
            LinkURL: "https://www.greenpeace.org/brasil/imprensa/sem-marco-regulatorio-litoral-brasileiro-seguira-ameacado-alerta-greenpeace-brasil/",
            Imagem: Noticia_8,
            Referencia: "GREENPEACE Brasil. Sem marco regulatório, litoral brasileiro seguirá ameaçado, alerta Greenpeace Brasil. 2024. Disponível em: https://www.greenpeace.org/brasil/imprensa/sem-marco-regulatorio-litoral-brasileiro-seguira-ameacado-alerta-greenpeace-brasil/. Acesso em: 5 nov. 2024.",
            Texto: TextoNoticia_8
        },
        {
            id: 9,
            Titulo: "Greenpeace Brasil e IEPA lançam dados consolidados de estudo que demonstra impactos de possível vazamento de óleo na Bacia da Foz do Amazonas",
            Entidade: "Greenpeace",
            Autor: "Vinicius Oliveira",
            Data: "3 de junho de 2024",
            TempoDeLeitura: "Leitura de 5 minutos",
            Chamada: "Pesquisadores analisaram as intensas correntes marítimas da região com o auxílio de derivadores e concluíram que um derramamento tanto na Foz do Amazonas, quanto no Bloco 59 – poço de interesse da Petrobras – atingiria a costa do Amapá,  e chegaria a três países vizinhos.",
            LinkURL: "https://www.greenpeace.org/brasil/imprensa/greenpeace-brasil-e-iepa-lancam-dados-consolidados-de-estudo-que-demonstra-impactos-de-possivel-vazamento-de-oleo-na-bacia-da-foz-do-amazonas/",
            Imagem: Noticia_9,
            Referencia: "GREENPEACE Brasil. Greenpeace Brasil e Iepa lançam dados consolidados de estudo que demonstra impactos de possível vazamento de óleo na Bacia da Foz do Amazonas. 2024. Disponível em: https://www.greenpeace.org/brasil/imprensa/greenpeace-brasil-e-iepa-lancam-dados-consolidados-de-estudo-que-demonstra-impactos-de-possivel-vazamento-de-oleo-na-bacia-da-foz-do-amazonas/. Acesso em: 5 nov. 2024.",
            Texto: TextoNoticia_9
        },
        {
            id: 10,
            Titulo: "Brasil lança por ano 1,3 milhão de toneladas de plástico no oceano",
            Entidade: "Agência Brasil",
            Autor: "Fabíola Sinimbú - Repórter da Agência Brasil",
            Data: "17 de outubro de 2024",
            TempoDeLeitura: "Leitura de 5 minutos ",
            Chamada: "Brasil lança por ano 1,3 milhão de toneladas de plástico no oceano",
            LinkURL: "https://agenciabrasil.ebc.com.br/meio-ambiente/noticia/2024-10/brasil-lanca-por-ano-13-milhao-de-toneladas-de-plastico-no-oceano",
            Imagem: Noticia_10,
            Referencia: "AGÊNCIA BRASIL. Brasil lança por ano 1,3 milhão de toneladas de plástico no oceano. 2024. Disponível em: https://agenciabrasil.ebc.com.br/meio-ambiente/noticia/2024-10/brasil-lanca-por-ano-13-milhao-de-toneladas-de-plastico-no-oceano. Acesso em: 5 nov. 2024.",
            Texto: TextoNoticia_10
        }
    ];
*/
    return(
        <Container>
            <ADM NoticiasData={noticias}/>
        </Container>
    )
}

export default ADMPage;