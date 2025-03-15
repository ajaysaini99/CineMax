import axios from "axios";

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 1000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Add auth token to headers
    config.headers = {
      Authorization: `Bearer ${process.env.VITE_TMDB_API_READ_ACCESS_TOKEN}`,
    };

    // Log request (useful for debugging)
    console.log("Making request to:", config.url);

    return config;
  },
  (error) => {
    // Handle request errors
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
