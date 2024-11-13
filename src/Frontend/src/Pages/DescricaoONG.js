import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import ONGdiv from '../Components/ONGdiv';

import BlueMarineFoundation from "../Assets/imgsOngs/BlueMarineFoundation.png"
import CoralRestorationFoundation from "../Assets/imgsOngs/CoralRestorationFoundation.jpg"
import InstitutoBaleiaJubarte from "../Assets/imgsOngs/InstitutoBaleiaJubarte.png"
import InstitutoEcologicoAqualung from "../Assets/imgsOngs/InstitutoEcologicoAqualung.png"
import InstitutoIlhaBelaSustentavel from "../Assets/imgsOngs/InstitutoIlhaBelaSustentavel.jpg"
import InstitutoMarAdentro from "../Assets/imgsOngs/InstitutoMarAdentro.png"
import MarineConservationInstitute from "../Assets/imgsOngs/MarineConservatiorInstitute.png"
import MissionBlue from "../Assets/imgsOngs/MissionBlue.jpg"
import Oceana from "../Assets/imgsOngs/Oceana.jpg"
import OceanConservacy from "../Assets/imgsOngs/OceanConservacy.png"
import PlasticPollutionCoalition from "../Assets/imgsOngs/PlasticPollutionCoalition.png"
import ProjetoAware from "../Assets/imgsOngs/ProjetoAware.jpg"
import ProjetoCoralVivo from "../Assets/imgsOngs/ProjetoCoralVivo.jpg"
import ProjetoTamar from "../Assets/imgsOngs/ProjetoTamar.png"
import ReefCheckFoundation from "../Assets/imgsOngs/ReefCheckFoundation.jpg"
import SaveOurSeasFoundation from "../Assets/imgsOngs/SaveOurSeasFoundation.jpg"
import SeaShepherd from "../Assets/imgsOngs/SeaShepherd.png"
import SurfriderFoundation from "../Assets/imgsOngs/SurfriderFoundation.jpg"
import TheOceanCleanup from "../Assets/imgsOngs/TheOceanCleanup.jpg"
import WCS from "../Assets/imgsOngs/WCS.png"



