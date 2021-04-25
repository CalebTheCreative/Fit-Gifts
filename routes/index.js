// const path = require("path");
import express from "express";
import clientRoutes from "./client-routes.js";

const router = express.Router();

// API Routes
router.use("/clients", clientRoutes);

export default router;
