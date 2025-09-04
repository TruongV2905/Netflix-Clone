import axios from "axios";
const api = axios.create({
  // baseURL: "http://103.200.20.149/:8080/api/",
  baseURL: "https://api.themoviedb.org/3/",
});

api.interceptors.request.use(
  function (config) {
    const apiKey = import.meta.env.VITE_API_KEY;
    console.log(apiKey);
    config.headers.Authorization = `Bearer ${apiKey}
`;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
