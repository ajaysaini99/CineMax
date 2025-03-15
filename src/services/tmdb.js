import URLS from "./url-service";
const tmdbService = {
  getPopularMoviesList: async () => {
    try {
      const response = await fetch(URLS.POPULAR_MOVIES());
      return response.json();
    } catch (error) {
      console.error("Error fetching popular movies:", error);
      throw error;
    }
  },
};

export default tmdbService;
