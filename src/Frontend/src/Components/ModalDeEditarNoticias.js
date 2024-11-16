import styled from "styled-components";
import { useState } from "react";

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
const Frame_2 = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
gap: 20px;
`
const Frame_2_1 = styled.div`
display: flex;
justify-content: flex-end;
align-items: flex-start;
gap: 10px;
`
const Frame_2_2 = styled.div`
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
const AtualizarButton = styled.button`
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


function ModaDeEditarlNoticias({ currentNoticia, onClose, onUpdate }) {

    const [formData, setFormData] = useState({
        Titulo: currentNoticia?.Titulo || '',
        Entidade: currentNoticia?.Entidade || '',
        Autor: currentNoticia?.Autor || '',
        Data: currentNoticia?.Data || '',
        TempoDeLeitura: currentNoticia?.TempoDeLeitura || '',
        Chamada: currentNoticia?.Chamada || '',
        LinkURL: currentNoticia?.LinkURL || '',
        Referencia: currentNoticia?.Referencia || '',
        Imagem: null, // Para arquivos
        Texto: null // Para arquivos
    });


    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (files) {
            // Atualiza arquivos (Imagem ou Texto)
            setFormData({ ...formData, [name]: files[0] });
        } else {
            // Atualiza campos de texto
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Converte os dados para FormData se houver arquivos
        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        });

        // Chama a função passada por props
        onUpdate(currentNoticia.id, data);
    };

    return (
        <Overlay isOpen={!!currentNoticia}>
            <Modal>
                <Frame_1>
                    <h2>Atualizar Notícia</h2>
                    <CloseButton onClick={onClose}>
                        <span class="material-symbols-outlined">close</span>
                    </CloseButton>
                </Frame_1>
                <Frame_2>
                    <Frame_2_1>
                        <h2 className='Topico'>id: </h2>
                        <h2 className='Conteudo'>{currentNoticia.id}</h2>
                    </Frame_2_1>
                    <Frame_2_2>
                        <form onSubmit={handleSubmit}>
                            <InputContainer>
                                <label>Título:</label>
                                <Input defaultValue={currentNoticia?.Titulo} name="Titulo" value={formData.Titulo} onChange={handleChange} />
                            </InputContainer>
                            <InputContainer>
                                <label>Entidade:</label>
                                <Input defaultValue={currentNoticia?.Entidade} name="Entidade" value={formData.Entidade} onChange={handleChange} />
                            </InputContainer>
                            <InputContainer>
                                <label>Autor:</label>
                                <Input defaultValue={currentNoticia?.Autor} name="Autor" value={formData.Autor} onChange={handleChange} />
                            </InputContainer>
                            <InputContainer>
                                <label>Data:</label>
                                <Input defaultValue={currentNoticia?.Data} name="Data" value={formData.Data} onChange={handleChange} />
                            </InputContainer>
                            <InputContainer>
                                <label>Tempo de Leitura:</label>
                                <Input defaultValue={currentNoticia?.TempoDeLeitura} name="TempoDeLeitura" value={formData.TempoDeLeitura} onChange={handleChange} />
                            </InputContainer>
                            <InputContainer>
                                <label>Chamada:</label>
                                <Input defaultValue={currentNoticia?.Chamada} name="Chamada" value={formData.Chamada} onChange={handleChange} />
                            </InputContainer>
                            <InputContainer>
                                <label>LinkL:</label>
                                <Input defaultValue={currentNoticia?.LinkURL} name="LinkURL" value={formData.LinkURL} onChange={handleChange} />
                            </InputContainer>
                            <InputContainer>
                                <label>Referência:</label>
                                <Input defaultValue={currentNoticia?.Referencia} name="Referencia" value={formData.Referencia} onChange={handleChange} />
                            </InputContainer>
                            <InputContainer>
                                <label>Imagem</label>
                                <Input name="Imagem" type="file" onChange={handleChange} />
                            </InputContainer>
                            <InputContainer>
                                <label>Texto</label>
                                <Input name="Texto" type="file" onChange={handleChange} />
                            </InputContainer>
                            <AtualizarButton type="submit">
                                <p>Atualizar Notícia</p>
                            </AtualizarButton>
                        </form>
                    </Frame_2_2>
                </Frame_2>
            </Modal>
        </Overlay>
    );
};
export default ModaDeEditarlNoticias;

