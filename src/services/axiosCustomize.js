import axios from "axios";


// Create an Axios instance with the base URL
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,  // Replace with your API URL
});

// Request interceptor to add token to headers if available
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor to handle token expiration or errors globally
api.interceptors.response.use(
    //check response 
    (response) => response.data,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.log('error: ', error);
            // Handle token expiration or unauthorized access
            localStorage.removeItem('token');
            window.location.href = '/login';  // Redirect to login page
        }
        return Promise.reject(error);
    }
);

export default api;

