import axios from 'axios';

export const axiosLogin = axios.create({
    baseURL: process.env.API_URL,
});