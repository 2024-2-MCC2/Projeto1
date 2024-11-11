import React, { useEffect } from 'react';
import styled from "styled-components";
import Noticia from "../Components/Noticia";

const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 75px;
width: 100%;
`;

function NoticiaPage(){

    useEffect(() => {
        // Rola para o topo da página quando o componente é montado
        window.scrollTo(0, 0);
      }, []);

    return(
        <Container>
            <Noticia/>
        </Container>
    )
}

export default NoticiaPage;