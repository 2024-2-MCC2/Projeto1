import React, { useEffect } from 'react';
import styled from "styled-components";
import { useState } from "react";
import ModalDeEditar from "./ModalDeEditarNoticias"
import ModalDeAdicionar from './ModalDeAdicionarNoticia';
import ModalDeDeletar from './ModalDeDeletarNoticia';


const MulterContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
flex-direction: column;
align-items: center;
width: 100%;
height: 100%;
padding: 20px 100px;
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
const FrameRetratil = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
flex-direction: column;
align-items: center;
width: 100%;
max-width: 1920px;
overflow: hidden;
max-height: ${({ isOpen }) => (isOpen ? "100%" : "0")};
margin: 10px;
`
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
.Label{
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
const ActionButton = styled.button`
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
const FrameButton = styled.button`
display: flex;
justify-content: flex-start;
align-items: center;
gap: 10px;
width: 100%;
max-width: 1920px;
height: 100%;
padding: 20px;
transition: max-height 0.4s ease, padding 0.4s ease;
background-color: rgb(0,0,0,0);
border: none;
border-bottom: 2px solid #0460C9;
p{
    font-size: 20px;
}
span {
    margin-right: 10px;
    transform: ${({ active }) => (active ? "rotate(90deg)" : "rotate(0)")};
    transition: transform 0.3s ease;
  }
`
const CadastroContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
border-radius: 15px;
padding: 10px;
span{
    font-size: 60px;
    color: #154F91
}
p{
    font-size: 30px;
    color: #154F91;
}
&:Hover{
    background-color: rgb(255,255,255,0.3);
    cursor: pointer;
    span{
        color: #2575CF;
    }
    p{
        color: #2575CF;
    }
    
}
`

function ADM({ NoticiasData }) {

    const [openDiv, setOpenDiv] = useState(null);
    const [modalState, setModalState] = useState(null); // null, "edit", ou "add"
    const [currentNoticia, setCurrentNoticia] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openModal = (type, Noticia = null) => {
        console.log(`Abrindo modal: ${type}`, Noticia);
        setModalState(type);
        setCurrentNoticia(Noticia);
    };

    const closeModal = () => {
        setModalState(null);
        setCurrentNoticia(null);
    };

    return (
        <MulterContainer>
            <FrameButton active={openDiv === 1} onClick={() => setOpenDiv(openDiv === 1 ? null : 1)}>
                <span class="material-symbols-outlined">arrow_forward_ios</span>
                <p>Lista de Noticias Cadastradas</p>
            </FrameButton>
            <FrameRetratil isOpen={openDiv === 1}>
                <CadastroContainer onClick={() => openModal("add")}>
                    <span class="material-symbols-outlined">add_circle</span>
                    <p>Cadastrar noticia</p>
                </CadastroContainer>
                {NoticiasData.map((Noticia, index) => (
                    <MulterTopic >
                        <Frame1>
                            <h2 className='Label'>id: </h2>
                            <h2 className='Conteudo'>{Noticia.id}</h2>
                        </Frame1>
                        <Frame2>
                            <Text>
                                <p className='Label'>Titulo: </p>
                                <p className='Conteudo'>{Noticia.Titulo}</p>
                            </Text>
                            <Text>
                                <p className='Label'>Entidade: </p>
                                <p className='Conteudo'>{Noticia.Entidade}</p>
                            </Text>
                            <Text>
                                <p className='Label'>Autor: </p>
                                <p className='Conteudo'>{Noticia.Autor}</p>
                            </Text>
                            <Text>
                                <p className='Label'>Data: </p>
                                <p className='Conteudo'>{Noticia.Data}</p>
                            </Text>
                            <Text>
                                <p className='Label'>TempoDeLeitura: </p>
                                <p className='Conteudo'>{Noticia.TempoDeLeitura}</p>
                            </Text>
                            <Text>
                                <p className='Label'>Chamada: </p>
                                <p className='Conteudo'>{Noticia.Chamada}</p>
                            </Text>
                            <Text>
                                <p className='Label'>LinkURL: </p>
                                <p className='Conteudo'>{Noticia.LinkURL}</p>
                            </Text>
                            <Text>
                                <p className='Label'>Referencia: </p>
                                <p className='Conteudo'>{Noticia.Referencia}</p>
                            </Text>
                            <Text>
                                <p className='Label'>Imagem: </p>
                                <p className='Conteudo'>{Noticia.Imagem}</p>
                            </Text>
                            <Text>
                                <p className='Label'>Caminho do Texto: </p>
                                <p className='Conteudo'>{Noticia.Texto}</p>
                            </Text>
                        </Frame2>
                        <Frame3>
                            <ActionButton onClick={() => openModal("delete", Noticia)}>
                                <span class="material-symbols-outlined">delete</span>
                            </ActionButton>
                            <ActionButton key={Noticia.id} onClick={() => openModal("edit", Noticia)}>
                                <span class="material-symbols-outlined">edit</span>
                            </ActionButton>
                        </Frame3>
                    </MulterTopic>
                ))}
            </FrameRetratil>
            {/* Modal de Edição */}
            {modalState === "edit" && (
                <ModalDeEditar
                    currentNoticia={currentNoticia}
                    onClose={closeModal}
                />
            )}

            {/* Modal de Adição */}
            {modalState === "add" && (
                <ModalDeAdicionar
                    isOpen={modalState === "add"}
                    onClose={closeModal} />
            )}
            {/* Modal de Deletar */}
            {modalState === "delete" && (
                <ModalDeDeletar
                currentNoticia={currentNoticia}
                isOpen={modalState === "delete"}
                onClose={closeModal}
                />
            )}

        </MulterContainer>
    )
}

export default ADM;