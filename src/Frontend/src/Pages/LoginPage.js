import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Login from "../Components/Login";
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

function loginPage(){
    return(
        <Container>
            <Login/>
        </Container>
    )
}

export default loginPage;