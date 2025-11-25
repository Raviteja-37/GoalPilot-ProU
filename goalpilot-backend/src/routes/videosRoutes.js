// src/routes/videosRoutes.js
import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { search } from '../controllers/videosController.js';

const router = express.Router();

router.get('/search', protect, search);

export default router;
