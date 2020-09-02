import React from 'react';
import '../../css/landing-page.css';
import LandingCompanyContainer from './landing_company_container';
import { getRandomBackgroundColor } from '../../util/general_util';

class LandingColumn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.currentUserId
        }
    }

    render() {
        const { title, jobs } = this.props;
        return (
        <div className="landing-column">
            <div className="landing-column-title">{title}</div>
            <div className="landing-column-subtitle">{`${jobs.length} JOBS`}</div>
            <a className="landing-add-job-block">+</a>
            {
                jobs.map(job => 
                    <LandingCompanyContainer 
                        backgroundColor={getRandomBackgroundColor()} 
                        position={job.position_name} 
                        company={job.company_name}
                    />)
            }
        </div>);
    }
}

export default LandingColumn;