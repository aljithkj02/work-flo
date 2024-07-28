import axios from "axios";

const API = process.env.NEXT_PUBLIC_BACKEND_URL || '';


const axiosInstance = axios.create({
    baseURL: API,
    withCredentials: true
});
  
axiosInstance.interceptors.request.use((config) => {
        return config;
}, (error) => {
    return Promise.reject(error);
});
  
axiosInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response && error.response.status === 401) {
        window.location.href = '/login';
    }
    return Promise.reject(error);
});
  
export default axiosInstance;
