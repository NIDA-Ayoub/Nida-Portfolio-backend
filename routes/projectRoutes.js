import express from "express";

import {
  createProject,
  getProjects,
  getFeaturedProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from "../controller/projectController.js";

const router = express.Router();

// Create project
router.post("/", createProject);

// Get all projects
router.get("/", getProjects);

// Get featured projects
router.get("/featured", getFeaturedProjects);

// Get single project
router.get("/:id", getProjectById);

// Update project
router.put("/:id", updateProject);

// Delete project
router.delete("/:id", deleteProject);

export default router;