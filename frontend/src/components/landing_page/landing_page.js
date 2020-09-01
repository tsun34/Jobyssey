import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import '../../css/landing-page.css';
import LandingColumn from './landing_column';

class LandingPage extends React.Component {

  render() {
    return (
      <div className="landing-wrapper">
        <GreetingContainer />
        <div className="landing-content-wrapper">
            <LandingColumn title="Wishlist" jobNumber={2} />
            <LandingColumn title="Applied" jobNumber={4} />
            <LandingColumn title="Interview" jobNumber={3} />
            <LandingColumn title="Offer" jobNumber={5} />
        </div>
      </div>
    );
  }
}

export default LandingPage;