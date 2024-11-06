import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Frame1 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 60px;
padding: 40px;
width: 600px;
height: 700px;
background-color: #D9D9D9;
.no-link-style {
  color: inherit; /* Herda a cor do elemento pai */
  text-decoration: none; /* Remove o sublinhado */
}
`
const Frame1_1 = styled.div`
border-bottom: 3px solid #0460C9;
color: #0460C9;
font-size: 22px;
`
const Frame1_2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`
const Frame1_3 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
`

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 70px;
  border: 2px solid #0460c9;
  background-color: ${({ isActive }) => (isActive ? '#0460C9' : '#fff')};
  font-size: 32px;
  color: ${({ isActive }) => (isActive ? '#b3d6ff' : '#0460c9')};
  padding: 5px;
  cursor: pointer;
  border: ${({ isActive }) => (isActive ? '2px solid #B3D6FF' : '2px solid #0460C9')};

  &:hover {
    background-color: #b3d6ff;
  }
`;

const Frame1_4 = styled.div`
display: flex;
justify-content: center;
align-items: center;
button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 520px;
    border: none;
    border-radius: 15px;
    background-color: #F2C538;
    font-size: 32px;
    padding: 10px;   
}
button:hover{
    background-color: #FDDE7D;
}
`

function PainelDeDoacao({ abrirLogin }) {

    const [activePeriod, setActivePeriod] = useState(null);
    const [activeValue, setActiveValue] = useState(null);

    return (
        <Frame1>
            <Frame1_1>
                <p>Valor destinado a causa</p>
            </Frame1_1>
            <Frame1_2>
                <StyledButton
                    isActive={activePeriod === 'Uma vez'}
                    onClick={() => setActivePeriod('Uma vez')}
                >
                    Uma vez
                </StyledButton>
                <StyledButton
                    isActive={activePeriod === 'Mensal'}
                    onClick={() => setActivePeriod('Mensal')}
                >
                    Mensal
                </StyledButton>
            </Frame1_2>
            <Frame1_3>
                {['R$5', 'R$10', 'R$25', 'R$50', 'R$75', 'R$100'].map((value) => (
                    <StyledButton
                        key={value}
                        isActive={activeValue === value}
                        onClick={() => setActiveValue(value)}
                    >
                        {value}
                    </StyledButton>
                ))}
            </Frame1_3>
            <Frame1_4>
                <button className="Continuar" onClick={abrirLogin}>Continuar</button>
            </Frame1_4>
        </Frame1>
    )
}
export default PainelDeDoacao;