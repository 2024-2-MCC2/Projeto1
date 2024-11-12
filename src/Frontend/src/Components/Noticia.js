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
    border: 1px solid #000;
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
    border-left: 1px solid #000000;
  }
  button {
    align-items: center;
    justify-content: center;
    background-color: #84BEFF;
    border: none;
  }
`;
function Noticia({ Titulo, Entidade, Autor, Data, TempoDeLeitura, Chamada, Imagem, Referencia, Texto }) {
  //function Noticia() {
  const [textoParaCopiar, setTextoParaCopiar] = useState(Referencia);

  const copiarTexto = () => {
    navigator.clipboard.writeText(textoParaCopiar)
      .then(() => {
        alert('Texto copiado: ' + textoParaCopiar);
      })
      .catch(err => {
        console.error('Erro ao copiar o texto: ', err);
      });
  };

  const [conteudo, setConteudo] = useState('');

  useEffect(() => {
    // Fetch the content of the imported text file
    fetch(Texto)
      .then(response => response.text())
      .then(text => {
        setConteudo(text);
      })
      .catch(err => console.error('Erro ao carregar o arquivo:', err));
  }, []);

  /*
  const { id } = useParams();
  const navigate = useNavigate();
  const [Noticias, setNoticias] = useState(null);
  const [loading, setLoading] = useState(true); // Estado de carregamento

  useEffect(() => {
    const fetchedNoticias = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/personagens/${id}`);
        setNoticias(response.data);
      } catch (error) {
        console.error('Erro ao buscar o personagem', error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchedNoticias(); // Chama a função para buscar as notícias
  }, [id]);
  // Se estiver carregando, exibe uma mensagem
  if (loading) {
    return <p>Carregando...</p>;
  }

  // Se não houver notícias, exibe uma mensagem
  if (!Noticias) {
    return <p>Nenhuma notícia encontrada.</p>;
  }

    return (
        <NoticiaContainer>
            <Frame1>
                <h1 href="titulo">{Noticias.Titulo || "Titulo da Notícia"}</h1>
                <Frame1_1>
                    <p>{Noticias.Entidade || "Entidade"}</p>
                    <p>{Noticias.Autor || "Autor"}</p>
                    <p>{Noticias.Data}</p>
                    <p>{Noticias.TempoDeLeitura || "x"} min</p>
                </Frame1_1>
                <p>{Noticias.Chamada || "BLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLA"}</p>
            </Frame1>
            <Frame2>
                <input type="file" accept=".txt" onChange={lerArquivo} />
                <pre>{conteudo}</pre> 
            </Frame2>
            <Frame3>
                <p>{Noticias.Referencia || "Referencia Bibliografica ABNT"}</p>
                <button onClick={copiarTexto}>
                    <span class="material-symbols-outlined">content_copy</span>
                </button>
            </Frame3>
        </NoticiaContainer>
    );
    */

  return (
    <NoticiaContainer>
      <Frame1>
        <h1 href="titulo">{Titulo || "Titulo da Notícia"}</h1>
        <Frame1_1>
          <p>{Entidade || "Entidade"}</p>
          <p>{Autor || "Autor"}</p>
          <p>{Data}</p>
          <p>{TempoDeLeitura || "x"} min</p>
        </Frame1_1>
        <p>{Chamada || "BLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLA"}</p>
      </Frame1>
      <Frame2>
        <img src={Imagem} />
        
        <pre>{conteudo}</pre>
      </Frame2>
      <Frame3>
        <p>{Referencia || "Referencia Bibliografica ABNT"}</p>
        <button onClick={copiarTexto}>
          <span class="material-symbols-outlined">content_copy</span>
        </button>
      </Frame3>
    </NoticiaContainer>
  );

}

export default Noticia;