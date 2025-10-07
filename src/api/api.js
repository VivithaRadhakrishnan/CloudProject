import axios from 'axios';

const API_URL = '/api';

export const getJobs = async () => {
  const response = await axios.get(`${API_URL}/jobs`);
  return response.data;
};

export const postJob = async (jobData) => {
  const response = await axios.post(`${API_URL}/jobs`, jobData);
  return response.data;
};

export const getApplicants = async () => {
  const response = await axios.get(`${API_URL}/applicants`);
  return response.data;
};

// For updating applicantsCount (dummy, as json-server doesn't auto-update)
export const updateJobApplicantsCount = async (jobId, count) => {
  const job = await axios.get(`${API_URL}/jobs/${jobId}`);
  await axios.patch(`${API_URL}/jobs/${jobId}`, { applicantsCount: count });
};