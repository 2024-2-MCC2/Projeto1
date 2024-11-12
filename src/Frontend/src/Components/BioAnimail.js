import styled from "styled-components";
import React from 'react';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
max-width: 1920px;
width: 100%; 
height: 100%;
background: #FFFFFF;
flex-direction: column;
padding: 0px;
gap: 25px;
box-sizing: border-box;
overflow: hidden;
h2{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
}
img {
  width: 100%;
  height: auto;
  display: block;
}
`
const Frame1 = styled.div`
display: flex;
align-items: center;
padding: 0px;
width: 100%; 
background: #D9D9D9;
`
const Frame1_1 = styled.div`
width: 70%;
height: 100%;
background: #888888;
overflow: hidden;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`
const Frame1_2 = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 80px 20px;
width: 30%;
height: 100%;
`
const Frame1_2_1 = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
p{
    font-style: italic;
    font-weight: bold;
}
`
const Frame1_2_2 = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
`
const Frame2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
padding: 20px 50px;
`
const Frame2_1 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
text-align: start;
padding: 20px;
gap: 10px;
width: 100%;
height: 100%;
`
const Frame2_2 = styled.div`
display: flex;
width: 100%;
height: 100%;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 10px solid #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease;
    &:Hover{
        transform: rotate(5deg);
    }
}
`
const Frame3 = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 70px 50px;
gap: 10px;
width: 100%; 
background: #D9D9D9;
`
const Frame3_1 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 50px;
gap: auto;
width: 100%;
height: 100%;
h1{
width: 100%;
height: 100%;;
text-align: center;
}
p{
width: 100%;
height: 100%;
text-align: center;
}
`
const Frame3_2 = styled(Frame3_1)`

`

function BioAnimal({Nome, Nome_Cientifico,Localizacao, Populacao, Peso, Comprimento, Habitat, Ameacas, Importancia, imagem_Animal, imagem_Habitat}){
    return(
        <Container>
            <Frame1>
                <Frame1_1>
                    <img src={imagem_Animal}></img>
                </Frame1_1>
                <Frame1_2>
                    <Frame1_2_1>
                        <h2>Nome: {Nome}</h2>
                        <p>Nome Cientifico: {Nome_Cientifico}</p>
                    </Frame1_2_1>
                    <Frame1_2_2>
                        <p>Habitat: {Habitat}</p>
                        <p>Localização: {Localizacao}</p>
                        <p>Comprimento: {Comprimento}</p>
                        <p>Peso: {Peso}</p>
                        <p>População: {Populacao}</p>
                    </Frame1_2_2>
                </Frame1_2>
            </Frame1>
            <Frame2>
                <Frame2_1>
                    <p>Habitat:</p>
                    <h2>{Habitat}</h2>
                    <p>{Ameacas}</p>
                </Frame2_1>
                <Frame2_2>
                    <img src={imagem_Habitat}/>
                </Frame2_2>
            </Frame2>
            <Frame3>
                <Frame3_1>
                    <h2>Importância</h2>
                    <p>{Importancia}</p>
                </Frame3_1>
                <Frame3_2>
                    <h2>Ameaças</h2>
                    <p>{Ameacas}</p>
                </Frame3_2>
            </Frame3>
        </Container>
    )
}

export default BioAnimal;