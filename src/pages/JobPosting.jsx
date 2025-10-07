import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postJob } from '../api/api';
import UploadArea from '../components/UploadArea';
import { styles } from '../styles';

const JobPosting = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    skills: '',
    location: '',
    salary: '',
    applicantsCount: 0,
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (selectedFile) => {
    setFile(selectedFile);
    // Log file for now; later, parse PDF or send to backend
    console.log('Uploaded file:', selectedFile);
    // Dummy: set description from file name
    setFormData({ ...formData, description: `Description from ${selectedFile.name}` });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const jobData = {
        ...formData,
        skills: formData.skills.split(',').map((s) => s.trim()).filter((s) => s),
      };
      await postJob(jobData);
      navigate('/');
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.cardTitle}>Post a New Job</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Job Title</label>
          <input
            name="title"
            style={styles.input}
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Description</label>
          <textarea
            name="description"
            style={styles.textarea}
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Required Skills (comma-separated)</label>
          <input
            name="skills"
            style={styles.input}
            value={formData.skills}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Location</label>
          <input
            name="location"
            style={styles.input}
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Salary</label>
          <input
            name="salary"
            style={styles.input}
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Upload Job Description PDF (optional)</label>
          <UploadArea onFileChange={handleFileChange} />
          {file && <p style={{ marginTop: '1rem' }}>Uploaded: {file.name}</p>}
        </div>
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobPosting;