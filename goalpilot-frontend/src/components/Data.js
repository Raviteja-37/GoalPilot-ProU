// src/data/roadmaps.js

const roadmaps = {
  frontend: [
    {
      level: 1,
      title: 'HTML & CSS',
      items: ['HTML5 basics', 'CSS selectors', 'Flexbox', 'Responsive design'],
    },
    {
      level: 2,
      title: 'JavaScript Fundamentals',
      items: ['Variables', 'Loops', 'Functions', 'DOM Manipulation'],
    },
    {
      level: 3,
      title: 'Advanced JavaScript',
      items: ['Promises', 'Async/Await', 'Fetch API', 'ES6 concepts'],
    },
    {
      level: 4,
      title: 'React Basics',
      items: ['Components', 'Props', 'State', 'React Hooks'],
    },
    {
      level: 5,
      title: 'Projects',
      items: ['Build 3 complete frontend projects'],
    },
  ],

  python: [
    {
      level: 1,
      title: 'Python Basics',
      items: ['Variables', 'Data types', 'Input/Output'],
    },
    {
      level: 2,
      title: 'Flow Control',
      items: ['Loops', 'Conditions', 'Functions'],
    },
    {
      level: 3,
      title: 'OOP',
      items: ['Classes & Objects', 'Inheritance', 'Encapsulation'],
    },
    {
      level: 4,
      title: 'Modules & Frameworks',
      items: ['NumPy', 'Pandas', 'Flask basics'],
    },
    { level: 5, title: 'Mini Projects', items: ['2 CLI apps', '1 Web app'] },
  ],

  dsa: [
    { level: 1, title: 'Basics', items: ['Arrays', 'Strings', 'Math'] },
    { level: 2, title: 'Linear DS', items: ['Stack', 'Queue', 'LinkedList'] },
    {
      level: 3,
      title: 'Non-linear DS',
      items: ['Trees', 'Binary Search Tree'],
    },
    { level: 4, title: 'Advanced', items: ['Graphs', 'Dynamic Programming'] },
    { level: 5, title: 'Practice', items: ['Solve 150 problems'] },
  ],
};

export default roadmaps;
