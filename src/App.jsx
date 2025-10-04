// src/App.jsx
// Main App component - Manages state for jobs, recommendations, modals; fetches data from API

import React, { useState, useEffect } from 'react';
import JobSeekerPage from './pages/JobSeekerPage';
import RecruiterPage from './pages/RecruiterPage';
import JobDetails from './components/JobDetails';
import ApplyForm from './components/ApplyForm';
import { styles } from './styles';
import { API_BASE_URL, USER_ID } from './constants';

const App = () => {
  const [userType, setUserType] = useState('jobseeker'); // 'jobseeker' or 'recruiter'
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [applyJobId, setApplyJobId] = useState(null);
  const [allJobs, setAllJobs] = useState([]);
  const [recommendedJobs, setRecommendedJobs] = useState([]);
  const [loadingAllJobs, setLoadingAllJobs] = useState(true);
  const [loadingRecommendations, setLoadingRecommendations] = useState(true);
  const [errorAllJobs, setErrorAllJobs] = useState(null);
  const [errorRecommendations, setErrorRecommendations] = useState(null);

  // Fetch all open jobs
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/open-jobs`);
        if (!response.ok) throw new Error('Failed to fetch open jobs');
        const data = await response.json();
        setAllJobs(data);
      } catch (err) {
        setErrorAllJobs(err.message);
      } finally {
        setLoadingAllJobs(false);
      }
    };
    fetchAllJobs();
  }, []);

  // Fetch recommended jobs
  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/recommendations?userId=${USER_ID}`);
        if (!response.ok) throw new Error('Failed to fetch recommendations');
        const data = await response.json();
        setRecommendedJobs(data);
      } catch (err) {
        setErrorRecommendations(err.message);
      } finally {
        setLoadingRecommendations(false);
      }
    };
    fetchRecommendations();
  }, []);

  // Handler for resume upload (for recommendations)
  const handleResumeUpload = async (file) => {
    const formData = new FormData();
    formData.append('resume', file);
    formData.append('userId', USER_ID);

    try {
      const response = await fetch(`${API_BASE_URL}/upload-resume`, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error('Upload failed');
      alert('Resume uploaded successfully! Skills extracted.');
      // Refetch recommendations after upload
      setLoadingRecommendations(true);
      const recResponse = await fetch(`${API_BASE_URL}/recommendations?userId=${USER_ID}`);
      if (!recResponse.ok) throw new Error('Failed to fetch recommendations');
      const recData = await recResponse.json();
      setRecommendedJobs(recData);
      setLoadingRecommendations(false);
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  // Handler for application submit
  const handleApplicationSubmit = () => {
    setShowApplyForm(false);
    setApplyJobId(null);
    alert('Application submitted successfully!');
  };

  // Handler for posting new job
  const handlePostJob = (newJob) => {
    setAllJobs([newJob, ...allJobs]);
  };

  // Handler for viewing job details
  const handleJobClick = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/jobs/${id}`);
      if (!response.ok) throw new Error('Failed to fetch job details');
      const data = await response.json();
      setSelectedJob(data);
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  // Handler for opening apply form
  const handleApply = (id) => {
    setApplyJobId(id);
    setShowApplyForm(true);
    setSelectedJob(null); // Close details if open
  };

  if (loadingAllJobs) return <p>Loading...</p>;

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>JobMatch Platform</h1>
        <nav style={styles.nav}>
          <button
            style={{
              ...styles.navButton,
              ...(userType === 'jobseeker' ? styles.navButtonActive : {})
            }}
            onClick={() => setUserType('jobseeker')}
          >
            Job Seeker
          </button>
          <button
            style={{
              ...styles.navButton,
              ...(userType === 'recruiter' ? styles.navButtonActive : {})
            }}
            onClick={() => setUserType('recruiter')}
          >
            Recruiter
          </button>
        </nav>
      </header>

      {userType === 'jobseeker' ? (
        <JobSeekerPage
          recommendedJobs={recommendedJobs}
          allJobs={allJobs}
          onJobClick={handleJobClick}
          onApply={handleApply}
          onResumeUpload={handleResumeUpload}
          loadingRecommendations={loadingRecommendations}
          errorRecommendations={errorRecommendations}
        />
      ) : (
        <RecruiterPage onPostJob={handlePostJob} />
      )}

      {selectedJob && (
        <JobDetails
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
          onApply={handleApply}
        />
      )}

      {showApplyForm && (
        <ApplyForm
          jobId={applyJobId}
          onSubmit={handleApplicationSubmit}
          onClose={() => {
            setShowApplyForm(false);
            setApplyJobId(null);
          }}
        />
      )}
    </div>
  );
};

export default App;
