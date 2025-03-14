import axios from "axios";

const apiService = {};

apiService.get = (url, opt, config = {}) => {
  return axios.get(url, {
    params: opt.params,
    headers: opt.headers,
    withCredentials: true,
  });
};

apiService.post = (url, opt) => {
  return axios.post(url, opt.data, {
    headers: opt.data,
    params: opt.params,
  });
};

apiService.put = (url, opt) => {
  return axios.post(url, opt.data, {
    headers: opt.data,
    params: opt.params,
  });
};

apiService.patch = (url, opt) => {
  return axios.post(url, opt.data, {
    headers: opt.data,
    params: opt.params,
  });
};

apiService.delete = (url, opt) => {
  return axios.post(url, {
    data: opt.data,
    headers: opt.data,
    params: opt.params,
  });
};

axios.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    api_key: import.meta.env.VITE_TMDB_API_KEY,
  };
  return config;
});

export default apiService;
