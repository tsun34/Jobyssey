import React from 'react';
import '../../css/explore-page.css';
import { getRandomBackgroundColor } from '../../util/general_util';
import { Redirect } from 'react-router-dom';

class ExploreCompanyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectUrl: null,
        };
        this.onCompanyClick = this.onCompanyClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchCompanies();
    }

    onCompanyClick(companyId) {
        this.setState({
            redirectUrl: `/reviews/${companyId}`,
        });
    }

    render() {
        const { redirectUrl } = this.state;
        if (redirectUrl != null && redirectUrl != '') {
            return <Redirect to={redirectUrl}/>;
        }
        const companies = this.props.companies ?? [];
        console.log(companies)
        return (
            <div className="explore-company-container">
                {
                    companies.map(company => 
                        <div style={{backgroundColor: getRandomBackgroundColor()}} className="explore-company-card" onClick={e => this.onCompanyClick(company._id)} key={company._id}>
                            {company.name}
                        </div>
                    )
                }
            </div>
        );
      }
}

export default ExploreCompanyList;