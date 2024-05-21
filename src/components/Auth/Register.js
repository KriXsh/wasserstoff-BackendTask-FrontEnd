// src/components/Auth/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/authService';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'admin',
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
      await register(formData.username, formData.email, formData.password, formData.role);
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-group">
        <h2 className="text-center">Register</h2>
        <input
          className="form-control"
          name="username"
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          className="form-control"
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="Email"
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
        <button className="btn btn-primary" type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
