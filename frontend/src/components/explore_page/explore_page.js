import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import '../../css/explore-page.css';
import ExploreSearchBarContainer from './explore_search_bar_container';
import ExploreCompanyListContainer from './explore_company_list_container';

class LandingPage extends React.Component {

  render() {
    return (
      <div className="explore-wrapper">
        <GreetingContainer />
        <ExploreSearchBarContainer />
        <ExploreCompanyListContainer />
      </div>
    );
  }
}

export default LandingPage;