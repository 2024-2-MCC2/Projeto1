import styled from "styled-components";
import React, { useState } from 'react';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
max-width: 1280px;
gap: 25px;
padding: 0 50px;
`
const Frame1 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
overflow-wrap: break-word;
word-break: break-word;
h1{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 90px;
    font-weight: bold;
}
p{
    font-size: 32px;
    font-weight: bold;
}
`
const Frame1_1 = styled.div`
display: flex;
align-items: center;
//justify-content: center;
gap: 10px;
width: 100%;
p{
    
    font-size: 16px;
    font-weight: bold;
}
`
const Frame2 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
overflow-wrap: break-word;
word-break: break-word;
pre{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    white-space: pre-wrap;
    word-wrap: break-word;
}
`
const Frame3 = styled.div`
display: flex;
justify-content: space-between;
background-color: #84BEFF;
width: 100%;
border-radius: 15px;
padding: 20px;
span{
    padding: 0 0 0 10px;
    border-left: 1px solid #000000;
}
button{
    align-items: center;
    justify-content: center;
    background-color: #84BEFF;
    border: none;
}

`
//------------------------------------------------------------------
function Noticia({ Titulo, Entidade, Autor, Data, TempoDeLeitura, Chamada, LinkURL, Referencia, Texto }) {
    const [conteudo, setConteudo] = useState('');
    const [textoParaCopiar, setTextoParaCopiar] = useState(Referencia || "Referencia Bibliografica ABNT");

    const copiarTexto = () => {
        navigator.clipboard.writeText(textoParaCopiar)
            .then(() => {
                alert('Texto copiado: ' + textoParaCopiar);
            })
            .catch(err => {
                console.error('Erro ao copiar o texto: ', err);
            });
    };

    const lerArquivo = (event) => {
        const arquivo = event.target.files[0]; // Pega o primeiro arquivo selecionado

        if (arquivo) {
            const leitor = new FileReader();

            leitor.onload = (e) => {
                setConteudo(e.target.result); // Define o conteúdo lido no estado
            };

            leitor.readAsText(arquivo); // Lê o arquivo como texto
        }
    };

    return (
        <Container>
            <Frame1>
                <h1 href="titulo">{Titulo || "Titulo da Notícia"}</h1>
                <Frame1_1>
                    <p>{Entidade || "Entidade"}</p>
                    <p>{Autor || "Autor"}</p>
                    <p>{Data}</p>
                    <p>{TempoDeLeitura || "x"} min</p>
                </Frame1_1>
                <p>{Chamada || "BLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLA"}</p>
            </Frame1>
            <Frame2>
                <input type="file" accept=".txt" onChange={lerArquivo} />
                <pre>{conteudo}</pre> {/* Renderiza o conteúdo do arquivo */}
            </Frame2>
            <Frame3>
                <p>{Referencia || "Referencia Bibliografica ABNT"}</p>
                <button onClick={copiarTexto}>
                    <span class="material-symbols-outlined">content_copy</span>
                </button>
            </Frame3>
        </Container>
    );
}

export default Noticia;