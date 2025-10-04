// src/components/RecommendationList.jsx
// RecommendationList component - Displays grid of recommended jobs, fetches from API

import React from 'react';
import JobCard from './JobCard';
import { Briefcase } from 'lucide-react';
import { styles } from '../styles';

const RecommendationList = ({ jobs, onJobClick, onApply }) => {
  // Debug log to verify data
  console.log('RecommendationList jobs:', jobs);
  
    return (
    <div>
      {jobs.length === 0 ? (
        <div style={{textAlign: 'center', padding: '3rem', color: '#6b7280'}}>
          <Briefcase size={48} style={{margin: '0 auto 1rem'}} />
          <p>Upload your resume to get personalized job recommendations</p>
        </div>
      ) : (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem'}}>
          {jobs.map(job => (
            <JobCard
              key={job.jobId || job.id}
              job={job}
              onClick={() => onJobClick(job.jobId || job.id)}
              onApply={onApply}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendationList;