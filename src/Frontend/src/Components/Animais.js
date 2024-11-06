import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 1280px;
`
const Frame_1 = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
`
function Animais({ Animais }) {
    const navigate = useNavigate(); // Hook para navegação
    return (
        <Container>
            <Frame_1>
                {Animais.map((Animal) => (
                    <div key={Animal.id}>
                        <img src={Animal.imagem_Animal} alt={Animal.Nome} />
                        <button onClick={() => navigate(`/Animal/${Animal.id}`)}></button>
                    </div>
                ))}
            </Frame_1>
        </Container>
    )
}

export default Animais; 