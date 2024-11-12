import styled from "styled-components";
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BioAnimal from "../Components/BioAnimail";
import ImagemExemplo from '../Assets/PlaceHold.png';
//IMAGENS DOS ANIMAIS ------------------------------------------------------------------
import Baleia_Azul from '../Assets/Fotos_Animal/Baleia_Azul.jpg';
import Pinguim_Galapagos from '../Assets/Fotos_Animal/Pinguim_Galapagos.jpg';
import Urso_Polar from '../Assets/Fotos_Animal/Urso_Polar.jpg';
import Cavalo_Marinho from '../Assets/Fotos_Animal/Cavalo_Marinho.jpg';
import Foca_Monge from '../Assets/Fotos_Animal/Foca_Monge.jpg';
import Foca from '../Assets/Fotos_Animal/Foca.jpg';
import Golfinho from '../Assets/Fotos_Animal/Golfinho.jpg';
import Iguana_Marinha from '../Assets/Fotos_Animal/Iguana_Marinha.jpg';
import Leao_Marinho from '../Assets/Fotos_Animal/Leao_Marinho.jpg';
import Lontra_Marinha from '../Assets/Fotos_Animal/Lontra_Marinha.jpg';
import Peixe_Boi from '../Assets/Fotos_Animal/Peixe_Boi.jpg';
import Peixe_Napoleao from '../Assets/Fotos_Animal/Peixe_Napoleao.jpg';
import Peixe_Palhaco from '../Assets/Fotos_Animal/Peixe_Palhaco.jpg';
import Polvo_Dumbo from '../Assets/Fotos_Animal/Polvo_Dumbo.jpg';
import Polvo_Gigante from '../Assets/Fotos_Animal/Polvo_Gigante.jpg';
import Raia_Manta from '../Assets/Fotos_Animal/Raia_Manta.jpg';
import Tartaruga_cabecuda from '../Assets/Fotos_Animal/Tartaruga_cabecuda.jpg';
import Tartaruga_couro from '../Assets/Fotos_Animal/Tartaruga_couro.jpg';
import Tartaruga_oliva from '../Assets/Fotos_Animal/Tartaruga_oliva.jpg';
import Tartaruga_verde from '../Assets/Fotos_Animal/Tartaruga_verde.jpg';
import Tubarao_Baleia from '../Assets/Fotos_Animal/Tubarao_Baleia.jpg';
import Tubarao_Branco from '../Assets/Fotos_Animal/Tubarao_Branco.jpg';
import Tubarao_Martelo from '../Assets/Fotos_Animal/Tubarao_Martelo.jpg';
import Vaquita from '../Assets/Fotos_Animal/Vaquita.jpg';
//IMAGEM DOS HABITATS-----------------------------------------------------------
import Baleia_Azul_Habitat from '../Assets/Fotos_Habitat/Baleia_Azul_Habitat.jpg';
import Pinguim_Galapagos_Habitat from '../Assets/Fotos_Habitat/Pinguim_Galapagos_Habitat.jpg';
import Urso_Polar_Habitat from '../Assets/Fotos_Habitat/Urso_Polar_Habitat.jpg';
import Cavalo_Marinho_Habitat from '../Assets/Fotos_Habitat/Cavalo_Marinho_Habitat.jpg';
import Foca_Monge_Habitat from '../Assets/Fotos_Habitat/Foca_Monge_Habitat.jpg';
import Foca_Habitat from '../Assets/Fotos_Habitat/Foca_Habitat.jpg';
import Golfinho_Habitat from '../Assets/Fotos_Habitat/Golfinho_Habitat.jpg';
import Iguana_Marinha_Habitat from '../Assets/Fotos_Habitat/Iguana_Marinha_Habitat.jpg';
import Leao_Marinho_Habitat from '../Assets/Fotos_Habitat/Leao_Marinho_Habitat.jpg';
import Lontra_Marinha_Habitat from '../Assets/Fotos_Habitat/Lontra_Marinha_Habitat.jpg';
import Peixe_Boi_Habitat from '../Assets/Fotos_Habitat/Peixe_Boi_Habitat.jpg';
import Peixe_Napoleao_Habitat from '../Assets/Fotos_Habitat/Peixe_Napoleao_Habitat.jpg';
import Peixe_Palhaco_Habitat from '../Assets/Fotos_Habitat/Peixe_Palhaco_Habitat.jpg';
import Polvo_Dumbo_Habitat from '../Assets/Fotos_Habitat/Polvo_Dumbo_Habitat.jpg';
import Polvo_Gigante_Habitat from '../Assets/Fotos_Habitat/Polvo_Gigante_Habitat.jpg';
import Raia_Manta_Habitat from '../Assets/Fotos_Habitat/Raia_Manta_Habitat.jpg';
import Tartaruga_Cabecuda_Habitat from '../Assets/Fotos_Habitat/Tartaruga_Cabecuda_Habitat.jpg';
import Tartaruga_Couro_Habitat from '../Assets/Fotos_Habitat/Tartaruga_Couro_Habitat.jpg';
import Tartaruga_Oliva_Habitat from '../Assets/Fotos_Habitat/Tartaruga_Oliva_Habitat.jpg';
import Tartaruga_Verde_Habitat from '../Assets/Fotos_Habitat/Tartaruga_Verde_Habitat.jpg';
import Tubarao_Baleia_Habitat from '../Assets/Fotos_Habitat/Tubarao_Baleia_Habitat.jpg';
import Tubarao_Branco_Habitat from '../Assets/Fotos_Habitat/Tubarao_Branco_Habitat.jpg';
import Tubarao_Martelo_Habitat from '../Assets/Fotos_Habitat/Tubarao_Martelo_Habitat.jpg';
import Vaquita_Habitat from '../Assets/Fotos_Habitat/Vaquita_Habitat.jpg';


