import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import '../../css/explore-page.css';
import ExploreSearchBar from './explore_search_bar';
import ExploreCompanyList from './explore_company_list';
import { FcSearch } from 'react-icons/fc';
import { MdSettingsVoice } from 'react-icons/md';

class LandingPage extends React.Component {

  render() {
    return (
      <div className="explore-wrapper">
        <GreetingContainer />
        <ExploreSearchBar />
        <ExploreCompanyList />
      </div>
    );
  }
}

export default LandingPage;