import app from "./app";

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log(`🚀 Mobile Backend Server running on port ${PORT}`);
  console.log(`📱 Health check: http://localhost:${PORT}/health`);
  console.log(`📊 API Base URL: http://localhost:${PORT}/api`);
  console.log(`📋 Available endpoints:`);
  console.log(`   GET /api/phones - Get all phones`);
  console.log(`   GET /api/phones/:id - Get phone by ID`);
  console.log(`   GET /api/phones/brand/:brand - Get phones by brand`);
  console.log(`   GET /api/phones/brands - Get available brands`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM received. Shutting down gracefully...");
  server.close(() => {
    console.log("Server closed.");
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  console.log("SIGINT received. Shutting down gracefully...");
  server.close(() => {
    console.log("Server closed.");
    process.exit(0);
  });
});

export default server;
