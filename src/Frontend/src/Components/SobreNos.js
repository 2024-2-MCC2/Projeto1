import styled from "styled-components";

const SobreNosContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1920px;
width: 100%;
.titulo{
    font-size: 40px;
    font-weight: bold;
}
.paragrafo{
    font-size: auto;
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
p{
    text-align: justify;
}
`
const Frame_1_1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
overflow: hidden;
background-color: red;
img{
    width: 100%;
    //height: 100%;
    object-fit: cover;
}

`
const Frame_1_2 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
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
width: 100%;
max-width: 1920px;
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
                    <p className="paragrafo"> Somos alunos de Ciência da Computação do segundo semestre da Fundação Escola de Comércio Álvares Penteado (FECAP) e, como projeto acadêmico, desenvolvemos um hub digital de notícias, curiosidades e informações sobre a vida marinha. Inspirado no Objetivo de Desenvolvimento Sustentável (ODS) número 14, 'Vida na Água', o site visa sensibilizar o público sobre a preservação dos ecossistemas aquáticos e a importância da sustentabilidade marinha. Utilizando React como framework, combinamos HTML, CSS e JavaScript para criar uma plataforma interativa e responsiva que promove a educação e a conscientização ambiental. </p>
                </Frame_1_2>
            </Frame_1>
            <Frame_2>
                <Frame_2_1>
                    <img src="https://cdn4.iconfinder.com/data/icons/sea-life-23/64/flying_fish_fish_ocean_sea_sea_life-256.png" />
                    <p className="destaque">+ de 15</p>
                    <p className="titulo">espécies que visamos proteger.</p>
                </Frame_2_1>
                <Frame_2_2>
                    <img src="https://cdn4.iconfinder.com/data/icons/geography-15/64/earth_education_globe_learning_map-256.png" />
                    <p className="destaque">+ de 20</p>
                    <p className="titulo">ONGs que apoiamos por todo o Brasil.</p>
                </Frame_2_2>
                <Frame_2_3>
                    <img src="https://cdn3.iconfinder.com/data/icons/space-254/64/Data-256.png" />
                    <p className="destaque">+ de 10 </p>
                    <p className="titulo">notícias sobre nossos oceanos.</p>
                </Frame_2_3>
            </Frame_2>
            <Frame_3>
                <Frame_3_1>
                    <img src="https://raw.githubusercontent.com/2024-2-MCC2/Projeto1/refs/heads/main/imagens/image-22-2.png" />
                </Frame_3_1>
                <Frame_3_2>
                    <p className="titulo">O que fazemos?</p>
                    <p className="paragrafo">Nosso site reúne de forma cuidadosa conteúdo sobre a vida marinha, trazendo notícias atualizadas de fontes confiáveis, como Greenpeace e WWF, para manter o público informado sobre iniciativas de conservação e desafios ambientais. Além disso, oferecemos uma seção de curiosidades que explora a diversidade de espécies marinhas, apresentando informações fascinantes sobre os hábitos, habitats e características únicas desses animais. Com essa combinação de atualizações relevantes e conhecimento sobre a biodiversidade marinha, nosso hub busca ser um ponto de referência para quem se interessa por temas ecológicos e pela proteção dos oceanos.</p>
                </Frame_3_2>
            </Frame_3>
            <Frame_4>
                <Frame_4_1>
                    <p className="titulo">O que é a ODS 14?</p>
                    <p className="paragrafo">A Objetivo de Desenvolvimento Sustentável 14 (ODS 14) faz parte da Agenda 2030 da ONU e busca conservar e utilizar de forma sustentável os oceanos, mares e os recursos marinhos. Seu foco é enfrentar os problemas de poluição, acidificação dos oceanos e pesca excessiva, promovendo práticas sustentáveis e incentivando a conservação dos ecossistemas aquáticos. Esse objetivo reconhece a importância dos oceanos não só para o equilíbrio ecológico, mas também para a economia global e a subsistência de milhões de pessoas, especialmente aquelas que dependem diretamente dos recursos marinhos para sobrevivência e renda.</p>
                </Frame_4_1>
                <Frame_4_2>
                    <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/globe-256.png" />
                    <p className="destaque">ODS 14</p>
                    <p className="destaque">Vida na Água</p>
                </Frame_4_2>
            </Frame_4>
        </SobreNosContainer>
    )
}

export default SobreNos;