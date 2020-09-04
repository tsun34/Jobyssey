import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import '../../css/landing-page.css';
import LandingColumnContainer from './landing_column_container';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserJobs(this.props.currentUserId)
  }

  getJobsByStage(stage) {
    return Object.values(this.props.jobs.user ?? []).filter(job => job.stage === stage)
<<<<<<< HEAD
  }

  componentDidUpdate(prevProps, _prevState, _snapshot) {
    const prevJobs = prevProps.jobs.user ?? [];
    const jobs = this.props.jobs.user ?? []; 
    if (jobs.length != prevJobs.length) {
      this.props.fetchUserJobs(this.props.currentUserId);
    }
=======
>>>>>>> 0dd1286aeb728fa8c530acf77cd7f4a11ec060e9
  }

  render() {
    return (
      <div className="landing-wrapper">
        <GreetingContainer />
        <div className="landing-content-wrapper">
          <LandingColumnContainer title="Wishlist" jobs={this.getJobsByStage("wishlist")}/>
          <LandingColumnContainer title="Applied" jobs={this.getJobsByStage("applied")}/>
          <LandingColumnContainer title="Interview" jobs={this.getJobsByStage("interviewing")}/>
          <LandingColumnContainer title="Decision" jobs={this.getJobsByStage("decision")}/>
        </div>
      </div>
    );
  }
}

export default LandingPage;