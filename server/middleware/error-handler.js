// Central Error Handler Middleware
export default (err, req, res, next) => {
  // Log the error details
  console.error("Error details:", {
    path: req.path,
    method: req.method,
    error: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });

  // Handle different types of errors
  if (err.isAxiosError) {
    // TMDB API errors
    const status = err.response?.status || 500;
    const message = err.response?.data?.status_message || "API Error";

    return res.status(status).json({
      success: false,
      message: message,
      status: status,
    });
  }

  // Check if it's an API key issue
  if (err.response?.status === 401) {
    return res.status(401).json({
      message: "Invalid API key. Please check your TMDB API key configuration.",
      success: false,
    });
  }

  // Network or timeout errors
  if (err.code === "ECONNRESET" || err.code === "ETIMEDOUT") {
    return res.status(503).json({
      message: "Unable to reach TMDB servers. Please try again later.",
      success: false,
    });
  }

  res.status(500).json({
    message: "Failed to fetch movies",
    details: err.message,
    success: false,
  });
};
