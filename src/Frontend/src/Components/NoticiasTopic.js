import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
padding: 10px;
border: 1px solid #948E8E;
width: 1000px;
height: 220px;
&:Hover{
    border: 1px solid #06C7F2;
    .tipo{
        color:  #06C7F2;
    }
    .Titulo{
    text-decoration: underline;
    }
}

`
const Frame1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
img{
    height: 100%;
    object-fit: cover;
}
`
const Frame2 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100%;
width: 100%;
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

function NoticiasTopic( {imagem, titulo, lead, fonte, data, tempoDeLeitura}){
    return(
        <Container>
            <Frame1>
                <img src={imagem || "https://placehold.co/250x200/000000/FFF"}/>
            </Frame1>
            <Frame2>
                <Frame2_1>
                    <p className="tipo">blog • #hashtag #hashtag #hashtag</p>
                </Frame2_1>
                <Frame2_2>
                    <h2 className="Titulo">{titulo || "Titulo da Notícia"}</h2>
                </Frame2_2>
                <Frame2_3>
                    <p>{lead ||"blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla..."}</p>
                </Frame2_3>
                <Frame2_4>
                    <p>{fonte || "fonte"} • {data || "01 de janeiro de 2024"} • {tempoDeLeitura || "x"} min</p>
                </Frame2_4>
            </Frame2>
        </Container>
    )
}
export default NoticiasTopic