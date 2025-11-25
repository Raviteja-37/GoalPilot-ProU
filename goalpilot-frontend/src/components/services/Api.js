// src/services/api.js
import Cookies from 'js-cookie';

const BASE_URL = 'http://127.0.0.1:5001/api';
const token = () => Cookies.get('token');

const handleResponse = async (res) => {
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || 'Request failed');
  }
  return data;
};

// Auth
export const registerUser = (name, email, password) =>
  fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  }).then(handleResponse);

export const loginUser = (email, password) =>
  fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);

// Skills
export const getLearningSkills = () =>
  fetch(`${BASE_URL}/skills/learning`, {
    headers: { Authorization: `Bearer ${token()}` },
  }).then(handleResponse);

export const getCompletedSkills = () =>
  fetch(`${BASE_URL}/skills/completed`, {
    headers: { Authorization: `Bearer ${token()}` },
  }).then(handleResponse);

export const addLearningSkill = async (skillName) => {
  const res = await fetch(`${BASE_URL}/skills/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token()}`,
    },
    body: JSON.stringify({ skillName }),
  });
  return res.json();
};
export const updateSkillProgress = async (skillId, progressPercentage) => {
  console.log('yep');
  const res = await fetch(`${BASE_URL}/skills/update/${skillId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token()}`,
    },
    body: JSON.stringify({ progressPercentage }),
  });
  return res.json();
};

// Goals
export const getGoals = () =>
  fetch(`${BASE_URL}/goals`, {
    headers: { Authorization: `Bearer ${token()}` },
  }).then(handleResponse);

export const createGoal = async (goalName) => {
  const res = await fetch(`${BASE_URL}/goals`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token()}`,
    },
    body: JSON.stringify({ goalName }),
  });
  return res.json();
};
// YouTube Videos
export const searchYouTubeVideos = (query, maxResults = 5) =>
  fetch(`${BASE_URL}/videos/search?q=${encodeURIComponent(query)}`, {
    headers: { Authorization: `Bearer ${token()}` },
  }).then(handleResponse);

export const addCompletedSkill = async (skillName) => {
  const res = await fetch(`${BASE_URL}/skills/addCompleted`, {
    // <--- endpoint we need in backend
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token()}`,
    },
    body: JSON.stringify({ skillName }),
  });
  return res.json();
};
