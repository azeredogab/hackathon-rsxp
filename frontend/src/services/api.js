import axios from "axios";

const api = axios.create({
  baseURL: "http://142.93.117.19:8000/api"
});

export default api;
