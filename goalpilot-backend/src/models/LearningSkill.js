// src/models/LearningSkill.js
import mongoose from 'mongoose';

const learningSkillSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    skillName: { type: String, required: true },
    progressPercentage: { type: Number, default: 0 },
    startedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model('LearningSkill', learningSkillSchema);
