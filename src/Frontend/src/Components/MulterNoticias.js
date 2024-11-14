import React, { useEffect } from 'react';
import Login from "../Components/Login";
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
flex-direction: column;
align-items: center;
width: 100%;
height: 100%;
padding: 50px 100px;
background-color: #D9D9D9;
h1{
    width: 100%;
    text-align: start;
    border-bottom: 2px solid #000;
    padding: 10px;
    font-size: 48px;
}
h2{
    font-size: 50px;;
    color: #0460C9;
}
`;
const MulterTopic = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
width: 100%;
height: 100%;
border-bottom: 2px solid #0460C9;
`;
const Text = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 100%;
height: 100%;
gap: 5px;
padding: 10px;
border: 2px solid #0460C9;
margin: 2px 0;
background-color: #fff;
border-radius: 10px;
`;
const Frame1 = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
width: 10%;
height: 100%;
gap: 10px;
p{
    font-size: 48px;
}
`;
const Frame2 = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 90%;
height: 100%;
margin: 10px;
.Topico{
    width: 100%;
    font-weight: bold;
    font-size: 15px;
    color: #0460C9;
}
.Conteudo{
    width: 100%;
    overflow-wrap: break-word;
    word-break: break-word;
}
`;
const Frame3 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 10%;
height: 100%;
gap: 20px;
margin: auto 0;
`;
const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
border: none;
border-radius: 100%;
background-color: rgb(0,0,0,0);
padding: 20px;
span{
    font-size: 30px;
}
&:Hover{
    background-color: rgb(255,255,255,1);
}
`;

function MulterNoticias({ NoticiasData }) {

    useEffect(() => {
        // Rola para o topo da página quando o componente é montado
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container>
            <h1>Cadastro de Noticias</h1>
            {NoticiasData.map((Noticia, index) => (
                <MulterTopic>
                    <Frame1>
                        <h2 className='Topico'>id: </h2>
                        <h2 className='Conteudo'>{Noticia.id}</h2>
                    </Frame1>
                    <Frame2>
                        <Text>
                            <p className='Topico'>Titulo: </p>
                            <p className='Conteudo'>{Noticia.Titulo}</p>
                        </Text>
                        <Text>
                            <p className='Topico'>Entidade: </p>
                            <p className='Conteudo'>{Noticia.Entidade}</p>
                        </Text>
                        <Text>
                            <p className='Topico'>Autor: </p>
                            <p className='Conteudo'>{Noticia.Autor}</p>
                        </Text>
                        <Text>
                            <p className='Topico'>Data: </p>
                            <p className='Conteudo'>{Noticia.Data}</p>
                        </Text>
                        <Text>
                            <p className='Topico'>TempoDeLeitura: </p>
                            <p className='Conteudo'>{Noticia.TempoDeLeitura}</p>
                        </Text>
                        <Text>
                            <p className='Topico'>Chamada: </p>
                            <p className='Conteudo'>{Noticia.Chamada}</p>
                        </Text>
                        <Text>
                            <p className='Topico'>LinkURL: </p>
                            <p className='Conteudo'>{Noticia.LinkURL}</p>
                        </Text>
                        <Text>
                            <p className='Topico'>Referencia: </p>
                            <p className='Conteudo'>{Noticia.Referencia}</p>
                        </Text>
                        <Text>
                            <p className='Topico'>Imagem: </p>
                            <p className='Conteudo'>{Noticia.Imagem}</p>
                        </Text>
                        <Text>
                            <p className='Topico'>Caminho do Texto: </p>
                            <p className='Conteudo'>{Noticia.Texto}</p>
                        </Text>
                    </Frame2>
                    <Frame3>
                        <Button>
                            <span class="material-symbols-outlined">delete</span>
                        </Button>
                        <Button>
                            <span class="material-symbols-outlined">edit</span>
                        </Button>
                    </Frame3>
                </MulterTopic>
            ))}
        </Container>
    )
}

export default MulterNoticias;