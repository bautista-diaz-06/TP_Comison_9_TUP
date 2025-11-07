import axios from "axios";
import { API } from "../endpoints/api.js";

const api = axios.create({
  baseURL: API,
});

export default api;
