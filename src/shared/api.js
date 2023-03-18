import axios from "axios";
import Toastr from 'toastr'
import { env } from '../shared/env';

export const api = axios.create({
    baseURL: env.api
});

api.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    for (let row of error.response.data.original.error) {
        Toastr.error(row, 'Error!')
    }
    return ''
});