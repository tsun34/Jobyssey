import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/landing-page.css';
import LandingCompanyContainer from './landing_company_container';
import { getRandomBackgroundColor } from '../../util/general_util';

class LandingColumn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.currentUserId
        }
        this.onCreateJobClick = this.onCreateJobClick.bind(this);
    }

    onCreateJobClick(e) {
        e.preventDefault();
        this.props.openModal('create_job');
    }

    render() {
        const { title, jobs } = this.props;
        const color = {"Wishlist":"#4285f4", "Applied": "#db4437", "Interview": "#f4b400", "Decision": "#25b871"};
        const date = { "Wishlist": "application deadline", "Applied": "applied date", "Interview": "upcoming interview", "Decision": "date" };   

        return (
        <div className="landing-column">
            <div className="landing-column-title" style={{backgroundColor: color[title]}}>{title}</div>
            <div className="landing-column-subtitle">{`${jobs.length} JOBS`}</div>
            <p className="landing-column-sort"><i className="fas fa-sort"></i>{` sort by ${date[title]}`}</p>
            {
                jobs.map(job => 
                    <LandingCompanyContainer 
                    backgroundColor={getRandomBackgroundColor()} 
                    job={job}
                    key={job._id}
                    />)
            }
                <Link className="landing-add-job-block" onClick={this.onCreateJobClick}>+</Link>
        </div>);
    }
}

export default LandingColumn;