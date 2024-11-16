import axios from 'axios';

const API_URL = 'http://localhost:5000/api/noticias';

// Busca todas as notícias
export const getAllNoticias = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Busca uma notícia específica
export const getNoticiaById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

// Cria uma nova notícia
export const createNoticia = async (formData) => {
    const response = await axios.post(API_URL, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
};

// Atualiza uma notícia existente
export const updateNoticia = async (id, formData) => {
    const response = await axios.put(`${API_URL}/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
};

// Deleta uma notícia
export const deleteNoticia = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};