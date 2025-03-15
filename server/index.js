import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
import path from "path";
import routes from "./routes/index.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const origin = process.env.VITE_APP_URL;

// CORS Configuration
app.use(
  cors({
    origin,
    credentials: true,
  })
);

app.use(express.json());

// proxied api calls
app.use("/api", routes);

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("dist"));
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
