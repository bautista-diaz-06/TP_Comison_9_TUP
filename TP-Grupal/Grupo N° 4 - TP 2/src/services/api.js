import axios from 'axios';
import { API } from '../endpoints/api';

const api = axios.create({
    baseURL: API
})

export default api;