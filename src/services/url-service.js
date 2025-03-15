import urlJoin from "url-join";

const BASE_URL =
  process.env.NODE_ENV === "production" ? "/api" : "http://localhost:5000/api";

export default {
  POPULAR_MOVIES: () => {
    return urlJoin(BASE_URL, "/movie/popular");
  },
};
