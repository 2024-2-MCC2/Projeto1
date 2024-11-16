import styled from "styled-components";

const ContainerNoticiasTopic = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
padding: 10px;
border: 1px solid #948E8E;
width: 100%;
height: 100%;
min-height: 250px;

&:Hover{
    border: 1px solid #06C7F2;
    .tipo{
        color:  #06C7F2;
    }
    .Titulo{
    text-decoration: underline;
    }
    cursor: pointer;
}
`
const Frame1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 33%;
overflow: hidden;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`
const Frame2 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100%;
width: 77%;
`
const Frame2_1 = styled.div`
display: flex;
align-items: center;
height: 100%;
width: 100%;
p{
    color: #0460C9;
    font-weight: bold;
}
`
const Frame2_2 = styled.div`
display: flex;
align-items: center;
height: 100%;
width: 100%;
`
const Frame2_3 = styled.div`
display: flex;
align-items: center;
height: 100%;
width: 100%;
p{
    overflow-wrap: break-word;
    word-break: break-word;
}
`
const Frame2_4 = styled.div`
display: flex;
align-items: center;
height: 100%;
width: 100%;
p{
    color: #6C6C6C;
}
`

function NoticiasTopic( {noticia, onClick}){
    
    return(
        <ContainerNoticiasTopic onClick ={onClick}>
            <Frame1>
                <img src={`http://localhost:3000/${noticia.Imagem}`}/>
            </Frame1>
            <Frame2>
                <Frame2_1>
                    <p className="tipo">blog • #hashtag #hashtag #hashtag</p>
                </Frame2_1>
                <Frame2_2>
                    <h2 className="Titulo">{noticia.Titulo || "Titulo da Notícia"}</h2>
                </Frame2_2>
                <Frame2_3>
                    <p>{noticia.Chamada ||"blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla..."}</p>
                </Frame2_3>
                <Frame2_4>
                    <p>{noticia.Fonte || "fonte"} • {noticia.Data || "01 de janeiro de 2024"} • {noticia.TempoDeLeitura || "x"} min</p>
                </Frame2_4>
            </Frame2>
        </ContainerNoticiasTopic>
    )
}
export default NoticiasTopic