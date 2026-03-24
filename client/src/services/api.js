import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || '/api'
});

// Add a request interceptor to include the auth token
api.interceptors.request.use((config) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo && userInfo.token) {
        config.headers.Authorization = `Bearer ${userInfo.token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
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
