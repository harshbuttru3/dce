import axios from 'axios';

const api = axios.create({
    baseURL: '/api'
});

export const fetchNavigation = async () => {
    try {
        const response = await api.get('/navigation');
        return response.data;
    } catch (error) {
        console.error("Failed to fetch navigation:", error);
        return [];
    }
};

export default api;
