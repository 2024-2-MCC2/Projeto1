import styled from "styled-components";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import DivDeDoacao from "../Components/DivDeDoacao";
import React, { useState } from 'react';
import Cadastro from "../Components/Cadastro";
import Login from "../Components/Login";

const DoacaoPageContainer = styled.div``;

function DoacaoPage(){

  return (
    <DoacaoPageContainer>
      <Header/>
      <DivDeDoacao/>
      <Login/>
      <Cadastro/>
      <Footer/>
    </DoacaoPageContainer>
  );
}

export default DoacaoPage;