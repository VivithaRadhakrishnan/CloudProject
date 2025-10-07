import React from 'react';
import { styles } from '../styles';

const ApplicantRow = ({ applicant, jobSkills, onNotify }) => {
  // Dummy match score: percentage of job skills matched
  const matchScore = Math.round(
    (applicant.skills.filter((skill) => jobSkills.includes(skill)).length / jobSkills.length) * 100
  ) || 0;

  return (
    <tr>
      <td style={styles.tableCell}>{applicant.name}</td>
      <td style={styles.tableCell}>{applicant.email}</td>
      <td style={styles.tableCell}>
        {applicant.skills.map((skill, index) => (
          <span key={index} style={{ ...styles.badge, ...styles.badgePrimary }}>
            {skill}
          </span>
        ))}
      </td>
      <td style={styles.tableCell}>{matchScore}%</td>
      <td style={styles.tableCell}>
        <button style={styles.button} onClick={() => onNotify(applicant)}>
          Send Notification
        </button>
      </td>
    </tr>
  );
};

export default ApplicantRow;