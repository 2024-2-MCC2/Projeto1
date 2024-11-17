import styled from "styled-components";
import { useNavigate } from 'react-router-dom';


const Frame1 = styled.div`
width: 300px;
height: 300px;
overflow: hidden;
img{
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease; 
    object-fit: cover;
}
`
const Frame2 = styled.div`
overflow-wrap: break-word;
word-break: break-word;
max-width: 300px;
display: flex;
flex-direction: column;
padding: 5px;
margin-top: 5px;
border: 0.5px solid RGB(108, 108, 108, 30%);
`
const Frame2_1 = styled.div`
font-size: 12px;
color: #6C6C6C;
`
const Frame2_2 = styled.div`
h1{
    font-size: 32px;
    color: #000;
}
`
const Frame2_3 = styled.div`
font-size: 12px;
color: #6C6C6C;
`
const MancheteContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
&:Hover{
    cursor: pointer;
    
    ${Frame2}{
        border: 0.5px solid RGB(108, 108, 108, 100%);
    }
    ${Frame2_2}{
        text-decoration: underline;  
    }
    .capa{
        transform: scale(1.2);
    }
}
`
function Manchete({Noticias}){

    const navigate = useNavigate();

    return(
        <>
        {Noticias.map((Noticia, index) => (
        <MancheteContainer key={index} onClick={() => navigate(`/Noticia/${Noticia.id}`)}>
            <Frame1>
                <img className="capa" src={`http://localhost:5000/uploads/ImagensNoticias/${Noticia.Imagem}`}></img>
            </Frame1>
            <Frame2 className="frame2">
                <Frame2_1>
                    <p>{Noticia.Entidade}</p>
                    <p>{Noticia.Data}</p>
                </Frame2_1>
                <Frame2_2 className="frame2_2">
                    <h1>{Noticia.Titulo}</h1>
                </Frame2_2>
                <Frame2_3>
                    <p>{Noticia.Chamada}</p>
                </Frame2_3>
            </Frame2>
        </MancheteContainer>
        ))}
        </>
    );
}
export default Manchete;