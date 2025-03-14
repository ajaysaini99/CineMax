import apiService from "./api-service";
import URLS from "./url-service.js";

export default {
  getPopularMoviesList(params = {}) {
    const axiosOptions = Object.assign(
      {},
      {
        params,
      }
    );
    return apiService.get(URLS.POPULAR_MOVIES(), axiosOptions);
  },
};
