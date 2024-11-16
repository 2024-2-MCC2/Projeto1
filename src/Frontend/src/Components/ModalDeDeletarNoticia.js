import styled from "styled-components";

const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.3);
display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
align-items: center;
justify-content: center;
z-index: 1000;
`
const Modal = styled.div`
display: flex;
flex-direction: column;
background: white;
padding: 20px;
margin: auto auto;
width: fit-content;
width: fit-content;
max-width: 400px;
border-radius: 15px;
gap: 20px;
`
const Frame_1 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
border-bottom: 1px solid #0460C9;
gap: 10px;
p{
    font-size: 18px;
    font-weight: bold;
    white-space: normal; /* Permite quebra de linhas (comportamento padrão) */
    word-wrap: break-word; /* Quebra palavras longas automaticamente */
}
`
const ButtonSim = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 75px;
height: 40px;
border: none;
border-radius: 15px;
background-color: #c9c9c9;
padding: 10px;
p{
    color: black;
}
&:Hover{
    background-color: #FFF;
}
`
const ButtonNao = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 75px;
height: 40px;
border: none;
border-radius: 15px;
background-color: #9E0000;
padding: 10px;
p{
    color: white;
}
&:Hover{
    background-color: #FF0000;
}
`
const Frame_2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width:100%;
height: 100%;
gap: 20px;
`




function ModalDeDeletarlNoticias({ currentNoticia, isOpen, onClose }) {
    return (
        <Overlay isOpen={isOpen}>
            <Modal>
                <Frame_1>
                    <p>Deletar noticias {currentNoticia.id}: </p>
                    <p>{currentNoticia.Titulo}</p>
                    <p>Deseja continuar?</p>
                </Frame_1>
                <Frame_2>
                    <ButtonSim key={currentNoticia?.id}>
                        <p>sim</p>
                    </ButtonSim>
                    <ButtonNao onClick={onClose}>
                        <p>nâo</p>
                    </ButtonNao>
                </Frame_2>
            </Modal>
        </Overlay>
    );
};
export default ModalDeDeletarlNoticias;