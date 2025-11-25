// src/app.js
import express from 'express';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import skillsRoutes from './routes/skillsRoutes.js';
import goalsRoutes from './routes/goalsRoutes.js';
import videosRoutes from './routes/videosRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/goals', goalsRoutes);
app.use('/api/videos', videosRoutes);

app.get('/', (req, res) => res.send('GoalPilot Backend is running'));

export default app;
