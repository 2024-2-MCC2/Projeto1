import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import NoticiaDIV from "../Components/Noticiadb";
import axios from 'axios';


const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 75px;
width: 100%;
`;

function NoticiaPagedb() {

  useEffect(() => {
    window.scrollTo(
        {
            top: 0,
            left: 0,
            behavior: 'auto'
        });
}, []);

  
  return (
    <Container>
      <NoticiaDIV/>
    </Container>
  )
}

export default NoticiaPagedb;