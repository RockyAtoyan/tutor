import axios from "axios";

export const mainAxios = axios.create({
    baseURL: process.env.API_URL,
    withCredentials: true
})