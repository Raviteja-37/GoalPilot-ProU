import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
  addLearningSkill,
  updateProgress,
  getLearningSkills,
  getCompletedSkills,
  addCompletedSkillController,
} from '../controllers/skillsController.js';

const router = express.Router();

// Debug middleware NOW works
router.use((req, res, next) => {
  console.log('🔥 skillsRoutes hit:', req.method, req.originalUrl);
  next();
});

router.use(protect);

router.post('/add', addLearningSkill);
router.put('/update/:skillId', updateProgress);
router.get('/learning', getLearningSkills);
router.get('/completed', getCompletedSkills);
router.post('/addCompleted', addCompletedSkillController);

export default router;
