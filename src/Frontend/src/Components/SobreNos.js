import styled from "styled-components";

const SobreNosContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
.titulo{
    font-size: 40px;
    font-weight: bold;
}
.paragrafo{
    font-size: 20px;
}
.destaque{
    font-size: 70px;
    font-weight: bolder;
}
`
const Frame_1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
max-width: 1920px;
p{
    text-align: justify;
}
`
const Frame_1_1 = styled.div`
`
const Frame_1_2 = styled.div`
padding: 40px;
`
const Frame_2 = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
max-width: 1920px;
padding: 65px;
background-color: #D9D9D9;
`
const Frame_2_1 = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 400px;
text-align: center;
`
const Frame_2_2 = styled(Frame_2_1)``
const Frame_2_3 = styled(Frame_2_1)``

const Frame_3 = styled(Frame_1)``

const Frame_3_1 = styled(Frame_1_1)``
const Frame_3_2 = styled(Frame_1_2)``

const Frame_4 = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #D9D9D9;
`
const Frame_4_1 = styled.div`
padding: 20px;
width: 50%;
p{
    text-align: justify;
}
`
const Frame_4_2 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50%;
padding: 65px;
p{
    text-align: center;
}
`



function SobreNos() {
    return (
        <SobreNosContainer>
            <Frame_1>
                <Frame_1_1>
                    <img src="https://raw.githubusercontent.com/2024-2-MCC2/Projeto1/refs/heads/main/imagens/image-20-2.png" />
                </Frame_1_1>
                <Frame_1_2>
                    <p className="titulo">Quem é a Aliança Oceânica?</p>
                    <p className="paragrafo">Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos.
                        Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos.Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos.Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos. Aqui vai quem nós somos.</p>
                </Frame_1_2>
            </Frame_1>
            <Frame_2>
                <Frame_2_1>
                    <img src="https://cdn4.iconfinder.com/data/icons/sea-life-23/64/flying_fish_fish_ocean_sea_sea_life-256.png" />
                    <p className="destaque">+10</p>
                    <p className="titulo">espécies que visamos proteger.</p>
                </Frame_2_1>
                <Frame_2_2>
                    <img src="https://cdn4.iconfinder.com/data/icons/geography-15/64/earth_education_globe_learning_map-256.png" />
                    <p className="destaque">N causas</p>
                    <p className="titulo">que defendemos por todo o Brasil.</p>
                </Frame_2_2>
                <Frame_2_3>
                    <img src="https://cdn3.iconfinder.com/data/icons/space-254/64/Data-256.png" />
                    <p className="destaque">+8000</p>
                    <p className="titulo">precisava de um dado aqui e não sabia o que colocar.</p>
                </Frame_2_3>
            </Frame_2>
            <Frame_3>
                <Frame_3_1>
                    <img src="https://raw.githubusercontent.com/2024-2-MCC2/Projeto1/refs/heads/main/imagens/image-22-2.png" />
                </Frame_3_1>
                <Frame_3_2>
                    <p className="titulo">O que fazemos?</p>
                    <p className="paragrafo">qui vai o que fazemos. Aqui vai o que fazemos. Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.  Aqui vai o que fazemos.</p>
                </Frame_3_2>
            </Frame_3>
            <Frame_4>
                <Frame_4_1>
                    <p className="titulo">Vida Marinha</p>
                    <p className="paragrafo">Aqui explicamos sobre a ODS 14 e como ela impacta o mundo. Aqui explicamos sobre a ODS 14 e como ela impacta o mundo. Aqui explicamos sobre a ODS 14 e como ela impacta o mundo. Aqui explicamos sobre a ODS 14 e como ela impacta o mundo. Aqui explicamos sobre a ODS 14 e como ela impacta o mundo. Aqui explicamos sobre a ODS 14 e como ela impacta o mundo. Aqui explicamos</p>
                </Frame_4_1>
                <Frame_4_2>
                    <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/globe-256.png" />
                    <p className="destaque">ODS 14</p>
                    <p className="destaque">Proteger a vida marinha</p>
                </Frame_4_2>
            </Frame_4>
        </SobreNosContainer>
    )
}

export default SobreNos;