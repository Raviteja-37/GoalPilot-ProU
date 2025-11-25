// src/controllers/videosController.js
import * as youtubeService from '../services/youtubeService.js';

export const search = async (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ message: 'Query ("q") is required' });

  try {
    const videos = await youtubeService.searchVideos(q, 8);
    res.json(videos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'YouTube API error', error: err.message });
  }
};
