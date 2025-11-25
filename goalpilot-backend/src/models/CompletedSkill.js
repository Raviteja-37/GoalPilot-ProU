// src/models/CompletedSkill.js
import mongoose from 'mongoose';

const completedSkillSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    skillName: { type: String, required: true },
    completedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model('CompletedSkill', completedSkillSchema);
