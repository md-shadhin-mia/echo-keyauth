import axios from "axios";

const fetchApi = axios.create({
    baseURL: "http://localhost:/api/v1",
});

if (process.env.NODE_ENV === 'development') {
    fetchApi.interceptors.request.use((request) => {
        console.groupCollapsed('Request');
        console.log('URL:', request.url);
        console.log('Headers:', request.headers);
        console.log('Data:', request.data);
        console.groupEnd();
        return request;
    });

    fetchApi.interceptors.response.use(
        (response) => {
            console.groupCollapsed('Response');
            console.log('URL:', response.config.url);
            console.log('Status:', response.status);
            console.log('Data:', response.data);
            console.groupEnd();
            return response;
        },
        (error) => {
            console.groupCollapsed('Error');
            console.log('URL:', error.config.url);
            console.log('Status:', error.response?.status);
            console.log('Message:', error.message);
            console.groupEnd();
            return Promise.reject(error);
        }
    );
}

export default fetchApi