import styled from "styled-components";
import React from 'react';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
width: 100%; 
height: 100%;
background: #FFFFFF;
flex-direction: column;
padding: 0px;
gap: 25px;
height: 1513px;
box-sizing: border-box;
overflow: hidden;
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
height: 600px;
background: #D9D9D9;
flex: none;
order: 0;
flex-grow: 0;
`
const Frame1_1 = styled.div`
width: 70%;
height: 100%;
background: #888888;
flex: none;
order: 0;
flex-grow: 0;
overflow: hidden;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`
const Frame1_2 = styled.div`
display: inline-block;
flex-direction: column;
align-items: flex-start;
padding: 80px 20px;
gap: 20px;
width: 30%;
height: 100%;
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
overflow: hidden;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
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
width: 100%;
height: 100%;
flex: none;
order: 1;
flex-grow: 0;
h1{
width: 550px;
height: 39px;
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
                    <h1>{Habitat}</h1>
                    <p>{Ameacas}</p>
                </Frame2_1>
                <Frame2_2>
                    <img src={imagem_Habitat}/>
                </Frame2_2>
            </Frame2>
            <Frame3>
                <Frame3_1>
                    <h1>Importância</h1>
                    <p>{Importancia}</p>
                </Frame3_1>
                <Frame3_2>
                    <h1>Ameaças</h1>
                    <p>{Ameacas}</p>
                </Frame3_2>
            </Frame3>
        </Container>
    )
}

export default BioAnimal;