import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://82.163.73.169:5000/v1', // Cambia esto a tu URL base
  timeout: 5000, // Tiempo límite de solicitud
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
