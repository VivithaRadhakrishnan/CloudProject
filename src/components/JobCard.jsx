// src/components/JobCard.jsx
// JobCard component - Displays a single job card with hover effects and icons

import React, { useState } from 'react';
import { MapPin, DollarSign, Calendar } from 'lucide-react';
import { styles } from '../styles';

const JobCard = ({ job, onClick, onApply }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Debug log to verify data
  console.log('JobCard job:', job);

  return (
    <div
      style={{ ...styles.card, ...(isHovered ? styles.cardHover : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <h3 style={styles.cardTitle}>{job.title || 'No title'}</h3>
      <p style={styles.cardSubtitle}>{job.company || 'No company'}</p>

      <div style={styles.cardDetail}>
        <MapPin size={16} />
        <span>{job.location || 'Not specified'}</span>
      </div>

      <div style={styles.cardDetail}>
        <DollarSign size={16} />
        <span>{job.salary || 'Not specified'}</span>
      </div>

      <div style={styles.cardDetail}>
        <Calendar size={16} />
        <span>Posted: {job.postedDate || 'Not specified'}</span>
      </div>

      <div style={{ marginTop: '1rem' }}>
        {job.skills && job.skills.length > 0 ? (
          job.skills.map((skill, idx) => (
            <span key={idx} style={{ ...styles.badge, ...styles.badgePrimary }}>
              {skill}
            </span>
          ))
        ) : (
          <span style={{ ...styles.badge, ...styles.badgePrimary }}>No skills listed</span>
        )}
      </div>

      {onApply && (
        <button
          style={{ ...styles.button, marginTop: '1rem' }}
          onClick={(e) => {
            e.stopPropagation();
            onApply(job.jobId || job.id); // Use jobId if available, else id
          }}
        >
          Apply Now
        </button>
      )}
    </div>
  );
};

export default JobCard;