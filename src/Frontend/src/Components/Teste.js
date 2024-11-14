import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";

function Teste() {

    const { id } = useParams();  // Obtém o ID da URL
    const navigate = useNavigate();
    const [Noticia, setNoticia] = useState(null);
  
    useEffect(() => {
      const fetchedNoticia = async () =>{
        try{
          const response = await axios.get(`http://localhost:5003/api/Noticias/${id}`)
          setNoticia(response.data)
        } catch (error){
          console.error('Erro ao buscar a Noticia', error)
        }
      }
      setNoticia(fetchedNoticia);
    }, [id]);
  
  
    if (!Noticia) {
      return <div>Noticia não encontrada.</div>;
    }

    return (
        <div>
            <p>ID: {Noticia.id}</p>
            <p>Titulo: {Noticia.Titulo}</p>
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

