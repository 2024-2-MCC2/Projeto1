import styled from "styled-components";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import AnimaisList from "../Components/AnimaisList";

const Container =  styled.div`
`


function AnimalPage(){

    return (
      <Container>
        <Header/>
        <AnimaisList/>
        <Footer/>
      </Container>
    );
  }
  
  export default AnimalPage;