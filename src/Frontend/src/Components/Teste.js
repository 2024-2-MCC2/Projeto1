import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";

function Teste() {
    const { id } = useParams();  // Obtém o ID da URL
    const [Noticia, setNoticia] = useState(null);

    useEffect(() => {
        // Faz uma requisição para obter os dados do usuário pelo ID
        axios.get(`http://localhost:5002/api/Noticias/${id}`)
            .then(response => setNoticia(response.data))
            .catch(error => console.error('Erro ao buscar dados do usuário:', error));
    }, [id]);

    if (!Noticia) return <p>Carregando...</p>;

    return (
        <div>
            <p>Titulo: {Noticia.Titulo}</p>
            <p>ID: {Noticia.id}</p>
            <p>Entidade: {Noticia.Entidade}</p>
            <p>Autor: {Noticia.Autor}</p>
            <p>Data: {Noticia.Data}</p>
            <p>Autor: {Noticia.Autor}</p>
            <p>TempoDeLeitura: {Noticia.TempoDeLeitura}</p>
            <p>Chamada: {Noticia.Chamada}</p>
            <p>LinkURL: {Noticia.LinkURL}</p>
            <p>Referencia: {Noticia.Referencia}</p>
            <p>Texto: {Noticia.Texto}</p>
            <p>Imagem: {Noticia.Imagem}</p>
        </div>
    );
};

export default Teste;

