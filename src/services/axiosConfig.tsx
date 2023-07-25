import axios from "axios"

const token = localStorage.getItem('token') || ""

const api = axios.create({    
    baseURL: "https://api.predict.app.br",
    headers: {
        'Content-Type': 'application/json',
        'X-TENANT-ID': 'arnia',
        'Authorization': `Bearer ${token}`,
    }
})

export default api

// # const instance = axios.create({
//     #   baseURL: import.meta.env.VITE_API_BASE_URL,
//     #   headers: {
//     #     "x-api-key": import.meta.env.VITE_API_KEY,
//     #     "content-type": "application/json",
//     #   },
//     # })