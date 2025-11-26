import React from 'react';
import './index.css';

function RoadmapModal({ isOpen, onClose, roadmap }) {
  if (!isOpen) return null;

  return (
    <div className="roadmap-overlay">
      <div className="roadmap-container">
        <h2 className="roadmap-title">Learning Roadmap</h2>

        <div className="roadmap-content">
          {roadmap?.map((step) => (
            <div key={step.level} className="roadmap-step">
              <h3>
                Level {step.level}: {step.title}
              </h3>
              <ul>
                {step.items.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default RoadmapModal;
