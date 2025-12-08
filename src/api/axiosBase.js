import axios from "axios";

const api = axios.create({
  baseURL: "https://dr-sahab-backend.onrender.com",
});

// Automatically attach token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // <-- FIXED

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
