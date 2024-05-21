// src/components/Dashboard/DataExport.js
import React from 'react';
import { exportData } from '../../services/exportService';

function DataExport() {
  const handleExport = async (format) => {
    try {
      const response = await exportData(format);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `annotations.${format}`);
      document.body.appendChild(link);
      link.click();
      alert('Data exported successfully!');
    } catch (error) {
      alert('Failed to export data');
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Export Data</h2>
      <button className="btn btn-info mr-2" onClick={() => handleExport('csv')}>Export as CSV</button>
      <button className="btn btn-info" onClick={() => handleExport('json')}>Export as JSON</button>
    </div>
  );
}

export default DataExport;
