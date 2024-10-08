import styled from "styled-components";
import PainelDeDoacao from "./PainelDeDoacao";
import React, { useState } from 'react';
import Cadastro from "../Components/Cadastro";
import Login from "../Components/Login";

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
p{
    max-width: 360px;
    overflow-wrap: break-word;
    word-break: break-word;
}
`

function DivDeDoacao(){
    return(
        <Frame1>
            <Frame1_1>
                <h1>Como doar?</h1>
            </Frame1_1>
            <Frame1_2>
                <Frame1_2_1>
                    <img src="https://github.com/2024-2-MCC2/Projeto1/blob/main/imagens/Icone%202.png?raw=true"></img>
                    <h3>Decida o valor destinado</h3>
                    <p>Qualquer valor escolhido será de grande ajuda para nossa causa!</p>
                </Frame1_2_1>
                <Frame1_2_2>
                    <img src="https://github.com/2024-2-MCC2/Projeto1/blob/main/imagens/Icone%201.png?raw=true"></img>
                    <h3>Faça Login ou Cadastre-se</h3>
                    <p>venha fazer parte da nossa filiação e ajude nossas ONGs parceiras</p>
                </Frame1_2_2>
                <Frame1_2_3>
                    <img src="https://github.com/2024-2-MCC2/Projeto1/blob/main/imagens/Icone%203.png?raw=true" ></img>
                    <h3>Escolha a forma de pagamento</h3>
                    <p>Sua doação será redistribuída entre nossas ONGs parceiras</p>
                </Frame1_2_3>
            </Frame1_2>
            <Frame1_3>
                <Frame1_3_1>
                    <img src="https://placehold.co/360x200/000000/FFF"></img>
                    <p>Breve resumo da ação da nossa ONG blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla </p>
                </Frame1_3_1>
                <PainelDeDoacao/>
            </Frame1_3>
        </Frame1>
    )
}
export default DivDeDoacao;