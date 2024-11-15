import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TesteList from '../Components/TesteList';
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

function TesteListPage(){
    
    return (
        <Container>
            <TesteList/>
        </Container>
    );
};

export default TesteListPage;