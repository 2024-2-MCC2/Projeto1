import styled from "styled-components";
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ImagemExemplo from '../Assets/PlaceHold.png';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
width: 100%; 
background: #FFFFFF;
flex-direction: column;
padding: 0px;
gap: 25px;
height: 1513px;
box-sizing: border-box;
overflow-x: hidden;
img {
  width: 100%;
  height: auto;
  display: block;
}
`
const Frame1 = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
width: 100%; 
height: 586px;
background: #D9D9D9;
flex: none;
order: 0;
flex-grow: 0;
`
const Frame1_1 = styled.div`
width: 667px;
height: 586px;
background: #888888;
flex: none;
order: 0;
flex-grow: 0;
`
const Frame1_2 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 80px 20px;
gap: 20px;
width: 613px;
height: 586px;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 1;
h1{
width: 573px;
height: 77px;
font-weight: 600;
font-size: 64px;
line-height: 77px;
color: #000000;
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
}
h2{
width: 573px;
height: 29px;
font-weight: 400;
font-size: 24px;
line-height: 29px;
color: #000000;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
}
`
const Frame1_2_1 = styled.div`
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 15px;
width: 573px;
height: 121px;
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
`
const Frame1_2_2 = styled.div`
width: 260px;
height: 76px;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #000000;
flex: none;
order: 1;
flex-grow: 0;
`
const Frame2 = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
width: 100%; 
height: 412px;
flex: none;
order: 1;
flex-grow: 0;
`
const Frame2_1 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 30px;
gap: 50px;
width: 692px;
height: 377px;
flex: none;
order: 0;
flex-grow: 1;
h1{
width: 632px;
height: 39px;
font-weight: 700;
font-size: 32px;
line-height: 39px;
color: #000000;
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
}
p{
width: 632px;
height: 228px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #000000;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
}
`
const Frame2_2 = styled.div`
width: 588px;
height: 412px;
background: #D9D9D9;
flex: none;
order: 1;
flex-grow: 0;
`
const Frame3 = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 70px 50px;
gap: 10px;
width: 100%; 
height: 465px;
background: #D9D9D9;
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;
`
const Frame3_1 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 20px;
margin: 0 auto;
width: 555px;
height: 325px;
flex: none;
order: 0;
flex-grow: 0;
h1{
width: 555px;
height: 39px;
font-weight: 600;
font-size: 32px;
line-height: 39px;
text-align: center;
color: #000000;
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
}
p{
width: 555px;
height: 266px;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #000000;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
}
`
const Frame3_2 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 20px;
margin: 0 auto;
width: 550px;
height: 325px;
flex: none;
order: 1;
flex-grow: 0;
h1{
width: 550px;
height: 39px;
font-weight: 600;
font-size: 32px;
line-height: 39px;
text-align: center;
color: #000000;
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
}
p{
width: 550px;
height: 266px;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #000000;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
}
`

