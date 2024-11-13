import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 25px;
    position: relative;
    width: 100%;
    height: 100%;
    background: #FFFFFF;
`;

const ButtonVoltar = styled.div`
    text-align: start;
    align-items: left;
    padding: 11px 10px;
    gap: 10px;
    width: 45px;
    height: 28px;
    align-self: flex-start;

    &:hover {
        text-decoration: underline;
        color: aqua;
        cursor: pointer;
    }
`;

const Frame2 = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    width: 350px;
    height: 350px;
    border-radius: 50%;

    img {
        width: 100%;
        height: 100%;
        object-fit: fill;
        border-radius: 50%;
    }
`;

const Frame3 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    width: 100%;
    height: 100%;
    align-self: stretch;
`;

const ButtonMais = styled.button`
    background-color: #F2C538;
    border-color: black;
    border-radius: 15px;
    width: 250px;
    height: 60px;
    align-items: center;
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    &:hover {
        background-color: #FDDE7D;
        cursor: pointer;
    }
`;

function ONGdiv({ Nome, Imagem, Descricao, Link }) {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    // Função para redirecionar
    const redirecionar = () => {
        window.open(Link, "_blank"); // Abre o link em uma nova aba
    };

    return (
        <Container>
            <ButtonVoltar onClick={handleBack}>
                <p>Voltar</p>
            </ButtonVoltar>
            <Frame2>
                <img src={Imagem} alt={Nome} />
            </Frame2>
            <Frame3>
                <h1>{Nome || "Nome da Ong"}</h1>
                <p>{Descricao || "Descricao ONG"}</p>
            </Frame3>
            <ButtonMais onClick={redirecionar}>
                <h4>Mais Sobre a ONG</h4>
            </ButtonMais>
        </Container>
    );
}

export default ONGdiv;