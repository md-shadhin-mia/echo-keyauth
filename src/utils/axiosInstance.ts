"use server"
import axios from 'axios';

// Create an instance of axios
const axiosInstance = axios.create({
    baseURL: 'https://api.example.com', // Set your base API URL
    timeout: 10000, // Request timeout
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        // Add the Authorization header before the request is sent
        const token = process.env.AUTH_TOKEN || 'your-auth-token';
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        // Optionally log the request
        console.log('Intercepting request:');
        console.log('Method:', config.method);
        console.log('URL:', config.url);
        console.log('Headers:', config.headers);

        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);

export default axiosInstance;
