// src/pages/RecruiterPage.jsx
// RecruiterPage component - For posting new jobs, with form and optional PDF upload

import React, { useState } from 'react';
import { Briefcase, FileText, X } from 'lucide-react';
import { styles } from '../styles';
import { API_BASE_URL } from '../constants';

const RecruiterPage = ({ onPostJob }) => {
  const [showForm, setShowForm] = useState(false);
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    description: '',
    requirements: '',
    skills: '',
    jobDescriptionFile: null
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
      setJobData({...jobData, jobDescriptionFile: e.dataTransfer.files[0]});
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setJobData({...jobData, jobDescriptionFile: e.target.files[0]});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({...jobData, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitData = new FormData();
    submitData.append('title', jobData.title);
    submitData.append('company', jobData.company);
    submitData.append('location', jobData.location);
    submitData.append('salary', jobData.salary);
    submitData.append('description', jobData.description);
    submitData.append('requirements', jobData.requirements);
    submitData.append('skills', jobData.skills);
    if (jobData.jobDescriptionFile) submitData.append('jobDescriptionFile', jobData.jobDescriptionFile);

    try {
      const response = await fetch(`${API_BASE_URL}/jobs`, {
        method: 'POST',
        body: submitData,
      });
      if (!response.ok) throw new Error('Failed to post job');
      const newJob = await response.json();
      onPostJob(newJob); // Update allJobs
      setShowForm(false);
      setJobData({ // Reset form
        title: '',
        company: '',
        location: '',
        salary: '',
        description: '',
        requirements: '',
        skills: '',
        jobDescriptionFile: null
      });
      alert('Job posted successfully!');
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  return (
    <div style={styles.container}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem'}}>
        <h1>Recruiter Dashboard</h1>
        <button
          style={styles.button}
          onClick={() => setShowForm(true)}
        >
          Post New Job
        </button>
      </div>

      <div style={{...styles.card, textAlign: 'center', padding: '3rem'}}>
        <Briefcase size={48} style={{margin: '0 auto 1rem', color: '#6b7280'}} />
        <h3>Post a Job Opening</h3>
        <p style={{color: '#6b7280', marginBottom: '1rem'}}>
          Create a new job posting to find the perfect candidate
        </p>
        <button
          style={styles.button}
          onClick={() => setShowForm(true)}
        >
          Get Started
        </button>
      </div>

      {showForm && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <button style={styles.closeButton} onClick={() => setShowForm(false)}>
              <X size={24} />
            </button>
            
            <h2 style={{marginBottom: '1.5rem'}}>Post New Job</h2>
            
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Job Title *</label>
                <input
                  type="text"
                  name="title"
                  style={styles.input}
                  value={jobData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Company Name *</label>
                <input
                  type="text"
                  name="company"
                  style={styles.input}
                  value={jobData.company}
                  onChange={handleChange}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Location *</label>
                <input
                  type="text"
                  name="location"
                  style={styles.input}
                  value={jobData.location}
                  onChange={handleChange}
                  placeholder="e.g., San Francisco, CA or Remote"
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Salary Range *</label>
                <input
                  type="text"
                  name="salary"
                  style={styles.input}
                  value={jobData.salary}
                  onChange={handleChange}
                  placeholder="e.g., $80,000 - $120,000"
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Job Description *</label>
                <textarea
                  name="description"
                  style={styles.textarea}
                  value={jobData.description}
                  onChange={handleChange}
                  placeholder="Describe the role, responsibilities, and ideal candidate..."
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Requirements (one per line) *</label>
                <textarea
                  name="requirements"
                  style={styles.textarea}
                  value={jobData.requirements}
                  onChange={handleChange}
                  placeholder="Bachelor's degree in Computer Science&#10;5+ years of experience&#10;Strong communication skills"
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Required Skills (comma-separated) *</label>
                <input
                  type="text"
                  name="skills"
                  style={styles.input}
                  value={jobData.skills}
                  onChange={handleChange}
                  placeholder="React, Node.js, Python, AWS"
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Job Description PDF (Optional)</label>
                <div
                  style={{...styles.uploadArea, ...(dragActive ? styles.uploadAreaActive : {})}}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById('job-desc-upload').click()}
                >
                  <FileText size={48} style={{margin: '0 auto 1rem', color: '#6b7280'}} />
                  {jobData.jobDescriptionFile ? (
                    <p><strong>{jobData.jobDescriptionFile.name}</strong></p>
                  ) : (
                    <>
                      <p style={{marginBottom: '0.5rem'}}>Upload detailed job description</p>
                      <p style={{fontSize: '0.875rem', color: '#6b7280'}}>Drag and drop or click to browse</p>
                    </>
                  )}
                  <input
                    id="job-desc-upload"
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
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button type="submit" style={styles.button}>
                  Post Job
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecruiterPage;