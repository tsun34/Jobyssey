import { getUserJobs, createJob, deleteJob, editJob } from '../util/job_api_util';

// export const RECEIVE_JOBS = "RECEIVE_JOBS";
export const RECEIVE_USER_JOBS = "RECEIVE_USER_JOBS";
export const RECEIVE_NEW_JOB = "RECEIVE_NEW_JOB";
export const REMOVE_JOB = 'REMOVE_JOB';
export const EDIT_JOB = 'EDIT_JOB';

export const receiveUserJobs = jobs => ({
  type: RECEIVE_USER_JOBS,
  jobs
});

export const receiveNewJob = job => ({
  type: RECEIVE_NEW_JOB,
  job
});

export const removeJob = job => ({
  type: REMOVE_JOB,
  job
});

export const editExistingJob = job => ({
  type: EDIT_JOB,
  job
});

export const fetchUserJobs = id => dispatch => (
  getUserJobs(id)
    .then(jobs => dispatch(receiveUserJobs(jobs)))
    .catch(err => console.log(err))
);

export const composeJob = data => dispatch => (
  createJob(data)
    .then(job => dispatch(receiveNewJob(job)))
    .catch(err => console.log(err))
);

export const removeUserJob = job => dispatch => (
  deleteJob(job)
    .then(() => dispatch(removeJob(job)))
    .catch(err => console.log(err))
)

export const editUserJob = job => dispatch => (
  editJob(job)
    .then(() => dispatch(editExistingJob(job)))
    .catch(err => console.log(err))
)
