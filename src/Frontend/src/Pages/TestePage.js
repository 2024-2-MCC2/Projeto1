import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Teste from '../Components/Teste';
import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 75px;
width: 100%;
`;

function TestePage() {

    

    return (
        <Container>
            <Teste/>
        </Container>
    );
};

export default TestePage;