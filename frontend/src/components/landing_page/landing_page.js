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

  render() {
    return (
      <div className="landing-wrapper">
        <GreetingContainer />
        <div className="landing-content-wrapper">
          <LandingColumnContainer title="Wishlist" jobs={this.getJobsByStage("wishlist")}/>
          <LandingColumnContainer title="Applied" jobs={this.getJobsByStage("applied")}/>
          <LandingColumnContainer title="Interview" jobs={this.getJobsByStage("interview")}/>
          <LandingColumnContainer title="Offer" jobs={this.getJobsByStage("offer")}/>
        </div>
      </div>
    );
  }
}

export default LandingPage;

// samsam