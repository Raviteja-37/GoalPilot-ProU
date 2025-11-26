// src/services/youtubeService.js
import axios from 'axios';

const YT_BASE = 'https://www.googleapis.com/youtube/v3/search';

export const searchVideos = async (query, maxResults = 10) => {
  const params = {
    key: process.env.YOUTUBE_API_KEY || process.env.YT_API_KEY,
    q: query,
    part: 'snippet',
    maxResults,
    type: 'video',
  };

  const resp = await axios.get(YT_BASE, { params });

  return {
    videos: resp.data.items.map((item) => ({
      videoId: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails?.default?.url,
    })),
  };
};
