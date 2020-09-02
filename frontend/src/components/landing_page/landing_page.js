import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import '../../css/landing-page.css';
import LandingColumn from './landing_column';

class LandingPage extends React.Component {

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
            <LandingColumn title="Wishlist" jobs={jobs.filter(job => job.stage === 'wishlist')} />
            <LandingColumn title="Applied" jobs={jobs.filter(job => job.stage === 'applied')} />
            <LandingColumn title="Interview" jobs={jobs.filter(job => job.stage === 'interview')} />
            <LandingColumn title="Offer" jobs={jobs.filter(job => job.stage === 'offer')} />
        </div>
      </div>
    );
  }
}

export default LandingPage;