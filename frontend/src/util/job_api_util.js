import axios from 'axios';

export const getJobs = () => {
  return axios.get('/api/jobs')
};

export const getUserJobs = id => {
  return axios.get(`/api/jobs/user/${id}`)
};

export const createJob = data => {
  return axios.post('/api/jobs/', data)
}