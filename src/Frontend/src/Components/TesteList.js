import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import api from "../Service/api"

const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 75px;
width: 100%;
`;

function TesteList() {

    const [Noticias, setDados] = useState([]);

    useEffect(() => {
        api.get("/Noticias")
            .then((response) => setDados(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <Container>
            <h1>Lista de Noticias</h1>
            <ul>
                {Noticias.map(Noticia => (
                    <li key={Noticia.id}>
                        {/* Link para a página individual de cada usuário */}
                        <Link to={`/Teste/${Noticia.id}`}>
                            {Noticia.Titulo}
                        </Link>
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export default TesteList;