import styled from "styled-components";
import NoticiasTopic from "./NoticiasTopic";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 1000px;
h1{
    width: 100%;
    padding: 20px 0;
    border-bottom: 3px solid #000; 
}
`
const ListaDeNoticias = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
padding: 20px 0;
width: 1000px;
`

function NoticiasList(){
    return(
        <Container>
            <h1>Biblioteca de Notícias</h1>
            <ListaDeNoticias>
                <NoticiasTopic
                    imagem = ""
                    titulo = "" 
                    lead = ""
                    fonte = ""
                    data = ""
                    tempoDeLeitura =""
                />
                <NoticiasTopic
                    imagem = ""
                    titulo = "" 
                    lead = ""
                    fonte = ""
                    data = ""
                    tempoDeLeitura =""
                />
                <NoticiasTopic
                    imagem = ""
                    titulo = "" 
                    lead = ""
                    fonte = ""
                    data = ""
                    tempoDeLeitura =""
                />
                <NoticiasTopic
                    imagem = ""
                    titulo = "" 
                    lead = ""
                    fonte = ""
                    data = ""
                    tempoDeLeitura =""
                />
            </ListaDeNoticias>
            
        </Container>
    )
}
export default NoticiasList