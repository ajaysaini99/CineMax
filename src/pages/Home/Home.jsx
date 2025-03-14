import { useState, useEffect } from "react";
import tmdbService from "./../../services/tmdb";
import "./Home.css";

function Home() {
  useEffect(() => {
    (async function () {
      const data = await tmdbService.getPopularMoviesList();
      console.log("---- data  === ", data);
    })();
  });
  return <></>;
}

export default Home;
