// src/components/Common/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <img src="/wasserstoff_logo.jpeg" alt="VisionMark Logo" className="navbar-logo" />
        VisionMark AI
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/register">Register</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/upload">Upload</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/review">Review</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/export">Export</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
