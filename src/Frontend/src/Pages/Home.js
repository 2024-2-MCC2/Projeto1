import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrossel from "../Components/Carrossel";
import QuadroDeManchetes from "../Components/QuadroDeManchetes";
import Enfrentamos from "../Components/Enfrentamos";
import React, { useEffect } from 'react';

const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 75px;
width: 100%;
`

function Home(){

  useEffect(() => {
    // Rola para o topo da página quando o componente é montado
    window.scrollTo(0, 0);
  }, []);

    return(
      <Container>
        <Carrossel/>
        <Enfrentamos/>
        <QuadroDeManchetes/>
      </Container>
    );
  }
  export default Home