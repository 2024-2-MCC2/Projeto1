import styled from "styled-components";

//Div mãe
const ContainerMaisNoticias = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 320px;
height: 320px;
border: 1px solid rgb(0, 0, 0, 25%);
padding: 10px;
gap:10px;
div h2:hover{
    color: rgb(6, 199, 242);
}
div p:hover{
    color: rgb(6, 199, 242);
}
&:hover{
    color: rgb(6, 199, 242);
    h2{text-decoration: underline;}
    border-color: rgb(6, 199, 242);
}
`

const Frame1 = styled.div`
max-width: 320px;
width: 100%;
max-height: 250px;
height: 100%;
overflow: hidden;
img{
    width: 100%;
    height: 100%; 
}
`

const Frame2 = styled.div`
flex-direction: column;
align-items: center;
justify-content: left;
width: 100%;
`

const Frame2_1 = styled.div`
//background-color: red;
width: 100%;
`
const Frame2_2 = styled.div`

`
function QuadroNoticias({Imagem, Titulo, Entidade, OnClick}){
    return(
        <ContainerMaisNoticias OnClick = {OnClick}>
            <Frame1>
              <img className="capa" src = {Imagem}></img>
            </Frame1>
            <Frame2>
                <Frame2_1>
                    <h2>{Titulo || "Título"}</h2>
                </Frame2_1>
                <Frame2_2>
                    <p>{Entidade || "entidade"}</p>
                </Frame2_2>
            </Frame2>
        </ContainerMaisNoticias>
    )
}

export default QuadroNoticias;