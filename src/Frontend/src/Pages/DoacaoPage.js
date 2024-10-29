import styled from "styled-components";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import DivDeDoacao from "../Components/DivDeDoacao";
import React, { useState } from 'react';

const DoacaoPageContainer = styled.div``;

function DoacaoPage(){

  return (
    <DoacaoPageContainer>
      <Header/>
      <DivDeDoacao/>
      <Footer/>
    </DoacaoPageContainer>
  );
}

export default DoacaoPage;