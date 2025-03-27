import axios from "axios";

export const axiosInstanace = axios.create({
    baseURL: "http://localhost:5173/api",
    withCredentials: true,
});