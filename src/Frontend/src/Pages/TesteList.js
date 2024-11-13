import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Teste from '../Components/Teste';
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

function TesteList(){
    
    const [Noticias, setNoticias] = useState([]);

    useEffect(() => {
        // Faz uma requisição para obter a lista de usuários
        axios.get('http://localhost:5002/api/Noticias')
            .then(response => setNoticias(response.data))
            .catch(error => console.error('Erro ao buscar usuários:', error));
    }, []);
    return (
        <Container>
        <h1>Lista de Noticias</h1>
        <ul>
            {Noticias.map(Noticia => (
                <li key={Noticia.id}>
                    {/* Link para a página individual de cada usuário */}
                    <Link to={`/Teste/${Noticia.id}`}>{Noticia.Titulo}</Link>
                </li>
            ))}
        </ul>
        </Container>
    );
};

export default TesteList;