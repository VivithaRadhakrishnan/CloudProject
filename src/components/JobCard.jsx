import React from 'react';
import { styles } from '../styles';

const JobCard = ({ job }) => {
  return (
    <div
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
        e.currentTarget.style.transform = styles.cardHover.transform;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = styles.card.boxShadow;
        e.currentTarget.style.transform = 'none';
      }}
    >
      <h3 style={styles.cardTitle}>{job.title}</h3>
      <p style={styles.cardSubtitle}>{job.description}</p>
      <div style={styles.cardDetail}>
        <span>Skills:</span>
        {job.skills.map((skill, index) => (
          <span key={index} style={{ ...styles.badge, ...styles.badgePrimary }}>
            {skill}
          </span>
        ))}
      </div>
      <div style={styles.cardDetail}>Location: {job.location}</div>
      <div style={styles.cardDetail}>Salary: {job.salary}</div>
      <div style={styles.cardDetail}>Applicants: {job.applicantsCount}</div>
    </div>
  );
};

export default JobCard;