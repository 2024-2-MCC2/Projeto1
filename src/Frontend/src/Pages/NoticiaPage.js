import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Noticia from "../Components/Noticia";

const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 75px;
width: 100%;
`;

function NoticiaPage(){
    return(
        <Container>
            <Noticia/>
        </Container>
    )
}

export default NoticiaPage;