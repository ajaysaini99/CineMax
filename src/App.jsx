import { useState, useEffect } from "react";
import "./App.css";
import tmdbClient from "./services/tmdb";

function App() {
  useEffect(() => {
    const abc = new tmdbClient();
  });

  return (
    <>
      <div></div>
    </>
  );
}

export default App;
