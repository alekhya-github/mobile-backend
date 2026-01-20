import express, { Application, Request, Response } from "express";
import cors from "cors";
import phoneRoutes from "./routes/phoneRoutes";
import heroSectionRoutes from "./routes/heroSectionRoutes";

const app: Application = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", phoneRoutes);
app.use(heroSectionRoutes);

// Image proxy route to avoid CORS issues
app.get("/content/dam/*", async (req: Request, res: Response) => {
  try {
    const imagePath = req.path;
    const aemUrl = `http://localhost:4502${imagePath}`;
    console.log(`Proxying image request to: ${aemUrl}`);

    const response = await fetch(aemUrl);

    if (!response.ok) {
      throw new Error(`AEM returned status: ${response.status}`);
    }

    // Forward the content type and other relevant headers
    const contentType = response.headers.get("content-type");
    if (contentType) {
      res.setHeader("Content-Type", contentType);
    }

    // Stream the image data
    const buffer = await response.arrayBuffer();
    res.send(Buffer.from(buffer));
  } catch (error) {
    console.error("Error proxying image:", error);
    res.status(404).send("Image not found");
  }
});

// Health check endpoint
app.get("/health", (_req: Request, res: Response) => {
  res.json({
    status: "OK",
    message: "Mobile Backend Server is running",
    timestamp: new Date().toISOString(),
  });
});

// Root endpoint
app.get("/", (_req: Request, res: Response) => {
  res.json({
    message: "Welcome to Mobile Backend API",
    version: "1.0.0",
    endpoints: {
      phones: "/api/phones",
      phoneById: "/api/phones/:id",
      phonesByBrand: "/api/phones/brand/:brand",
      brands: "/api/brands",
      health: "/health",
    },
  });
});

// 404 handler
app.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: "Route not found",
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
});

// Error handler
app.use((err: Error, _req: Request, res: Response, _next: Function) => {
  console.error("Error:", err.message);
  res.status(500).json({
    success: false,
    error: "Internal server error",
    message:
      process.env.NODE_ENV === "development"
        ? err.message
        : "Something went wrong",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Mobile Backend Server is running on port ${PORT}`);
  console.log(`📱 API endpoints available at http://localhost:${PORT}/api`);
  console.log(`💚 Health check: http://localhost:${PORT}/health`);
});

export default app;
