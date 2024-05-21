// src/components/Auth/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/authService';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData.username, formData.password);
      localStorage.setItem('token', response.data.token);
      alert('Login successful! Please upload an image.');
      navigate('/upload');
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-group">
        <h2 className="text-center">Login</h2>
        <input
          className="form-control"
          name="username"
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          className="form-control"
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button className="btn btn-primary" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
