import styled from "styled-components";


const AboutUsContainer  = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Frame1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 43px;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 1280px;
  width: 1280px;
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 75px;
`
const Frama1_1 = styled.div`
max-width: fit-content;
max-height: fit-content;
`
const Frama1_2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  gap: 11px;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  height: 362px;
  width: 1000px;
`
const Frama1_2_1 = styled.div`
  font-size: 40px;
  font-family: var(--font-family-inter);
  font-weight: bold;
  text-align: left;
  color: rgba(0, 0, 0, 1);
  white-space: pre-line;
`
const Frama1_2_2 = styled.div`
  font-size: 16px;
  font-family: var(--font-family-inter);
  font-weight: normal;
  text-align: left;
  color: rgba(0, 0, 0, 1);
`
const Frama1_2_3 = styled.div`
  font-size: 20px;
  font-family: var(--font-family-inter);
  font-weight: normal;
  text-align: center;
  color: rgba(0, 0, 0, 1);
button{
  background-color: rgba(4, 96, 201, 1); /* Fundo azul */
    border-radius: 15px;
    width: 300px;
    height: 55px;
    color: white; 
    border: 2px solid white ; 
    cursor: pointer; 
    font-size: 20px; 
    font-family: var(--font-family-inter); 
    font-weight: bold; 
    transition: background-color 0.3s ease, color 0.3s ease; 
    &:hover {
      background-color: white; 
      color: rgba(4, 96, 201, 1); 
      border: 2px solid rgba(4, 96, 201, 1); 
    }
}
`
const Frame2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 110px;
  padding: 0px 65px 0px 65px;
  width: 100%;
  height: 435px;
  background-color: lightgrey;
`
const Frama2_1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 33.33%;
  height: 291px;
  padding: 20px;
`
const Frame2_1_1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 10px 10px 10px 10px;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
`
const Frame2_1_2 = styled.div`
  font-size: 62px;
  font-family: var(--font-family-inter);
  font-weight: bold;
  text-align: center;
  color: rgba(0, 0, 0, 1);
`
const Frame2_1_3 = styled.div`
  font-size: 25px;
  font-family: var(--font-family-inter);
  font-weight: normal;
  text-align: center;
  color: rgba(0, 0, 0, 1);
`
const Frama2_2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 33.33%;
  height: 291px;
`
const Frame2_2_1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 10px 10px 10px 10px;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
`
const Frame2_2_2 = styled.div`
  font-size: 62px;
  font-family: var(--font-family-inter);
  font-weight: bold;
  text-align: center;
  color: rgba(0, 0, 0, 1);
`
const Frame2_2_3 = styled.div`
  font-size: 25px;
  font-family: var(--font-family-inter);
  font-weight: normal;
  text-align: center;
  color: rgba(0, 0, 0, 1);
`
const Frama2_3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 33.33%;
  height: 291px;
`
const Frame2_3_1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 10px 10px 10px 10px;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
`
const Frame2_3_2 = styled.div`
  font-size: 62px;
  font-family: var(--font-family-inter);
  font-weight: bold;
  text-align: center;
  color: rgba(0, 0, 0, 1);
`
const Frame2_3_3 = styled.div`
  font-size: 25px;
  font-family: var(--font-family-inter);
  font-weight: normal;
  text-align: center;
  color: rgba(0, 0, 0, 1);
`
const Frame3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 1280px;
  width: 1280px;
  position: relative;
  width: 100%;
  height: auto;
`
const Frama3_1 = styled.div`

`
const Frama3_2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 22px;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  height: 342px;
  padding: 20px;
  width: 1000px;
`
const Frame3_2_1 = styled.div`
  font-size: 32px;
  font-family: var(--font-family-inter);
  font-weight: bold;
  text-align: left;
  color: rgba(0, 0, 0, 1);
`
const Frame3_2_2 = styled.div`
  font-size: 16px;
  font-family: var(--font-family-inter);
  font-weight: normal;
  text-align: left;
  color: rgba(0, 0, 0, 1);
`
const Frame4 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 110px;
  padding: 0px 65px 0px 65px;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 1280px;
  width: 1280px;
  position: relative;
  width: 100%;
  height: 435px;
  background-color: lightgrey;
`
const Frama4_1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 26px;
  flex-basis: 50%;
  height: 435px;
  max-width: 800px;
`
const Frame4_1_1 = styled.div`
  font-size: 32px;
  font-family: var(--font-family-inter);
  font-weight: bold;
  text-align: center;
  color: rgba(0, 0, 0, 1);
`
const Frame4_1_2 = styled.div`
  font-size: 16px;
  font-family: var(--font-family-inter);
  font-weight: normal;
  text-align: left;
  color: rgba(0, 0, 0, 1);
