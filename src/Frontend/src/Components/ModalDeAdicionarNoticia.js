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
max-width: 1920px;
max-height: 600px;
margin: 150px;
width: 100%;
overflow-y: scroll;
gap: 25px;
.scrollable::-webkit-scrollbar {
  width: 10px;
}
`
const Frame_1 = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
padding: 10px;
border-bottom: 1px solid #0460C9;
`
const CloseButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
position: relative;
top: 0;
right: 0;
border: none;
background-color: rgb(0,0,0,0);
span{
    color: #000;
}
&:Hover{
    background-color: red;
    span{
        color: #fff;
        font-weight: bolder;
    }
}
`

const Frame_2 = styled.div`
display: inline-block;
flex-direction: column;
justify-content: center;
align-items: center;
width:100%;
height: 100%;
`
const InputContainer = styled.div`
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
label{
    width: 100%;
    font-weight: bold;
    font-size: 15px;
    color: #0460C9;
}
&:focus-within {
    border-color: #05C7F2;
    label{
        color: #05C7F2;
    }
  }
`;
const Input = styled.input`
display: inline-block;
width: 100%;
height: 100%;
border: none;
background-color: rgb(0,0,0,0);
word-wrap: break-word; /* Quebra palavras longas */
overflow-wrap: break-word; /* Comportamento semelhante, padrão moderno */
&:focus{
    border: none;
    outline: none;
}
`
const CadastrarButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
border: none;
border-radius: 5px;
background-color: #154F91;
padding: 10px;
margin: 10px 0;
&:hover{
    background-color: #2575CF;
}
p{
    color: #fff;
    font-weight: bold;
    padding: 0 5px;
}
`

function ModalDeAdicionarlNoticias({ isOpen, onClose }) {
    return (
        <Overlay isOpen={isOpen}>
            <Modal>
                <Frame_1>
                    <h2>Cadastrar um nova noticia</h2>
                    <CloseButton onClick={onClose}>
                        <span class="material-symbols-outlined">close</span>
                    </CloseButton>
                </Frame_1>
                <Frame_2>
                    <form>
                        <InputContainer>
                            <label>Título:</label>
                            <Input placeholder="Título" />
                        </InputContainer>
                        <InputContainer>
                            <label>Entidade:</label>
                            <Input placeholder="Entidade" />
                        </InputContainer>
                        <InputContainer>
                            <label>Autor:</label>
                            <Input placeholder="Autor" />
                        </InputContainer>
                        <InputContainer>
                            <label>Data:</label>
                            <Input placeholder="Data" />
                        </InputContainer>
                        <InputContainer>
                            <label>TempoDeLeitura:</label>
                            <Input placeholder="Tempo de Leitura" />
                        </InputContainer>
                        <InputContainer>
                            <label>Chamada:</label>
                            <Input placeholder="Chamada" />
                        </InputContainer>
                        <InputContainer>
                            <label>Link:</label>
                            <Input placeholder="Link" />
                        </InputContainer>
                        <InputContainer>
                            <label>Referencia:</label>
                            <Input placeholder="Referência" />
                        </InputContainer>
                        <InputContainer>
                            <label>Imagem:</label>
                            <Input type='file' />
                        </InputContainer>
                        <InputContainer>
                            <label>Texto:</label>
                            <Input type='file' />
                        </InputContainer>
                    </form>
                    <CadastrarButton type="submit">
                        <p>Cadastrar Notícia</p>
                    </CadastrarButton>
                </Frame_2>
            </Modal>
        </Overlay>
    );
};
export default ModalDeAdicionarlNoticias;