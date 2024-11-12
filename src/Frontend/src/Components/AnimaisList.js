import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const AnimaisContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 1280px;
margin-bottom: 50px;
`
const Frame_1 = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
`
const AnimalIMG = styled.div`
display: inline-block;
overflow: hidden;
position: relative;
`
const Frame_1_1 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
gap: 10px;
width: 100%;
height: 100%;
opacity: 0;
h2{
    //font-size: 16px;
    color: #fff;
    text-align: center;
}
${AnimalIMG}:hover &{
    opacity: 1;
    background-color: rgb(0,0,0,50%);
}
`
const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
background-color: #F2C538;
border-radius: 100%;
border: none;
`
const Imagem = styled.img`
width: 100%;
height: 100%;
position: center;
object-fit: cover;
align-items: center;
`

function AnimaisList({ Animais }) {
    const navigate = useNavigate(); // Hook para navegação
    return (
        <AnimaisContainer>
            <Frame_1>
                {Animais.map((Animal) => (
                    <AnimalIMG key={Animal.id}>
                        <Frame_1_1>
                            <Button onClick={() => navigate(`/Animal/${Animal.id}`)}>
                                <span class="material-symbols-outlined">arrow_forward_ios</span>
                            </Button>
                            <h2>{Animal.Nome}</h2>
                        </Frame_1_1>
                        <Imagem src={Animal.imagem_Animal} />
                    </AnimalIMG>
                ))}
            </Frame_1>
        </AnimaisContainer>
    )
}

export default AnimaisList; 