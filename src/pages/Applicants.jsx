import React, { useState, useEffect } from 'react';
import { getApplicants, getJobs } from '../api/api';
import ApplicantRow from '../components/ApplicantRow';
import { styles } from '../styles';

const Applicants = () => {
  const [applicants, setApplicants] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [selectedJobId, setSelectedJobId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apps = await getApplicants();
        const jbs = await getJobs();
        setApplicants(apps);
        setJobs(jbs);
        if (jbs.length > 0) setSelectedJobId(jbs[0].id);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleNotify = (applicant) => {
    // Dummy notification; integrate real notification API later
    alert(`Notification sent to ${applicant.name} at ${applicant.email}`);
  };

  const filteredApplicants = applicants.filter((app) => app.jobId === selectedJobId);
  const selectedJob = jobs.find((job) => job.id === selectedJobId);

  return (
    <div style={styles.container}>
      <h2 style={styles.cardTitle}>Applicants</h2>
      <div style={styles.tabs}>
        {jobs.map((job) => (
          <button
            key={job.id}
            style={selectedJobId === job.id ? { ...styles.tab, ...styles.tabActive } : styles.tab}
            onClick={() => setSelectedJobId(job.id)}
          >
            {job.title} ({applicants.filter((app) => app.jobId === job.id).length})
          </button>
        ))}
      </div>
      {selectedJob ? (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Name</th>
              <th style={styles.tableHeader}>Email</th>
              <th style={styles.tableHeader}>Skills</th>
              <th style={styles.tableHeader}>Match Score</th>
              <th style={styles.tableHeader}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplicants.map((app) => (
              <ApplicantRow
                key={app.id}
                applicant={app}
                jobSkills={selectedJob.skills}
                onNotify={handleNotify}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No jobs available.</p>
      )}
    </div>
  );
};

export default Applicants;