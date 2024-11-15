import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from "../Service/api"

const NoticiaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1280px;
  gap: 25px;
  padding: 20px 50px;
`;
const Frame1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  overflow-wrap: break-word;
  word-break: break-word;
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 90px;
    font-weight: bold;
  }
  p {
    font-size: 32px;
    font-weight: bold;
  }
`;
const Frame1_1 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  p {
    font-size: 16px;
    font-weight: bold;
  }
`;
const Frame2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  overflow-wrap: break-word;
  word-break: break-word;
  gap: 20px;
  pre {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    white-space: pre-wrap;
    word-wrap: break-word;
    text-indent: 2em;
  }
  img{
    width: 100%;
    border: 10px solid #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }
`;
const Frame3 = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #84BEFF;
  width: 100%;
  border-radius: 15px;
  padding: 20px;
  span {
    padding: 0 0 0 10px;
  }
  button {
    align-items: center;
    justify-content: center;
    background-color: #84BEFF;
    border: none;
  }
  p{
    border-right: 1px solid #000000;
    padding-right: 10px;
  }
  `;


function Noticiadb() {

  const { id } = useParams();
  const [Noticia, setNoticia] = useState(null);
  const [conteudo, setConteudo] = useState('');

  useEffect(() => {
    api.get(`/Noticias/${id}`)
      .then((response) => setNoticia(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  const [textoParaCopiar, setTextoParaCopiar] = useState(Noticia.Referencia);
  
  useEffect(() => {
    if (Noticia) {
      // Fetch the content of the imported text file
      fetch(`http://localhost:5000/${Noticia.Texto}`)
        .then(response => response.text())
        .then(text => {
          setConteudo(text);
        })
        .catch(err => console.error('Erro ao carregar o arquivo:', err));
    }
  }, [Noticia]);

  const copiarTexto = () => {
    navigator.clipboard.writeText(textoParaCopiar)
      .then(() => {
        alert('Texto copiado: ' + textoParaCopiar);
      })
      .catch(err => {
        console.error('Erro ao copiar o texto: ', err);
      });
  };


  return (
    <NoticiaContainer>
      <Frame1>
        <h1 href="titulo">{Noticia.Titulo || "Titulo da Notícia"}</h1>
        <Frame1_1>
          <p>{Noticia.Entidade || "Entidade"}</p>
          <p>{Noticia.Autor || "Autor"}</p>
          <p>{Noticia.Data}</p>
          <p>{Noticia.TempoDeLeitura || "x"} min</p>
        </Frame1_1>
        <p>{Noticia.Chamada || "BLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLA"}</p>
      </Frame1>
      <Frame2>
        <pre>{conteudo}</pre>
      </Frame2>
      <Frame3>
        <p>{Noticia.Referencia || "Referencia Bibliografica ABNT"}</p>
        <button onClick={copiarTexto}>
          <span class="material-symbols-outlined">content_copy</span>
        </button>
      </Frame3>
    </NoticiaContainer>
  );


}

export default Noticiadb;