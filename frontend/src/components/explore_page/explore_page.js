import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import '../../css/explore-page.css';
import { FcSearch } from 'react-icons/fc';
import { MdSettingsVoice } from 'react-icons/md';

class LandingPage extends React.Component {

  render() {
    return (
      <div className="explore-wrapper">
        <GreetingContainer />
        <div className="explore-search-container">
            <FcSearch className="explore-search-icon-left" />
            <input className="explore-search-input" placeholder="Search company..." type="text" />
            <MdSettingsVoice className="explore-search-icon-right" />
        </div>
      </div>
    );
  }
}

export default LandingPage;