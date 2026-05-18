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

// --- CACHING IMPLEMENTATION ---
// We use a Map to store our cached responses in memory
const cache = new Map();

/**
 * A custom fetch function that implements caching for GET requests.
 * @param {string} url - The endpoint to fetch
 * @param {object} options - Axios request options
 * @param {number} ttl - Time To Live in milliseconds (default: 5 minutes)
 */
export const fetchWithCache = async (url, options = {}, ttl = 5 * 60 * 1000) => {
    // 1. Generate a unique cache key based on the URL and options
    const key = url + JSON.stringify(options);
    
    // 2. Check if we already have this data in our cache
    if (cache.has(key)) {
        const { data, timestamp } = cache.get(key);
        
        // 3. Check if the cached data is still fresh (hasn't expired)
        if (Date.now() - timestamp < ttl) {
            console.log(`📦 [Cache Hit]: Serving data for ${url} from cache`);
            return data;
        } else {
            console.log(`⏳ [Cache Expired]: Data for ${url} is too old, fetching fresh data...`);
            // Optional: You can delete the expired cache here, but it will be overwritten anyway
        }
    } else {
        console.log(`🌐 [Cache Miss]: Fetching fresh data from network for ${url}`);
    }

    // 4. Fetch fresh data from the API
    const response = await api.get(url, options);
    
    // 5. Save the new data into the cache with the current timestamp
    cache.set(key, {
        data: response.data,
        timestamp: Date.now()
    });

    return response.data;
};

// Example usage of our new caching feature
export const fetchNavigation = async () => {
    try {
        // Instead of api.get('/navigation'), we use fetchWithCache
        // Navigation items rarely change, so a 5-minute cache (or even longer) is perfect!
        const data = await fetchWithCache('/navigation', {}, 5 * 60 * 1000);
        return data;
    } catch (error) {
        console.error("Failed to fetch navigation:", error);
        return [];
    }
};

export default api;
