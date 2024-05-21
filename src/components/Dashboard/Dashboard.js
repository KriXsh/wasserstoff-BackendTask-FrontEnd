import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      <div className="links">
        <Link to="/login" className="button">Login</Link>
        <Link to="/register" className="button">Register</Link>
      </div>
    </div>
  );
};

export default Dashboard;
