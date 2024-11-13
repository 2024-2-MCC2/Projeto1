import styled from "styled-components";
import PainelDeDoacao from "./PainelDeDoacao";
import React, { useState } from 'react';



const Frame1 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 100px;
padding: 50px;
gap: 60px;
`
const Frame1_1 = styled.div`
`
const Frame1_2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 50px;
`
const Frame1_2_1 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
p{
    max-width: 360px;
    overflow-wrap: break-word;
    word-break: break-word;
}
`
const Frame1_2_2 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
p{
    max-width: 360px;
    overflow-wrap: break-word;
    word-break: break-word;
}
`
const Frame1_2_3 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
p{
    max-width: 360px;
    overflow-wrap: break-word;
    word-break: break-word;
}
`
const Frame1_3 = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 50px;
`
const Frame1_3_1 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
img{ 
    max-width: 360px;
}
p{
    max-width: 360px;
    overflow-wrap: break-word;
    word-break: break-word;
    text-align: justify;
}
`

function Doacao(){
    return(
        <Frame1>
            <Frame1_1>
                <h1>Como doar?</h1>
            </Frame1_1>
            <Frame1_2>
                <Frame1_2_1>
                    <img src="https://github.com/2024-2-MCC2/Projeto1/blob/main/src/Frontend/src/Assets/PainelDeDoacao%20-%20Icone%201.png?raw=true"></img>
                    <h3>Decida o valor destinado</h3>
                    <p>Qualquer valor escolhido será de grande ajuda para nossa causa!</p>
                </Frame1_2_1>
                <Frame1_2_2>
                    <img src="https://github.com/2024-2-MCC2/Projeto1/blob/main/src/Frontend/src/Assets/PainelDeDoacao%20-%20Icone%202.png?raw=true"></img>
                    <h3>Faça Login ou Cadastre-se</h3>
                    <p>venha fazer parte da nossa filiação e ajude nossas ONGs parceiras</p>
                </Frame1_2_2>
                <Frame1_2_3>
                    <img src="https://github.com/2024-2-MCC2/Projeto1/blob/main/src/Frontend/src/Assets/PainelDeDoacao%20-%20Icone%203.png?raw=true" ></img>
                    <h3>Escolha a forma de pagamento</h3>
                    <p>Sua doação será redistribuída entre nossas ONGs parceiras</p>
                </Frame1_2_3>
            </Frame1_2>
            <Frame1_3>
                <Frame1_3_1>
                    <img src="https://raw.githubusercontent.com/2024-2-MCC2/Projeto1/refs/heads/main/imagens/image-20-2.png"></img>
                    <p className="paragrafo">A Aliança Oceânica é uma ONG dedicada à preservação da vida aquática e à promoção de um uso sustentável dos ecossistemas marinhos e de água doce. Nossa missão é divulgar conhecimento científico e conscientizar sobre causas e ações relacionadas à proteção desses ambientes, mobilizando doações que são direcionadas a ONGs parceiras. Além disso, buscamos fortalecer nossa influência junto a autoridades governamentais, atuando como uma ponte para viabilizar projetos de desenvolvimento sustentável que conciliem o uso socioeconômico e a conservação ecológica dos ecossistemas aquáticos em escala global. </p>
                </Frame1_3_1>
                <PainelDeDoacao/>
            </Frame1_3>
        </Frame1>
    )
}
export default Doacao;