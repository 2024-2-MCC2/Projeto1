import styled from "styled-components";

const MancheteContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
//background-color: red;
&:Hover .frame2_2{
    text-decoration: underline;
}
&:Hover .capa{
    transform: scale(1.2);
}
&:Hover .frame2{
    border: 0.5px solid RGB(108, 108, 108, 100%);
} 
`
const Frame1 = styled.div`
width: 300px;
height: 300px;
overflow: hidden;
img{
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease; 
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

function Manchete({imagem, info, titulo, lead}){
    return(
        <MancheteContainer>
            <Frame1>
                <img className="capa" src = {imagem}></img>
            </Frame1>
            <Frame2 className="frame2">
                <Frame2_1>
                    <p>{info || "informações da noticia"}</p>
                </Frame2_1>
                <Frame2_2 className="frame2_2">
                    <h1>{titulo || "Titulo"}</h1>
                </Frame2_2>
                <Frame2_3>
                    <p>{lead || "breve resumo da noticia"}</p>
                </Frame2_3>
            </Frame2>
        </MancheteContainer>
    );
}
export default Manchete;