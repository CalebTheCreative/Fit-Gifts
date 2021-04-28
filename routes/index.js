// const path = require("path");
import express from 'express';
import clientRoutes from './client-routes.js';
import userRoutes from './users';

const router = express.Router();

// API Routes
router.use('/clients', clientRoutes);
router.user('./users', userRoutes);

export default router;
