import React from 'react';
import '../../css/landing-page.css';

class LandingCompany extends React.Component {

    constructor(props) {
        super(props);
        this.onIndexClick = this.onIndexClick.bind(this);
    }

    onIndexClick() {
        // console.log(this.props)
        this.props.openModal('job_index_item');
    }

    render() {
        const { backgroundColor, position, company, passDays } = this.props;
        return (
            <div className="landing-company-row" onClick={this.onIndexClick} style={{ backgroundColor }}>
                <div className="landing-company-row-details">
                <div className="landing-company-row-title">{position}</div>
                <div className="landing-company-row-subtitle">{company}</div>
                </div>
                <div className="landing-company-row-footer">
                    {`${passDays}`}
                </div>
            </div>
        );
    }
}

export default LandingCompany;