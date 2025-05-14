import axios from "axios";
import { useAuthStore } from "@/stores/auth";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const auth = useAuthStore();
    if (auth.accessToken) {
      config.headers!["Authorization"] = `Bearer ${auth.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
