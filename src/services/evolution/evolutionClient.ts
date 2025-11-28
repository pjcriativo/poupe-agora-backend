import axios from "axios";
import { env } from "../../config/env";

export const evolutionAPI = axios.create({
    baseURL: env.EVOLUTION_API_URL,
    timeout: 15000,
    headers: {
        Authorization: env.EVOLUTION_API_KEY,
        "Content-Type": "application/json",
    },
});

// Interceptor para logs e erros
evolutionAPI.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("❌ Evolution API Error:", {
            url: error.config?.url,
            status: error.response?.status,
            data: error.response?.data,
            message: error.message,
        });
        return Promise.reject(error);
    }
);
