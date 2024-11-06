import 'bootstrap/dist/css/bootstrap.min.css';
import '../global.css';
import SobreNos from "../Components/SobreNos";
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 75px;
width: 100%;
`;

function SobreNosPage(){
  return(
    <Container>
      <SobreNos/>    
    </Container>
  );
}
export default SobreNosPage