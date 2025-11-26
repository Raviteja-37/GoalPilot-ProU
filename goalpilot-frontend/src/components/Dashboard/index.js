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
  const [selectedGoal, setSelectedGoal] = useState('');

  const [newLearningSkill, setNewLearningSkill] = useState('');
  const [newCompletedSkill, setNewCompletedSkill] = useState('');

  const [showRoadmap, setShowRoadmap] = useState(false);
  const [selectedRoadmap, setSelectedRoadmap] = useState(null);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Loading states for individual actions (keeps UI snappy)
  const [loadingAddSkill, setLoadingAddSkill] = useState(false);
  const [loadingAddCompleted, setLoadingAddCompleted] = useState(false);
  const [loadingAddGoal, setLoadingAddGoal] = useState(false);

  // Fetch data on load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ls, cs, gs] = await Promise.all([
          getLearningSkills(),
          getCompletedSkills(),
          getGoals(),
        ]);
        setLearningSkills(ls || []);
        setCompletedSkills(cs || []);
        setGoals(gs || []);
      } catch (err) {
        console.error('Error loading dashboard data', err);
      }
    };
    fetchData();
  }, []);

  // Add learning skill
  const handleAddLearningSkill = async () => {
    if (!newLearningSkill.trim()) return;
    try {
      setLoadingAddSkill(true);
      const skill = await addLearningSkill(newLearningSkill.trim());
      setLearningSkills((s) => [...s, skill]);
      setNewLearningSkill('');
    } catch (err) {
      console.error('Add learning skill error', err);
      alert(err.message || 'Failed to add learning skill');
    } finally {
      setLoadingAddSkill(false);
    }
  };

  // Update progress
  const handleUpdateProgress = async (skillId, progress) => {
    const skill = learningSkills.find((s) => s._id === skillId);
    if (!skill) return;

    try {
      const updated = await updateSkillProgress(skillId, progress);

      if (progress >= 100) {
        const completedSkill =
          updated && updated._id
            ? updated
            : {
                _id: skill._id,
                skillName: skill.skillName,
              };

        setLearningSkills((s) => s.filter((it) => it._id !== skillId));
        setCompletedSkills((s) => [...s, completedSkill]);
      } else {
        setLearningSkills((s) =>
          s.map((it) => (it._id === skillId ? updated : it))
        );
      }
    } catch (err) {
      console.error('Update progress error', err);
      alert(err.message || 'Failed to update progress');
    }
  };

  // Add completed skill
  const handleAddCompletedSkill = async () => {
    if (!newCompletedSkill.trim()) return;
    try {
      setLoadingAddCompleted(true);
      const skill = await addCompletedSkill(newCompletedSkill.trim());
      setCompletedSkills((s) => [...s, skill]);
      setNewCompletedSkill('');
    } catch (err) {
      console.error('Add completed skill error', err);
      alert(err.message || 'Failed to add completed skill');
    } finally {
      setLoadingAddCompleted(false);
    }
  };

  // Add goal
  const handleAddGoal = async () => {
    if (!selectedGoal.trim()) return;
    try {
      setLoadingAddGoal(true);
      const goal = await createGoal(selectedGoal.trim());
      setGoals((g) => [...g, goal]);
      setSelectedGoal(''); // reset dropdown
    } catch (err) {
      console.error('Add goal error', err);
      alert(err.message || 'Failed to add goal');
    } finally {
      setLoadingAddGoal(false);
    }
  };

  // Open video modal
  const openVideoModal = (query) => {
    setSearchQuery(query);
    setShowVideoPlayer(true);
  };

  // Open roadmap modal
  const openRoadmap = (goalName) => {
    const key = goalName;
    if (roadmaps[key]) {
      setSelectedRoadmap(roadmaps[key]);
      setShowRoadmap(true);
    } else {
      alert('No roadmap available for this goal yet.');
    }
  };

  return (
    <div className="gp-dashboard-root">
      <div className="aurora-bg" />
      <div className="neon-lines" />

      <Navbar />

      <main className="gp-dashboard-content">
        <header className="gp-header">
          <h1>GoalPilot</h1>
          <p className="sub">Your learning cockpit — track, play and revise.</p>
        </header>

        <section className="gp-top-cards">
          <div className="card small">
            <div className="card-title">Learning</div>
            <div className="card-value">{learningSkills.length}</div>
            <div className="card-note">
              {learningSkills.length ? 'Active skills' : 'Add skills to start'}
            </div>
          </div>

          <div className="card small">
            <div className="card-title">Completed</div>
            <div className="card-value">{completedSkills.length}</div>
            <div className="card-note">Ready for revision</div>
          </div>

          <div className="card grow">
            <div className="card-title">Goals</div>
            <div className="card-value">{goals.length}</div>
            <div className="card-note">Long-term targets</div>
          </div>

          <div className="card action">
            <div className="card-title">Quick Actions</div>
            <div className="actions-row">
              <input
                className="quick-input"
                placeholder="New skill (eg. React)"
                value={newLearningSkill}
                onChange={(e) => setNewLearningSkill(e.target.value)}
              />
              <button
                className="btn"
                onClick={handleAddLearningSkill}
                disabled={!newLearningSkill.trim() || loadingAddSkill}
              >
                {loadingAddSkill ? 'Adding...' : 'Add Skill'}
              </button>
            </div>
          </div>
        </section>

        <section className="gp-grid">
          {/* Learning Skills */}
          <div className="panel">
            <div className="panel-head">
              <h3>Learning Skills</h3>
            </div>

            <div className="panel-body">
              <div className="add-row">
                <input
                  placeholder="Add a learning skill"
                  value={newLearningSkill}
                  onChange={(e) => setNewLearningSkill(e.target.value)}
                />
                <button
                  className="btn small"
                  onClick={handleAddLearningSkill}
                  disabled={!newLearningSkill.trim() || loadingAddSkill}
                >
                  {loadingAddSkill ? 'Adding...' : 'Add'}
                </button>
              </div>

              <ul className="skill-list">
                {learningSkills.map((skill) => (
                  <li key={skill._id} className="skill-item">
                    <div className="skill-left">
                      <div className="skill-name">{skill.skillName}</div>
                      <div className="skill-progress">
                        {skill.progressPercentage ?? 0}%
                      </div>
                    </div>

                    <div className="skill-actions">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        placeholder="Update %"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            const val = Number(e.target.value);
                            if (!Number.isNaN(val))
                              handleUpdateProgress(skill._id, val);
                          }
                        }}
                      />
                      <button
                        className="btn outline"
                        onClick={() => openVideoModal(skill.skillName)}
                      >
                        Learn
                      </button>
                    </div>
                  </li>
                ))}

                {learningSkills.length === 0 && (
                  <li className="empty">No learning skills yet</li>
                )}
              </ul>
            </div>
          </div>

          {/* Completed Skills */}
          <div className="panel">
            <div className="panel-head">
              <h3>Completed Skills</h3>
            </div>

            <div className="panel-body">
              <div className="add-row">
                <input
                  placeholder="Add completed skill"
                  value={newCompletedSkill}
                  onChange={(e) => setNewCompletedSkill(e.target.value)}
                />
                <button
                  className="btn small"
                  onClick={handleAddCompletedSkill}
                  disabled={!newCompletedSkill.trim() || loadingAddCompleted}
                >
                  {loadingAddCompleted ? 'Adding...' : 'Add'}
                </button>
              </div>

              <ul className="skill-list">
                {completedSkills.map((skill) => (
                  <li key={skill._id} className="skill-item">
                    <div className="skill-left">
                      <div className="skill-name">{skill.skillName}</div>
                      <div className="skill-progress">Completed</div>
                    </div>

                    <div className="skill-actions">
                      <button
                        className="btn outline"
                        onClick={() => openVideoModal(skill.skillName)}
                      >
                        Revise
                      </button>
                    </div>
                  </li>
                ))}

                {completedSkills.length === 0 && (
                  <li className="empty">No completed skills yet</li>
                )}
              </ul>
            </div>
          </div>

          {/* Goals */}
          <div className="panel wide">
            <div className="panel-head">
              <h3>Your Goals</h3>
            </div>

            <div className="panel-body">
              <div className="add-row">
                <select
                  value={selectedGoal}
                  onChange={(e) => setSelectedGoal(e.target.value)}
                  className="goal-dropdown"
                >
                  <option value="">Select a goal</option>
                  {Object.keys(roadmaps).map((key) => (
                    <option key={key} value={key}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </option>
                  ))}
                </select>

                <button
                  className="btn small"
                  onClick={handleAddGoal}
                  disabled={!selectedGoal || loadingAddGoal}
                >
                  {loadingAddGoal ? 'Adding...' : 'Add'}
                </button>
              </div>

              <ul className="goal-list">
                {goals.map((g) => (
                  <li key={g._id} className="goal-item">
                    <div className="goal-left">
                      <div className="goal-name">{g.goalName}</div>
                      <div className="goal-meta">Created</div>
                    </div>

                    <div className="goal-actions">
                      <button
                        className="btn outline"
                        onClick={() => openVideoModal(g.goalName)}
                      >
                        Explore
                      </button>
                      <button
                        className="btn"
                        onClick={() => openRoadmap(g.goalName)}
                      >
                        View Roadmap
                      </button>
                    </div>
                  </li>
                ))}

                {goals.length === 0 && <li className="empty">No goals yet</li>}
              </ul>
            </div>
          </div>
        </section>

        {/* Charts */}
        <section className="charts-area">
          <ChartsSection
            learningSkills={learningSkills}
            completedSkills={completedSkills}
            goals={goals}
          />
        </section>
      </main>

      {/* Modals */}
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
