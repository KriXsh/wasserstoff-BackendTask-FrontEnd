// src/components/Dashboard/ImageUpload.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { uploadImage } from '../../services/imageService';

function ImageUpload() {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await uploadImage(image);
      alert('Image uploaded successfully! Please review the annotations.');
      navigate('/review');
    } catch (error) {
      alert('Image upload failed');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-group">
        <h2 className="text-center">Upload Image</h2>
        <input className="form-control" type="file" onChange={handleChange} required />
        <button className="btn btn-primary" type="submit">Upload Image</button>
      </form>
    </div>
  );
}

export default ImageUpload;
