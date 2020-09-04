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
    return Object.values(this.props.jobs.user || {}).filter(job => job.stage === stage)
  }

  componentDidUpdate(prevProps, _prevState, _snapshot) {
    const prevJobs = prevProps.jobs.user ?? [];
    const jobs = this.props.jobs.user ?? []; 
    if (jobs.length != prevJobs.length) {
      this.props.fetchUserJobs(this.props.currentUserId);
    }
  }

  componentDidMount() {
    this.props.fetchUserJobs(this.props.currentUserId);
  }

  componentDidUpdate(prevProps, _prevState, _snapshot) {
    const prevJobs = prevProps.jobs.user ?? [];
    const jobs = this.props.jobs.user ?? []; 
    if (jobs.length != prevJobs.length) {
      this.props.fetchUserJobs(this.props.currentUserId);
    }
  }

  render() {
    const jobs = this.props.jobs.user ?? [];
    return (
      <div className="landing-wrapper">
        <GreetingContainer />
        <div className="landing-content-wrapper">
          <LandingColumnContainer title="Wishlist" jobs={this.getJobsByStage("wishlist")}/>
          <LandingColumnContainer title="Applied" jobs={this.getJobsByStage("applied")}/>
          <LandingColumnContainer title="Interview" jobs={this.getJobsByStage("interview")}/>
          <LandingColumnContainer title="Decision" jobs={this.getJobsByStage("offer")}/>
        </div>
      </div>
    );
  }
}

export default LandingPage;