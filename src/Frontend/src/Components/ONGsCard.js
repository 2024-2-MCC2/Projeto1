import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const ContainerONGsCard = styled.div`
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
width: 1280px;
height: auto;
background: #FFFFFF;
gap: 50px;
padding: 50px;
`;

const Frame1 = styled.div`
justify-content: center;
align-items: center;
text-align: center;
gap: 20px;
width: 100%;
height: 100%;
h1{
    font-size: 80px;
}
`;

const Frame2 = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center; 
    align-items: center; 
    justify-content: center;
    gap: 20px;
    width: 100%;
    height: 100%;
    
`;

const Legenda = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 18px;
text-align: center;
width: 100%;
height: 20%;
`

const ONGButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center; /* Centraliza a imagem dentro do botão */
    width: 100%;
    height: 200px;
    border-radius: 100%;
    border: 3px solid #000;
    overflow: hidden;
    position: relative;
    img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: fill;
        border-radius: 100%; /* Mantém a borda arredondada da imagem */
    }
`;
const Frame2_1 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 5px;
width: 100%;
height: 100%;
&:hover{
    ${ONGButton}{
        border: 5px solid #2575CF;
    }
    ${Legenda}{
        font-weight: bold;
        color: #2575CF;
    }
}
`;

function ONGsCard({ ONGsData }) {

    const navigate = useNavigate();

    return (
        <ContainerONGsCard>
            <Frame1>
                <h1>Conheça nossa ONGs parceiras</h1>
            </Frame1>
            <Frame2>
                {ONGsData.map((ONG) => (
                    <Frame2_1 key={ONG.id}>
                        <ONGButton onClick={() => navigate(`/ONGs/${ONG.id}`)}>
                            <img src={ONG.Imagem} />
                        </ONGButton>
                        <Legenda href="Legenda">{ONG.Nome}</Legenda>
                    </Frame2_1>
                ))}
            </Frame2>
        </ContainerONGsCard>
    )
}
export default ONGsCard;