import styled from "styled-components";
import Cleave from 'cleave.js/react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../Service/CadastroAPI';

const Frame1 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;
background-color: #D9D9D9;
padding: 50px;
width: 100%;
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
.no-link-style {
  color: inherit; /* Herda a cor do elemento pai */
  text-decoration: none; /* Remove o sublinhado */
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

const SenharContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
`
function Cadastro() {

    const [formData, setFormData] = useState({
        Nome: '',
        Sobrenome: '',
        DataDeNascimento: '',
        RG: '',
        CPF: '',
        CEP: '',
        Estado: '',
        Cidade: '',
        Rua: '',
        Numero: '',
        Complemento: '',
        Bairro: '',
        Celular: '',
        Email: '',
        Senha: '',
        ConfirmarSenha: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        // Validação de senha
        if (formData.Senha !== formData.ConfirmarSenha) {
            setErrorMessage('As senhas não coincidem.');
            return;
        }

        try {
            const { ConfirmarSenha, ...userData } = formData; // Remove o campo de confirmação antes de enviar
            const response = await register(userData);
            setSuccessMessage(response.message);
            navigate('/Login'); // Redireciona para a página de login após o cadastro
        } catch (error) {
            setErrorMessage(error.response?.data?.error || 'Erro ao cadastrar o usuário.');
        }
    };

    return (
        <Frame1>
            <h2>Cadastre-se</h2>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Exibe erros */}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>} {/* Exibe sucesso */}
            <FormsContainer onSubmit={handleSubmit}>
                <Form_Frame>
                    <InputContainer>
                        <label>Nome:</label>
                        <input
                            type="text"
                            name="Nome"
                            value={formData.Nome}
                            onChange={handleInputChange}
                            required
                        />
                    </InputContainer>
                    <InputContainer>
                        <label>Sobrenome:</label>
                        <input
                            type="text"
                            name="Sobrenome"
                            value={formData.Sobrenome}
                            onChange={handleInputChange}
                            required
                        />
                    </InputContainer>
                </Form_Frame>
                <Form_Frame>
                    <InputContainer>
                        <label>Data de Nascimento:</label>
                        <input
                            type="date"
                            name="DataDeNascimento"
                            value={formData.DataDeNascimento}
                            onChange={handleInputChange}
                            required
                        />
                    </InputContainer>
                    <InputContainer>
                        <label>RG:</label>
                        <Cleave
                            options={{ blocks: [2, 3, 3, 1], delimiters: ['.', '.', '-'] }}
                            placeholder="00.000.000-0"
                            name="RG"
                            value={formData.RG}
                            onChange={(e) => handleInputChange({ target: { name: 'RG', value: e.target.rawValue } })}
                        />
                    </InputContainer>
                    <InputContainer>
                        <label>CPF:</label>
                        <Cleave
                            options={{ blocks: [3, 3, 3, 2], delimiters: ['.', '.', '-'] }}
                            placeholder="000.000.000-00"
                            name="CPF"
                            value={formData.CPF}
                            onChange={(e) => handleInputChange({ target: { name: 'CPF', value: e.target.rawValue } })}
                        />
                    </InputContainer>
                </Form_Frame>
                <p>Endereço:</p>
                <Form_Frame>
                    <InputContainer>
                        <label>CEP:</label>
                        <Cleave
                            options={{ blocks: [5, 3], delimiters: ['-'] }}
                            placeholder="00000-000"
                            name="CEP"
                            value={formData.CEP}
                            onChange={(e) => handleInputChange({ target: { name: 'CEP', value: e.target.rawValue } })}
                        />
                    </InputContainer>
                    <InputContainer>
                        <label>Estado:</label>
                        <input
                            list="Estados"
                            name="Estado"
                            value={formData.Estado}
                            onChange={handleInputChange}
                            required
                        />
                        <datalist id="Estados">
                            <option value="AC" />
                            <option value="AL" />
                            <option value="AP" />
                            <option value="AM" />
                            <option value="BA" />
                            <option value="CE" />
                            <option value="DF" />
                            <option value="ES" />
                            <option value="GO" />
                            <option value="MA" />
                            <option value="MT" />
                            <option value="MS" />
                            <option value="MG" />
                            <option value="PA" />
                            <option value="PB" />
                            <option value="PR" />
                            <option value="PE" />
                            <option value="PI" />
                            <option value="RJ" />
                            <option value="RN" />
                            <option value="RS" />
                            <option value="RO" />
                            <option value="RR" />
                            <option value="SC" />
                            <option value="SP" />
                            <option value="SE" />
                            <option value="TO" />
                        </datalist>
                    </InputContainer>
                    <InputContainer>
                        <label>Cidade:</label>
                        <input
                            type="text"
                            name="Cidade"
                            value={formData.Cidade}
                            onChange={handleInputChange}
                            required
                        />
                    </InputContainer>
                </Form_Frame>
                <InputContainer>
                    <label>Rua:</label>
                    <input
                        type="text"
                        name="Rua"
                        value={formData.Rua}
                        onChange={handleInputChange}
                        required
                    />
                </InputContainer>
                <Form_Frame>
                    <InputContainer>
                        <label>Número:</label>
                        <input
                            type="number"
                            name="Numero"
                            value={formData.Numero}
                            onChange={handleInputChange}
                            required
                        />
                    </InputContainer>
                    <InputContainer>
                        <label>Complemento:</label>
                        <input
                            type="text"
                            name="Complemento"
                            value={formData.Complemento}
                            onChange={handleInputChange}
                        />
                    </InputContainer>
                    <InputContainer>
                        <label>Bairro:</label>
                        <input
                            type="text"
                            name="Bairro"
                            value={formData.Bairro}
                            onChange={handleInputChange}
                            required
                        />
                    </InputContainer>
                </Form_Frame>
                <p>Informações de Contato:</p>
                <InputContainer>
                    <label>Celular:</label>
                    <Cleave
                        options={{ blocks: [0, 2, 1, 4, 4], delimiters: ['(', ') ', ' ', '-'] }}
                        placeholder="(00) 0 0000-0000"
                        name="Celular"
                        value={formData.Celular}
                        onChange={(e) => handleInputChange({ target: { name: 'Celular', value: e.target.rawValue } })}
                    />
                </InputContainer>
                <InputContainer>
                    <label>E-mail:</label>
                    <input
                        type="email"
                        name="Email"
                        value={formData.Email}
                        onChange={handleInputChange}
                        required
                    />
                </InputContainer>
                <p>Escolha uma senha:</p>
                <InputContainer>
                    <label>Senha:</label>
                    <SenharContainer>
                        <input
                            type="password"
                            name="Senha"
                            value={formData.Senha}
                            onChange={handleInputChange}
                            required
                        />
                    </SenharContainer>
                </InputContainer>
                <InputContainer>
                    <label>Confirme sua senha:</label>
                    <SenharContainer>
                        <input
                            type="password"
                            name="ConfirmarSenha"
                            value={formData.ConfirmarSenha}
                            onChange={handleInputChange}
                            required
                        />
                    </SenharContainer>
                </InputContainer>
                <Button type="submit">Cadastre-se</Button>
            </FormsContainer>
            <Link to="/Login" className="no-link-style">
                <p className="FacaLogin">Já tem conta? Faça Login</p>
            </Link>
        </Frame1>
    );

}
export default Cadastro