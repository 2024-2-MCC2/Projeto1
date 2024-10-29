import Header from "../Components/Header"
import Footer from "../Components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import QuadroDeManchetes from "../Components/QuadroDeManchetes";
import '../global.css';
import AboutUs from "../Components/AboutUs";
import styled from 'styled-components';

const Container = styled.div`
`;

function SobreNos(){
  return(
    <Container>
      <Header/>
      <AboutUs/>    
      <Footer/>
    </Container>
  );
}
export default SobreNos