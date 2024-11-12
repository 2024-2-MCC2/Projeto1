import styled from "styled-components";
import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';

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

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 50px 0;
background-color: #D9D9D9;
width: 100%;
height: 400px;
`
const CarouselContainer = styled.div`
max-width: 1920px;
width: 100%;
height: 100%;
padding: 0 70px;

`;
const Frame1 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
width: 100%;
height: 100%;
img{
    border-radius: 100%;
    overflow: hidden;
    width: 250px;
    height: 250px;
    object-fit: cover;
    align-items: center;
    border: 10px solid #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}
p{
    font-size: 24px;
    font-weight: bold;
}
`
const CarouselItem = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
&:Hover{
   p{
    color: #2575CF;
   }
}
`;
const Dot = styled.div`
    display: inline-block;
    width: 10px; // Largura do dot
    height: 10px; // Altura do dot
    margin: 5px; // Espaçamento entre os dots
    border-radius: 50%; // Bordas arredondadas
    background: ${props => (props.active ? '#fff' : '#696969')}; // Cor do dot ativo e inativo
    cursor: pointer; // Cursor de ponteiro
`;


function CarrosselDeAnimais() {

    const AnimaisData = [
        {
            id: 1,
            Nome: "Baleia Azul",
            imagem_Animal: Baleia_Azul,
        },
        {
            id: 2,
            Nome: "Pinguim de Galápagos",
            imagem_Animal: Pinguim_Galapagos,
        },
        {
            id: 3,
            Nome: "Urso Polar",
            imagem_Animal: Urso_Polar,
        },
        {
            id: 4,
            Nome: "Leão Marinho",
            imagem_Animal: Leao_Marinho,
        },
        {
            id: 5,
            Nome: "Tartaruga Couro",
            imagem_Animal: Tartaruga_couro,
        },
        {
            id: 6,
            Nome: "Tartaruga Cabeçuda",
            imagem_Animal: Tartaruga_cabecuda,
        },
        {
            id: 7,
            Nome: "Tartaruga Verde",
            imagem_Animal: Tartaruga_verde,
        },
        {
            id: 8,
            Nome: "Tartaruga Ridley Oliva",
            imagem_Animal: Tartaruga_oliva,
        },
        {
            id: 9,
            Nome: "Foca",
            imagem_Animal: Foca,
        },
        {
            id: 10,
            Nome: "Polvo Dumbo",
            imagem_Animal: Polvo_Dumbo,
        },
        {
            id: 11,
            Nome: "Iguana Marinha",
            imagem_Animal: Iguana_Marinha,
        },
        {
            id: 12,
            Nome: "Peixe Napoleão",
            imagem_Animal: Peixe_Napoleao,
        },
        {
            id: 13,
            Nome: "Peixe Palhaço",
            imagem_Animal: Peixe_Palhaco,
        },
        {
            id: 14,
            Nome: "Lontra Marinha",
            imagem_Animal: Lontra_Marinha,
        },
        {
            id: 15,
            Nome: "Peixe Boi",
            imagem_Animal: Peixe_Boi,
        },
        {
            id: 16,
            Nome: "Golfinho",
            imagem_Animal: Golfinho,
        },
        {
            id: 17,
            Nome: "Tubarão Branco",
            imagem_Animal: Tubarao_Branco,
        },
        {
            id: 18,
            Nome: "Vaquita",
            imagem_Animal: Vaquita,
        },
        {
            id: 19,
            Nome: "Foca Monge do Havaí",
            imagem_Animal: Foca_Monge,
        },
        {
            id: 20,
            Nome: "Tubarão Martelo",
            imagem_Animal: Tubarao_Martelo,
        },
        {
            id: 21,
            Nome: "Cavalo Marinho",
            imagem_Animal: Cavalo_Marinho,
        },
        {
            id: 22,
            Nome: "Tubarão Baleia",
            imagem_Animal: Tubarao_Baleia,

        },
        {
            id: 23,
            Nome: "Raia Manta",
            imagem_Animal: Raia_Manta,

        },
        {
            id: 24,
            Nome: "Polvo gigante do pacífico",
            imagem_Animal: Polvo_Gigante,
        },
    ];

    const settings = {
        dots: true,
        infinite: true, // Permite rolar infinitamente
        speed: 500, // Velocidade da transição
        slidesToShow: 5, // Número de itens a serem exibidos
        slidesToScroll: 5, // Número de itens a serem rolados por vez
        arrows: true,
        customPaging: (i) => <Dot />,
    };
    const navigate = useNavigate(); // Hook para navegação
    return (
        <Container>
        <CarouselContainer>
            <Slider {...settings}>
                {AnimaisData.map(Animal => (
                    <CarouselItem key={Animal.id} onClick={() => navigate(`/Animal/${Animal.id}`)}>
                        <Frame1>
                            <img src={Animal.imagem_Animal} />
                            <p>{Animal.Nome}</p>
                        </Frame1>
                    </CarouselItem>
                ))}
            </Slider>
        </CarouselContainer>
        </Container>
    )
}

export default CarrosselDeAnimais;