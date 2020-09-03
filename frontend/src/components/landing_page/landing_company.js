import React from 'react';
import '../../css/landing-page.css';

class LandingCompany extends React.Component {

    constructor(props) {
        super(props);
        this.onIndexClick = this.onIndexClick.bind(this);
    }

    onIndexClick(job) {
        this.props.openModalWithProps('job_index_item', job);
    }

    render() {
        const { job, backgroundColor } = this.props;
        return (
            <div className="landing-company-row" onClick={() => this.onIndexClick(job)} style={{ backgroundColor }}>
                <div className="landing-company-row-details">
                    <div className="landing-company-row-title">{job.position_name}</div>
                    <div className="landing-company-row-subtitle">{job.company_name}</div>
                </div>
            </div>
        );
    }
}

export default LandingCompany;