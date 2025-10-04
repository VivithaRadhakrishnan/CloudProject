// src/components/ApplyForm.jsx
// ApplyForm component - Full application form with personal details and resume upload

import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { styles } from '../styles';
import { API_BASE_URL, USER_ID } from '../constants';

const ApplyForm = ({ jobId, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
    resumeFile: null
  });
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData({...formData, resumeFile: e.dataTransfer.files[0]});
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({...formData, resumeFile: e.target.files[0]});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitData = new FormData();
    submitData.append('jobId', jobId);
    submitData.append('userId', USER_ID);
    submitData.append('name', formData.name);
    submitData.append('email', formData.email);
    submitData.append('phone', formData.phone);
    submitData.append('coverLetter', formData.coverLetter);
    if (formData.resumeFile) submitData.append('resume', formData.resumeFile);

    try {
      const response = await fetch(`${API_BASE_URL}/apply`, {
        method: 'POST',
        body: submitData,
      });
      if (!response.ok) throw new Error('Application failed');
      onSubmit(); // Close modal or handle success
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <button style={styles.closeButton} onClick={onClose}>
          <X size={24} />
        </button>
        
        <h2 style={{marginBottom: '1.5rem'}}>Apply for Position</h2>
        
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Full Name *</label>
            <input
              type="text"
              name="name"
              style={styles.input}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Email *</label>
            <input
              type="email"
              name="email"
              style={styles.input}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Phone</label>
            <input
              type="tel"
              name="phone"
              style={styles.input}
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Cover Letter</label>
            <textarea
              name="coverLetter"
              style={styles.textarea}
              value={formData.coverLetter}
              onChange={handleChange}
              placeholder="Tell us why you're a great fit for this role..."
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Resume (PDF) *</label>
            <div
              style={{...styles.uploadArea, ...(dragActive ? styles.uploadAreaActive : {})}}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => document.getElementById('resume-upload').click()}
            >
              <Upload size={48} style={{margin: '0 auto 1rem', color: '#6b7280'}} />
              {formData.resumeFile ? (
                <p><strong>{formData.resumeFile.name}</strong></p>
              ) : (
                <>
                  <p style={{marginBottom: '0.5rem'}}>Drag and drop your resume here</p>
                  <p style={{fontSize: '0.875rem', color: '#6b7280'}}>or click to browse</p>
                </>
              )}
              <input
                id="resume-upload"
                type="file"
                accept=".pdf"
                style={{display: 'none'}}
                onChange={handleFileChange}
              />
            </div>
          </div>

          <div style={{display: 'flex', gap: '1rem', justifyContent: 'flex-end'}}>
            <button
              type="button"
              style={{...styles.button, ...styles.buttonSecondary}}
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" style={styles.button}>
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;