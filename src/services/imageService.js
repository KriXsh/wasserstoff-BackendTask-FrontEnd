// src/services/imageService.js
import axios from 'axios';

const API_URL = 'https://krishnendu-ghosal-wasserstoff-backendtask.onrender.com/images';

export const uploadImage = (image) => {
  const token = localStorage.getItem('token');
  const formData = new FormData();
  formData.append('image', image);

  return axios.post(`${API_URL}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });
};
