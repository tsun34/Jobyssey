import React from 'react';
import '../../css/landing-page.css';
import LandingCompany from './landing_company';

class LandingColumn extends React.Component {
    render() {
        const { title, jobNumber } = this.props;
        return (
        <div className="landing-column">
            <div className="landing-column-title">{title}</div>
            <div className="landing-column-subtitle">{`${jobNumber} JOBS`}</div>
            <a className="landing-add-job-block">+</a>
            <LandingCompany backgroundColor="rgba(10, 180, 87, 0.85)" position="Software Enginner" company="Google" passDays={3} />
            <LandingCompany backgroundColor="rgba(76, 106, 164, 0.85)" position="Hardware Enginner" company="Facebook" passDays={4} />
            <LandingCompany backgroundColor="rgba(252, 84, 100, 0.85)" position="QA Enginner" company="Airbnb" passDays={5} />
            <LandingCompany backgroundColor="#0077b5" position="Product Manager" company="Linkedin" passDays={2} />
        </div>);
    }
}

export default LandingColumn;