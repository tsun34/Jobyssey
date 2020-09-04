import { RECEIVE_USER_JOBS, RECEIVE_NEW_JOB, REMOVE_JOB, EDIT_JOB } from '../actions/job_actions';
  
  const JobsReducer = (state = { all: {}, job: {} }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_USER_JOBS:
        newState.user = action.jobs.data;
        return newState;
      case RECEIVE_NEW_JOB:
        newState.user = [...newState.user, action.job.data];
        return newState;
      case REMOVE_JOB:
        newState.user.map((job, idx) => {
          if (job._id === action.job) {
            delete newState.user[idx]
          }
        });
        return newState;
      case EDIT_JOB:
        newState.user[action.job] = action.job.data;
        return newState;
      default:
        return state;
    }
  };
  
  export default JobsReducer;