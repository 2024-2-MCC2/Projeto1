import React, { useEffect } from 'react';
import styled from "styled-components";
import NoticiasList from "../Components/NoticiasList";


const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 75px;
width: 100%;
`;

function CatalogoDeNoticias(){

    useEffect(() => {
        // Rola para o topo da página quando o componente é montado
        window.scrollTo(0, 0);
      }, []);

    return(
        <Container>
            <NoticiasList/>
        </Container>
    )
}

export default CatalogoDeNoticias;