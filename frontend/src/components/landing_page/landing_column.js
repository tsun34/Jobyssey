import React from 'react';
import '../../css/landing-page.css';
import LandingCompanyContainer from './landing_company_container';

class LandingColumn extends React.Component {
    render() {
        const { title, jobNumber } = this.props;
        return (
        <div className="landing-column">
            <div className="landing-column-title">{title}</div>
            <div className="landing-column-subtitle">{`${jobNumber} JOBS`}</div>
            <a className="landing-add-job-block">+</a>
                <LandingCompanyContainer backgroundColor="rgba(10, 180, 87, 0.85)" position="Software Enginner" company="Google" passDays={3} />
                <LandingCompanyContainer backgroundColor="rgba(76, 106, 164, 0.85)" position="Hardware Enginner" company="Facebook" passDays={4} />
                <LandingCompanyContainer backgroundColor="rgba(252, 84, 100, 0.85)" position="QA Enginner" company="Airbnb" passDays={5} />
                <LandingCompanyContainer backgroundColor="#0077b5" position="Product Manager" company="Linkedin" passDays={2} />
        </div>);
    }
}

export default LandingColumn;