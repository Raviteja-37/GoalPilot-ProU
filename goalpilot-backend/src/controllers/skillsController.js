// src/controllers/skillsController.js
import LearningSkill from '../models/LearningSkill.js';
import CompletedSkill from '../models/CompletedSkill.js';

export const addLearningSkill = async (req, res) => {
  const { skillName } = req.body;
  try {
    const skill = await LearningSkill.create({
      user: req.user._id,
      skillName,
      progressPercentage: 0,
    });
    res.status(201).json(skill);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateProgress = async (req, res) => {
  const { skillId } = req.params;
  const { progressPercentage } = req.body;
  try {
    const skill = await LearningSkill.findOne({
      _id: skillId,
      user: req.user._id,
    });
    if (!skill) return res.status(404).json({ message: 'Skill not found' });

    skill.progressPercentage = progressPercentage;
    await skill.save();

    if (progressPercentage >= 100) {
      await CompletedSkill.create({
        user: req.user._id,
        skillName: skill.skillName,
      });
      await skill.remove();
      return res.json({
        message: 'Skill completed and moved to completed skills',
      });
    }

    res.json(skill);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getLearningSkills = async (req, res) => {
  try {
    const skills = await LearningSkill.find({ user: req.user._id });
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getCompletedSkills = async (req, res) => {
  try {
    const skills = await CompletedSkill.find({ user: req.user._id });
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
