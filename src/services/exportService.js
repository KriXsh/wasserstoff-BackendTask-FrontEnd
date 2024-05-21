// src/services/exportService.js
import axios from 'axios';

const API_URL = 'https://krishnendu-ghosal-wasserstoff-backendtask.onrender.com/export';

export const exportData = (format) => {
  const token = localStorage.getItem('token');
  return axios.get(`${API_URL}/export?format=${format}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
