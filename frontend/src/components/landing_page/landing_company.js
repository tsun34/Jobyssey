import React from 'react';
import '../../css/landing-page.css';

class LandingCompany extends React.Component {
    render() {
        const { backgroundColor, position, company, passDays } = this.props;
        return (
            <div className="landing-company-row" style={{ backgroundColor }}>
                <div className="landing-company-row-details">
                <div className="landing-company-row-title">{position}</div>
                <div className="landing-company-row-subtitle">{company}</div>
                </div>
                <div className="landing-company-row-footer">
                    {`${passDays}d`}
                </div>
            </div>
        );
    }
}

export default LandingCompany;