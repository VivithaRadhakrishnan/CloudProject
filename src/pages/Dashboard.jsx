import React, { useState, useEffect } from 'react';
import { getJobs } from '../api/api';
import JobCard from '../components/JobCard';
import { styles } from '../styles';

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getJobs();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.cardTitle}>Posted Jobs</h2>
      <div style={styles.recommendationGrid}>
        {jobs.length > 0 ? (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p>No jobs posted yet.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;