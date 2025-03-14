export default class tmdbClient {
  constructor() {
    this.api_key = import.meta.env.VITE_TMDB_API_KEY;
  }
}