function AnimaisList(){
    const { id } = useParams(); // Pegando o ID da temporada da URL
  const navigate = useNavigate();

  const Animais = {
   
        1: {
            Nome: "Leão", 
            Nome_Cientifico: "Panthera leo", 
            Localizacao: "África Subsaariana", 
            Populacao: "20.000", 
            Peso: "190kg", 
            Comprimento: "2.7m", 
            Habitat: "Savana", 
            Ameacas: "Perda de habitat, caça", 
            Importancia: "Predador de topo", 
            imagem_Animal: ImagemExemplo, 
            imagem_Habitat: ImagemExemplo 
        },
        2: {
            Nome: "Tigre", 
            Nome_Cientifico: "Panthera tigris", 
            Localizacao: "Ásia", 
            Populacao: "3.900", 
            Peso: "260kg", 
            Comprimento: "3.3m", 
            Habitat: "Florestas tropicais", 
            Ameacas: "Caça ilegal, desmatamento", 
            Importancia: "Equilíbrio do ecossistema", 
            imagem_Animal: ImagemExemplo, 
            imagem_Habitat: ImagemExemplo
        },
        3: {
            Nome: "Elefante", 
            Nome_Cientifico: "Loxodonta africana", 
            Localizacao: "África", 
            Populacao: "415.000", 
            Peso: "6.000kg", 
            Comprimento: "7.5m", 
            Habitat: "Savana, florestas", 
            Ameacas: "Caça ilegal, perda de habitat", 
            Importancia: "Dispersão de sementes", 
            imagem_Animal: ImagemExemplo, 
            imagem_Habitat: ImagemExemplo 
        },
        4: {
            Nome: "Baleia Azul", 
            Nome_Cientifico: "Balaenoptera musculus", 
            Localizacao: "Oceanos globais", 
            Populacao: "10.000-25.000", 
            Peso: "150.000kg", 
            Comprimento: "30m", 
            Habitat: "Oceanos", 
            Ameacas: "Caça histórica, mudança climática", 
            Importancia: "Equilíbrio marinho", 
            imagem_Animal: ImagemExemplo, 
            imagem_Habitat: ImagemExemplo
        },
        5: {
            Nome: "Urso Polar", 
            Nome_Cientifico: "Ursus maritimus", 
            Localizacao: "Ártico", 
            Populacao: "22.000-31.000", 
            Peso: "450kg", 
            Comprimento: "2.4m", 
            Habitat: "Gelo marinho", 
            Ameacas: "Mudança climática, perda de habitat", 
            Importancia: "Indicador de mudanças climáticas", 
            imagem_Animal: ImagemExemplo, 
            imagem_Habitat: ImagemExemplo 
        },
        6: {
            Nome: "Canguru", 
            Nome_Cientifico: "Macropus", 
            Localizacao: "Austrália", 
            Populacao: "50.000.000", 
            Peso: "85kg", 
            Comprimento: "2.0m", 
            Habitat: "Pastagens", 
            Ameacas: "Perda de habitat, atropelamentos", 
            Importancia: "Símbolo nacional australiano", 
            imagem_Animal: ImagemExemplo, 
            imagem_Habitat: ImagemExemplo
        },
        7: {
            Nome: "Panda Gigante", 
            Nome_Cientifico: "Ailuropoda melanoleuca", 
            Localizacao: "China", 
            Populacao: "1.864", 
            Peso: "100kg", 
            Comprimento: "1.8m", 
            Habitat: "Florestas de bambu", 
            Ameacas: "Perda de habitat", 
            Importancia: "Conservação e símbolo cultural", 
            imagem_Animal: ImagemExemplo, 
            imagem_Habitat: ImagemExemplo
        },
        8: {
            Nome: "Gorila", 
            Nome_Cientifico: "Gorilla beringei", 
            Localizacao: "África Central", 
            Populacao: "1.063", 
            Peso: "160kg", 
            Comprimento: "1.8m", 
            Habitat: "Florestas tropicais", 
            Ameacas: "Caça, perda de habitat", 
            Importancia: "Preservação das florestas", 
            imagem_Animal: ImagemExemplo, 
            imagem_Habitat: ImagemExemplo
        },
        9: {
            Nome: "Lobo Cinzento", 
            Nome_Cientifico: "Canis lupus", 
            Localizacao: "América do Norte, Europa, Ásia", 
            Populacao: "300.000", 
            Peso: "45kg", 
            Comprimento: "1.5m", 
            Habitat: "Florestas, montanhas", 
            Ameacas: "Caça, perda de habitat", 
            Importancia: "Controle de populações de herbívoros", 
            imagem_Animal: ImagemExemplo, 
            imagem_Habitat: ImagemExemplo
        },
        10: {
            Nome:  "Orangotango", 
            Nome_Cientifico: "Pongo pygmaeus", 
            Localizacao: "Ilhas de Bornéu e Sumatra", 
            Populacao: "104.700", 
            Peso: "90kg", 
            Comprimento: "1.5m", 
            Habitat: "Florestas tropicais", 
            Ameacas: "Desmatamento, caça", 
            Importancia: "Dispersão de sementes", 
            imagem_Animal: ImagemExemplo, 
            imagem_Habitat: ImagemExemplo
        },
        11: {
            Nome:  "Águia Careca", 
            Nome_Cientifico: "Haliaeetus leucocephalus", 
            Localizacao: "América do Norte", 
            Populacao: "316.700", 
            Peso: "6.3kg", Comprimento: "2.4m (envergadura)", 
            Habitat: "Florestas, áreas costeiras", 
            Ameacas: "Perda de habitat", 
            Importancia: "Símbolo nacional dos EUA", 
            imagem_Animal: ImagemExemplo, 
            imagem_Habitat: ImagemExemplo
        },
        12: {
            Nome:  "Rinoceronte Negro", 
            Nome_Cientifico: "Diceros bicornis", 
            Localizacao: "África", 
            Populacao: "5.630", 
            Peso: "1.400kg", 
            Comprimento: "3.7m", 
            Habitat: "Savana", 
            Ameacas: "Caça ilegal", 
            Importancia: "Conservação de espécies", 
            imagem_Animal: ImagemExemplo, 
            imagem_Habitat: ImagemExemplo
        },
        13: {
            Nome:  "Tartaruga-de-couro", 
            Nome_Cientifico: "Dermochelys coriacea", 
            Localizacao: "Oceanos tropicais e temperados", 
            Populacao: "34.000", 
            Peso: "700kg", 
            Comprimento: "2.2m", 
            Habitat: "Oceanos", 
            Ameacas: "Captura acidental, poluição", 
            Importancia: "Equilíbrio marinho", 
            imagem_Animal: ImagemExemplo, 
            imagem_Habitat: ImagemExemplo
        },
        14: {
            Nome:  "Tubarão Branco", 
            Nome_Cientifico: "Carcharodon carcharias", 
            Localizacao: "Oceanos temperados", 
            Populacao: "Desconhecida", 
            Peso: "1.100kg", 
            Comprimento: "6m", 
            Habitat: "Oceanos", 
            Ameacas: "Caça ilegal", 
            Importancia: "Predador de topo marinho", 
            imagem_Animal: ImagemExemplo, 
            imagem_Habitat: ImagemExemplo
        },
        15: {
            Nome:  "Jaguar", 
            Nome_Cientifico: "Panthera onca", 
            Localizacao: "América Central e do Sul", 
            Populacao: "15.000", 
            Peso: "100kg", 
            Comprimento: "2.4m", 
            Habitat: "Florestas tropicais", 
            Ameacas: "Desmatamento, caça", 
            Importancia: "Preservação das florestas", 
            imagem_Animal: ImagemExemplo, 
            imagem_Habitat: ImagemExemplo
        },
        16: {
            Nome:  "Leopardo das Neves", 
            Nome_Cientifico: "Panthera uncia", 
            Localizacao: "Ásia Central", 
            Populacao: "4.000-6.500", 
            Peso: "55kg", 
            Comprimento: "1.3m", 
            Habitat: "Montanhas", 
            Ameacas: "Caça ilegal, perda de habitat", 
            Importancia: "Equilíbrio do ecossistema montanhoso", 
            imagem_Animal: ImagemExemplo, 
            imagem_Habitat: ImagemExemplo
        },
        17: {
            Nome:  "Morcego-de-fruta", 
            Nome_Cientifico: "Pteropus vampyrus", 
            Localizacao: "Sudeste Asiático", 
            Populacao: "Desconhecida", 
            Peso: "1.5kg", 
            Comprimento: "1.7m (envergadura)", 
            Habitat: "Florestas tropicais", 
            Ameacas: "Caça, perda de habitat", 
            Importancia: "Polinização e dispersão de sementes", 
            imagem_Animal: ImagemExemplo, 
            imagem_Habitat: ImagemExemplo
        },
        18: {
            Nome:  "Pinguim Imperador", 
            Nome_Cientifico: "Aptenodytes forsteri", 
            Localizacao: "Antártica", 
            Populacao: "595.000", 
            Peso: "40kg", 
            Comprimento: "1.2m", 
            Habitat: "Gelo marinho", 
            Ameacas: "Mudança climática", 
            Importancia: "Indicador de mudanças climáticas", 
            imagem_Animal: ImagemExemplo, 
            imagem_Habitat: ImagemExemplo
        },
        19: {
            Nome:  "Cobra Real", 
            Nome_Cientifico: "Ophiophagus hannah", 
            Localizacao: "Sul e Sudeste da Ásia", 
            Populacao: "Desconhecida", 
            Peso: "6kg", 
            Comprimento: "5.5m", 
            Habitat: "Florestas tropicais", 
            Ameacas: "Perda de habitat", 
            Importancia: "Controle de populações de presas", 
            imagem_Animal: ImagemExemplo, 
            imagem_Habitat: ImagemExemplo
        },
        20: {
            Nome:  "Lobo Vermelho", 
            Nome_Cientifico: "Canis rufus", 
            Localizacao: "Estados Unidos (Carolina do Norte)", 
            Populacao: "20-30", 
            Peso: "30kg", 
            Comprimento: "1.5m", 
            Habitat: "Pântanos, florestas", 
            Ameacas: "Perda de habitat, caça", 
            Importancia: "Controle de populações de presas", 
            imagem_Animal: ImagemExemplo, 
            imagem_Habitat: ImagemExemplo
        },
  };

  const Animal = Animais[id]

  const handleBack = () => {
    navigate(-1);
  }

    return(
        <Container>
            <Frame1>
                <Frame1_1>
                    <img src={Animal.imagem_Animal}></img>
                </Frame1_1>
                <Frame1_2>
                    <Frame1_2_1>
                        <h2>{Animal.Nome}</h2>
                        <p>{Animal.Nome_Cientifico}</p>
                    </Frame1_2_1>
                    <Frame1_2_2>
                        <p>{Animal.Habitat}</p>
                        <p>{Animal.Localizacao}</p>
                        <p>{Animal.Comprimento}</p>
                        <p>{Animal.Peso}</p>
                        <p>{Animal.Populacao}</p>
                    </Frame1_2_2>
                </Frame1_2>
            </Frame1>
            <Frame2>
                <Frame2_1>
                    <h1>{Animal.Habitat}</h1>
                    <p>{Animal.Ameacas}</p>
                </Frame2_1>
                <Frame2_2>
                    <img src={Animal.imagem_Habitat}/>
                </Frame2_2>
            </Frame2>
            <Frame3>
                <Frame3_1>
                    <h1>Importância</h1>
                    <p>{Animal.Importancia}</p>
                </Frame3_1>
                <Frame3_2>
                    <h1>Ameaças</h1>
                    <p>{Animal.Ameacas}</p>
                </Frame3_2>
            </Frame3>
        </Container>
    )
}

export default AnimaisList;