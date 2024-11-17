import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


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
function Noticia({ noticias }) {
  const { id } = useParams(); // Captura o ID da URL
  const noticia = noticias.find((noticia) => noticia.id === parseInt(id)); // Busca a notícia pelo ID

  const [textoParaCopiar, setTextoParaCopiar] = useState(noticia?.Referencia || '');
  const [conteudo, setConteudo] = useState('');

  const copiarTexto = () => {
    navigator.clipboard.writeText(textoParaCopiar)
      .then(() => {
        alert('Texto copiado: ' + textoParaCopiar);
      })
      .catch(err => {
        console.error('Erro ao copiar o texto: ', err);
      });
  };

  useEffect(() => {
    if (noticia?.Texto) {
      // Busca o conteúdo do arquivo de texto associado à notícia
      fetch(`http://localhost:5000/uploads/TextosNoticias/${noticia.Texto}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo');
          }
          return response.text();
        })
        .then(text => {
          setConteudo(text);
        })
        .catch(err => console.error('Erro ao carregar o arquivo:', err));
    }
  }, [noticia]);

  if (!noticia) {
    return <p>Notícia não encontrada!</p>;
  }

  return (
    <NoticiaContainer>
      <Frame1>
        <h1>{noticia.Titulo || "Título da Notícia"}</h1>
        <Frame1_1>
          <p>{noticia.Entidade || "Entidade"}</p>
          <p>•</p>
          <p>{noticia.Autor || "Autor"}</p>
          <p>•</p>
          <p>{noticia.Data}</p>
          <p>•</p>
          <p>{noticia.TempoDeLeitura || "x"} min</p>
        </Frame1_1>
        <p>{noticia.Chamada || "Chamada da notícia não disponível."}</p>
      </Frame1>
      <Frame2>
        <img
          src={`http://localhost:5000/uploads/ImagensNoticias/${noticia.Imagem}`}
          alt={noticia.Titulo}
        />
        <pre>{conteudo || "Texto da notícia não disponível."}</pre>
      </Frame2>
      <Frame3>
        <p>{noticia.Referencia || "Referência Bibliográfica ABNT"}</p>
        <button onClick={copiarTexto}>
          <span className="material-symbols-outlined">content_copy</span>
        </button>
      </Frame3>
    </NoticiaContainer>
  );
}

export default Noticia;