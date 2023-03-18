import axios from "axios";
import { env } from '../shared/env';

export const api = axios.create({
    baseURL: env.api
});

api.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    console.log(error.response.data.original)
    return ''
});