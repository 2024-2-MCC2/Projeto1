
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Noticia from "../Components/Noticia";

const Container = styled.div`
`;

function cadastroPage(){
    return(
        <Container>
            <Header/>
            <Noticia/>
            <Footer/>
        </Container>
    )
}

export default cadastroPage;