// src/components/Dashboard/ReviewAnnotations.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAnnotations, updateReviewStatus } from '../../services/annotationService';

function ReviewAnnotations() {
  const [annotations, setAnnotations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnnotations = async () => {
      try {
        const response = await getAnnotations();
        setAnnotations(response.data);
      } catch (error) {
        alert('Failed to fetch annotations');
      }
    };
    fetchAnnotations();
  }, []);

  const handleApprove = async (imageId) => {
    try {
      await updateReviewStatus(imageId, 'approved');
      alert('Annotation approved! Please export the data.');
      navigate('/export');
    } catch (error) {
      alert('Failed to update status');
    }
  };

  const handleReject = async (imageId) => {
    try {
      await updateReviewStatus(imageId, 'rejected');
      alert('Annotation rejected!');
    } catch (error) {
      alert('Failed to update status');
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Review Annotations</h2>
      {annotations.map((annotation) => (
        <div key={annotation.id} className="card mb-3">
          <img src={annotation.imagePath} className="card-img-top" alt="Annotation" />
          <div className="card-body">
            <button className="btn btn-success mr-2" onClick={() => handleApprove(annotation.id)}>Approve</button>
            <button className="btn btn-danger" onClick={() => handleReject(annotation.id)}>Reject</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReviewAnnotations;
