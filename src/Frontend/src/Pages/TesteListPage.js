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
    
    const [Noticias, setNoticias] = useState([]);

    useEffect(() => {
        // Faz uma requisição para obter a lista de usuários
        axios.get('http://localhost:5003/api/Noticias')
            .then(response => setNoticias(response.data))
            .catch(error => console.error('Erro ao buscar usuários:', error));
    }, []);
    return (
        <Container>
            <TesteList/>
        </Container>
    );
};

export default TesteListPage;