import express from "express";
import tmdbAxios from "../axios-client.js";

const router = express.Router({ mergeParams: true });

router.get("/popular", async (req, res, next) => {
  try {
    const response = await tmdbAxios.get("/movie/popular", {});

    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

export default router;
