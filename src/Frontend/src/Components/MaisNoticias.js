import styled from "styled-components";
import QuadroNoticias from "./QuadroNoticias";

//Div mãe
const MaisNoticias = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
padding: 20px;
`

//Div Texto
const Frame1 = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 1200px;

p:hover{
    text-decoration: underline;
}
`

//Div QuadroNoticias
const Frame2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 50px;
`

function MaisNoticiasContainer(){
    return(
        <MaisNoticias>
            <Frame1>
                <h2>Leia também</h2>
                <p>Veja todas as notícias</p>
            </Frame1>
            <Frame2>
                <QuadroNoticias
                    imagem="https://placehold.co/340x250/000000/FFF"
                    titulo="Noticia1"
                    hashtag="Hashtag"
                />
                <QuadroNoticias
                    imagem="https://placehold.co/340x250/000000/FFF"
                    titulo="Noticia2"
                    hashtag="Hashtag"
                />
                <QuadroNoticias
                    imagem="https://placehold.co/340x250/000000/FFF"
                    titulo="Noticia3"
                    hashtag="Hashtag"
                />
            </Frame2>
        </MaisNoticias>
    )
}

export default MaisNoticiasContainer;