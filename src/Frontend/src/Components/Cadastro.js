import styled from "styled-components";
import Cleave from 'cleave.js/react';
import React, { useState } from 'react';

const Frame1 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;
background-color: #D9D9D9;
padding: 50px;
h2{
    color: #0460C9;
    border-bottom: 3px solid #0460C9;
}
.FacaLogin{
    color: #0460C9;
}
.FacaLogin:hover{
    text-decoration: underline;
    cursor: pointer;
}
`
const FormsContainer = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
width: 800px;
p{
    align-self: flex-start;
    color: #0460C9;
}
`
const Form_Frame = styled.div`
width: 100%;
display: flex;
gap: 10px;
`
const InputContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 10px;
//gap: 5px;
background-color: #fff;
color: #0460C9;
border: 2px solid #0460C9;
border-radius: 15px;
width: 100%;
height: 45px;
input{
    height: 100%;
    width: 100%;
    border: none;
}
input:focus{
    outline: none;
}
label{
    white-space: nowrap;
    font-size:10px;
    text-align: right;
}
&:focus-within {
    border: 2px solid #05C7F2;
    color: #05C7F2;
}
`

const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
font-size: 32px;
border: none;
border-radius: 15px;
height: 75px;
width: 300px;
background-color: #F2C538;
&:hover{
    background-color: #FDDE7D;
}
`
const ShowButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
background-color: none;
color: #0460C9;
border: none;
`

const SenharContainer =styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
`
function Cadastro({toggleForm}){
    
    const [showPassword, setShowPassword] = useState(false);  // Estado para o campo de senha
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);  // Estado para o campo de confirmação de senha

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(prevState => !prevState);
    };

    return(
        <Frame1>
            <h2>Cadastre-se</h2>
            <FormsContainer>
                <Form_Frame>
                    <InputContainer>
                        <label>Nome:</label>
                        <input type="text"/>
                    </InputContainer>
                    <InputContainer>
                        <label>Sobrenome:</label>
                        <input type="text"/>
                   </InputContainer>
                </Form_Frame>
                <Form_Frame>
                    <InputContainer>
                        <label>Data de Nacimento:</label>
                        <input type="date" placeholder="dd/mm/aaaa"/>
                    </InputContainer>
                    <InputContainer>
                        <label>RG:</label>
                        <Cleave
                        options={{ blocks: [2, 3, 3, 1], delimiters: ['.', '.', '-'] }}
                        placeholder="00.000.000-0"
                        />
                    </InputContainer>
                    <InputContainer>
                        <label>CPF:</label>
                        <Cleave
                        options={{ blocks: [3, 3, 3, 2], delimiters: ['.', '.', '-'] }}
                        placeholder="000.000.000-00"
                        />
                    </InputContainer>
                </Form_Frame>
                <p>Endereço:</p>
                <Form_Frame>
                    <InputContainer>
                        <label>CEP:</label>
                        <Cleave
                            options={{ blocks: [5, 3], delimiters: ['-'] }}
                            placeholder="000000-000"
                            />
                    </InputContainer>
                    <InputContainer>
                        <label>Estado:</label>
                            <input list="Estados" ID="Estado-input" name="Estado"/>
                            <datalist id="Estados">
                                <option value="AC"></option>
                                <option value="AL"></option>
                                <option value="AP"></option>
                                <option value="AM"></option>
                                <option value="BA"></option>
                                <option value="CE"></option>
                                <option value="DF"></option>
                                <option value="ES"></option>
                                <option value="GO"></option>
                                <option value="MA"></option>
                                <option value="MT"></option>
                                <option value="MS"></option>
                                <option value="MG"></option>
                                <option value="PA"></option>
                                <option value="PB"></option>
                                <option value="PR"></option>
                                <option value="PE"></option>
                                <option value="PI"></option>
                                <option value="RJ"></option>
                                <option value="RN"></option>
                                <option value="RS"></option>
                                <option value="RO"></option>
                                <option value="RR"></option>
                                <option value="SC"></option>
                                <option value="SP"></option>
                                <option value="SE"></option>
                                <option value="TO"></option>
                        </datalist>
                    </InputContainer>
                    <InputContainer>
                        <label>Cidade:</label>
                        <input type="text"/>
                    </InputContainer>
                </Form_Frame>
                <InputContainer>
                    <label>Rua:</label>
                    <input type="text"/>
                </InputContainer>
                <Form_Frame>
                    <InputContainer>
                        <label>Numero:</label>
                        <input type="number"/>
                    </InputContainer>
                    <InputContainer>
                        <label>Complemento:</label>
                        <input type="text"/>
                    </InputContainer>
                    <InputContainer>
                        <label>Bairro:</label>
                        <input type="text"/>
                    </InputContainer>
                </Form_Frame>
                <p>Informações de contato:</p>
                <InputContainer>
                    <label>Celular:</label>
                    <Cleave
                        options={{blocks: [0, 2, 1, 4, 4], delimiters: ['(', ') ', ' ', '-']}}
                        placeholder="(00) 0 0000-0000"
                        />
                </InputContainer>
                <InputContainer>
                    <label>E-mail:</label>
                    <input type="email"/>
                </InputContainer>
                <p>Escolha uma senha:</p>
                <InputContainer>
                    <label>Senha:</label>
                    <SenharContainer>
                        <input type={showPassword ? "text" : "password"} />  
                        <ShowButton type="button" onClick={togglePasswordVisibility}>
                            {showPassword ? <span class="material-symbols-outlined">visibility</span> : <span class="material-symbols-outlined">visibility_off</span>} 
                        </ShowButton>
                    </SenharContainer>
                </InputContainer>
                <InputContainer>
                    <label>Confirme sua senha:</label>
                    <SenharContainer>
                        <input type={showConfirmPassword ? "text" : "password"} />  
                        <ShowButton type="button" onClick={toggleConfirmPasswordVisibility}>
                            {showConfirmPassword ? <span className="material-symbols-outlined">visibility</span> : <span className="material-symbols-outlined">visibility_off</span>}
                        </ShowButton>
                    </SenharContainer>
                </InputContainer>
            </FormsContainer>
            <Button type ="submit">Cadastre-se</Button>
            <p className="FacaLogin">Já tem conta? Faça Login</p>
        </Frame1>
    )
}
export default Cadastro