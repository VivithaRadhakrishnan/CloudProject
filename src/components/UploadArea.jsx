import React, { useState } from 'react';
import { styles } from '../styles';

const UploadArea = ({ onFileChange }) => {
  const [isActive, setIsActive] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsActive(true);
  };

  const handleDragLeave = () => {
    setIsActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsActive(false);
    if (e.dataTransfer.files) {
      onFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    if (e.target.files) {
      onFileChange(e.target.files[0]);
    }
  };

  return (
    <div
      style={isActive ? { ...styles.uploadArea, ...styles.uploadAreaActive } : styles.uploadArea}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => document.getElementById('file-upload').click()}
    >
      <p>Drag & drop PDF here or click to upload</p>
      <input
        id="file-upload"
        type="file"
        accept=".pdf"
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default UploadArea;