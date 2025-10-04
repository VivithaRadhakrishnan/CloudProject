// // src/components/JobDetails.jsx
// // JobDetails component - Modal for job details, fetches if needed but uses passed job

// import React from 'react';
// import { MapPin, DollarSign, Calendar, Users, X } from 'lucide-react';
// import { styles } from '../styles';

// const JobDetails = ({ job, onClose, onApply }) => {
//  if (!job) return null; // Safeguard against undefined job
//     return (
//     <div style={styles.modal}>
//       <div style={styles.modalContent}>
//         <button style={styles.closeButton} onClick={onClose}>
//           <X size={24} />
//         </button>
        
//         <h2 style={styles.cardTitle}>{job.title}</h2>
//         <p style={styles.cardSubtitle}>{job.company}</p>
        
//         <div style={{marginBottom: '1.5rem'}}>
//           <div style={styles.cardDetail}>
//             <MapPin size={16} />
//             <span>{job.location}</span>
//           </div>
          
//           <div style={styles.cardDetail}>
//             <DollarSign size={16} />
//             <span>{job.salary}</span>
//           </div>
          
//           <div style={styles.cardDetail}>
//             <Calendar size={16} />
//             <span>Posted: {job.postedDate}</span>
//           </div>

//           <div style={styles.cardDetail}>
//             <Users size={16} />
//             <span>{job.applicants || 0} applicants</span>
//           </div>
//         </div>

//         <div style={{marginBottom: '1.5rem'}}>
//           <h3 style={{marginBottom: '0.5rem'}}>Required Skills</h3>
//           <div>
//             {job.skills && job.skills.map((skill, idx) => (
//               <span key={idx} style={{...styles.badge, ...styles.badgePrimary}}>
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>

//         <div style={{marginBottom: '1.5rem'}}>
//           <h3 style={{marginBottom: '0.5rem'}}>Job Description</h3>
//           <p style={{color: '#4b5563', lineHeight: '1.6'}}>{job.description}</p>
//         </div>

//         <div style={{marginBottom: '1.5rem'}}>
//           <h3 style={{marginBottom: '0.5rem'}}>Requirements</h3>
//           <ul style={{color: '#4b5563', lineHeight: '1.6'}}>
//             {job.requirements && job.requirements.map((req, idx) => (
//               <li key={idx}>{req}</li>
//             ))}
//           </ul>
//         </div>

//         <button
//           style={{...styles.button, width: '100%'}}
//           onClick={() => onApply(job.jobId || job.id)}
//         >
//           Apply for This Position
//         </button>
//       </div>
//     </div>
//   );
// };

// export default JobDetails;

// src/components/JobDetails.jsx
import React from 'react';
import { X } from 'lucide-react';
import { styles } from '../styles';

const JobDetails = ({ job, onClose }) => {
  if (!job) return null; // Prevent rendering if no job

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <button style={styles.closeButton} onClick={onClose}>
          <X size={24} />
        </button>
        <h2>{job.title}</h2>
        <p><strong>Company:</strong> {job.company}</p>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Salary:</strong> {job.salary}</p>
        <p><strong>Posted:</strong> {job.postedDate}</p>
        <p><strong>Applicants:</strong> {job.applicants}</p>
        <p><strong>Skills:</strong> {job.skills.join(', ')}</p>
        <p><strong>Description:</strong> {job.description}</p>
        <p><strong>Requirements:</strong></p>
        <ul>
          {job.requirements.map((req, index) => <li key={index}>{req}</li>)}
        </ul>
        <p><strong>Match Score:</strong> {job.matchScore}%</p>
      </div>
    </div>
  );
};

export default JobDetails;