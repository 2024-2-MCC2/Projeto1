import Cadastro from "../Components/Cadastro";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const cadastroContainer = styled.div`
`;

function cadastroPage(){
    return(
        <cadastroContainer>
            <Header/>
            <Cadastro/>
            <Footer/>
        </cadastroContainer>
    )
}

export default cadastroPage;