const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 75px;
width: 100%;
`;




function DescricaoONGs (){
    const { id } = useParams(); // Pegando o ID da temporada da URL
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(
            {
                top: 0,
                left: 0,
                behavior: 'auto'
            });
    }, []);

    const ONGs = {
        1: {
            Nome: 'Ocean Conservancy',
            Descricao: 'Uma organização dos Estados Unidos que trabalha para proteger os oceanos e a vida marinha, promovendo políticas públicas, combatendo a poluição e o aquecimento global.',
            Link: 'https://oceanconservancy.org',
            Imagem: OceanConservacy
        },
        2: {
            Nome: 'Sea Shepherd',
            Descricao: 'Conhecida por suas operações diretas e  intervenções em navios de pesca ilegal, a Sea Shepherd atua mundialmente na proteção da vida marinha, combatendo a caça de baleias e tubarões, entre outras práticas prejudiciais.',
            Link: 'https://seashepherd.org',
            Imagem: SeaShepherd
        },
        3: {
            Nome: 'Surfrider Foundation',
            Descricao: 'Fundada na Califórnia, essa ONG é conhecida por seu trabalho em proteger as praias, as águas costeiras e os oceanos. Atua principalmente na redução da poluição por plástico e conservação de habitats marinhos.',
            Link: 'https://www.surfrider.org',
            Imagem: SurfriderFoundation
        },
        4: {
            Nome: 'Oceana',
            Descricao: 'Com presença internacional, a Oceana luta pela proteção dos ecossistemas marinhos e pela implementação de políticas de pesca sustentável. Foca em campanhas para limitar a sobrepesca e proteger habitats marinhos.',
            Link: 'https://oceana.org',
            Imagem: Oceana
        },
        5: {
            Nome: 'The Ocean Cleanup',
            Descricao: 'Uma ONG holandesa que desenvolve tecnologias para remover o plástico dos oceanos. Famosa por seu projeto de limpar a “Grande Ilha de Lixo do Pacífico”, eles buscam soluções inovadoras para combater a poluição marinha.',
            Link: 'https://theoceancleanup.com',
            Imagem: TheOceanCleanup
        },
        6: {
            Nome: 'Projeto Tamar',
            Descricao: 'Focado na conservação das tartarugas marinhas ameaçadas de extinção, o Tamar desenvolve projetos de proteção, pesquisa e conscientização nas principais áreas de desova no Brasil.',
            Link: 'https://www.tamar.org.br',
            Imagem: ProjetoTamar
        },
        7: {
            Nome: 'Instituto Baleia Jubarte',
            Descricao: 'Atua na preservação da baleia-jubarte e de outros cetáceos na costa brasileira, promovendo pesquisas, proteção e turismo sustentável.',
            Link: 'https://baleiajubarte.org.br',
            Imagem: InstitutoBaleiaJubarte
        },
        8: {
            Nome: 'Instituto Mar Adentro',
            Descricao: 'Focado na conservação dos ecossistemas costeiros e marinhos, o instituto promove atividades de educação ambiental e proteção dos recifes de coral, principalmente na região de Fernando de Noronha.',
            Link: 'https://www.maradentro.org.br',
            Imagem: InstitutoMarAdentro
        },
        9: {
            Nome: 'Instituto Ilhabela Sustentável',
            Descricao: 'Trabalha na promoção da sustentabilidade em Ilhabela, incluindo ações de conservação marinha, proteção de espécies e combate à poluição.',
            Link: 'https://ilhabelasustentavel.org.br',
            Imagem: InstitutoIlhaBelaSustentavel
        },
        10: {
            Nome: 'Instituto Ecológico Aqualung',
            Descricao: 'Promove campanhas de limpeza e conscientização ambiental em praias e áreas costeiras no Brasil, com foco em combater a poluição marinha e proteger a vida aquática.',
            Link: 'https://institutoaqualung.com.br',
            Imagem: InstitutoEcologicoAqualung
        },
        11: {
            Nome: 'Projeto Coral Vivo',
            Descricao: 'Dedica-se à conservação dos recifes de coral no Brasil, desenvolvendo pesquisas, educação ambiental e projetos de restauração em áreas como o Parque Nacional Marinho de Abrolhos.',
            Link: 'https://www.coralvivo.org.br',
            Imagem: ProjetoCoralVivo
        },
        12: {
            Nome: 'Marine Conservation Institute',
            Descricao: 'Foca na criação de reservas marinhas e na proteção de habitats oceânicos, incluindo áreas ameaçadas pela atividade humana.',
            Link: 'https://marine-conservation.org',
            Imagem: MarineConservationInstitute
        },
        13: {
            Nome: 'Blue Marine Foundation',
            Descricao: 'Organização britânica que trabalha para restaurar a saúde dos oceanos, promovendo reservas marinhas e pesca sustentável.',
            Link: 'https://www.bluemarinefoundation.com',
            Imagem: BlueMarineFoundation
        },
        14: {
            Nome: 'Project AWARE',
            Descricao: 'ONG global que se dedica à proteção dos oceanos e à remoção de detritos marinhos, especialmente através da mobilização de mergulhadores.',
            Link: 'https://www.projectaware.org',
            Imagem: ProjetoAware
        },
        15: {
            Nome: 'Coral Restoration Foundation',
            Descricao: 'Focada na restauração de corais, especialmente na Flórida, através de técnicas que ajudam a replantar e preservar recifes de corais.',
            Link: 'https://www.coralrestoration.org',
            Imagem: CoralRestorationFoundation
        },
        16: {
            Nome: 'Mission Blue',
            Descricao: 'Fundada pela oceanógrafa Sylvia Earle, a Mission Blue busca aumentar a conscientização e estabelecer “pontos de esperança” para a proteção dos oceanos.',
            Link: 'https://mission-blue.org',
            Imagem: MissionBlue
        },
        17: {
            Nome: 'Plastic Pollution Coalition',
            Descricao: 'Uma coalizão global que combate a poluição por plástico nos oceanos e promove soluções sustentáveis',
            Link: 'https://www.plasticpollutioncoalition.org',
            Imagem: PlasticPollutionCoalition
        },
        18: {
            Nome: 'Wildlife Conservation Society',
            Descricao: 'Foca na proteção de ecossistemas marinhos em todo o mundo, abordando temas como pesca sustentável e preservação de espécies marinhas.',
            Link: 'https://www.wcs.org/our-work/oceans',
            Imagem: WCS
        },
        19: {
            Nome: 'Reef Check Foundation',
            Descricao: 'Trabalha na conservação de recifes de coral e na educação sobre ecossistemas marinhos, envolvendo comunidades locais.',
            Link: 'https://www.reefcheck.org',
            Imagem: ReefCheckFoundation
        },
        20: {
            Nome: 'Save Our Seas Foundation',
            Descricao: 'Financia projetos que protegem espécies e habitats marinhos, com foco em educação e ciência.',
            Link: 'https://saveourseas.com',
            Imagem: SaveOurSeasFoundation
        },
    }

    const ONG = ONGs[id]

    return(
        <Container>
            <ONGdiv
            Nome = {ONG.Nome}
            Descricao ={ONG.Descricao}
            Imagem ={ONG.Imagem}
            Link = {ONG.Link}
            />
        </Container>
    )
}

export default DescricaoONGs;