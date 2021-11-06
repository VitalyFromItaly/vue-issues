import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/repos/vuejs/vue",
  timeout: 60000,
});

export default api;
