import React, { useEffect, useState } from 'react';
import './index.css';
import { searchYouTubeVideos } from '../services/Api';

const VideoPlayerModal = ({ isOpen, onClose, query }) => {
  const [searchTerm, setSearchTerm] = useState(query);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Fetch YouTube results using free scraping API
  const fetchVideos = async (searchQuery) => {
    console.log('FETCHING FOR:', searchQuery); // <--- add this

    if (!searchQuery || searchQuery.trim() === '') {
      alert('Please enter search term');
      return;
    }

    try {
      console.log('Calling API...'); // <--- add this
      const data = await searchYouTubeVideos(searchQuery.trim());

      console.log('Search result:', data); // <---

      setVideos(data.videos || []);
    } catch (err) {
      console.error('Error fetching videos', err);
    }
  };

  // Auto fetch videos when modal opens
  useEffect(() => {
    if (isOpen && query) {
      setSearchTerm(query);
      fetchVideos(query);
    }
  }, [isOpen, query]);

  if (!isOpen) return null;

  return (
    <div className="video-modal-overlay">
      <div className="video-modal">
        {/* Header */}
        <div className="video-modal-header">
          <h3>Learn: {query}</h3>
          <button className="close-btn" onClick={onClose}>
            ✖
          </button>
        </div>

        {/* Search bar */}
        <div className="search-row">
          <input
            type="text"
            value={searchTerm}
            placeholder="Search videos..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={() => {
              console.log('clicked');
              fetchVideos(searchTerm);
            }}
          >
            Search
          </button>
        </div>

        <div className="video-modal-content">
          {/* Video player */}
          {selectedVideo ? (
            <div className="video-player">
              <iframe
                width="100%"
                height="350"
                src={`https://www.youtube.com/embed/${selectedVideo}`}
                allowFullScreen
                title="YouTube player"
              ></iframe>

              <button
                className="back-btn"
                onClick={() => setSelectedVideo(null)}
              >
                ← Back to results
              </button>
            </div>
          ) : (
            /* Video grid */
            <div className="video-grid">
              {videos.map((v) => (
                <div
                  key={v.videoId}
                  className="video-card"
                  onClick={() => setSelectedVideo(v.videoId)}
                >
                  <img src={v.thumbnail} alt="thumb" />
                  <p>{v.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerModal;
