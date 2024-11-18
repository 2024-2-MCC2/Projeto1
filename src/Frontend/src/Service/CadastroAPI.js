import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

// Cadastra um novo usuário
export const register = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
};

// Atualiza a senha do usuário
export const updatePassword = async (email, novaSenha) => {
    const response = await axios.post(`${API_URL}/forgot-password`, { Email: email, novaSenha });
    return response.data;
};