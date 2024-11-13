import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselCaption, CarouselItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import video_pinguim from "../Assets/Video_Carrossel/video_pinguim.mp4"
import video_tartaruga from "../Assets/Video_Carrossel/video_tartaruga.mp4"
import video_cavalo from "../Assets/Video_Carrossel/video_cavalo.mp4"
import Logo from "../Assets/Logo.png"

const CarrosselContainer = styled.div`
width: 100%;
cursor: pointer;
.no-link-style {
  color: #fff; /* Herda a cor do elemento pai */
  text-decoration: none; /* Remove o sublinhado */
}
`
//----------------------------------------------------------------------------------------------
const ButtonCarrossel_1 = styled.div`
  background-color: #F2C438;
  color: #fff;
  padding: 10px 70px;
  border-radius: 10px;
  display: flex;
  justify-content: center; /* Centraliza o conteúdo do botão */
  align-items: center; /* Centraliza o conteúdo do botão */
  position: absolute; /* Permite posicionar o botão sobre o vídeo */
  top: 560px; /* Posiciona o botão no meio verticalmente */
  left: 350px; /* Posiciona o botão no meio horizontalmente */
  transform: translate(-50%, -50%); /* Centraliza o botão */
  z-index: 20; /* Garante que o botão fique acima do vídeo */
  &:hover {
    background-color: rgba(242, 196, 56, 0.8); /* 80% de opacidade */
  }
  h2{
    font-size: 35px;
    text-align: center;
    padding: 0;
  }
`; 
// -------------------------------------------------------------------------------------
const ButtonCarrossel_2 = styled.div`
  background-color: #F2C438;
  color: #fff;
  padding: 10px 70px;
  border-radius: 10px;
  display: flex;
  justify-content: center; /* Centraliza o conteúdo do botão */
  align-items: center; /* Centraliza o conteúdo do botão */
  position: absolute; /* Permite posicionar o botão sobre o vídeo */
  top: 560px; /* Posiciona o botão no meio verticalmente */
  left: 700px; /* Posiciona o botão no meio horizontalmente */
  transform: translate(-50%, -50%); /* Centraliza o botão */
  z-index: 20; /* Garante que o botão fique acima do vídeo */
  &:hover {
    background-color: rgba(242, 196, 56, 0.8); /* 80% de opacidade */
  }
  h2{
    font-size: 35px;
    text-align: center;
    padding: 0;
  }
`; 
//---------------------------------------------------------------------------------------------
const ButtonCarrossel_3 = styled.div`
  background-color: #F2C438;
  color: #fff;
  padding: 10px 70px;
  border-radius: 10px;
  display: flex;
  justify-content: center; /* Centraliza o conteúdo do botão */
  align-items: center; /* Centraliza o conteúdo do botão */
  position: absolute; /* Permite posicionar o botão sobre o vídeo */
  top: 560px; /* Posiciona o botão no meio verticalmente */
  left: 1000px; /* Posiciona o botão no meio horizontalmente */
  transform: translate(-50%, -50%); /* Centraliza o botão */
  z-index: 20; /* Garante que o botão fique acima do vídeo */
  &:hover {
    background-color: rgba(242, 196, 56, 0.8); /* 80% de opacidade */
  }
  h2{
    font-size: 35px;
    text-align: center;
    padding: 0;
  }
`; 
//--------------------------------------------------------------------------------
const LogoCarrossel_1 = styled.img`
  position: absolute; // Posiciona o logo sobre o vídeo
  top: 200px; // Ajuste a posição vertical (distância do topo)
  left: 100px; // Ajuste a posição horizontal (distância da esquerda)
  width: 550px; // Ajuste o tamanho do logo
  height: auto; // Mantém a proporção da imagem
  z-index: 10; // Garante que o logo fique acima do vídeo
`;
//----------------------------------------------------------------------------------------
const LogoCarrossel_2 = styled.img`
  position: absolute; // Posiciona o logo sobre o vídeo
  top: 200px; // Ajuste a posição vertical (distância do topo)
  left: 450px; // Ajuste a posição horizontal (distância da esquerda)
  width: 550px; // Ajuste o tamanho do logo
  height: auto; // Mantém a proporção da imagem
  z-index: 10; // Garante que o logo fique acima do vídeo
`;
//--------------------------------------------------------------------------------------------
const LogoCarrossel_3 = styled.img`
  position: absolute; // Posiciona o logo sobre o vídeo
  top: 200px; // Ajuste a posição vertical (distância do topo)
  left: 750px; // Ajuste a posição horizontal (distância da esquerda)
  width: 550px; // Ajuste o tamanho do logo
  height: auto; // Mantém a proporção da imagem
  z-index: 10; // Garante que o logo fique acima do vídeo
`;

function Carrossel() {
  return (
    <CarrosselContainer>
      <Carousel controls={true} indicatorLabels={true}>
        <CarouselItem>
        <video className="d-block w-100" autoPlay loop muted>
            <source src={video_tartaruga} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <CarouselCaption> 
          </CarouselCaption>
          <Link to="/CatalogoDeNoticias" className="no-link-style">
              <ButtonCarrossel_1 variant="primary">
                  <h2>CATÁLOGO DE NOTÍCIAS</h2>
              </ButtonCarrossel_1>
          </Link>
          <LogoCarrossel_1 src={Logo} alt="Logo" />
        </CarouselItem>

        <CarouselItem>
        <video className="d-block w-100" autoPlay loop muted>
            <source src={video_cavalo} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <CarouselCaption>
          </CarouselCaption>
          <Link to="/Animais" className="no-link-style">
              <ButtonCarrossel_2 variant="primary">
                  <h2>ANIMAIS EM EXTINÇÃO</h2>
              </ButtonCarrossel_2>
          </Link> 
          <LogoCarrossel_2 src={Logo} alt="Logo" />
        </CarouselItem>
        <CarouselItem>
        <video className="d-block w-100" autoPlay loop muted>
            <source src={video_pinguim} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <CarouselCaption>
          </CarouselCaption>
          <Link to="/ONGsParceiras" className="no-link-style">
              <ButtonCarrossel_3 variant="primary">
                  <h2>ONGs PARCEIRAS</h2>
              </ButtonCarrossel_3>
          </Link> 
          <LogoCarrossel_3 src={Logo} alt="Logo" />
        </CarouselItem>
      </Carousel>
    </CarrosselContainer>
  );
}
export default Carrossel;