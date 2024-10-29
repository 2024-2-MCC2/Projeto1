import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Login from "../Components/Login";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const loginContainer = styled.div`
`;

function loginPage(){
    return(
        <loginContainer>
            <Header/>
            <Login/>
            <Footer/>
        </loginContainer>
    )
}

export default loginPage;