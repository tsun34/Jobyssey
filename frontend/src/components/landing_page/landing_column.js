import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/landing-page.css';
import LandingCompanyContainer from './landing_company_container';
import { getRandomBackgroundColor } from '../../util/general_util';

class LandingColumn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSortedByDate: false
        }
        this.onCreateJobClick = this.onCreateJobClick.bind(this);
        this.onSortByDateButtonClick = this.onSortByDateButtonClick.bind(this)
    }

    onCreateJobClick(e) {
        e.preventDefault();
        this.props.openModal('create_job');
    }

    onSortByDateButtonClick() {
        this.setState({
            isSortedByDate: !this.state.isSortedByDate
        })
    }

    renderLandingCompanyContainer(job) {
        return <LandingCompanyContainer backgroundColor={getRandomBackgroundColor()} job={job}key={job._id} />
    }

    render() {
        const color = { "Wishlist": "#4285f4", "Applied": "#db4437", "Interview": "#f4b400", "Decision": "#25b871" };
        const date = { "Wishlist": "application deadline", "Applied": "applied date", "Interview": "upcoming interview", "Decision": "date" };   
        const { title, jobs } = this.props;
        return (
        <div className="landing-column">
            <div className="landing-column-title" style={{ backgroundColor: color[title] }}>{title}</div>
            <div className="landing-column-subtitle">{`${jobs.length} JOBS`}</div>
                <p className="landing-column-sort" onClick={this.onSortByDateButtonClick}><i className="fas fa-sort"></i>{this.state.isSortedByDate ? "Sort by default" : "Sort by deadline"}</p>
            { (this.state.isSortedByDate ? 
                [...jobs].sort((a,b) => (a.deadline > b.deadline ) ? 1 : -1) : jobs)
                .map(job => this.renderLandingCompanyContainer(job))}
        </div>);
    }
}

export default LandingColumn;