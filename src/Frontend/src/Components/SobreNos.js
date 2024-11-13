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
    text-align: center;
}
.paragrafo{
    font-size: auto;
    text-indent: 4em;
    text-align: justify;
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
gap: 20px;
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
display: flex;
flex-direction: column;
padding: 20px;
width: 50%;
gap: 20px;
padding: 40px;
`
const Frame_4_2 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50%;
padding: 65px;
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
                    <p className="paragrafo">A Aliança Oceânica é uma ONG dedicada à preservação da vida aquática e à promoção de um uso sustentável dos ecossistemas marinhos e de água doce. Nossa missão é divulgar conhecimento científico e conscientizar sobre causas e ações relacionadas à proteção desses ambientes, mobilizando doações que são direcionadas a ONGs parceiras. Além disso, buscamos fortalecer nossa influência junto a autoridades governamentais, atuando como uma ponte para viabilizar projetos de desenvolvimento sustentável que conciliem o uso socioeconômico e a conservação ecológica dos ecossistemas aquáticos em escala global. </p>
                </Frame_1_2>
            </Frame_1>
            <Frame_2>
                <Frame_2_1>
                    <img src="https://cdn4.iconfinder.com/data/icons/sea-life-23/64/flying_fish_fish_ocean_sea_sea_life-256.png" />
                    <p className="destaque">+ de 2,2 milhões</p>
                    <p className="titulo">de espécies pertencem ao ecossistema aquático</p>
                </Frame_2_1>
                <Frame_2_2>
                    <img src="https://cdn4.iconfinder.com/data/icons/geography-15/64/earth_education_globe_learning_map-256.png" />
                    <p className="destaque">+ de 70%</p>
                    <p className="titulo">de toda a área terrestre é composta pelos ecossistemas aquáticos</p>
                </Frame_2_2>
                <Frame_2_3>
                    <img src="https://cdn3.iconfinder.com/data/icons/space-254/64/Data-256.png" />
                    <p className="destaque">+  de US$ 145 trilhões </p>
                    <p className="titulo"> por ano que rendem as atividades exploratórias relacionadas ao ecossistema aquático no mundo</p>
                </Frame_2_3>
            </Frame_2>
            <Frame_3>
                <Frame_3_1>
                    <img src="https://github.com/2024-2-MCC2/Projeto1/blob/main/src/Frontend/src/Assets/ONU_CupulaODS_20230818_FotoDaONU_MarkGarten.jpg?raw=true" />
                </Frame_3_1>
                <Frame_3_2>
                    <p className="titulo">O que são as ODS?</p>
                    <p className="paragrafo">Os Objetivos de Desenvolvimento Sustentável (ODS) são uma coleção de 17 objetivos globais estabelecidos pela Organização das Nações Unidas (ONU) como parte da Agenda 2030, com o propósito de enfrentar os maiores desafios globais, promovendo um desenvolvimento sustentável e equilibrado. Lançadas em 2015, as ODS buscam acabar com a pobreza, proteger o meio ambiente, promover a igualdade e assegurar prosperidade para todos, com foco em áreas como saúde, educação, igualdade de gênero, trabalho digno, redução das desigualdades, ação climática e paz. Cada objetivo contém metas específicas a serem alcançadas até 2030, e todos os países são incentivados a adaptá-los de acordo com suas próprias prioridades e contextos.</p>
                </Frame_3_2>
            </Frame_3>
            <Frame_4>
                <Frame_4_1>
                    <p className="titulo">O que é a ODS 14?</p>
                    <p className="paragrafo">A Objetivo de Desenvolvimento Sustentável 14 (ODS 14) faz parte da Agenda 2030 da ONU e busca conservar e utilizar de forma sustentável os oceanos, mares e os recursos marinhos. Seu foco é enfrentar os problemas de poluição, acidificação dos oceanos e pesca excessiva, promovendo práticas sustentáveis e incentivando a conservação dos ecossistemas aquáticos. Esse objetivo reconhece a importância dos oceanos não só para o equilíbrio ecológico, mas também para a economia global e a subsistência de milhões de pessoas, especialmente aquelas que dependem diretamente dos recursos marinhos para sobrevivência e renda.</p>
                </Frame_4_1>
                <Frame_4_2>
                    <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/globe-256.png" />
                    <p className="destaque">ODS 14:</p>
                    <p className="destaque">Vida na Água</p>
                </Frame_4_2>
            </Frame_4>
        </SobreNosContainer>
    )
}

export default SobreNos;