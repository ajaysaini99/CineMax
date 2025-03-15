import express from "express";
import axios from "axios";
import MovieRoutes from "./movie.js";
import ErrorHandler from "../middleware/error-handler.js";

const app = express();

app.use("/movie", MovieRoutes);

app.use(ErrorHandler);

export default app;
