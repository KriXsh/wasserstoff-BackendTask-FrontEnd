// src/services/annotationService.js
import axios from 'axios';

const API_URL = 'https://krishnendu-ghosal-wasserstoff-backendtask.onrender.com';

export const getAnnotations = () => {
  const token = localStorage.getItem('token');
  return axios.get(`${API_URL}/annotations`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateReviewStatus = (imageId, status) => {
  const token = localStorage.getItem('token');
  return axios.post(`${API_URL}/reviews/review`, {
    imageId,
    status,
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};