const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 75px;
width: 100%;
`;

function AnimalPage(){

    useEffect(() => {
        // Rola para o topo da página quando o componente é montado
        window.scrollTo(0, 0);
      }, []);

  const { id } = useParams(); // Pegando o ID da temporada da URL
    const navigate = useNavigate();

    const Animais = {
   
        1: {
            Nome: "Baleia Azul", 
            Nome_Cientifico: "Balaenoptera musculus", 
            Localizacao: "Oceanos globais", 
            Populacao: "10.000-25.000", 
            Peso: "150.000kg", 
            Comprimento: "30m", 
            Habitat: "Oceanos abertos e águas profundas", 
            Ameacas: "Caça histórica, mudança climática", 
            Importancia: "Equilíbrio marinho", 
            imagem_Animal: Baleia_Azul, 
            imagem_Habitat: Baleia_Azul_Habitat 
        },
        2: {
            Nome: "Pinguim de Galápagos", 
            Nome_Cientifico: "Spheniscus mendiculus",
            Localizacao: "Ilhas Galápagos",
            Populacao: "1.200-1.500",
            Peso: "2kg",
            Comprimento: "49cm",
            Habitat: "Costas rochosas e ilhas do arquipélago de Galápagos",
            Ameacas: "Mudanças climáticas, escassez de alimentos",
            Importancia: "Indicador da saúde do ecossistema marinho da região",
            imagem_Animal: Pinguim_Galapagos, 
            imagem_Habitat:Pinguim_Galapagos_Habitat
        },
        3: {
            Nome: "Urso Polar", 
            Nome_Cientifico: "Ursus maritimus", 
            Localizacao: "Ártico", 
            Populacao: "22.000-31.000", 
            Peso: "450kg", 
            Comprimento: "2.4m", 
            Habitat: "Gelo marinho e áreas costeiras do Ártico", 
            Ameacas: "Mudança climática, perda de habitat", 
            Importancia: "Indicador de mudanças climáticas", 
            imagem_Animal: Urso_Polar, 
            imagem_Habitat: Urso_Polar_Habitat 
        },
        4: {
            Nome: "Leão Marinho", 
            Nome_Cientifico: "Otariinae",
            Localizacao: "Costas do Oceano Pacífico",
            Populacao: "Varia por espécie",
            Peso: "200-300kg",
            Comprimento: "1.8-2.5m",
            Habitat: "Costas e ilhas rochosas do Oceano Pacífico",
            Ameacas: "Pesca excessiva, poluição",
            Importancia: "Controla populações de peixes e ajuda no equilíbrio marinho",
            imagem_Animal: Leao_Marinho, 
            imagem_Habitat: Leao_Marinho_Habitat
        },
        5: {
            Nome: "Tartaruga Couro", 
            Nome_Cientifico: "Dermochelys coriacea",
            Localizacao: "Oceanos tropicais e temperados",
            Populacao: "25.000-30.000",
            Peso: "300-700kg",
            Comprimento: "1.5-2.5m",
            Habitat: "Águas costeiras e oceânicas de oceanos tropicais e temperados",
            Ameacas: "Captura acidental, poluição plástica",
            Importancia: "Mantém a saúde dos ecossistemas marinhos ao consumir águas-vivas" ,
            imagem_Animal: Tartaruga_couro, 
            imagem_Habitat: Tartaruga_Couro_Habitat
        },
        6: {
            Nome: "Tartaruga Cabeçuda", 
            Nome_Cientifico: "Caretta caretta",
            Localizacao: "Oceanos Atlântico, Pacífico e Índico",
            Populacao: "40.000-50.000",
            Peso: "80-160kg",
            Comprimento: "0.9-1.2m",
            Habitat: "Águas costeiras e recifes de coral em oceanos Atlântico, Pacífico e Índico",
            Ameacas: "Captura acidental, perda de habitat",
            Importancia: "Contribui para a saúde de recifes de coral e bancos de algas" ,
            imagem_Animal: Tartaruga_cabecuda, 
            imagem_Habitat: Tartaruga_Cabecuda_Habitat
        },
        7: {
            Nome: "Tartaruga Verde", 
            Nome_Cientifico: "Chelonia mydas",
            Localizacao: "Oceanos tropicais e subtropicais",
            Populacao: "600.000-700.000",
            Peso: "110-180kg",
            Comprimento: "1-1.2m",
            Habitat: "Áreas de recifes e águas costeiras em oceanos tropicais e subtropicais",
            Ameacas: "Caça, poluição marinha",
            Importancia: "Regula o crescimento de algas e mantém o ecossistema marinho" ,
            imagem_Animal: Tartaruga_verde, 
            imagem_Habitat: Tartaruga_Verde_Habitat
        },
        8: {
            Nome: "Tartaruga Ridley Oliva", 
            Nome_Cientifico: "Lepidochelys olivacea",
            Localizacao: "Oceano Atlântico, Pacífico e Índico",
            Populacao: "800.000-1.000.000",
            Peso: "35-50kg",
            Comprimento: "60-70cm",
            Habitat: " Praias arenosas e águas costeiras em oceanos Atlântico, Pacífico e Índico",
            Ameacas: "Captura acidental, caça de ovos",
            Importancia: "Contribui para a saúde das zonas costeiras ao controlar populações de pequenos invertebrados" ,
            imagem_Animal: Tartaruga_oliva, 
            imagem_Habitat: Tartaruga_Oliva_Habitat
        },
        9: {
            Nome: "Foca", 
            Nome_Cientifico: "Phocidae",
            Localizacao: "Costas de oceanos temperados e polares",
            Populacao: "Varia por espécie",
            Peso: "80-300kg",
            Comprimento: "1.2-2m",
            Habitat: "Costas de oceanos temperados e polares, frequentemente em áreas de gelo marinho",
            Ameacas: "Mudança climática, poluição",
            Importancia: "Regula populações de peixes, contribuindo para o equilíbrio ecológico" ,
            imagem_Animal: Foca, 
            imagem_Habitat: Foca_Habitat
        },
        10: {
            Nome:  "Polvo Dumbo", 
            Nome_Cientifico: "Grimpoteuthis",
            Localizacao: "Oceanos profundos",
            Populacao: "Desconhecida",
            Peso: "5-6kg",
            Comprimento: "20-30cm",
            Habitat: "Oceanos profundos, especialmente em regiões de águas frias",
            Ameacas: "Exploração de recursos do fundo do mar",
            Importancia: "Indicador da saúde dos ecossistemas profundos",
            imagem_Animal: Polvo_Dumbo, 
            imagem_Habitat: Polvo_Dumbo_Habitat
        },
        11: {
            Nome:  "Iguana Marinha", 
            Nome_Cientifico: "Amblyrhynchus cristatus",
            Localizacao: "Ilhas Galápagos",
            Populacao: "250.000-300.000",
            Peso: "1-1.5kg",
            Comprimento: "60-90cm",
            Habitat: "Costas rochosas e manguezais das Ilhas Galápagos",
            Ameacas: "Introdução de predadores, mudança climática",
            Importancia: "Ajuda a manter o equilíbrio nas algas marinhas das Galápagos",
            imagem_Animal: Iguana_Marinha, 
            imagem_Habitat: Iguana_Marinha_Habitat
        },
        12: {
            Nome:  "Peixe Napoleão", 
            Nome_Cientifico: "Cheilinus undulatus",
            Localizacao: "Recifes de coral do Indo-Pacífico",
            Populacao: "Menos de 10.000",
            Peso: "70-190kg",
            Comprimento: "1-2.3m",
            Habitat: "Recifes de coral do Indo-Pacífico, principalmente em águas rasas",
            Ameacas: "Pesca ilegal, destruição dos recifes",
            Importancia: "Controla a população de organismos nocivos aos recifes",
            imagem_Animal: Peixe_Napoleao, 
            imagem_Habitat: Peixe_Napoleao_Habitat
        },
        13: {
            Nome:  "Peixe Palhaço", 
            Nome_Cientifico: "Amphiprioninae",
            Localizacao: "Recifes do Indo-Pacífico",
            Populacao: "Desconhecida",
            Peso: "50-100g",
            Comprimento: "10-18cm",
            Habitat: "Anêmonas de recifes de coral em oceanos do Indo-Pacífico",
            Ameacas: "Destruição dos recifes, coleta para aquários",
            Importancia: "Possui uma relação simbiótica com anêmonas, contribuindo para o equilíbrio ecológico",
            imagem_Animal: Peixe_Palhaco, 
            imagem_Habitat: Peixe_Palhaco_Habitat
        },
        14: {
            Nome:  "Lontra Marinha", 
            Nome_Cientifico: "Enhydra lutris",
            Localizacao: "Costas do Pacífico Norte",
            Populacao: "106.000-120.000",
            Peso: "14-45kg",
            Comprimento: "1.2-1.5m",
            Habitat: "Costas e estuários do Pacífico Norte",
            Ameacas: "Derramamento de petróleo, poluição",
            Importancia: "Essencial para manter a saúde de florestas de algas marinhas",
            imagem_Animal: Lontra_Marinha, 
            imagem_Habitat: Lontra_Marinha_Habitat
        },
        15: {
            Nome:  "Peixe Boi", 
            Nome_Cientifico: "Trichechus",
            Localizacao: "Costas e rios da América e África",
            Populacao: "Varia por espécie",
            Peso: "400-600kg",
            Comprimento: "2.5-4m",
            Habitat: "Estuários, lagos e rios da América e África",
            Ameacas: "Colisões com embarcações, poluição",
            Importancia: "Controla o crescimento de plantas aquáticas, ajudando no equilíbrio aquático",
            imagem_Animal:Peixe_Boi, 
            imagem_Habitat: Peixe_Boi_Habitat
        },
        16: {
            Nome:  "Golfinho", 
            Nome_Cientifico: "Delphinidae",
            Localizacao: "Oceanos e mares costeiros",
            Populacao: "Varia por espécie",
            Peso: "150-650kg",
            Comprimento: "2-4m",
            Habitat: "Águas costeiras e oceânicas, frequentemente em grupos",
            Ameacas: "Captura acidental, poluição",
            Importancia: "Espécie-chave na cadeia alimentar marinha" ,
            imagem_Animal: Golfinho, 
            imagem_Habitat: Golfinho_Habitat
        },
        17: {
            Nome:  "Tubarão Branco", 
            Nome_Cientifico: "Carcharodon carcharias",
            Localizacao: "Oceanos Atlântico, Pacífico e Índico",
            Populacao: "Estimativa desconhecida",
            Peso: "1.100-2.400kg",
            Comprimento: "4-6m",
            Habitat: "Águas costeiras e oceânicas em oceanos Atlântico, Pacífico e Índico",
            Ameacas: "Pesca e captura acidental",
            Importancia: "Predador de topo, essencial para o controle de populações marinhas",
            imagem_Animal: Tubarao_Branco, 
            imagem_Habitat: Tubarao_Branco_Habitat
        },
        18: {
            Nome:  "Vaquita", 
            Nome_Cientifico: "Phocoena sinus",
            Localizacao: "Golfo da Califórnia, México",
            Populacao: "Menos de 10",
            Peso: "40-55kg",
            Comprimento: "1.2-1.5m",
            Habitat: "Águas costeiras rasas do Golfo da Califórnia, no México",
            Ameacas: "Captura acidental em redes de pesca",
            Importancia: "Indicador da saúde ecológica das águas do Golfo da Califórnia",
            imagem_Animal: Vaquita, 
            imagem_Habitat: Vaquita_Habitat
        },
        19: {
            Nome:  "Foca Monge do Havaí", 
            Nome_Cientifico: "Neomonachus schauinslandi",
            Localizacao: "Ilhas do Havaí",
            Populacao: "1.400-1.500",
            Peso: "170-240kg",
            Comprimento: "2.1m",
            Habitat: "Praias e áreas costeiras do Havaí",
            Ameacas: "Perda de habitat, poluição",
            Importancia: "Indicador da saúde dos ecossistemas costeiros havaianos",
            imagem_Animal: Foca_Monge, 
            imagem_Habitat: Foca_Monge_Habitat
        },
        20: {
            Nome:  "Tubarão Martelo", 
            Nome_Cientifico: "Sphyrnidae",
            Localizacao: "Oceanos Atlântico, Pacífico e Índico",
            Populacao: "Desconhecida",
            Peso: "300-400kg",
            Comprimento: "4-6m",
            Habitat: "Áreas costeiras e recifes em oceanos Atlântico, Pacífico e Índico",
            Ameacas: "Pesca excessiva",
            Importancia: "Controle de populações de peixes, equilibrando ecossistemas marinhos",
            imagem_Animal: Tubarao_Martelo, 
            imagem_Habitat: Tubarao_Martelo_Habitat
        },
        21: {
            Nome:  "Cavalo Marinho", 
            Nome_Cientifico: "Hippocampus",
            Localizacao: "Recifes de coral e águas costeiras",
            Populacao: "Varia por espécie",
            Peso: "2-200g",
            Comprimento: "2-35cm",
            Habitat: "Recifes de coral e águas costeiras, frequentemente em vegetação aquática",
            Ameacas: "Pesca ilegal, poluição",
            Importancia: "Importante para o equilíbrio ecológico de recifes de coral",
            imagem_Animal: Cavalo_Marinho, 
            imagem_Habitat: Cavalo_Marinho_Habitat
        },
        22: {
            Nome:  "Tubarão Baleia", 
            Nome_Cientifico: "Rhincodon typus",
            Localizacao: "Oceanos tropicais e subtropicais",
            Populacao: "Estimativa desconhecida",
            Peso: "15.000-20.000kg",
            Comprimento: "12-18m",
            Habitat: "Águas costeiras e oceânicas de oceanos tropicais e subtropicais",
            Ameacas: "Pesca acidental e caça",
            Importancia: "Essencial para o equilíbrio de plâncton e pequenos peixes no oceano",
            imagem_Animal: Tubarao_Baleia, 
            imagem_Habitat: Tubarao_Baleia_Habitat
        },
        23: {
            Nome:  "Raia Manta", 
            Nome_Cientifico: "Mobula birostris",
            Localizacao: "Oceanos tropicais e subtropicais",
            Populacao: "Estimativa desconhecida",
            Peso: "1.350-2.000kg",
            Comprimento: "4.5-7m",
            Habitat: "Águas costeiras e oceânicas em oceanos tropicais e subtropicais",
            Ameacas: "Pesca ilegal, perda de habitat",
            Importancia: "Ajuda a manter o equilíbrio do plâncton marinho",
            imagem_Animal: Raia_Manta, 
            imagem_Habitat: Raia_Manta
        },
        24: {
            Nome:  "Polvo gigante do pacífico", 
            Nome_Cientifico: "Enteroctopus dofleini",
            Localizacao: "Pacífico Norte",
            Populacao: "Estimativa desconhecida",
            Peso: "20-50kg",
            Comprimento: "3-5m",
            Habitat: "Águas costeiras e recifes do Pacífico Norte",
            Ameacas: "Pesca e poluição",
            Importancia: "Controla populações de pequenos peixes e crustáceos" ,
            imagem_Animal: Polvo_Gigante, 
            imagem_Habitat: Polvo_Gigante_Habitat
        },
  };
  const Animal = Animais[id]

    return (
      <Container>
        <BioAnimal
          Nome = {Animal.Nome}
          Nome_Cientifico = {Animal.Nome_Cientifico}
          Localizacao ={Animal.Localizacao}
          Populacao ={Animal.Populacao}
          Peso ={Animal.Peso}
          Comprimento = {Animal.Comprimento}
          Habitat = {Animal.Habitat}
          Ameacas = {Animal.Ameacas}
          Importancia = {Animal.Importancia}
          imagem_Animal = {Animal.imagem_Animal}
          imagem_Habitat = {Animal.imagem_Habitat}
        />
      </Container>
    );
  }
  
  export default AnimalPage;