`
const Frame4_1_3 = styled.div`
  font-size: 32px;
  font-family: var(--font-family-inter);
  font-weight: normal;
  text-align: left;
  color: rgba(4, 96, 201, 1);
  button {
    width: 300px;
    height: 55px;
    background-color: white; 
    border-radius: 15px;
    border: 2px solid rgba(4, 96, 201, 1); 
    color: rgba(4, 96, 201, 1); 
    cursor: pointer; 
    font-size: 28px; 
    font-family: var(--font-family-inter); 
    font-weight: bold; 
    transition: background-color 0.3s ease, color 0.3s ease;
    &:hover {
      background-color: rgba(4, 96, 201, 1); 
      color: white;
      border: 2px solid white;
  }
}
`
const Frama4_2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 22px;
  flex-basis: 50%;
  height: 435px;
`
const Frame4_2_1 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Frame4_2_2 = styled.div`
  font-size: 62px;
  font-family: var(--font-family-inter);
  font-weight: bold;
  text-align: center;
  color: rgba(0, 0, 0, 1);
`
const Frame4_2_3 = styled.div`
  font-size: 40px;
  font-family: var(--font-family-inter);
  font-weight: bold;
  text-align: center;
  color: rgba(0, 0, 0, 1);
`

function AboutUs() {
  return (
    <AboutUsContainer>
      <Frame1>
        <Frama1_1>
          <img src="https://raw.githubusercontent.com/2024-2-MCC2/Projeto1/refs/heads/main/imagens/image-20-2.png" />
        </Frama1_1>
        <Frama1_2>
          <Frama1_2_1>
            <text>
              Quem é a Aliança Oceânica?
            </text>
          </Frama1_2_1>
          <Frama1_2_2>
            <text>Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos.
              Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos.Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos.Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos.  </text>
          </Frama1_2_2>
          <Frama1_2_3>
            <button>Nos ajude a salvar o mundo!</button>
          </Frama1_2_3>
        </Frama1_2>
      </Frame1>
      <Frame2>
        <Frama2_1>
          <Frame2_1_1>
            <img src="https://placehold.co/116x116/png" />
          </Frame2_1_1>
          <Frame2_1_2>
            <text>+10</text>
          </Frame2_1_2>
          <Frame2_1_3>
            <text>espécies que visamos proteger.</text>
          </Frame2_1_3>
        </Frama2_1>
        <Frama2_2>
          <Frame2_2_1>
            <img src="https://placehold.co/116x116/png" />
          </Frame2_2_1>
          <Frame2_2_2>
            <text>N causas</text>
          </Frame2_2_2>
          <Frame2_2_3>
            <text>que defendemos por todo o Brasil.</text>
          </Frame2_2_3>
        </Frama2_2>
        <Frama2_3>
          <Frame2_3_1>
            <img src="https://placehold.co/116x116/png" />
          </Frame2_3_1>
          <Frame2_3_2>
            <text>+8000</text>
          </Frame2_3_2>
          <Frame2_3_3>
            <text>precisava de um dado aqui e não sabia o que colocar.</text>
          </Frame2_3_3>
        </Frama2_3>
      </Frame2>
      <Frame3>
        <Frama3_1>
          <img src="https://raw.githubusercontent.com/2024-2-MCC2/Projeto1/refs/heads/main/imagens/image-22-2.png" />
        </Frama3_1>
        <Frama3_2>
          <Frame3_2_1>
            <text>O que fazemos?</text>
          </Frame3_2_1>
          <Frame3_2_2>
            <text>Aqui vai o que fazemos. Aqui vai o que fazemos. Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos. </text>
          </Frame3_2_2>
        </Frama3_2>
      </Frame3>
      <Frame4>
        <Frama4_1>
          <Frame4_1_1>
            <text>Vida Marinha</text>
          </Frame4_1_1>
          <Frame4_1_2>
            <text>Aqui explicamos sobre a ODS 14 e como ela impacta o mundo. Aqui explicamos sobre a ODS 14 e como ela impacta o mundo. Aqui explicamos sobre a ODS 14 e como ela impacta o mundo. Aqui explicamos sobre a ODS 14 e como ela impacta o mundo. Aqui explicamos sobre a ODS 14 e como ela impacta o mundo. Aqui explicamos sobre a ODS 14 e como ela impacta o mundo. Aqui explicamos </text>
          </Frame4_1_2>
          <Frame4_1_3>
            <button>Saiba Mais</button>
          </Frame4_1_3>
        </Frama4_1>
        <Frama4_2>
          <Frame4_2_1>
            <img src="https://placehold.co/116x116/png" />
          </Frame4_2_1>
          <Frame4_2_2>
            <text>ODS 14</text>
          </Frame4_2_2>
          <Frame4_2_3>
            <text>Proteger a vida marinha</text>
          </Frame4_2_3>
        </Frama4_2>
      </Frame4>
    </AboutUsContainer>

  );

}

export default AboutUs