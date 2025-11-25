// src/routes/goalsRoutes.js
import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { createGoal, getUserGoals } from '../controllers/goalsController.js';

const router = express.Router();

router.use(protect);

router.post('/', createGoal);
router.get('/', getUserGoals);

export default router;
