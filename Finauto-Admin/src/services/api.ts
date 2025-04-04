import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://82.163.73.169:5000/v1',
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;