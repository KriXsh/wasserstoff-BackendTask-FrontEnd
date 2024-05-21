// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import ImageUpload from './components/Dashboard/ImageUpload';
import ReviewAnnotations from './components/Dashboard/ReviewAnnotations';
import DataExport from './components/Dashboard/DataExport';
import Navbar from './components/Common/Navbar';
import LogoDisplay from './components/Common/LogoDisplay'; // Import the LogoDisplay component
import './styles/App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <LogoDisplay /> {/* Add the LogoDisplay component below the Navbar */}
      <div className="App container">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/upload" element={<ImageUpload />} />
          <Route path="/review" element={<ReviewAnnotations />} />
          <Route path="/export" element={<DataExport />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
