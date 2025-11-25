// src/services/recommendationService.js
const roleMap = {
  sde: [
    'Data Structures',
    'Algorithms',
    'System Design Basics',
    'DSA Practice',
    'Language (Java/Python)',
  ],
  devops: [
    'Linux Basics',
    'Docker',
    'Kubernetes',
    'CI/CD',
    'Cloud Fundamentals',
  ],
  frontend: [
    'HTML & CSS',
    'JavaScript',
    'React',
    'Responsive Design',
    'Build Tools',
  ],
  'ai-ml': [
    'Python',
    'Linear Algebra',
    'Statistics',
    'ML Basics',
    'Model Deployment',
  ],
};

export const generateSkillsForRole = (roleName) => {
  if (!roleName) return [];
  const key = roleName.toLowerCase().replace(/\s+/g, '-');
  if (roleMap[key]) return roleMap[key];
  return [
    'Foundational Concepts',
    'Core Language',
    'Project Work',
    'Data Structures',
    'Version Control',
  ];
};
