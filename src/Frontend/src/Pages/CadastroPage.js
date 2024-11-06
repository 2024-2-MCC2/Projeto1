import Cadastro from "../Components/Cadastro";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 75px;
width: 100%;
`;

function cadastroPage(){
    return(
        <Container>
            <Cadastro/>
        </Container>
    )
}

export default cadastroPage;