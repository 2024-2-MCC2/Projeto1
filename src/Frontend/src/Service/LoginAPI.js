import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

// Faz login do usuário
export const login = async (email, senha) => {
    const response = await axios.post(`${API_URL}/login`, { Email: email, Senha: senha });
    return response.data;
};

// Faz logout do usuário
export const logout = async () => {
    const response = await axios.post(`${API_URL}/logout`);
    return response.data;
};