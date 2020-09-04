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
        const { job } = this.props;
        return (
            <div className="landing-company-row" onClick={() => this.onIndexClick(job)} >
                <div>
                    <div className="landing-company-row-title">{job.position_name}</div>
                    <div className="landing-company-row-subtitle">{job.company_name}</div>
                </div>
                <i className="fas fa-angle-double-right"></i>
            </div>
        );
    }
}

export default LandingCompany;