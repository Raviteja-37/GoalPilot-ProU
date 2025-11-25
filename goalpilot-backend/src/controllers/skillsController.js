import mongoose from 'mongoose';
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

  console.log('🔥 updateProgress called');
  console.log('🟦 skillId from FE:', skillId);

  try {
    const skill = await LearningSkill.findOne({
      _id: skillId,
      user: req.user._id,
    });

    console.log('🟩 Skill found in DB:', skill);

    if (!skill) {
      console.log('❌ Skill NOT found, cannot delete.');
      return res.status(404).json({ message: 'Skill not found' });
    }

    if (progressPercentage >= 100) {
      const completed = await CompletedSkill.create({
        user: req.user._id,
        skillName: skill.skillName,
      });

      const del = await LearningSkill.deleteOne({
        _id: skillId,
        user: req.user._id,
      });

      console.log('🟥 Delete result:', del);

      return res.status(200).json(completed);
    }

    skill.progressPercentage = progressPercentage;
    await skill.save();

    return res.status(200).json(skill);
  } catch (err) {
    console.log('💥 ERROR:', err);
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

export const addCompletedSkillController = async (req, res) => {
  const { skillName } = req.body;
  try {
    const skill = await CompletedSkill.create({
      user: req.user._id,
      skillName,
    });
    res.status(201).json(skill);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
