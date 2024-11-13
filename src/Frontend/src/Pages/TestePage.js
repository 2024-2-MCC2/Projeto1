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

    const { id } = useParams();
    console.log(id); // Verifique se o ID está correto
    const [Noticia, setNoticia] = useState(null);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5003/api/Noticias/${id}`)
            .then(response => {
                console.log(response.data); // Verifique a resposta aqui
                setNoticia(response.data);
            })
            .catch(error => console.error('Erro ao buscar dados do usuário:', error));
    }, [id]);

    if (erro) {
        return <p>{erro}</p>;  // Exibe mensagem de erro, se houver
    }

    if (!Noticia) {
        return <p>Carregando...</p>;  // Exibe um indicador de carregamento enquanto a notícia não está disponível
    }

    return (
        <Container>
            <Teste Noticia={Noticia} />
        </Container>
    );
};

export default TestePage;