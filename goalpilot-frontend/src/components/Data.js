const roadmaps = {
  // 1
  FRONTEND: [
    {
      level: 1,
      title: 'HTML & CSS BASICS',
      items: ['HTML5', 'CSS3', 'Flexbox'],
    },
    { level: 2, title: 'JAVASCRIPT BASICS', items: ['DOM', 'Events'] },
    { level: 3, title: 'ADVANCED JS', items: ['ES6', 'Promises'] },
    { level: 4, title: 'REACT', items: ['Hooks', 'Components'] },
    { level: 5, title: 'PROJECTS', items: ['Portfolio', 'Landing Page'] },
  ],

  // 2
  BACKEND: [
    { level: 1, title: 'SERVER BASICS', items: ['HTTP', 'JSON'] },
    { level: 2, title: 'NODE & EXPRESS', items: ['Routing', 'Middleware'] },
    { level: 3, title: 'DATABASES', items: ['SQL', 'MongoDB'] },
    { level: 4, title: 'AUTH', items: ['JWT', 'Bcrypt'] },
    { level: 5, title: 'PROJECT', items: ['REST API Project'] },
  ],

  // 3
  FULL_STACK_MERN: [
    { level: 1, title: 'BASICS', items: ['React', 'Node Basics'] },
    { level: 2, title: 'FRONTEND', items: ['Hooks', 'Routing'] },
    { level: 3, title: 'BACKEND', items: ['Express', 'CRUD'] },
    { level: 4, title: 'AUTH', items: ['JWT Auth'] },
    { level: 5, title: 'PROJECT', items: ['Complete MERN App'] },
  ],

  // 4
  PYTHON: [
    { level: 1, title: 'BASICS', items: ['Variables', 'Data Types'] },
    { level: 2, title: 'LOOPS & FUNCTIONS', items: ['Loops', 'Functions'] },
    { level: 3, title: 'OOP', items: ['Classes', 'Objects'] },
    { level: 4, title: 'LIBRARIES', items: ['Pandas', 'NumPy'] },
    { level: 5, title: 'PROJECT', items: ['2 Mini Projects'] },
  ],

  // 5
  JAVA: [
    { level: 1, title: 'BASICS', items: ['Syntax', 'Variables'] },
    { level: 2, title: 'OOPS', items: ['Inheritance', 'Interfaces'] },
    { level: 3, title: 'COLLECTIONS', items: ['List', 'Map'] },
    { level: 4, title: 'ADVANCED', items: ['Streams', 'JDBC'] },
    { level: 5, title: 'PROJECT', items: ['Java Application'] },
  ],

  // 6
  DSA: [
    { level: 1, title: 'BASICS', items: ['Arrays', 'Strings'] },
    { level: 2, title: 'LINEAR DS', items: ['Stack', 'Queue'] },
    { level: 3, title: 'TREES', items: ['Binary Trees', 'BST'] },
    { level: 4, title: 'ADVANCED', items: ['Graphs', 'DP'] },
    { level: 5, title: 'PRACTICE', items: ['Solve 150 Problems'] },
  ],

  // 7
  DATABASES: [
    { level: 1, title: 'SQL BASICS', items: ['SELECT', 'INSERT'] },
    { level: 2, title: 'ADVANCED SQL', items: ['JOINS', 'GROUP BY'] },
    { level: 3, title: 'NOSQL', items: ['MongoDB'] },
    { level: 4, title: 'OPTIMIZATION', items: ['Indexes'] },
    { level: 5, title: 'PROJECT', items: ['Database Schema'] },
  ],

  // 8
  DEVOPS: [
    { level: 1, title: 'LINUX BASICS', items: ['Commands', 'Shell'] },
    { level: 2, title: 'GIT & GITHUB', items: ['Version Control'] },
    { level: 3, title: 'CI/CD', items: ['GitHub Actions'] },
    { level: 4, title: 'DOCKER', items: ['Containers'] },
    { level: 5, title: 'PROJECT', items: ['Deploy App'] },
  ],

  // 9
  AWS_CLOUD: [
    { level: 1, title: 'AWS BASICS', items: ['IAM', 'Regions'] },
    { level: 2, title: 'STORAGE', items: ['S3'] },
    { level: 3, title: 'COMPUTE', items: ['EC2', 'Lambda'] },
    { level: 4, title: 'NETWORKING', items: ['VPC'] },
    { level: 5, title: 'DEPLOYMENT', items: ['Deploy to AWS'] },
  ],

  // 10
  UI_UX: [
    { level: 1, title: 'DESIGN BASICS', items: ['Colors', 'Typography'] },
    { level: 2, title: 'WIREFRAMES', items: ['Layouts'] },
    { level: 3, title: 'PROTOTYPES', items: ['Figma'] },
    { level: 4, title: 'UI SYSTEMS', items: ['Components'] },
    { level: 5, title: 'PROJECT', items: ['Design App UI'] },
  ],

  // 11
  MACHINE_LEARNING: [
    { level: 1, title: 'MATH', items: ['Linear Algebra'] },
    { level: 2, title: 'LIBRARIES', items: ['Pandas', 'NumPy'] },
    { level: 3, title: 'ML BASICS', items: ['Regression'] },
    { level: 4, title: 'MODELS', items: ['SVM', 'KNN'] },
    { level: 5, title: 'PROJECT', items: ['ML Model'] },
  ],

  // 12
  DATA_ANALYTICS: [
    { level: 1, title: 'EXCEL', items: ['Formulas'] },
    { level: 2, title: 'SQL', items: ['Queries'] },
    { level: 3, title: 'PYTHON', items: ['Pandas'] },
    { level: 4, title: 'VISUALIZATION', items: ['Power BI'] },
    { level: 5, title: 'PROJECT', items: ['Analytics Report'] },
  ],

  // 13
  DATA_SCIENCE: [
    { level: 1, title: 'PYTHON', items: ['Pandas'] },
    { level: 2, title: 'STATS', items: ['Probability'] },
    { level: 3, title: 'ML BASICS', items: ['Regression'] },
    { level: 4, title: 'EDA', items: ['Visualization'] },
    { level: 5, title: 'PROJECT', items: ['Data Science Report'] },
  ],

  // 14
  CYBER_SECURITY: [
    { level: 1, title: 'BASICS', items: ['Threats', 'Attacks'] },
    { level: 2, title: 'NETWORKING', items: ['Protocols'] },
    { level: 3, title: 'TOOLS', items: ['Wireshark'] },
    { level: 4, title: 'LINUX SECURITY', items: ['Permissions'] },
    { level: 5, title: 'PROJECT', items: ['Security Report'] },
  ],

  // 15
  ANDROID_DEV: [
    { level: 1, title: 'KOTLIN', items: ['Syntax'] },
    { level: 2, title: 'ANDROID BASICS', items: ['Activities'] },
    { level: 3, title: 'UI', items: ['Layouts'] },
    { level: 4, title: 'API', items: ['Retrofit'] },
    { level: 5, title: 'PROJECT', items: ['Android App'] },
  ],

  // 16
  FLUTTER: [
    { level: 1, title: 'DART BASICS', items: ['Syntax'] },
    { level: 2, title: 'WIDGETS', items: ['Stateless', 'Stateful'] },
    { level: 3, title: 'STATE MANAGEMENT', items: ['Provider'] },
    { level: 4, title: 'BACKEND', items: ['Firebase'] },
    { level: 5, title: 'PROJECT', items: ['Flutter App'] },
  ],

  // 17
  COMMUNICATION_SKILLS: [
    { level: 1, title: 'GRAMMAR', items: ['Basics'] },
    { level: 2, title: 'SPEAKING', items: ['Pronunciation'] },
    { level: 3, title: 'PUBLIC SPEAKING', items: ['Confidence'] },
    { level: 4, title: 'EMAILS', items: ['Formal Writing'] },
    { level: 5, title: 'PROJECT', items: ['Mock Interview'] },
  ],

  // 18
  PERSONAL_FINANCE: [
    { level: 1, title: 'BUDGETING', items: ['Track Money'] },
    { level: 2, title: 'SAVING', items: ['Emergency Fund'] },
    { level: 3, title: 'INVESTING', items: ['Mutual Funds'] },
    { level: 4, title: 'TAX', items: ['Basics'] },
    { level: 5, title: 'PLAN', items: ['Finance Plan'] },
  ],

  // 19
  FITNESS: [
    { level: 1, title: 'BASICS', items: ['Walk Daily'] },
    { level: 2, title: 'EXERCISE', items: ['Pushups'] },
    { level: 3, title: 'STRENGTH', items: ['Weights'] },
    { level: 4, title: 'NUTRITION', items: ['Protein'] },
    { level: 5, title: 'ROUTINE', items: ['Fitness Plan'] },
  ],

  // 20
  MEDITATION: [
    { level: 1, title: 'BREATHING', items: ['3 Min Daily'] },
    { level: 2, title: 'AWARENESS', items: ['Mindfulness'] },
    { level: 3, title: 'STILLNESS', items: ['Sit 10 Min'] },
    { level: 4, title: 'FOCUS', items: ['Concentration'] },
    { level: 5, title: 'ROUTINE', items: ['Daily Meditation'] },
  ],

  // ⭐ NEW GOALS START HERE (21–50)

  VIDEO_EDITING: [
    { level: 1, title: 'BASICS', items: ['Cut', 'Trim'] },
    { level: 2, title: 'AUDIO', items: ['Noise Removal'] },
    { level: 3, title: 'TRANSITIONS', items: ['Smooth Cuts'] },
    { level: 4, title: 'COLOR', items: ['Color Grading'] },
    { level: 5, title: 'PROJECT', items: ['2 Edited Videos'] },
  ],

  CONTENT_CREATION: [
    { level: 1, title: 'WRITING', items: ['Hooks'] },
    { level: 2, title: 'STRUCTURE', items: ['Scripts'] },
    { level: 3, title: 'RECORDING', items: ['Camera Basics'] },
    { level: 4, title: 'EDITING', items: ['Short Video'] },
    { level: 5, title: 'PUBLISH', items: ['Upload 5 Videos'] },
  ],

  YOUTUBE_GROWTH: [
    { level: 1, title: 'IDEAS', items: ['Niche Selection'] },
    { level: 2, title: 'SCRIPTING', items: ['Structure'] },
    { level: 3, title: 'EDITING', items: ['Cuts'] },
    { level: 4, title: 'THUMBNAILS', items: ['Click-through'] },
    { level: 5, title: 'UPLOAD', items: ['10 Videos'] },
  ],

  SOCIAL_MEDIA: [
    { level: 1, title: 'BASICS', items: ['Posting'] },
    { level: 2, title: 'CONTENT', items: ['Planning'] },
    { level: 3, title: 'CONSISTENCY', items: ['Daily Posts'] },
    { level: 4, title: 'ENGAGEMENT', items: ['Replies'] },
    { level: 5, title: 'GROWTH', items: ['Maintain Page'] },
  ],

  LEADERSHIP: [
    { level: 1, title: 'SELF AWARENESS', items: ['Strengths'] },
    { level: 2, title: 'TEAMWORK', items: ['Collaboration'] },
    { level: 3, title: 'COMMUNICATION', items: ['Speaking'] },
    { level: 4, title: 'PROBLEM SOLVING', items: ['Creative Thinking'] },
    { level: 5, title: 'PROJECT', items: ['Lead a Group Task'] },
  ],

  ENTREPRENEURSHIP: [
    { level: 1, title: 'IDEATION', items: ['Idea Generation'] },
    { level: 2, title: 'MARKET RESEARCH', items: ['Competitors'] },
    { level: 3, title: 'BUSINESS MODEL', items: ['Value Proposition'] },
    { level: 4, title: 'BRANDING', items: ['Identity'] },
    { level: 5, title: 'PROJECT', items: ['Business Pitch'] },
  ],

  PUBLIC_SPEAKING: [
    { level: 1, title: 'VOICE', items: ['Pronunciation'] },
    { level: 2, title: 'CONFIDENCE', items: ['Eye Contact'] },
    { level: 3, title: 'STRUCTURE', items: ['Intro–Body–Conclusion'] },
    { level: 4, title: 'DELIVERY', items: ['Gestures'] },
    { level: 5, title: 'SPEECH', items: ['Give 5 Talks'] },
  ],

  WRITING_SKILLS: [
    { level: 1, title: 'GRAMMAR', items: ['Basics'] },
    { level: 2, title: 'CLARITY', items: ['Short Sentences'] },
    { level: 3, title: 'STRUCTURE', items: ['Paragraph Flow'] },
    { level: 4, title: 'STORYTELLING', items: ['Narrative'] },
    { level: 5, title: 'PROJECT', items: ['Write 3 Blogs'] },
  ],

  READING_HABIT: [
    { level: 1, title: 'START', items: ['10 Pages Daily'] },
    { level: 2, title: 'COMPREHENSION', items: ['Summaries'] },
    { level: 3, title: 'CONSISTENCY', items: ['Daily Reading'] },
    { level: 4, title: 'NOTE TAKING', items: ['Highlights'] },
    { level: 5, title: 'GROWTH', items: ['Read 5 Books'] },
  ],

  TIME_MANAGEMENT: [
    { level: 1, title: 'PLANNING', items: ['Daily Tasks'] },
    { level: 2, title: 'PRIORITY', items: ['Important vs Urgent'] },
    { level: 3, title: 'FOCUS', items: ['Pomodoro'] },
    { level: 4, title: 'EXECUTION', items: ['Daily Routine'] },
    { level: 5, title: 'MASTERY', items: ['Weekly Review'] },
  ],
};

export default roadmaps;
