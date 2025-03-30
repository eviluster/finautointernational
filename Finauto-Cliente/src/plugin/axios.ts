import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.finautointernational', // Cambia esto a tu URL base
  timeout: 5000, // Tiempo límite de solicitud
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
