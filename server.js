
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dns from "dns";

import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

dotenv.config();

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();

app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio Backend API is running!",
  });
});

// API routes
app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);

// Error middleware
app.use(errorMiddleware);

// Connect database
connectDB();

// Local development
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
