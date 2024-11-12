import styled from "styled-components";
import React, { useEffect } from 'react';
import Doacao from "../Components/Doacao";

const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 75px;
width: 100%;
`;
function DoacaoPage(){

  useEffect(() => {
    // Rola para o topo da página quando o componente é montado
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Doacao/>
    </Container>
  );
}

export default DoacaoPage;