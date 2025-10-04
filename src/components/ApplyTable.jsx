// src/components/ApplyTable.jsx
// ApplyTable component - Table for all open jobs, fetches from API

import React from 'react';
import { styles } from '../styles';

const ApplyTable = ({ jobs, onApply, onViewDetails }) => {
  // Debug log to verify data
  console.log('ApplyTable jobs:', jobs);

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.tableHeader}>Job Title</th>
          <th style={styles.tableHeader}>Company</th>
          <th style={styles.tableHeader}>Location</th>
          <th style={styles.tableHeader}>Salary</th>
          <th style={styles.tableHeader}>Posted</th>
          <th style={styles.tableHeader}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {!jobs || jobs.length === 0 ? (
          <tr>
            <td colSpan="6" style={styles.tableCell}>
              <p style={{ textAlign: 'center', color: '#6b7280' }}>No jobs available.</p>
            </td>
          </tr>
        ) : (
          jobs.map((job) => (
            <tr key={job.jobId || job.id}>
              <td style={styles.tableCell}>
                <strong>{job.title || 'No title'}</strong>
              </td>
              <td style={styles.tableCell}>{job.company || 'No company'}</td>
              <td style={styles.tableCell}>{job.location || 'Not specified'}</td>
              <td style={styles.tableCell}>{job.salary || 'Not specified'}</td>
              <td style={styles.tableCell}>{job.postedDate || 'Not specified'}</td>
              <td style={styles.tableCell}>
                <button
                  style={{ ...styles.button, marginRight: '0.5rem', padding: '0.5rem 1rem' }}
                  onClick={() => onViewDetails(job.jobId || job.id)}
                >
                  View
                </button>
                <button
                  style={{ ...styles.button, padding: '0.5rem 1rem' }}
                  onClick={() => onApply(job.jobId || job.id)}
                >
                  Apply
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default ApplyTable;