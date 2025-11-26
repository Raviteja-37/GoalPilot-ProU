import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';

// 📌 Import & Register Chart.js Components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const ChartsSection = ({ learningSkills, completedSkills, goals }) => {
  // 1️⃣ Learning Skills Progress Chart
  const progressData = {
    labels: learningSkills.map((skill) => skill.skillName),
    datasets: [
      {
        label: 'Progress (%)',
        data: learningSkills.map((skill) => skill.progressPercentage),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // 2️⃣ Learning vs Completed Count Chart
  const skillCountData = {
    labels: ['Learning Skills', 'Completed Skills'],
    datasets: [
      {
        label: 'Count',
        data: [learningSkills.length, completedSkills.length],
        backgroundColor: ['#36A2EB', '#4CAF50'],
        borderColor: ['#1c7bbb', '#357a38'],
        borderWidth: 1,
      },
    ],
  };

  // 3️⃣ Goals Category Pie Chart
  const goalsData = {
    labels: goals.map((g) => g.goalName),
    datasets: [
      {
        label: 'Goals',
        data: goals.map(() => 1), // each goal = 1 slice
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4CAF50',
          '#9C27B0',
          '#FF9800',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="charts-wrapper" style={{ padding: '20px' }}>
      <h2>Visual Overview</h2>

      <div
        className="charts-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        {/* Progress Chart */}
        <div className="chart-card">
          <h3>Learning Skills Progress</h3>
          <Bar data={progressData} />
        </div>

        {/* Count Chart */}
        <div className="chart-card">
          <h3>Learning vs Completed</h3>
          <Bar data={skillCountData} />
        </div>

        {/* Goals Pie */}
        <div className="chart-card">
          <h3>Goals Breakdown</h3>
          <Pie data={goalsData} />
        </div>
      </div>
    </div>
  );
};

export default ChartsSection;
