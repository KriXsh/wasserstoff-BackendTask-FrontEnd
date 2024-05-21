// src/services/authService.js
import axios from 'axios';

const API_URL = 'https://krishnendu-ghosal-wasserstoff-backendtask.onrender.com/auth';

export const register = (username, email, password, role) => {
  return axios.post(`${API_URL}/register`, {
    username,
    email,
    password,
    role,
  });
};

export const login = (username, password) => {
  return axios.post(`${API_URL}/login`, {
    username,
    password,
  });
};
