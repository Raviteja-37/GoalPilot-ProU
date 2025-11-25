import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import './index.css';
import {
  getLearningSkills,
  getCompletedSkills,
  getGoals,
  addLearningSkill,
  addCompletedSkill,
  createGoal,
  updateSkillProgress,
} from '../services/Api';

const Dashboard = () => {
  const [learningSkills, setLearningSkills] = useState([]);
  const [completedSkills, setCompletedSkills] = useState([]);
  const [goals, setGoals] = useState([]);
  const [newLearningSkill, setNewLearningSkill] = useState('');
  const [newCompletedSkill, setNewCompletedSkill] = useState('');
  const [newGoal, setNewGoal] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const learning = await getLearningSkills();
      const completed = await getCompletedSkills();
      const goalsData = await getGoals();
      setLearningSkills(learning);
      setCompletedSkills(completed);
      setGoals(goalsData);
    };
    fetchData();
  }, []);

  // Learning Skill
  const handleAddLearningSkill = async () => {
    if (!newLearningSkill) return;
    const skill = await addLearningSkill(newLearningSkill);
    setLearningSkills([...learningSkills, skill]);
    setNewLearningSkill('');
  };

  const handleUpdateProgress = async (skillId, progress) => {
    // 1. Find the original skill data BEFORE making the API call
    const skillToComplete = learningSkills.find((s) => s._id === skillId);
    if (!skillToComplete) return; // Safety check

    // 2. Make the API call
    const updated = await updateSkillProgress(skillId, progress);

    if (progress >= 100) {
      // 3. Since the backend now returns the completedSkill object (which has an _id),
      //    we use it to update the completed list.
      const completedSkillData = updated._id
        ? updated
        : {
            // Fallback for immediate UI display if backend returned only a message
            _id: skillToComplete._id,
            skillName: skillToComplete.skillName,
          };

      // Update local state: remove from learning, add to completed
      setLearningSkills(learningSkills.filter((s) => s._id !== skillId));
      setCompletedSkills([...completedSkills, completedSkillData]);
    } else {
      // Progress < 100, update the learning skill
      setLearningSkills(
        learningSkills.map((s) => (s._id === skillId ? updated : s))
      );
    }
  };

  // Completed Skill
  const handleAddCompletedSkill = async () => {
    if (!newCompletedSkill) return;
    const skill = await addCompletedSkill(newCompletedSkill);
    setCompletedSkills([...completedSkills, skill]);
    setNewCompletedSkill('');
  };

  // Goals
  const handleAddGoal = async () => {
    if (!newGoal) return;
    const goal = await createGoal(newGoal);
    setGoals([...goals, goal]);
    setNewGoal('');
  };

  // YouTube search
  const handleYouTube = (query) => {
    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(
      query
    )}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <h2>Dashboard</h2>

        {/* Learning Skills */}
        <section>
          <h3>Learning Skills</h3>
          <input
            type="text"
            placeholder="Add new learning skill"
            value={newLearningSkill}
            onChange={(e) => setNewLearningSkill(e.target.value)}
          />
          <button onClick={handleAddLearningSkill}>Add</button>

          <ul>
            {learningSkills.map((skill) => (
              <li key={skill._id}>
                {skill.skillName} - {skill.progressPercentage}%
                <input
                  type="number"
                  placeholder="Update %"
                  min="0"
                  max="100"
                  onChange={(e) =>
                    handleUpdateProgress(skill._id, Number(e.target.value))
                  }
                />
                <button onClick={() => handleYouTube(skill.skillName)}>
                  Watch Video
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* Completed Skills */}
        <section>
          <h3>Completed Skills</h3>
          <input
            type="text"
            placeholder="Add completed skill"
            value={newCompletedSkill}
            onChange={(e) => setNewCompletedSkill(e.target.value)}
          />
          <button onClick={handleAddCompletedSkill}>Add</button>

          <ul>
            {completedSkills.map((skill) => (
              <li key={skill._id}>
                {skill.skillName}
                <button onClick={() => handleYouTube(skill.skillName)}>
                  Watch Video
                </button>
                {/* Note: Avoid window.alert in production apps. Use a custom modal instead. */}
                <button onClick={() => console.log('Revision clicked')}>
                  Revision
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* Goals */}
        <section>
          <h3>Goals</h3>
          <input
            type="text"
            placeholder="Add goal"
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
          />
          <button onClick={handleAddGoal}>Add</button>

          <ul>
            {goals.map((goal) => (
              <li key={goal._id}>
                {goal.goalName}
                <button onClick={() => handleYouTube(goal.goalName)}>
                  Watch Video
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
