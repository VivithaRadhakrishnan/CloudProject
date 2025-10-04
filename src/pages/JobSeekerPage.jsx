// src/pages/JobSeekerPage.jsx
// JobSeekerPage component - Main page for job seekers with tabs, resume upload for recommendations

import React, { useState } from 'react';
import RecommendationList from '../components/RecommendationList';
import ApplyTable from '../components/ApplyTable';
import { Upload, X } from 'lucide-react';
import { styles } from '../styles';

const JobSeekerPage = ({ 
  recommendedJobs, 
  allJobs, 
  onJobClick, 
  onApply, 
  onResumeUpload,
  loadingRecommendations,
  errorRecommendations 
}) => {
  const [activeTab, setActiveTab] = useState('recommendations');
  const [showUpload, setShowUpload] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
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
      setResumeFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleResumeSubmit = () => {
    if (resumeFile) {
      onResumeUpload(resumeFile);
      setShowUpload(false);
      setResumeFile(null);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Job Seeker Dashboard</h1>
      
      <div style={styles.tabs}>
        <button
          style={{...styles.tab, ...(activeTab === 'recommendations' ? styles.tabActive : {})}}
          onClick={() => setActiveTab('recommendations')}
        >
          Recommendations
        </button>
        <button
          style={{...styles.tab, ...(activeTab === 'toApply' ? styles.tabActive : {})}}
          onClick={() => setActiveTab('toApply')}
        >
          All Jobs
        </button>
      </div>

      {activeTab === 'recommendations' && (
        <div>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem'}}>
            <h2>Recommended for You</h2>
            <button
              style={styles.button}
              onClick={() => setShowUpload(true)}
            >
              <Upload size={18} style={{marginRight: '0.5rem', display: 'inline'}} />
              Upload Resume
            </button>
          </div>
          
          {loadingRecommendations ? <p>Loading recommendations...</p> : errorRecommendations ? <p>Error: {errorRecommendations}</p> : (
            <RecommendationList
              jobs={recommendedJobs}
              onJobClick={onJobClick}
              onApply={onApply}
            />
          )}
        </div>
      )}

      {activeTab === 'toApply' && (
        <div>
          <h2 style={{marginBottom: '1.5rem'}}>All Open Positions</h2>
          <ApplyTable
            jobs={allJobs}
            onApply={onApply}
            onViewDetails={onJobClick}
          />
        </div>
      )}

      {showUpload && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <button style={styles.closeButton} onClick={() => setShowUpload(false)}>
              <X size={24} />
            </button>
            
            <h2 style={{marginBottom: '1.5rem'}}>Upload Your Resume</h2>
            <p style={{color: '#6b7280', marginBottom: '1.5rem'}}>
              Upload your resume to get personalized job recommendations based on your skills and experience.
            </p>
            
            <div
              style={{...styles.uploadArea, ...(dragActive ? styles.uploadAreaActive : {})}}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => document.getElementById('seeker-resume-upload').click()}
            >
              <Upload size={48} style={{margin: '0 auto 1rem', color: '#6b7280'}} />
              {resumeFile ? (
                <div>
                  <p><strong>{resumeFile.name}</strong></p>
                  <p style={{fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem'}}>
                    {(resumeFile.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              ) : (
                <>
                  <p style={{marginBottom: '0.5rem'}}>Drag and drop your resume here</p>
                  <p style={{fontSize: '0.875rem', color: '#6b7280'}}>or click to browse (PDF format)</p>
                </>
              )}
              <input
                id="seeker-resume-upload"
                type="file"
                accept=".pdf"
                style={{display: 'none'}}
                onChange={handleFileChange}
              />
            </div>

            <div style={{display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '1.5rem'}}>
              <button
                type="button"
                style={{...styles.button, ...styles.buttonSecondary}}
                onClick={() => {
                  setShowUpload(false);
                  setResumeFile(null);
                }}
              >
                Cancel
              </button>
              <button
                style={{...styles.button, ...( !resumeFile ? styles.buttonDisabled : {})}}
                onClick={handleResumeSubmit}
                disabled={!resumeFile}
              >
                Upload & Get Recommendations
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobSeekerPage;