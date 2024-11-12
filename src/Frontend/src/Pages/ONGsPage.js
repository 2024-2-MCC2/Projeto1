import ONGsCard from "../Components/ONGsCard"
import styled from "styled-components"
import React, { useEffect } from 'react';
//Logo das ONGs Parceiras ---------------------------------------------------------------------
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
import WildlifeConservationSociety from "../Assets/imgsOngs/WildlifeConservationSociety.png"


const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 75px;
width: 100%;
`;

function ONGsPage () {

    useEffect(() => {
        // Rola para o topo da página quando o componente é montado
        window.scrollTo(0, 0);
      }, []);

    const ONGsData = [
        {
            id: 1,
            Nome: 'Blue Marine Foundation',
            Imagem: BlueMarineFoundation
        },
        {  
            id: 2,
            Nome: 'Coral Restoration Foundation',
            Imagem: CoralRestorationFoundation
        },
        {   
            id: 3,
            Nome: 'Instituto Baleia Jubarte',
            Imagem: InstitutoBaleiaJubarte
        },
        {  
            id: 4,
            Nome: 'Instituto Ecológico Aqualung',
            Imagem: InstitutoEcologicoAqualung
        },
        {
            id: 5,
            Nome: 'Instituto Ilhabela Sustentável',
            Imagem: InstitutoIlhaBelaSustentavel
        },
        {   
            id: 6,
            Nome: 'Instituto Mar Adentro',
            Imagem: InstitutoMarAdentro
        },
        {   
            id: 7,
            Nome: 'Marine Conservation Institute',
            Imagem: MarineConservationInstitute
        },
        {  
            id: 8,
            Nome: 'Mission Blue',
            Imagem: MissionBlue
        },
        {   
            id: 9,
            Nome: 'Oceana',
            Imagem: Oceana
        },
        {   
            id: 10,
            Nome: 'Ocean Conservancy',
            Imagem: OceanConservacy
        },
        {   
            id: 11,
            Nome: 'Plastic Pollution Coalition',
            Imagem: PlasticPollutionCoalition
        },
        {   
            id: 12,
            Nome: 'Project AWARE',
            Imagem: ProjetoAware
        },
        {   
            id: 13,
            Nome: 'Projeto Coral Vivo',
            Imagem: ProjetoCoralVivo
        },
        {   
            id: 14,
            Nome: 'Projeto Tamar',
            Imagem: ProjetoTamar
        },
        {   
            id: 15,
            Nome: 'Reef Check Foundation',
            Imagem: ReefCheckFoundation
        },
        {
            id: 16,
            Nome: 'Save Our Seas Foundation',
            Imagem: SaveOurSeasFoundation
        },
        {
            id: 17,
            Nome: 'Sea Shepherd',
            Imagem: SeaShepherd
        },
        {
            id: 18,
            Nome: 'Surfrider Foundation',
            Imagem: SurfriderFoundation
        },
        {
            id: 19,
            Nome: 'The Ocean Cleanup',
            Imagem: TheOceanCleanup
        },
        {
            id: 20,
            Nome: 'Wildlife Conservation Society',
            Imagem: WildlifeConservationSociety
        },
    ]

    return(
        <Container>
            <ONGsCard ONGsData = {ONGsData}/>
        </Container>
    )
}

export default ONGsPage;