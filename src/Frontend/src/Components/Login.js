import styled from "styled-components";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../Service/LoginAPI'; // Importe a função de login da API

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
.FacaCadastro{
    color: #0460C9;
}
.FacaCadastro:hover{
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
justify-content: center;
align-items: center;
gap: 30px;
width: 400px;
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
const InputContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
gap: 5px;
background-color: #fff;
color: #0460C9;
border: 2px solid #0460C9;
border-radius: 15px;
width: 100%;
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
}
&:focus-within {
    border: 2px solid #05C7F2;
    color: #05C7F2;
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
function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Para redirecionar após o login

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(email, senha);
            console.log(response.message); // Sucesso: exibe mensagem no console
            navigate('/ADM'); // Redireciona para a área do administrador
        } catch (error) {
            setErrorMessage(error.response?.data?.message || 'Erro ao realizar login.');
        }
    };

    return (
        <Frame1>
            <h2>Login</h2>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Exibe erros */}
            <FormsContainer onSubmit={handleSubmit}>
                <InputContainer>
                    <label>E-mail:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </InputContainer>
                <InputContainer>
                    <p>Senha:</p>
                    <input 
                        type={showPassword ? "text" : "password"} 
                        value={senha} 
                        onChange={(e) => setSenha(e.target.value)} 
                        required 
                    />
                    <ShowButton type="button" onClick={togglePasswordVisibility}>
                        {showPassword ? (
                            <span className="material-symbols-outlined">visibility</span>
                        ) : (
                            <span className="material-symbols-outlined">visibility_off</span>
                        )}
                    </ShowButton>
                </InputContainer>
                <Button type="submit">Entrar</Button>
            </FormsContainer>
            <Link to="/Cadastro" className="no-link-style">
                <p className="FacaCadastro">Não tem conta? Cadastre-se</p>
            </Link>
        </Frame1>
    );
}

export default Login;