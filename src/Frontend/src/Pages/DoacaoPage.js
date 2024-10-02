import styled from "styled-components";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import DivDeDoacao from "../Components/DivDeDoacao";

const DoacaoPageContainer = styled.div``


function DoacaoPage(){
    return(
        <DoacaoPageContainer>
            <Header></Header>
            <DivDeDoacao></DivDeDoacao>
            <Footer></Footer>
        </DoacaoPageContainer> 
    )
}
export default DoacaoPage