import { RECEIVE_JOBS, RECEIVE_USER_JOBS, RECEIVE_NEW_JOB } from '../actions/job_actions';
  
  const JobsReducer = (state = { all: {}, job: {} }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      // case RECEIVE_JOBS:
      //   newState.all = action.jobs.data;
      //   return newState;
      case RECEIVE_USER_JOBS:
        newState.user = action.jobs.data;
        return newState;
      case RECEIVE_NEW_JOB:
        newState.user = [...newState.user, action.job.data];
        return newState;
      default:
        return state;
    }
  };
  
  export default JobsReducer;