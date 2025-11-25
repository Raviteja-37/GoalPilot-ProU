// src/routes/skillsRoutes.js
import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
  addLearningSkill,
  updateProgress,
  getLearningSkills,
  getCompletedSkills,
} from '../controllers/skillsController.js';

const router = express.Router();

router.use(protect);

router.post('/add', addLearningSkill);
router.put('/update/:skillId', updateProgress);
router.get('/learning', getLearningSkills);
router.get('/completed', getCompletedSkills);

export default router;
