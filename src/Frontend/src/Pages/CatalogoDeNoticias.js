import Header from "../Components/Header";
import Footer from "../Components/Footer";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import NoticiasList from "../Components/NoticiasList";


const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 75px;
width: 100%;
`;

function CatalogoDeNoticias(){
    return(
        <Container>
            <NoticiasList/>
        </Container>
    )
}

export default CatalogoDeNoticias;