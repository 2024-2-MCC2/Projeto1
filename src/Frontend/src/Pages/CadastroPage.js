import React, { useEffect } from 'react';
import Cadastro from "../Components/Cadastro";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 75px;
  width: 100%;
`;

function CadastroPage() {
  
    useEffect(() => {
        // Rola para o topo da página quando o componente é montado
        window.scrollTo(0, 0);
      }, []);

  return (
    <Container>
      <Cadastro />
    </Container>
  );
}

export default CadastroPage;