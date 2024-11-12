import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import Noticia from "../Components/Noticia";
import axios from 'axios'

const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 75px;
width: 100%;
`;

function NoticiaPage(){

    const [Noticias, setNoticias] = useState([]);

    useEffect(() => {
        const fetchNoticia = async () => {
          try {
            const response = await axios.get('http://localhost:5001/api/Noticias')
            setNoticias(response.data);
          } catch (error) {
            console.error('Erro ao buscar personagens', error);
          }
        };
    
        fetchNoticia();
      }, []);

    useEffect(() => {
        // Rola para o topo da página quando o componente é montado
        window.scrollTo(0, 0);
      }, []);

    return(
        <Container>
            <Noticia noticias={Noticias} />
        </Container>
    )
}

export default NoticiaPage;