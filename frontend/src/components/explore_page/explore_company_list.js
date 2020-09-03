import React from 'react';
import '../../css/explore-page.css';
import { getRandomBackgroundColor } from '../../util/general_util';

class ExploreCompanyList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCompanies();
    }

    render() {
        const companies = this.props.companies ?? [];
        return (
            <div className="explore-company-container">
                {
                    companies.map(company => 
                        <div style={{backgroundColor: getRandomBackgroundColor()}} className="explore-company-card">
                            {company.name}
                        </div>)
                }
            </div>
        );
      }
}

export default ExploreCompanyList;