// src/controllers/goalsController.js
import Goal from '../models/Goal.js';
import * as recommendationService from '../services/recommendationService.js';

export const createGoal = async (req, res) => {
  const { goalName } = req.body;
  try {
    const generatedSkills =
      recommendationService.generateSkillsForRole(goalName);

    const goal = await Goal.create({
      user: req.user._id,
      goalName,
      generatedSkills,
    });

    res.status(201).json(goal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ user: req.user._id });
    res.json(goals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
