import express from "express";

import {
  createContact,
  getContacts,
  getContactById,
  deleteContact,
} from "../controller/contactController.js";

const router = express.Router();

// Create contact message
router.post("/", createContact);

// Get all contact messages
router.get("/", getContacts);

// Get single contact message
router.get("/:id", getContactById);

// Delete contact message
router.delete("/:id", deleteContact);

export default router;