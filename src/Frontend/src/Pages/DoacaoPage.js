import styled from "styled-components";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import DivDeDoacao from "../Components/DivDeDoacao";
import React, { useState } from 'react';

const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 75px;
width: 100%;
`;
function DoacaoPage(){

  return (
    <Container>
      <DivDeDoacao/>
    </Container>
  );
}

export default DoacaoPage;