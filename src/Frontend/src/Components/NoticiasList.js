import styled from "styled-components";
import NoticiasTopic from "./NoticiasTopic";
import { useNavigate } from 'react-router-dom';

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

function NoticiasList({NoticiasData}) {

    const navigate = useNavigate();

    return (
        <Container>
            <h1>Biblioteca de Notícias</h1>
            <ListaDeNoticias>
                {NoticiasData.map((Noticia) => (
                    <NoticiasTopic 
                        onClick={() => navigate(`/Noticia/${Noticia.id}`)}
                        noticia = {Noticia}
                    />
                ))}
            </ListaDeNoticias>

        </Container>
    )
}
export default NoticiasList