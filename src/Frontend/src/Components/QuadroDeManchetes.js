import styled from "styled-components";
import Manchete from "./Manchetes";

const QuadroDeManchetesContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0 50px;
width: 100%;
//background-color: green;
`
const Frame1 = styled.div`
display: flex;
justify-content: space-between;
align-items: bottom;
margin-bottom: 20px;
width: 1280px;
//background-color: yellow;
`
const Frame1_1 = styled.div`
//background-color: blue;
h1{
    font-size: 64px;
    font-weight: bolder;
    color: #000;
}
`
const Frame1_2 = styled.div`
display: flex;
justify-content: center;
align-items: flex-end;
//background-color: red;
&:hover{
    text-decoration: underline;
}
p{
    margin: 0;
    //background-color: blue;
}
`
const Frame2 = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 1280px;
//background-color: red;
`

function QuadroDeManchetes(){
    return(
        <QuadroDeManchetesContainer>
            <Frame1>
                <Frame1_1>
                    <h1>Fique por dentro</h1>
                </Frame1_1>
                <Frame1_2>
                    <p>veja todas as noticias</p>
                </Frame1_2>
            </Frame1>
            <Frame2>
                    <Manchete 
                    imagem="https://placehold.co/250x250/000000/FFF" 
                    info="info" 
                    titulo="Titulo da notícia 1" 
                    lead="Aqui vai um breve resumo blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
                    />
                    <Manchete 
                    imagem="https://placehold.co/250x250/000000/FFF" 
                    info="info" 
                    titulo="Titulo da notícia 2" 
                    lead="Aqui vai um breve resumo blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
                    />
                    <Manchete 
                    imagem="https://placehold.co/250x250/000000/FFF" 
                    info="info" 
                    titulo="Titulo da notícia 3" 
                    lead="Aqui vai um breve resumo blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
                    />
                    <Manchete 
                    imagem="https://placehold.co/250x250/000000/FFF" 
                    info="info" 
                    titulo="Titulo da notícia 4" 
                    lead="Aqui vai um breve resumo blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
                    />
            </Frame2>
        </QuadroDeManchetesContainer>
    )
}
export default QuadroDeManchetes;
