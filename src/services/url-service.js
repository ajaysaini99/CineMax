import urlJoin from "url-join";

const BASE_URL = "https://api.themoviedb.org/3";

export default {
  POPULAR_MOVIES: () => {
    const abc = urlJoin(BASE_URL, "/movie/popular");
    return abc;
  },
};
