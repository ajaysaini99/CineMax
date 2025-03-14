import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/browse" element={<Home />}></Route>
        <Route path="/browse/:type" element={<Home />}></Route>
        <Route path="/search" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
