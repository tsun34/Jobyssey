import axios from 'axios';

export const getUserJobs = id => {
  return axios.get(`/api/jobs/user/${id}`)
};

export const createJob = data => {
  return axios.post('/api/jobs/', data)
}

export const deleteJob = id => {
  return axios.delete( `/api/jobs/${id}`)
}