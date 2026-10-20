import express from "express";
import dotenv from 'dotenv'
import cors from "cors";
import connectDB from "./config/db.js";
import dns from 'dns'

import contactRoutes from "./routes/contactRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";

import errorMiddleware from "./middleware/errorMiddleware.js";



dns.setServers(["1.1.1.1","4.4.4.4"]);

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);

// Error Middleware
app.use(errorMiddleware);

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});