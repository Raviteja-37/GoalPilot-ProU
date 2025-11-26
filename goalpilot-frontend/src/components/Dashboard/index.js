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

import RoadmapModal from '../RoadMapModal';
import roadmaps from '../Data.js';
import VideoPlayerModal from '../VideoPlayerModal';
import ChartsSection from '../ChartsSection';

const Dashboard = () => {
  const [learningSkills, setLearningSkills] = useState([]);
  const [completedSkills, setCompletedSkills] = useState([]);
  const [goals, setGoals] = useState([]);

  const [newLearningSkill, setNewLearningSkill] = useState('');
  const [newCompletedSkill, setNewCompletedSkill] = useState('');
  const [newGoal, setNewGoal] = useState('');

  const [showRoadmap, setShowRoadmap] = useState(false);
  const [selectedRoadmap, setSelectedRoadmap] = useState(null);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch data on load
  useEffect(() => {
    const fetchData = async () => {
      setLearningSkills(await getLearningSkills());
      setCompletedSkills(await getCompletedSkills());
      setGoals(await getGoals());
    };
    fetchData();
  }, []);

  // Add learning skill
  const handleAddLearningSkill = async () => {
    if (!newLearningSkill.trim()) return;
    const skill = await addLearningSkill(newLearningSkill);
    setLearningSkills([...learningSkills, skill]);
    setNewLearningSkill('');
  };

  // Update progress
  const handleUpdateProgress = async (skillId, progress) => {
    const skill = learningSkills.find((s) => s._id === skillId);
    if (!skill) return;

    const updated = await updateSkillProgress(skillId, progress);

    if (progress >= 100) {
      const completedSkill =
        updated._id !== undefined
          ? updated
          : {
              _id: skill._id,
              skillName: skill.skillName,
            };

      setLearningSkills(learningSkills.filter((s) => s._id !== skillId));
      setCompletedSkills([...completedSkills, completedSkill]);
    } else {
      setLearningSkills(
        learningSkills.map((s) => (s._id === skillId ? updated : s))
      );
    }
  };

  // Add completed skill
  const handleAddCompletedSkill = async () => {
    if (!newCompletedSkill.trim()) return;
    const skill = await addCompletedSkill(newCompletedSkill);
    setCompletedSkills([...completedSkills, skill]);
    setNewCompletedSkill('');
  };

  // Add goal
  const handleAddGoal = async () => {
    if (!newGoal.trim()) return;
    const goal = await createGoal(newGoal);
    setGoals([...goals, goal]);
    setNewGoal('');
  };

  const openVideoModal = (query) => {
    setSearchQuery(query);
    setShowVideoPlayer(true);
  };

  // Open roadmap modal
  const openRoadmap = (goalName) => {
    const key = goalName.toLowerCase();

    if (roadmaps[key]) {
      setSelectedRoadmap(roadmaps[key]);
      setShowRoadmap(true);
    } else {
      alert('No roadmap available for this goal yet.');
    }
  };

  return (
    <div>
      <Navbar />

      <div className="dashboard-wrapper">
        <h2 className="dashboard-title">GoalPilot Dashboard</h2>

        <div className="grid-container">
          {/* ================= Learning Skills ================= */}
          <div className="card">
            <h3>Learning Skills</h3>

            <div className="input-row">
              <input
                type="text"
                placeholder="Enter new learning skill"
                value={newLearningSkill}
                onChange={(e) => setNewLearningSkill(e.target.value)}
              />
              <button onClick={handleAddLearningSkill}>Add</button>
            </div>

            <ul className="list">
              {learningSkills.map((skill) => (
                <li key={skill._id} className="list-item">
                  <div>
                    <strong>{skill.skillName}</strong>
                    <p className="progress-label">
                      {skill.progressPercentage}% completed
                    </p>
                  </div>

                  <div className="actions">
                    <input
                      type="number"
                      placeholder="Update %"
                      min="0"
                      max="100"
                      onChange={(e) =>
                        handleUpdateProgress(skill._id, Number(e.target.value))
                      }
                    />

                    <button onClick={() => openVideoModal(skill.skillName)}>
                      Learn
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Completed Skills ================= */}
          <div className="card">
            <h3>Completed Skills</h3>

            <div className="input-row">
              <input
                type="text"
                placeholder="Enter completed skill"
                value={newCompletedSkill}
                onChange={(e) => setNewCompletedSkill(e.target.value)}
              />
              <button onClick={handleAddCompletedSkill}>Add</button>
            </div>

            <ul className="list">
              {completedSkills.map((skill) => (
                <li key={skill._id} className="list-item">
                  <strong>{skill.skillName}</strong>

                  <div className="actions">
                    <button onClick={() => openVideoModal(skill.skillName)}>
                      Revise
                    </button>

                    {/* <button className="revise-btn">Revise</button> */}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Goals ================= */}
          <div className="card wide-card">
            <h3>Your Goals</h3>

            <div className="input-row">
              <input
                type="text"
                placeholder="Enter new goal"
                value={newGoal}
                onChange={(e) => setNewGoal(e.target.value)}
              />
              <button onClick={handleAddGoal}>Add</button>
            </div>

            <ul className="list">
              {goals.map((goal) => (
                <li key={goal._id} className="list-item goal-item">
                  <strong>{goal.goalName}</strong>

                  <div className="actions">
                    <button onClick={() => openVideoModal(goal.goalName)}>
                      Explore
                    </button>

                    <button
                      className="roadmap-btn"
                      onClick={() => openRoadmap(goal.goalName)}
                    >
                      View Roadmap
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ChartsSection
        learningSkills={learningSkills}
        completedSkills={completedSkills}
        goals={goals}
      />

      {/* ===== Roadmap Modal ===== */}
      <RoadmapModal
        isOpen={showRoadmap}
        onClose={() => setShowRoadmap(false)}
        roadmap={selectedRoadmap}
      />
      <VideoPlayerModal
        isOpen={showVideoPlayer}
        onClose={() => setShowVideoPlayer(false)}
        query={searchQuery}
      />
    </div>
  );
};

export default Dashboard;
